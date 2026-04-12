#!/usr/bin/env node
// Expand top blog articles using Gemini Flash API
// Inserts FAQ + additional content before the final CTA section

const fs = require('fs');
const path = require('path');

const GEMINI_KEY = 'AIzaSyChyppwhC8bYxNqHzBGR5w8EX3nISR7wi0';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`;

const ARTICLES = [
  'college-debt-not-worth-it.js',
  'why-college-is-not-worth-it.js',
  'six-figure-jobs-without-college-degree.js',
  'coding-bootcamp-worth-it-2026.js',
  'best-trade-schools-in-america-2026.js',
  'college-is-a-waste-of-money.js',
  'trade-school-salary-vs-college-2026.js',
  'student-loan-debt-crisis-2026.js',
  'highest-paying-jobs-no-degree-required-2026.js',
  'computer-science-degree-worth-it-2026.js',
];

const BLOG_DIR = path.join(__dirname, '..', 'pages', 'blog');

function extractTextContent(jsxContent) {
  // Strip JSX tags to get plain text for context
  return jsxContent
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&middot;/g, '.')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractTitle(jsxContent) {
  const match = jsxContent.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (match) {
    return match[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  }
  const keywordMatch = jsxContent.match(/\/\/ keyword: (.+)/);
  return keywordMatch ? keywordMatch[1] : 'college alternatives';
}

function extractExistingH2s(jsxContent) {
  const matches = [...jsxContent.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)];
  return matches.map(m => m[1].replace(/<[^>]*>/g, '').trim());
}

async function callGemini(prompt) {
  const res = await fetch(GEMINI_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini API error ${res.status}: ${err}`);
  }
  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('No text in Gemini response');
  return text;
}

function markdownToJSX(markdown) {
  // Convert markdown FAQ output to JSX sections
  let jsx = '';
  const lines = markdown.split('\n');
  let currentSection = null;
  let currentContent = [];

  function flushSection() {
    if (currentSection && currentContent.length > 0) {
      const content = currentContent.join('\n\n')
        .replace(/'/g, "&apos;")
        .replace(/"/g, "&quot;")
        .replace(/&(?!apos;|quot;|amp;|lt;|gt;|middot;|#)/g, "&amp;")
        .trim();
      jsx += `
        <section className="mb-10">
          <h2 className="text-2xl font-black text-white mb-4">${currentSection.replace(/'/g, "&apos;").replace(/"/g, "&quot;")}</h2>
          <p className="text-slate-300 leading-relaxed">${content}</p>
        </section>
        \n`;
      currentContent = [];
    }
  }

  for (const line of lines) {
    const h2Match = line.match(/^##\s+(.+)/);
    const h3Match = line.match(/^###\s+(.+)/);

    if (h2Match) {
      flushSection();
      currentSection = h2Match[1].replace(/\*\*/g, '');
    } else if (h3Match) {
      // Treat h3 as bold text within current section
      currentContent.push(`**${h3Match[1].replace(/\*\*/g, '')}**`);
    } else if (line.trim()) {
      // Clean up markdown formatting
      let cleaned = line
        .replace(/^\*\*Q:\s*/i, '**Q: ')
        .replace(/^\*\*A:\s*/i, '**A: ')
        .replace(/^[-*]\s+/, '- ');
      currentContent.push(cleaned);
    }
  }
  flushSection();

  return jsx;
}

async function expandArticle(filename) {
  const filepath = path.join(BLOG_DIR, filename);
  const content = fs.readFileSync(filepath, 'utf-8');

  const title = extractTitle(content);
  const existingH2s = extractExistingH2s(content);
  const plainText = extractTextContent(content);
  // Take first 2000 chars for context
  const context = plainText.substring(0, 2000);

  console.log(`\nProcessing: ${filename}`);
  console.log(`  Title: ${title}`);
  console.log(`  Existing sections: ${existingH2s.join(', ')}`);

  const prompt = `You are writing additional content for a blog article on ihatecollege.com titled "${title}".

The article already has these sections: ${existingH2s.join(', ')}

Here is the beginning of the article for context:
${context}

TASK: Generate ADDITIONAL content to expand this article. Do NOT repeat or paraphrase content that already exists. Create NEW, valuable content.

Generate exactly these sections in markdown format:

## Frequently Asked Questions
Write 5-6 Q&A pairs specific to this topic. Format each as:
**Q: [question]**
**A: [detailed answer, 2-3 sentences with specific data points or actionable advice]**

## What To Do Instead: Specific Alternatives That Pay
Write 4-5 specific alternatives to the traditional college path that are relevant to this article's topic. For each, include: what it is, typical cost, expected salary range, and timeline to start earning. Be specific with numbers and programs. Do NOT just list generic alternatives - tailor them to the article topic.

RULES:
- Total output should be 500-800 words
- Use specific data, numbers, statistics (you can reference BLS, Federal Reserve, industry sources)
- Write in a direct, data-driven, slightly confrontational tone matching the site
- Do NOT use flowery language, do NOT start with "In today's..." or similar filler
- Use &apos; instead of apostrophes in contractions
- Do NOT include any JSX, HTML tags, or code - just plain markdown
- Do NOT repeat information already covered in the existing sections listed above`;

  const geminiOutput = await callGemini(prompt);
  console.log(`  Gemini response: ${geminiOutput.length} chars`);

  // Convert to JSX
  const newJSX = markdownToJSX(geminiOutput);

  // Find insertion point: before the final AdUnit after "The Bottom Line"
  // Pattern: find the last occurrence of </section> followed by whitespace and <AdUnit
  // which precedes the CTA div
  const insertionPattern = /(<\/section>\s*\n\s*<AdUnit slot="6600722153" \/>\s*\n\s*<div className="mt-12)/;
  const match = content.match(insertionPattern);

  if (!match) {
    // Fallback: insert before the CTA div
    const ctaPattern = /(\s*<AdUnit slot="6600722153" \/>\s*\n\s*<div className="mt-12 p-6 rounded-2xl text-center")/;
    const ctaMatch = content.match(ctaPattern);
    if (!ctaMatch) {
      console.log(`  WARNING: Could not find insertion point in ${filename}, skipping`);
      return false;
    }
    const insertPos = content.indexOf(ctaMatch[0]);
    const newContent = content.substring(0, insertPos) + '\n' + newJSX + '\n        ' + ctaMatch[0].trimStart() + content.substring(insertPos + ctaMatch[0].length);
    fs.writeFileSync(filepath, newContent, 'utf-8');
    console.log(`  Inserted via fallback pattern`);
    return true;
  }

  const insertPos = content.indexOf(match[0]);
  const beforeInsert = content.substring(0, insertPos + '</section>'.length);
  const afterInsert = content.substring(insertPos + '</section>'.length);

  // Insert new sections with AdUnit between them
  const newContent = beforeInsert + '\n        <AdUnit slot="6600722153" />\n' + newJSX + afterInsert;
  fs.writeFileSync(filepath, newContent, 'utf-8');
  console.log(`  SUCCESS: Inserted new content`);
  return true;
}

async function main() {
  console.log('=== Expanding Top 10 Blog Articles with Gemini Flash ===\n');

  let successCount = 0;
  for (const article of ARTICLES) {
    try {
      const result = await expandArticle(article);
      if (result) successCount++;
      // Small delay to avoid rate limiting
      await new Promise(r => setTimeout(r, 1500));
    } catch (err) {
      console.error(`  ERROR on ${article}: ${err.message}`);
    }
  }

  console.log(`\n=== Done: ${successCount}/${ARTICLES.length} articles expanded ===`);
}

main().catch(console.error);

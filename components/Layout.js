export const metadata = {
  title: "IHateCollege.com",
  description: "College is optional. Debt isn't.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

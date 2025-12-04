export default function handler(req, res) {
  console.log("Rating received:", req.body);
  return res.status(200).json({ ok: true });
}

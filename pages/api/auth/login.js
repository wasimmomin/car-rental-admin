import { createSession } from '../../../lib/auth';
import db from '../../../lib/db';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body;
  const user = db.users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  createSession(res, {
    id: user.id,
    email: user.email,
    role: user.role
  });

  res.status(200).json({ success: true });
}
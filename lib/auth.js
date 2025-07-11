import db from './db';
import { serialize, parse } from 'cookie';

export function login(email, password) {
  const user = db.users.find(u => u.email === email && u.password === password);
  if (!user) return null;
  
  return {
    id: user.id,
    email: user.email,
    role: user.role
  };
}

export function createSession(res, user) {
  const session = JSON.stringify(user);
  res.setHeader('Set-Cookie', serialize('auth', session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
  }));
}

export function getSession(req) {
  const cookies = parse(req.headers.cookie || '');
  if (!cookies.auth) return null;
  return JSON.parse(cookies.auth);
}

export function destroySession(res) {
  res.setHeader('Set-Cookie', serialize('auth', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    expires: new Date(0),
    path: '/',
  }));
}
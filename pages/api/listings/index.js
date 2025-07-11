import db from '../../../lib/db';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const listings = db.listings;
    res.status(200).json(listings);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
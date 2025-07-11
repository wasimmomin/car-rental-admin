import db from '../../../lib/db';
import { getSession } from '../../../lib/auth';

export default function handler(req, res) {
  const session = getSession(req);
  
  if (!session || session.role !== 'admin') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { id } = req.query;

  try {
    if (req.method === 'GET') {
      const listing = db.findListingById(id);
      if (!listing) {
        return res.status(404).json({ error: 'Listing not found' });
      }
      return res.status(200).json(listing);
    }

    if (req.method === 'PUT') {
      const listing = db.findListingById(id);
      if (!listing) {
        return res.status(404).json({ error: 'Listing not found' });
      }

      const updatedListing = db.updateListing(id, req.body);
      return res.status(200).json(updatedListing);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
import { useState } from 'react';
import Layout from '../components/Layout';
import ListingTable from '../components/ListingTable';
import { getSession } from '../lib/auth';
import Notification from '../components/Notification';

export default function Dashboard({ initialListings }) {
  const [listings, setListings] = useState(initialListings);
  const [notification, setNotification] = useState(null);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await fetch(`/api/listings/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) throw new Error('Failed to update status');
      
      const updatedListing = await response.json();
      setListings(listings.map(l => l.id === updatedListing.id ? updatedListing : l));
      
      setNotification({
        type: 'success',
        message: `Listing ${newStatus} successfully!`
      });
    } catch (error) {
      setNotification({
        type: 'error',
        message: error.message || 'Failed to update status'
      });
    }
  };

  return (
    <Layout title="Admin Dashboard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Car Rental Listings</h1>
        
        {notification && (
          <Notification 
            type={notification.type} 
            message={notification.message}
            onClose={() => setNotification(null)}
          />
        )}
        
        <ListingTable 
          listings={listings} 
          onStatusChange={handleStatusChange}
        />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const session = getSession(context.req);
  if (!session || session.role === '') {
    return {
      redirect: { destination: '/', permanent: false },
    };
  }

  // Use absolute URL for server-side calls
  const protocol = context.req.headers['x-forwarded-proto'] || 'http';
  const host = context.req.headers.host;
  const apiUrl = `${protocol}://${host}`;

  const res = await fetch(`${apiUrl}/api/listings`);
  const initialListings = await res.json();

  return { props: { initialListings } };
}
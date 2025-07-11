import Header from './Header';

export default function Layout({ children, title }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        {children}
      </main>
      <footer className="bg-gray-100 py-4 text-center text-gray-600">
        © {new Date().getFullYear()} Car Rental Admin
      </footer>
    </div>
  );
}
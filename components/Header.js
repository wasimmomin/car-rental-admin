import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';


export default function Header() {
  const router = useRouter();
  const isLandingPage = router.pathname === '/';

  return (
    <>
      <Head>
        <title>Car Rental Admin</title>
      </Head>
    
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href={isLandingPage ?  "/" :"/dashboard"} className="text-xl font-bold hover:text-blue-200 transition">
            Car Rental Admin
          </Link>
            <nav className="flex space-x-6">
              {!isLandingPage && (
                <>
                  <Link href="/dashboard" className="hover:text-blue-200 transition">
                    Dashboard
                  </Link>
                  <Link href="/" className="hover:text-blue-200 transition">
                    Logout
                  </Link>
                </>
              )}
            </nav>
        </div>
      </header>
    </>
  );
}
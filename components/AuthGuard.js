import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSession } from '../lib/auth';

export function AuthGuard({ children }) {
  const router = useRouter();
  
  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch('/api/auth/check');
      const { authenticated } = await res.json();
      
      if (!authenticated) {
        router.push('/login?redirect=' + encodeURIComponent(router.asPath));
      }
    };
    
    checkAuth();
  }, [router]);

  return children;
}
'use client';

import Shell from '@/components/shells/Shell'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/shopping/orders');
  }, []);
  return (
   <div className=' w-full h-full'>
    <Shell />
   </div>
  )
}

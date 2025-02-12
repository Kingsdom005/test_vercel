"use client"
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [count, setCount] = useState(0);
  const pathname = usePathname()
  return (
    <div className="border-2 border-dashed border-gray-200 rounded-md p-4 w-1/2 mx-auto mt-4">
      <div className="flex gap-4 font-bold text-lg mb-4 text-purple-600">
        <Link className={pathname === '/dashboard/about'? 'text-pink-600' : ''} href="/dashboard/about">About</Link>
        <Link className={pathname === '/dashboard/settings'? 'text-pink-600' : ''} href="/dashboard/settings">Settings</Link>
      </div>
      <h2>Dashboard Layout {count}</h2>
      <button className="bg-black text-white px-4 py-2 rounded-md mt-4" onClick={() => setCount(count + 1)}>Increment</button>
      {children}
      <div className='center py-4'>Current Pathname: {pathname}</div>
    </div>
  );
}
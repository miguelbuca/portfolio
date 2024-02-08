import { nav } from '@/utils';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center md:items-start md:justify-start md:flex-row py-6 border-t border-black/[0.06] dark:border-white/[0.06]'>
      <div className='flex-1'>
        <nav className='flex flex-row'>
          <ul className='flex flex-row items-center justify-center px-1'>
            {nav.map(({ name, href }, index) =>
            (<li className='flex pr-[.75rem]' key={index}>
              <Link href={href}>
                <small className='flex-1 hover:text-yellow-500 transition-all whitespace-nowrap text-xs'>
                  {name}
                </small>
              </Link>
            </li>)
            )}
          </ul>
        </nav>
      </div>
      <div>
       <span className='text-xs opacity-50'>
       © {new Date().getFullYear()} Miguel Buca. All rights reserved.
       </span>
      </div>
    </div>
  )
}
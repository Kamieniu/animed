import Link from 'next/link';
import { ROUTING } from '@config/routing';
import { createElement } from 'react';

export default function MobileNavigation() {
  return (
    <aside className="md:hidden fixed bottom-0 w-full grid grid-cols-4 bg-white py-4 border-t border-gray-100 shadow">
      {ROUTING.map((route, index) => (
        <Link href={route.href} key={index}>
          <div className="flex flex-col items-center">
            {createElement(route.icon)}
          </div>
        </Link>
      ))}
    </aside>
  );
}

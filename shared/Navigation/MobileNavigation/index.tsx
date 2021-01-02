import Link from 'next/link';
import { ROUTING } from '@config/routing';
import { createElement } from 'react';

export default function MobileNavigation() {
  return (
    <aside className="md:hidden fixed bottom-0 w-full grid grid-cols-4 gap-8 bg-white py-4 border-t border-gray-100 shadow px-4">
      {ROUTING.map(({ label, icon, isMobile, href }, index) => {
        const className = isMobile
          ? 'absolute left-0 right-0 -top-8 bg-green-400 w-14 h-14 mx-auto rounded-full justify-center text-white'
          : '';

        return (
          <Link href={href} key={index}>
            <div className={'flex flex-col items-center ' + className}>
              {createElement(icon)}
            </div>
          </Link>
        );
      })}
    </aside>
  );
}

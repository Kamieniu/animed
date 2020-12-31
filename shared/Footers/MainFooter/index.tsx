import { ROUTING } from '@config/routing';
import Link from 'next/link';
import { Facebook } from 'react-feather';

export default function MainFooter() {
  return (
    <footer className="flex w-full border-t border-gray-50 py-10">
      <div className="content grid grid-cols-2 md:grid-cols-3 gap-4 ">
        <div className="flex flex-col">
          <span className="text-sm mb-3">Nasze godziny pracy</span>
          <span className="text-xs mb-2">Pon - Pt: 8:00 - 19:00</span>
          <span className="text-xs mb-2">Sb: 8:00 - 12:00</span>
          <span className="text-xs mb-2">Nd: 10:00 - 12:00</span>
        </div>

        <div className="hidden md:flex flex-col">
          {ROUTING.map((route, index) => (
            <Link href={route.href} key={index}>
              <a>{route.label}</a>
            </Link>
          ))}
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-end">
            <Facebook />{' '}
            <span className="hidden md:block">Śledź nas na Facebook'u</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

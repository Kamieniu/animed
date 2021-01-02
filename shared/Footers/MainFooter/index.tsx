import { ROUTING } from '@config/routing';
import Link from 'next/link';
import { Facebook, Phone } from 'react-feather';

export default function MainFooter() {
  return (
    <footer className="flex w-full border-t border-gray-50 py-20">
      <div className="content grid grid-cols-2 md:grid-cols-3 gap-4 ">
        <div className="flex flex-col">
          <span className="text-sm font-bold mb-3">Nasze godziny pracy</span>
          <span className="text-xs font-light mb-2">
            Pon - Pt: 8:00 - 19:00
          </span>
          <span className="text-xs font-light mb-2">Sb: 8:00 - 12:00</span>
          <span className="text-xs font-light mb-2">Nd: 10:00 - 12:00</span>
        </div>

        <div className="hidden md:flex flex-col">
          {ROUTING.map((route, index) => (
            <Link href={route.href} key={index}>
              <a className="font-light text-sm mb-2">{route.label}</a>
            </Link>
          ))}
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-end ">
            <a href="tel:608242920" className="mr-4" target="_blank">
              <Phone className="hover:text-green-400 duration-300 cursor-pointer" />
            </a>

            <a
              href="https://www.facebook.com/AnimedGabinetWeterynaryjny"
              target="_blank"
            >
              <Facebook className="hover:text-blue-400 duration-300 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

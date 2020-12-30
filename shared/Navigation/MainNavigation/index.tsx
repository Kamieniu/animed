import Link from 'next/link';
import { ROUTING } from '@config/routing';

type Navigation = {
  label: string;
  href: string;
};

export default function MainNavigation() {
  return (
    <nav className="hidden md:flex">
      {ROUTING.map((link: Navigation, index: number) => (
        <Link key={index} href={link.href}>
          <a className="ml-4 text-black">{link.label}</a>
        </Link>
      ))}
    </nav>
  );
}

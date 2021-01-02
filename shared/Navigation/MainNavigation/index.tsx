import Link from 'next/link';
import { Navigation, ROUTING } from '@config/routing';
import ActiveLink from '../../../utils/ActiveLink';

export default function MainNavigation() {
  return (
    <nav className="hidden md:flex">
      {ROUTING.map(
        ({ isMobile, href, label }: Navigation, index: number) =>
          !isMobile && (
            <ActiveLink key={index} href={href} activeClassName="text-blue-400">
              <a className="ml-4 hover:text-blue-400 duration-300 text-blue-200">
                {label}
              </a>
            </ActiveLink>
          ),
      )}
    </nav>
  );
}

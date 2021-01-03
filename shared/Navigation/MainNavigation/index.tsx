import { Navigation, ROUTING } from '@config/routing';
import ActiveLink from '../../../utils/ActiveLink';

export default function MainNavigation() {
  return (
    <nav className="hidden md:flex">
      {ROUTING.map(
        ({ isMobile, href, label }: Navigation, index: number) =>
          !isMobile && (
            <ActiveLink key={index} href={href} activeClassName="font-bold">
              <a className="ml-4 font-light hover:font-bold duration-300 text-white">
                {label}
              </a>
            </ActiveLink>
          ),
      )}
    </nav>
  );
}

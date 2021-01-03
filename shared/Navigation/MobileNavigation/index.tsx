import { ROUTING } from '@config/routing';
import { createElement } from 'react';
import ActiveLink from '../../../utils/ActiveLink';

export default function MobileNavigation() {
  return (
    <aside className="md:hidden fixed z-50 bottom-0 w-full grid grid-cols-5 gap-4 items-center bg-white border-t border-gray-100 shadow px-2">
      {ROUTING.map(({ label, icon, isMobile, href }, index) => {
        const className = isMobile
          ? 'relative left-0 right-0 -top-8 bg-green-400 w-14 h-14 mx-auto rounded-full justify-center text-white'
          : 'opacity-60 text-primary';

        return (
          <ActiveLink href={href} key={index} activeClassName="opacity-100">
            <div className={'flex flex-col items-center ' + className}>
              {createElement(icon)}
            </div>
          </ActiveLink>
        );
      })}
    </aside>
  );
}

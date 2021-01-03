import MainNavigation from '../../Navigation/MainNavigation';
import { ReactElement, ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  children: ReactNode;
  imageUrl?: string;
  fullScreen?: boolean;
};

export default function MainHeader({
  children,
  imageUrl,
  fullScreen = true,
}: Props): ReactElement {
  const defaultImageUrl = imageUrl
    ? imageUrl
    : 'https://images.unsplash.com/photo-1514373941175-0a141072bbc8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1651&q=80';

  const fullScreenStyles = fullScreen ? 'h-screen' : 'h-banner';

  return (
    <header className="relative">
      <div className="absolute content z-40 w-full left-0 right-0 top-0 py-8 flex justify-between items-start">
        <Link href="/">
          <figure className="w-40 cursor-pointer">
            <img className="w-full" src="/assets/logo_white.svg" alt="" />
          </figure>
        </Link>
        <MainNavigation />
      </div>

      <figure className={'z-30 relative w-screen ' + fullScreenStyles}>
        <div className="bg-gray-800 opacity-30 absolute z-20 w-full h-full" />
        <img
          className="absolute w-full top-0 left-0 object-cover h-full"
          src={defaultImageUrl}
          alt=""
        />
        {children}
      </figure>
    </header>
  );
}

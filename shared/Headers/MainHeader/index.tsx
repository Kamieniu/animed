import MainNavigation from '../../Navigation/MainNavigation';
import { ReactElement, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function MainHeader({ children }: Props): ReactElement {
  return (
    <header className="relative ">
      <div className="absolute content z-40 w-full left-0 right-0 top-0 py-4 flex justify-between items-center">
        <h1 className="text-black">Animed</h1>
        <MainNavigation />
      </div>

      <figure className="z-30 h-banner relative overflow-hidden w-screen">
        <div className="bg-gradient-to-t absolute from-gray-100 via-transparent z-20 to-transparent w-full h-full" />
        <img
          className="absolute w-full h-full top-0 left-0 object-cover"
          src="https://images.unsplash.com/photo-1536961229726-d383212033cb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1755&q=80"
          alt=""
        />
        {children}
      </figure>
    </header>
  );
}

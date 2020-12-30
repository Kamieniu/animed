import MainNavigation from '../../Navigation/MainNavigation';
import { ReactElement } from 'react';

type Props = {};

export default function MainHeader({}: Props): ReactElement {
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

        <article className="absolute w-full h-full z-30 top-0 left-0 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl max-w-lg text-white text-center">
              Long headline to turn your visitors into users
            </h1>
            <span className="mt-10 text-white">Lorem ipsum</span>
          </div>
        </article>
      </figure>
    </header>
  );
}

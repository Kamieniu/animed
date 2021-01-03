import Link from 'next/link';

import MainHeader from '@shared/Headers/MainHeader';
import OurServices from './components/OurServices';
import OurTeam from './components/OurTeam';
import NewsFeed from './components/NewsFeed';
import MainFooter from '@shared/Footers/MainFooter';
import CopyrightFooter from '@shared/Footers/CopyrightFooter';
import MobileNavigation from '@shared/Navigation/MobileNavigation';
import { ROUTING } from '@config/routing';

export default function Home() {
  return (
    <>
      <MainHeader>
        <article className="absolute content h-full z-30 top-0 left-0 right-0 flex justify-start items-center">
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl max-w-2xl text-white leading-normal">
              Zdrowie Twojego zwierzaka jest dla nas Najważniejsze.
            </h1>

            <Link href={ROUTING[2].href}>
              <div>
                <button className="border-2 px-4 py-2 border-white focis:outline-none bg-transparent hover:bg-white hover:text-black duration-300 text-white font-medium mt-6">
                  Umów się na wizytę
                </button>
              </div>
            </Link>
          </div>
        </article>
      </MainHeader>

      <main className="content">
        <OurServices />
        <OurTeam />
        <NewsFeed />
      </main>
      <MainFooter />
      <CopyrightFooter />
      <MobileNavigation />
    </>
  );
}

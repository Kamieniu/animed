import MainHeader from '@shared/Headers/MainHeader';
import OurServices from './components/OurServices';
import OurTeam from './components/OurTeam';
import NewsFeed from './components/NewsFeed';
import MainFooter from '@shared/Footers/MainFooter';
import CopyrightFooter from '@shared/Footers/CopyrightFooter';
import MobileNavigation from '@shared/Navigation/MobileNavigation';

export default function Home() {
  return (
    <>
      <MainHeader>
        <article className="absolute content h-full z-30 top-0 left-0 right-0 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl max-w-lg text-white text-center">
              Long headline to turn your visitors into users
            </h1>
            <span className="mt-10 text-white">Lorem ipsum</span>
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

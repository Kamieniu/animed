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
      <MainHeader />

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

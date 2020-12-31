import MainHeader from '@shared/Headers/MainHeader';
import AboutUsContext from './components/AboutUsContext';
import { getAboutUsContext } from '@repository/AboutUs.repository';
import Gallery from './components/Gallery';
import MobileNavigation from '@shared/Navigation/MobileNavigation';
import MainFooter from '@shared/Footers/MainFooter';
import CopyrightFooter from '@shared/Footers/CopyrightFooter';

export default function AboutUs() {
  const { loading, data, error } = getAboutUsContext();

  return (
    <>
      <MainHeader>
        <article className="absolute content h-full z-30 top-0 left-0 right-0 flex justify-start items-end">
          <div className="flex flex-col items-center pb-10">
            <h1 className="text-5xl max-w-lg text-white text-center">O Nas</h1>
          </div>
        </article>
      </MainHeader>
      <main className="content">
        {!loading && (
          <>
            <AboutUsContext markdown={data.aboutuses[0].context.markdown} />
            <Gallery />
          </>
        )}
      </main>
      <MainFooter />
      <CopyrightFooter />
      <MobileNavigation />
    </>
  );
}

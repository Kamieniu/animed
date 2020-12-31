import MainHeader from '@shared/Headers/MainHeader';
import ServicesGrid from '@shared/ServicesGrid';
import { getAllServices } from '@repository/Service.repository';
import MainFooter from '@shared/Footers/MainFooter';
import CopyrightFooter from '@shared/Footers/CopyrightFooter';
import MobileNavigation from '@shared/Navigation/MobileNavigation';

export default function OurServices() {
  const { loading, data, error } = getAllServices();

  return (
    <>
      <MainHeader>
        <article className="absolute content h-full z-30 top-0 left-0 right-0 flex justify-start items-end">
          <div className="flex flex-col items-center pb-10">
            <h1 className="text-5xl max-w-lg text-white text-center">Usługi</h1>
          </div>
        </article>
      </MainHeader>
      <main className="content">
        {!loading && (
          <section className="flex mt-10">
            <ServicesGrid services={data.services} />
          </section>
        )}
      </main>
      <MainFooter />
      <CopyrightFooter />
      <MobileNavigation />
    </>
  );
}

import ServicesGrid from '@shared/ServicesGrid';
import { getCommonServices } from '@repository/Service.repository';

export default function OurServices() {
  const { loading, data, error } = getCommonServices();

  return (
    <section className="flex flex-col py-40">
      <h2 className="text-2xl mb-10 font-bold">Usługi</h2>

      {!loading && <ServicesGrid services={data.services} />}
    </section>
  );
}

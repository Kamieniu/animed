import { Service } from '@models/Service';

export type Props = {
  services: Array<Service>;
};

export default function ServicesGrid({ services }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-5 pt-20 pb-10">
      {services.map((service, index) => (
        <div className="flex flex-col" key={index}>
          <h4 className="mb-2 text-lg">{service.title}</h4>
          <p className="text-sm">{service.context.text}</p>
        </div>
      ))}
    </div>
  );
}

import { Service } from '@models/Service';

export type Props = {
  services: Array<Service>;
};

export default function ServicesGrid({ services }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-5 pb-10">
      {services.map((service, index) => (
        <div className="flex flex-col" key={index}>
          <h4 className="mb-2 text-lg font-normal text-primary opacity-85">
            {service.title}
          </h4>
          <p className="text-sm font-light text-primary opacity-50">
            {service.context.text}
          </p>
        </div>
      ))}
    </div>
  );
}

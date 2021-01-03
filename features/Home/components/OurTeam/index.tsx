import { getAllDoctors } from '@repository/Doctor.repository';

export default function OurTeam() {
  const { loading, data, error } = getAllDoctors();

  console.log(data);

  return (
    <section className="flex flex-col">
      <h2 className="text-2xl mb-10 text-primary opacity-85">Nasz Zespół</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4">
        {!loading &&
          data.doctors.map((person, index) => (
            <div className="flex flex-col" key={index}>
              <div className="w-full">
                <figure className="overflow-hidden h-60 md:h-40">
                  <img className="object-cover" src={person.image.url} alt="" />
                </figure>

                <h6 className="mt-4">
                  <span className="font-light text-primary mr-1 text-sm">
                    {person.title}
                  </span>
                  <span className="font-bold text-primary">
                    {person.fullName}
                  </span>
                </h6>
                <article className="">
                  <span className="font-light text-primary mr-1 text-sm">
                    Specjalizacja:
                  </span>
                  <span className="font-bold text-primary opacity-85">
                    {person.specialization}
                  </span>
                </article>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

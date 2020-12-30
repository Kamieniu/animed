import { getAllDoctors } from '@repository/Doctor.repository';

export default function OurTeam() {
  const { loading, data, error } = getAllDoctors();

  console.log(data);

  return (
    <section className="flex flex-col">
      <h2 className="text-2xl mb-10">Nasz Zespół</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4">
        {!loading &&
          data.doctors.map((person, index) => (
            <div className="flex flex-col" key={index}>
              <div className="w-full">
                <figure className="overflow-hidden h-60 md:h-40">
                  <img className="object-cover" src={person.image.url} alt="" />
                </figure>

                <h6 className="mt-4 text-base">
                  {person.title} {person.fullName}
                </h6>
                <span className="text-sm">
                  Specjalizacja: {person.specialization}
                </span>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

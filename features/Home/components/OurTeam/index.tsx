type Person = {
  fullName: string;
  specialisation: string;
  imageUrl: string;
};

export default function OurTeam() {
  const ourTeam: Array<Person> = [
    {
      fullName: 'lek. wet. Anna Nowak',
      specialisation: 'Chirurgia',
      imageUrl:
        'https://images.unsplash.com/photo-1591954692515-d1d30376fa64?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    },
    {
      fullName: 'lek. wet. Jan Kowalski',
      specialisation: 'Chirurgia',
      imageUrl:
        'https://images.unsplash.com/photo-1591954692515-d1d30376fa64?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    },
    {
      fullName: 'lek. wet. Józef Kowalski',
      specialisation: 'Chirurgia',
      imageUrl:
        'https://images.unsplash.com/photo-1591954692515-d1d30376fa64?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    },
    {
      fullName: 'lek. wet. Anna Nowak',
      specialisation: 'Chirurgia',
      imageUrl:
        'https://images.unsplash.com/photo-1591954692515-d1d30376fa64?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    },
  ];

  return (
    <section className="flex flex-col">
      <h2 className="text-2xl mb-10">Nasz Zespół</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4">
        {ourTeam.map((person, index) => (
          <div className="flex flex-col">
            <div className="w-full">
              <figure className="overflow-hidden h-60 md:h-40">
                <img className="object-cover" src={person.imageUrl} alt="" />
              </figure>

              <h6 className="mt-4 text-base">{person.fullName}</h6>
              <span className="text-sm">
                Specjalizacja: {person.specialisation}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

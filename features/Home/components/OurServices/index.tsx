type Service = {
  title: string;
  context: string;
};

export default function OurServices() {
  const services: Array<Service> = [
    {
      title: 'Zabiegi Profilaktyczne',
      context:
        'Szczepienia ochronne, odrobaczanie, ochrona przed pchłami i kleszczami, porady dotyczące żywienia, antykoncepcja',
    },

    {
      title: 'Zabiegi pielęgnacyjne',
      context:
        'Czyszczenie uszu, przycinanie pazurów, porady pielęgnacyjno-dermatologiczne',
    },
    {
      title: 'Leczenie internistyczne',
      context:
        'dermatologia, okulistyka, kardiologia, endokrynologia, ortopedia, neurologia ',
    },
    {
      title: 'Chirurgia',
      context:
        'm.in. sterylizacje, kastracje, operacyjne leczenie guzów gruczołu mlekowego, chirurgia ran)',
    },
  ];

  return (
    <section className="flex flex-col py-40">
      <h2 className="text-2xl mb-10">Usługi</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-5">
        {services.map((service, index) => (
          <div className="flex flex-col" key={index}>
            <h4 className="mb-2 text-lg">{service.title}</h4>
            <p className="text-sm">{service.context}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

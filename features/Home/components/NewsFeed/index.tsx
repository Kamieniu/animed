import { ChevronRight } from 'react-feather';
import Link from 'next/link';

type News = {
  title: string;
  link: string;
};
export default function NewsFeed() {
  const news: Array<News> = [
    {
      title: 'Nowe godziny otwarcia',
      link: '',
    },
    {
      title: 'Kupiliśmy nowy sprzęt',
      link: '',
    },
  ];

  return (
    <section className="flex flex-col py-40">
      <h2 className="text-2xl mb-10">Aktualności</h2>

      <ul className="flex flex-col">
        {news.map((news, index) => (
          <Link href="" key={index}>
            <li className="flex justify-between border-b border-gray-100 py-4 px-3">
              <span>{news.title}</span>
              <ChevronRight />
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}

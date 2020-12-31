import { ChevronRight } from 'react-feather';
import Link from 'next/link';
import { getRecentNews } from '@repository/NewsFeed.repository';

type News = {
  title: string;
  link: string;
};
export default function NewsFeed() {
  const { loading, data, error } = getRecentNews();

  return (
    <section className="flex flex-col py-40">
      <h2 className="text-2xl mb-10">Aktualności</h2>

      <ul className="flex flex-col">
        {!loading &&
          data.newsFeeds.map((news, index) => (
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

import MainHeader from '@shared/Headers/MainHeader';
import MainFooter from '@shared/Footers/MainFooter';
import CopyrightFooter from '@shared/Footers/CopyrightFooter';
import MobileNavigation from '@shared/Navigation/MobileNavigation';
import { getAllNews } from '@repository/NewsFeed.repository';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const Markdown = styled(ReactMarkdown)`
  & p {
    font-size: 14px;
  }
`;

export default function NewsFeed() {
  const { loading, data, error } = getAllNews();

  const imageUrl =
    'https://images.unsplash.com/photo-1557437220-35046cd1913b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2815&q=80';

  return (
    <>
      <MainHeader fullScreen={false} imageUrl={imageUrl}>
        <article className="absolute content h-full z-30 top-0 left-0 right-0 flex justify-start items-end">
          <div className="flex flex-col items-center pb-10">
            <h1 className="text-5xl max-w-lg text-white text-center">
              Aktualności
            </h1>
          </div>
        </article>
      </MainHeader>
      <main className="content">
        <section className="flex flex-col py-20 lg:py-40">
          <ul className="flex flex-col">
            {!loading &&
              data.newsFeeds.map((news, index) => (
                <li className="grid grid-cols-1 lg:grid-cols-2 gap-6 border-b border-gray-100 py-4 px-3">
                  <article className="flex flex-col">
                    <h2 className="text-lg text-blue-400 mb-3">{news.title}</h2>
                    <Markdown>{news.context.markdown}</Markdown>
                  </article>

                  <figure className="h-40 lg:h-32 w-full lg:w-52 overflow-hidden bg-blue-100 lg:ml-auto">
                    <img
                      className="w-full lg:object-cover"
                      src={news.image.url}
                      alt=""
                    />
                  </figure>
                </li>
              ))}
          </ul>
        </section>
      </main>
      <MainFooter />
      <CopyrightFooter />
      <MobileNavigation />
    </>
  );
}

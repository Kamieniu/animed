import { gql, useQuery } from '@apollo/client';
import { NewsFeed } from '@models/NewsFeed';

type GetRecentNewsResponse = {
  newsFeeds: Array<NewsFeed>;
};

export function getRecentNews() {
  const query = gql`
    query newsFeeds {
      newsFeeds(last: 4) {
        id
        image {
          url
        }
        title
        context {
          text
        }
      }
    }
  `;

  return useQuery<GetRecentNewsResponse>(query);
}

type GetAllNewsResponse = {
  newsFeeds: Array<NewsFeed>;
};

export function getAllNews() {
  const query = gql`
    query newsFeeds {
      newsFeeds {
        id
        image {
          url
        }
        title
        context {
          text
          markdown
        }
      }
    }
  `;

  return useQuery<GetAllNewsResponse>(query);
}

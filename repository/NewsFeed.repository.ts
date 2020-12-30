import { gql, useQuery } from '@apollo/client';
import { NewsFeed } from '@models/NewsFeed';

type GetRecentNewsResponse = {
  newsFeeds: Array<NewsFeed>;
};

export function getRecentNews() {
  const ALL_PLAYERS_QUERY = gql`
    query newsFeeds {
      newsFeeds {
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

  return useQuery<GetRecentNewsResponse>(ALL_PLAYERS_QUERY);
}

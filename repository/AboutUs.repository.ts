import { gql, useQuery } from '@apollo/client';
import { AboutUs } from '@models/AboutUs';

export type GetAboutUsContext = {
  aboutuses: Array<AboutUs>;
};
export function getAboutUsContext() {
  const query = gql`
    query {
      aboutuses {
        id
        images {
          url
        }
        context {
          text
          markdown
        }
      }
    }
  `;

  return useQuery<GetAboutUsContext>(query);
}

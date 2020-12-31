import { gql, useQuery } from '@apollo/client';
import { Service } from '@models/Service';
import { use } from 'ast-types';

type getCommonServicesQueryResult = {
  services: Array<Service>;
};

export function getCommonServices() {
  const query = gql`
    query services {
      services(where: { displayOnHomePage: true }) {
        id
        title
        context {
          text
        }
      }
    }
  `;

  return useQuery<getCommonServicesQueryResult>(query);
}

type getAllServicesQueryResult = {
  services: Array<Service>;
};
export function getAllServices() {
  const query = gql`
    query services {
      services {
        id
        title
        context {
          text
        }
      }
    }
  `;

  return useQuery<getAllServicesQueryResult>(query);
}

import { gql, useQuery } from '@apollo/client';
import { Doctor } from '@models/Doctor';

type GetAllDoctorsResponse = {
  doctors: Array<Doctor>;
};

export function getAllDoctors() {
  const query = gql`
    query doctors {
      doctors {
        id
        title
        fullName
        specialization
        image {
          url
        }
      }
    }
  `;

  return useQuery<GetAllDoctorsResponse>(query);
}

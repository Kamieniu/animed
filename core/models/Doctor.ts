import { Image } from '@models/Image';

export interface Doctor {
  id: string;
  title: string;
  fullName: string;
  specialization: string;
  image: Image;
}

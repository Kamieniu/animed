import { Image } from '@models/Image';

export interface AboutUs {
  id: string;
  images: Array<Image>;
  context: { text: string; markdown: string };
}

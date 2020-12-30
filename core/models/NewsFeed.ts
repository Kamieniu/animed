import { Image } from './Image';

export interface NewsFeed {
  id: string;
  title: string;
  context: {
    text: string;
  };
  image: Image;
}

import { Activity, Home, Icon, Rss, Users } from 'react-feather';

export type Navigation = {
  label: string;
  href: string;
  icon?: Icon;
};

export const ROUTING: Array<Navigation> = [
  {
    label: 'Strona Główna',
    href: '',
    icon: Home,
  },
  {
    label: 'Usługi',
    href: '',
    icon: Activity,
  },
  {
    label: 'O Nas',
    href: '',
    icon: Users,
  },
  {
    label: 'Aktualności',
    href: '',
    icon: Rss,
  },
];

import { Activity, Home, Icon, Phone, Rss, Users } from 'react-feather';

export type Navigation = {
  label: string;
  href: string;
  icon?: Icon;
  isMobile?: boolean;
};

export const ROUTING: Array<Navigation> = [
  {
    label: 'Strona Główna',
    href: '/',
    icon: Home,
    isMobile: false,
  },
  {
    label: 'Usługi',
    href: '/uslugi',
    icon: Activity,
    isMobile: false,
  },
  {
    label: 'Zadzwoń',
    href: 'tel:608242920',
    icon: Phone,
    isMobile: true,
  },
  {
    label: 'O Nas',
    href: '/o_nas',
    icon: Users,
    isMobile: false,
  },
  {
    label: 'Aktualności',
    href: '/aktualnosci',
    icon: Rss,
    isMobile: false,
  },
];

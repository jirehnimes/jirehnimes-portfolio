type TSitemap = {
  title: string;
  link: {
    label: string;
    url: string;
  };
};

export const sitemaps: TSitemap[] = [
  {
    title: 'Portfolio',
    link: {
      label: 'View all',
      url: '#',
    },
  },
  {
    title: 'Blog',
    link: {
      label: 'Read more',
      url: '#',
    },
  },
  {
    title: 'Contact',
    link: {
      label: 'Get in touch',
      url: '#',
    },
  },
];

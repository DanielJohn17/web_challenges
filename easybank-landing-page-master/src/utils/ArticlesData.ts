import {
  ImageCurrency,
  ImageRestaurant,
  ImagePlane,
  ImageCofetti,
} from '../assets';

export const articles = [
  {
    image: ImageCurrency,
    author: 'Claire Robinson',
    title: 'Receive money in any currency with no fees',
    content:
      'The world is getting smaller and we&#39;re becoming more mobile. So why should you be forced to only receive money in a single …',
  },
  {
    image: ImageRestaurant,
    author: 'Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    content:
      'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
  },
  {
    image: ImagePlane,
    author: 'Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    content:
      'We want you to enjoy your travels. This is why we don&#39;t charge any fees on purchases while you&#39;re abroad. We&#39;ll even show you …',
  },
  {
    image: ImageCofetti,
    author: 'Claire Robinson',
    title: 'Our invite-only Beta accounts are now live!',
    content:
      'After a lot of hard work by the whole team, we&#39;re excited to launch our closed beta. It&#39;s easy to request an invite through the site …',
  },
] as const;

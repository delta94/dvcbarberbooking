import env from '@/env';

export const setTitle = (title: string, force = false) => {
  if (force) {
    document.title = `${title}`;
  } else {
    document.title = `${env.pageTitle} - ${title}`;
  }
};

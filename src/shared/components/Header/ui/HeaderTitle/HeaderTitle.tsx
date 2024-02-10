import { Image } from '@mantine/core';

import icon from '@/App/access/test.svg';

import classes from './HeaderTitle.module.css';

export const HeaderTitle = () => {
  return (
    <a href="/" className={classes.root}>
      <Image src={icon} />
    </a>
  );
};

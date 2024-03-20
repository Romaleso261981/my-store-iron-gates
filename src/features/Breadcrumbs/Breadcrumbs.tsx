import { Anchor, Breadcrumbs } from '@mantine/core';

import classes from './Breadcrumbs.module.css';

const items = [
  { title: 'Home', href: '/' },
  { title: 'Elitni-kovani-Vorota', href: '/elitni-kovani-vorota' },
  { title: 'use-id', href: '#' }
].map((item, index) => (
  <Anchor className={classes.link} href={item.href} key={index}>
    {item.title}
  </Anchor>
));

export function BreadcrumbsComponent() {
  return (
    <>
      <Breadcrumbs visibleFrom="xs">{items}</Breadcrumbs>
      {/* <Breadcrumbs separator="→" separatorMargin="md" mt="xs"> */}
      {/* {items} */}
      {/* </Breadcrumbs> */}
    </>
  );
}

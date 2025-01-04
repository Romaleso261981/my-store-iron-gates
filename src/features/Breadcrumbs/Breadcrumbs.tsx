import { Anchor, Breadcrumbs, Flex } from "@mantine/core";

import classes from "./Breadcrumbs.module.css";

export function BreadcrumbsComponent({ items }: { items: { title: string; href: string }[] }) {
  const links = items.map((item, index) => (
    <Anchor className={classes.link} href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <Flex direction={"row"} mr="auto" py={40}>
      <Breadcrumbs visibleFrom="xs">{links}</Breadcrumbs>
    </Flex>
  );
}

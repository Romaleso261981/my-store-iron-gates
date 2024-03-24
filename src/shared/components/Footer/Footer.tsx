import { ActionIcon, Box, Flex, rem, Text } from '@mantine/core';
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
// import { FaPhoneVolume } from 'react-icons/fa6';
// import { IoMdMail } from 'react-icons/io';
import { Link } from 'react-router-dom';

import MainLogo from '../MainLogo/MainLogo';
import classes from './FooterLinks.module.css';

const data = [
  {
    title: 'Про нас',
    links: [
      { label: 'Телефон ', link: '#' },
      { label: 'Pricing', link: '#' },
      { label: 'Support', link: '#' },
      { label: 'Forums', link: '#' }
    ]
  },
  {
    title: 'Project',
    links: [
      { label: 'Contribute', link: '#' },
      { label: 'Media assets', link: '#' },
      { label: 'Changelog', link: '#' },
      { label: 'Releases', link: '#' }
    ]
  },
  {
    title: 'Community',
    links: [
      { label: 'Join Discord', link: '#' },
      { label: 'Follow on Twitter', link: '#' },
      { label: 'Email newsletter', link: '#' },
      { label: 'GitHub discussions', link: '#' }
    ]
  }
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}>
        {link.label}
      </Text>
    ));

    return (
      <Box className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </Box>
    );
  });

  return (
    <footer className={classes.footer}>
      <Flex className={classes.inner}>
        <Flex className={classes.logoWrapper}>
          <Flex>
            <MainLogo />
          </Flex>
          <Flex direction="column">
            <Text mt={20} mb={20} fw={900} size="sm">
              Додаткові види зв &rsquo; язку
            </Text>
            <Flex>
              {/* <IoMdMail /> */}
              <Text>desheva.kovka1@gmail.com</Text>
            </Flex>
            <Box>
              {/* <FaPhoneVolume /> */}
              <Link className={classes.link} to="/">
                +380 (97) 706 32 27
              </Link>
            </Box>
          </Flex>
          <Flex
            gap={0}
            mt={20}
            className={classes.social}
            direction="row"
            display="flex"
            justify="flex-end"
            wrap="nowrap">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
          </Flex>
        </Flex>
        <Box visibleFrom="sm" className={classes.groups}>
          {groups}
        </Box>
      </Flex>
      <Flex className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text>
      </Flex>
    </footer>
  );
}

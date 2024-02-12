import { Autocomplete, Box, Burger, Group, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';

import MainLogo from '../MainLogo/MainLogo';
// import logo from '../../../App/access/desheva-Kovka/desheva-kovka-logo.webp';
import classes from './HeaderSearch.module.css';

const links = [
  { link: '/about', label: 'Про нас' },
  { link: '/pricing', label: 'Ціни' },
  { link: '/adress', label: 'Адресса' },
  { link: '/community', label: 'Наша команда' }
];

export function HeaderSearch() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <Box key={link.label} className={classes.link}>
      <a href={link.link}>{link.label}</a>
    </Box>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <MainLogo />
        </Group>
        <Group>
          <Group ml={50} gap={15} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            visibleFrom="xs"
          />
        </Group>
      </div>
    </header>
  );
}

import { Autocomplete, Box, Burger, Group, Menu, rem, Text, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { IconChevronDown, IconSearch } from '@tabler/icons-react';
import cx from 'clsx';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { RoutersPaths } from '@/shared/types/enums';

import classes from './HeaderSearch.module.css';

const links = [
  { link: '/about', label: 'Про нас' },
  { link: '/pricing', label: 'Ціни' },
  { link: '/adress', label: 'Адресса' },
  { link: '/community', label: 'Наша команда' }
];

export function HeaderSearch() {
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const navigate = useNavigate();

  const items = links.map((link) => (
    <Box key={link.label} className={classes.link}>
      <Link to={link.link}>{link.label}</Link>
    </Box>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <MantineLogo size={28} />
        </Group>
        <Group justify="space-between">
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: 'pop-top-right' }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal>
            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}>
                <Group gap={7}>
                  <Text fw={500} size="sm" lh={1} mr={3}>
                    Наші вироби
                  </Text>
                  <IconChevronDown style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item onClick={() => navigate(`${RoutersPaths.VOROTAPROFNASTILOM}`)}>
                Ворота з профнастилом
              </Menu.Item>
              <Menu.Item onClick={() => navigate(`${RoutersPaths.ELITNIKOVANIVOROTA}`)}>
                Елітні ворота
              </Menu.Item>
              <Menu.Item onClick={() => navigate(`${RoutersPaths.KOVANIKOZIRKI}`)}>
                Козирки
              </Menu.Item>
              <Menu.Item onClick={() => navigate(`${RoutersPaths.MAIN}`)}>Ферми</Menu.Item>
              <Menu.Item onClick={() => navigate(`${RoutersPaths.KOVANIGRATI}`)}>Грати</Menu.Item>
              <Menu.Divider />
            </Menu.Dropdown>
          </Menu>
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

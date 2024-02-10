import { Group, Menu, rem, Text, UnstyledButton } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import cx from 'clsx';
import type { FC } from 'react';
import { useState } from 'react';

import classes from './KategjryLink.module.css';

const links2 = [
  { id: '1', path: '/vorota-profnastilom-kovanimi', label: 'Ворота з профнастилом' },
  { id: '2', path: '/elitni-kovani-vorota', label: 'Елітні ворота' },
  { id: '3', path: '/kovani-kozirki', label: 'Козирки' },
  { id: '4', path: '/adress', label: 'kovani-grati' },
  { id: '5', path: '/community', label: 'kovani-grati' }
];

const items = links2.map((link) => (
  <Menu.Item key={link.id}>
    <a href={link.path}>{link.label}</a>
  </Menu.Item>
));

type Props = {
  title: string;
};

export const KategjryLink: FC<Props> = ({ title }) => {
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  return (
    <Menu
      width={260}
      position="bottom-end"
      transitionProps={{ transition: 'pop-top-right' }}
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      withinPortal>
      <Menu.Target>
        <UnstyledButton className={cx(classes.user, { [classes.userActive]: userMenuOpened })}>
          <Group gap={7}>
            <Text fw={500} size="sm" lh={1} mr={3}>
              {title}
            </Text>
            <IconChevronDown style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        {items}
        <Menu.Divider />
      </Menu.Dropdown>
    </Menu>
  );
};

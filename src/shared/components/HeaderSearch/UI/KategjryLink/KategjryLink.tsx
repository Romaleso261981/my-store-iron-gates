import { Group, Menu, rem, Text, UnstyledButton } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import type { FC } from 'react';

import s from './KategjryLink.module.css';

const links2 = [
  { id: '1', path: '/vorota-profnastilom-kovanimi', label: 'Ворота з профнастилом' },
  { id: '2', path: '/elitni-kovani-vorota', label: 'Елітні ворота' },
  { id: '3', path: '/kovani-kozirki', label: 'Козирки' },
  { id: '4', path: '/kovani-grati', label: 'Ковані грати' }
];

const items = links2.map((link) => (
  <Menu.Item key={link.id}>
    <a className={s.link} href={link.path}>
      {link.label}
    </a>
  </Menu.Item>
));

type Props = {
  title: string;
};

export const KategjryLink: FC<Props> = ({ title }) => {
  return (
    <Menu
      width={260}
      position="bottom-end"
      transitionProps={{ transition: 'pop-top-right', duration: 400 }}
      trigger="hover"
      openDelay={100}
      closeDelay={50}
      withinPortal>
      <Menu.Target>
        <UnstyledButton className={s.user}>
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

import { rem, Tooltip, UnstyledButton } from '@mantine/core';
import type { IconHome2 } from '@tabler/icons-react';

import classes from './Navbar.module.css';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  path: string;
  active?: boolean;
  onClick?(): void;
}

export const NavbarLink = ({ icon: Icon, label, active, onClick, path }: NavbarLinkProps) => {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <a href={path}>
          <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        </a>
      </UnstyledButton>
    </Tooltip>
  );
};

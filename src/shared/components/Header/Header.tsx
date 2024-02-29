import { Burger, Container, Group, Menu, rem, Text, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import cx from 'clsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RoutersPaths } from '@/shared/types/enums';

import classes from './HeaderTabs.module.css';

export function HeaderTabs() {
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const navigate = useNavigate();

  // const items = tabsButtons.map((tab) => (
  //   <Link key={tab.id} to={tab.path}>
  //     <Tabs.Tab value={tab.lable} key={tab.id}>
  //       {tab.type}
  //     </Tabs.Tab>
  //   </Link>
  // ));

  return (
    <header className={classes.header}>
      <Container className={classes.mainSection} size="md">
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
              {/* <Menu.Item
                leftSection={
                  <IconPlayerPause style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                }>
                Pause subscription
              </Menu.Item>
              <Menu.Item
                color="red"
                leftSection={
                  <IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                }>
                Delete account
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                }>
                Logout
              </Menu.Item> */}
            </Menu.Dropdown>
            {/* <ColorSchemeToggle /> */}
            {/* <Notification /> */}
          </Menu>
        </Group>
      </Container>
    </header>
  );
}

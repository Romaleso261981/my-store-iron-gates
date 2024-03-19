import { Autocomplete, Burger, Button, Flex, Group, rem } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import { FaPhoneVolume } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { Link } from 'react-router-dom';

import { ADMIN } from '@/constans/constans';
import { Basket, IconBasket } from '@/features';

import MainLogo from '../MainLogo/MainLogo';
// import logo from '../../../App/access/desheva-Kovka/desheva-kovka-logo.webp';
import classes from './HeaderSearch.module.css';

const links = [
  { link: '/about', label: 'Про нас' },
  { link: '/pricing', label: 'Ціни' },
  { link: '/adress', label: 'Адресса' },
  { link: '/our_team', label: 'Наша команда' }
];

export function HeaderSearch() {
  const [opened, { toggle }] = useDisclosure(false);
  const [isShowBasket, setIsShowBasket] = useState(false);

  const toggleBasket = () => {
    setIsShowBasket(!setIsShowBasket);
  };

  const items = links.map((link) => (
    <Flex key={link.label}>
      <Flex
        key={link.label}
        direction={!useMediaQuery('(min-width: 48rem)') ? 'row' : 'column'}></Flex>
      <Link className={classes.link} to={link.link}>
        {link.label}
      </Link>
    </Flex>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          {/* <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" /> */}
          <MainLogo />
        </Group>
        <Group>
          <Flex
            ml={useMediaQuery('(min-width: 75rem)') ? 5 : 15}
            gap={useMediaQuery('(min-width: 75rem)') ? 5 : 0}
            direction={useMediaQuery('(min-width: 75rem)') ? 'row' : 'column'}>
            <Flex align="center" direction={useMediaQuery('(min-width: 75rem)') ? 'row' : 'column'}>
              {useMediaQuery('(min-width: 75rem)') && <IoMdMail />}
              <Button c="gray" variant="transparent">
                desheva.kovka1@gmail.com
              </Button>
            </Flex>
            <Group>
              {useMediaQuery('(min-width: 75rem)') && <FaPhoneVolume />}
              <Button c="gray" variant="transparent">
                +380 (96) 536-41-01
              </Button>
            </Group>
            <Group>
              {useMediaQuery('(min-width: 75rem)') && <FaPhoneVolume />}
              <Button c="gray" variant="transparent">
                +380 (97) 706 32 27
              </Button>
              <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
            </Group>

            <Group ml={50} gap={15} className={classes.links} visibleFrom="sm">
              {items}
              {ADMIN === 'admin' && (
                <Button>
                  <a href="/community">Робота Коля</a>
                </Button>
              )}
            </Group>
          </Flex>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            visibleFrom="xs"
          />
          {useMediaQuery('(min-width: 75rem)') && <IconBasket setIsShowBasket={toggleBasket} />}
        </Group>
        <Basket setIsShowBasket={toggleBasket} opened={isShowBasket} />
      </div>
    </header>
  );
}

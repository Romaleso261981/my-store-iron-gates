import { Autocomplete, Button, Flex, Group, rem } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPhoneVolume } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { Link } from 'react-router-dom';

import { ADMIN } from '@/constans/constans';
import { Basket, IconBasket } from '@/features';
import { ColorSwitch } from '@/features/ColorSwitch/ColorSwitch.tsx';
import { LanguagePicker } from '@/features/LanguagePicker/LanguagePicker';

import MainLogo from '../MainLogo/MainLogo';
import classes from './HeaderSearch.module.css';

const links = [
  { link: '/about', label: 'Про нас' },
  { link: '/pricing', label: 'Ціни' },
  { link: '/adress', label: 'Адресса' },
  { link: '/our_team', label: 'Наша команда' }
];

export function HeaderSearch() {
  // const [opened, { toggle }] = useDisclosure(false);
  const [isShowBasket, setIsShowBasket] = useState(false);

  const matches = useMediaQuery('(min-width: 23.75em)');

  const { t } = useTranslation();

  const toggleBasket = () => {
    setIsShowBasket(!setIsShowBasket);
  };

  const items = links.map((link) => (
    <Flex key={link.label}>
      <Link className={classes.link} to={link.link}>
        {link.label}
      </Link>
    </Flex>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group ml={40}>
          <MainLogo />
        </Group>
        <Flex
          gap={10}
          align={useMediaQuery('(min-width: 75rem)') ? 'flex-start' : 'flex-start'}
          direction="column">
          <Group>
            {matches && <IoMdMail />}
            <Link className={classes.link} to="/">
              desheva.kovka1@gmail.com
            </Link>
          </Group>
          <Group>
            <FaPhoneVolume />
            <Link className={classes.link} to="/">
              +380 (97) 706 32 27
            </Link>
          </Group>
          <Group>
            <FaPhoneVolume />
            <Link className={classes.link} to="/">
              +380 (97) 706 32 27
            </Link>
          </Group>
          {/* <Center ml="auto" mr="auto">
              {!useMediaQuery('(min-width: 420px)') && (
                <Burger opened={opened} onClick={toggle} size="sm" />
              )}
            </Center> */}
        </Flex>
        <Flex
          gap={15}
          display="flex"
          justify="flex-end"
          p={5}
          // direction={useMediaQuery('(min-width: 55.625rem)') ? 'row' : 'column'}
          direction="column"
          visibleFrom="sm">
          {items}
          {ADMIN === 'admin' && (
            <Button>
              <a href="/community">{t('header.kolyaRobota')}</a>
            </Button>
          )}
        </Flex>
        <Flex display="flex" direction="column">
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            visibleFrom="xs"
          />
          <Flex pt={15} justify="right" gap={10} visibleFrom="xs">
            <IconBasket setIsShowBasket={toggleBasket} />
            <LanguagePicker type="collapsed" />
            <ColorSwitch />
          </Flex>
        </Flex>
        <Basket setIsShowBasket={toggleBasket} opened={isShowBasket} />
      </div>
    </header>
  );
}

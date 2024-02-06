import { Container } from '@mantine/core';

import { FooterLinks } from '../components/Footer/Footer';
import { HeaderTabs } from '../components/Header/Header';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      <HeaderTabs />
      <Container maw={1280} p={0}>
        <Welcome />
      </Container>
      <FooterLinks />
    </>
  );
}

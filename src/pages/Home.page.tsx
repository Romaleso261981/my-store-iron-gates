import { Container } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { HeaderTabs } from '../components/Header/Header';
import { FooterLinks } from '../components/Footer/Footer';

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

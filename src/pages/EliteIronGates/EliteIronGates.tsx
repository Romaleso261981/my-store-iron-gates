import { ArticalCard } from './UI/Card/Card';
import { mockdata } from './mockdata';
import { FooterLinks, HeaderTabs } from '@/components';

export default function EliteIronGates() {
  return (
    <>
      <HeaderTabs />
      <ArticalCard data={mockdata} />
      <FooterLinks />
    </>
  );
}

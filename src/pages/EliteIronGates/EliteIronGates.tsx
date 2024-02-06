import { FooterLinks, HeaderTabs } from '@/components';

import { mockdata } from './mockdata';
import { ArticalCard } from './UI/Card/Card';

export default function EliteIronGates() {
  return (
    <>
      <HeaderTabs />
      <ArticalCard data={mockdata} />
      <FooterLinks />
    </>
  );
}

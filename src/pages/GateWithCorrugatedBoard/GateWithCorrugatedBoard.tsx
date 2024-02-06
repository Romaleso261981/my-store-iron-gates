import { FooterLinks, HeaderTabs } from '@/components';

import { mockdata } from './mockdata';
import { ArticalCard } from './UI/ArticalCard';

export default function GateWithCorrugatedBoard() {
  return (
    <>
      <HeaderTabs />
      <ArticalCard data={mockdata} />
      <FooterLinks />
    </>
  );
}

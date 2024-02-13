import { CardsCarousel } from '@/shared/components';
import { ArticalCard } from '@/shared/components/ArticalCard/ArticalCard';

import { mockdata } from './mockdata';

export default function EliteIronGates() {
  return (
    <>
      <CardsCarousel />
      <ArticalCard data={mockdata} type="eliteIronGate" />;
    </>
  );
}

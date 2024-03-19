import { mockdataEliteIronGates } from '@/mocData';
import { CardsCarousel } from '@/shared/components';

import { ArticalCard } from './ui/SingleCard/ui/ArticalCard/ArticalCard';

export default function EliteIronGates() {
  return (
    <>
      <CardsCarousel />
      <ArticalCard data={mockdataEliteIronGates} type="eliteIronGate" />;
    </>
  );
}

import { CardsCarousel } from '@/shared/components';
import { ArticalCard } from '@/shared/components/ArticalCard/ArticalCard';

import { mockdata } from './mockdata';

export default function GateWithCorrugatedBoard() {
  return (
    <>
      <CardsCarousel />
      <ArticalCard data={mockdata} />;
    </>
  );
}

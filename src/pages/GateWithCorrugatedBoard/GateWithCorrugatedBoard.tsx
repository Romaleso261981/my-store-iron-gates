import { mockdataGateWithCorrugatedBoard } from '@/mocData';
import { CardsCarousel } from '@/shared/components';

import { ArticalCard } from './ui/SingleCard/ui/ArticalCard/ArticalCard';

export default function GateWithCorrugatedBoard() {
  return (
    <>
      <CardsCarousel />
      <ArticalCard data={mockdataGateWithCorrugatedBoard} />;
    </>
  );
}

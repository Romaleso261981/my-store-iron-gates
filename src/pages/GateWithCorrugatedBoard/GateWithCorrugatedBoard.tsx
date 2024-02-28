import { mockdataGateWithCorrugatedBoard } from '@/mocData';
import { CardsCarousel } from '@/shared/components';
import { ArticalCard } from '@/shared/components/ArticalCard/ArticalCard';

export default function GateWithCorrugatedBoard() {
  return (
    <>
      <CardsCarousel />
      <ArticalCard data={mockdataGateWithCorrugatedBoard} />;
    </>
  );
}

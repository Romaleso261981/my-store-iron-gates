import { mockdataKovaniGrati } from '@/mocData';
import { CardsCarousel } from '@/shared/components';

import { ArticalCard } from './UI/ArticalCard/ArticalCard';

export default function KovaniGrati() {
  return (
    <>
      <CardsCarousel />
      <ArticalCard data={mockdataKovaniGrati} />;
    </>
  );
}

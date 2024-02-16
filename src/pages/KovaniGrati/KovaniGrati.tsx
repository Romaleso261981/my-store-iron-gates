import { CardsCarousel } from '@/shared/components';

import { mockdata } from './mockdata';
import { ArticalCard } from './UI/ArticalCard/ArticalCard';

export default function KovaniGrati() {
  return (
    <>
      <CardsCarousel />
      <ArticalCard data={mockdata} />;
    </>
  );
}

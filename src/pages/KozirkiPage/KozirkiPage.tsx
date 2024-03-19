import { mockdataKozirki } from '@/mocData';
import { CardsCarousel } from '@/shared/components';

import { ArticalCard } from './ui/SingleCard/ui/ArticalCard/ArticalCard';

export default function KozirkiPage() {
  return (
    <>
      <CardsCarousel />
      <ArticalCard data={mockdataKozirki} />;
    </>
  );
}

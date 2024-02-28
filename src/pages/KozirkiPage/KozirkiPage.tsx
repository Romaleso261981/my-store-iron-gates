import { mockdataKozirki } from '@/mocData';
import { CardsCarousel } from '@/shared/components';
import { ArticalCard } from '@/shared/components/ArticalCard/ArticalCard';

export default function KozirkiPage() {
  return (
    <>
      <CardsCarousel />
      <ArticalCard data={mockdataKozirki} />;
    </>
  );
}

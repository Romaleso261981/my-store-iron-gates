import { Card, SimpleGrid, Skeleton } from '@mantine/core';
import { useState } from 'react';

import { productsGroup } from '@/mocData';

import { GroupBannerItem } from './UI/GroupBannerItem/GroupBannerItem';

const child = <Skeleton height={140} radius="md" animate={false} />;

function ImageGroupBanner() {
  const [isFeching, setIsFeching] = useState(false);

  setTimeout(() => {
    setIsFeching(true);
  }, 1000);

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
      {!isFeching &&
        productsGroup.map((product) => (
          <Card key={product.id} radius="md">
            {child}
          </Card>
        ))}
      {isFeching &&
        productsGroup.map((product) => (
          <Card key={product.id} radius="md">
            <GroupBannerItem product={product} />
          </Card>
        ))}
    </SimpleGrid>
  );
}

export default ImageGroupBanner;

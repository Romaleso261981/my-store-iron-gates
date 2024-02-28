import { Grid, Skeleton } from '@mantine/core';
import { useState } from 'react';

import { GroupBannerItem } from './UI/GroupBannerItem/GroupBannerItem';

const child = <Skeleton height={140} radius="md" animate={false} />;

function ImageGroupBanner() {
  const [isFeching, setIsFeching] = useState(false);

  setTimeout(() => {
    setIsFeching(true);
  }, 1000);

  return (
    <>
      {isFeching && (
        <Grid>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <GroupBannerItem />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <GroupBannerItem />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <GroupBannerItem />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <GroupBannerItem />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <GroupBannerItem />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <GroupBannerItem />
          </Grid.Col>
        </Grid>
      )}
      {!isFeching && (
        <Grid>
          <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
        </Grid>
      )}
    </>
  );
}

export default ImageGroupBanner;

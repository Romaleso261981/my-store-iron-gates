import { Flex } from "@mantine/core";

import { CategoriesLink } from "../HeaderSearch/UI/CategoriesLink/CategoriesLink";

const Categories = () => {
  return (
    <Flex py={20} px={20}>
      <CategoriesLink title="Наші Вироби" />
    </Flex>
  );
};

export { Categories };

import { Box, rem, Stack, Text } from "@mantine/core";
import { IconAt, IconMapPin, IconPhone, IconSun } from "@tabler/icons-react";

import classes from "./ContactIcons.module.css";

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: "Пошта", description: "desheva.kovka1@gmail.com", icon: IconAt },
  { title: "Телефон", description: "+38 096 536 41 01", icon: IconPhone },
  { title: "Адресса", description: "Вінниця, Україна", icon: IconMapPin },
  { title: "Часи роботи", description: "8 a.m. – 11 p.m.", icon: IconSun }
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}

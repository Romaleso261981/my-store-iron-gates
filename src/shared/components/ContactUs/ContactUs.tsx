import {
  ActionIcon,
  Button,
  Flex,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";

import { sendMessage } from "@/shared/helpers/sendMessageIntoTelegram";

import { ContactIconsList } from "./ContactIcons";
import classes from "./ContactUs.module.css";

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function ContactUs() {
  const form = useForm({
    initialValues: {
      email: "",
      phone: "",
      message: "",
      termsOfService: false
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email")
    }
  });

  const handleSendMessage = (formValue: {
    email: string;
    phone: string;
    message: string;
    termsOfService: boolean;
  }) => {
    const message = `email: ${formValue.email} message: ${formValue.message}  phone: ${formValue.phone}    `;
    console.log(message);

    sendMessage(message);
    (formValue.email = ""), (formValue.message = ""), (formValue.phone = "");
  };

  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
      <Icon size="1.4rem" stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <Flex className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title className={classes.title}>Контактна особа</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Залиште свій Email і ми вам відпишемось на протязі години.
          </Text>

          <ContactIconsList />

          <Group className={classes.socialList} mt="xl">
            {icons}
          </Group>
        </div>
        <form onSubmit={form.onSubmit((values) => handleSendMessage(values))}>
          <TextInput
            label="Пошта"
            placeholder="example@email.com"
            {...form.getInputProps("email")}
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Номер телефону"
            placeholder="+380 (66) 568 58 45"
            {...form.getInputProps("phone")}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Ваше повідомлення"
            placeholder="Напишіть ваше повідомлення"
            {...form.getInputProps("message")}
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit" className={classes.control}>
              Відправити SMS
            </Button>
          </Group>
        </form>
      </SimpleGrid>
    </Flex>
  );
}

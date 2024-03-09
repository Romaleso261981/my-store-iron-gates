import { Button, Flex, Group, NumberInput, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import dayjs from 'dayjs';
import type { FC } from 'react';

import { useAppDispatch } from '@/redux/store';
import type { Job } from '@/shared/types/Types';

import { addJob } from '../../../../redux/slices/jobSlise';
import s from './CardAddJob.module.css';

type FormValues = {
  Jobs: Job;
};

type CardAddJobProps = {
  toggleCardAddProduct: () => void;
};

const CardAddJob: FC<CardAddJobProps> = ({ toggleCardAddProduct }) => {
  const dispatch = useAppDispatch();

  const form = useForm<FormValues>({
    initialValues: {
      Jobs: {
        id: '',
        date: '',
        description: '',
        title: '',
        gotSalary: 0,
        quantity: 0,
        advance: 0,
        price: 0,
        dateAdded: 0
      }
    }
  });

  const submit = (values: FormValues) => {
    values.Jobs.id = dayjs().toString();
    values.Jobs.dateAdded = new Date().getTime();
    console.log('values.Jobs', values.Jobs);
    dispatch(addJob(values.Jobs));
    form.reset();
  };

  return (
    <Flex className={s.cardWrapper}>
      <form onSubmit={form.onSubmit((values) => submit(values))}>
        <Flex p={20} direction="column" gap={10}>
          <TextInput label="Дата" placeholder="Дата" {...form.getInputProps('Jobs.date')} />
          <TextInput
            label="Назва роботи"
            placeholder="Назва роботи"
            {...form.getInputProps('Jobs.title')}
          />

          <Textarea size="lg" label="Description" {...form.getInputProps('Jobs.description')} />
          <Group>
            <NumberInput
              size="xs"
              label="MaxQuantity"
              {...form.getInputProps('Jobs.maxQuantity')}
            />
            <NumberInput size="xs" label="Quantity" {...form.getInputProps('Jobs.quantity')} />
            <NumberInput size="xs" label="Price" {...form.getInputProps('Jobs.price')} />
          </Group>
          <Group mt={20} display="flex" justify="space-around">
            <Button type="submit">Добавить</Button>
            <Button onClick={toggleCardAddProduct}>Закрыть</Button>
          </Group>
        </Flex>
      </form>
    </Flex>
  );
};

export default CardAddJob;

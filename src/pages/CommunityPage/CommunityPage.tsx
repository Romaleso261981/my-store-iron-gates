import { Button, Center, Flex, Group, Table, Text } from '@mantine/core';
import { useEffect, useState } from 'react';

import { getAllExpenses } from '@/redux/slices/expensesSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { expensesTotal, incomeTotal } from '@/shared/helpers/calk';
import { DataBasePath } from '@/shared/types/enums';
import type { Job } from '@/shared/types/Types';

import { getAllJobs } from '../../redux/slices/jobSlise';
import CardAddJob from './UI/CardAddJob/CardAddJob';
import ExpensesPage from './UI/Expenses/Expenses';

const CommunityPage = () => {
  const [isShowCardAddProduct, setIsShowCardAddProduct] = useState(false);
  const [isShowCardExpenses, setIsShowCardExpenses] = useState(false);

  const dispatch = useAppDispatch();
  // const theme = useMantineTheme();
  // const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const jobs = useAppSelector((state) => state.jobSlise.jobs);
  const expenses = useAppSelector((state) => state.expensesSlise.expenses);

  const getAllData = async () => {
    dispatch(getAllJobs({ path: DataBasePath.JOBS, queryLimit: 100 }));
    dispatch(getAllExpenses({ path: DataBasePath.EXPENSES, queryLimit: 100 }));
  };

  useEffect(() => {
    getAllData();
  }, []);

  const toggleCardAddProduct = () => {
    setIsShowCardAddProduct(!isShowCardAddProduct);
  };

  const toggletoggleExpenses = () => {
    setIsShowCardExpenses(!isShowCardExpenses);
  };

  const rows = [...jobs]
    .sort((a, b) => (a?.dateAdded < b?.dateAdded ? 1 : -1))
    .map((row: Job) => {
      return (
        <Table.Tr key={row.id}>
          <Table.Td>{row.date}</Table.Td>
          <Table.Td>{row.title}</Table.Td>
          <Table.Td>{`${row.price}  грн.`}</Table.Td>
          <Table.Td>{row.description}</Table.Td>
        </Table.Tr>
      );
    });

  const incom = incomeTotal(jobs);
  const expens = expensesTotal(expenses);

  return (
    <Center>
      <Flex mt={50} direction={'column'}>
        <Group>
          <Button onClick={toggletoggleExpenses}>Взяв гроші</Button>
          <Button onClick={toggleCardAddProduct}>Додати роботу</Button>
        </Group>
        <Flex mt={50} direction="column" gap={20}>
          <Flex>
            <Text>{`Залишок ${Number(incom) - Number(expens)} грн.`}</Text>
          </Flex>
          <Flex>
            <Text>{`Загальна сумма заробленних ${incom} грн.`}</Text>
          </Flex>
          <Flex>
            <Text>{`Взяв за місяць ${expens} грн.`}</Text>
          </Flex>
          <Table.ScrollContainer minWidth={800}>
            <Table verticalSpacing="xs">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Дата</Table.Th>
                  <Table.Th>Техніка</Table.Th>
                  <Table.Th>Вартість</Table.Th>
                  <Table.Th>Опис</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </Flex>
      </Flex>
      {isShowCardExpenses && <ExpensesPage toggleExpenses={toggletoggleExpenses} />}
      {isShowCardAddProduct && <CardAddJob toggleCardAddProduct={toggleCardAddProduct} />}
    </Center>
  );
};
export default CommunityPage;

import { Button, Center, Flex, Group, Table, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";

import { getExpenses, getJobs } from "@/redux/selectors";
import { getAllExpenses } from "@/redux/slices/expensesSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { expensesTotal, incomeTotal } from "@/shared/helpers/calk";
import { DataBasePath } from "@/shared/types/enums";
import type { Expenses, Job } from "@/shared/types/Types";

import { getAllJobs } from "../../redux/slices/jobSlise";
import CardAddJob from "./UI/CardAddJob/CardAddJob";
import ExpensesPage from "./UI/Expenses/Expenses";

const KolyaPage = () => {
  const [isShowCardAddProduct, setIsShowCardAddProduct] = useState(false);
  const [isShowCardExpenses, setIsShowCardExpenses] = useState(false);

  const matches = useMediaQuery("(min-width: 1111px)");

  const dispatch = useAppDispatch();

  const jobs = useAppSelector(getJobs);
  const expenses = useAppSelector(getExpenses);

  const sortedJobs = [...jobs].filter((e) => e.owner === "kolya");
  const sortedExpenses = [...expenses].filter((e) => e.owner === "kolya");

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

  const incomRows = [...sortedJobs]
    .sort((a, b) => (a?.dateAdded < b?.dateAdded ? 1 : -1))
    .map((row: Job) => {
      return (
        <Table.Tr key={row.id}>
          {matches && <Table.Td>{row.date}</Table.Td>}
          {matches && <Table.Td>{row.title}</Table.Td>}
          <Table.Td>{`${row.price}  грн.`}</Table.Td>
          <Table.Td>{row.description}</Table.Td>
        </Table.Tr>
      );
    });

  const expensRows = [...sortedExpenses]
    .sort((a, b) => (a?.dateAdded < b?.dateAdded ? 1 : -1))
    .map((row: Expenses) => {
      return (
        <Table.Tr key={row.id}>
          {matches && <Table.Td>{row.date}</Table.Td>}
          <Table.Td>{`${row.price}  грн.`}</Table.Td>
          <Table.Td>{row.description}</Table.Td>
        </Table.Tr>
      );
    });

  const incom = incomeTotal(sortedJobs);
  const expens = expensesTotal(sortedExpenses);

  return (
    <Center>
      <Flex mt={50} p={40} direction={"column"}>
        {matches && (
          <Group>
            <Button onClick={toggletoggleExpenses}>Взяв гроші</Button>
            <Button onClick={toggleCardAddProduct}>Додати роботу</Button>
          </Group>
        )}
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
          <Flex>
            <Flex direction="column">
              <Title ml={100}>Заробленно</Title>
              <Table.ScrollContainer minWidth={800}>
                <Table verticalSpacing="xs">
                  <Table.Thead>
                    <Table.Tr>
                      {matches && <Table.Th>Дата</Table.Th>}
                      {matches && <Table.Th>Техніка</Table.Th>}
                      <Table.Th>Сумма</Table.Th>
                      <Table.Th>Опис</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>{incomRows}</Table.Tbody>
                </Table>
              </Table.ScrollContainer>
            </Flex>
            <Flex direction="column" p={10}>
              <Title ml={100}>Отримав</Title>
              <Table.ScrollContainer minWidth={800}>
                <Table verticalSpacing="xs">
                  <Table.Thead>
                    <Table.Tr>
                      {matches && <Table.Th>Дата</Table.Th>}
                      <Table.Th>Сумма</Table.Th>
                      <Table.Th>Опис</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>{expensRows}</Table.Tbody>
                </Table>
              </Table.ScrollContainer>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {isShowCardExpenses && <ExpensesPage owner="kolya" toggleExpenses={toggletoggleExpenses} />}
      {isShowCardAddProduct && (
        <CardAddJob owner="kolya" toggleCardAddProduct={toggleCardAddProduct} />
      )}
    </Center>
  );
};
export default KolyaPage;

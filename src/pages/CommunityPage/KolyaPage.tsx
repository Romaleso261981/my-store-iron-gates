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
import s from "./KolyaPage.module.css";
import CardAddJob from "./UI/CardAddJob/CardAddJob";
import ExpensesPage from "./UI/Expenses/Expenses";

const KolyaPage = () => {
  const [isShowCardAddProduct, setIsShowCardAddProduct] = useState(false);
  const [isShowCardExpenses, setIsShowCardExpenses] = useState(false);

  const matches = useMediaQuery("(min-width: 200px)");
  const mob = useMediaQuery("(max-width: 770px)");

  const dispatch = useAppDispatch();

  const jobs = useAppSelector(getJobs);
  const expenses = useAppSelector(getExpenses);

  const sortedJobs = [...jobs].filter((e) => e.owner === "kolya");
  // const sortedJobs = [...jobs].filter((e) => e.owner !== "dima");
  // const sortedJobsWithTitle = [...sortedJobs].filter((e) => e.title.includes("ІПС"));
  // const sortedJobsWithTitle = [...sortedJobs].filter((e) => e.title.includes("БОС"));
  // const sortedJobsWithTitle = [...sortedJobs].filter((e) => e.title.includes("Ком"));
  // const sortedJobsWithTitle = [...sortedJobs].filter((e) => e.title.includes("АТП 300"));
  // const sortedJobsWithTitle = [...sortedJobs].filter((e) => e.title.includes("Кондиціонер"));
  // const sortedJobsWithTitle = [...sortedJobs].filter((e) => e.title.includes("Спіртзавод"));
  const sortedJobsWithTitle = [...sortedJobs].filter((e) => e);

  const incomeTotalData = sortedJobsWithTitle;

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

  const toggleCardExpenses = () => {
    setIsShowCardExpenses(!isShowCardExpenses);
  };

  const incomRows = [...incomeTotalData]
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

  const incom = incomeTotal(incomeTotalData);
  const expens = expensesTotal(sortedExpenses);

  return (
    <Center>
      <Flex mt={50} p={mob ? 0 : 40} direction={"column"}>
        <Flex className={s.buttonFlexRoot} justify="space-between">
          <Group>
            <Button onClick={toggleCardExpenses}>Взяв гроші</Button>
            <Button onClick={toggleCardAddProduct}>Додати роботу</Button>
          </Group>
        </Flex>

        <Flex mt={50} direction="column" gap={mob ? 5 : 20}>
          <Flex p={mob ? 10 : 20}>
            <Text>{`Залишок ${Number(incom) - Number(expens)} грн.`}</Text>
          </Flex>
          <Flex p={mob ? 10 : 20}>
            <Text>{`Загальна сумма заробленних ${incom} грн.`}</Text>
          </Flex>
          <Flex p={mob ? 10 : 20}>
            <Text>{`Взяв за місяць ${expens} грн.`}</Text>
          </Flex>
          <Flex direction={mob ? "column" : "row"} gap={20}>
            <Flex className={s.flexRootIncom} direction="column" p={10}>
              <Title ml={100}>Заробленно</Title>
              <Table.ScrollContainer minWidth={mob ? "auto" : 800}>
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
            <Flex className={s.flexRootExpens} direction="column" p={10}>
              <Title ml={100}>Отримав</Title>
              <Table.ScrollContainer minWidth={mob ? "auto" : 800}>
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
      {isShowCardExpenses && <ExpensesPage owner="kolya" toggleExpenses={toggleCardExpenses} />}
      {isShowCardAddProduct && (
        <CardAddJob owner="kolya" toggleCardAddProduct={toggleCardAddProduct} />
      )}
    </Center>
  );
};
export default KolyaPage;

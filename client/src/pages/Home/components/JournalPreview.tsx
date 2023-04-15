import {
  HStack,
  VStack,
  Td,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
} from "@chakra-ui/react";
import { FC } from "react";

export const JournalPreview: FC = () => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th rowSpan={2}>発生日</Th>
            <Th colSpan={3}>借方</Th>
            <Th colSpan={3}>貸方</Th>
          </Tr>
          <Tr>
            <Th>勘定科目</Th>
            <Th>金額</Th>
            <Th>税区分</Th>
            <Th>勘定科目</Th>
            <Th>金額</Th>
            <Th>税区分</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>2023-04-16</Td>
            <Td>売掛金</Td>
            <Td>10,000</Td>
            <Td>対象外</Td>
            <Td>売上高</Td>
            <Td>10,000</Td>
            <Td>課税売上10%</Td>

          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
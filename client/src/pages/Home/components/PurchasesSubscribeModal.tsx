import {
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  Select,
  VStack,
  Input,
  Divider,
  Box,
  Spacer,
  Text
} from "@chakra-ui/react";
import { FC } from "react";
import ReactSelect from "react-select";
import { JournalPreview } from "./JournalPreview";
import { PurchasesItem } from "./PurchasesItem";

interface UseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Option {
  value: string | number;
  label: string;
  shortcuts: string[];
}

interface Options {
  label: string;
  options: Option[];
}

interface FilterOptions {
  label: string;
  value: string | number;
  data: Option;
}

const options: Options[] = [
  {
    label: "売上",
    options: [
      { value: 0, label: "売上高", shortcuts: ["uriage"] },
      { value: 1, label: "雑収入", shortcuts: ["zatusyotoku"] },
    ],
  },
];

export const PurchasesSubscribeModal: FC<UseModalProps> = ({
  isOpen,
  onClose,
}) => {
  const customFilter = (option: FilterOptions, searchText: string): boolean => {
    return (
      option.label.startsWith(searchText) ||
      (option.data.shortcuts.find((e) => e.startsWith(searchText))?.length ??
        0) > 0
    );
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <HStack spacing={6}>
          <Text>仕入登録</Text>
          <Button size={"sm"}>支出登録</Button>
          </HStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={6} px={32}>
            <HStack spacing={4} w={"full"}>
              <PurchasesItem title={"発生日"}>
                <Input type="date" value={"2023-03-23"}></Input>
              </PurchasesItem>

              <PurchasesItem title={"決済"}>
                <Select placeholder="完了">
                  <option value="option1">未決済</option>
                </Select>
              </PurchasesItem>

              <PurchasesItem title={"取引先"}>
                <Select placeholder="国税庁">
                  <option value="option1">未決済</option>
                </Select>
              </PurchasesItem>
            </HStack>

            <HStack spacing={4} w={"full"}>
              <PurchasesItem title={"勘定科目"}>
                <Box w={48}>
                  <ReactSelect
                    options={options}
                    filterOption={customFilter}
                  ></ReactSelect>
                </Box>
              </PurchasesItem>

              <PurchasesItem title={"品目"}>
                <Input></Input>
              </PurchasesItem>

              <PurchasesItem title={"金額"}>
                <Input></Input>
              </PurchasesItem>
            </HStack>
          </VStack>

          <Spacer h={16} />
          <JournalPreview />
        </ModalBody>
        <ModalFooter>
          <VStack w={"full"}>
            <Divider />
            <Button>収入登録</Button>
          </VStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

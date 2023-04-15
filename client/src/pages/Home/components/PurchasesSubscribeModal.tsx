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
} from "@chakra-ui/react";
import { FC } from "react";
import { PurchasesItem } from "./PurchasesItem";

interface UseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PurchasesSubscribeModal: FC<UseModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          仕入登録<Button size={"sm"}>支出登録</Button>
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
                <Select placeholder="売上">
                  <option value="option1">未決済</option>
                </Select>
              </PurchasesItem>

              <PurchasesItem title={"品目"}>
                <Input></Input>
              </PurchasesItem>

              <PurchasesItem title={"金額"}>
                <Input></Input>
              </PurchasesItem>
            </HStack>
          </VStack>
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

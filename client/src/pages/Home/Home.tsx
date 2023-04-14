import { HStack, useDisclosure, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { SimpleButton } from "../../components/Button/SimpleButton";
import { PurchasesSubscribeModal } from "./components/PurchasesSubscribeModal";

export const Home: FC = () => {
  const {
    isOpen: isPurchasesOpen,
    onOpen: onPurchasesOpen,
    onClose: onPurchasesClose,
  } = useDisclosure();
  return (
    <>
      <VStack>
        <HStack p={32} spacing={8}>
          <SimpleButton w={120} onClick={onPurchasesOpen}>
            仕入登録
          </SimpleButton>
          <SimpleButton w={120}>支出登録</SimpleButton>
          <SimpleButton w={120}>見積書登録</SimpleButton>
          <SimpleButton w={120}>請求書登録</SimpleButton>
        </HStack>
        <PurchasesSubscribeModal
          isOpen={isPurchasesOpen}
          onClose={onPurchasesClose}
        />
      </VStack>
    </>
  );
};

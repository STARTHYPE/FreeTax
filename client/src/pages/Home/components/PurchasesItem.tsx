import { FC, ReactNode } from "react";
import { VStack, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  children: ReactNode;
}

export const PurchasesItem: FC<Props> = ({ title, children }) => {
  return (
    <VStack spacing={2}>
      <Text w={"full"} px={2} fontSize={"sm"} color={"gray.500"}>
        {title}
      </Text>
      {children}
    </VStack>
  );
};

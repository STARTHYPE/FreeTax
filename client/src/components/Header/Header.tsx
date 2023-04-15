import { FC } from "react";
import { HStack, VStack, Text, Divider } from "@chakra-ui/react";

export const Header: FC = () => {
  return (
    <VStack w={"full"} spacing={0}>
      <HStack p={3} w={"full"}>
        <Text fontWeight={"bold"}>FreeTax - Community Edition</Text>
      </HStack>
      <Divider />
    </VStack>
  );
};

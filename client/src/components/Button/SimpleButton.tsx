import { FC } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

/**
 * Button
 */
export const SimpleButton: FC<ButtonProps> = (props) => {
  return <Button borderWidth={2} bg={"clear"} {...props} />;
};

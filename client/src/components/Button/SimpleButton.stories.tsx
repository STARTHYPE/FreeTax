import { Meta } from "@storybook/react";
import { SimpleButton } from "./SimpleButton";

const meta = {
  title: "common/SimpleButton",
  component: SimpleButton,
} satisfies Meta<typeof SimpleButton>;

export default meta;

export const Template = () => <SimpleButton>hello</SimpleButton>;
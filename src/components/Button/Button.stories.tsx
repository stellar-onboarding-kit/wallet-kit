import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./index";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["default", "sm", "lg"],
      control: { type: "select" },
    },
    variant: {
      options: [
        "default",
        "secondary",
        "outline",
        "danger",
        "destructive",
        "success",
        "ghost",
        "link",
      ],
      control: { type: "select" },
    },
    children: {
      control: "text",
      description: "Button label",
      defaultValue: "Button",
    },
    onClick: { action: "clicked" }, // alternative to fn()
  },
  args: {
    size: "default",
    variant: "default",
    children: "Button",
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    size: "default",
    variant: "default",
    children: "Get started",
  },
};

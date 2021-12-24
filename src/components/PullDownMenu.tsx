import { FC } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  SpaceProps,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export interface Props {
  text: string;
  m?: SpaceProps["m"];
}

export const PullDownMenu: FC<Props> = (props: Props) => {
  return (
    <Menu>
      <MenuButton m={props.m} as={Button} rightIcon={<ChevronDownIcon />}>
        {`${props.text}:${props.m}`}
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};

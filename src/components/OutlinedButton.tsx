import { FC } from "react";
import { Button, SpaceProps } from "@chakra-ui/react";

export interface Props {
  text: string;
  m?: SpaceProps["m"];
}

export const OutlinedButton: FC<Props> = (props: Props) => {
  return (
    <Button colorScheme="blue" m={props.m}>{`${props.text}:${props.m}`}</Button>
  );
};

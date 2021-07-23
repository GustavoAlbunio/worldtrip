import { ReactNode } from "react";
import { Flex, FlexProps, useBreakpointValue } from "@chakra-ui/react";

interface ContainerProps extends FlexProps {
  children: ReactNode;
}

export function Container({ children, ...rest }: ContainerProps) {
  return (
    <Flex w="100%" maxWidth={1400} mx="auto" {...rest}>
      {children}
    </Flex>
  );
}

import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";

export const HomeCards = (props) => {
  return (
    <Flex
      color="#052142"
      height="200px"
      width="250px"
      maxW="sm"
      borderWidth="1px"
      rounded="sm"
      d="flex"
      justify="center"
      align="center"
      direction="column"
      flex={"0 0 auto"}
      bg={props.card.bg}
      ml="30px"
    >
      <Box ml="20px" mr="20px">
        <Text fontSize="35px" lineHeight="50px">
          {props.card.title}
        </Text>
        <Text fontSize="15px">{props.card.body}</Text>
      </Box>
    </Flex>
  );
};

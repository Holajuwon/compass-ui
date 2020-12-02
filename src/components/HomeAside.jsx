import React from "react";
import { Box, Flex, Image, Tag, TagLabel, Text } from "@chakra-ui/core";

export const HomeAside = () => {
  return (
    <Flex w="65vw" justify={["space-between"]} flexWrap="wrap" h="85vh" backgroundRepeat='no-repeat'>
      <Box w="30vw" d="flex" flexDir="column" justifyContent="space-between">
        <Tag variantColor="cyan" w="110px">
          <TagLabel color="cyan.500">Technology</TagLabel>
        </Tag>
        <Text fontSize="25px" color="" fontFamily="arial">
          5 powerful habits of successful designers.
        </Text>
        <Text>
          They are all iconic designers and the proponents of the design
          philosophy "Maximum meaning, minimalistic design."
        </Text>
        <Image
          src="https://res.cloudinary.com/dobztfsdj/image/upload/v1606909316/samples/people/xrspace-mova-vr-headset_y5x3hs.jpg"
          h="50vh"
          w="100%"
          backgroundSize="cover"
        />
      </Box>
      <Box w="30vw" d="flex" flexDir="column" justifyContent="space-between">
        <Image
          src="https://res.cloudinary.com/dobztfsdj/image/upload/v1606909074/samples/people/smiling-man-holding-smartphone_107420-20811_yuoev8.jpg"
          h="50vh"
          w="100%"
          rounded="sm"
        />
        <Tag variantColor="purple" w="80px">
          <TagLabel color="purple.500">Design</TagLabel>
        </Tag>
        <Text fontSize="25px" color="" fontFamily="arial">
          5 powerful habits of successful designers.
        </Text>
        <Text>
          They are all iconic designers and the proponents of the design
          philosophy "Maximum meaning, minimalistic design."
        </Text>
      </Box>
    </Flex>
  );
};

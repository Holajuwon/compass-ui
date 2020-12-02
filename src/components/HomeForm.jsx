import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/core";

export const HomeForm = () => {
  return (
    <Box pos="relative" marginY="30px">
      <Stack
        pos="absolute"
        w="25vw"
        m="5px"
        top="20vh"
        left="20px"
        color="white"
      >
        <Text fontSize="40px" whiteSpace="5px">
          <em>Get 30%</em> of <br /> your first Story
        </Text>
        <Text>
          Enter Your email address here to receive your discount code.
        </Text>
        <Flex justify="space-around">
          <Input
            name="email"
            placeholder="Your Email"
            variant="outlined"
            bg="grey"
            maxW="15vw"
          />
          <Button bg="#052142" color="white">
            Subscribe
          </Button>
        </Flex>
      </Stack>
      <Image
        src="https://res.cloudinary.com/dobztfsdj/image/upload/v1580686530/samples/landscapes/girl-urban-view.jpg"
        h="80vh"
        w="100%"
        backgroundSize="cover"
        bg='grey.900'
      />
    </Box>
  );
};

import React from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export const HomeForm = () => {
  return (
    <Box as="section" position="relative" minH={{ base: "440px", md: "520px" }} overflow="hidden" bg="#17251f">
      <Image
        src="https://res.cloudinary.com/dobztfsdj/image/upload/v1580686530/samples/landscapes/girl-urban-view.jpg"
        alt="A woman looking out over a city from a rooftop"
        position="absolute"
        inset={0}
        w="100%"
        h="100%"
        objectFit="cover"
        objectPosition="center 42%"
        loading="lazy"
      />
      <Box position="absolute" inset={0} bg="linear-gradient(90deg, rgba(12, 28, 24, 0.84), rgba(12, 28, 24, 0.25))" />
      <Flex position="relative" zIndex={1} minH={{ base: "440px", md: "520px" }} maxW="1200px" mx="auto" px={{ base: 6, md: 10 }} py={16} align="center">
        <Box maxW="600px" color="white">
          <Text color="#b7ded0" fontWeight="bold" textTransform="uppercase" fontSize="sm">Make room for your voice</Text>
          <Heading as="h2" mt={4} fontFamily="Georgia, serif" fontSize={{ base: "4xl", md: "5xl" }} fontWeight="medium" lineHeight="1.1">
            Have a story to tell?
          </Heading>
          <Text mt={5} maxW="480px" color="whiteAlpha.900" fontSize="lg" lineHeight="1.7">
            Share an idea, a lesson, or a perspective with the Compass community.
          </Text>
          <Button
            as={RouterLink}
            to="/register"
            mt={7}
            size="lg"
            bg="#b7ded0"
            color="#17251f"
            _hover={{ bg: "white", transform: "translateY(-2px)" }}
            rightIcon={<FaArrowRight />}
          >
            Create your account
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

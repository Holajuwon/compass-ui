import React from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export const Home = () => {
  return (
    <Box as="section" position="relative" minH={{ base: "580px", md: "680px" }} overflow="hidden" bg="#17251f">
      <Image
        src="https://res.cloudinary.com/dobztfsdj/image/upload/c_lfill,h_700,w_2134/v1606909890/samples/people/vr_boy1_rgqhxi.jpg"
        alt="A young person exploring a virtual world with a headset"
        position="absolute"
        inset={0}
        w="100%"
        h="100%"
        objectFit="cover"
        objectPosition="center 40%"
      />
      <Box position="absolute" inset={0} bg="linear-gradient(90deg, rgba(12, 28, 24, 0.88) 0%, rgba(12, 28, 24, 0.56) 48%, rgba(12, 28, 24, 0.08) 100%)" />
      <Flex position="relative" zIndex={1} minH={{ base: "580px", md: "680px" }} maxW="1200px" mx="auto" px={{ base: 6, md: 10 }} py={{ base: 16, md: 24 }} align="center">
        <Box maxW="660px" color="white">
          <Text color="#b7ded0" fontWeight="bold" textTransform="uppercase" fontSize="sm">Ideas for a curious world</Text>
          <Heading as="h1" mt={4} fontFamily="Georgia, serif" fontWeight="medium" fontSize={{ base: "5xl", md: "7xl" }} lineHeight="1.02">
            Stories that move you forward.
          </Heading>
          <Text mt={6} maxW="480px" fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.900" lineHeight="1.7">
            Find thoughtful perspectives on the people, ideas, and work changing what comes next.
          </Text>
          <Link to="/posts">
            <Button mt={8} size="lg" bg="#b7ded0" color="#17251f" _hover={{ bg: "white", transform: "translateY(-2px)" }} rightIcon={<FaArrowRight />}>
              Discover stories
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

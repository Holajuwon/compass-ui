import React from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

export const Home = () => {
  return (
    <Box as="section" position="relative" minH={{ base: "650px", md: "min(760px, 82vh)" }} overflow="hidden" bg="#17231f">
      <Image
        src="https://res.cloudinary.com/dobztfsdj/image/upload/c_lfill,h_700,w_2134/v1606909890/samples/people/vr_boy1_rgqhxi.jpg"
        alt="A young person exploring a virtual world with a headset"
        position="absolute"
        inset={0}
        w="100%"
        h="100%"
        objectFit="cover"
        objectPosition="center 38%"
        className="image-reveal"
      />
      <Box position="absolute" inset={0} bg="linear-gradient(90deg, rgba(15, 25, 21, 0.84) 0%, rgba(15, 25, 21, 0.46) 48%, rgba(15, 25, 21, 0.05) 100%)" />
      <Flex position="relative" zIndex={1} minH={{ base: "650px", md: "min(760px, 82vh)" }} maxW="1320px" mx="auto" px={{ base: 6, md: 12 }} py={{ base: 16, md: 20 }} align="center">
        <Box maxW="760px" color="white">
          <Flex className="stagger-in" direction="column" align="flex-start">
            <Flex align="center" gap={3}>
              <Box w="30px" h="1px" bg="signal" />
              <Text color="signal" fontWeight="bold" textTransform="uppercase" fontSize="xs">The Compass Journal</Text>
            </Flex>
            <Heading as="h1" mt={6} fontWeight={500} fontSize={{ base: "5xl", md: "7xl" }} lineHeight={{ base: "0.98", md: "0.95" }} maxW="740px">
              Read wide.<br />Think deeper.
          </Heading>
            <Text mt={6} maxW="520px" fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.900" lineHeight="1.75">
              A journal for curious minds. Fresh perspectives on the ideas, people, and creative work shaping what comes next.
            </Text>
            <Flex mt={8} gap={4} wrap="wrap" align="center">
              <Button as={Link} to="/posts" size="lg" bg="signal" color="ink" borderRadius="full" px={7} rightIcon={<FaArrowRight />} _hover={{ bg: "white", transform: "translateY(-2px)" }}>
                Explore the journal
              </Button>
              <Button as={Link} to="/editor" size="lg" variant="ghost" color="white" borderRadius="full" _hover={{ bg: "whiteAlpha.200" }} leftIcon={<FaArrowDown />}>
                Share your story
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Flex position="absolute" bottom={6} right={{ base: 6, md: 12 }} zIndex={1} color="whiteAlpha.800" fontSize="xs" align="center" gap={3}>
        <Box h="1px" w="40px" bg="whiteAlpha.600" />
        STORIES FOR THE CURIOUS
      </Flex>
    </Box>
  );
};

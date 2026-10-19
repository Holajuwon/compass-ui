import React from "react";
import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export const HomeAside = () => {
  const stories = [
    {
      category: "Technology",
      title: "The people building a more human digital world",
      image: "https://res.cloudinary.com/dobztfsdj/image/upload/v1606909316/samples/people/xrspace-mova-vr-headset_y5x3hs.jpg",
      alt: "A person trying a virtual reality headset",
    },
    {
      category: "Design",
      title: "Less noise, more meaning: a case for thoughtful design",
      image: "https://res.cloudinary.com/dobztfsdj/image/upload/v1606909074/samples/people/smiling-man-holding-smartphone_107420-20811_yuoev8.jpg",
      alt: "A person using a smartphone",
    },
  ];

  return (
    <Box as="section" maxW="1200px" mx="auto" px={{ base: 5, md: 10 }} pb={{ base: 14, md: 24 }}>
      <Heading as="h2" fontFamily="Georgia, serif" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="medium" mb={8}>
        On our minds
      </Heading>
      <Flex gap={{ base: 8, md: 10 }} direction={{ base: "column", md: "row" }}>
        {stories.map((story) => (
          <Link
            as={RouterLink}
            to="/posts"
            key={story.category}
            flex="1"
            color="inherit"
            textDecoration="none"
            _hover={{ textDecoration: "none", color: "#246b59" }}
            role="group"
          >
            <Image
              src={story.image}
              alt={story.alt}
              w="100%"
              h={{ base: "240px", md: "300px" }}
              objectFit="cover"
              loading="lazy"
              transition="transform 180ms ease"
              _groupHover={{ transform: "scale(1.015)" }}
            />
            <Text mt={5} color="#567468" fontSize="sm" fontWeight="bold" textTransform="uppercase">
              {story.category}
            </Text>
            <Heading as="h3" mt={2} fontFamily="Georgia, serif" fontSize="2xl" fontWeight="medium" lineHeight="1.25">
              {story.title}
            </Heading>
            <Flex align="center" gap={2} mt={4} color="#246b59" fontWeight="semibold" fontSize="sm">
              Read stories <FaArrowRight aria-hidden="true" />
            </Flex>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

import React from "react";
import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export const HomeAside = () => {
  const stories = [
    {
      category: "Field notes / 01",
      title: "The next frontier is more human than we think.",
      dek: "A closer look at how new tools are changing the way we learn, make, and connect.",
      image: "https://res.cloudinary.com/dobztfsdj/image/upload/v1606909316/samples/people/xrspace-mova-vr-headset_y5x3hs.jpg",
      alt: "A person trying a virtual reality headset",
      query: "technology",
    },
    {
      category: "Field notes / 02",
      title: "Good design gives the everyday a second look.",
      dek: "Small observations, considered details, and the ideas that stay with us.",
      image: "https://res.cloudinary.com/dobztfsdj/image/upload/v1606909074/samples/people/smiling-man-holding-smartphone_107420-20811_yuoev8.jpg",
      alt: "A person using a smartphone",
      query: "design",
    },
  ];

  return (
    <Box as="section" maxW="1320px" mx="auto" px={{ base: 5, md: 10 }} pb={{ base: 14, md: 24 }}>
      <Flex justify="space-between" align={{ base: "flex-start", md: "flex-end" }} gap={5} mb={8} direction={{ base: "column", md: "row" }}>
        <Box>
          <Text color="green.700" fontSize="xs" fontWeight="bold" textTransform="uppercase">From the journal</Text>
          <Heading as="h2" mt={2} fontSize={{ base: "3xl", md: "4xl" }}>A little more perspective.</Heading>
        </Box>
        <Link as={RouterLink} to="/posts" color="green.700" fontWeight="semibold" fontSize="sm" _hover={{ color: "ink" }}>
          All stories <FaArrowRight aria-hidden="true" />
        </Link>
      </Flex>
      <Flex className="stagger-in" gap={{ base: 10, md: 8 }} direction={{ base: "column", md: "row" }}>
        {stories.map((story) => (
          <Link
            as={RouterLink}
            to={`/posts?q=${story.query}`}
            key={story.category}
            flex="1"
            color="inherit"
            textDecoration="none"
            className="interactive-lift"
            _hover={{ textDecoration: "none", color: "green.700" }}
            role="group"
          >
            <Image
              src={story.image}
              alt={story.alt}
              w="100%"
              h={{ base: "250px", md: "360px" }}
              objectFit="cover"
              loading="lazy"
              borderRadius="2px"
              transition="transform 240ms ease"
              _groupHover={{ transform: "scale(1.015)" }}
            />
            <Text mt={5} color="green.700" fontSize="xs" fontWeight="bold" textTransform="uppercase">
              {story.category}
            </Text>
            <Heading as="h3" mt={2} fontSize="2xl" lineHeight="1.2">
              {story.title}
            </Heading>
            <Text mt={3} maxW="520px" color="gray.600" lineHeight="1.7">{story.dek}</Text>
            <Flex align="center" gap={2} mt={4} color="#246b59" fontWeight="semibold" fontSize="sm">
              Explore the topic <FaArrowRight aria-hidden="true" />
            </Flex>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

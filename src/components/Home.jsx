import React from "react";
import { Box, Divider, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export const Home = () => {
  return (
    <Box>
      <Flex
        maxW="sm"
        borderWidth="1px"
        rounded="sm"
        overflow="hidden"
        height="250px"
        width="300px"
        align="center"
        direction="column"
        justify="center"
        pos="absolute"
        zIndex={2}
        top={["40vh", "40vh", "40vh", "70vh"]}
        left="100px"
        bg="#052142"
      >
        <Link to="/posts">
          <Box color="white">
            <Text fontSize="35px" lineHeight="12px">
              Discover
            </Text>
            <Text fontSize="30px" color="#3da1ae">
              digital world
            </Text>
            <Text fontSize="15px">
              Popular news from best sources <br /> and creators. Your digital
              world
              <br /> in one place.
            </Text>
            <IconButton
              variant="outline"
              colorScheme="#052142"
              icon={<FaChevronRight />}
            />
          </Box>
        </Link>
      </Flex>
      <Image
        src="https://res.cloudinary.com/dobztfsdj/image/upload/c_lfill,h_700,w_2134/v1606909890/samples/people/vr_boy1_rgqhxi.jpg"
        h="70vh"
        w="100%"
        backgroundSize="cover"
      />
      <Text
        textAlign="center"
        fontSize="25px"
        lineHeight="100px"
        mb={["0", "0", "0", "100px"]}
      >
        Read Your Stories.
      </Text>

      <Flex p="10px" justify="space-around">
        <Text color="" fontSize="25px" fontFamily="times news roman">
          Explore by category.
        </Text>
        <Box as="button" rounded="md" bg="#3da1ae" color="white" px={4} h={8}>
          See all
        </Box>
      </Flex>
      <Divider borderColor="black" w="80vw" mx="auto"  mb="30px" />
    </Box>
  );
};

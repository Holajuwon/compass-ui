import React from "react";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PostCard = (props) => {
  const { content } = props;
  const cardBg = useColorModeValue("whatsapp.100", "whatsapp.300");
  return (
    <Box
      p="5"
      shadow="lg"
      bg={cardBg}
      my="4"
      w="70vw"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
    >
      <Heading size={"md"}>{content.post_title}</Heading>
      <Link
        to={{
          pathname: `/post/${content.post_title.replace(/ /g, "_")}`,
          state: { ...content },
          hash: `#compass${Math.trunc(Math.random() * 100)}`,
        }}
      >
        <Text color="brand.500" pos="" isTruncated>
          {props.content.post_content || "Read More"}
        </Text>
      </Link>
    </Box>
  );
};

export default PostCard;

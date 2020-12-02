import React from "react";
import { Box, Heading, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";

const PostCard = (props) => {
  const { content } = props;
  return (
    <Box p="3" m="1" w="70vw" borderWidth="1px" rounded="lg" overflow="hidden">
      <Heading size="lg">{content.post_title}</Heading>
      <Link
        to={{
          pathname: `/post/${content.post_title.replace(/ /g, '_')}`,
          state: { ...content },
          hash: `#compass${Math.trunc(Math.random() * 100)}`,
        }}
      >
        <Text color="blue.200" pos="" isTruncated>
          {props.content.post_content || "Read More"}
        </Text>
      </Link>
    </Box>
  );
};

export default PostCard;

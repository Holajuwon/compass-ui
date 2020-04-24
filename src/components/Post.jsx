import React, { useState, useEffect } from "react";
import { Stack, Heading, Text, Box } from "@chakra-ui/core";
import { useLocation } from "react-router-dom";

const Post = () => {
  const location = useLocation();
  const [content, setContent] = useState({});

  useEffect(() => {
    setContent(location.state);
  }, []);

  return (
    content && (
      <Stack align="center" w="90vw">
        <Heading fontSize="1.5em">
          {content.post_title || "Blank Title"}
        </Heading>
        <Box w="70vw" marginY="5">
          <Text style={{ whiteSpace: "pre-wrap" }}>{content.post_content}</Text>
        </Box>
      </Stack>
    )
  );
};

export default Post;

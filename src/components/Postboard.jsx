import React, { useState } from "react";
import {
  Box,
  Textarea,
  Input,
  Stack,
  Button,
  Heading,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  useToast,
} from "@chakra-ui/core";
import { FaPen, FaLightbulb } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { createPost } from "./api";

const Postboard = () => {
  const history = useHistory();
  const toast = useToast();

  const [post, setPost] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };
  const handleSubmit = async () => {
    const data = await createPost(post);
    if (data) {
      toast({
        title: "Post created successfully.",
        description: "You have successfully created your post.",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
      history.push("/");
    } else {
      toast({
        title: "Couldn't create post.",
        description: "Make sure your post has a title and some content.",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Stack spacing={8} align="center" w="90vw">
      <Box d="flex" alignItems="center" justifyContent="space-between" mt="1">
        <Box as={FaLightbulb} size="30px" color="yellow.400" />
        <Heading fontSize={{ md: "3rem", sm: "2rem", xs: "1.5rem" }}>
          Engage Your Creativity
        </Heading>
        <Box as={FaPen} size="25px" color="green.400" />
      </Box>
      <Textarea
        w="80%"
        variant="flushed"
        size="lg"
        fontSize="2em"
        placeholder="Title"
        height="3vh"
        textAlign="center"
        onChange={handleChange}
        name="title"
      />
      <InputGroup size="sm">
        <InputLeftAddon children="https://" />
        <Input type="file" rounded="0" placeholder="mysite" display="none" />
        <InputRightAddon children=".com" />
      </InputGroup>
      <Textarea
        minH="40em"
        size="5xl"
        placeholder="Write You Post Here"
        fontSize="1.3em"
        onChange={handleChange}
        name="content"
      />

      <Button
        size="md"
        height="48px"
        width="200px"
        border="2px"
        borderColor="blue.500"
        onClick={handleSubmit}
      >
        Publish
      </Button>
    </Stack>
  );
};

export default Postboard;

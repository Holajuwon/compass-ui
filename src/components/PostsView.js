import React, { useEffect, useState } from "react";
import {
  Flex,
  Stack,
  Heading,
  Button,
  Box,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import PostCard from "./PostCard";
import { fetchNews } from "./api";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const PostsView = () => {
  const [posts, setPosts] = useState([]);
  const toast = useToast();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.onLine) {
      toast({
        title: "You are using the offline version of this app",
        description: "Please switch on your internet to enjoy all features",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }
    setTimeout(async () => {
      try {
        const news = navigator.onLine
          ? await fetchNews()
          : JSON.parse(localStorage.getItem("posts"));
        if (news) setPosts(news);
        setLoading(false);
      } catch (error) {
        toast({
          title: "Encountered An Error While Fetching Posts",
          description: "Try refreshing the page",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        setLoading(false);
      }
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !loading ? (
    <Stack align="center">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="80vw"
        alignSelf="center"
        p={2}
      >
        <Heading as="h1" textAlign="center">
          Latest Posts
        </Heading>
        <Link to="/editor">
          <Button leftIcon={<MdAdd />} colorScheme="brand" variant="outline">
            New Post
          </Button>
        </Link>
      </Box>
      {posts.map((item, index) => (
        <PostCard content={item} key={item.post_id} />
      ))}
    </Stack>
  ) : (
    <>
      <Heading>Latest Posts</Heading>
      <Flex h="30vw" alignItems="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    </>
  );
};

export default PostsView;

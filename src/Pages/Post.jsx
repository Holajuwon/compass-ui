import React, { useEffect, useState } from "react";
import { Box, Heading, Text, useToast } from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Post from "../components/Post";
import AddComment from "../components/AddComment";
import CommentList from "../components/CommentList";
import { createComment, fetchComment, fetchNews } from "../components/api";
import samplePosts from "../data/samplePosts";

const normalizeTitle = (title = "") => title.trim().replace(/_/g, " ").toLowerCase();

const readCachedPosts = () => {
  try {
    const posts = JSON.parse(localStorage.getItem("posts") || "[]");
    return Array.isArray(posts) ? posts : [];
  } catch (error) {
    return [];
  }
};

const findPost = (posts, slug) =>
  posts.find((post) => normalizeTitle(post.post_title) === normalizeTitle(slug)) || null;

const PostPage = () => {
  const location = useLocation();
  const { string: slug } = useParams();
  const toast = useToast();
  const [story, setStory] = useState(() =>
    location.state?.post_title && normalizeTitle(location.state.post_title) === normalizeTitle(slug)
      ? location.state
      : findPost([...readCachedPosts(), ...samplePosts], slug)
  );
  const [loading, setLoading] = useState(!story);
  const [comments, setComments] = useState([]);
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    const routeStory = location.state?.post_title && normalizeTitle(location.state.post_title) === normalizeTitle(slug)
      ? location.state
      : null;
    const cachedStory = findPost([...readCachedPosts(), ...samplePosts], slug);

    if (routeStory || cachedStory) {
      setStory(routeStory || cachedStory);
      setLoading(false);
      return undefined;
    }

    let active = true;
    setStory(null);
    setLoading(true);
    fetchNews()
      .then((posts) => {
        if (active) setStory(Array.isArray(posts) ? findPost(posts, slug) : null);
      })
      .catch(() => {
        if (active) setStory(null);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [location.state, slug]);

  useEffect(() => {
    let active = true;
    if (!story?.post_id || story.isDemo) {
      setComments([]);
      setCommentCount(0);
      return () => {
        active = false;
      };
    }

    fetchComment(story.post_id).then((result) => {
      if (!active) return;
      const fetchedComments = Array.isArray(result?.comment) ? result.comment : [];
      setComments(fetchedComments);
      setCommentCount(Number(result?.count) || fetchedComments.length);
    });

    return () => {
      active = false;
    };
  }, [story?.post_id, story?.isDemo]);

  const handleCommentSubmit = async (newComment) => {
    try {
      const result = await createComment(newComment, story.post_id);
      if (!result) throw new Error("Comment was not accepted");
      const addedComments = Array.isArray(result) ? result : [result];
      setComments((current) => [...addedComments, ...current]);
      setCommentCount((current) => current + addedComments.length);
      toast({ title: "Comment added", status: "success", duration: 3000, isClosable: true });
    } catch (error) {
      toast({ title: "Comment could not be added", description: "Please check your connection and try again.", status: "error", duration: 4000, isClosable: true });
    }
  };

  return (
    <Layout>
      <Post content={story} loading={loading} />
      {story?.isDemo ? (
        <Box maxW="900px" w="full" mx="auto" px={{ base: 5, md: 10 }} pb={{ base: 12, md: 18 }}>
          <Box role="status" px={4} py={3} bg="green.50" borderLeft="3px solid" borderColor="green.600">
            <Text color="green.900" fontSize="sm">This is a sample story. Comments are available on live stories.</Text>
          </Box>
        </Box>
      ) : story && (
        <Box maxW="900px" w="full" mx="auto" px={{ base: 5, md: 10 }} pb={{ base: 12, md: 18 }}>
          <Box pt={8} borderTop="1px solid" borderColor="blackAlpha.200">
            <Heading as="h2" fontSize="2xl">Join the conversation</Heading>
            <Text mt={2} mb={6} color="gray.600">What stayed with you from this story?</Text>
            <AddComment counts={commentCount} submit={handleCommentSubmit} />
            <CommentList comment={comments} />
          </Box>
        </Box>
      )}
    </Layout>
  );
};

export default PostPage;
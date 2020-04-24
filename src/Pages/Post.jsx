import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Post from "../components/Post";
import AddComment from "../components/AddComment";
import { fetchComment, createComment } from "../components/api";
import CommentList from "../components/CommentList";

export default ({ match, location }) => {
  const [comment, setComment] = useState([]);
  const [message, setMessage] = useState();
  const [count, setCount] = useState(0);
  const { state } = location;
  var id;
  if (state) {
    id = state.post_id;
  }

  useEffect(() => {
    setTimeout(async () => {
      const comments = await fetchComment(id);
      if (comments) {
        setComment(comments.comment);
        setCount(comments.count);
      }
    }, 1000);
  }, [state, comment, id]);

  const handleCommentSubmit = async (newComment) => {
    const data = await createComment(newComment, id);
    if (data) {
      setComment([...data, ...comment]);
      setMessage({
        title: "Successful.",
        description: "Comment was posted successful.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } else {
      setMessage({
        title: "Note.",
        description: "You must add some contents to comment.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
    setMessage();
  };

  return (
    <Layout>
      <Post/>
      <AddComment
        counts={count}
        submit={handleCommentSubmit}
        message={message}
      />
      <CommentList comment={comment} />
    </Layout>
  );
};

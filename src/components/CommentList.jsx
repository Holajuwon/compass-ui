import React, { useState, useEffect } from "react";
import { Stack } from "@chakra-ui/react";
import Comment from "./Comment";
import { deleteComment } from "./api";

const CommentList = ({ comment }) => {
  const [comments, setComments] = useState([]);

  const handleDelete = async (id) => {
    const data = await deleteComment(id);
    const newComments = comments.filter(
      (item) => item.comment_id !== data[0].comment_id
    );
    setComments(newComments);
  };

  useEffect(() => {
    setComments(comment);
  }, [comment]);

  return (
    comments && (
      <Stack>
        {comments.map((item) => (
          <Comment
            comment={item}
            key={item.comment_id}
            handleDelete={handleDelete}
          />
        ))}
      </Stack>
    )
  );
};

export default CommentList;

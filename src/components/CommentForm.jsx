import React, { useState } from "react";
import {
  Box,
  Button,
  Textarea,
  ButtonGroup,
  Alert,
  AlertIcon,
} from "@chakra-ui/core";
import { MdCancel, MdDone } from "react-icons/md";

export const CommentForm = (props) => {
  const { submit, editValue, handleCancel } = props;

  const [comment, setComment] = useState();
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
    setCount(e.target.value.split(" ").length);
  };

  return (
    <Box w="80vw">
      {count > 10 && (
        <Alert status="warning" variant="solid">
          <AlertIcon />
          Maximum number of words is 15, You have {count} words already
        </Alert>
      )}
      <Box>
        <Textarea
          isInvalid={count > 15}
          placeholder="Write your comment here"
          onChange={handleChange}
          spellcheck={true}
          value={comment ? comment.comment : editValue}
          name="comment"
          autoFocus
        />
        <ButtonGroup spacing={4} display="flex" justifyContent="flex-end">
          <Button
            leftIcon={MdCancel}
            variantColor="pink"
            variant="solid"
            onClick={() => {
              handleCancel();
            }}
          >
            Cancel
          </Button>
          <Button
            rightIcon={MdDone}
            variantColor="blue"
            variant="outline"
            onClick={() => {
              submit(comment);
              handleCancel();
            }}
          >
            Submit
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

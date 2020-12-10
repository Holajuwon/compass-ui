import React, { useState } from "react";
import {
  Box,
  Avatar,
  Text,
  IconButton,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  Button,
} from "@chakra-ui/react";
import { FaReply, FaHeart } from "react-icons/fa";
import { MdMoreHoriz, MdDelete, MdEdit } from "react-icons/md";
import { CommentForm } from "./CommentForm";
import { editComment } from "./api";

const Comment = ({ comment, handleDelete }) => {
  const [edit, setEdit] = useState(false);

  const handleEdit = async (newComment) => {
    try {
      await editComment(newComment, comment.comment_id);
    } catch (error) {
      console.error({ error });
    }
  };

  const handleCancel = () => {
    setEdit(false);
  };

  return !edit ? (
    <Box p="4" m="1" borderRadius="lg" border="1px" width="80vw">
      <Flex justifyContent="space-between">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-end"
          mb="1"
        >
          <Avatar />
          <Text>{comment.author}</Text>
        </Box>
        <Popover>
          <PopoverTrigger>
            <IconButton
              variant="ghost"
              colorScheme="blue"
              aria-label="options"
              fontSize="25px"
              icon={<MdMoreHoriz />}
              isRound
            />
          </PopoverTrigger>
          <PopoverContent zIndex={4} w="">
            <PopoverArrow />
            <PopoverHeader>Options</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody display="flex" flexDir="column">
              <Button
                leftIcon={<MdDelete />}
                colorScheme="blue"
                m="1"
                onClick={() => {
                  handleDelete(comment.comment_id);
                }}
              >
                Delete
              </Button>
              <Button
                leftIcon={<MdEdit />}
                colorScheme="blue"
                m="1"
                onClick={() => {
                  setEdit(true);
                }}
              >
                Edit
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="space-between"
      >
        <Text>{comment.user_comment}</Text>
        <Flex justifyContent="space-between" alignItems="flex-end">
          <IconButton aria-label="icon" icon={<FaHeart />} color="red.400" />
          <IconButton aria-label="icon" icon={<FaReply />} />
        </Flex>
      </Box>
    </Box>
  ) : (
    <Box marginTop="1">
      <CommentForm
        submit={handleEdit}
        editValue={comment.user_comment}
        handleCancel={handleCancel}
      />
    </Box>
  );
};

export default Comment;

import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Text,
  Stack,
  useToast,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/core";
import { FaPen } from "react-icons/fa";
import { CommentForm } from "./CommentForm";

const AddComment = ({ counts, submit, message }) => {
  const toast = useToast();
  const [countC, setCountC] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setCountC(counts);
    if (message) toast(message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counts, message]);

  const handleCancel = () => {
    setToggle(false);
  };

  return (
    <Stack align="center">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="lg"
        border="1px"
        width="80vw"
        alignSelf="center"
        flexWrap="wrap"
        p={4}
      >
        {countC <= 0 && <Text fontSize="1.3em">No Comments Yet</Text>}
        {countC > 0 && (
          <Stat>
            <StatLabel>Comments</StatLabel>
            <StatNumber>{countC}</StatNumber>
          </Stat>
        )}
        <Button
          leftIcon={FaPen}
          variantColor="facebook"
          variant="solid"
          onClick={() => {
            setToggle(true);
          }}
        >
          Add a Comment
        </Button>
      </Box>
      {toggle && <CommentForm submit={submit} handleCancel={handleCancel} />}
    </Stack>
  );
};

export default AddComment;

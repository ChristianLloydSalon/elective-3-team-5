import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Textarea, useToast,
} from "@chakra-ui/react";
import { useAuth } from "hooks/auth";

import TextareaAutosize from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { useUpdatePost, usePosts } from "hooks/posts";

export default function EditPost({ isOpen, onClose , post}) {
  const { id, text } = post;

  const { updatePost, isLoading: updateLoading } = useUpdatePost(id,onClose);

  const { register, handleSubmit, reset } = useForm();
  const [text1, setText] = useState(text);
  const toast = useToast();

   
  function handleUpdatePost(data) {
    if (data.text === text) {
      toast({
        title: "No post updated",
        description: "Please update your post",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

      return;
    }
      updatePost({
        //id: user.id,
        text: data.text,
      });
      //if (data){
      //  onClose();
      //}

      //reset();

    }
  let [value, setValue] = useState(text);
  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }




  //if (updateLoading) return "Loading...";

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Post</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <form onSubmit={handleSubmit(handleUpdatePost)}>
          <HStack spacing="5">
            <Textarea
              as={TextareaAutosize}
              resize="none"
              mt="5"
              minRows={3}
              {...register("text", {required: true})}
              value={value}
              onChange={handleInputChange}
              >
              
          </Textarea>
          </HStack>
          <Button
            loadingText="Posting..."
            w="full"
            my="6"
            colorScheme="blue"
            isLoading={updateLoading}
            //onClick={updatePost}
            type="submit"
          >
            Post
          </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}






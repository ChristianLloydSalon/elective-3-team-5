import {
  Button,
//   HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Input,
} from "@chakra-ui/react";  
//import TextareaAutosize from "react-textarea-autosize";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useUpdateUsername} from "hooks/posts";
import { useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
//import {   usernameValidate,} from "utils/form-validate";


export default function EditUsername({ isOpen, onClose , username}) {
  //const { id, text } = post;
  const { id } = useParams();
  const { updateUsername, isLoading: updateLoading } = useUpdateUsername(id, onClose);
  const { register, handleSubmit } = useForm();
  const toast = useToast();

  function handleUpdateUsername(data) {
    if (data.username === username) {
      toast({
        title: "No username updated",
        description: "Please update your username",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

      return;
    }

    if (data.username.length < 6) {
      //console.log(username.length);
      toast({
        title: "Invalid Username",
        description: "Username must be at least 6 characters long",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
     
    }
      updateUsername({
        //id: user.id,
        username: data.username,
      });
      //if (data){
      //  onClose();
      //}
      //reset();
      //alert(data.username);
    }
  let [value, setValue] = useState(username);
  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }

  if (updateLoading) return "Loading...";

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Username</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <form onSubmit={handleSubmit(handleUpdateUsername)}>
            <Input
              //as={TextareaAutosize}
              //resize="none"
              //mt="5"
              //minRows={3}
              {...register("username", {required: true})}
              value={value}
              onChange={handleInputChange}
              />
          <Button
            loadingText="Updating Username..."
            w="full"
            my="6"
            colorScheme="blue"
            isLoading={updateLoading}
           // onClick={updateUsername}
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

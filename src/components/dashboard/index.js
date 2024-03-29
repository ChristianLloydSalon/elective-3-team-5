import { Box, Button, Heading, HStack, Textarea, useColorMode } from "@chakra-ui/react";
import PostsLists from "components/post/PostsList";
import { useAuth } from "hooks/auth";
import { useAddPost, usePosts } from "hooks/posts";
import { useForm,  } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";


function NewPost() {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addingPost } = useAddPost();
  const { user, isLoading: authLoading } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();

  function handleAddPost(data) {
    addPost({
      uid: user.id,
      text: data.text,
    });
    reset();
  }

  return (
    <Box maxW="600px" mx="auto" py="10">
      <form onSubmit={handleSubmit(handleAddPost)}>
        <HStack justify="space-between">
          <Heading size="lg" bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'
>
  POSHER</Heading>

          <Button
            // colorScheme="teal"
            as='button'
            p={4}
            color='white'
            fontWeight='bold'
            borderRadius='md'
            bgGradient='linear(to-r, blue.500, blue.500)'
            _hover={{
              bgGradient: 'linear(to-r, yellow.500, red.500)',
            }}
            
             type="submit"
             isLoading={authLoading || addingPost}
             loadingText="Loading"
          >
            Post
          </Button>
          
        </HStack>
        <Textarea
          as={TextareaAutosize}
          resize="none"
          mt="5"
          placeholder="What's on your mind?..."
          minRows={3}
          {...register("text", { required: true })}
        />
      </form>
    </Box>
  );
}

export default function Dashboard() {
  const { posts, isLoading } = usePosts();

  if (isLoading) return "Loading posts...";

  return (
    <>
      <NewPost />
      <PostsLists posts={posts} />
    </>
  );
}

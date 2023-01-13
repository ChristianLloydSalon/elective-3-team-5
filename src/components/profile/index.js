import {Button,Divider,Flex,HStack,Stack,Text,useDisclosure,IconButton,} from "@chakra-ui/react";
import PostsList from "components/post/PostsList";
import { usePosts } from "hooks/posts";
import { useUser } from "hooks/users";
import { useParams } from "react-router-dom";
import Avatar from "./Avatar";
import { format } from "date-fns";
import EditProfile from "./EditProfile";
import { useAuth } from "hooks/auth";

import {
  FaPencilAlt,
} from "react-icons/fa";
 
import EditUsername from "./EditUsername";

export default function Profile() {
  const { id } = useParams();
  const { posts, isLoading: postsLoading } = usePosts(id);
  const { user, isLoading: userLoading } = useUser(id);
  const { user: authUser, isLoading: authLoading } = useAuth(); 
  const { isOpen: isAvatarOpen, onOpen: onAvatarOpen, onClose: onAvatarClose } = useDisclosure();
 
  const { isOpen: isUsernameOpen, onOpen: onUsernameOpen, onClose: onUsernameClose } = useDisclosure();
  if (userLoading) return "Loading Profile...";

  return (
    <Stack spacing="5">
      <Flex p={["4", "6"]} pos="relative" align="center">
        <Avatar size="2xl" user={user} />

        {!authLoading && authUser.id === user.id && (
          <Button
            pos="absolute"
            mb="2"
            top="6"
            right="6"
            colorScheme="blue"
            onClick={onAvatarOpen}
          >
            Change avatar
          </Button>
        )}

        <Stack ml="10">
          <Text fontSize="2xl" textAlign="left" fontWeight="bold">{user.username}  
     
      {!authLoading && authUser.id === user.id && (
          < IconButton variant="ghost" isRound>
      <FaPencilAlt color="blue" onClick={onUsernameOpen}/> 
      </IconButton>
      
        )}
         </Text>
          <HStack spacing="10">
            <Text color="black.700" fontSize={["sm", "lg"]}>
              Posts: {posts.length}
            </Text>
            <Text color="black.700" fontSize={["sm", "lg"]}>
              Email: {user.email}
            </Text> 
            <Text color="black.700" fontSize={["sm", "lg"]} >
              Joined: {format(user.date, "MMMM YYY")}
            </Text>
          </HStack>
        </Stack>
        <EditProfile isOpen={isAvatarOpen} onClose={onAvatarClose} />
        
        <EditUsername isOpen={isUsernameOpen} onClose={onUsernameClose} username={user.username}/>
      </Flex>
      <Divider />

      {postsLoading ? (
        <Text>Posts are loading...</Text>
      ) : (
        <PostsList posts={posts} />
      )}
    </Stack>
  );
}

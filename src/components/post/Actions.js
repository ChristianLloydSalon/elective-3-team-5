import { Flex, IconButton, useDisclosure} from "@chakra-ui/react";
import { useAuth } from "hooks/auth";
import {
  FaRegHeart,
  FaHeart,
  FaComment,
  FaRegComment,
  FaTrash,FaRegEdit,FaEdit
} from "react-icons/fa";
import {
  FcLike,
  FcLikePlaceholder,
  FcSms,
} from "react-icons/fc";
import { useToggleLike, useDeletePost, useUpdatePost } from "hooks/posts";
import { Link } from "react-router-dom";
import { PROTECTED } from "lib/routes";
import { useComments } from "hooks/comments";
import EditPost from "./EditPost";

export default function Actions({ post }) {
  const { id, likes, uid } = post;
  const { user, isLoading: userLoading } = useAuth();

  const isLiked = likes.includes(user?.id);
  const config = {
    id,
    isLiked,
    uid: user?.id,
  };

  const { toggleLike, isLoading: likeLoading } = useToggleLike(config);
  const { deletePost, isLoading: deleteLoading } = useDeletePost(id);
  const { comments, isLoading: commentsLoading } = useComments(id);
 // const { updatePost, isLoading: updateLoading } = useUpdatePost(id);

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex p="2">
      <Flex alignItems="center">
        <IconButton
          onClick={toggleLike}
          isLoading={likeLoading || userLoading}
          size="md"
          colorScheme="red"
          variant="ghost"
          //icon={isLiked ? <FcLike /> : <FaRegHeart />}
          
          icon={isLiked ? < FcLike/> : < FaRegHeart />}
          isRound>
          
        </IconButton>
       
        {likes.length}
        
      </Flex>
      <Flex alignItems="center" ml="2">
        <IconButton
          as={Link}
          to={`${PROTECTED}/comments/${id}`}
          isLoading={commentsLoading}
          size="md"
          colorScheme="teal"
          variant="ghost"
          icon={comments?.length === 0 ? <FaRegComment /> : <FaComment />}
          isRound
        />
        {comments?.length}
      </Flex>

      {!userLoading && user.id === uid &&(
       
        <Flex alignItems="center" ml="370">
        <IconButton 
          ml="auto"
          onClick={onOpen}
         // isLoading={updateLoading}
          size="md"
          colorScheme="blue"
          variant="ghost"
          icon={<FaEdit />}
          
          isRound
        />  
        </Flex>
       
      ) 
      }
      <EditPost isOpen={isOpen} onClose={onClose} post={post}/> 
       {!userLoading && user.id === uid &&(
        <IconButton
          ml="auto"
          onClick={deletePost}
          isLoading={deleteLoading}
          size="md"
          variant="ghost"
          colorScheme="red"
          icon={<FaTrash />}
          isRound
        />
        
      ) 
       }
    </Flex>
  );
}

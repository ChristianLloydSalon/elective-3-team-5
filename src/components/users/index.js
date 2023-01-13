import { SimpleGrid,Heading } from "@chakra-ui/react";
import { useUsers } from "hooks/users";
import User from "./User";
import {
  FcConferenceCall,FcPortraitMode
} from "react-icons/fc";
export default function Users() {
  const { users, isLoading } = useUsers();

  if (isLoading) return "Loading...";

  return (
  <Heading bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  _hover={{
    bgGradient: 'linear(to-r, green.200, pink.500)',
  }}
  fontSize='6xl'
  fontWeight='extrabold'
  textAlign="center"
>
  ALL USERS 
    <SimpleGrid columns={[2, 3, 4]} spacing={[2, 3]} px="10px" py="4" >
      {users?.map((user) => (
        <User key={user.id} user={user} />
   
      ))}
    </SimpleGrid>
    </Heading>
  );
}

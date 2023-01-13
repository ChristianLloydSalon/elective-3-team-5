import { Button, Code, VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PROTECTED } from "lib/routes";
import Avatar from "components/profile/Avatar";

export default function User({ user }) {
  const { id, username } = user;

  return (
    <VStack
      bg="gray.100"
      shadow="sm"
      rounded="md"
      textAlign="center"
      p="4"
      spacing="3"
    >
      <Avatar user={user} />
      <Code TextareaAutosize="small" align="center"
       variant="outline"
       colorScheme="blue"
       color="black"
        w="full">Username:@{username}
        </Code>
       <Link>
        <Button
          as={Link}
          to={`${PROTECTED}/profile/${id}`}
          size="sm"
          variant="link"
          colorScheme="blue"
        >
          View Profile
        </Button>
      </Link>
      {/* <Code>Email:{user.email}</Code> */}
     
    </VStack>
  );
}

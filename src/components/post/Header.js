import { Box, Flex, Text } from "@chakra-ui/react";
import Avatar from "components/profile/Avatar";
import { useUser } from "hooks/users";
import { formatDistanceToNow } from "date-fns";
import UsernameButton from "components/profile/UsernameButton";

export default function Header({ post }) {
  const { uid, date } = post;
  const { user, isLoading } = useUser(uid);

  if (isLoading) return "Loading...";

  return (
    <Flex
      alignItems="center"
      borderBottom="3px solid"
      borderColor="blue.100"
      p="3"
      bg="blue.50"
    >
      <Avatar user={user} size="md" />

      <Box ml="4">
        <UsernameButton user={user} />
        <Text fontSize="sm" color="gray.500">
          {formatDistanceToNow(date)} ago
        </Text>
      </Box>
    </Flex>
  );
}
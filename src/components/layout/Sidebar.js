import { Box, Button, Code, Stack, Text, useColorMode } from "@chakra-ui/react";
import { useAuth } from "hooks/auth";
import { PROTECTED, USERS } from "lib/routes";
import { Link } from "react-router-dom";
import Avatar from "components/profile/Avatar";
import { DASHBOARD } from "lib/routes";

import * as IoIcon from "react-icons/io5"
import * as RaIcons from 'react-icons/ri';
import {
  FcConferenceCall,FcPortraitMode,FcNews,FcTemplate,FcNightLandscape,FcLandscape
} from "react-icons/fc";
import {
FiLogOut} from "react-icons/fi";

import { useLogout } from "hooks/auth";

function ActiveUser() {
  
  
  const { user, isLoading } = useAuth();
  if (isLoading) return "Loading...";
  return (
    <Stack align="center" spacing="5" my="8">
      <Avatar user={user} />
      <Code>Email:{user.email}</Code>
      <Button align="center"
       variant="outline"
       colorScheme="blue"
        w="full"
        as={Link}
        to={`${PROTECTED}/profile/${user.id}`}
      >
       My Profile
      </Button>
    </Stack>
  );
}

export default function Sidebar() {
  const { logout, isLoading } = useLogout();
  
  const { colorMode, toggleColorMode } = useColorMode()
  if (isLoading) return "Logging out...";
  return (
    <Box 
      px="35"
      height="100vh"
      w="100%"
      maxW="300px"
      borderRight=".5px solid"
      borderRightColor="gray.400"
      position="sticky"
      top="16"
      display={{ base: "none", md: "block" }}
    >
      <ActiveUser />
      <Box align="center">
        <Box as="ul" borderBottom="2px solid" borderColor="blue.200" />
         <Button
           loadingText="Loading"
           w="full"
           textAlign="left"
           colorScheme="blue"
           my="6"as={Link} to={DASHBOARD}
        
        ><FcTemplate alignItems="left" size="small"/>
          Timeline | Newsfeed
        </Button> 
        <Button
            loadingText="Loading"
            w="full"
            //my="2"
            colorScheme="blue"
            as={Link}
          to={USERS}
          ><FcConferenceCall size="small"/>
            User Management
          </Button>
        
          <Button  my="6"
        align="left" w="full"  onClick={toggleColorMode} colorScheme="blue" TextareaAutosize="center" >
         {colorMode === 'light' ? <FcNightLandscape size="small" />: <FcLandscape size="small" />} C h a n g e      
         
         M  o  d  e   
           
        </Button>

        <Button  loadingText="Logging out"
        
        colorScheme="blue"
        w="full" px="4"
       
       
        onClick={logout}
        isLoading={isLoading}
     >
       {/* <RaIcons.RiUserSharedFill/> */}
     <FiLogOut align="left" colorMode="black"/>
      Logout
        </Button>
      </Box>
    </Box>
  );
}

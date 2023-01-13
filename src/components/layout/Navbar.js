import { Button, Box, Flex, Link, Heading, useColorMode } from "@chakra-ui/react";
import { DASHBOARD } from "lib/routes";
import { Link as RouterLink } from "react-router-dom";
import { useLogout } from "hooks/auth";
import{FcNightLandscape,FcLandscape} from "react-icons/fc";
//import {useColorMode} from "react";


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <Flex
       shadow="sm"
       pos="fixed"
       width="full"
       borderBottom="6px solid"
       borderBottomColor="blue.400"
       height="16"
       zIndex="3"
       justify="center"
      bg="white"    > 
      <Flex px="4" w="full" align="center" maxW="1200px">
        <Link color="blue.400" as={RouterLink} to={DASHBOARD} fontWeight="bold" >
  <Heading size="lg" bgGradient='linear(to-l, #7928CA, #FF0080)'
   bgClip='text'
   fontSize='6xl'
   fontWeight='extrabold'
 >
   POSHER</Heading> 
         </Link>
         </Flex>
         {/* <Flex w="full" align="center" maxW="1200px">
      <Button px="4" onClick={toggleColorMode} colorScheme="teal"  >
         {colorMode === 'light' ? <FcNightLandscape size="small" />: <FcLandscape size="small" />}
      </Button>
      </Flex> */}
      </Flex>
    </header>
  )
}
//   const { logout, isLoading } = useLogout();

//   return (
//     <Flex
//       shadow="sm"
//       pos="fixed"
//       width="full"
//       borderBottom="6px solid"
//       borderBottomColor="blue.400"
//       height="16"
//       zIndex="3"
//       justify="center"
//       bg="white"
//     >
//       <Flex px="4" w="full" align="center" maxW="1200px">
//         <Link color="blue.400" as={RouterLink} to={DASHBOARD} fontWeight="bold" >
//                 <img
//              // className='products__item__img'
//               alt='POSHER LOGO'
//             //  src={logo}
//             />
        
//         {/* <Heading size="lg" bgGradient='linear(to-l, #7928CA, #FF0080)'
//   bgClip='text'
//   fontSize='6xl'
//   fontWeight='extrabold'
// >
//   POSHER</Heading> */}
//         </Link>
//         {/* <Button
//           ml="auto"
//           colorScheme="blue"
//           size="sm"
          
//           onClick={logout}
//           isLoading={isLoading}
//         ><RaIcons.RiUserSharedFill/>
//           Logout
//         </Button> */}
//       </Flex>
//     </Flex>
//   );
// }

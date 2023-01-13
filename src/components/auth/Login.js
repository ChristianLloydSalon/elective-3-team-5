import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { DASHBOARD, REGISTER } from "lib/routes";
import { Link as RouterLink } from "react-router-dom";
import { useLogin } from "hooks/auth";
import { useForm } from "react-hook-form";
import { emailValidate, passwordValidate } from "utils/form-validate";

import {
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

export default function Login() {
  const { login, isLoading } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleLogin(data) {
    login({
      email: data.email,
      password: data.password,
      redirectTo: DASHBOARD,
    });
    
 
  }

  return (
    <Center w="100%" h="100vh">
      <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
        <Heading mb="3" size="lg" textAlign="center">
          Sign In
        </Heading>
        <Text align="center" mb="4">Please login to use the platform
          </Text>

        <form onSubmit={handleSubmit(handleLogin)}>
          <FormControl isInvalid={errors.email} py="2">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="user@email.com"
              {...register("email", emailValidate)}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password} py="2">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="password"
              {...register("password", passwordValidate)}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
         
                        {/* <IconButton 
                            //color='primary'FaEye,FaEyeSlash,
                            onClick={"clicked"}
                            // variant="ghost"
                       //icon={? <FaEye /> : <FaEyeSlash />}
                        isRound> 
                          SHOW PASSWORD 
                            </IconButton>  */}
                          
          <Button
            mt="4"
            type="submit"
            colorScheme="blue"
            size="md"
            w="full"
            isLoading={isLoading}
            loadingText="Logging In"
          >
            SIGN IN
          </Button>
        </form>

        <Text fontSize="xlg" align="center" mt="6">
          Don't have an account?{" "}
          <Link
            as={RouterLink}
            to={REGISTER}
            color="red.800"
            fontWeight="medium"
            textDecor="underline"
            _hover={{ background: "red.100" }}
          >
            Create
          </Link>{" "}
          a free account
        </Text>
      </Box>
    </Center>
  );
}

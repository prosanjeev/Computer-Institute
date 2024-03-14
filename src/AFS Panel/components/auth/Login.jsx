import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import MyContext from "../context/data/myContext";
import Loader from "../../components/loader/Loader";
import { auth } from "../../../firebase/FirebaseConfig";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(MyContext);
  const { loading, setLoading } = context;

  const navigate = useNavigate();

  const signin = async () => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(result));
      toast.success("Signin Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // navigate('/dashboard');
      const admin = JSON.parse(localStorage.getItem("user"));
      if (admin && admin.user.email === "sanjeevcse2k23@gmail.com") {
        navigate('/dashboard');
      } else {
        navigate('/franchise-dashboard');
      }
      setLoading(false);
    } catch (error) {
      toast.error("Sigin Failed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
    }
  };

  return (
    <Flex h="100vh" align="center" justify="center">
      <Box bg="gray.800" px="10" py="10" rounded="xl" w="25rem" position='relative'>
      {loading && <Loader  />}
        <Box>
          <Text
            textAlign="center"
            color="white"
            fontSize="xl"
            fontWeight="bold"
            mb="4"
          >
            Login
          </Text>
        </Box>
        <Box>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            bg="gray.600"
            mb="4"
            px="2"
            py="2"
            w="full"
            maxW="20em"
            rounded="lg"
            color="white"
            placeholder="Email"
            _placeholder={{ color: "gray.200" }}
            outline="none"
          />
        </Box>
        <Box>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            bg="gray.600"
            mb="4"
            px="2"
            py="2"
            w="full"
            maxW="20em"
            rounded="lg"
            color="white"
            placeholder="Password"
            _placeholder={{ color: "gray.200" }}
            outline="none"
          />
        </Box>
        <Box display="flex" justifyContent="center" marginBottom="3">
          <Button
            bg="yellow.500"
            color="black"
            fontWeight="bold"
            px="2"
            py="2"
            rounded="lg"
            width="full"
            onClick={signin}
          >
            Login
          </Button>
        </Box>
        <Box>
          <Text color="white">
            Don't have an account
            <Link to="/signup" fontWeight="bold">
              <Box as="span" color="yellow">
                {" "}
                Signup
              </Box>
            </Link>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}

export default Login;

import { Link } from "react-router-dom";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB, storage } from "../../firebase/FirebaseConfig";
import { toast } from "react-toastify";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Loader from "../loader/Loader";
import MyContext from "../context/data/myContext";
import {
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logo, setLogo] = useState(null);
  const [signature, setSignature] = useState(null);

  const context = useContext(MyContext);
  const { loading, setLoading } = context;

  const handleSignup = async () => {
    setLoading(true);
    if (name === "" || email === "" || password === "") {
      return toast.error("All fields are required");
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // console.log(users)

      // // Upload logo
      const logoRef = ref(storage, `franchise/${user.uid}/logo`);
      await uploadBytes(logoRef, logo);
      // Get download URL
      const logoUrl = await getDownloadURL(logoRef);

      // // Upload signature
      const signatureRef = ref(storage, `franchise/${user.uid}/signature`);
      await uploadBytes(signatureRef, signature);
      const signatureUrl = await getDownloadURL(signatureRef);

      const franchiseData = {
        name: name,
        uid: user.uid, // Use user.uid instead of user.user.uid
        email: email, // Use email variable directly
        time: Timestamp.now(),
        logoUrl,
        signatureUrl,
      };

      const userRef = collection(fireDB, "franchise");
      await addDoc(userRef, franchiseData);
      toast.success("Signup Succesfully");
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error.code);
      setLoading(false);
    }
  };

  return (
    <Flex h="100vh" align="center" justify="center">
      <Box
        bg="gray.800"
        px="10"
        py="10"
        rounded="xl"
        w="25rem"
        position="relative"
      >
        {loading && <Loader />}

        <Box>
          <Text
            textAlign="center"
            color="white"
            fontSize="xl"
            fontWeight="bold"
            mb="4"
          >
            Signup
          </Text>
        </Box>
        <Box>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            bg="gray.600"
            mb="4"
            px="2"
            py="2"
            w="full"
            maxW="20em"
            rounded="lg"
            color="white"
            placeholder="Name"
            _placeholder={{ color: "gray.200" }}
            outline="none"
          />
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
        <Box>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setLogo(e.target.files[0])}
            mb="4"
          />
        </Box>
        <Box>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setSignature(e.target.files[0])}
            mb="4"
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
            onClick={handleSignup}
          >
            Signup
          </Button>
        </Box>
        <Box>
          <Text color="white">
            Have an acoount{" "}
            <Link to="/login" fontWeight="bold">
              <Box as="span" color="red">
                {" "}
                Login
              </Box>
            </Link>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}

export default Signup;

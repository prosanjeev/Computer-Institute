import PageTitle from "../../components/PagesComponents/PageTitleSection/PageTitle";
import {
  Box,
  Button,
  Card,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik,   } from "formik";
import { object, string, date, number } from "yup";

const franchiseValidationSchema = object({
  email: string().email().required("Email is Required"),
});

const CenterVerification = () => {
  
  return (
    <>
    <PageTitle pagetitle="CENTRE VERIFICATION" /> 
     
     
    </>
  );
};
export default CenterVerification
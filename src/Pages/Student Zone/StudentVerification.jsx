import { Box, Flex } from "@chakra-ui/react";
import PageTitle from "../../components/PagesComponents/PageTitleSection/PageTitle";
import VerifivaticationForm from "../../components/PagesComponents/VerifivaticationForm";
import StudentVerifiedCard from "./components/StudentVerifiedCard";

const StudentVerification = () => {
  const handleSubmit = (formData) => {
    console.log("kire",formData); // This will log the form data sent from the child component
    // Perform any other actions with the form data here
  };
  return (
    <>
    <PageTitle pagetitle="STUDENT VERIFICATION" />
    <Flex w='1000px' mx='auto'>
      <VerifivaticationForm title='STUDENT VERIFICATION' label='Registration No' onSubmitCallback={handleSubmit} />
      <StudentVerifiedCard/>
    </Flex>
    </>
  )
}

export default StudentVerification
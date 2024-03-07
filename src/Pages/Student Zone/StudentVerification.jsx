import { Box } from "@chakra-ui/react";
import PageTitle from "../../components/PagesComponents/PageTitleSection/PageTitle";
import VerifivaticationForm from "../../components/PagesComponents/VerifivaticationForm";

const StudentVerification = () => {
  return (
    <>
    <PageTitle pagetitle="STUDENT VERIFICATION" />
    <Box>
      <VerifivaticationForm title='STUDENT VERIFICATION' label='Registration No' />
      
    </Box>
    </>
  )
}

export default StudentVerification
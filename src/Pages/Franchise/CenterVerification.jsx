import PageTitle from "../../components/PagesComponents/PageTitleSection/PageTitle";
import VerifivaticationForm from "../../components/PagesComponents/VerifivaticationForm";

const CenterVerification = () => {


  // const handleSubmit = (formData) => {
  //   const regNumber = formData.user;
  //   if (regNumber) {
  //     dispatch(clearStudentData()); // Clear previous data
  //     dispatch(fetchStudentData(regNumber)); // Fetch new data
  //   } else {
  //     console.log("Invalid registration number");
  //   }
  // };
  
  return (
    <>
    <PageTitle pagetitle="CENTRE VERIFICATION" /> 
     {/* <VerifivaticationForm title='CENTRE VERIFICATION' label='Center code'  onSubmitCallback={handleSubmit} /> */}
     
    </>
  );
};
export default CenterVerification
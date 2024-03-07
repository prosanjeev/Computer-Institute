import PageTitle from "../../components/PagesComponents/PageTitleSection/PageTitle";
import VerifivaticationForm from "../../components/PagesComponents/VerifivaticationForm";

const CertificateVerification = () => {
  return (
    <>
    <PageTitle pagetitle="CERTIFICATE VERIFICATION" />
    <div className=''>
      <VerifivaticationForm title='Certificate Verification' label='Certificate No.'/>
      
    </div>
    </>
  )
}

export default CertificateVerification
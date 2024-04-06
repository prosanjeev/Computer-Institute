import { useEffect, useState, useRef } from 'react';
import { Button, Center, Container, Text } from '@chakra-ui/react';
import { PDFViewer, StyleSheet } from '@react-pdf/renderer';
import { useReactToPrint } from 'react-to-print';
import CertificateContent from './CertificateContent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFranchiseData, selectbranchData } from '../../../../redux/franchise/authSlice';
import FranchiseDashboardLayout from '../../../components/FranchiseDashboardLayout';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const FranchiseCertificate = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [pdfDocument, setPdfDocument] = useState(null);
  const dispatch = useDispatch();
  const branchData = useSelector(selectbranchData);
  const [isLoading, setIsLoading] = useState(true);
  const componentRef = useRef();

  useEffect(() => {
    dispatch(fetchFranchiseData())
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [dispatch]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const generateCertificate = () => {
    setIsGenerating(true);
    setPdfDocument(true);
    setTimeout(() => {
      handlePrint();
      setIsGenerating(false);
    }, 1000); // Wait for the PDFViewer to render the content
  };

  return (
    <FranchiseDashboardLayout title='Franchise Certificate'>
      {/* <Center>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Franchise Certificate
        </Text>
      </Center> */}
      <Container
        backgroundImage="url('certificate.png')"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        w="800px"
        h="500px"
        position="relative"
        mb={4}
      >
        {/* Overlay dynamic details */}
        <Text position="absolute" top="60%" left="50%" transform="translate(-50%, -50%)" zIndex="1" fontSize='18px'>
            Name:- {branchData && branchData.directorName}
        </Text>
        <Text position="absolute" top="64%" left="50%" transform="translate(-50%, -50%)" zIndex="1" fontSize='18px'>
           Center Name:- {branchData && branchData.centerName}
        </Text>
      </Container>
      <Center>
        <Button onClick={generateCertificate} isLoading={isGenerating}>
          Generate and Print Certificate
        </Button>
       
      </Center>
      {/* PDF Viewer to display the generated certificate */}
      {pdfDocument && (
        <PDFViewer width="100%" height="600px" ref={componentRef}>
          <CertificateContent branchData={branchData} />
        </PDFViewer>
      )}
    </FranchiseDashboardLayout>
  );
};

export default FranchiseCertificate;

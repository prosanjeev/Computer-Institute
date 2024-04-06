import React from 'react';
import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    padding: 30,
    boxSizing: 'border-box',
  },
  section: {
    margin: 10,
    padding: 2,
    flexGrow: 1,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  section2: {
    top: '-4%',
    textAlign: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 2,
    flexGrow: 1,
    position: 'relative',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  text1: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text3: {
    fontSize: 15,
    marginBottom: 5,
  },
  text4: {
    fontSize: 16,
    marginBottom: 5,
  },
  atText: {
    color: 'blue', // Style for "at -"
  },
  date: {
    position: 'absolute',
    bottom: '10%',
    left: '38%',
    // transform: 'translate(-50%, -50%)',
    fontSize: 24,
  },
});

const CertificateContent = ({ branchData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Image src="certificate.png" style={styles.image} />
        <View style={styles.section2}>
          <Text style={styles.text1}>This is to certify that</Text>
          <Text style={styles.text2}>{branchData.directorName}</Text>
          <Text style={styles.text3}>
            has been authorised to run all courses under M-Tech Computer EDUCATION in his/her Centre
            Name - {branchData.centerName} 
          </Text>
          <Text style={styles.text4}>
          <Text style={styles.atText}>at -</Text>{" "}{branchData.district}, {branchData.state}
          </Text>
        </View>
        <Text style={styles.date}>{new Date(branchData.createdAt).toLocaleDateString('en-GB')}</Text>
        <Image src="path_to_logo_image.jpg" style={styles.image} />
      </View>
    </Page>
  </Document>
);

export default CertificateContent;

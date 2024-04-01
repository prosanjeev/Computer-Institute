import React, { useEffect, useState } from "react";
import { Document, Page, View, Text, Image, StyleSheet } from "@react-pdf/renderer";
import QRCode from "qrcode"; // Import QRCode from 'qrcode'


const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    padding: 30,
    boxSizing: "border-box",
  },
  section: {
    margin: 10,
    padding: 2,
    flexGrow: 1,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
  },
  // qrCodeContainer: {
  //   width: 100,
  //   height: 100,
  // },
  qrCodeImage: {
    width: "100px",
    height: "100px",
    position: 'absolute',
    top: '25%',
    left: '10%',
  },
  stPhoto: {
    width: "100px",
    height: "100px",
    position: 'absolute',
    top: '25%',
    right: '15%',
    // transform: 'translate(-50%, -50%)',
   
  },
  section2: {
    textAlign: "center",
    justifyContent: "center",
    margin: 10,
    padding: 2,
    flexGrow: 1,
    position: "relative",
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  text1: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text2: {
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  text3: {
    fontSize: 15,
    marginBottom: 5,
  },
  date: {
    position: "absolute",
    top: "8%",
    left: "10%",
    fontSize: 14,
  },
});

const generateQRCodeDataURL = (value) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const size = 200;
  canvas.width = size;
  canvas.height = size;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, size, size);

  // Create the QR code manually
  QRCode.toCanvas(canvas, value, { width: size, height: size });

  return canvas.toDataURL();
};

const StudentCertificateContent = ({ studentData  }) => {
  const [base64Image, setBase64Image] = useState("");

  const BaseUrl = "https://mohallaacademy.com/student-verification/"
  const value =  BaseUrl+studentData.username
  const qrCodeDataURL = generateQRCodeDataURL(value);
  console.log("qru",qrCodeDataURL);
  console.log()


  const photoUrl = studentData && studentData.photoUrl;
  useEffect(() => {
    const fetchBase64Image = async () => {
      try {
        const response = await fetch(photoUrl);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          setBase64Image(reader.result);
        };
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchBase64Image();
  }, [photoUrl]);

  

  return (
    <Document>
      <Page size="A4" style={styles.page} orientation="landscape">
        <View style={styles.section}>
          <Image src="stCertificate.png" style={styles.image} />
          <View style={styles.section2}>
            <View style={styles.qrCodeContainer}>
            </View>
              <Image src={qrCodeDataURL} style={styles.qrCodeImage} />
              <Image src={base64Image} style={styles.stPhoto} />
            <Text style={styles.text2}>{studentData && studentData.studentName}</Text>
            <Text style={styles.text3}></Text>
          </View>
          <Text style={styles.date}>
            {new Date(studentData && studentData.createdAt).toLocaleDateString("en-GB")}
          </Text>
          <Image src="path_to_logo_image.jpg" style={styles.image} />
        </View>
      </Page>
    </Document>
  );
};

export default StudentCertificateContent;
import { Box, Button, useToast, Stack } from "@chakra-ui/react";
import html2canvas from "html2canvas"; // Add this line
import { useLocation, useNavigate } from "react-router-dom";
import IDCard from "./IdCardContent";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStudentData,
  selectStudentData,
} from "../../../redux/student/slice/studentSlice";
import { useEffect, useState } from "react";

const PrintIdCard = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const dispatch = useDispatch();
  const location = useLocation();
  const studentData = useSelector(selectStudentData);
  const [isLoading, setIsLoading] = useState(true);
  const regNumber = location.state ? location.state.userName : null;
  console.log("hello", studentData);
  useEffect(() => {
    dispatch(fetchStudentData(regNumber))
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [dispatch]);

  const downloadIDCard = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = 696; // Set the canvas width to match the card width
    canvas.height = 440; // Set the canvas height to match the card height

    if (canvas) {
      const img = new Image();
      img.src = data.backgroundImageUrl;
      img.onload = () => {
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
        html2canvas(document.querySelector("#idCardContainer"), {
          scale: 1,
          canvas: canvas,
          logging: false, // Disable logging to prevent the border from being added
        }).then(() => {
          const url = canvas.toDataURL("image/png");
          const a = document.createElement("a");
          a.href = url;
          a.download = "id-card.png";
          a.click();
        });
      };
    } else {
      toast({
        title: "Error",
        description: "Could not download ID card",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const goBack = () => {
    navigate("/students-list");
  };

  const data = {
    backgroundImageUrl: "/idcard.png",
  };

  return (
    <Stack gap={10} w="80vw" mx="auto">
      <div style={{ maxWidth: "70px" }}>
        <Button
          mt={4}
          ml={3}
          onClick={goBack}
          colorScheme="green"
          variant="outline"
        >
          Back
        </Button>
      </div>

      <Box
        id="idCardContainer"
        style={{
          width: "696px",
          height: "440px",
          position: "relative",
          backgroundImage: `url(${data.backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          // overflow: "hidden", // Remove this line
        }}
      >
        <IDCard 
          {...data}
          style={{ border: "none" }}
          studentData={studentData}
        />
      </Box>
      <Button onClick={downloadIDCard} w="sm">
        Download ID Card
      </Button>
    </Stack>
  );
};

export default PrintIdCard;

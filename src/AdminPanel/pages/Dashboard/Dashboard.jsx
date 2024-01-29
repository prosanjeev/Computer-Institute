import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import InfoCard from "./components/InfoCard";

const Dashboard = () => {
  const infoCards = [
    {
      name: "Branch",
      info: "213",
    },
    {
      name: "Student",
      info: "1789",
    },
    {
      name: "Courses",
      info: "90",
    },
    {
      name: "Admission ",
      info: "1290",
    },
    {
      name: "User",
      info: "43",
    },
    {
      name: "Staff",
      info: "14",
    },
    {
      name: "Subject",
      info: "22",
    },
    {
      name: "MARKSHEET",
      info: "653",
    },
    {
      name: "VI CLASSES",
      info: "7",
    },

    {
      name: "ST MATERIALS",
      info: "16",
    },
    {
      name: "News Notice",
      info: "7",
    },
    {
      name: "SYLLABUS",
      info: "11",
    },
  ];

  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap="6"
      >
        <GridItem
          colSpan={{
            base: 1,
            xl: 4,
          }}
        >
          <SimpleGrid columns={4} px={7} columnGap={4} rowGap={4}>
            {infoCards.map((card) => (
              <InfoCard key={card.name} name={card.name} info={card.info}>
                {" "}
              </InfoCard>
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;

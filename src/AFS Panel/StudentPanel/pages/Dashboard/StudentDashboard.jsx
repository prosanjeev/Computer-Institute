import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/StudentDashboardLayout";
import InfoCard from "./components/InfoCard";

const StudentDashboard = () => {
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
            xl: 1,
          }}
        >
          <InfoCard />
        </GridItem>
      </Grid> 
    </DashboardLayout>
  );
};

export default StudentDashboard;

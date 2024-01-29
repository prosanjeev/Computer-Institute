import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/FranchiseDashboardLayout";
import InfoCard from "./components/InfoCard";

const FranchiseDashboard = ({}) => {
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
          <InfoCard/>
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default FranchiseDashboard;

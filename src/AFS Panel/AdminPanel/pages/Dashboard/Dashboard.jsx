import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import InfoCard from "./components/InfoCard";
import { dashboardData } from "./data";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Box w="80%" mx="auto" mt={5}>
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
            <SimpleGrid
              columns={{ base: 1, md: 4 }}
              px={7}
              columnGap={4}
              rowGap={5}
            >
              {dashboardData.map((card) => (
                <InfoCard
                  key={card.name}
                  name={card.name}
                  info={card.info} 
                  icon={card.icon}
                />
              ))}
            </SimpleGrid>
          </GridItem>
        </Grid>
      </Box>
    </DashboardLayout>
  );
};

export default Dashboard;

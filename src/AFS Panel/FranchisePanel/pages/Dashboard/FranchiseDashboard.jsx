import { Box, Grid, GridItem, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import DashboardLayout from "../../components/FranchiseDashboardLayout";
import InfoCard from "./components/InfoCard";
import { franchisedashboardData } from "./components/data";
import Notification from "./components/Notification";

const FranchiseDashboard = ({}) => {
  return (
    <DashboardLayout title="Dashboard">
      <Stack w="80%" mx="auto">
      <Box w="100%"  mt={5}>
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
              {franchisedashboardData.map((card) => (
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
     <HStack w='96%' mx='auto' mt={8} gap={10}>
       <Notification  />
       <Notification  />
     </HStack>
      </Stack>
    </DashboardLayout>
  );
};

export default FranchiseDashboard;

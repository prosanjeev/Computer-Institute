import DashboardLayout from "../../components/DashboardLayout";
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Switch,
  useBreakpointValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBranches,
  selectBranches,
} from "../../../redux/slice/admin/branchSlice";

const AllBranch = () => {
  const branches = useSelector(selectBranches);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBranches());
  }, [dispatch]);

  const handleStatusChange = (branchId, newStatus) => {
    // Implement your logic to update the status of the branch with ID branchId to newStatus
  };

  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <DashboardLayout title="Center List">
      <Flex direction="column" alignItems="center" mx={2}>
        <Table
          variant="simple"
          colorScheme="blue"
          size={isDesktop ? "md" : "sm"}
        >
          <Thead>
            <Tr bg="orange.400" >
              <Th fontSize="lg" fontWeight="bold">
                Sr.
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Date
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Photo
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Branch Code
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Name
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Center Name
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Section
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Status
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Details
              </Th>
              <Th fontSize="lg" fontWeight="bold">
                Delete
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {branches.map((branch, index) => (
              <Tr key={branch.id}>
                <Td>{index + 1}</Td>
                <Td>{branch.date}</Td>
                <Td>
                  <Image
                    src={branch.logoUrl}
                    alt={branch.name}
                    w="40px"
                    h="40px"
                  />
                </Td>
                <Td>{branch.centerId}</Td>
                <Td borderLeft='1px solid red' >{branch.directorname}</Td>
                <Td>{branch.centername}</Td>
                <Td>{branch.state}</Td>
                <Td>
                  <Switch
                    isChecked={branch.status === "Active"}
                    onChange={(e) =>
                      handleStatusChange(
                        branch.id,
                        e.target.checked ? "Active" : "Inactive"
                      )
                    }
                    colorScheme={branch.status === "Active" ? "green" : "red"}
                  />
                </Td>
                <Td>
                  <Icon as={FaRegEdit} size="sm" colorScheme="blue" />
                </Td>
                <Td>
                  <Button size="sm" colorScheme="red">
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Flex>
    </DashboardLayout>
  );
};

export default AllBranch;

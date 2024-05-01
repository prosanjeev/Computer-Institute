import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import FranchiseSidenav from "./FranchiseSidenav";

const FranchiseSideDrawer = ({ isOpen, onClose, branchData }) => {
  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            boxSize={10}
            color="red"
            bg="white"
            border="2px solid red"
          />
          <DrawerBody>
            <FranchiseSidenav branchData={branchData} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FranchiseSideDrawer;

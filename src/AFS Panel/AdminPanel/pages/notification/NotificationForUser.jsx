import { useRef, useState, useEffect } from "react";
import { Box, Input, FormLabel, Button, Text, VStack, IconButton, HStack, Flex } from "@chakra-ui/react";
import JoditEditor from "jodit-react";
import DashboardLayout from "../../components/DashboardLayout";
import { fireDB } from "../../../firebase/FirebaseConfig";
import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserNotifications, selectNotifications } from "../../../redux/notifications/userNotificationsSlice";
import DOMPurify from 'dompurify';
import { useToast } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const NotificationForUser = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchUserNotifications());
  }, [dispatch]);
  
  const notifications = useSelector(selectNotifications);
  
  const toast = useToast();
  const handleSave = async () => {
    if (!title || !content) {
      toast({
        title: "Error",
        description: "Please enter title and content.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      await addDoc(collection(fireDB, "userNotifications"), {
        title,
        content,
        createdAt: new Date().toISOString(),
      });
      setTitle("");
      setContent("");
      toast({
        title: "Success",
        description: "Notification saved successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      dispatch(fetchUserNotifications());
    } catch (error) {
      console.error("Error saving notification: ", error);
      toast({
        title: "Error",
        description: "An error occurred while saving the notification.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleEdit = (notificationId) => {
    const notification = notifications.find((n) => n.id === notificationId);
    if (notification) {
      setTitle(notification.title);
      setContent(notification.content);
      setEditingId(notificationId);
    }
  };

  const handleDelete = async (notificationId) => {
    try {
      await deleteDoc(doc(fireDB, "userNotifications", notificationId));
      toast({
        title: "Success",
        description: "Notification deleted successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      dispatch(fetchUserNotifications());
    } catch (error) {
      console.error("Error deleting notification: ", error);
      toast({
        title: "Error",
        description: "An error occurred while deleting the notification.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleUpdate = async () => {
    if (!title || !content) {
      toast({
        title: "Error",
        description: "Please enter title and content.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      await updateDoc(doc(fireDB, "userNotifications", editingId), {
        title,
        content,
      });
      setTitle("");
      setContent("");
      setEditingId(null);
      toast({
        title: "Success",
        description: "Notification updated successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      dispatch(fetchUserNotifications());
    } catch (error) {
      console.error("Error updating notification: ", error);
      toast({
        title: "Error",
        description: "An error occurred while updating the notification.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <DashboardLayout title="Add User Notice">
      <Box maxW={{md:"40vw", base:'90vw'}} mx="auto" p={6}>
        <Box mb={4}>
          <FormLabel>Title</FormLabel>
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Box>
        <Box mb={4}>
          <FormLabel>Description</FormLabel>
          <JoditEditor
            ref={editor}
            value={content}
            tabIndex={1}
            onBlur={(newContent) => setContent(newContent)}
            onChange={(newContent) => {}}
          />
        </Box>
        
        {editingId ? (
          <Button colorScheme="blue" onClick={handleUpdate}>
            Update
          </Button>
        ) : (
          <Button colorScheme="blue" onClick={handleSave}>
            Add
          </Button>
        )}

        
        <VStack mt={6} align="stretch">
          <Text fontSize="lg" fontWeight="bold">
            Notifications
          </Text>
          {notifications.map((notification) => (
            <Box
              key={notification.id}
             border='1px solid gray'
              borderRadius="md"
              p={{base:'4', md:'2'}}
            >
              
              <HStack justify='space-between'>
                <Text>{notification.title}</Text>
               <Flex gap={2}>
               <IconButton
                  icon={<EditIcon />}
                  aria-label="Edit"
                  onClick={() => handleEdit(notification.id)}
                />
                <IconButton
                  icon={<DeleteIcon />}
                  aria-label="Delete"
                  onClick={() => handleDelete(notification.id)}
                />
               </Flex>
              </HStack>
              <Text mt={5} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(notification.content) }} />
            </Box>
          ))}
        </VStack>
      </Box>
    </DashboardLayout>
  );
};

export default NotificationForUser;

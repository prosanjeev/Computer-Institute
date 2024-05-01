import React from 'react'
import { CustomCard } from '../../../../components/chakra/CustomCard'
import { Box, Center, Divider, ListItem, Text, UnorderedList, keyframes } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserNotifications, selectNotifications } from '../../../../redux/notifications/userNotificationsSlice';
import DOMPurify from "dompurify";


const Notification = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchUserNotifications());
    }, [dispatch]);

    const notifications = useSelector(selectNotifications);

    const scrollUp = keyframes`
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(-100%);
    }
  `;

    return (
        <CustomCard
            bgColor="#white"
            p={5}
            borderRadius="5px"
            boxShadow="2px 2px 4px  black"
            w='50%'
        >
            <Text fontSize='20px'> Notification</Text>
            <Divider boxShadow="lg" />
            <Box p="10px" overflow="hidden" position="relative" h='400px'>
                <Box
                    position="absolute"
                    animation={`${scrollUp} 15s linear infinite`}
                    width="100%"
                    ml='-18px'
                    css={{
                        '&:hover': {
                            animationPlayState: 'paused',
                            cursor: 'pointer',
                        }
                    }}
                >
                    <Box>
                        <UnorderedList style={{ listStyle: "none", padding: 0 }}>
                            {notifications.map((notification) => (
                                <Box key={notification.title} textAlign="center" position="relative" mt={4}>
                                    <ListItem>
                                        <Center
                                            display="flex"
                                            flexDirection="column"
                                            gap={2}
                                            borderBottom="1px dotted black"
                                            p={3}
                                        >
                                            {/* <Img boxSize='110px' src={center.image} alt="" />            */}
                                            <Text fontWeight="600" fontSize="24px">
                                                {notification.title}
                                            </Text>
                                            <Text position="absolute" top="1px" right="0" fontSize="12px">
                                                {" "}
                                                {new Date(notification.createdAt).toLocaleDateString("en-GB")}
                                            </Text>

                                            <Text
                                                dangerouslySetInnerHTML={{
                                                    __html: DOMPurify.sanitize(notification.content),
                                                }}
                                            />
                                        </Center>
                                    </ListItem>
                                </Box>
                            ))}
                        </UnorderedList>
                    </Box>
                </Box>
            </Box>
        </CustomCard>
    )
}

export default Notification

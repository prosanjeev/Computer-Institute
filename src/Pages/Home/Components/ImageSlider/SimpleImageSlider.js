import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { Box, Button, Flex, Icon, Img } from '@chakra-ui/react'
import { useEffect, useState } from "react";

const BASE_URL = "https://picsum.photos/v2/list";
const page = 1; // Assuming you want data from page 1
const limit = 6; // Limiting the number of data items to 10

const SimpleImageSlider = () => {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const imageData = async () => {
            try {
                const response = await fetch(`${BASE_URL}?page=${page}&limit=${limit}`)
                const json = await response.json();
                setImages(json);
                setLoading(false)

            } catch (error) {
                setError(error.message)
                setLoading(false);
            }
        };
        imageData();
    }, []);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
        }, 3000); // Interval in milliseconds

        return () => {
            clearInterval(slideInterval);
        };
    }, [currentSlide, images.length]);

    if (loading) return <div>Loading....</div>
    if (error) return <div>{error}</div>

    const handlePrevious = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }

    return (
        <Flex position='relative' justify='center' align='center' h={{ base: '40vh', md: '70vh' }} w='100vw' >
            <Icon as={BsArrowLeftCircleFill}
                onClick={handlePrevious}
                position='absolute' w='2rem' h='3rem' color='white'
                filter='drop-shadow(0px 0px 5px #555)' left='1rem'
            />
            {images && images.length
                ? images.map((imageItem, index) => (
                    <Img
                        key={imageItem.id}
                        alt={imageItem.download_url}
                        src={imageItem.download_url}
                        className={currentSlide === index ? "current-image" : "hide-current-image"}
                        css={{
                            "&.current-image": {
                                // borderRadius: '0.5rem',
                                boxShadow: '0px 0px 7px #666',
                                width: '100%',
                                height: '100%',
                            },
                            "&.hide-current-image": {
                                display: "none", // Or any other styles to hide the image
                            },
                        }}
                    />
                ))
                : null}
            <Icon as={BsArrowRightCircleFill}
                onClick={handleNext}
                position='absolute' w='3rem' h='2rem' color='white'
                filter='drop-shadow(0px 0px 5px #555)' right='1rem'
            />
            <Box as="span" display='flex' position='absolute' bottom='1rem' >
                {images && images.length
                    ? images.map((_, index) => (
                        <Button
                            key={index}
                            className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}
                            variant="unstyled"
                            sx={{
                                "&.current-indicator": {
                                    backgroundColor: '#ffffff',
                                    height: '10px',
                                    maxWidth: '10px',
                                    border: 'none',
                                    outline: 'none',
                                    margin: '0 2px',
                                    cursor: 'pointer'
                                },
                                "&.inactive-indicator": {
                                    height: '10px',
                                    width: '10px',
                                    backgroundColor: "gray",
                                },
                            }}
                            onClick={() => setCurrentSlide(index)}
                        ></Button>
                    ))
                    : null}
            </Box>
        </Flex>
    )
}

export default SimpleImageSlider;

import React from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useNavigate } from "react-router-dom";
import {
    Flex,
    Box,
    Text,
    Card,
    CardFooter,
    Image,
    useMediaQuery,
} from "@chakra-ui/react";

export default function CardBox() {
    const [isSmallerThan900] = useMediaQuery("(max-width:900px)");
    const color = useColorModeValue('black', 'white');
    const navigate = useNavigate();
    return (
        <Box
            position="relative"
            top="2000"
            left="200"
        >
            <Card maxW="md" onClick={() => navigate('/iphone')}>
                <Image
                    objectFit='cover'
                    src='https://media.fixmybrokenscreen.co.uk/assets/upload/products-category/images/iPhone__image_7a3e49c9ea447a9d555e70825da003d0.png'
                    alt='iPhone'
                />
                <CardFooter>
                    <Flex justify="center" w="100%">
                        <Text>iPhone</Text>
                    </Flex>
                </CardFooter>
            </Card>
        </Box>
    )
}
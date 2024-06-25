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
    HStack,
} from "@chakra-ui/react";

export default function CardBox() {
    const [isSmallerThan900] = useMediaQuery("(max-width:900px)");
    const color = useColorModeValue('black', 'white');
    const navigate = useNavigate();
    return (
        <Box
            position="relative"
            top={isSmallerThan900 ? "900" : "800"}
            p={isSmallerThan900 ? "1rem" : "0"}
            className="selectDisable"
        >
            <Box
                color={color} fontWeight={800}
                textAlign="center"
                pb="15"
                fontSize={isSmallerThan900 ? "2.2rem" : "3.2rem"}
            >What can we fix for you?
            </Box>
            <HStack justifyContent="center" fontSize="m"
              fontWeight="700">
                <Card maxW="md" onClick={() => navigate('/iphone')} borderWidth="1px" borderColor={color}>
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
                <Card maxW="md" onClick={() => navigate('/ipad')} borderWidth="1px" borderColor={color}>
                    <Image
                        objectFit='cover'
                        src='https://media.fixmybrokenscreen.co.uk/assets/upload/products-category/images/iPad__image_e1c708c41a19b49231519de16fc15484.png'
                        alt='iPhone'
                    />
                    <CardFooter>
                        <Flex justify="center" w="100%">
                            <Text>iPad</Text>
                        </Flex>
                    </CardFooter>
                </Card>
                <Card maxW="md" onClick={() => navigate('/mac')} borderWidth="1px" borderColor={color}>
                    <Image
                        objectFit='cover'
                        src='../images/mac.png'
                        alt='iPhone'
                        maxW="415"
                    />
                    <CardFooter>
                        <Flex justify="center" w="100%">
                            <Text>Mac</Text>
                        </Flex>
                    </CardFooter>
                </Card>

            </HStack>

        </Box>
    )
}
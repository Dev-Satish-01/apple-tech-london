import React from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import {
    Stack,
    Box,
    Flex,
    Text,
    Button,
    Image,
    useMediaQuery,
    ButtonGroup,
} from "@chakra-ui/react";

export default function BodyHome() {
    const [isSmallerThan900] = useMediaQuery("(max-width:900px)");
    const color = useColorModeValue('black', 'white');
    
    return (
        <>
            {isSmallerThan900 ?
                <Box
                    className="selectDisable main-body"
                    position="absolute"
                    mt="9rem"
                    p="5"
                >
                    <Flex
                        direction="column"
                        h="100vh"
                    >
                        <Box
                            w="100%"
                            h="50%"
                        >
                            <Text
                                fontSize="2rem"
                                color={color}
                                lineHeight="1.3"
                                fontWeight={800}
                                pb="4"
                                textAlign="left"
                            >
                                Mobile phone, iPad and Tablet repair
                            </Text>
                            <Text
                                pb="5"
                            >
                                Your trusted destination for swift and reliable phone repairs. Our expert technicians ensure quality solutions, from screen replacements to battery fixes, keeping you seamlessly connected.
                            </Text>
                            <ButtonGroup
                                spacing="4"
                            >
                                <Button>Write a review</Button>
                                <Button>Read more</Button>
                            </ButtonGroup>
                        </Box>
                        <Box h="50%">
                            <Image
                                pointerEvents={"none"}
                                src="../images/body.png"
                                alt="body"
                                maxW="100%"
                            />
                        </Box>
                    </Flex>
                </ Box>
                :
                <Box
                    className="selectDisable main-body"
                    position="absolute"
                    mt="9rem"
                    w="100%"
                >
                    <Flex
                        flexDirection="row"
                    >
                        <Stack
                            direction="horizontal"
                            alignItems="center"
                            spacing="16"
                        >
                            <Box
                                w="50%"
                                p="140"
                            >
                                <Text
                                    fontSize="2rem"
                                    color={color}
                                    lineHeight="1.3"
                                    fontWeight={800}
                                    pb="4"
                                    textAlign="left"
                                >
                                    Mobile phone, iPad and Tablet repair
                                </Text>
                                <Text
                                    pb="5"
                                >
                                    Your trusted destination for swift and reliable phone repairs. Our expert technicians ensure quality solutions, from screen replacements to battery fixes, keeping you seamlessly connected.
                                </Text>
                                <ButtonGroup
                                    spacing="4"
                                >
                                    <Button>Write a review</Button>
                                    <Button>Read more</Button>
                                </ButtonGroup>

                            </Box>
                            <Box>
                                <Image
                                    pointerEvents={"none"}
                                    src="../images/body.png"
                                    alt="body"
                                    maxW="600px"
                                />
                            </Box>

                        </Stack>
                    </Flex>
                </Box>
            }
        </>
    )
}

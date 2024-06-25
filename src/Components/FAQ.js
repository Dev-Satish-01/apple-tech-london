import React from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import {
    Box, VStack, useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import FAQItems from "./FAQItems";

export default function FAQ() {
    const [isSmallerThan800] = useMediaQuery('(max-width:800px)')
    const color = useColorModeValue('black', 'white')
    const [faq1, setFaq1] = useState(false);
    const [faq2, setFaq2] = useState(true);
    const [faq3, setFaq3] = useState(false);
    const [faq4, setFaq4] = useState(false);
    const [faq5, setFaq5] = useState(false);
    
    return (
        <Box
            position="absolute"
            top={isSmallerThan800 ? "1350" : "1600"}
            left="18"
            w="100%"
            className="selectDisable"
        >
            <Box fontSize="3.2rem"
                color={color} fontWeight={800}
                textAlign='center'
            >FAQ
            </Box>
            <VStack mt="2rem" marginInline={isSmallerThan800 ? "0rem" : "5rem"}>
                <FAQItems
                    marginBottom="0 !important"
                    faq="I need help choosing the right service for my issue."
                    show={faq1}
                    setFaq={setFaq1}
                    text="If you need help choosing the right service, our customer service team is here to assist you. To help us better assess the issue, please send a picture of your device while it's turned on (if possible). You can reach us in the following ways:"
                />
                <FAQItems
                    faq="What parts do you use for repair?"
                    show={faq2}
                    setFaq={setFaq2}
                    text="For Samsung screen and LCD replacements, we exclusively use Samsung Genuine Screens. Unlike Apple, Samsung provides original parts to third-party repair centres like ours."
                />
                <FAQItems
                    faq="Do you erase data during the repair?"
                    show={faq3}
                    setFaq={setFaq3}
                    text="No. We will not erase your data during the process. In most cases, the repairs we perform should not affect your data. However, we strongly advise all our customers to back up their data before sending it in for repair. Please note that we are not responsible for any data loss resulting from the repairs carried out on your device. Please ensure your data is backed up before the initial service."
                />
                <FAQItems
                    faq="Is my date safe?"
                    show={faq4}
                    setFaq={setFaq4}
                    text="In most cases, the repairs we perform should not affect your data. However, we strongly advise all our customers to back up their data before sending it in for repair. Please note that we are not responsible for any data loss resulting from the repairs carried out on your device. Please ensure your data is backed up before the initial service."
                />

                <FAQItems
                    faq="What happens if you can't complete the repair on my device?"
                    show={faq5}
                    setFaq={setFaq5}
                    text="If we can't fix your device, we will return it for free and give you a full refund. We operate on a No Fix, No Fee policy."
                />
            </VStack>
        </Box>
    )
}

import ScaleLoader from "react-spinners/ScaleLoader";
import React from 'react';
import { Flex } from '@chakra-ui/react';

export default function Preloader() {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <Flex
            justifyContent={"center"}
            alignItems="center"
            position="fixed"
            zIndex="26"
            w="100%"
            h="100vh"
            display={loading ? "flex" : "none"}
            bg="blackAlpha.400"
            backdropFilter="blur(10px)"
        >
            <ScaleLoader
                color="#D4D4D4"
                loading={loading}
                size={60}
                speedMultiplier={0.7}
            />
        </Flex>
    )
}
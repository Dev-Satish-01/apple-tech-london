import React from 'react';
import { Box, Button, Input, Stack, FormControl, FormLabel } from '@chakra-ui/react';

export default function Form() {
    function Submit(e) {
        const formEle = document.querySelector("form");
        const formDatab = new FormData(formEle);
        fetch(
            "https://script.google.com/macros/s/AKfycbxSi_n5oE7mUPdTbcBDKbdz0EBc-TB0N1RaQAZXFbEPA-qAySmfv3t-b328XRIyK5nz/exec",
            {
                method: "POST",
                body: formDatab
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <Box as="form" onSubmit={(e) => Submit(e)} className="form" w="100%" maxW="500px" mx="auto" mt={40}>
            <Stack spacing={4}>
                <FormControl>
                    <FormLabel htmlFor="name">Your Name</FormLabel>
                    <Input id="name" placeholder="Your Name" name="Name" type="text" />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="email">Your Email</FormLabel>
                    <Input id="email" placeholder="Your Email" name="Email" type="text" />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="message">Your Message</FormLabel>
                    <Input id="message" placeholder="Your Message" name="Message" type="text" />
                </FormControl>
                <Button type="submit" colorScheme="blue">Submit</Button>
            </Stack>
        </Box>
    );
}

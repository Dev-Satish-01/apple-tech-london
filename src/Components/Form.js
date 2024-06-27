import { Box, Text } from "@chakra-ui/react";

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
    <Box pos="absolute" top="250px">
      <Text>Contact Me form</Text>
      <div>
        <form onSubmit={(e) => Submit(e)}>
          <input placeholder="Your Name" name="Name" type="text" />
          <input placeholder="Your Email" name="Email" type="text" />
          <input placeholder="Your Message" name="Message" type="text" />
          <input name="Name" type="submit" />
        </form>
      </div>
    </Box>
  );
}

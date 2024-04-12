import { Box, Button, Heading } from "@chakra-ui/react"
import Link from "next/link";


export default function HomePage() {
  return (
    <Box p={10}>
        <Heading>Matsuda</Heading>
        <Box my={5}>
          <Button as={Link} href="/" colorScheme="purple">
            Matsuda
          </Button>
        </Box>
        <Heading fontSize="2xl" mt={6} mb={2}>
          Hello my name is Matsuda
        </Heading>
      </Box>
  );
}

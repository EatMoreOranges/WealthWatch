import Image from "next/image";
import { Box, Card, Center, CardHeader, CardBody, CardFooter, Text, Flex } from '@chakra-ui/react'
import WelcomeMessage from "./welcome";
import Data from "./data";

export default function Home() {
  return (
    <Box>
      <Box mt={100} mb={25}>
        <WelcomeMessage/>
      </Box>
      
      <Box mt={25} p={10}>
        <Data/>
      </Box>
      
    </Box>
  );
}

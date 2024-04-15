import Image from "next/image";
import { Box, Card, Center, CardHeader, CardBody, CardFooter, Text, Flex, theme } from '@chakra-ui/react'
import WelcomeMessage from "./components/welcome";
import Data from "./components/data";
import DataTable from "./components/dashboard/dataTable";
import { darkMode } from "./theme/colors";

export default function Home() {
  return (
    <Box >
      <Box mt={100} mb={25}>
        <WelcomeMessage/>
      </Box>
      
      <Box mt={25} p={10}>
        <Data/>
      </Box>

      <Box>
        <DataTable></DataTable>
      </Box>
      
    </Box>
  );
}

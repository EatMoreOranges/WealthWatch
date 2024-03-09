import { Box, Card, Center, CardHeader, CardBody, CardFooter, Text, Flex } from '@chakra-ui/react'

export default function WelcomeMessage() {
  return (
    <Box>
      <Center >
        <Card>
          <CardHeader pb={1}>
            <Text
              bgGradient='linear(to-l, #3083DC, #172A3A)'
              bgClip='text'
              fontSize='3xl'
              fontWeight='extrabold'
            >
              Welcome to Wealth Watch
            </Text>
          </CardHeader>
          <CardBody pt={1}>
            <Center>Doing what it takes to get the furture you want.</Center>
          </CardBody>
        </Card>
      </Center>
    </Box>
  );
}

import { Text, Box, Center, Flex, Image } from "@chakra-ui/react";

export default function Home() {
  // background="tomato" width="100%" padding="4" color="white
  return (
    <>
      {/* Title */}
      <Box background="tomato" padding="4">
        <Center>
          <Text>Saraah</Text>
        </Center>
      </Box>
      {/* Experences */}
      <Box background="red" padding="4">
        <Center>
          <Flex>
            <Box background="pink" padding="4">
              <Text>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Viverra
                facilisi vivamus laoreet malesuada molestie ut imperdiet quam.
                Sollicitudin habitasse mi nec sodales nisi. Imperdiet duis
                hendrerit convallis fames purus congue efficitur posuere.
              </Text>
            </Box>
            <Box background="black" padding="4">
              <Text>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Viverra
                facilisi vivamus laoreet malesuada molestie ut imperdiet quam.
                Sollicitudin habitasse mi nec sodales nisi. Imperdiet duis
                hendrerit convallis fames purus congue efficitur posuere.
              </Text>
            </Box>
            <Box background="gray" padding="4">
              <Text>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Viverra
                facilisi vivamus laoreet malesuada molestie ut imperdiet quam.
                Sollicitudin habitasse mi nec sodales nisi. Imperdiet duis
                hendrerit convallis fames purus congue efficitur posuere.
              </Text>
            </Box>
          </Flex>
        </Center>
      </Box>
      {/* Activites */}
      <Box background="orange" padding="4">
        <Box background="tomato" padding="4">
          <Center>
            <Text>Activities </Text>
          </Center>
        </Box>
        <Box background="red" padding="4">
          <Center>
            <Flex>
              <Box background="brown" padding="4">
                <Image
                  src="https://bit.ly/naruto-sage"
                  boxSize="150px"
                  borderRadius="full"
                  fit="cover"
                  alt="Naruto Uzumaki"
                />
              </Box>
              <Box background="pink" padding="4">
                <Image
                  src="https://bit.ly/naruto-sage"
                  boxSize="150px"
                  borderRadius="full"
                  fit="cover"
                  alt="Naruto Uzumaki"
                />
              </Box>
              <Box background="black" padding="4">
                <Image
                  src="p2.png"
                  boxSize="150px"
                  borderRadius="full"
                  fit="cover"
                  alt="Naruto Uzumaki"
                />
              </Box>
              <Box background="gray" padding="4">
                <Image
                  src="https://bit.ly/naruto-sage"
                  boxSize="150px"
                  borderRadius="full"
                  fit="cover"
                  alt="Naruto Uzumaki"
                />
              </Box>
            </Flex>
          </Center>
        </Box>
      </Box>
      {/* <Text>Saraah</Text> */}
    </>
  );
}

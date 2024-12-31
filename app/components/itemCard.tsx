import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Icon,
  CardFooter,
  Image,
  VStack,
} from "@chakra-ui/react";
// import { MdOutlineStar } from "react-icons/md";
import { StarIcon } from "@chakra-ui/icons";

export default function ItemCard() {
  return (
    <>
      <Card size={"sm"} w="14em" borderWidth="1px" borderRadius="lg">
        <CardHeader>button coming soon</CardHeader>
        <CardBody>
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </CardBody>
        <CardFooter>
          <VStack>
            <Text>Item Title</Text>
            <Text>${2.99} / unit</Text>
            <Text>
              <StarIcon />
            </Text>
          </VStack>
        </CardFooter>
      </Card>
    </>
  );
}

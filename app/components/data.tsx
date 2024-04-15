import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Center } from "@chakra-ui/react";

export default function Data(){
    return (
        <Center >
            <TableContainer>
                <Table variant='striped' >
                    <TableCaption>Credit card transaction items from January 2024</TableCaption>
                    <Thead>
                        <Tr>
                        <Th>Date</Th>
                        <Th>Comany</Th>
                        <Th isNumeric>Amount</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                        <Td>Jan. 4</Td>
                        <Td>Netflix</Td>
                        <Td isNumeric>$25.4</Td>
                        </Tr>
                        <Tr>
                        <Td>Jan. 6</Td>
                        <Td>Target</Td>
                        <Td isNumeric>$30.48</Td>
                        </Tr>
                        <Tr>
                        <Td>Jan. 11</Td>
                        <Td>Exxon Mobile</Td>
                        <Td isNumeric>$258.92</Td>
                        </Tr>
                    </Tbody>
                    {/* <Tfoot>
                        <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                        </Tr>
                    </Tfoot> */}
                </Table>
            </TableContainer> 
        </Center>
    );

}
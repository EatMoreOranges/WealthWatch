import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Center } from "@chakra-ui/react";
import fs from 'fs';
import path from 'path';
import processPayments  from "../../processData/processStatements";

export default function DataTable (){

    async function readCsvData() {
        console.log("how you doing");
        try {
            console.log("its been a long time");
            // const filePath = path.join(process.cwd(), "/app/components/dashboard/table_content.json");
            const filePath = path.join(process.cwd(), "app/processData/newJson.json")

            const jsonData = await fs.promises.readFile(filePath, "utf-8");
            const data = JSON.parse(jsonData);
            console.log(data);

        } catch (error) {
            console.error("Whoops!", error);
            throw error;
        }
    }
    readCsvData();

    //TODO: Fix this
    const csvData = processPayments();
    console.log("look here: --->",csvData);

    return (
        <>
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        {/* loop for Th */}
                        <Th>A</Th>
                        <Th>B</Th>
                        <Th>C</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {/* loop for Tr */}
                    <Tr>
                        {/* loop for Td */}
                        <Td>row 1</Td>
                        <Td>row 1B</Td>
                        <Td>row 1C</Td>
                    </Tr>
                    <Tr>
                        <Td>row 2</Td>
                        <Td>row 2B</Td>
                        <Td>row 2C</Td>
                    </Tr>
                    <Tr>
                        <Td>row 3</Td>
                        <Td>row 3B</Td>
                        <Td>row 3C</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
        </>
    );
}
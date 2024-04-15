// import fs from 'fs';
// import csvParser from 'csv-parser';
// import { error } from 'console';

// export default function ProcessStatement(){
//     const filePath = "./statements/2024/march/2024-03.csv"

//     const data: any[] = [];

//     fs.createReadStream(filePath)
//         .pipe(csvParser())
//         .on('data', (row) => {
//             //process row and add to array
//             data.push(row);
//         })
//         .on('end', () => {
//             console.log("file is successfully processed");
//             console.log(data);

//         })
//         .on('error', (error) =>{
//             console.log("Whoops there was a problem: ", error)
//         })
//         return data;
// };
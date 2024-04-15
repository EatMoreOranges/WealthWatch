type HeaderNames = string[];
type TableRow = (string|number)[];

interface MonthlyStatement {
    headerNames: HeaderNames,
    tableBody: TableRow[],
}
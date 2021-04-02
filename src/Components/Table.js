import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { COLUMN } from '../assets/ChromosomeColumn';

const Table = (props) => {
    const columns = useMemo(() => COLUMN, [])
    const data = useMemo(() => props.DATA, [])

    const TableInstance = useTable({
        columns,
        data
    });

    const { getTableProps, getTableBodyProps, rows, headerGroups, prepareRow } = TableInstance;

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()} >
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}> {column.render("Header")} </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()} >
                {
                    rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(
                                    (cell) => (
                                        <td {...cell.getCellProps()} >
                                            {cell.render("Cell")}
                                        </td>
                                    )
                                )}
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    )
}

export default Table

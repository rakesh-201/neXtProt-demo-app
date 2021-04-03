import React, { useMemo, useState } from 'react'
import { useTable, usePagination, safeUseLayoutEffect } from 'react-table'
import Select from 'react-select'
import { COLUMN } from '../assets/ChromosomeColumn';

const Table = ({ DATA }) => {
    const columns = useMemo(() => COLUMN, [])
    const data = useMemo(() => DATA, [DATA])

    const [selectVal, setSelectVal] = useState({ value: 10, label: "10" })

    const TableInstance = useTable({
        columns,
        data
    }, usePagination);

    const { getTableProps,
        getTableBodyProps,
        page,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        setPageSize,
        state,
        headerGroups,
        prepareRow } = TableInstance;

    const { pageIndex } = state

    const options = [
        { value: 10, label: "10" },
        { value: 20, label: "20" },
        { value: 50, label: "50" },
        { value: 100, label: "100" },
        { value: 200, label: "200" },
    ]

    return (
        <>
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
                        page.map(row => {
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
            <div class="d-flex flex-direction-row justify-content-evenly align-items-center mb-5">
                <div className="d-flex flex-direction-row " >
                    <div>   </div>
                    <div style={{ width: "12rem" }}><Select value={{ ...selectVal, label: `No. of rows ${selectVal.label}` }} onChange={(val) => { setPageSize(val.value); setSelectVal(val) }} options={options} styles={{ width: "50px " }} />
                    </div>
                </div>

                <button className="btn btn-primary" onClick={() => previousPage()} disabled={!canPreviousPage} >previous</button>
                <div><span>Page <strong className="text-primary">{pageIndex + 1}</strong> of <strong>{pageOptions.length}</strong></span></div>
                <button className="btn btn-primary" onClick={() => nextPage()} disabled={!canNextPage} >next</button>
            </div>
        </>
    )
}

export default Table

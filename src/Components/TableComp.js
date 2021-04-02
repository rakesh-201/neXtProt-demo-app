import React, { useState, useEffect, useCallback } from 'react'
import Table from './Table'
import Input from './Input'
import '../Styles/Table.css'


const TableComp = () => {
    const [data, setData] = useState()
    const [chromosome, setChromosome] = useState("")
    const [loading, setLoading] = useState(false)
    const [iniLoad, setIniLoad] = useState(true)

    const fetchData = useCallback(() => {
        if (chromosome.lenght === 0) {
            setData({})
            return
        }
        const func = async () => {
            setIniLoad(false);
            setLoading(true)
            let res = await fetch(`https://api.nextprot.org/chromosome-report/${chromosome}.json`)
            res = await res.json();
            if (res.type == "ChromosomeNotFoundException") {
                setData({ response: "404", message: res.message })
            }
            else {
                setData({ response: "200", entries: res.entryReports });
            }
            setLoading(false)

        }
        func();
    }, [chromosome])

    useEffect(() => {
    }, [])

    return (
        <div className="screen" >
            <h1 className="mx-3 text-primary" >Chromosomal Data</h1>
            <div className="m-5">

                <div>
                    <Input title="Chromosome" desc="Enter the Chromosome (Y, X, WX,...) " value={chromosome} onChange={setChromosome} />
                </div>
                <button className="btn btn-primary" disabled={chromosome.length == 0 ? true : false} onClick={() => fetchData()} >Get Data</button>
            </div>
            {
                !iniLoad ?
                    (!loading) ?
                        data.response === "200" ?
                            <div className="tableCont">
                                <Table DATA={data.entries} />
                            </div>
                            :
                            <div>
                                <h5>
                                    {data.message}
                                </h5>
                            </div>
                        :
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    :
                    null

            }
        </div >
    )
}

export default TableComp

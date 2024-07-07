import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useContext } from "react"
import { StepControllerContext } from "../../context/StepControllerContext"
import Image from 'next/image';

import CabinetsWithShelfButtons from './CabinetsWithShelfButtons';
import PreviousButton from './PreviousButton';

export default function TestingResults() {
    const { selectedCabinet, setIsOpen, setCurrentStep } = useContext(StepControllerContext)

    const colums = [
        {
            field: "CAMERAS", header: "CAMERAS"
        },
        {
            field: "POS1", header: "POS.1"
        },
        {
            field: "POS2", header: "POS.2"
        },
        {
            field: "POS3", header: "POS.3"
        }
    ]

    const tableData = [
        {
            CAMERAS: "NA",
            POS1: "-",
            POS2: "-",
            POS3: "-",
        }
    ]


    const naBodyTemplate = (rowData, column) => {
        if (rowData[column.field] === "NA") {
            return (
                <p className="bg-gray-200 text-gray-500 w-full absolute left-0 top-0 h-full flex items-center justify-center">
                    {rowData[column.field]}
                </p>
            );
        }
        return rowData[column.field];
    };

    return (
        <div className="mx-56 mt-4">
            <p className="font-bold text-[#30303c] mb-4 text-xl">Shelf installation and testing</p>
            <div className="flex justify-between items-start">
                <div className="bg-white rounded-xl flex flex-col space-y-4 p-5 relative w-1/2 ">
                    <p className='font-bold'>Shelf 10 - Testing results</p>
                    <DataTable value={tableData} tableStyle={{ minWidth: '30rem' }}>
                        {colums.map((col, i) => {
                            return (
                                <Column key={col.field} field={col.field} header={col.header}
                                    headerStyle={{
                                        backgroundColor: 'white',
                                        color: 'gray',
                                        fontSize: '0.875rem', // Tailwind's text-sm size 
                                    }}
                                    bodyStyle={{
                                        borderTop: '1px solid #d1d5db', // Tailwind's border-gray-300
                                        position: 'relative',

                                    }}
                                    body={naBodyTemplate}
                                />
                            )
                        })}
                    </DataTable>
                    <button className="rounded-full px-6 py-3 font-semibold text-white text-sm mt-4 bg-[#30303c] w-1/3 self-end" onClick={() => setIsOpen(true)}>CONFIRM</button>
                </div>
                <CabinetsWithShelfButtons selectedCabinet={selectedCabinet} ></CabinetsWithShelfButtons>
            </div>
            <PreviousButton setCurrentStep={setCurrentStep} stepValue={1} />
        </div>

    )
}
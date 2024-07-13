import Invoice from "@/app/models/Invoice";
import React, { useRef } from "react"
import { useReactToPrint } from "react-to-print";
import { GeneratePdf } from "./GeneratePdf";

export const GeneratePdfButton = ({ invoiceData }: { invoiceData: Invoice }) => {

    // const submitForm = () => {
    //     console.log(invoiceData.toJSON());
    // };

    const documentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => documentRef.current,
        documentTitle: `Invoice-${invoiceData.fullName}-${invoiceData.invoiceNumber}`,
        bodyClass: 'p-16', // some padding
    });

    return (
        <>
            <button className="bg-main-accent text-white hover:opacity-50 p-2 mt-4 w-full" onClick={() => { handlePrint() }}>
                Print Invoice
            </button>
            <GeneratePdf
                ref={documentRef}
                data={invoiceData}
            />
        </>
    )
}
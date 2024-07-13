import Invoice from "@/app/models/Invoice";

export const InvoiceTemplate = ({invoiceData}: {invoiceData: Invoice}) => {
    return (    
        <>
            {/* Need to add pdf template here */}
            {invoiceData.invoiceNumber}
        </>
    )
}
import Invoice from "@/app/models/Invoice";
import { forwardRef } from "react";
import { InvoiceTemplate } from "./invoicePdfTemplate";

export const GeneratePdf = forwardRef<HTMLDivElement, { data: Invoice }>(({ data }, ref) => {
    return (
        <div className="h-0 overflow-hidden">
            <div
                ref={ref}
                className="w-full"
            >
                <InvoiceTemplate invoiceData={data} />
            </div>
        </div>
    )
});
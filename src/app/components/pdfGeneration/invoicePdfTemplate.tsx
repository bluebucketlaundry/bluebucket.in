import Invoice from "@/app/models/Invoice";

export const InvoiceTemplate = ({ invoiceData }: { invoiceData: Invoice }) => {
    return (
        <>
            {/* Need to add pdf template here */}

            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                <h1 style={{ textAlign: 'center' }}>Invoice</h1>

                <div style={{ marginBottom: '20px' }}>
                    <strong>Invoice Number:</strong> {invoiceData.invoiceNumber}
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <strong>Full Name:</strong> {invoiceData.fullName}
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <strong>Phone Number:</strong> {invoiceData.phoneNumber}
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <strong>Address:</strong> {invoiceData.address}
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <strong>Customer Type:</strong> {invoiceData.customerType}
                </div>

                <table width="100%" border={1} cellPadding="10" cellSpacing="0" style={{ marginBottom: '20px' }}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Rate</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoiceData.items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.description}</td>
                                <td>{item.rate}</td>
                                <td>{item.qty}</td>
                                <td>{item.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div style={{ marginBottom: '20px' }}>
                    <strong>Remarks:</strong> {invoiceData.remarks}
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <strong>Express Delivery:</strong> {invoiceData.expressDelivery ? 'Yes' : 'No'}
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <strong>Subtotal:</strong> {invoiceData.subtotal}
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <strong>Discount:</strong> {invoiceData.discount}%
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <strong>Total:</strong> {invoiceData.total}
                </div>
            </div>
        </>
    )
}
export default class Invoice {
  invoiceNumber: string;
  fullName: string;
  phoneNumber: string;
  address: string;
  customerType: string;
  items: { description: string; rate: number; qty: number; total: number }[];
  remarks: string;
  expressDelivery: boolean;
  subtotal: number;
  discount: number;
  total: number;

  constructor(
    invoiceNumber: string,
    fullName: string,
    phoneNumber: string,
    address: string,
    customerType: string,
    items: { description: string; rate: number; qty: number; total: number }[],
    remarks: string,
    expressDelivery: boolean,
    discount: number
  ) {
    this.invoiceNumber = invoiceNumber;
    this.fullName = fullName;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.customerType = customerType;
    this.items = items;
    this.remarks = remarks;
    this.expressDelivery = expressDelivery;
    this.subtotal = this.calculateSubtotal();
    this.discount = discount;
    this.total = this.calculateTotal();
  }

  private calculateSubtotal(): number {
    return this.items.reduce((sum, item) => sum + item.total, 0);
  }

  private calculateTotal(): number {
    return this.subtotal - this.subtotal * (this.discount / 100);
  }

  public toJSON(): string {
    return JSON.stringify(
      {
        invoiceNumber: this.invoiceNumber,
        fullName: this.fullName,
        phoneNumber: this.phoneNumber,
        address: this.address,
        customerType: this.customerType,
        items: this.items,
        remarks: this.remarks,
        expressDelivery: this.expressDelivery,
        subtotal: this.subtotal,
        discount: this.discount,
        total: this.total,
      },
      null,
      2
    );
  }
}

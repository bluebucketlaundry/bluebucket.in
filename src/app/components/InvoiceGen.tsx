"use client"

import { useState } from "react";
import Image from "next/image";
import trash from "@/assets/trash.svg"

const InvoiceGenerator = () => {
    const [items, setItems] = useState([
        { description: "Pants - Steam Press", rate: 0, qty: 0, total: 0 },
        { description: "Pants - Wash & Press", rate: 0, qty: 0, total: 0 },
    ]);

    const handleInputChange = (index: number, e: any) => {
        const { name, value } = e.target;
        const updatedItems: any[] = [...items];
        updatedItems[index][name] = value;
        updatedItems[index].total = updatedItems[index].rate * updatedItems[index].qty;
        setItems(updatedItems);
    };

    const addItem = () => {
        setItems([...items, { description: "", rate: 0, qty: 0, total: 0 }]);
    };

    const removeItem = (index: number) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    const calculateSubtotal = () => {
        return items.reduce((sum: number, item) => sum + (item.total || 0), 0);
    };

    const subtotal = calculateSubtotal();
    const discount = 10;
    const total = subtotal - (subtotal * (discount / 100));

    return (
        <div className="p-4 bg-white text-black">

            <h1 className="text-2xl font-bold mb-4">Invoice Generator</h1>

            <div className="my-4">
                <label className="block">Invoice Number</label>
                <input type="text" className="border p-2 w-full" />
            </div>

            <div className="my-4">
                <label className="block">Full Name</label>
                <input type="text" className="border p-2 w-full" />
            </div>

            <div className="my-4">
                <label className="block">Phone Number</label>
                <input type="text" className="border p-2 w-full" />
            </div>

            <div className="my-4">
                <label className="block">Address</label>
                <input type="text" className="border p-2 w-full" />
            </div>

            <div className="my-4">
                <label className="block">Customer Type</label>
                <select className="border p-2 w-full">
                    <option>Regular</option>
                    <option>Hotel</option>
                    <option>Hotel-Guest</option>
                </select>
            </div>

            <div className="border pb-4">

                {items.map((item, index) => (
                    <div key={index} className="p-4 mb-4">
                        <div className="flex justify-between mb-2">
                            <input
                                type="text"
                                name="description"
                                value={item.description}
                                onChange={(e) => handleInputChange(index, e)}
                                className="border p-2 w-3/4"
                            />
                            <button onClick={() => removeItem(index)}><Image src={trash} height={20} width={20} alt={""} className="text-red-500" /></button>
                        </div>

                        <div className="flex justify-between mb-2">
                            <input
                                type="number"
                                name="rate"
                                value={item.rate}
                                onChange={(e) => handleInputChange(index, e)}
                                placeholder="Rate"
                                className="border p-2 w-1/4"
                            />
                            <input
                                type="number"
                                name="qty"
                                value={item.qty}
                                onChange={(e) => handleInputChange(index, e)}
                                placeholder="Qty"
                                className="border p-2 w-1/4"
                            />
                            <input
                                type="number"
                                name="total"
                                value={item.total}
                                readOnly
                                placeholder="Net Total"
                                className="border p-2 w-1/4"
                            />
                        </div>

                        <input
                            type="text"
                            name="remarks"
                            placeholder="Remarks"
                            className="border p-2 w-full"
                        />
                    </div>

                ))}
                <button onClick={addItem} className="bg-main-accent text-white hover:opacity-50 p-2 mb-4 ml-4 w-24">Add</button>

            </div>


            <div className="my-4">
                <label className="block">Remarks</label>
                <input type="text" className="border p-2 w-full" />
            </div>

            <div className="my-4">
                <label className="block">
                    <input type="checkbox" className="mr-2" /> Express Delivery
                </label>
            </div>

            <div className="border p-4">
                <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>{subtotal}</span>
                </div>

                <div className="flex justify-between mb-2">
                    <span>Discount</span>
                    <span>{discount}%</span>
                </div>

                <div className="flex justify-between mb-2">
                    <span>Total</span>
                    <span>{total}</span>
                </div>
            </div>

            <button className="bg-main-accent text-white hover:opacity-50 p-2 mt-4 w-full">Submit</button>
        </div>
    );
};

export default InvoiceGenerator;

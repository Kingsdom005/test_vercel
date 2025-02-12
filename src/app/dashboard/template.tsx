"use client"
import { useState } from "react";

export default function DashboardTemplate({
    children,
}: {
    children: React.ReactNode
}) {
    const [count, setCount] = useState(0);
    return (
        <div className="border-2 border-dashed border-gray-200 rounded-md p-4 mx-auto mt-4">
            <h2>Dashboard Layout {count}</h2>
            <button className="bg-black text-white px-4 py-2 rounded-md mt-4" onClick={() => setCount(count + 1)}>Increment</button>
            {children}
        </div>
    );
}
"use client"
import BrandPicker from "@/components/modules/UserItem/BrandPicker"
import FilterBar from "@/components/shared/Filter"
import TableStyled from "@/components/styled/TableStyled"
import React from "react"

export default function MyOrdersPage() {
    return (
        <div>
            <div className="text-3xl mb-4 p-4 font-bold">
                <p>Lịch sử đơn hàng</p>
            </div>

            <div>
                <BrandPicker className="w-55" />
            </div>

            <div className="p-4">
                <FilterBar />
            </div>

            <div className="p-4">
                <TableStyled />
            </div>
        </div>
    )
}

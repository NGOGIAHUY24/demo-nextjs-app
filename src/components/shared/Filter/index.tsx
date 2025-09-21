import { ButtonStyled } from "@/components/styled"
// import Local from "@/components/modules/FilterItem/LocalFilter"

import React, { useState } from "react"
import LocalFilter from "@/components/modules/FilterItem/LocalFilter"

import DateTime from "@/components/modules/FilterItem/DateTime"

export default function FilterBar() {
    const [filters, setFilters] = useState({
        local: null as string | null
    })

    const updateFilter = (key: string, value: string | null) => {
        setFilters((prev) => ({ ...prev, [key]: value }))
    }

    const handleSubmit = () => {
        console.log("Data will send BE:", filters)

        // fetch("/api/filter", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(filters)
        // })
    }
    return (
        <div className="flex flex-col items-center w-250 h-50">
            <div className="mb-10 text-2xl font-bold">Danh sách Xe</div>
            <div className="flex justify-around items-center space-x-6">
                <div>
                    <LocalFilter
                        value={filters.local}
                        onChange={(val) => updateFilter("data", val)}
                    />
                </div>
                <div className="mb-6">
                    <DateTime className="" />
                </div>
                <div>
                    <ButtonStyled className="">Submit</ButtonStyled>
                </div>
            </div>
        </div>
    )
}

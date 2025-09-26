"use client"
import { cn, Select, SelectItem, SelectProps } from "@heroui/react"
import React from "react"

export const brands = [
    { key: "vf3", label: "VF3" },
    { key: "vf5", label: "VF5" },
    { key: "vf5Plus", label: "VF5 Plus" },
    { key: "vf7", label: "VF7" }
]

// Loại bỏ `children` vì mình render sẵn
type BrandPickerProps = Omit<SelectProps, "children">

export default function BrandPicker(props: BrandPickerProps) {
    return (
        <div className="flex items-center">
            <Select
                variant="bordered"
                isClearable
                {...props}
                className={cn("max-w-xs font-medium text-base", props.className)}
            >
                {brands.map((brand) => (
                    <SelectItem key={brand.key}>{brand.label}</SelectItem>
                ))}
            </Select>
        </div>
    )
}

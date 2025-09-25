"use client"
import { cn, DatePicker, DatePickerProps } from "@heroui/react"
import React from "react"
export default function DatePickerStyled(props: DatePickerProps) {
    return (
        <DatePicker
            label="Birth date"
            {...props}
            className={cn("max-w-[284px] font-medium text-base", props.className)}
        />
    )
}

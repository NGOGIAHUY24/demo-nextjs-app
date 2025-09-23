import { cn, DateInput, DateInputProps } from "@heroui/react"
import { CalendarDate } from "@internationalized/date"
import React from "react"
export default function DateStyled(props: DateInputProps) {
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <DateInput
                label={"Birth date"}
                placeholderValue={new CalendarDate(1995, 11, 6)}
                variant="faded"
                {...props}
                className={cn("font-medium text-base", props.className)}
            />
        </div>
    )
}

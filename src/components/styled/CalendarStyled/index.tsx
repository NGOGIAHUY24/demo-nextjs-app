import { Calendar, CalendarProps, cn } from "@heroui/react"
import { today, getLocalTimeZone } from "@internationalized/date"
import React from "react"
export default function CalendarStyled(props: CalendarProps) {
    return (
        <Calendar
            aria-label="Date (Min Date Value)"
            defaultValue={today(getLocalTimeZone())}
            minValue={today(getLocalTimeZone())}
            {...props}
            className={cn("font-medium text-base", props.className)}
        />
    )
}

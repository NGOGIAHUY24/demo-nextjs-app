import { cn, DateRangePicker, DateRangePickerProps } from "@heroui/react"
import { getLocalTimeZone, parseZonedDateTime, today } from "@internationalized/date"
import React from "react"

export default function DateTime(props: DateRangePickerProps) {
    return (
        <div className="w-full max-w-xl flex flex-row gap-4">
            <DateRangePicker
                hideTimeZone
                defaultValue={{
                    // start: parseZonedDateTime("2024-04-01T00:45[America/Los_Angeles]"),
                    start: today(getLocalTimeZone()).subtract({ days: 1 }),
                    end: parseZonedDateTime("2024-04-08T11:15[America/Los_Angeles]")
                }}
                label="Event duration"
                minValue={today(getLocalTimeZone())}
                visibleMonths={2}
                {...props}
                className={cn("font-medium text-base", props.className)}
            />
        </div>
    )
}

import { ButtonStyled } from "@/components/styled"
import Local from "@/components/styled/Local"
import { RangeCalendar } from "@heroui/react"
import React from "react"

export default function Filter() {
    return (
        <div>
            <ButtonStyled />
            <Local />
            <RangeCalendar />
            <ButtonStyled />
        </div>
    )
}

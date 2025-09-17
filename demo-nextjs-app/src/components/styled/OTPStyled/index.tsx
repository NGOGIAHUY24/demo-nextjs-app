"use client"
import { cn, InputOtpProps, InputOtp } from "@heroui/react"
import React from "react"

export default function NavbarStyled(props: InputOtpProps) {
    return (
        <InputOtp
            color ="primary"
            {...props}
            className={cn("text-base",props.className)}
        />
    )
}

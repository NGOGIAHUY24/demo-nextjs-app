"use client"
import React from "react"
import { useRegisDiscloresureSingleton } from "@/hooks"
import { ModalBody, ModalContent, ModalHeader } from "@heroui/react"
import { ModalStyled } from "@/components/styled"

import { useTranslation } from "react-i18next"
import Login from "@/components/shared/Login"
import SignUp from "@/components/shared/SignUp"

export function SignupModal() {
    const { t } = useTranslation()
    const { isOpen, onOpenChange, onClose } = useRegisDiscloresureSingleton()

    return (
        <ModalStyled isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1">Sign Up</ModalHeader>
                <ModalBody>
                    <SignUp />
                </ModalBody>
            </ModalContent>
        </ModalStyled>
    )
}

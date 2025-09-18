"use client"
import React, { useState } from "react"
import RowSteps from "./RowStepStyled"
import { ButtonStyled } from "@/components/styled"

export default function RowStep() {
    const steps = [
        { title: "Email" },
        { title: "OTP" },
        { title: "Information" }
    ]

    const [step, setStep] = useState(0)

    const handleNext = () => {
        setStep(prev => (prev < steps.length - 1 ? prev + 1 : prev))
    }

    const handlePrev = () => {
        setStep(prev => (prev > 0 ? prev - 1 : prev))
    }

    return (
        <div className="flex flex-col gap-4">
            <RowSteps
                currentStep={step}
                onStepChange={setStep}
                steps={steps}
            />

            <div className="flex gap-2">
                <ButtonStyled onClick={handlePrev}>
                    Quay lại
                </ButtonStyled>

                <ButtonStyled onClick={handleNext}>
                    Tiếp tục
                </ButtonStyled>
            </div>
        </div>
    )
}

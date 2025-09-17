"use client"
import RegisEmail from "@/components/modules/Regis/RegisEmail"
import RegisInFo from "@/components/modules/Regis/RegisInFo"
import RegisOTP from "@/components/modules/Regis/RegisOTP"
import RowStep from "@/components/modules/Regis/RowStep"
import React, { useState } from "react"

function SignUp() {
    const [step, setStep] = useState(0)
    return (
        <div>
            <RowStep n={step} />
            {step === 0 && <RegisEmail handleSubmit={() => setStep(1)} />}
            
            {step === 1 && <RegisOTP handleBack={() => setStep(1)} handleNext={() => setStep(2)} />}
            {step === 3 && <RegisInFo handleBack={() => setStep(1)} handleNext={() => setStep(3)}/>}
            
        </div>
    )
}

export default SignUp

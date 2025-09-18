import RegisEmail from "@/components/modules/Regis/RegisEmail"
import React from "react"

function SignUp() {

    return (
        <div>
            <RegisEmail handleSubmit={() => setStep(2)}/>
        </div>
    )
}

export default SignUp

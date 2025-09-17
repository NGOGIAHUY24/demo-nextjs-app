import React from "react"
import RowSteps from "./RowStep"

export default function Component() {
    return (
        <RowSteps
            defaultStep={2}
            steps={[
                {
                    title: "Email"
                },
                {
                    title: "OTP"
                },
                {
                    title: "Information"
                }
            ]}
        />
    )
}

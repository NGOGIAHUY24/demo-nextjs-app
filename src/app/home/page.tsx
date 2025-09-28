import { LoginModal } from "@/components/modals/LoginModal"
import { SignupModal } from "@/components/modals/SignUpModal"
import Home from "@/components/shared/Home"
import React from "react"

export default function page() {
    return (
        <div>
            <Home />
            <div>
                <LoginModal />
                <SignupModal />
            </div>
        </div>
    )
}

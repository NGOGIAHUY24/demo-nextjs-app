import React from "react"
import { PostList } from "@/components"
import Navbar from "@/components/shared/Navbar"
import Login from "@/components/shared/Login"
import SignUp from "@/components/shared/SignUp/RegisInFo"
import RegisEmail from "@/components/shared/SignUp/RegisEmail"
import RegisOTP from "@/components/shared/SignUp/RegisOTP"
import RegisInFo from "@/components/shared/SignUp/RegisInFo"
import Demo from "@/components/shared/Demo"

export default function PostsPage() {
    return (
        <div>
            {/* <Navbar /> */}
            <Demo />

            <RegisEmail />
            <RegisOTP />
            <RegisInFo />
        </div>
    )
}

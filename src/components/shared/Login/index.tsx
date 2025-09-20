"use client"
import { Button, Checkbox, Input, Link } from "@heroui/react"
import React, { useState } from "react"

// import ButtonGoogle from "../../styled/ButtonGoogle"
import { useFormik } from "formik"
import * as Yup from "yup"
import { EyeIcon } from "@phosphor-icons/react" //npm i @phosphor-icons/react
import Logo from "@/components/styled/Logo"
import { ButtonStyled } from "@/components/styled"

export default function Login() {
    const [isShowPassword, setIsShowPassword] = useState(false)
    // const [isSelected, setIsSelected] = useState(false)
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            remember: false
            // confirmPassword: "",
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required("Username is required")
                .min(4, "Username must be at least 4 characters")
                .max(10, "Username must be at most 10 characters"),
            password: Yup.string()
                .required("Password is required")
                .min(6, "Password must be at least 6 characters")
        }),
        onSubmit: async (values) => {
            // Promise tự nghiên cứu
            // nó ngủ trong vòng 4s, sau 4s mới thực thi logic
            await new Promise((resolve) => setTimeout(resolve, 4000))
            // logic thực thi
            alert(JSON.stringify(values))
        }
    })
    return (
        <div className="flex justify-center mt-50">
            <div
                className="flex flex-col gap-4
                    w-125 h-131 max-w-4xs
                   bg-gray-400 rounded-2xl"
            >
                <Logo />

                <div className="w-110 mx-auto ">
                    <Input
                        className="my-4"
                        label="Username"
                        value={formik.values.username}
                        onValueChange={(value) => formik.setFieldValue("username", value)}
                        isInvalid={!!(formik.touched.username && formik.errors.username)}
                        errorMessage={formik.errors.username}
                        onBlur={() => {
                            formik.setFieldTouched("username")
                        }}
                    />
                    <Input
                        label="Password"
                        type={isShowPassword ? "text" : "password"}
                        value={formik.values.password}
                        onValueChange={(value) => formik.setFieldValue("password", value)}
                        isInvalid={!!(formik.touched.password && formik.errors.password)}
                        errorMessage={formik.errors.password}
                        onBlur={() => {
                            formik.setFieldTouched("password")
                        }}
                        endContent={
                            <Link onPress={() => setIsShowPassword(!isShowPassword)}>
                                <EyeIcon />
                            </Link>
                        }
                    />
                </div>
                <ButtonStyled
                    className="w-110 h-10 mx-auto mt-0"
                    isLoading={formik.isSubmitting}
                    // color="primary"
                    isDisabled={!formik.isValid}
                    onPress={() => formik.submitForm()}
                >
                    Login
                </ButtonStyled>

                <div className="flex justify-between items-center w-110 mt-0 ml-7">
                    <div className="flex flex-col gap-2">
                        <Checkbox
                            isSelected={formik.values.remember}
                            onValueChange={(isSelected) =>
                                formik.setFieldValue("remember", isSelected)
                            }
                        >
                            Remember me
                        </Checkbox>
                    </div>
                    <div>
                        <Link href="/signup">Forgot Password</Link>
                    </div>
                </div>

                {/* <!-- Divider với chữ Or --> */}
                <div className="w-full max-w-sm mx-auto text-center space-y-4">
                    <div className="flex items-center">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="px-3 text-gray-500 text-sm">Or</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>
                </div>

                {/* <ButtonGoogle /> */}
                <div className="flex gap-4 items-center ml-36">
                    <Button
                        radius="none"
                        onPress={() => (window.location.href = "/api/auth/google")} // Redirect ra Google OAuth
                    >
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        Đăng nhập bằng Google
                    </Button>
                </div>
            </div>
        </div>
    )
}

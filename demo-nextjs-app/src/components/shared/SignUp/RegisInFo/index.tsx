"use client"
import { Link } from "@heroui/react"

import { useState } from "react"

import { useFormik } from "formik"
import * as Yup from "yup"
import { EyeIcon } from "@phosphor-icons/react"
import React from "react"
import { ButtonStyled, InputStyled } from "@/components/styled"

export default function RegisInFo() {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)

    const formik = useFormik({
        initialValues: {
            lastName: "",
            firstName: "",
            password: "",
            confirmPassword: "",
            phone: ""
        },
        validationSchema: Yup.object({
            lastName: Yup.string()
                .required("Last name is required")
                .matches(/^[A-Za-z\s]+$/, "Last name only contains letters"),
            firstName: Yup.string()
                .required("First name is required")
                .matches(/^[A-Za-z\s]+$/, "First name only contains letters"),
            password: Yup.string()
                .required("Password is required")
                .min(6, "Password must be at least 6 characters")
                .matches(
                    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/,
                    "Password must contain 1 uppercase, 1 number, 1 special char"
                ),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password")], "Passwords must match")
                .required("Please confirm your password"),
            phone: Yup.string()
                .required("Phone is required")
                .length(10, "Phone must be exactly 10 digits")
                .matches(/^(0[0-9]{9})$/, "Phone must be 10 digits and start with 0")
        }),
        onSubmit: async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 4000))
            alert(JSON.stringify(values))
        }
    })

    return (
        <div className="flex justify-center mt-50 ">
            <div
                className="flex flex-col gap-0
                    w-125 h-131 max-w-4xs
                   bg-gray-400 rounded-2xl"
            >
                <h1 className="font-bold mt-6 ml-6 mb-3 text-xl">Register Account (Step 3)</h1>

                {/* FL name */}
                <div className="flex mx-auto w-110 gap-5">
                    <InputStyled
                        variant="bordered"
                        label="Lastname"
                        value={formik.values.lastName}
                        onValueChange={(value) => formik.setFieldValue("lastName", value)}
                        isInvalid={!!(formik.touched.lastName && formik.errors.lastName)}
                        errorMessage={formik.errors.lastName}
                        onBlur={() => {
                            formik.setFieldTouched("lastName")
                        }}
                    />

                    <InputStyled
                        variant="bordered"
                        label="First name"
                        value={formik.values.firstName}
                        onValueChange={(value) => formik.setFieldValue("firstName", value)}
                        isInvalid={!!(formik.touched.firstName && formik.errors.firstName)}
                        errorMessage={formik.errors.firstName}
                        onBlur={() => {
                            formik.setFieldTouched("firstName")
                        }}
                    />
                </div>

                <div className="w-110 mx-auto">
                    {/* <Input className="my-3"
          variant="underlined"
            label="Email"
            value={formik.values.email}
            onValueChange={(value) => formik.setFieldValue("email", value)}
            isInvalid={!!(formik.touched.email && formik.errors.email)}
            errorMessage={formik.errors.email}
            onBlur={() => {
              formik.setFieldTouched("email");
            }}/> */}

                    <InputStyled
                        className="my-3"
                        variant="bordered"
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

                    <InputStyled
                        className="my-3"
                        variant="bordered"
                        label="Confirm"
                        type={isShowConfirmPassword ? "text" : "password"}
                        value={formik.values.confirmPassword}
                        onValueChange={(value) => formik.setFieldValue("confirmPassword", value)}
                        errorMessage={formik.errors.confirmPassword}
                        onBlur={() => {
                            formik.setFieldTouched("confirmPassword")
                        }}
                        isInvalid={
                            !!(formik.touched.confirmPassword && formik.errors.confirmPassword)
                        }
                        endContent={
                            <Link onPress={() => setIsShowConfirmPassword(!isShowConfirmPassword)}>
                                <EyeIcon />
                            </Link>
                        }
                    />

                    <InputStyled
                        className="my-3"
                        variant="bordered"
                        label="Phone number"
                        maxLength={10}
                        pattern="[0-9]*"
                        onInput={(e) => {
                            e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "") // chỉ cho số
                        }}
                        value={formik.values.phone}
                        onValueChange={(value) => formik.setFieldValue("phone", value)}
                        isInvalid={!!(formik.touched.phone && formik.errors.phone)}
                        errorMessage={formik.errors.phone}
                        onBlur={() => {
                            formik.setFieldTouched("phone")
                        }}
                    />
                </div>

                <ButtonStyled
                    className="w-110 h-10 mx-auto mt-0"
                    isLoading={formik.isSubmitting}
                    color="primary"
                    isDisabled={!formik.isValid}
                    onPress={() => formik.submitForm()}
                >
                    Send Form
                </ButtonStyled>
            </div>
        </div>
    )
}

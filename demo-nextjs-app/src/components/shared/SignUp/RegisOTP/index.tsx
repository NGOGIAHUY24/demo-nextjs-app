"use client"
import { useFormik } from "formik"
import * as Yup from "yup"
import React from "react"
import { ButtonStyled } from "@/components/styled"
import { InputOtp } from "@heroui/react"
import { ArrowArcRightIcon } from "@phosphor-icons/react/dist/ssr"
import { ArrowRightIcon } from "@phosphor-icons/react"

export default function RegisOTP() {
    const formik = useFormik({
        initialValues: {
            opt: ""
        },
        validationSchema: Yup.object({
            opt: Yup.string()
                .required("Email is required")
                .matches(/^[0-9]{6}$/, "Invalid email format")
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
                <h1 className="font-bold mt-6 ml-6 mb-2 text-xl">Register Account (Step 2)</h1>
                <div className=" mx-auto">
                    <p className="text-default-500 mb-2 ml-18 text-xl font-bold">6 digits OTP</p>
                    <InputOtp
                        length={6}
                        value={formik.values.opt}
                        onValueChange={(value) => formik.setFieldValue("opt", value)}
                        isInvalid={!!(formik.touched.opt && formik.errors.opt)}
                        errorMessage={formik.errors.opt}
                        onBlur={() => {
                            formik.setFieldTouched("opt")
                        }}
                    />
                </div>

                <ButtonStyled
                    
                    isLoading={formik.isSubmitting}
                    color="primary"
                    isDisabled={!formik.isValid}
                    onPress={() => formik.submitForm()}
                    className="w-6 h-16 mx-auto mt-0"
                >

                    {formik.isSubmitting ? "" : <ArrowRightIcon/>}
                </ButtonStyled>
            </div>
        </div>
    )
}

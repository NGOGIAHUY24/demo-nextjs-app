"use client"
import { useFormik } from "formik"
import * as Yup from "yup"
import React from "react"
import { ButtonStyled, InputStyled } from "@/components/styled"


export default function RegisEmail({handleSubmit}:{handleSubmit: () => void}) {
    const formik = useFormik({
        initialValues: {
            email: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Email is required")
                .matches(/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/, "Invalid email format")
        }),
        onSubmit: async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 4000))
            handleSubmit()
            alert(JSON.stringify(values))
        }
    })

    return (
        // <div className="flex-col justify-center mt-50">

        //     <div
        //         className="flex flex-col gap-0
        //             w-125 h-131 max-w-4xs
        //            bg-gray-400 rounded-2xl"
        //     >
        //         <h1 className="font-bold mt-6 ml-6 mb-2 text-xl">Register Account (Step 1)</h1>

        //         <div className="w-110 mx-auto">
        //             <InputStyled
        //                 className="my-3"
        //                 variant="bordered"
        //                 label="Email"
        //                 value={formik.values.email}
        //                 onValueChange={(value) => formik.setFieldValue("email", value)}
        //                 isInvalid={!!(formik.touched.email && formik.errors.email)}
        //                 errorMessage={formik.errors.email}
        //                 onBlur={() => {
        //                     formik.setFieldTouched("email")
        //                 }}
        //             />
        //         </div>

        //         <ButtonStyled
        //             className="w-110 h-10 mx-auto mt-0"
        //             isLoading={formik.isSubmitting}
        //             color="primary"
        //             isDisabled={!formik.isValid}
        //             onPress={() => formik.submitForm()}
        //         >
        //             Submit
        //         </ButtonStyled>
        //     </div>
        // </div>

        <div>
            <h1 className="font-bold mt-6 ml-6 mb-2 text-xl">Register Account (Step 1)</h1>

            <div className="w-110 mx-auto">
                <InputStyled
                    className="my-3"
                    variant="bordered"
                    label="Email"
                    value={formik.values.email}
                    onValueChange={(value) => formik.setFieldValue("email", value)}
                    isInvalid={!!(formik.touched.email && formik.errors.email)}
                    errorMessage={formik.errors.email}
                    onBlur={() => {
                        formik.setFieldTouched("email")
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
                Submit
            </ButtonStyled>
        </div>
    )
}

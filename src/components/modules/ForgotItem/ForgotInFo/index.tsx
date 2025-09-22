"use client"
import { useFormik } from "formik"
import * as Yup from "yup"
import { ArrowLeftIcon } from "@phosphor-icons/react"
import React from "react"
import { ButtonStyled, InputStyled } from "@/components/styled"
import { Icon } from "@iconify/react"
import { useEmailStore } from "@/store/useEmailStore"

interface RegisInfoProps {
    handleBack: () => void
}

function maskEmail(email: string) {
    const [username, domain] = email.split("@")
    if (username.length <= 2) {
        return username[0] + "***@" + domain
    }
    return username.slice(0, 2) + "***@" + domain
}

export default function ForgotInFo({ handleBack }: RegisInfoProps) {
    // const [isShowPassword, setIsShowPassword] = useState(false)
    // const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
    const [isVisible, setIsVisible] = React.useState(false)
    const toggleVisibility = () => setIsVisible(!isVisible)
    const [isConfirmVisible, setIsConfirmVisible] = React.useState(false)
    const toggleConFirmVisibility = () => setIsConfirmVisible(!isConfirmVisible)
    const email = useEmailStore((state) => state.email)
    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .required("Password is required")
                .min(6, "Password must be at least 6 characters")
                .matches(
                    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/,
                    "Password must contain 1 uppercase, 1 number, 1 special char"
                ),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password")], "Passwords must match")
                .required("Please confirm your password")
        }),
        onSubmit: async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 4000))
            alert(JSON.stringify(values))
            // handleNext()
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col">
            {/* Title */}
            <div className="mx-12 mt-2 mb-2">
                <h1 className="font-bold text-xl">Forgot Account (Step 3)</h1>
            </div>

            {/* Input InFo */}
            <div className="w-110 mx-auto">
                <div className="w-110 mx-auto">
                    <InputStyled
                        isDisabled
                        // className="my-3"
                        variant="bordered"
                        label="Email"
                        value={maskEmail(email)}
                    />
                </div>

                <InputStyled
                    className="my-3"
                    variant="bordered"
                    label="New password"
                    type={isVisible ? "text" : "password"}
                    value={formik.values.password}
                    onValueChange={(value) => formik.setFieldValue("password", value)}
                    isInvalid={!!(formik.touched.password && formik.errors.password)}
                    errorMessage={formik.errors.password}
                    onBlur={() => {
                        formik.setFieldTouched("password")
                    }}
                    endContent={
                        <button
                            aria-label="toggle password visibility"
                            className="focus:outline-solid outline-transparent"
                            type="button"
                            onClick={toggleVisibility}
                        >
                            {isVisible ? (
                                <Icon
                                    className="text-default-400 pointer-events-none text-2xl"
                                    icon="solar:eye-closed-linear"
                                />
                            ) : (
                                <Icon
                                    className="text-default-400 pointer-events-none text-2xl"
                                    icon="solar:eye-bold"
                                />
                            )}
                        </button>
                    }
                />

                <InputStyled
                    className="my-3"
                    variant="bordered"
                    label="Confirm new password"
                    type={isConfirmVisible ? "text" : "password"}
                    value={formik.values.confirmPassword}
                    onValueChange={(value) => formik.setFieldValue("confirmPassword", value)}
                    errorMessage={formik.errors.confirmPassword}
                    onBlur={() => {
                        formik.setFieldTouched("confirmPassword")
                    }}
                    isInvalid={!!(formik.touched.confirmPassword && formik.errors.confirmPassword)}
                    endContent={
                        <button
                            aria-label="toggle password visibility"
                            className="focus:outline-solid outline-transparent"
                            type="button"
                            onClick={toggleConFirmVisibility}
                        >
                            {isConfirmVisible ? (
                                <Icon
                                    className="text-default-400 pointer-events-none text-2xl"
                                    icon="solar:eye-closed-linear"
                                />
                            ) : (
                                <Icon
                                    className="text-default-400 pointer-events-none text-2xl"
                                    icon="solar:eye-bold"
                                />
                            )}
                        </button>
                    }
                />
            </div>

            <div className="flex mx-auto gap-4 mt-4">
                <ButtonStyled onPress={handleBack} className="w-5 h-16 mx-auto mt-0">
                    <ArrowLeftIcon />
                </ButtonStyled>

                <ButtonStyled
                    type="submit"
                    isLoading={formik.isSubmitting}
                    color="primary"
                    isDisabled={!formik.isValid}
                    className="w-5 h-16 mx-auto mt-0"
                >
                    Submit
                </ButtonStyled>
            </div>
        </form>
    )
}

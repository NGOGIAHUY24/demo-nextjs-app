"use client"
import { Button, Checkbox, Divider, Link } from "@heroui/react"
import React from "react"

// import ButtonGoogle from "../../styled/ButtonGoogle"
import { useFormik } from "formik"
import * as Yup from "yup"
import Logo from "@/components/styled/Logo"
import { ButtonStyled, InputStyled } from "@/components/styled"
import { Icon } from "@iconify/react"

export default function Login() {
    const [isVisible, setIsVisible] = React.useState(false)
    const toggleVisibility = () => setIsVisible(!isVisible)
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            remember: false
            // confirmPassword: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Email is required")
                .matches(/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/, "Invalid email format"),
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
        <div className="flex h-full w-full items-center justify-center">
            <div className="rounded-large flex w-full max-w-sm flex-col gap-4">
                <div className="flex flex-col items-center pb-6">
                    {/* <AcmeIcon size={60} /> */}
                    <Logo />
                    <p className="text-xl font-medium">Welcome Back</p>
                    <p className="text-small text-default-500">
                        Log in to your account to continue
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <InputStyled
                        // className="my-3"
                        variant="bordered"
                        label="Email"
                        value={formik.values.email}
                        onValueChange={(value) => formik.setFieldValue("email", value)}
                        isInvalid={!!(formik.touched.email && formik.errors.email)}
                        errorMessage={formik.errors.email}
                        onBlur={() => {
                            formik.setFieldTouched("email")
                        }}
                        onClear={() => console.log("input cleared")}
                    />
                    <InputStyled
                        variant="bordered"
                        label="Password"
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
                </div>

                <div className="flex w-full items-center justify-between px-1 py-2">
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
                        <Link className="text-default-500" href="/forgot" size="sm">
                            Forgot Password?
                        </Link>
                    </div>
                </div>

                <ButtonStyled
                    className="w-full"
                    type="submit"
                    isLoading={formik.isSubmitting}
                    color="primary"
                    isDisabled={!formik.isValid}
                    onPress={() => formik.submitForm()}
                >
                    Login
                </ButtonStyled>

                <div className="flex items-center gap-4 py-2">
                    <Divider className="flex-1" />
                    <p className="text-tiny text-default-500 shrink-0">OR</p>
                    <Divider className="flex-1" />
                </div>
                <div className="flex flex-col gap-2">
                    <Button
                        startContent={<Icon icon="flat-color-icons:google" width={24} />}
                        variant="bordered"
                        onPress={() => (window.location.href = "/api/auth/google")} // Redirect ra Google OAuth
                    >
                        Continue with Google
                    </Button>
                </div>
                <p className="text-small text-center">
                    Need to create an account?&nbsp;
                    <Link href="/signup" size="sm">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    )
}

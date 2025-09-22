"use client"
import { Button, Checkbox, Input, Link } from "@heroui/react"
import React from "react"

// import ButtonGoogle from "../../styled/ButtonGoogle"
import { useFormik } from "formik"
import * as Yup from "yup"
import Logo from "@/components/styled/Logo"
import { ButtonStyled } from "@/components/styled"
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/styled/IconEye"

export default function Login() {
    // const [isShowPassword, setIsShowPassword] = useState(false)
    const [isVisible, setIsVisible] = React.useState(false)

    const toggleVisibility = () => setIsVisible(!isVisible)
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
                    rounded-2xl"
            >
                <div className="flex flex-col items-center pb-6">
                    {/* <AcmeIcon size={60} /> */}
                    <Logo />
                    <p className="text-xl font-medium">Welcome Back</p>
                    <p className="text-small text-default-500">
                        Log in to your account to continue
                    </p>
                </div>
                {/* className="w-110 mx-auto "  */}
                <div className="flex flex-col gap-3">
                    <Input
                        isRequired
                        variant="bordered"
                        isClearable
                        defaultValue="junior@heroui.com"
                        // className="my-4"
                        label="Username"
                        value={formik.values.username}
                        onValueChange={(value) => formik.setFieldValue("username", value)}
                        isInvalid={!!(formik.touched.username && formik.errors.username)}
                        errorMessage={formik.errors.username}
                        onBlur={() => {
                            formik.setFieldTouched("username")
                        }}
                        onClear={() => console.log("input cleared")}
                    />
                    <Input
                        isRequired
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
                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                )}
                            </button>
                        }
                    />
                </div>
                <ButtonStyled
                    className="w-110 h-10 mx-auto mt-0"
                    isLoading={formik.isSubmitting}
                    color="primary"
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

// "use client"

// import React from "react"
// import { Button, Input, Checkbox, Link, Form, Divider } from "@heroui/react"
// import { Icon } from "@iconify/react"
// import { AcmeIcon } from "@/components/modules/LoginItem/acmets"

// export default function Component() {
//     const [isVisible, setIsVisible] = React.useState(false)

//     const toggleVisibility = () => setIsVisible(!isVisible)

//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault()
//         console.log("handleSubmit")
//     }

//     return (
//         <div className="flex h-full w-full items-center justify-center bg-secondary">
//             <div className="rounded-large flex w-full max-w-sm flex-col gap-4">
//                 <div className="flex flex-col items-center pb-6">
//                     <AcmeIcon size={60} />
//                     <p className="text-xl font-medium">Welcome Back</p>
//                     <p className="text-small text-default-500">
//                         Log in to your account to continue
//                     </p>
//                 </div>
//                 <Form
//                     className="flex flex-col gap-3"
//                     validationBehavior="native"
//                     onSubmit={handleSubmit}
//                 >
//                     <Input
//                         isRequired
//                         label="Email Address"
//                         name="email"
//                         placeholder="Enter your email"
//                         type="email"
//                         variant="bordered"
//                     />
//                     <Input
//                         isRequired
//                         endContent={
//                             <button type="button" onClick={toggleVisibility}>
//                                 {isVisible ? (
//                                     <Icon
//                                         className="text-default-400 pointer-events-none text-2xl"
//                                         icon="solar:eye-closed-linear"
//                                     />
//                                 ) : (
//                                     <Icon
//                                         className="text-default-400 pointer-events-none text-2xl"
//                                         icon="solar:eye-bold"
//                                     />
//                                 )}
//                             </button>
//                         }
//                         label="Password"
//                         name="password"
//                         placeholder="Enter your password"
//                         type={isVisible ? "text" : "password"}
//                         variant="bordered"
//                     />
//                     <div className="flex w-full items-center justify-between px-1 py-2">
//                         <Checkbox name="remember" size="sm">
//                             Remember me
//                         </Checkbox>
//                         <Link className="text-default-500" href="#" size="sm">
//                             Forgot password?
//                         </Link>
//                     </div>
//                     <Button className="w-full" color="primary" type="submit">
//                         Sign In
//                     </Button>
//                 </Form>
//                 <div className="flex items-center gap-4 py-2">
//                     <Divider className="flex-1" />
//                     <p className="text-tiny text-default-500 shrink-0">OR</p>
//                     <Divider className="flex-1" />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                     <Button
//                         startContent={<Icon icon="flat-color-icons:google" width={24} />}
//                         variant="bordered"
//                     >
//                         Continue with Google
//                     </Button>
//                     {/* <Button
//                         startContent={
//                             <Icon className="text-default-500" icon="fe:github" width={24} />
//                         }
//                         variant="bordered"
//                     >
//                         Continue with Github
//                     </Button> */}
//                 </div>
//                 <p className="text-small text-center">
//                     Need to create an account?&nbsp;
//                     <Link href="#" size="sm">
//                         Sign Up
//                     </Link>
//                 </p>
//             </div>
//         </div>
//     )
// }

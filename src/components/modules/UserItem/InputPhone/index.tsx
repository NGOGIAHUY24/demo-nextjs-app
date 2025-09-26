import { InputStyled } from "@/components/styled"
import { form } from "@heroui/react"
import { useFormik } from "formik"
import * as Yub from "yup"
export function InputPhone() {

    const formik = useFormik({
        initialValues: {
            phone:""
        },
        validationSchema: Yub.object({
            phone: Yub.string()
            .required("Phone is required")
            .matches(/^(0[0-9]{9})$/, "Phone must be 10 digits and start with 0")
        }),
        onSubmit:  (values) => {
            alert(JSON.stringify(values))
        }
    })

    return(

        <form>
            <InputStyled
                className="w-75"
                variant="bordered"
                label="Phone number"
                maxLength={10}
                pattern="[0-9]*"
                onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "")
                }}
                value={formik.values.phone}
                onValueChange={(value) => formik.setFieldValue("phone", value)}
                isInvalid={!!(formik.touched.phone && formik.errors.phone)}
                errorMessage={formik.errors.phone}
                onBlur={() => {
                    formik.setFieldTouched("phone")
                }}
            />
        </form>
    )
}
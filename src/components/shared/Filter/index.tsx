"use client"
import React from "react"
import { Formik, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { CalendarDateTime, now, getLocalTimeZone, fromDate } from "@internationalized/date"
import DateTimeStyled from "@/components/styled/DateTimeStyled"
import LocalFilter from "@/components/modules/SelfDriverItem/LocalFilter"
import { ButtonStyled } from "@/components/styled"
import CardList from "@/components/modules/HomeItem/CardList"

const MIN_HOUR = 7
const MAX_HOUR = 17

// 👉 validation schema
const bookingSchema = Yup.object().shape({
    local: Yup.string().required("Vui lòng chọn địa điểm nhận xe"),
    start: Yup.mixed<CalendarDateTime>()
        .required("Vui lòng chọn ngày giờ nhận xe")
        .test("is-valid-start", "Ngày nhận xe không hợp lệ", function (value) {
            if (!value) return false
            const today = now(getLocalTimeZone())
            // phải >= hiện tại (không cho chọn quá khứ)
            if (value.compare(today) < 0) return false
            // giờ hợp lệ 7h - 17h
            if (value.hour < MIN_HOUR || value.hour >= MAX_HOUR) return false
            return true
        }),
    end: Yup.mixed<CalendarDateTime>()
        .required("Vui lòng chọn ngày giờ trả xe")
        .test("is-after-start", "Ngày trả xe phải sau ngày nhận xe", function (value) {
            const { start } = this.parent
            if (!value || !start) return false
            return value.compare(start) > 0
        })
        .test("is-valid-end", "Ngày trả xe phải trong khoảng 7h-17h", function (value) {
            if (!value) return false
            if (value.hour < MIN_HOUR || value.hour >= MAX_HOUR) return false
            return true
        })
})

export default function FilterBar() {
    // Lấy giờ hiện tại
    const zonedNow = fromDate(new Date(), getLocalTimeZone())
    const nowTime = new CalendarDateTime(
        zonedNow.year,
        zonedNow.month,
        zonedNow.day,
        zonedNow.hour,
        zonedNow.minute,
        zonedNow.second
    )

    // Nếu đã qua 17h, thì start mặc định ngày mai lúc 7h
    const initialStart =
        nowTime.hour >= MAX_HOUR
            ? nowTime.add({ days: 1 }).set({ hour: MIN_HOUR, minute: 0, second: 0 })
            : nowTime

    const initialValues = {
        local: "",
        start: initialStart,
        end: initialStart.add({ hours: 1 })
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={bookingSchema}
                onSubmit={(values) => {
                    console.log("Booking values:", values)
                    alert(
                        `Booking: stationId:: ${
                            values.local
                        }, Time from ${values.start.toString()} to ${values.end.toString()}`
                    )
                }}
            >
                {({ values, setFieldValue }) => (
                    <Form className="flex gap-4 p-4 pb-10 justify-center items-center border border-gray-300 rounded-lg shadow-md max-w-[1500] ">
                        {/* ĐỊA ĐIỂM */}
                        <div className="flex flex-col h-12">
                            {/* <label className="font-semibold">Địa điểm nhận xe</label> */}
                            <LocalFilter
                                value={values.local}
                                onChange={(val) => setFieldValue("local", val)}
                            />
                            <ErrorMessage
                                name="local"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        {/* START */}
                        <div className="h-12">
                            {/* <label className="font-semibold">Ngày giờ nhận xe</label> */}
                            <DateTimeStyled
                                label="Start Date & Time"
                                value={values.start}
                                onChange={(val) => setFieldValue("start", val)}
                            />
                            <ErrorMessage
                                name="start"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        {/* END */}
                        <div className="h-12">
                            {/* <label className="font-semibold">Ngày giờ trả xe</label> */}
                            <DateTimeStyled
                                label="End Date & Time"
                                value={values.end}
                                onChange={(val) => setFieldValue("end", val)}
                            />
                            <ErrorMessage
                                name="end"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        <div className="flex justify-center items-center mt-2">
                            <ButtonStyled type="submit" color="primary" className="w-40 h-13.5">
                                Tìm kiếm xe
                            </ButtonStyled>
                        </div>
                    </Form>
                )}
            </Formik>

            <CardList />
        </div>
    )
}

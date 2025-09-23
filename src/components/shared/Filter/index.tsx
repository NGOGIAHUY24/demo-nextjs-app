// import { ButtonStyled } from "@/components/styled"
// import React, { useState } from "react"
// import LocalFilter from "@/components/modules/FilterItem/LocalFilter"
// import { getLocalTimeZone, today } from "@internationalized/date"
// import DateStyled from "@/components/styled/DateStyled"
// import TimeStyled from "@/components/styled/TimeStyled"

// export default function FilterBar() {
//     const [filters, setFilters] = useState({
//         local: null as string | null,
//         DateStart: null as string | null,
//         TimeStart: null as string | null,
//         DateEnd: null as string | null,
//         TimeEnd: null as string | null
//     })

//     const updateFilter = (key: string, value: string | null) => {
//         setFilters((prev) => ({ ...prev, [key]: value }))
//     }

//     const handleSubmit = () => {
//         console.log("Data will send BE:", filters)

//         // fetch("/api/filter", {
//         //     method: "POST",
//         //     headers: { "Content-Type": "application/json" },
//         //     body: JSON.stringify(filters)
//         // })
//     }
//     return (
//         <div className="flex flex-col items-center">
//             <div className="flex justify-around items-center space-x-6 w-full gap-3">
//                 {/* Local */}
//                 <div>
//                     <LocalFilter
//                         value={filters.local}
//                         onChange={(val) => updateFilter("data", val)}
//                     />
//                 </div>
//                 {/* Start DateTime */}
//                 <div className="flex gap-1">
//                     <div className="">
//                         <DateStyled
//                             defaultValue={today(getLocalTimeZone()).subtract({ days: 1 })}
//                             label="Date and time"
//                             minValue={today(getLocalTimeZone())}
//                             value={filters.DateStart}
//                         />
//                     </div>
//                     <div>
//                         <TimeStyled
//                             className="border-2 rounded-[14] z-1 border-gray-200 hover:border-gray-400
//                                                 "
//                         />
//                     </div>
//                 </div>

//                 {/* End DateTime */}
//                 <div className="flex gap-1">
//                     <div className="">
//                         <DateStyled
//                             defaultValue={today(getLocalTimeZone()).subtract({ days: 1 })}
//                             label="Date and time"
//                             minValue={today(getLocalTimeZone())}
//                         />
//                     </div>
//                     <div>
//                         <TimeStyled className=" border-2 rounded-[14] z-1 border-gray-200 hover:border-gray-400" />
//                     </div>
//                 </div>

//                 {/* Submit h-14 */}
//                 <div>
//                     <ButtonStyled className="">Submit</ButtonStyled>
//                 </div>
//             </div>
//             <div className="mb-10 text-2xl font-bold">Danh sách Xe</div>
//         </div>
//     )
// }
"use client"

import React from "react"
import { Formik, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { DateInput, TimeInput } from "@heroui/react"
import { CalendarDate, Time, getLocalTimeZone, today } from "@internationalized/date"

// ⏰ Giới hạn giờ thuê
const MIN_HOUR = 7
const MAX_HOUR = 17

// Lấy ngày hôm nay + ngày mai
const now = new Date()
const tz = getLocalTimeZone()
const todayDate = today(tz)
const tomorrowDate = todayDate.add({ days: 1 })

// Nếu đã quá 22h thì ngày bắt đầu hợp lệ là ngày mai
const minStartDate = now.getHours() >= MAX_HOUR ? tomorrowDate : todayDate

const validationSchema = Yup.object().shape({
    startDate: Yup.mixed()
        .required("Start date is required")
        .test("not-past", "Start date must be valid", (val) => {
            if (!(val instanceof CalendarDate)) return false
            return val.compare(minStartDate) >= 0
        }),
    startTime: Yup.mixed()
        .required("Start time is required")
        .test("in-range", "Start time must be between 07:00 and 22:00", (val) => {
            if (!(val instanceof Time)) return false
            return val.hour >= MIN_HOUR && val.hour <= MAX_HOUR
        }),
    endDate: Yup.mixed()
        .required("End date is required")
        .test("after-start", "End date must be after start date/time", function (val) {
            const { startDate, startTime, endTime } = this.parent
            if (!(val instanceof CalendarDate)) return false
            if (!(startDate instanceof CalendarDate)) return true

            // Nếu cùng ngày thì check thêm giờ
            if (val.compare(startDate) === 0) {
                if (!(endTime instanceof Time) || !(startTime instanceof Time)) return false
                return (
                    endTime.hour > startTime.hour ||
                    (endTime.hour === startTime.hour && endTime.minute > startTime.minute)
                )
            }
            return val.compare(startDate) >= 0
        }),
    endTime: Yup.mixed().required("End time is required")
})

export default function BookingForm() {
    return (
        <Formik
            initialValues={{
                startDate: minStartDate,
                startTime: new Time(Math.max(now.getHours(), MIN_HOUR), 0), // nếu đã qua 7h thì bắt đầu từ giờ hiện tại
                endDate: minStartDate,
                endTime: new Time(Math.max(now.getHours() + 1, MIN_HOUR + 1), 0)
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log("✅ Booking:", values)
                alert("Booking success ✅")
            }}
        >
            {({ values, setFieldValue }) => (
                <Form className="space-y-6 p-6 max-w-lg mx-auto">
                    {/* Start Date & Time */}
                    <div className="flex gap-3">
                        <div className="flex-1">
                            <DateInput
                                label="Start Date"
                                value={values.startDate}
                                onChange={(val) => setFieldValue("startDate", val)}
                                minValue={minStartDate}
                            />
                            <ErrorMessage
                                name="startDate"
                                component="p"
                                className="text-red-500 text-sm"
                            />
                        </div>
                        <div className="flex-1">
                            <TimeInput
                                label="Start Time"
                                value={values.startTime}
                                onChange={(val) => setFieldValue("startTime", val)}
                            />
                            <ErrorMessage
                                name="startTime"
                                component="p"
                                className="text-red-500 text-sm"
                            />
                        </div>
                    </div>

                    {/* End Date & Time */}
                    <div className="flex gap-3">
                        <div className="flex-1">
                            <DateInput
                                label="End Date"
                                value={values.endDate}
                                onChange={(val) => setFieldValue("endDate", val)}
                                minValue={values.startDate}
                            />
                            <ErrorMessage
                                name="endDate"
                                component="p"
                                className="text-red-500 text-sm"
                            />
                        </div>
                        <div className="flex-1">
                            <TimeInput
                                label="End Time"
                                value={values.endTime}
                                onChange={(val) => setFieldValue("endTime", val)}
                            />
                            <ErrorMessage
                                name="endTime"
                                component="p"
                                className="text-red-500 text-sm"
                            />
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    )
}

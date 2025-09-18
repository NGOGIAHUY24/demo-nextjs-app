
"use client"
import RegisEmail from "@/components/modules/Regis/RegisEmail"
import RegisInFo from "@/components/modules/Regis/RegisInFo"
import RegisOTP from "@/components/modules/Regis/RegisOTP"
import RowStep from "@/components/modules/Regis/RowStep"
import { cn } from "@heroui/react"
import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

function SignUp() {
    const [step, setStep] = useState(0)

    return (
        <div className="flex justify-center mt-25">
            <div
                className={cn(
                    "flex flex-col gap-2 bg-gray-400 rounded-2xl transition-all duration-300 overflow-hidden",
                    step === 0 && "w-125 h-131",
                    step === 1 && "w-125 h-131",
                    step === 2 && "w-125 h-160"
                )}
            >
                <div className="ml-10 mt-6 overflow-hidden transition-all duration-300">
                    <RowStep n={step} />
                </div>

                {/* AnimatePresence để quản lý mount/unmount */}
                <AnimatePresence mode="wait">
                    {step === 0 && (
                        <motion.div
                            key="email"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <RegisEmail handleSubmit={() => setStep(1)} />
                        </motion.div>
                    )}

                    {step === 1 && (
                        <motion.div
                            key="otp"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <RegisOTP handleBack={() => setStep(0)} handleNext={() => setStep(2)} />
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="info"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <RegisInFo handleBack={() => setStep(1)} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default SignUp

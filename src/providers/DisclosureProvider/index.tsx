import React, { type PropsWithChildren } from "react"
import { useCreatePostDisclosureCore } from "../../hooks/singleton/disclosures/useCreatePostDisclosure"
import { DisclosureContext } from "./DisclosureContext"
import { useRegisDiscloresureCore } from "@/hooks/singleton/disclosures/useRegisDiscloresure"
import { useLoginDiscloresureCore } from "@/hooks/singleton/disclosures/useLoginDiscloresure"

export const DisclosureProvider = ({ children }: PropsWithChildren) => {
    const useCreatePostDisclosure = useCreatePostDisclosureCore()
    const useLoginDiscloresure = useLoginDiscloresureCore()
    const useRegisDiscloresure = useRegisDiscloresureCore()

    return (
        <DisclosureContext.Provider
            value={{
                useCreatePostDisclosure,
                useLoginDiscloresure,
                useRegisDiscloresure
            }}
        >
            {children}
        </DisclosureContext.Provider>
    )
}

"use client"
import { useCreatePostDisclosureCore } from "@/hooks"
import { useLoginDiscloresureCore } from "@/hooks/singleton/disclosures/useLoginDiscloresure"
import { useRegisDiscloresureCore } from "@/hooks/singleton/disclosures/useRegisDiscloresure"
import { createContext } from "react"

export interface DisclosureContextType {
    useCreatePostDisclosure: ReturnType<typeof useCreatePostDisclosureCore>
    useLoginDiscloresure: ReturnType<typeof useLoginDiscloresureCore>
    useRegisDiscloresure: ReturnType<typeof useRegisDiscloresureCore>
}

export const DisclosureContext = createContext<DisclosureContextType | null>(null)

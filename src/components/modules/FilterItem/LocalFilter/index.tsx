import { Autocomplete, AutocompleteItem } from "@heroui/react"
import React from "react"
import { MapPinAreaIcon } from "@phosphor-icons/react"
import { locals } from "@/data/local"

type LocalFilterProps = {
    value: string | null
    onChange: (value: string | null) => void
}

export default function LocalFilter({ value, onChange }: LocalFilterProps) {
    return (
        <Autocomplete
            // defaultItems={locals}
            items={locals}
            label="Local"
            placeholder="Search"
            startContent={<MapPinAreaIcon className="text-xl" />}
            variant="bordered"
            className="max-w-55 h-11 mr-0"
            selectedKey={value ?? undefined}
            onSelectionChange={(key) => {
                onChange(key as string)
                console.log("Selected:", key)
            }}
        >
            {(item: (typeof locals)[0]) => (
                <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>
            )}
        </Autocomplete>
    )
}

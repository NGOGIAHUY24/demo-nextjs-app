import { Autocomplete, AutocompleteItem } from "@heroui/react"
import React from "react"
// import { locals } from "./localStype"
import { MapPinAreaIcon } from "@phosphor-icons/react"
import { locals } from "@/data/local"

export default function Local() {
    return (
        <Autocomplete
            // defaultItems={locals}
            items={locals}
            label="Local"
            placeholder="Search"
            startContent={<MapPinAreaIcon className="text-xl fill" />}
            variant="bordered"
            // {...props}
            // className={cn("font-medium text-base", props.className)}
            className="max-w-55 h-11 mr-0"
        >
            {/* {(item) => <AutocompleteItem key={item.key}> {item.label} </AutocompleteItem>}
             */}
            {(item: (typeof locals)[0]) => (
                <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>
            )}
        </Autocomplete>
    )
}

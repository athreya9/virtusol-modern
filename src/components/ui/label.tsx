import * as React from "react"
import { cn } from "@/lib/utils"
// import * as LabelPrimitive from "@radix-ui/react-label"
// Note: Skipping Radix dependency for speed unless strictly needed for accessibility compliance in this prototype. 
// Using standard label for now, can upgrade to Radix later.

const Label = React.forwardRef<
    HTMLLabelElement,
    React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
    <label
        ref={ref}
        className={cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary",
            className
        )}
        {...props}
    />
))
Label.displayName = "Label"

export { Label }

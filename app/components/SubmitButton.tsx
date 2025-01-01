"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

interface appProps {
    text: string;
}

export function SubmitButton({ text }: appProps) {
    const { pending } = useFormStatus()
    return <>
        {pending ? (
            <Button disabled className="w-full">
                <Loader2 className="size-4 mr-2 animate-spin"/> Please Wait...
            </Button>
        ) : (
            <Button type="submit" className="w-full">
                {text}
            </Button>
        )}
    </>
}


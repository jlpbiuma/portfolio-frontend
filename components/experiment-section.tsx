import { Suspense } from "react";
import type { ExperimentSectionProps, ExperimentItem } from "@/lib/types/types";
import React from "react";

export default function ExperimentSection({
    title,
    items,
}: ExperimentSectionProps) {
    return (
        <section className="py-4">
            <h2 className="text-3xl font-bold mb-8">{title}</h2>
            <div className="space-y-6">
                {items.map((item, index) => (
                    <ExperimentItem key={index} {...item} />
                ))}
            </div>
        </section>
    )
}

const ExperimentItem = ({
    title,
    description,
    component: LazyComponent
}: ExperimentItem) => {
    return (
        <div className="p-4 border rounded-lg">
            <h1 className="text-xl font-bold mb-2">{title}</h1>
            <p className="text-gray-600 mb-4">{description}</p>

            <Suspense fallback={<div>Loading...</div>}>
                {React.isValidElement(LazyComponent) ? LazyComponent : <LazyComponent />}
            </Suspense>
        </div>
    )
}
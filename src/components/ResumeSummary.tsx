import { stats } from "@/app/content/experience";

export default function ResumeSummary() {
    return (
        <div className="pt-8 sm:pt-16 grid grid-cols-2 md:grid-cols-4 gap-2.5">
            {stats.map((item, i) => {
                return (
                    <div key={i} className="bg-background-secondary border border-border-color rounded-[18px] p-6 flex flex-col gap-y-3">
                        <span className="text-2xl font-medium">{item.title}</span>

                        <p className="text-xs sm:text-sm text-grey uppercase max-w-[90%] font-mono">{item.description}</p>
                    </div>
                )
            })}
        </div>
    )
}
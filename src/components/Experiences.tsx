import { experiences, stacks } from "@/app/content/experience";

export default function Experiences() {
    return (
        <div className="pt-8 sm:pt-16">
            <div className="border border-border-color rounded-[20px] py-4 bg-background-secondary">
                <h2 className="text-grey text-sm sm:text-base uppercase mb-4 px-4 sm:px-6 font-mono">Experience</h2>

                <hr className="border-border-color" />

                {experiences.map(experience => (
                    <div
                        key={experience.company}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-4 sm:px-6 py-4 border-b border-border-color"
                    >
                        <div className="text-sm sm:text-base">
                            <span>{experience.company}</span>

                            <span className="text-grey"> — {experience.role}</span>
                        </div>

                        <span className="text-xs sm:text-sm text-grey font-mono">
                            {experience.from} — {experience.to}
                        </span>
                    </div>
                ))}

                <div className="flex flex-col sm:flex-row gap-x-20 gap-y-3.5 px-4 sm:px-6 pt-4 pb-2">
                    <span className="text-xs sm:text-sm text-[#6E7681] uppercase font-mono">Stack</span>

                    <div className="flex text-grey flex-wrap">
                        {stacks.join(', ')}
                    </div>
                </div>
            </div>
        </div>
    )
}
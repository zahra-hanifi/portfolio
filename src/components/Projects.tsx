import { projects } from "@/app/content/projects";
import Reveal from "@/components/Reveal";

export default function Projects() {
    return (
        <div className="pt-8 sm:pt-16 flex flex-col gap-y-4">
            <Reveal>
                <h2 className="text-grey text-sm sm:text-base uppercase">Selected work</h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {projects.map((project, i) => {
                    return (
                        <Reveal key={i} delay={i * 120}>
                            <div
                                className="h-full bg-background-secondary border border-border-color rounded-[20px] p-5 sm:p-6 flex flex-col gap-y-5 hover:border-primary transition-all"
                            >
                                <div className="flex items-center justify-between text-xs sm:text-sm">
                                    <span className="text-grey">0{i + 1}</span>

                                    <span className="text-primary uppercase">{project.tag}</span>
                                </div>

                                <h3 className="text-lg sm:text-xl">{project.title}</h3>

                                <p className="text-grey text-sm sm:text-base">{project.summary}</p>

                                <p className="text-xs sm:text-sm">{project.highlight}</p>

                                <div className="flex items-center gap-x-1.5">
                                    {project.stack.map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="py-1 px-2.5 border border-border-color rounded-full text-xs text-grey"
                                            >
                                                {item}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </Reveal>
                    )
                })}
            </div>
        </div>
    )
}
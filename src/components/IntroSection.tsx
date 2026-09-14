import Button from "@/components/Button";

export default function IntroSection() {
    return (
        <div className="pt-8 sm:pt-16 flex flex-col gap-y-6 sm:gap-y-8">
            <h1 className="text-[30px] sm:text-[52px] lg:text-[62px] font-bold leading-9 sm:leading-14">
                Frontends for systems<br />
                where <span className="bg-linear-to-r from-primary-dark to-primary bg-clip-text text-transparent">latency and</span> <br />
                <span className="bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent">uptime</span> are the product. <br />
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-grey md:max-w-[65%] leading-8">
                Six years shipping production web apps — three inside a crypto exchange,
                on WebSocket order books, TradingView charts and the platform-wide
                Design Language System. Vue/Nuxt at depth, React/Next in production.
            </p>

            <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <Button link="mailto:zahrahanifi98@gmail.com" variant="gradient">Get in touch</Button>
                <Button link="/Zahra_Hanifi_Resume.pdf">Résumé</Button>
                <Button link="https://github.com/zahra-hanifi/">GitHub</Button>
                <Button link="https://www.linkedin.com/in/zahra-hanifi-8479951a4/" className="w-full">LinkedIn</Button>
            </div>
        </div>
    )
}
import Button from "@/components/Button";

export default function Contact() {
    return (
        <div className="pt-16 sm:pt-20 flex flex-col gap-y-5.5">
            <h2 className="text-[24px] sm:text-[40px] font-medium leading-9 sm:leading-14">
                Hiring for a product where <br/>
                the frontend <span className="bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent">can&#39;t fail?</span>
            </h2>

            <div className="max-w-77.5 sm:max-w-114 text-base sm:text-lg text-grey leading-8">
                Open to remote frontend roles — especially React/Next.js teams
                on real-time, data-dense products.
            </div>

            <Button
                link="mailto:zahrahanifi98@gmail.com"
                variant="transparent"
                className="text-start w-fit text-base! mt-2.5 border-b border-border-color"
            >
                zahrahanifi98@gmail.com
            </Button>
        </div>
    )
}
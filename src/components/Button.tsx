import * as React from "react";

type Variant = 'gradient' | 'grey' | 'transparent'

type ButtonProps = {
    variant?: Variant,
    link: string,
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const variantClass: Record<Variant, string> = {
    gradient: 'bg-linear-to-r from-secondary to-primary text-background',
    grey: 'border border-border-color bg-background-secondary',
    transparent: 'text-primary p-0!',
}

const defaultClasses: string = 'p-3.5 rounded-full text-xs sm:text-sm cursor-pointer text-center'

export default function Button({variant = 'grey', link, target = '_blank', children, className = '', ...rest}: ButtonProps) {
    return (
        <a
            href={link}
            target={target}
            className={`${defaultClasses} ${variantClass[variant]} ${className}`}
            {...rest}
        >
            {children}
        </a>
    )
}
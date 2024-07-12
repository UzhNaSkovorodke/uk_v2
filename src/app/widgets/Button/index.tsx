'use client'
import {Button as OldButton} from 'stone-kit/dist/components/Button'
import {useClientWidth} from "stone-kit/dist/shared/useClientWidth";
import {default as React} from "react";
import {ComponentProps} from "stone-kit/dist/components/Button/ui/Button.types";


const Button = ({children, ...props}: React.PropsWithChildren<ComponentProps>) => {
    const {isMobile} = useClientWidth()

    return <OldButton size={isMobile ? 'small' : 'medium'} {...props}>{children}</OldButton>
}
export default Button

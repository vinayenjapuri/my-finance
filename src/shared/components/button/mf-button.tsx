import React, { useEffect, useState } from "react";
import './mf-button.scss';

export interface MfButtonProps {
    children: React.ReactNode;
    type?: 'default' | 'primary' | 'destroy';
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

export const MfButton = (props: MfButtonProps): React.ReactElement => {
    const { type, children, ...rest } = props;
    const [className, setClassName] = useState<string>('mf-default');
    useEffect(() => {
        switch (type) {
            case "primary":
                setClassName('mf-primary');
                break;
            case "destroy":
                setClassName('mf-destroy');
                break;
        }
    }, []);
    return <button {...rest} className={`mf-button ${className}`}>{props.children}</button>
}
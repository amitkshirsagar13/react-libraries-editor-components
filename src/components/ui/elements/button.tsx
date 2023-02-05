import React from 'react';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
    isActive: boolean;
    deactiveColor?: string;
}

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
    const { children, backgroundColor, color, style, isActive, deactiveColor } = props;
    let _style: React.CSSProperties = style || {};

    // Override Default
    if (backgroundColor) _style.backgroundColor = backgroundColor;
    if (color) _style.color = color;

    // isActive
    if (!isActive) _style.backgroundColor = deactiveColor ? deactiveColor : 'gray';

    return (
        <button style={{ ..._style }} onClick={props.onClick} disabled={!isActive}>
            {children}
        </button>
    );
};

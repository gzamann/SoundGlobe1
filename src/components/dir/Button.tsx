import React from "react";

type Props = {
    text: string;
    icon?: string;
    variantType?: 'solid' | 'outline';
}

const Button: React.FC<Props> = ({ text, icon, variantType = 'solid' }) => {

    const buttonStyles = {
        ...{ borderRadius: '69.94px', background: '#f5f5f5', color: '#000', fontWeight: '600' },
        ...(variantType === 'outline' ? { background: 'transparent', borderColor: '#f5f5f5', color: '#f5f5f5' } : {})
    }

    return <>
        <button style={buttonStyles}>
            <div style={{ display: "flex", alignItems: 'center' }}>
                {icon && <><img src={icon} height={22} />
                    <div style={{ padding: '0 0.3em' }} /></>}
                {text}
            </div>
        </button>
    </>
}

export default Button;
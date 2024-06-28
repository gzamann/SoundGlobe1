// @ts-nocheck
import React from "react";
import { Audio } from "react-loader-spinner";

type Props = {
    fullscreen?: Boolean;
}

const Loader: React.FC<Props> = ({ fullscreen }) => {
    return <div style={{ display: "flex", height: "100%", width: '100vw', justifyContent: 'center' }}>
        <Audio
            height="80"
            width="80"
            radius="9"
            color="#1ED760"
            ariaLabel="three-dots-loading"
        />
    </div>
}

export default Loader;
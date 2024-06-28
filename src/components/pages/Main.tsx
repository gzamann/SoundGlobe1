import React from "react";
import Button from "../dir/Button";
import { SPOTIFY_AUTH_LINK } from "../appConstants";

const Main: React.FC = () => {
    return <>
        <div className="main-screen-container" style={{
            width: '100vw',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, max-content))',
            columnGap: '5em',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1em',
        }}>
            <div className="main-text">
                <div style={{ maxWidth: '500px' }}>
                    <div>
                        <h1 style={{
                            textAlign: 'center',
                            fontSize: '43.68px',
                            fontWeight: '600',
                            lineHeight: '51.23px',
                        }}>Which country are your fav artists from?</h1>
                        <p style={{
                            textAlign: 'center', fontWeight: '500',
                            fontSize: '28.08px',
                            lineHeight: '32.94px',
                        }}>Sync your Spotify and get a map of where the artists you’re into are from</p>
                    </div>
                    <div style={{ margin: '24px 0' }}>
                        <a href={SPOTIFY_AUTH_LINK}>
                            <Button text="Connect Spotify" icon="/public/spotify-logo.png" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="main-globe">
                <img src="public/globe.png" height='400px' />
            </div>
        </div >
    </>
}

export default Main;
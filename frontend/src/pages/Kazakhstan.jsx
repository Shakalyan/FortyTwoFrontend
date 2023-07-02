import logo from '../img/kazakh.svg';
import '../styles/Kazakhstan.css'

import useAudio from "../hooks/useAudio";
import music from "../audio/music.mp3"

function Kazakhstan() {
    const [playing, toggle] = useAudio(music);


    return (
        <div>
            <header className={playing? "kz-wrapper kz-wrapper-active" : "kz-wrapper"}>
                <div
                    className={playing? "div-kz-logo div-kz-logo-active" : "div-kz-logo"}
                    onClick={toggle}
                >
                    <img
                        src={logo}
                        className={playing? "kz-logo kz-logo-active" : "kz-logo"}
                        alt="logo"
                        style={{padding: 100}}
                    />
                </div>

                <div
                    className={playing? "kz-text-active" : "kz-text"}
                >

                    КАЗАХСТАН ОБЪЯВЛЯЕТ ВАМ ЯДЕРНУЮ БОМБАРДИРОВКУ
                </div>



                {playing?
                    <>
                        <img
                            src={"https://i.gifer.com/7vCG.gif"}
                            height={250}
                            style={{
                                top: "6vh",
                                left: "10vw",
                                position: "absolute",
                                transform: "rotate(180deg)",
                                zIndex: 0
                            }}
                            alt
                        />

                        <img
                            src={"https://i.gifer.com/UTF.gif"}
                            height={400}
                            style={{
                                bottom: "24vh",
                                right: "5vw",
                                position: "absolute",
                                zIndex: 0
                            }}
                            alt
                        />
                    </> : null
                }
            </header>
        </div>
    );
}

export default Kazakhstan;

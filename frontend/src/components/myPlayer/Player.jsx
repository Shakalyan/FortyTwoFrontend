import music from "../../audio/music.mp3"
import useAudio from "../../hooks/useAudio";

const Player = ({ url = music }) => {
    const [playing, toggle] = useAudio(url);

    return (
        <div>
            <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
        </div>
    );
};

export default Player;
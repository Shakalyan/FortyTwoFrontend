import React, {useEffect, useState} from 'react';
import music from "../audio/music.mp3";

function AudioPlayer() {

    const [currentTime, setCurrentTime] = useState(localStorage.getItem('audioCurrentTime') ?? 0);
    const [savedTime, setSavedTime] = useState(localStorage.getItem('audioCurrentTime') ?? 0);

    // Обработчик события для обновления текущего времени в состоянии
    const handleTimeUpdate = (event) => {
        setCurrentTime(event.target.currentTime);
    }

    const clearAll = (e) => {
        localStorage.removeItem('audioCurrentTime')
        setCurrentTime(0);
        setSavedTime(0);
    }

    // Загрузка сохраненного значения текущего времени из localStorage при монтировании компонента
    useEffect(() => {
        const savedT = localStorage.getItem('audioCurrentTime');
        if (savedT) {
            setSavedTime(parseInt(savedT));
            setCurrentTime(parseInt(savedT));
            // console.log(parseInt(savedT));
        }
    }, []);

    // Сохранение текущего времени в localStorage при размонтировании компонента
    useEffect(() => {
        return () => {
            localStorage.setItem('audioCurrentTime', currentTime.toString());
        };
    }, [currentTime]);

    function time_convert(num)
    {
        let minutes = Math.floor((num % 3600) / 60);
        if (minutes < 10) minutes = "0" + minutes;
        let seconds = num % 60;
        if (seconds < 10) seconds = "0" + seconds;
        // console.log(num)
        // console.log(minutes + ":" + seconds)

        return minutes + ":" + seconds;
    }

    return (
        <div style={{display: 'none'}}>
            <audio
                onTimeUpdate={handleTimeUpdate}
                onEnded={clearAll}
                autoPlay
                controls
                src={music+`#t=00:${time_convert(savedTime)}`}
            >
                {/*<source src={music} type="audio/mp3" />*/}
                Ваш браузер не поддерживает воспроизведение аудио.
            </audio>
        </div>
    )
}

export default AudioPlayer;
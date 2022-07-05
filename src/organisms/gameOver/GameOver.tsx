import React, {useEffect, useState} from 'react';
import Image from "next/image";
import winners from "/public/winners.svg"
import HeadingH2 from "../../atoms/Heading-H2/HeadingH2";
import Button from "../../molecules/Button/Button";
import styles from './GameOver.module.css'
import ReactConfetti from "react-confetti";

interface GameOverProps {
    correctAnswers: number,
    restart: () => void
}

function GameOver({restart, correctAnswers}: GameOverProps) {
    const useWindowSize = () => {
        const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight});

        useEffect(() => {
            window.addEventListener('resize', resizeHandler);
            return () => {
                window.removeEventListener('resize', resizeHandler);
            };
        });
        const resizeHandler = () => {
            setWindowSize({width: window.innerWidth, height: window.innerHeight});
        };
        return windowSize;
    };

    const {width, height} = useWindowSize();

    return (
        <div className={styles.gameOver}>
            {correctAnswers > 0 && <ReactConfetti width={width} height={height}/>}
            <Image
                src={winners}
                alt="A man and a woman celebrating next to a big Winners' Cup"
            />
            <div className={styles.resultsContainer}>
                <HeadingH2 copy="Results" className="results"/>
                <p className={styles.correctAnswers}>You got <span
                    className={styles.numberCorrect}>{correctAnswers}</span> correct {correctAnswers === 1 ? 'answer' : 'answers'}
                </p>
            </div>
            <Button label="Try again" onClick={restart} className={styles.tryAgain}/>
        </div>
    );
}

export default GameOver;
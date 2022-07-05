import React, {useState} from 'react';
import styles from './CardComponent.module.css'
import GameOver from "../organisms/gameOver/GameOver";
import Questions from "../organisms/questions/Questions";

function CardComponent() {
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [correctAnswers, setCorrectAnswers] = useState<number>(0);

    const tryAgain = () => {
        setGameOver(false);
        setCorrectAnswers(0);
    }

    const lost = () => {
        setGameOver(true);
    }

    const rightAnswer = () => {
        setCorrectAnswers(correctAnswers + 1);
        return correctAnswers
    }

    return (
        <div className={styles.cardComponent}>
            {!gameOver && <div className={styles.questionsContainer}>
                <Questions correctAnswers={correctAnswers} didYouLose={lost} addingRightAnswers={rightAnswer}/>
            </div>
            }
            {gameOver && <GameOver correctAnswers={correctAnswers} restart={tryAgain}/>}
        </div>
    );
}

export default CardComponent;
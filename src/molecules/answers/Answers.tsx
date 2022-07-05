import React, {useState} from 'react';
import Button from "../Button/Button";
import styles from "../../organisms/questions/Questions.module.css";
import {CountryType} from "../../organisms/questions/Questions";

interface AnswersProps {
    options: Array<CountryType>
    alreadyAnswered?: boolean
    rightCountry: number
    settingAnswer: () => void
    setCorrectOrIncorrect?: () => void
}

function Answers({options, alreadyAnswered, rightCountry, settingAnswer, setCorrectOrIncorrect}: AnswersProps) {

    const [clicked, setClicked] = useState<number | undefined>(undefined)

    const ultimateHandle = (event: React.MouseEvent) => {
        if (!alreadyAnswered) {
            setClicked(parseInt(event.currentTarget.getAttribute("value")!));
            if (rightCountry === clicked) {
                setCorrectOrIncorrect ? setCorrectOrIncorrect() : null;
            } else {
                event.currentTarget.classList.add(styles.incorrect)
            }
            settingAnswer()
        }
    }

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']

    return (
        <>
            {options.map((option, index) =>
                <Button optionLetter={alphabet[index]} key={index} label={option.name} value={`${index}`}
                        className={`${!alreadyAnswered ? styles.possibleAnswer : index === rightCountry ? `${styles.correct} ${styles.possibleAnswer}` : styles.possibleAnswer}`}
                        typeIcon={!alreadyAnswered ? null : index === rightCountry ? true : index === clicked ? false : null}
                        optionAnswer={true} onClick={ultimateHandle}/>)}
        </>
    );
}

export default Answers;
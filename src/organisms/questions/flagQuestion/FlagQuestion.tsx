import React, {useEffect, useState} from 'react';
import Button from "../../../molecules/Button/Button";
import HeadingH2 from "../../../atoms/Heading-H2/HeadingH2";
import styles from '../Questions.module.css'
import Answers from "../../../molecules/answers/Answers";
import Image from "next/image";
import {CountryType} from "../Questions";

interface FlagQuestionProps {
    changeQuestion: () => void
    gameOver: () => void
    addingRightAnswers: () => number
    countries: Array<CountryType | null>
}

function FlagQuestion({countries, changeQuestion, gameOver, addingRightAnswers}: FlagQuestionProps) {
    const [isAlreadyAnsweredFlag, setIsAlreadyAnsweredFlag] = useState<boolean>(false);
    const [gotItRightFlag, setGotItRightFlag] = useState<boolean>(false)
    const [rightCountry, setRightCountry] = useState<number | undefined>(undefined)
    const [countriesFlagOptions, setCountriesFlagOptions] = useState<Array<CountryType>>([])

    const settingAnswer = () => {
        !isAlreadyAnsweredFlag ?
            setIsAlreadyAnsweredFlag(true) : null;
    }

    const handleRightFlag = () => {
        changeQuestion();
        addingRightAnswers();
    }

    const settingGotItRight = () => {
        setGotItRightFlag(true)
    }

    const randomCountryIndex = () => Math.floor(Math.random() * 238);

    const randomRightCountryIndex = () => Math.floor(Math.random() * 4);


    const settingCountriesOptionsFlag = () => {
        const auxArrayFlag: Array<CountryType> = [];
        if (countriesFlagOptions.length !== 4) {
            console.log('entre aca bandera')
            for (let i = 0; i < 4; i++) {
                auxArrayFlag.push(countries[randomCountryIndex()] as CountryType)
            }
        }
        if (auxArrayFlag.length === new Set(auxArrayFlag).size) {
            setCountriesFlagOptions(auxArrayFlag);
            setRightCountry(randomRightCountryIndex)
        } else settingCountriesOptionsFlag()
    }


    useEffect(() => {
            //     for (let i = 0; i < 4; i++) {
            //         auxArrayFlag.push(countries[randomCountryIndex()] as CountryType)
            //     }
            //     setCountriesFlagOptions(auxArrayFlag);
            //     setRightCountry(randomRightCountryIndex)
            // }
            settingCountriesOptionsFlag()
        }
        ,
        []
    )

    return (<>
            {countriesFlagOptions.length > 0 && rightCountry !== undefined && countriesFlagOptions[0].name !== undefined && <>
                <div className={styles.imageFlagWrapper}>
                    <Image
                        src={countriesFlagOptions[rightCountry].flag}
                        width={84} height={54}
                        alt="Country Flag"/>
                </div>
                <div className={styles.containerHeading}>
                    <HeadingH2 copy='Which country does this flag belong to?' className="question"/>
                </div>
                <Answers options={countriesFlagOptions} alreadyAnswered={isAlreadyAnsweredFlag}
                         rightCountry={rightCountry} settingAnswer={settingAnswer}
                         setCorrectOrIncorrect={settingGotItRight}/>
                {isAlreadyAnsweredFlag && <div className={styles.nextContainer}>
                    <Button label={gotItRightFlag ? "Next" : 'Finish'} className={styles.nextButton}
                            onClick={gotItRightFlag ? handleRightFlag : gameOver}/>
                </div>}</>}
        </>
    );
}

export default FlagQuestion;
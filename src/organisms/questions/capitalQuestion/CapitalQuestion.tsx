import React, {useEffect, useState} from 'react';
import Button from "../../../molecules/Button/Button";
import HeadingH2 from "../../../atoms/Heading-H2/HeadingH2";
import styles from '../Questions.module.css'
import Answers from "../../../molecules/answers/Answers";
import {CountryType} from "../Questions";

interface CapitalQuestionProps {
    changeQuestion: () => void
    gameOver: () => void
    addingRightAnswers: () => number
    countries: Array<CountryType | null>
}

function CapitalQuestion({changeQuestion, gameOver, addingRightAnswers, countries}: CapitalQuestionProps) {
    const [isAlreadyAnsweredCapital, setIsAlreadyAnsweredCapital] = useState<boolean>(false);
    const [gotItRightCapital, setGotItRightCapital] = useState<boolean>(false)
    const [rightCountry, setRightCountry] = useState<number | undefined>(undefined)
    const [countriesCapitalOptions, setCountriesCapitalOptions] = useState<Array<CountryType>>([])
    const settingAnswer = () => {
        !isAlreadyAnsweredCapital ?
            setIsAlreadyAnsweredCapital(true) : null;
    }

    const handleRightCapital = () => {
        changeQuestion();
        addingRightAnswers();
    }

    const settingGotItRight = () => {
        setGotItRightCapital(true)
    }

    const randomCountryIndex = () => Math.floor(Math.random() * 238);

    const randomRightCountryIndex = () => Math.floor(Math.random() * 4);


    const settingCountriesOptionsCapital = () => {
        if (countries[0] !== undefined) {
            const auxArray: Array<CountryType> = [];
            if (countriesCapitalOptions.length !== 4) {
                console.log('entre aca capital')
                for (let i = 0; i < 4; i++) {
                    auxArray.push(countries[randomCountryIndex()] as CountryType)
                }
            }
            if (auxArray.length === new Set(auxArray).size) {
                setCountriesCapitalOptions(auxArray)
                setRightCountry(randomRightCountryIndex)
            } else settingCountriesOptionsCapital()
        }
    }

    useEffect(() => {
            // if (countries[0] !== undefined) {
            //     for (let i = 0; i < 4; i++) {
            //         auxArray.push(countries[randomCountryIndex()] as CountryType)
            //     }
            //     setCountriesCapitalOptions(auxArray)
            //     setRightCountry(randomRightCountryIndex)
            // }
            settingCountriesOptionsCapital()
        }, []
    )

    return (
        <>
            {countriesCapitalOptions.length > 0 && rightCountry !== undefined &&
                <>
                    <HeadingH2 copy={`${countriesCapitalOptions[rightCountry].capital} is the capital of`}
                               className="question"/>
                    <Answers options={countriesCapitalOptions} alreadyAnswered={isAlreadyAnsweredCapital}
                             rightCountry={rightCountry} settingAnswer={settingAnswer}
                             setCorrectOrIncorrect={settingGotItRight}/>
                    {isAlreadyAnsweredCapital && <div className={styles.nextContainerCapital}>
                        <Button label={gotItRightCapital ? 'Next' : 'Finish'} className={styles.nextButton}
                                onClick={gotItRightCapital ? handleRightCapital : gameOver}/>
                    </div>
                    }
                </>

            }
        </>
    );
}


export default CapitalQuestion;
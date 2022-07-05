import React, {useState, useEffect} from 'react';
import CapitalQuestion from "./capitalQuestion/CapitalQuestion";
import FlagQuestion from "./flagQuestion/FlagQuestion";
import styles from './Questions.module.css'
import axios from "axios";
import Error from "../Error/Error";

interface QuestionsProps {
    correctAnswers: number,
    didYouLose: () => void
    addingRightAnswers: () => number
}

export interface CountryType {
    capital: string
    name: string
    independent: boolean
    flag: string
}

function Questions({didYouLose, addingRightAnswers}: QuestionsProps) {
    const [capitalQuestion, setCapitalQuestion] = useState<boolean>(true); //if it's false then the question will be a flag question

    const [countries, setCountries] = useState<Array<CountryType | null>>([])

    const [error, setError] = useState<boolean>(false)

    const changeQuestion = () => {
        setCapitalQuestion(!capitalQuestion);
    }

    const fetchCountries = async () => {
        try {
            const result = await axios(`https://restcountries.com/v2/all?fields=name,capital,flag`);
            setCountries(result.data.filter((country: CountryType) => country.capital && country.capital !== country.name));
        } catch (e) {
            if (e instanceof Error) {
                setError(true);
            }
        }
    };

    useEffect(() => {
        fetchCountries();
    }, [])

    return (
        <div className={styles.questionsComponent}>
            {countries.length === 0 && !error && <div className={styles.loader}></div>}
            {countries.length > 0 && <div className={styles.imageWorld}></div>}
            {capitalQuestion && countries.length > 0 &&
                <CapitalQuestion changeQuestion={changeQuestion} gameOver={didYouLose}
                                 addingRightAnswers={addingRightAnswers} countries={countries}/>}
            {!capitalQuestion && countries.length > 0 &&
                <FlagQuestion changeQuestion={changeQuestion} gameOver={didYouLose}
                              addingRightAnswers={addingRightAnswers} countries={countries}/>}
            {error && <div><Error/></div>}
        </div>
    );
}

export default Questions;
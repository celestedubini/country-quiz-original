import React, {useState} from 'react';

function Questions(props) {
    const [capitalQuestion, setCapitalQuestion] = useState<boolean>(true); //if it's false then the question will be a flag question
    return (
        <div className="questions-component">
            {capitalQuestion && 'capitales'}
            {!capitalQuestion && 'banderas'}
        </div>
    );
}

export default Questions;
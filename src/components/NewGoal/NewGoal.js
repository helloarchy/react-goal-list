import React, { useState } from 'react';
import './NewGoal.css';

const NewGoal = props => {
    const [enteredText, setEnteredText] = useState('');

    const addGoal = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        };

        console.log(newGoal);
        setEnteredText('');

        props.onAddGoal(newGoal)
    };

    const textChangeHandler = event => {
        setEnteredText(event.target.value);
    };

    return (
        <div>
            <form className={'new-goal'} onSubmit={addGoal}>
                <input type={'text'} value={enteredText} onChange={textChangeHandler} />
                <button type={'submit'}>Add Goal</button>
            </form>
        </div>
    );
};

export default NewGoal;




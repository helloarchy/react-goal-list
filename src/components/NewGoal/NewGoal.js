import React from 'react';
import './NewGoal.css';

const NewGoal = props => {
    const addGoal = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: 'Some generic text'
        };

        props.onAddGoal(newGoal)
    };

    return (
        <div>
            <form className={'new-goal'} onSubmit={addGoal}>
                <input type={'text'}/>
                <button type={'submit'}>Add Goal</button>
            </form>
        </div>
    );
};

export default NewGoal;




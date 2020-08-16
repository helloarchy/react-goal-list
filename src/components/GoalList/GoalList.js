import React from 'react';
import './GoalList.css'

const GoalList = props => {
    return (
        <div>
            <h2 className={'list-header'}>List test</h2>
            <ul className={'list-test'}>
                {
                    props.goals.map((goal) => {
                        return <li key={goal.id}>{goal.text}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default GoalList;
import React, {useState} from 'react';
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {
    const [courseGoals, setCourseGoals] = useState([
        {id: 'Goal-1', text: 'My first goal'},
        {id: 'Goal-2', text: 'My second goal'},
        {id: 'Goal-3', text: 'My third goal'},
    ]);

    const addNewGoal = newGoal => {
        setCourseGoals((prevCourseGoals) => {
            return prevCourseGoals.concat(newGoal);
        });
    }

    return (
        <div>
            <h1>Wow, my first true test React App!</h1>
            <NewGoal onAddGoal={addNewGoal}/>
            <GoalList goals={courseGoals}/>
        </div>
    );
};

export default App;

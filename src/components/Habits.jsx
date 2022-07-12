import React, { Component } from 'react';
import Habit from './Habit';
import HabitAddForm from './HabitAddForm';

class Habits extends Component {

    handleAdd=name=>{
        this.props.onAdd(name);
    }
    
    render() {
        const habits = this.props.habits;
        const handleIncrement = this.props.onIncrement;
        const handleDecrement = this.props.onDecrement;
        const handleDelete = this.props.onDelete;

        return (
            <>
            <HabitAddForm onAdd={this.handleAdd}/>
               <ul>
                {
                    habits.map(habit =>(
                        <Habit key={habit.id} habit={habit} 
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                        onDelete={handleDelete}
                        ></Habit>
                    ))

    }
            </ul>
            <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
            </>
         
        );
    }
}

export default Habits;
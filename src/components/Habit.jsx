import React, { Component } from 'react';

class Habit extends Component {

    componentDidMount(){ /*component 가 사용자에게 보여질때 호출 */
        console.log(`habit: ${this.props.habit.name} mounted`);
    }

    componentWillUnmount(){ /* component 삭제 전에 호출 */
        console.log(`habit: ${this.props.habit.name} will unmount`);

    }


    handleIncrement = ()=>{
        this.props.onIncrement(this.props.habit);
    };

    handleDecrement=()=>{
        this.props.onDecrement(this.props.habit);
    };

    handleDelete=()=>{
        this.props.onDelete(this.props.habit);
    };
    

    render() {
        // console.log(this.props.habit);
        const {name,count }= this.props.habit;

        return (
            <li className="habit">
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className='habit-button habit-increase' onClick={this.handleIncrement}>
                <i className="fa-solid fa-square-plus"></i>
            </button>
            <button className='habit-button habit-decrease' onClick={this.handleDecrement}>
            <i className="fa-solid fa-square-minus"></i>
            </button>
            <button className='habit-button habit-delete' onClick={this.handleDelete}>
                <i className="fa-solid fa-trash"></i>
            </button>
           
            </li>
            
        );
    }
}

export default Habit;
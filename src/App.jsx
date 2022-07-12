import React, { Component } from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import Habits from './components/Habits';


class App extends Component {

  state={
    habits:[ // 배열 객체 3개 만듬.
        {id:1,name:'Reading',count:0},
        {id:2, name:'Running',count:0},
        {id:3, name:'Coding',count:0},
    ],
};

handleCreate=(habit)=>{ // 새로운 객체 추가

  // countAll 갯수 증가
}


handleIncrement = (habit)=>{
  const habits = [...this.state.habits];// spread operator
  const index = habits.indexOf(habit);// 현재 클릭된 객체의 index 번호를 알아내고
  habits[index].count++; // 그 객체의 count 값을 증가 시킨뒤
  this.setState({habits}); // 변경된 값을 update 해줌. 
  
};

handleDecrement=(habit)=>{
  const habits = [...this.state.habits];
  const index = habits.indexOf(habit);
  const count = habits[index].count-1;
  habits[index].count=count < 0 ? 0 : count;
  
  this.setState({habits});
};

handleDelete=(habit)=>{
  const habits = this.state.habits.filter(item=> item.id!==habit.id);

  this.setState({habits});
  
};

handleAdd = name =>{
  const habits = [...this.state.habits, {id: Date.now(),name,count:0}]; // 배열 새로 생성
  this.setState({habits}); // 업데이트 
}

handleReset = ()=>{
  const habits = this.state.habits.map(habit=>{
    habit.count=0;
    return habit;
  })
  this.setState({habits});

};

  render() {
    return (
      <>
      <Navbar totalCount={this.state.habits.filter(item=>item.count>0).length}/>
      <Habits habits={this.state.habits} onIncrement={this.handleIncrement} 
      onDecrement={this.handleDecrement} onDelete={this.handleDelete}
      onAdd={this.handleAdd}
      onReset={this.handleReset}/>
        
      </>
    );
  }
}

export default App;

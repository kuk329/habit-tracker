import React, { Component } from 'react';

class Navbar extends Component {
    render() {
    
        return (
            <nav className='navbar'>
                <i className="navbar-logo fa-solid fa-leaf"></i>
                <span className='title'>Habit Tracker</span>
                <span className='count-all'>{this.props.totalCount}</span>


                
            </nav>
        );
    }
}

export default Navbar;
import React, { Component } from 'react';
class SideBar extends Component {
    constructor() {
        super()
    }
    state = { list: ["red", "blue", "yellow", "green"], isClicked: false }
 
    render() {

        return (
            <div className="container-nav">
                <button className="btn btn-dark rounded-pill" onClick={() => this.setState({ isClicked: !this.state.isClicked })}>+</button>
                {/* <ul id="list"></ul> */}
                {
                    this.state.isClicked ?
                        <ul id="list">{this.state.list.map((li, i) => <li className={li} key={i}></li>)}</ul>
                        :
                        null
                }
            </div>
        );
    }
}

export default SideBar;
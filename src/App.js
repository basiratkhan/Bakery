import axios from 'axios'
import React, { Component, useState } from 'react';
import cookie from './cookie.jpg';
import './App.css';

class App extends React.Component {

/*    constructor(props) {
        super(props);
        this.viewRef = React.createRef();
        this.state = {
            isLeftCookie: false,
            isRightCookie: false,
            isNightMode: false
        }
        this.fallOnGround = this.fallOnGround.bind(this);
        this.setNightMode = this.setNightMode.bind(this);
        this.setLeftCookie = this.setLeftCookie.bind(this);
        this.setRightCookie = this.setRightCookie.bind(this);
        this.placeOrder = this.placeOrder.bind(this);
    }

    fallOnGround(e) {
        e.target.style.bottom = 0;
    }

    setNightMode(e) {
        e.target.style.background = "black";
        this.viewRef.current.style.background = "black";
        this.setState({isNightMode: true})
    }

    setLeftCookie(e) {
        this.setState({isLeftCookie: e});
    }

    setRightCookie(e) {
        this.setState({isRightCookie: !this.state.isRightCookie});
    }

    placeOrder = e => {
        if (!this.state.isNightMode) {
            const orderTime = new Date().getTime();
            const order = {
                body: orderTime
            };
            axios.post(`https://jsonplaceholder.typicode.com/posts`, {order})
                .then(response => {
                    console.log(response);
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    render() {

        return (
            <div className="App">
                <header className="App-header" ref={this.viewRef}>
                    <div className="sun" onClick={this.setNightMode}></div>
                    <div className="roof">
                        <div className="hoarding">
                            <p className="title">COOKIE BAKERY</p>
                        </div>
                    </div>
                    <div className="base">
                    <div className="window1" onMouseEnter={() => this.setLeftCookie(true)} onMouseLeave={() => this.setLeftCookie(false)}>
                        {this.state.isLeftCookie && !this.state.isNightMode && (
                            <img src={cookie} className="cookie-img" alt="cookie" />
                        )}
                    </div>
                    <div className="window2" onMouseEnter={() => this.setRightCookie(true)} onMouseLeave={() => this.setRightCookie (false)}>
                        {this.state.isRightCookie && !this.state.isNightMode && (
                            <img src={cookie} className="cookie-img" alt="cookie" />
                        )}
                    </div>
                        <div className="door" onClick={this.placeOrder}>
                            <div className="handle"></div>
                        </div>
                        <div className="mailbox" onClick={this.fallOnGround}>
                            <div className="mailbox-door"></div>
                            <p className="mail-label">Mailbox</p>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}*/

    constructor(props){
        super(props);
        this.state = {
            item: '',
            itemsList: []
        }
        this.updateTodoList = this.updateTodoList.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    updateTodoList(e) {
        this.setState({item: e.target.value});
        e.target.style.textDecoration = "line-through"
    }

    addItem(e) {
        //let joined = this.state.itemsList.concat(this.state.item);
        //this.setState({itemsList: joined});
       /* let newItems = [...this.state.itemsList];
        console.log(this.state.item);
        newItems.push(this.state.item);
        this.setState({ itemsList: newItems });*/
        this.setState({
            itemsList: this.state.itemsList.concat(this.state.item)
        });
    }

    render() {
        return (
            <>
                <div>
                    <h2>
                        Todo List
                    </h2>
                    <form onSubmit={this.addItem}>
                        <input type="text" onChange={this.updateTodoList} />
                        <input type="submit" value="Add"/>
                    </form>
                    {this.state.itemsList.map(i => (
                        <li key={i} ref={this.viewRef}>{i}</li>
                    ))}
                </div>
                <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
            </>
        );
    }
}

export default App;


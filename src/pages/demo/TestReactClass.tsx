import React from 'react';

export default class TestReactClass extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = { number: 1 }
        console.log("constructor");
    }
    static getDerivedStateFromProps(props: any, state: any) {
        console.log(props);
        console.log(state);
        console.log("getDerivedStateFromProps");
        return null
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(props: any, state: any){
        console.log(props);
        console.log(state);
        console.log("getSnapshotBeforeUpdate");
        return null
    }
    render() {
        console.log("render");
        return <div>
            <button onClick={() => { this.setState({ number: this.state.number + 1 }) }}>点击查看变化</button>
            <div>数字{this.state?.number}</div>
        </div>
    }
}
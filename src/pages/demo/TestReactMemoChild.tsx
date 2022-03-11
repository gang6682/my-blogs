import React, { useState } from 'react';

const TestReactMemoChild: React.FC<any> = (props) => {
    const [num, SetNum] = useState(1)
    console.log("TestReactMemoChild,发生了变化");

    return (
        <div>
            我是TestReactMemo的子组件,我是父组件的值 {props.age}
            我是自己
            <button onClick={() => SetNum(num + 1)}>我是子组件的button{num}</button>
        </div>
    )
}

function changeProps(pre: any, next: any) {
    console.log(pre);
    console.log(next);
    return true
}
export default React.memo(TestReactMemoChild, changeProps)
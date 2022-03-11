import React, { useMemo, useState } from 'react';
import TestReactMemoChild from './TestReactMemoChild';

const TestReactMemo: React.FC = () => {
    const [age, setAge] = useState(1);
    console.log("TestReactMemo发生了变化");

    return (
        <div>
            <button onClick={() => { setAge(val => val + 1) }}>点击我查看变化状态{age}</button>
            我是子组件:
            <TestReactMemoChild age={age}/>
        </div>
    )
}
export default TestReactMemo
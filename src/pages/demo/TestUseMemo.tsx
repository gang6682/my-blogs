import React, { useMemo, useState } from 'react';
import TestUseMemoChild from './TestUseMemoChild';

const TestUseMemo: React.FC = () => {
    const [age, setAge] = useState(1);
    console.log("TestUseMemo发生了变化");

    const myMemo = useMemo(() => {
        console.log("我是TestUseMemo的useMemo发生了变化");
        
        return <div>我是变化的memo {age} <TestUseMemoChild /></div>
    }, [])
    return (
        <div>
            <button onClick={() => { setAge(val => val + 1) }}>点击我查看变化状态</button>
            以下是变化的组件:
            {myMemo}
            只改变了:{age}
            
        </div>
    )
}
export default TestUseMemo
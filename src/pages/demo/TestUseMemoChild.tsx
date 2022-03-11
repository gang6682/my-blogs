import React from 'react';

const TestUseMemoChild: React.FC = () => {
    console.log("TestUseMemoChild,发生了变化");

    return (
        <div>
            我是TestReactMemo的子组件
        </div>
    )
}
export default TestUseMemoChild
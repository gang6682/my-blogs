import React from 'react';
import { Outlet } from 'react-router-dom';

const TestLayout: React.FC = () => {
    return (
        <div>
            <h2>我是父组件</h2>
            <Outlet />
        </div>
    )
}
export default TestLayout
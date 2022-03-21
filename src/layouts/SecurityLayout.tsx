import { BrowserRouter as Router, Route, Routes, Link, useRoutes, RouteObject } from 'react-router-dom'
import styles from './SecurityLayout.module.less';
import TestLayout from './TestLayout';
import Dashboard from '../pages/dashboard';
import TestUseCallback from '../pages/demo/TestUseCallback';
import TestReactMemo from '../pages/demo/TestReactMemo';
import TestUseMemo from '../pages/demo/TestUseMemo';
import TestReactClass from '../pages/demo/TestReactClass';
import TestReactForceUpdate from '../pages/demo/TestReactForceUpdate';
import Login from '../pages/user/Index';
import ReduxDemo from '../pages/redux';

function SecurityLayout() {
    let routes: RouteObject[] = [
        {
            path: "/",
            element: <TestLayout />,
            children: [
                { path: "", element: <Login /> },
                { path: "demo/testUseCallback", element: <TestUseCallback /> },
                { path: "demo/reactMemo", element: <TestReactMemo />, },
                { path: "demo/useMemo", element: <TestUseMemo />, },
                { path: "demo/testReactClass", element: <TestReactClass />, },
                { path: "demo/testReactForceUpdate", element: <TestReactForceUpdate />, },
                { path: "redux", element: <ReduxDemo />, },
            ],
        },
        {
            path: "dashboard",
            element: <Dashboard />,
        }
    ];
    const routers = useRoutes(routes)
    return (
        <div className={styles.securityLayoutWrap}>
            <div>
                <Link to="/dashboard">首页</Link>|
                <Link to="/demo/room">其他页</Link>|
                <Link to="/demo/testUseCallback">TestUseCallback</Link>|
                <Link to="/demo/reactMemo">Test Class React Memo</Link>|
                <Link to="/demo/useMemo">Test useMemo</Link>|
                <Link to="/demo/testReactClass">Test React Class</Link>|
                <Link to="/demo/testReactForceUpdate">Test Force Update</Link>|
                <br></br>
                <Link to="/redux">redux</Link>|
            </div>
            <div>
                {routers}
            </div>
            {/* <Router>
                <div>
                    <Link to="/">首页</Link> |
                    <Link to="/demo/room">其他页</Link>|
                    <Link to="/demo/testUseCallback">TestUseCallback</Link>|
                    <Link to="/demo/reactMemo">Test Class React Memo</Link>|
                    <Link to="/demo/useMemo">Test useMemo</Link>|
                    <Link to="/demo/testReactClass">Test React Class</Link>|
                    <Link to="/demo/testReactForceUpdate">Test Force Update</Link>|

                </div>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/demo" element={<TestLayout />} >
                        <Route path="room" element={<div>其他页</div>} />
                        <Route path="testUseCallback" element={<TestUseCallback />} />
                        <Route path="reactMemo" element={<TestReactMemo />} />
                        <Route path="useMemo" element={<TestUseMemo />} />
                        <Route path="testReactClass" element={<TestReactClass />} />
                        <Route path="testReactForceUpdate" element={<TestReactForceUpdate />} />
                    </Route>
                </Routes>
            </Router> */}
        </div>
    )
}
export default SecurityLayout
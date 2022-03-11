import React from 'react';
import {Link} from 'react-router-dom'

let currentTime = new Date().getTime();
// export default class TestReactForceUpdate extends React.Component {

//     render() {
//         return <div>
//             <button onClick={() => {
//                 currentTime = new Date().getTime();
//                 console.log("我触发了", currentTime);
//                 this.forceUpdate();
//             }}>点击改变</button>
//             TestReactForceUpdate: {currentTime}
//         </div>
//     }
// }
const TestReactForceUpdate: React.FC = () => {
    return (
        <div>
            <button onClick={() => {
                currentTime = new Date().getTime();
                console.log("我触发了", currentTime);
                // forceUpdate();
            }}>点击改变</button>
            TestReactForceUpdate: {currentTime}

            <Link to='../demo/testReactClass'>点击跳转到 testReactClass</Link>
        </div>
    )
}
export default TestReactForceUpdate
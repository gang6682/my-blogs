import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import styles from './SecurityLayout.module.less';

function SecurityLayout() {
    return (
        <div className={styles.securityLayoutWrap}>
            <Router>
                <div>
                    <Link to="/">首页</Link>
                    <br />
                    <Link to="/room">其他页</Link>
                </div>
                <Routes>
                    <Route path="/room" element={<div>其他页</div>} />
                    <Route path="/" element={<div>我是首页</div>} />
                </Routes>
            </Router>
        </div>
    )
}
export default SecurityLayout
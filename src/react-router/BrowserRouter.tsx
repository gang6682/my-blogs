import { createBrowserHistory as createHistory } from "history";
import Router from './Router';
function BrowserRouter(props: any) {
    const history = createHistory(props)
    return <Router history={history} children={props.children}></Router>
}

export default BrowserRouter;
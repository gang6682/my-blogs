import React from 'react';
import RouterContext from './RouterContext';

interface RouterProps {
    history?: any
}
const Router: React.FC<RouterProps> = (props) => {
    const { history, children } = props
    return (
        <RouterContext.Consumer>
            {context => {
                console.log(context);

                return <RouterContext.Provider value="">
                    123
                </RouterContext.Provider>
            }}
        </RouterContext.Consumer>
    )
}
export default Router
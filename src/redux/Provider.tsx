import { useMemo } from 'react';
import ReduxContext from './Context';

export default function Provider({ store, children }) {
    const contextValue: any = useMemo(() => {
        return { store }
    }, [store])
    return <ReduxContext.Provider value={contextValue}>{children}</ReduxContext.Provider>
}
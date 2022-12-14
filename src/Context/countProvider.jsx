import { useState, useEffect, createContext } from "react";

const CountContext = createContext();

const CountProvider = ( {children} ) => {

    const [ count, setCount ] = useState(0);

    useEffect( () => {
        const localCount = Number(localStorage.getItem("count"));
        
        if(localCount) setCount(localCount);
    }, [])

    return (
        <CountContext.Provider value={{ count, setCount}} >
            { children }
        </CountContext.Provider>
    )
}

export { 
    CountProvider
}

export default CountContext




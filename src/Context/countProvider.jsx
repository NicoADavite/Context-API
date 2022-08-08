import { useState, createContext } from "react";

const CountContext = createContext();

const CountProvider = ( {children} ) => {

    const [ count, setCount ] = useState(0);

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




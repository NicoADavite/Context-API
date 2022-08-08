import { useContext } from "react";
import CountContext from "../Context/countProvider";

const useCount = () => {
    return useContext(CountContext);
}

export default useCount
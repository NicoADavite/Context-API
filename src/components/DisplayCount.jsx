import useCount from "../hooks/useCount"

const DisplayCount = () => {

  const { count }  = useCount();

  return (
    <p>{ count }</p>    
  )
}

export default DisplayCount
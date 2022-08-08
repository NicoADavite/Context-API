import useCount from "../hooks/useCount"

const PlusButton = () => {

  const { count, setCount } = useCount();

  const handleCount = () => {
    setCount(count + 1);

    localStorage.setItem("count", (count + 1 ));
  }

  return (
    <button onClick={ handleCount }>Sumar 1</button>
  )
}

export default PlusButton
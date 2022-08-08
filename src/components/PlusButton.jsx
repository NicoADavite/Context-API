import useCount from "../hooks/useCount"

const PlusButton = () => {

  const { count, setCount } = useCount()

  return (
    <button onClick={ () => { setCount(count + 1) }}>Sumar 1</button>
  )
}

export default PlusButton
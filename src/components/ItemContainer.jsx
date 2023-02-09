import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const ItemContainer = () => {

//Se recibe el Json
  const [info, setInfo] = useState([])

  useEffect(() => {
    const URL = '../data.json'
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setInfo(data)
      })
  }, [])

  return (
    <>
      {/* Se envia el json a ItemList */}
      <ItemList info={info}/>
    </>
  )
}
export default ItemContainer
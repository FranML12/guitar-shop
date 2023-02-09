import { Row } from "react-bootstrap"
import Item from "./Item"

const ItemList = ({info}) => {
  
  return (
    /* se convierte el objeto a lista */
    /* div contenedor de cards */
      <Row style={{justifyContent: "center", marginRight: "10px", marginLeft: "10px"}}>{info.map(i => <Item key={i.id} {...i}/>)}</Row>
    /* style={{display:'grid', gridTemplateColumns: '1fr 1fr 1fr'}} */
  )
}
export default ItemList 
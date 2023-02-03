import Item from "./Item"

const ItemList = ({info}) => {
  
  return (
    /* se convierte el objeto a lista */
    /* div contenedor de cards */
    <div className="cardContainer" style={{display:'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>{info.map(i => <Item key={i.id} {...i}/>)}</div>
  )
}
export default ItemList
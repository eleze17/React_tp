import Item from './Item'


const ItemList = ({ array }) => {
 
    return (
        <>
            {array.map((producto) => (
                <Item key={producto[0]} producto={producto}  />
            ))}
        </>  )}

export default ItemList

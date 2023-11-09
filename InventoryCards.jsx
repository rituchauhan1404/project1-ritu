export default function InventoryCards(props) {
    return(
        //rendering all the items taken from the project.js file
        <div className="Inventory-Container">
            {props.products.map((product) => (
                <div className="Inventory-Card" key= {product.id}>
                    <img src={product.image} alt={product.brandName} />
                    <h2>{product.productName}</h2>
                    <h3>{product.brand}</h3>
                    <p>{product.quantity}</p>
                    <h2>{product.price}</h2>
                    <button 
                     onClick={(e) => {
                        e.preventDefault();
                        props.addItem(product);
                     }}
                >
                    Add to cart
                </button>
            
                </div>
            ))}
            </div>
    );
                    } 
            
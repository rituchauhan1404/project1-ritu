import {useEffect, useState} from "react";
import InventoryCards from "./InventoryCards";
import CartList from "./CartList";
import {products} from "./product";

export default function GroceriesApp() {
    // creating states for storing the list of items and grand total. 
  const [items, setItem] = useState([]);
  const [total, setTotal] =useState(0);

  // this function will add new product to the items array.
   const addToCart = (product) => {
    setItem([...items,product]);
   };

   // this function will remove a particular item from the items array.
   const removeItem = (product) => {
    setItem((a) => a.filter((b) => b.id != product.id));
   };
    // this function will calculate the sum of prices of items present in the items array.
   const sum = () => {
    let newTotal = 0;
    const convert = (pString) => parseFloat(pString.replace("$", ""));
    items.map((product) => {
        newTotal = newTotal + convert(product.price);
    });
    setTotal(newTotal.toFixed(2));
    };

    // this function will empty the items array.
    const empty = () => {
        setItem([]);
    };

    //a useEffect hook that will be triggered everytime when there will be changes in the items array.
   useEffect(() => {
    sum();
   }, [items]) ;
   
   return (
    <div>
        <h1 className="heading">Groceries App</h1>
        <div className="GroceriesApp-Container">
            <InventoryCards products={products} addItem={addToCart}/>
            <CartList
             sum={sum}
             items={items}
             empty={empty}
             total={total}
             removeItem={removeItem}
             />
             </div>
             </div>
   
   );

}
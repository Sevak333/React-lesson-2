import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([
    { id: 101, title: "Psychology", price: 30, photo: "https://m.media-amazon.com/images/I/71EMksUtDML._AC_UF1000,1000_QL80_.jpg" },
    { id: 102, title: "Poetry", price: 23, photo: "https://m.media-amazon.com/images/I/71vTizEz8aL._AC_UF1000,1000_QL80_.jpg" },
    { id: 103, title: "Literature", price: 18, photo: "https://m.media-amazon.com/images/I/71PxSVND4ZS._AC_UF894,1000_QL80_.jpg" },
    { id: 104, title: "Ecology", price: 12.5, photo: "https://m.media-amazon.com/images/I/71CqfaLkxmL._AC_UF1000,1000_QL80_.jpg" },
    { id: 105, title: "Design", price: 90, photo: "https://m.media-amazon.com/images/I/71exg5HRkxL._AC_UF1000,1000_QL80_.jpg" },
    { id: 106, title: "Math", price: 20, photo: "https://m.media-amazon.com/images/I/71hcmeR1QIL._AC_UF350,350_QL80_.jpg" },
    { id: 107, title: "Philosophy", price: 12, photo: "https://m.media-amazon.com/images/I/71zJpcPjHHL._AC_UF350,350_QL80_.jpg" },
    { id: 108, title: "Politics", price: 31, photo: "https://m.media-amazon.com/images/I/71Djhpa55cL._AC_UF350,350_QL80_.jpg" },
  ])
  const [basket, setBasket] = useState([]);

  const moveToCart = item => {
    const itemIndex = basket.findIndex(elm => elm.id === item.id);
    if (itemIndex === -1) {
      setBasket([...basket, { ...item, count: 1 }]);
    } else {
      const updateBasket = basket.map((elm, index) =>
        index === itemIndex ? { ...elm, count: elm.count + 1 } : elm
      );
      setBasket(updateBasket);
    }
  }

  const removeFromCart = id => {
    setBasket(basket.filter(elm =>
      elm.id != id
    ))
  }

  const addCount = id => {
    const updateBasket = basket.map(elm =>
      elm.id === id ? { ...elm, count: elm.count + 1 } : elm
    );
    setBasket(updateBasket);
  }

  const removeCount = id => {
    const updateBasket = basket.map(elm =>
      elm.id === id ? { ...elm, count: elm.count - 1 } : elm
    );

    const filterBasket = updateBasket.filter(elm => elm.count >= 1);

    setBasket(filterBasket);
  }

  return (
    <>
      <div className='row'>
        <div>
          <h3>Products</h3>
          <div className="list">
            {
              products.map(elm =>
                <div key={elm.id}>
                  <img src={elm.photo} alt="" />
                  <p>{elm.title}</p>
                  <strong>{elm.price}USD</strong>
                  <br />
                  <button onClick={() => moveToCart(elm)}>Move</button>
                </div>
              )
            }
          </div>
        </div>
        <div>
          <h3>Basket</h3>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtitle</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                basket.map(elm =>
                  <tr key={elm.id}>
                    <td>{elm.title}</td>
                    <td>{elm.price}</td>
                    <td>{elm.count}</td>
                    <td>{elm.count * elm.price}</td>
                    <td>
                      <button onClick={() => addCount(elm.id)}>+</button>
                      <button onClick={() => removeCount(elm.id)}>-</button>
                      <button onClick={() => removeFromCart(elm.id)}>x</button>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App

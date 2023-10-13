import { useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
      fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  });


  return (
    <>
      <div className='max-w-[1320px] mx-auto font-serif'>
        <div
          className='grid lg:grid-cols-4 md:grid-col-2 sm:grid-col-l gap-5 py-2'
        >
          {
            products.map(product => {
              return <Card key = {product.id} imgUrl={product.image} title={product.title} price={product.price} />
            })
          }
        </div>
        
      </div>
    </>
  )
}

export default App

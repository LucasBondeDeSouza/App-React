import { useRef, useState } from 'react'
import { v4 } from 'uuid'
import { AddButton, Container, Product, TrashButton } from './styles'

// React Hooks
// useRef
// useState / estado -> É uma variável, que, roda vez que troca de valor a tela irá recarregar os valores

function App() {
  const [ products, setProducts ] = useState([])
  const inputRef = useRef()

  function addProduct() {
    if (inputRef.current.value.length > 0){
      setProducts([
        {
          id: v4(),
          name: inputRef.current.value
        }, ...products
      ])
    } else {
      alert('Digite alguma coisa...')
    }

    inputRef.current.value = ''
  }

  function deleteProduct(id) {
    setProducts(products.filter(product => product.id !== id))
  }

  return (
    <Container>
      <h1>Lista de Compras</h1>
      <input type="text" placeholder="produto..." ref={inputRef} />
      <AddButton onClick={addProduct}>Adicionar</AddButton>

      {
        products.map((product) =>  (
          <Product key={product.id}>
            <p>{product.name}</p>
            <TrashButton onClick={() => deleteProduct(product.id)}>🗑️</TrashButton>
          </Product>
        ))
      }
    </Container>
  )
}

export default App
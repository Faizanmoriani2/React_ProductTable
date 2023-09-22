import { useState } from 'react'
import './App.css'
import SearchBar from './Components/searchBar'
import ProductTable from './Components/ProductTable';

function App() {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  console.log(inStockOnly + " text: " + filterText)

  return (
    <>
      <SearchBar 
      filterText={filterText} 
      inStockOnly={inStockOnly} 
      onFilterTextChange={setFilterText} 
      onInStockOnlyChange={setInStockOnly}
      />
      
      <ProductTable 
      filterText={filterText} 
      inStockOnly={inStockOnly}
      />
    </>
  )
}



export default App

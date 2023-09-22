
export default function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange})
{
    return (
        <div className="search-bar">
            <input type="text" name="search" value={filterText} placeholder="Search..." onChange={(e) => onFilterTextChange(e.target.value)}/>
            <label>
                <input type="checkbox" checked={inStockOnly} name="inStock" onChange={(e) => onInStockOnlyChange(e.target.checked)}/>
                Only show Product in stock
            </label>
        </div>
    )
}
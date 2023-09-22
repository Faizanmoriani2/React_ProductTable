
export default function SearchBar(){
    return (
        <div className="search-bar">
            <input type="text" name="search" placeholder="Search..." />
            <label>
                <input type="checkbox" name="inStock"/>
                Only show Product in stock
            </label>
        </div>
    )
}
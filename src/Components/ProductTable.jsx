import product from "./data"

export default function ProductTable() {
    return (
        <div className="product-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <ProductCategoryRow />
        </div>
    )

}

export function ProductCategoryRow() {

    let fruits = [{ }]
    let vegetables = [{}] 
    
    const items = product.map((item) => {
        if(item.category === "Fruits"){
            fruits = [...fruits,
                {
                name: item.name,
                price: item.price,
                stocked: item.stocked
            }]
        }
        else{
            vegetables = [...vegetables,
                {
                name: item.name,
                price: item.price,
                stocked: item.stocked
            }]
        }
    })

    console.log(fruits)

    return (
        <>
            <h3>Fruits</h3>
            {fruits.map((fruit) => {
                return (
                    <thead>
                        <tr>
                            <th className={fruit.stocked ? "" : "red"}>{fruit.name}</th>
                             <th>{fruit.price}</th>
                        </tr>
                    </thead>
                )
            })}
            <h3>Vegetables</h3>
            {vegetables.map((vegetable) => {
                return (
                    <thead>
                        <tr>
                            <th className={vegetable.stocked ? "" : "red"}>{vegetable.name}</th>
                             <th>{vegetable.price}</th>
                        </tr>
                    </thead>
                )
            })}
        </>
    )

}

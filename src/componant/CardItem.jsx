export const CardItem = () => {

    const items = [
        {
            title: "haider",
            price: "500",
            colors: {
                colo1: "red",
                colo2: "Blue",
                colo3: "Green",
            }
        },
        {
            title: "nisar",
            price: "500"
        },
        {
            title: "shuhat",
            price: "500"
        },
        {
            title: "ali",
            price: "500"
        },
    ]

    return (
        <div className="card-container">
            {items.map((item, index) => (
                <div key={index} className="card" style={{ width: '18rem' }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <h5 className="card-title">{item.price}</h5>
                        <h5 className="card-title">{item.colors.colo1}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            ))}
        </div>
    )
}
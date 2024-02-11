import pizzaimghe from '../assets/pio.jpg'

export const CardItem = ({ onCardClick  }) => {

    const items = [
        {
            url: pizzaimghe,
            title: "large pizza r",
            price: "RS.999",
        },
        {
            url: pizzaimghe,
            title: "large pizza r",
            price: "RS.999",
        },
        {
            url: pizzaimghe,

            title: "Regullar",
            price: "Rs.799"
        },
        {
            url: pizzaimghe,

            title: "Small",
            price: "Rs.499"
        },
        {
            url: pizzaimghe,
            title: "jumbo pizza",
            price: "Rs.2499"
        },
    ]

    const handleCardClick = (url, title, price) => {
        onCardClick({ url, title, price });
    };

    return (
        <div className="card-container flex-centar row m-4 gap-1 ">
            {items.map((item, index) => (
                <div key={index} className="card" style={{ width: '18rem' }}>
                    <img src={item.url} className="card-img-top w-100" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <h5 className="card-title">{item.price}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button onClick={() => handleCardClick(item.url, item.title, item.price)} className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
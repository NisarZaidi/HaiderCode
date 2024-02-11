import Carousel from 'react-bootstrap/Carousel';
import pizzacarosul1 from '../assets/pizza-background-1.jpg';
import pizzacarosul2 from '../assets/pizza-background-2.jpg';
import pizzacarosul3 from '../assets/pizza-background-3.jpg';

export const Carouselslider = () => {
    return (
        // <>
        <div
            style={{

                height: "90vh"
            }}>
            <Carousel data-bs-theme="dark"
            style={{height: "90vh"}}
            >

                <Carousel.Item
                style={{height: "90vh"}}
                >
                    <img
                        className="d-block w-100 h-100"
                        src={pizzacarosul1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item
                style={{height: "90vh"}}

                >
                    <img
                        className="d-block w-100"
                        src={pizzacarosul2}
                        alt="Second slide"

                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item
                style={{height: "90vh"}}

                >
                    <img
                        className="d-block w-100"
                        src={pizzacarosul3}
                        alt="Third slide"

                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>



        // </>
    )
}
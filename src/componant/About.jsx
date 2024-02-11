// import { Carousel } from "bootstrap"
import { CardItem } from "./CardItem"
import { Carouselslider } from "./Carousel"

export const About = ({ onCardClicks }) => {
    const handleCardClick = (item) => {
        onCardClicks(item)
    };
    return (
        <>
            <Carouselslider />
            <div> <h1>thise About page</h1></div>
            <CardItem onCardClick={handleCardClick} />

        </>
    )
}
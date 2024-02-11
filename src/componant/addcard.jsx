
import Button from "react-bootstrap/Button"
import { useLocation } from 'react-router-dom';

function Addcard() {
    const location = useLocation();
    const { item } = location.state;
    return (
        <>
            <div style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"center",
                gap:"25px"

            }}>
                <div style={{
                    border:"1px solid",
                    width:"400px",
                    height:"400px",
                    

                }}
                ><img src={item.url} alt="pizza imghe" /></div>
                <div style={{
                    border:"1px solid",
                    width:"600px",
                    height:"400px",
                    textAlign:"center",
                    fontSize:"18px",
                    
                }}
                >
                    <div style={{
                        height:"70%"
                        // justifyContent:"centars",
                        
                    }}>
                        <h1>{item.title}</h1>
                        <p>{item.price}</p>
                    </div>

                    <Button variant="primary">add card</Button>{' '}
                    <Button variant="primary">buy pizza</Button>{' '}
                </div>
            </div>
        </>
    );
}

export default Addcard;
import {useState} from "react";
import {connect} from "react-redux";
import {Toast} from "react-bootstrap";
import {add_card , delete_card} from "./actions/card-action";

const App = (props) => {
    console.log(props)
    const [show, setShow] = useState(false);
    const [showCard,setShowCard] = useState(false);

    //ADD CARD
    const addCard = (data) => {
        setShow(true)
        props.onAddCard(data);
    }
    //DELETE CARD
    const deleteCard = (data) => {
        props.onDeleteCard(data);
    }
    return (
        <div className="mt-4 container qd-main-container shadow rounded">
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide style={{position: 'absolute',top: "20px",right: "20px",}}>
                <Toast.Header>
                    <strong className="mr-auto">My Card</strong>
                </Toast.Header>
                <Toast.Body>Succesfuly Added Card</Toast.Body>
            </Toast>

            <Toast onClose={() => setShowCard(false)} show={showCard} style={{position: 'absolute',top: "20px",right: "20px",zIndex:"33"}}>
                <Toast.Header>
                    <strong className="mr-auto">My Card</strong>
                </Toast.Header>
                <Toast.Body>
                    {
                        props.listReducers.cards.length === 0 ? 
                        <h3> Card Empty </h3> :
                        props.listReducers.cards.map((data,key) => {
                            return(
                                <div key={key} className="d-flex justify-content-between align-items-center flex-row">
                                    <p> {data.name} </p>
                                    <p> {data.price} </p>
                                    <input type="button" className="btn btn-sm btn-danger" value="X" onClick={() => deleteCard(data.id)}/>
                                </div>
                            );
                        })
                    }
                </Toast.Body>
            </Toast>
        <div className="row d-flex justify-content-center align-items-center flex-column">
            <div className="d-flex justify-content-around align-items-center w-100 mt-2">
                <h2 className="p-0 m-0">
                     Product Page
                </h2>
                <input type="button" onClick={() => setShowCard(true)} className="btn btn-outline-info" value="Card"/>       
            </div>
            <hr className="col-8"/>
            <div className="col-12 p-0 m-0 mt-5">
                <div className="row d-flex justify-content-center align-items-start">
                    {
                        props.listReducers.products.map((data,key) => {
                            return(
                            <div key={key} className="col-12 col-md-6 col-lg-3 my-2">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-header"> {data.name}</div>
                                        <div className="card-body d-flex justify-content-center align-items-center flex-column">
                                            <div> 
                                                <img src={data.image} width="200"  alt="ProductImage"/>
                                            </div>
                                            <div className="my-2 d-flex justify-content-between align-items-center flex-row w-100">
                                                <div className=""> {data.paraf} </div>
                                                <div className=""> {data.price} </div>
                                            </div>
                                            <div className="my-2"> <input onClick={() => addCard(data)} className="btn btn-outline-primary" type="submit" value="Add To Card"/> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    );
}
const mapStateToProps = state => state;

const mapDispatchToProps = {
    onAddCard:add_card,
    onDeleteCard:delete_card
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
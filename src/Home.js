import React, { useEffect, useState } from 'react';
// import SweetModal from './SweetModal';

export default function Home() {
    

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     document.title = "AVES | Parkour team";
    //     document.querySelector('meta[name="description"]')
    //         .setAttribute('content',
    //             "AVES comprende tre membri: Manuel Zanaga, Giuseppe Tegano e Karim Gillio. Come parkour team, il gruppo partecipa a diverse attività e organizza corsi ad Ivrea e nel canavese.");

    // })

    const DEV_URL = 'http://localhost:8080';
    const PROD_URL = 'http://3.125.105.131:8080';

    const [sweetList, setSweetList] = useState([]);
    const [sweetDetail, setSweetDetail] = useState([])
    // { name: 0, quantity: 0, size: 0}

    useEffect(() => {
       fetch(DEV_URL + '/api/backend/v1/')
          .then((res) => res.json())
          .then((data) => {
             console.log(data);
             setSweetList(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);

    function getSweetDetail(id) {
        fetch(DEV_URL + "/api/backend/v1/detail/" + id)
          .then(response => response.json())
          .then(data => {
            console.log("Sweet detail:", data);
            setSweetDetail(data)
            console.log("Sweet detail obj:", sweetDetail)
          })
          .catch(error => console.log("Error", error))
      }


    const [open, setOpen] = useState(false);
    const handleOpen = (e, sweet) => {
        setOpen(true);
        console.log(e.target.parentElement)
        console.log(sweet)
        setSweetModalName(sweet.name)
        setSweetModalmage(sweet.image)
        setSweetModaPrice(sweet.price)
        setSweetModalQuantity(sweet.quantity)
        // setSweetDetail({})
        getSweetDetail(sweet.id)
        setDisplay("block")
    }

    const handleClose = (e) => {
        setOpen(false);
         const modal = document.querySelector("#sweet-modal");
        if(e.target == modal){
            setDisplay("none");
        }
    }

    const [display, setDisplay] = useState("none");
    const [sweetModalName, setSweetModalName] = useState();
    const [sweetModalImage, setSweetModalmage] = useState();
    const [sweetModalPrice, setSweetModaPrice] = useState();
    const [sweetModalQuantity, setSweetModalQuantity] = useState();

    const styleModalContent = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24
      };

    
    const styleModal = {
        position: 'fixed',
        left: 0,
        top: 0,
        // zIndex: '1',
        width: '100%',
        height: '100%',
        bgcolor: 'background.paper',
        backgroundColor: 'rgba(0,0,0,0.4)',
        display: display
      };

    const styleModalInfo = {
        display: 'flex'
    }
      

    const listItems = sweetList.map(sweet =>
        <div className="item-container">
            <div className="img-container" onClick={(e) => { handleOpen(e, sweet) }}>
                <a href="#">
                    <img src={"img/" + sweet.image } />
                </a>
            </div>

            <div className="description">
                {sweet.name}
            </div>
            <div className="quantity">
                Available pieces: {sweet.quantity}
            </div>

            <div className="price-info" >
                <div>€ <span> {sweet.totalPrice}</span>/piece</div>
            </div>
         </div>
      );

      const styleSweetDetail = {
        listStyleType: 'disc'
     }

      const listSweetDetail = sweetDetail.map(sweetDetail =>
        <li style={ styleSweetDetail }>
            {sweetDetail.name} {sweetDetail.quantity} {sweetDetail.size} 
        </li>
      );

      

    return (
        <div>
            <div id="mainContainer"> {listItems} </div>

            {/* <div id="sweet-modal-content" style={{ 'display': display }}> */}
            <div id="sweet-modal" onClick={handleClose} style={ styleModal }>
                <div id="sweet-modal-content" style={ styleModalContent }>
                    <div id="sweet-modal-foto">
                        <img src={"img/" + sweetModalImage } />
                    </div>
                    <div id="sweet-modal-info" style={ styleModalInfo }>
                        <div id="sweet-modal-info-general">
                        {sweetModalName} <br />
                        Available pieces: {sweetModalQuantity} <br />
                        <div>€ <span> {sweetModalPrice}</span>/piece</div>
                        </div>
                        <div id="sweet-modal-info-ingredient" >
                            Ingredients:
                            <ul style={{margin: 0}}>
                            {listSweetDetail}
                            </ul>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
}

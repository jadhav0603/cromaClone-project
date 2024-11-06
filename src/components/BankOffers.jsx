import React from "react";
import img1 from '../assets/Images/Home/bank_offers/img1.webp';
import img2 from "../assets/Images/Home/bank_offers/img2.webp";
import img3 from "../assets/Images/Home/bank_offers/img3.webp";
import img4 from "../assets/Images/Home/bank_offers/img4.webp";
import '../css/bankOffer.css'



function BankOffer() {



    return(
        <div className="bankContainer">
            <h2 style={{ width: '75vw', textAlign: 'left', color: 'white' }}>Exciting Bank Offers For You</h2>
            <div className="bankOffers homePageCommonCss">
                <img src={img1} alt="bank offer image" />
                <img src={img2} alt="bank offer image" />
                <img src={img3} alt="bank offer image" />
                <img src={img4} alt="bank offer image" />
            </div>
        </div>

       
     
    )
}

export default BankOffer;
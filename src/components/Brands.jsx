import React from "react";
import '../css/brand.css'

function Brands() {

    return (
        <div style={{margin:'5% 12%'}}>
            <h2 style={{ width: '75vw', alignItems: 'left', color: 'white'}}>Why Croma? </h2>
            <div className="brands " style={{ display: 'flex', flexDirection: 'column',alignItems:'center' }}>
                <div className="homePageCommonCss" >
                    <img src="./images/Home/why_croma/img1.webp" style={{width:'75vw',padding:'0'}} alt="croma info image" />
                </div>

                <div className="brands homePageCommonCss">
                    <button className="brandsKey" >
                        <i className="fa-solid fa-less-than" style={{color:'white'}}></i>
                    </button>
                    <img src="./images/Home/why_croma/brands/img1.webp" alt="brand image" />
                    <img src="./images/Home/why_croma/brands/img2.webp" alt="brand image" />
                    <img src="./images/Home/why_croma/brands/img3.webp" alt="brand image" />
                    <img src="./images/Home/why_croma/brands/img4.webp" alt="brand image" />
                    <img src="./images/Home/why_croma/brands/img5.webp" alt="brand image" />
                    <img src="./images/Home/why_croma/brands/img6.webp" alt="brand image" />
                    <img src="./images/Home/why_croma/brands/img7.webp" alt="brand image" />
                    <img src="./images/Home/why_croma/brands/img8.webp" alt="brand image" />
                    <button className="brandsKey">
                        <i className="fa-solid fa-greater-than"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Brands
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-dark text-center text-white">
            <div className="p-4 row pt-3">
                <div className="col">
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 w-100 text-start p-5">
                        <h6 className="text-uppercase fw-bold mb-4 p-3"> <ion-icon name="snow-outline"></ion-icon> Contacto <ion-icon name="snow-outline"></ion-icon></h6>
                        <p><i><ion-icon name="map-outline"></ion-icon> CABA, San Isidro, AR</i></p>
                        <p><i><ion-icon name="mail-outline"></ion-icon> bairesvrv@gmail.com</i></p>
                    </div>
                </div>
                <div className="col d-flex justify-content-center align-items-center">
                    <img src="../../public/img/LOGOS/01.png" width={100} height={100} alt="photo"></img>
                </div>
                <div className="mb-4 col d-flex flex-row text-end align-items-center justify-content-end">
                    <Link className="btn btn-outline-light btn-floating m-1"><ion-icon name="logo-whatsapp"></ion-icon></Link>
                    <Link className="btn btn-outline-light btn-floating m-1"><ion-icon name="logo-twitter"></ion-icon></Link>
                    <Link className="btn btn-outline-light btn-floating m-1"><ion-icon name="logo-google"></ion-icon></Link>
                    <Link className="btn btn-outline-light btn-floating m-1"><ion-icon name="logo-instagram"></ion-icon></Link>
                    <Link className="btn btn-outline-light btn-floating m-1"><ion-icon name="logo-linkedin"></ion-icon></Link>
                </div>
                <div>
                    <div>
                        <p>© todos los derechos a buenosairesvrv</p>
                        <p> developers www.codecraze.com </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
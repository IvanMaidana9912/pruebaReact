import { Link } from "react-router-dom";
import { Animation } from "./Animation/Animation"

export const Footer = () => {
    return (
        <div className="w-100">
            <div>< Animation /></div>
            <div className="p-4 row pt-3 bg-dark text-center text-white">
                <div className="col">
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 w-100 text-center p-5">
                        <h6 className="text-uppercase fw-bold mb-4 p-3"> <ion-icon name="snow-outline"></ion-icon>Contact Us<ion-icon name="snow-outline"></ion-icon></h6>
                        <p><i><ion-icon name="map-outline"></ion-icon> Quilmes, Buenos Aires, AR</i></p>
                        <p><i><ion-icon name="mail-outline"></ion-icon> bairesvrv@gmail.com</i></p>
                    </div>
                </div>
                <div className="col d-flex justify-content-center align-items-center mb-5">
                    <Link to={"/"}>
                        <img className="footerImg" onClick={() => { console.log("DEJAME DE CLICKEAR!!") }} src="https://i.imgur.com/FfB5Z41.jpg" width={100} height={100} alt="photo"></img>
                    </Link>
                </div>
                <div className="mb-4 col d-flex flex-row text-end align-items-center justify-content-center">
                    <Link onClick={() => { window.open("https://web.whatsapp.com/", '_blank') }} className="btn btn-outline-light btn-floating m-1"><ion-icon name="logo-whatsapp"></ion-icon></Link>
                    <Link onClick={() => { window.open("https://twitter.com/?lang=es", '_blank') }} className="btn btn-outline-light btn-floating m-1"><ion-icon name="logo-twitter"></ion-icon></Link>
                    <Link onClick={() => { window.open("https://www.google.com/", '_blank') }} className="btn btn-outline-light btn-floating m-1"><ion-icon name="logo-google"></ion-icon></Link>
                    <Link onClick={() => { window.open("https://www.instagram.com/", '_blank') }} className="btn btn-outline-light btn-floating m-1"><ion-icon name="logo-instagram"></ion-icon></Link>
                    <Link onClick={() => { window.open("https://www.linkedin.com/feed/", '_blank') }} className="btn btn-outline-light btn-floating m-1"><ion-icon name="logo-linkedin"></ion-icon></Link>
                </div>
                <div>
                    <div>
                        <p>© All Rights Reserved | Buenos Aires VRV</p>
                        <p onClick={() => { window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley") }}> developers www.codecraze.com </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

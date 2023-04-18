import React, { useRef, useEffect } from 'react';

export const MapsFooter = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Crea el mapa de Google
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: -34.721872, lng: -58.255703 },
      zoom: 13,
    });

    // Crea un marcador en el mapa
    new window.google.maps.Marker({
      position: { lat: -34.721872, lng: -58.255703 },
      map,
      title: 'Quilmes',
    });
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ height: '100%', width: '100%' }}
    ></div>
  );
}

{/* <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=quilmes&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2yu.co">2yu</a><br><style>.mapouter{position:relative;text-align:right;height:100%;width:100%;}</style><a href="https://embedgooglemap.2yu.co/">html embed google map</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style></div></div> */}

//  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBS5_RwBOPwv72gIV505aJEVFsje6i5BBs"></script> 
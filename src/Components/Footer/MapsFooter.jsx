export const MapsFooter = () => {
    return (
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe width={"100%"} height={"100%"} id="gmap_canvas" src="https://maps.google.com/maps?q=quilmes&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder={"0"} onScroll={false}  marginheight="0" marginwidth="0"></iframe>
                {/* <a href="https://2yu.co">2yu</a><br>
                <a href="https://embedgooglemap.2yu.co/">html embed google map</a> */}
                </div>
        </div>
    )
}


{/* 
El codigo que se copíó y luego se intentó adaptar, aun no se prueba

<div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=quilmes&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2yu.co">2yu</a><br><style>.mapouter{position:relative;text-align:right;height:100%;width:100%;}</style><a href="https://embedgooglemap.2yu.co/">html embed google map</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style></div></div> 

*/}
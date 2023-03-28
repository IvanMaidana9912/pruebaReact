import React from "react";
import dataAnimation from './json/dataAnimation.json'

const Gift = () => {
    return (
        <div className="classFooter3">
            <div className="classFooter">
                <div>
                    <img className="classFooter2" src={dataAnimation[0].animation[0]} alt={"animation"} />
                </div>
                <div>
                    <img className="classFooter2" src={dataAnimation[0].animation[0]} alt={"animation"} />
                </div>
                <div>
                    <img className="classFooter2" src={dataAnimation[0].animation[0]} alt={"animation"} />
                </div>
            </div>
            <div>
                <img className="classFooter1" src={dataAnimation[0].animation[1]} alt={"animation"} />
            </div>
        </div>
    )
}

export default Gift
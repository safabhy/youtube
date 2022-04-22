import React from "react";
import { videosData } from "../Data";
function Videos() {
    console.log("Videos", videosData);
    return (
        <div>
            {videosData.map((videos) => (
               
                <div className="cards">
                    <div className="card-videos">

                    <iframe width="360" height="215" src={videos.src} ></iframe>
                   
                    </div>
                   
                    <br></br>
                    <div className="card-contents">
                        <h3>{videos.name}</h3>
                    </div>
                </div>
                
            ))}
        </div>
    );
}

export default Videos;
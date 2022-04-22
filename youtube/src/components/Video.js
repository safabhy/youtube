import React from "react";

import { videoData } from "../Data";
function Video() {
    console.log("Video", videoData);
    return (
        <div>
            {videoData.map((video) => (
                <div className="card">
                    <div className="card-video">
                    <iframe width="800" height="400" src={video.src}  ></iframe>     
                      
                    </div>
                    <br></br>
                    <div className="card-content">
                        <h3>{video.name}</h3>
                       
                    </div>
                </div>
                
            ))}
        </div>
    );
}

export default Video;
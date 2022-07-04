import React from "react";
import { IProject } from "../../../../constants/config-types";
export function RAPT(props:{item:IProject}){
  return <div>
    <h3 style={{textAlign:'center'}} >{props.item.name}</h3>
    <p>
      RAPT is a project I worked on during my internship with Radiance Technologies
    </p>
    <p>
      RAPT is a C# MVVM GUI predominantly featuring a map with several side panels showing live data. The GUI allowed the operator to automate the tracking of an aircraft using pan and tilt cameras.
    </p>
    <p>
      The user would mark the location of various cameras, as well as poly line obstruction zones. Once the area was created, the user could mark out the desired route for an aircraft to travel. The GUI could then simulate the aircraft and show how the software would control the cameras. It would choose among the cameras available depending on distance, obstacles and camera type.
    </p>
    <p>
      Once the user was satisfied, the area’s layout and the route could be saved on independent files, allowing either can be reused independently. During live mode, the software would send control messages to switch which camera is live and set its target pitch and yaw.
    </p>
    <p>
      The code I wrote involved detecting when a camera’s FOV would intersect with an obstruction, encoding/decoding messages, unit tests, a C++ driver to interface with a synced clock, camera zoom optimization dependent on camera type, and a separate message sequence timeline application for testing the main software. Besides, a multitude of bug fixes throughout the system.
    </p>
  </div>
}
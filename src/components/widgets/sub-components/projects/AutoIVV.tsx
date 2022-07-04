import React from "react";
import { IProject } from "../../../../constants/config-types";
export function AutoIVV(props:{item:IProject}){
  return <div>
    <h3 style={{textAlign:'center'}} >{props.item.name}</h3>
    <p>
        After my internship I did Independent Verification and Validation (IVV) work. 
    </p>
    <p>
        The work was dry, boring, but perfect for people waiting to retire. The contract changed hands every few years, and it was 
        Radiance's turn to hold the big stick and be the prime contractor.
    </p>
    <p>
        The contract changing hands was just a dance, because the majority of the workers just swapped badges and worked for
        whatever company was prime that year. It gave them raises and the new company the manpower required to maximize the budget.
        Nothing really <strong>changed</strong>.
    </p>
    <p>
        During my long, long time there I worked on a side project to keep myself entertained. It was a Java App that loaded several files
        that I was suppose to cross-compair to determine if the software was working as documented. These documents were dozens of pages long, 
        and difficult to search though. I did the obvious thing and automated my job. Sure, I had to actually investigate any errors that popped up,
        but that was preferable over the tedium of crawing through scanned pdfs. Fortuantely, covid allowed me to work remote but when 
        my company lost the contract I decided it was time to move on and find an actually development job.
    </p>
  </div>
}
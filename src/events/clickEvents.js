import dom from "../dom.js";
import { starthandlr,stophandlr,resethandlr } from "../handlers/handler.js";

//button startevent
const startevent = dom.startBtn.addEventListener('click',starthandlr)

//button stopevent
const stopevent = dom.stopBtn.addEventListener('click',stophandlr)


//button restevent 
const resetevent = dom.resetBtn.addEventListener('click',resethandlr)

export{startevent,stopevent,resetevent}




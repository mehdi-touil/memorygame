import React, { useState } from "react";
import Item from "./Item";
import uniqid from "uniqid";
import * as IMAGES from "../images/icons";
export default function Choicepanel(props) {
 const [selectedchoices, setSelectedChoices] = useState([]);

 return (
  <div className="choicepanel">
   <Item
    image={IMAGES.kali}
    id={uniqid()}
    selectchoice={setSelectedChoices}
    selectedchoices={selectedchoices}
   />
   <Item
    image={IMAGES.kali}
    id={uniqid()}
    selectchoice={setSelectedChoices}
    selectedchoices={selectedchoices}
   />
   <Item
    image={IMAGES.kali}
    id={uniqid()}
    selectchoice={setSelectedChoices}
    selectedchoices={selectedchoices}
   />
   <Item
    image={IMAGES.kali}
    id={uniqid()}
    selectchoice={setSelectedChoices}
    selectedchoices={selectedchoices}
   />
   <Item
    image={IMAGES.kali}
    id={uniqid()}
    selectchoice={setSelectedChoices}
    selectedchoices={selectedchoices}
   />
   <Item
    image={IMAGES.kali}
    id={uniqid()}
    selectchoice={setSelectedChoices}
    selectedchoices={selectedchoices}
   />
   <Item
    image={IMAGES.kali}
    id={uniqid()}
    selectchoice={setSelectedChoices}
    selectedchoices={selectedchoices}
   />
   <Item
    image={IMAGES.kali}
    id={uniqid()}
    selectchoice={setSelectedChoices}
    selectedchoices={selectedchoices}
   />
  </div>
 );
}

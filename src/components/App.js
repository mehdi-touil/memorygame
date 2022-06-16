import React, { useEffect, useState } from "react";
import Item from "./Item";
import uniqid from "uniqid";
import * as IMAGES from "../images/icons";
import Footer from "./Footer";
import Pageheader from "./Pageheader";
export default function App(props) {
 const [score, setScore] = useState(0);
 const [bestscore, setBestscore] = useState(0);
 const [selectedchoices, setSelectedChoices] = useState([]);
 const [elements, setElements] = useState(Object.entries(IMAGES));
 const randomdisplay = () => {
  var newelements = [];
  var usedpos = [];
  for (let index = 0; index < elements.length; index++) {
   do {
    var i = Math.floor(Math.random() * elements.length);
   } while (usedpos.includes(i));
   usedpos.push(i);
   newelements[i] = elements[index];
  }
  setElements(newelements);
 };
 useEffect(() => {
  randomdisplay();
 }, []);

 return (
  <div id="maincontainer">
   <Pageheader score={score} bestscore={bestscore} />
   <div className="choicepanel">
    {elements.map(([key, value]) => (
     <Item
      randomdisplay={randomdisplay}
      key={uniqid()}
      image={value}
      id={key.toString()}
      setSelectedChoices={setSelectedChoices}
      selectedchoices={selectedchoices}
      score={score}
      setScore={setScore}
      bestscore={bestscore}
      setBestscore={setBestscore}
      text={key}
     />
    ))}
   </div>
   <Footer />
  </div>
 );
}

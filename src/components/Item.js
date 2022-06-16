import React from "react";

export default function Item(props) {
 return (
  <div
   className="item"
   onClick={() => {
    props.randomdisplay();
    if (props.selectedchoices.includes(props.id)) {
     props.setSelectedChoices([]); //empty my choices
     props.setScore(0);
     props.setBestscore(
      props.bestscore < props.score ? props.score : props.bestscore
     ); //change best score if it should be
    } else {
     props.setSelectedChoices([...props.selectedchoices, props.id]);
     props.setScore(props.score + 1);
    }
   }}
  >
   <div className="imgcontainer">
    {" "}
    <img src={props.image} alt="item" />
   </div>
   <div className="textcontainer">{props.text}</div>
  </div>
 );
}

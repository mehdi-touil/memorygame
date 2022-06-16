import React from "react";

export default function Pageheader(props) {
 return (
  <div className="header">
   <div className="headertitle">Memory Game</div>
   <div className="score">score:{props.score}</div>{" "}
   <div className="bestscore">bestscore:{props.bestscore}</div>
  </div>
 );
}

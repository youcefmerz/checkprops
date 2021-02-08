import React from 'react';
import PropTypes from "prop-types";

function Profil(props) {
  const styleDiv1={display:"flex"}
  const styleDiv2={padding:"10px"}
  const butstyle = {position:"relative",left:"20px"}
  return (
   <div style={styleDiv1}>
    <div style={styleDiv2}>
   <img src={props.children} alt="" width="140" height="180"/>
   <button onClick={() => props.handleName(props.name)}style={butstyle} >ClickMe</button>
    </div>
   <div style={styleDiv2}>
   <h5>{props.name}</h5>
   <p>{props.bio}</p>
   <p>{props.profession}</p>
   </div>
     </div>
  );
}
Profil.defaultProps = {
    name: "Youcef Merzougui",
    bio:`Hi, my name is youcef MERZOUGUI ,iam 22 years old , i live in algeria,
    i am a camputer sciences student`,
    profession:"Développer",
    children:"/snap.jpg"

   };
   Profil.propTypes = {
    bio: PropTypes.string,
    name: PropTypes.string,
    children: PropTypes.string,
    handleName: PropTypes.func
   };
export default Profil;

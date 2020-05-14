import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { Media } from "reactstrap";
import gif from "../media/MultiMedia.gif";
import img from "../media/LogoAllAIPNG.png";
import svg from "../media/LogoAllAI.svg"

const WithReactstrap = () => {
  const [image, setImage] = useState();

  /* SIZE CAN CHANGE */
  const imgStyle = {
    maxHeight: 128,
    maxWidth: 128
  }

  return (
    <div>
      <Media>
        <Media left>
          <Media
            object
            src={gif}
            alt="Generic placeholder image"
            style={imgStyle}
          />
        </Media>
        <Media body>
          <Media heading>Media heading</Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
    </div>
  );
};

export default WithReactstrap;

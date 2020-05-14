import React, { useState } from "react";
import { Galleria } from "primereact/galleria";
import { Button } from "primereact/button";
import gif from "../media/MultiMedia.gif";
import img from "../media/LogoAllAIPNG.png";

import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const WithPrime = () => {
  const [image, setImage] = useState([
    {
      previewImageSrc: "./logo.svg",
      thumbnailImageSrc: "logo.svg",
      alt: "Description for Image 1",
      title: "Title 1",
    },
  ]);

  const itemTemplate = (item) => {
    return (
      <div className="p-grid p-nogutter p-justify-center">
        <img src={`${item.thumbnailImageSrc}`} alt={item.alt} />
      </div>
    );
  };

  const previewTemplate = (item) => {
    return (
      <img
        src={`${item.previewImageSrc}`}
        alt={item.alt}
        style={{ width: "100%" }}
      />
    );
  };

  return (
    <div className="galleria-demo">
      <div className="content-section introduction">
        <div className="feature-intro">
          <h1>Galleria</h1>
          <p>Galleria is a content gallery component.</p>
        </div>
      </div>

      <div className="content-section implementation">
        <Galleria
          value={image}
          previewItemTemplate={previewTemplate}
          thumbnailItemTemplate={itemTemplate}
        />
      </div>
    </div>
  );
};

export default WithPrime;

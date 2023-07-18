import React from "react";
import { useParams } from "react-router-dom";

const MoreDetail = ({ tab }) => {
  const params = useParams();
  const mov = tab.find((el) => el.id === Number(params.id));
  return (
    <div style={{ width: "600", height: "600", border: "solid pink 1px" }}>
      <iframe
        width="560"
        height="315"
        src={mov.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p
        style={{
          color: "white",
          width: "560px",
          textAlign: "center",
          marginLeft: "400px",
        }}
      >
        {mov.desc}
      </p>
    </div>
  );
};

export default MoreDetail;

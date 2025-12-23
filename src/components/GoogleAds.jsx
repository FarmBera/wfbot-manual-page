import { React, useEffect } from "react";

const GoogleAds = ({
  className = "adsbygoogle",
  client = "",
  slot = "",
  format = "",
  responsive = "",
  layoutKey = "",
}) => {
  useEffect(() => {
    if (process.env.NODE_ENV === "production")
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        // console.log("Advertise is pushed");
      } catch (e) {
        console.error("AdvertiseError", e);
      }
  }, []);

  // show alternative position
  if (process.env.NODE_ENV !== "production")
    return (
      <div
        style={{
          background: "#e9e9e9",
          color: "black",
          fontSize: "18px",
          fontWeight: "bold",
          textAlign: "center",
          padding: "16px",
        }}
      >
        Advertisement
      </div>
    );

  return (
    <ins
      className={className}
      style={{
        overflowX: "auto",
        overflowY: "hidden",
        display: "block",
        textAlign: "center",
      }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive}
      data-ad-layout-key={layoutKey}
    />
  );
};

export default GoogleAds;

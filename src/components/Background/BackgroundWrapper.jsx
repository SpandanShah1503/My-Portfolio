import React, { memo } from "react";
import Background from "../Background/Background";

const BackgroundWrapper = memo(() => {
  return (
    <Background
      hueShift={251}
      noiseIntensity={0}
      scanlineIntensity={0}
      scanlineFrequency={0}
      warpAmount={0}
      speed={1.2}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: -10,
      }}
    />
  );
});

export default BackgroundWrapper;
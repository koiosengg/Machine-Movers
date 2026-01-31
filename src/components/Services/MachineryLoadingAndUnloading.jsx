import React from "react";
import Banner from "./MachineryLoadingAndUnloading/Banner";
import Sectors from "./HeavyMachineLiftingAndShifting/Sectors";
import Services from "./MachineryLoadingAndUnloading/Services";
import Equipment from "./HeavyMachineLiftingAndShifting/Equipment";
import Infrastructure from "./HeavyMachineLiftingAndShifting/Infrastructure";
import Safety from "./HeavyMachineLiftingAndShifting/Safety";
import Move from "../Home/Move";
import Standards from "./HeavyMachineLiftingAndShifting/Standards";
import Gear from "./HeavyMachineLiftingAndShifting/Gear";
import Yellow from "../Home/Yellow";
import Excel from "./HeavyMachineLiftingAndShifting/Excel";
import Clients from "../Home/Clients";
import Offerings from "./HeavyMachineLiftingAndShifting/Offerings";
import FAQ from "../Home/FAQ";
import Ready from "../Home/Ready";

function MachineryLoadingAndUnloading() {
  return (
    <>
      <Banner />
      <Sectors />
      <Services />
      <Equipment />
      <Infrastructure />
      <Safety />
      <Move />
      <Standards />
      <Gear />
      <Yellow />
      <Excel />
      <Clients />
      <Offerings />
      <FAQ />
      <Ready />
    </>
  );
}

export default MachineryLoadingAndUnloading;

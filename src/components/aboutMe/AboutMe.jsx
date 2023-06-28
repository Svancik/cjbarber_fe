import React from "react";
import "./aboutMe.css";

export const AboutMe = () => {
  return (
    <div className="aboutMeWrapper">
      {" "}
      <h1>KDO JSEM</h1>
      <hr className="headerUnderline" />
      <div className="aboutMe">
        <div className="left">
          {" "}
          <img src={require("../../media/samb.png")} alt="" />
        </div>
        <div className="right">
          <h2>Sam</h2>
          <span>Jmenuji se SAM a rád si o víkendu ujíždim na speedu.</span>{" "}
          <br />
          <span>
            Ačkoliv speed miluju, tak když v ruce držím holičský strojek, nikam
            nespěchám a nechávám si záležet na tom, abyste z mého babershopu
            odešli plný sebevědomí.
          </span>{" "}
          <br />
          <br />
          <span>
            Spokojenost zákazníků je pro mne prioritou, proto se vám snažím
            zajistit maximální komfort a v mém holičství je k nalezení sortiment
            začínající od lahodných drinků, elektronické cigarety až po čáru
            speedu pro zlaté členy klubu CJ´s barbershop.
          </span>
          <br />
          <br />
          <span>
            Svěřte mi do rukou vaši visáž a věřte mi, že si budete chtít rezervovat další návštěvu, která pro vás nebude pouhým ostříháním,
            ale také důvtipnou konverzací, posloucháním neurofunku a naladěním na mou věčně pozitivní energii.
          </span>
        </div>
      </div>
    </div>
  );
};

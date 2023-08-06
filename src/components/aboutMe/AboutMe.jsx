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
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>{" "}
          <br />
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            dolorem repellendus nesciunt id exercitationem veritatis optio quis
            in delectus, quasi incidunt nulla, cum qui porro tempora commodi nam
            reiciendis!
          </span>{" "}
          <br />
          <br />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            officia eum, vitae molestias pariatur fuga, repellat quo rerum
            molestiae nemo similique facere debitis quod enim sapiente quisquam
            reiciendis natus ipsa perferendis maxime autem labore et. Aspernatur
            nobis at dolores commodi dolorum totam asperiores accusantium culpa.
          </span>
          <br />
          <br />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            doloribus pariatur maiores incidunt sunt rem vel velit error
            veritatis laborum! Rerum, in a tenetur autem adipisci mollitia et
            quos fugit.
          </span>
        </div>
      </div>
    </div>
  );
};

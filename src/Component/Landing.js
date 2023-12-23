import React, { Component } from "react";
import Lander from "../Assets/img/GDSC Photo.png";
import "../Assets/css/landing.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default class Landing extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
    AOS.init({ duration: 4000 });
  }

  componentDidMount() {
    this.props.setProgress(20);
  }

  render() {
    return (
      <div className="banner-landing" data-aos="zoom-in" data-aos-delay="300">
        <img src={Lander} alt="logo" className="gdsc-landing-logo" />
        {/* SP(40) - Remove this line */}
      </div>
    );
  }
}

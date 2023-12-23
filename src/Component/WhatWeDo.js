import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default class WhatWeDo extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
    AOS.init({ duration: 4000 });
  }

  componentDidMount() {
    // Call the setProgress function with the value 60 to update the progress
    this.props.setProgress(50);
  }

  render() {
    const data = [
      {
        title: "Seminars",
        text: "A necessary kick to propel students towards innovation and learning. Seminars will offer insight into upcoming and trending technologies.",
        img: require("../Assets/img/wedsem.png"),
      },
      {
        title: "Hackathons",
        text: "Problem-solving skills to test and win amazing prizes by participating in hackathons and creating solutions that benefit mankind.",
        img: require("../Assets/img/wedhack.png"),
      },
      {
        title: "Workshops",
        text: "Gain hands-on learning experience on a particular topic and acquire knowledge by implementation under the guidance of experts.",
        img: require("../Assets/img/wedwerench.png"),
      },
      {
        title: "Projects",
        text: "Give life to your ideas. Build amazing projects with the team’s support and guidance and gain expertise. Explore out of your circle along the way.",
        img: require("../Assets/img/wedmanage.png"),
      },
      {
        title: "Study Jams",
        text: "Learn new skills with people having similar interests. Engage in community and get the chance to receive certificates upon completion.",
        img: require("../Assets/img/Framewed.png"),
      },
      {
        title: "Community",
        text: "Become a part of a community that consists of people who strive for excellence. Develop your interpersonal skills and reach your prime.",
        img: require("../Assets/img/partwed.png"),
      },
    ];

    return (
      <div className="testimonial-area-l-13 position-relative overflow-hidden z-index-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-11">
              <div className="row" data-aos="fade-up">
                <div className="col-md-12">
                  <div className="section-heading-7 text-center text-black font-face-bold">
                    <div className="flex">
                      <h2 className="what-we-do">What we do at</h2>
                      <h2 className="G">G</h2>
                      <h2 className="D">D</h2>
                      <h2 className="S">S</h2>
                      <h2 className="C">C</h2>
                      <h2>?</h2>
                    </div>
                  </div>
                  <div className="section-heading-7 text-left text-black font-face-lighter">
                    <h5>
                      As members of a Google Developer Student Club (GDSC), we engage in a dynamic tech community, participating in workshops, hackathons, and coding challenges to enhance our skills. We welcome guest speakers who share insights into emerging technologies and career paths. Our focus on projects with social impact and open-source contributions fosters collaborative learning. We explore Google technologies and have opportunities for leadership roles. Community outreach, networking, and personal growth are integral to our GDSC experience.
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="row testimonial-area-l-13-items justify-content-center"
                data-aos="fade-up"
                data-aos-duration={800}
                data-aos-once="true"
              >
                {data.map((item, index) => {
                  return (
                    <div className="col-xl-4 col-md-6 col-sm-8" data-aos="fade-up">
                      <div className="testimonial-card text-white font-face-lighter">
                        <div className="d-flex customer-identity">
                          <div className="customer-img">
                            <img src={item.img} alt="imageerror" />
                          </div>
                          <div className="content-body text-black">
                            <h5>{item.title}</h5>
                          </div>
                        </div>
                        <p className="text-center text-black ">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-shape-3" />
      </div>
    );
  }
}

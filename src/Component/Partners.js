import React, { Component } from "react";
import "../Assets/css/partners.css";
import "aos/dist/aos.css";
import AOS from "aos";


export default class Partners extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
    AOS.init({ duration: 4000 });
  }

  componentDidMount() {
    this.props.setProgress(70);
  }
  render() {
    return (
      <>
        <section className="text-gray-600 body-font" style={{ position: "relative", "--v-offset": "0px", "--curve-height": "0px" }}>
          <div className="container px-5 py-24 mx-auto flex flex-wrap" style={{ padding: "0px" }}>
            <div className="flex w-full mb-20 flex-wrap">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4" style={{ fontSize: "73px", marginTop: "43px" }}>Chapter Photos</h1>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-contain h-full object-center block" src="https://dummyimage.com/500x300" />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-contain h-full object-center block" src="https://dummyimage.com/501x301" />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img alt="gallery" className="w-full object-contain h-full object-center block" src="https://dummyimage.com/600x360" />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img alt="gallery" className="w-full object-contain h-full object-center block" src="https://dummyimage.com/601x361" />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-contain h-full object-center block" src="https://dummyimage.com/502x302" />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-contain h-full object-center block" src="https://dummyimage.com/503x303" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

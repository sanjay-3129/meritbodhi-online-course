import React, { useState } from "react";
const CarouselImages = (props) => {
  return (
    <>
      <section className="home_sect">
        <div className="container-fluid p-0">
          <div id="demo" className="carousel slide" data-ride="carousel">
            {/* <!-- The slideshow --> */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  style={{ width: "100%", height: "100vh" }}
                  className="img-fluid"
                  src={props?.carousel?.banner1 || "/images/bg.jpg"}
                  alt="Carousel_Image"
                />
                <div className="img_overlay"></div>
                <div className="carousel-caption">
                  <h1>
                    {props?.carousel?.bannerText1 || "You Can Learn Anything"}
                  </h1>
                  <h6>
                    {props?.carousel?.bannerDesc1 || "You Can Learn Anything"}
                  </h6>
                  {/* <img
                    className="carousel-img"
                    src="/images/hicon1.png"
                    alt="Icon"
                  /> */}

                  <a href={props?.carousel?.bannerLink1}>
                    <button className="btn btn-primary">Learn More</button>
                  </a>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="img-fluid"
                  style={{ width: "100%", height: "100vh" }}
                  src={props?.carousel?.banner2 || "/images/bg2.jpg"}
                  alt="Carousel_Image"
                />
                <div className="img_overlay"></div>
                <div className="carousel-caption">
                  <h1>
                    {props?.carousel?.bannerText2 ||
                      "Self Education Resources & Infos"}
                  </h1>
                  <h6>
                    {props?.carousel?.bannerDesc2 ||
                      "Self Education Resources & Infos"}
                  </h6>
                  {/* <img
                    className="carousel-img"
                    src="/images/hicon2.png"
                    alt="Icon"
                  /> */}
                  <a href={props?.carousel?.bannerLink2}>
                    <button className="btn btn-primary">Learn More</button>
                  </a>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="img-fluid"
                  style={{ width: "100%", height: "100vh" }}
                  src={props?.carousel?.banner3 || "/images/bg3.jpg"}
                  alt="Carousel_Image"
                />
                <div className="img_overlay"></div>
                <div className="carousel-caption">
                  <h1>
                    {props?.carousel?.bannerText3 || "Find The Best Courses"}
                  </h1>
                  <h6>
                    {props?.carousel?.bannerDesc3 || "Find The Best Courses"}
                  </h6>
                  {/* <img
                    className="carousel-img"
                    src="/images/hicon4.png"
                    alt="Icon"
                  /> */}
                  <a href={props?.carousel?.bannerLink3}>
                    <button className="btn btn-primary">Learn More</button>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Left and right controls --> */}
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
              <span className="carousel-control-next-icon"></span>
            </a>
          </div>
          <div className="over_content">
            <p>
              {/* <span>MertBodhi</span> */}
              {/* Choose From A Range Of <span>Online Courses</span> */}
            </p>
            {/* <AlgoliaSearch /> */}
            {/* <p className="under_q">
              Technology is bringing a massive way of evolution on Learning
              Things on different ways.
            </p> */}
          </div>
          {/* <!-- Go to section --> */}
          <div className="scrollbtn">
            <a className="link" href="#ourcourse">
              <div className="outer">
                <div className="middle">
                  <div className="inner">
                    <span>
                      <i className="fas fa-long-arrow-alt-down"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* <!-- ------------ --> */}
        </div>
      </section>
    </>
  );
};
export default CarouselImages;

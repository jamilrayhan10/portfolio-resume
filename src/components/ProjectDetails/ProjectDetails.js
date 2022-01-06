import React from "react";
import "./ProjectDetails.css";
import Menubar from "../Shear/Menubar/Menubar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// slider image
import clock from "../images/portfolio/clock.png";
import user from "../images/portfolio/user.png";
import admin from "../images/portfolio/admin.png";

// traveling
import traveling from "../images/portfolio/traveling.png";
import traveling_user from "../images/portfolio/traveling_user.png";
import traveling_about from "../images/portfolio/traveling_about.png";

// health care
import doctor from "../images/portfolio/doctor.png";
import doctor_team from "../images/portfolio/doctor_team.png";
import doctor_tes from "../images/portfolio/doctor_test.png";

// honda
import honda from "../images/portfolio/bootstrap.png";
import news from "../images/portfolio/bt_new.png";
import price from "../images/portfolio/bt_price.png";

const ProjectDetails = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    height: "400px",
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div>
      <Menubar />
      <div
        className="container pt-5 mt-5"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h2 className="text-center text-uppercase display-3">My Project</h2>
        <div className="row border py-4 my-4">
          <div className="col-lg-6 ">
            <div className="slider ">
              {/* <img src={clock} className="img-fluid" alt="" /> */}
              <div className="p-4">
                <Slider {...settings}>
                  <div className="slider_project">
                    <img src={clock} className="img-fluid " alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={user} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={admin} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={clock} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={user} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={admin} className="img-fluid" alt="" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h2>Clock Website</h2>
            <ul>
              <li>
                Users can order a watch if they want, in which case they must
                login first. After ordering, he will go to the dashboard and see
                it. If he wants, he can delete it.
              </li>
              <li>
                Users can give reviews if they want. And after giving the
                review, it can be seen on the home page.
              </li>
              <li>
                Have an admin and user dashboard. Admin can delete, add, manage
                services.
              </li>
              <p>
                <b>Technology:</b> React.js, Bootstrap, MongoDB, Express.js,
                Node.js, Private route, Firebase Authentication.
              </p>
            </ul>

            <div className="project_code">
              <a
                href="https://jamilrayhan-clock-website.web.app/"
                target="_blank"
              >
                Live Link
              </a>
              <a
                href="https://github.com/rjamil336/MERN_STACK_PROJECT"
                target="_blank"
              >
                Clint Code
              </a>
              <a
                href="https://github.com/rjamil336/CLOCK_WEBSITE_SERVER_SITE"
                target="_blank"
              >
                Server Code
              </a>
            </div>
          </div>
        </div>
        <div className="row border py-4 my-4">
          <div className="col-lg-6 ">
            <div className="slider ">
              {/* <img src={clock} className="img-fluid" alt="" /> */}
              <div className="p-4">
                <Slider {...settings}>
                  <div className="slider_project">
                    <img src={traveling} className="img-fluid " alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={traveling_user} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={traveling_about} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={traveling} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={traveling_user} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={traveling_about} className="img-fluid" alt="" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h2>Traveling website</h2>
            <ul>
              <li>
                If users want to go to Tore then login to him first. Then you
                have to complete the order with his address and phone number.
                And you can see it by going to my order. If he wants, he can
                delete it and cancel his order.
              </li>
              <li>
                Users need to login via Email and password or Google (also can
                create a new Account).
              </li>
              <li>Users can order a traveling tour .</li>
              <p>
                <b>Technology:</b> React.js, Bootstrap, MongoDB, Express.js,
                Node.js, Private route, Firebase Authentication.
              </p>
            </ul>

            <div className="project_code">
              <a href="https://travelin-assignment-11.web.app/" target="_blank">
                Live Link
              </a>
              <a
                href="https://github.com/rjamil336/travelin-website-react-js-client-side"
                target="_blank"
              >
                Clint Code
              </a>
              <a
                href="https://github.com/rjamil336/traveling-server"
                target="_blank"
              >
                Server Code
              </a>
            </div>
          </div>
        </div>
        <div className="row border py-4 my-4">
          <div className="col-lg-6 ">
            <div className="slider ">
              <div className="p-4">
                <Slider {...settings}>
                  <div className="slider_project">
                    <img src={doctor} className="img-fluid " alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={doctor_team} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={doctor_tes} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={doctor} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={doctor_team} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={doctor_tes} className="img-fluid" alt="" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h2>Traveling website</h2>
            <ul>
              <li>
                If users want to go to Tore then login to him first. Then you
                have to complete the order with his address and phone number.
                And you can see it by going to my order. If he wants, he can
                delete it and cancel his order.
              </li>
              <li>
                Users need to login via Email and password or Google (also can
                create a new Account).
              </li>
              <li>Users can order a traveling tour .</li>
              <p>
                <b>Technology:</b> React.js, Bootstrap, MongoDB, Express.js,
                Node.js, Private route, Firebase Authentication.
              </p>
            </ul>

            <div className="project_code">
              <a
                href="https://github.com/rjamil336/health-care-website"
                target="_blank"
              >
                Live Link
              </a>
              <a
                href="https://github.com/rjamil336/health-care-website"
                target="_blank"
              >
                Code Link
              </a>
            </div>
          </div>
        </div>
        <div className="row border py-4 my-4">
          <div className="col-lg-6 ">
            <div className="slider ">
              <div className="p-4">
                <Slider {...settings}>
                  <div className="slider_project">
                    <img src={honda} className="img-fluid " alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={news} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={price} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={honda} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={news} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={price} className="img-fluid" alt="" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h2>Honda website</h2>
            <ul className="pt-4">
              <li>this website creat with bootstrap 5.</li>
              <li>it is fully responsive for every device.</li>
              <li>use bootstrap accordion.</li>
              <p>
                <b>Technology:</b> Html, CSS, Bootstrap 5.
              </p>
            </ul>

            <div className="project_code mt-5">
              <a
                href="https://cranky-snyder-c81b35.netlify.app/"
                target="_blank"
              >
                Live Link
              </a>
              <a
                href="https://github.com/rjamil336/honda-bootstrap"
                target="_blank"
              >
                Code Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

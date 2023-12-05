import React from "react";
import "./Module.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carousal from "./Carousal";
import { productData, responsive } from "./data";
import Pricing from "./Pricingplan";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsTelephoneOutboundFill
} from "react-icons/bs";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const product = productData.map((item) => (
    <Carousal
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  const [menu] = useState("Navbar");
  return (
    <div className="Container">
      <section className="first">
        <div className="details">
          <div className="contact">
            <ul className="contactlist">
              <li>
              <BsTelephoneOutboundFill
                  style={{ fontSize: "12px", marginRight:'2px', color:'#5cad2f' }}
                  className="icon-nav invisible"
                />
                <a className="invisible" href="#">+92 306780089</a>
              </li>
              <li>
                <BsFillEnvelopeFill
                  style={{ fontSize: "12px", marginRight:'2px', color:'#5cad2f' }}
                  className="icon-nav invisible"
                />
                <a className="invisible" href="#">Hamzasher78000@gmail.com</a>
              </li>
              <li>
                <a className="invisible" href="#">Follow us ___ </a>
                <BsFacebook style={{ fontSize: "12px", color:'blue' }}className="icon-nav invisible"/>
                <BsInstagram style={{ fontSize: "12px", color:'pink' }}className="icon-nav invisible"/>
                <BsTwitter style={{ fontSize: "12px", color:'skyblue' }}className="icon-nav invisible"/>

              </li>
            </ul>
          </div>
          <div className="search">
            <ul className="searchlist">
              <li>
                <BsPersonCircle
                  style={{ fontSize: "12px", marginRight:'2px', color:'#5cad2f' }}
                  className="icon-nav"
                />
                <Link to="Login">Login</Link>
              </li>
              <li>
                <BsPersonCircle
                  style={{ fontSize: "12px", marginRight:'2px', color:'#5cad2f' }}
                  className="icon-nav"
                />
                <Link to="./Signup">Sign up</Link>
              </li>
              <li>
                <BsSearch style={{ fontSize: "12px", marginRight:'2px', color:'#5cad2f' }} className="icon-nav invisible" />
                <input
                  className="icon-search invisible"
                  type="text"
                  placeholder="search"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
       <header className="">
          <div className="logo ">
            <h2>
              <span className="v">S</span>mart <span className="v">V</span>2
              <span className="v">V</span> <span className="v">C</span>hain
            </h2>
          </div>
          <nav ref={navRef}>
            <a href="/#">Home</a>
            <a href="/#">About Us</a>
            <a href="/#">Product</a>
            <a href="/#">Contact</a>
            <button className="nav-btn nav-close-btn " onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn " onClick={showNavbar}>
            <FaBars />
          </button>
        </header>
      </section>

      <section>
        <div className="content1">
          <div className="side1">
            <h2>
              {" "}
              <span className="ev"> EV-Charging points </span>
              <br />
              for your bussiness{" "}
            </h2>{" "}
            <br />
            <p>
              Fusce ac justo ligula. Pellentesque ac metus a turpis bibendum
              scelerisque. <br /> Pellentesque ac orci eget urna vestibulum
              consequat rutrum vitae purus.
            </p>
            <br />
            <a className="char-btn" href="#">
              {" "}
              Get Charging
            </a>
          </div>
          <div className="side2">
            <img
              width="700"
              height="608"
              src="http://efuel.like-themes.com/wp-content/uploads/2018/08/slider-car-full.jpg"
              alt=""
              sizes="(max-width:1280) 100vw"
            />
          </div>
        </div>
      </section>

      <section className="section-carousal">
        <div className="Carousal">
          <h2 className="Carousal-h2">
            We are the leading developer <br /> and installer of
            <span> modern electric</span> <br />
            vehicle charging systems
          </h2>
          <Carousel showDots={true} responsive={responsive}>
            {product}
          </Carousel>
        </div>
      </section>

      <section className="content2">
        <div className="content2-h2">
          <h2>
            What advantages <span> will you get</span> <br /> using an electric
            car?
          </h2>
        </div>
        <div className="advantage">
          <div className="sub-advg">
            <div>
              <span className="icon">01</span>
              <h2 className="sub-advg-h2">High Quality</h2>
              <p className="sub-advg-p">
                Sed sed condimentum massa. Morbi <br /> auctor vestibulum urna,
                ut interdum.
              </p>
            </div>
            <div>
              <span className="icon">02</span>
              <h2 className="sub-advg-h2">Recoverable Energy</h2>
              <p className="sub-advg-p">
                Morbi auctor vestibulum urna, ut <br /> interdum ipsum maximus
                et.
              </p>
            </div>
            <div>
              <span className="icon">03</span>
              <h2 className="sub-advg-h2">Smart Connected</h2>
              <p className="sub-advg-p">
                Vestibulum urna, ut interdum ipsum <br /> maximus et. Sed sed
                condimentum.
              </p>
            </div>
          </div>
          <div className="advg-img">
            <img
              src="	http://efuel.like-themes.com/wp-content/uploads/2018/08/advantage-1-1.png"
              alt=""
            />
          </div>
          <div className="sub-advg">
            <div>
              <span className="icon">04</span>
              <h2 className="sub-advg-h2">Quick Installations</h2>
              <p className="sub-advg-p">
                Sed sed condimentum massa. Morbi <br /> auctor vestibulum urna
              </p>
            </div>
            <div>
              <span className="icon">05</span>
              <h2 className="sub-advg-h2">Free Support</h2>
              <p className="sub-advg-p">
                Morbi auctor vestibulum urna, ut <br /> interdum ipsum maximus
                et.
              </p>
            </div>
            <div>
              <span className="icon">06</span>
              <h2 className="sub-advg-h2">Access Control</h2>
              <p className="sub-advg-p">
                Vestibulum urna, ut interdum ipsum <br /> maximus et. Sed sed
                condimentum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Pricing>{Pricing}</Pricing>
      </section>

      <section className="section-carousal">
        <div className="Carousal">
          <h2 className="Carousal-h2">Our Patners</h2>
          <Carousel showDots={true} responsive={responsive}>
            {product}
          </Carousel>
        </div>
      </section>

      <section className="footer-section">
        <div className="footer-section1">
          <div className="logo footer">
            <img src="" alt="" />
            <h2>
              <span className="v">S</span>mart <span className="v">V</span>2
              <span className="v">V</span> <span className="v">C</span>hain
            </h2>
          </div>
          <div className="fotter-flex">
            <div className="footer-p">
              <h2>About Us</h2>
              <p>
                Integer maximus accumsan nunc, sit amet tempor lectus facilisis
                eu. <br /> Cras vel elit felis. Vestibulum convallis ipsum id
                aliquam varius.
              </p>
            </div>

            <div class="f_title">
              <h3>Newsletter</h3>
              <p>Stay updated with our latest trends</p>
              <form action="">
                <input
                  className="input-t"
                  type="text"
                  placeholder="Enter Email Address"
                />
              </form>
            </div>

            <div className="follow-up">
              <h2>Follow up</h2>
              <p>Let us be Social</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;

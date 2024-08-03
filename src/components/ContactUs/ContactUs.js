import React from "react";
import styled from "styled-components";

const Outer = styled.div`
  //   background-color: #0f141c;

  background-image: url(./assets/home-bg.jpg);
  width: 100%;
  border-radius: 0;
  padding: 100px 0px;
  color: #fff;
`;
const OuterBottom = styled.div`
  background-color: #0f141c;
  width: 100%;
  border-radius: 0;
  padding-bottom: 100px;
  color: #fff;
  border-bottom: 2px solid #63636385;
`;
const Container = styled.div`
  margin: 0px 106px;
  display: flex;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  .main {
    margin-bottom: 5%;
    .heading {
      text-align: center;
      p {
        background: linear-gradient(90deg, #ff7d61, #ffdb59);
        background: linear-gradient(90deg, #ff7d61 0, #ffdb59 100%);
        background-clip: text;
        font-size: 20px;
        font-weight: 500;
        line-height: 20px;
        color: transparent;
        margin-bottom: 5px;
      }
      h2 {
        color: #fff;
        font-size: 48px;
        font-weight: 700;
        line-height: 64px;
        padding-bottom: 30px;
        text-align: center;
      }
    }
  }
  .mainBottom {
    display: flex;
    gap: 50px;
    width: 100%;
    margin-top: -10%;
    .left {
      border-radius: 30px;
      background: #171b22;
      padding: 40px;
      width: 70%;
      button {
        border: 1px solid #ff7d61;
        padding: 13px 0px;
        border-radius: 10px;
        width: 200px;
        margin-top: 10px;
        background: transparent;
        color: #ff7d61;
      }
      .flex {
        display: flex;
        gap: 20px;
        margin: 20px 0px;
        width: 100%;
        .form {
          display: flex;
          flex-direction: column;
          width: 100%;
          label {
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
            background: linear-gradient(90deg, #ff7d61 0%, #ffdb59 100%);
            background-clip: text;
            color: transparent;
            padding-bottom: 5px;
          }
          input {
            border-radius: 10px;
            background: #0f141c;
            border: none;
            // width: 100%;
            height: 20px;
            padding: 16px 20px;
            color: #fff;
            font-family: "DM Sans", sans-serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
            margin-top: 10px;
          }
          textarea {
            border-radius: 10px;
            background: #0f141c;
            border: none;
            padding: 16px 20px;
            color: #fff;
            font-family: "DM Sans", sans-serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
            margin-top: 10px;
          }
        }
      }
    }
    .right {
      border-radius: 30px;
      background: #171b22;
      padding: 40px;
      width: 30%;
      h2{
      color: #fff;
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
    padding-bottom: 40px;
      }
    p{
    color: #909090;
    font-family: "DM Sans", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    padding-bottom: 30px;
    }
    .contact{
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 15px;
    a{
    color:#FFF;
    font-size: 20px;
    font-weight: 500;
    line-height: 32px;
    text-decoration:none
    }
    }
    }
  }
`;

function ContactUs() {
  return (
    <>
      <Outer>
        <Container>
          <div className="main">
            <div className="heading">
              <p>Contact Us</p>
              <h2>Let's make something awesome together!</h2>
            </div>
          </div>
        </Container>
      </Outer>
      <OuterBottom>
        <Container justify="flex-start">
          <div className="mainBottom">
            <div className="left">
              <div className="flex">
                <div className="form">
                  <label>Name:</label>
                  <input 
                  placeholder="Your Name"/>
                </div>
                <div className="form">
                  <label>Email:</label>
                  <input
                  placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="flex">
                <div className="form">
                  <label>Phone (optional):</label>
                  <input 
                  placeholder="Your Phone"/>
                </div>
                <div className="form">
                  <label>Subject:</label>
                  <input
                  placeholder="Your Subject" />
                </div>
              </div>
              <div className="flex">
                <div className="form">
                  <label>Message:</label>
                  <textarea
                  placeholder="Your Message"
                  rows="3"
                  />
                </div>
              </div>

              <button>Submit</button>
            </div>
            <div className="right">
              <h2>Get In Touch</h2>
              <p class="well">
                When do they work well, and when do they on us and finally, when
                do we actually need how can we avoid them.
              </p>
              <div class="contact">
                <img
                  src="assets/phone_svg.svg"
                  alt="phone_svg"
                />
                <a href="tel:+1451356888">+1 451 356 888</a>
              </div>
              <div class="contact">
                <img
                  src="assets/email_svg.svg"
                  alt="phone_svg"
                />
                <a href="tel:+1451356888">biogi@mail.com</a>
              </div>
              <div class="contact">
                <img
                  src="assets/location_svg.svg"
                  alt="phone_svg"
                />
                <a href="tel:+1451356888">121 Parkview St. California, USA</a>
              </div>
            </div>
          </div>
        </Container>
      </OuterBottom>
    </>
  );
}

export default ContactUs;

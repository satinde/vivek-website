import React from "react";
import styled from "styled-components";

const Outer = styled.div`
  background-color: #171b22;
  width: 100%;
  border-radius: 0;
  padding: 100px 0px 0px;
  border-bottom:2px solid #63636385;
`;
const Container = styled.div`
  margin: 0px 106px;
  display: flex;
//   align-items: center;
  justify-content: space-between;
  .left {
    width: 50%;
    position:relative;
    .hwlo{
    .years-img{
        bottom: 60px;
    position: absolute;
    right: 110px;
}
    .digit{
    position: absolute;
        bottom: 170px;
    color: #171b22;
    color: var(--5, #171b22);
    font-size: 140px;
    font-weight: 700;
    line-height: 140px;
    right: 200px;
    }
    .circle-text{
        position: absolute;
    bottom: 90px;
    color: #fff;
    color: var(--1, #fff);
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    max-width: 110px;
    right: 160px;
    }
    
    }
    }
  }
  .right {
    width: 50%;
    h3 {
      color: var(--14, #909090);
      font-size: 32px;
      font-weight: 400;
      line-height: 48px;
      padding: 20px 0 30px;
      text-align: left;
      span {
        color: #fff;
      }
    }
      .text{
          color: var(--1, #fff);
    font-size: 18px;
    font-weight: 300;
    line-height: 30px;
    text-align: left;
      }
    .explore-me { 
    align-items: center;
    display: flex;
    padding-top: 40px;
    a{
    color: #ffdb59;
    color: var(--9, #ffdb59);
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
    line-height: 32px;
    text-decoration: none;
}
}
    .award {
      align-items: center;
      border: 1px solid #63636385;
      border: 1px solid var(--14, #63636385);
      border-radius: 45px;
      display: flex;
      gap: 20px;
      max-width: 380px;
      padding: 15px;
      width: 100%;
      .award-circle{
        align-items: center;
        background-color: #63636385;
        border-radius: 50%;
        display: flex;
        height: 60px;
        justify-content: center;
        width: 60px;
      }
        .bottom{
        h3{
            color: var(--1, #fff);
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    padding:0px;
        }
    p{
        color: var(--14, #909090);
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    }
        }
    }
  }
`;

function About() {
  return (
    <Outer>
      <Container>
        <div className="left">
          <img src="assets/girl-img2.png"
              alt="img" />
          <div className="hwlo">
            <img
              className="years-img"
              src="assets/years-img.png"
              alt="img"
            />
            <div className="digit">6</div>
            <div className="circle-text">
              YEARS OF <br />
              WORKING EXPERICE
            </div>
          </div>
        </div>
        <div className="right">
          <div className="award">
            <div className="award-circle">
              <img src="assets/trophy.png"
              alt="img" />
            </div>
            <div class="bottom">
              <h3>Independent Of The Year</h3>
              <p>Annual Awards 2025</p>
            </div>
          </div>
          <h3>
            Hello! I’m <span>Jessica</span> a self-taught &amp; award-winning
            <span> Web Designer &amp; Developer</span> with over{" "}
            <span>fifteen years of work experience</span>. I started in my
            children’s room and got pro at renowned <span>Ren Tech</span>{" "}
            Agencies.
          </h3>
          <p className="text">
            Urna neque sollicitudin odio tempus eleifend est. Vestibulum dictum
            turpis diam arcu rutrum interdum aliquet iaculis.
          </p>
          <p className="explore-me">
            <a href="/">Explore Me</a>
            <svg
              class="expo-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g>
                <path
                  d="M6.66669 16H25.3334"
                  stroke="#FFDB59"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M20 21.3333L25.3333 16"
                  stroke="#FFDB59"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M20 10.6666L25.3333 16"
                  stroke="#FFDB59"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </p>
        </div>
      </Container>
    </Outer>
  );
}

export default About;

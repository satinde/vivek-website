import React from "react";
import styled from "styled-components";

const ManiContainer = styled.div`
  background-image: url(./assets/home-bg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 2fr 1fr 0.7fr;
  //   grid-gap: 10px;
  //   padding: 10px;
  height: 100%;
  .item1 {
    grid-area: 1 / 2 / span 3 / span 2;
  }
  .item2 {
    grid-area: 1 / 1 / span 3 / span 1;
  }
  .left-border {
    border-left: 1px solid #ffffff38;
  }
  .bottom-border {
    border-bottom: 1px solid #ffffff38;
  }

  .item3 {
    //   display: flex;
    // justify-content: center;
    // align-items: center;
    // flex-direction: column;

    padding: 70px;
    h2 {
      color: #fff;
      text-align: center;
      font-size: 64px;
      font-style: normal;
      font-weight: 700;
      line-height: 64px;
      padding-bottom: 15px;
    }
    p {
      color: var(--1, #fff);
      text-align: center;
      font-size: 20px;
      line-height: 30px;
    }
  }

  .item4 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;
    h2 {
      color: var(--14, #909090);
      text-align: center;
      font-size: 16px;
      font-weight: 500;
      line-height: 26px;
      padding-top: 20px;
      span {
        color: var(--1, #fff);
      }
    }
    .flower {
      filter: brightness(0) saturate(100%) invert(50%) sepia(73%) saturate(413%)
        hue-rotate(323deg) brightness(103%) contrast(101%);
      animation: rotation infinite 9s linear;
    }
    @keyframes rotation {
      100% {
        transform: rotate(180deg);
      }
    }
  }
  .item1 {
    display: flex;
    justify-content: center;
    align-items: center;
    .main {
      .main-text {
        color: var(--1, #fff);
        font-family: DM Sans, sans-serif;
        font-size: 36px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        padding-top: 50px;
        text-align: center;
      }
      h1 {
        color: var(--1, #fff);
        font-family: DM Sans, sans-serif;
        font-size: 96px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-align: center;
        mark {
          color: transparent;
          background: linear-gradient(90deg, #ff7d61, #ffdb59);
          background: linear-gradient(90deg, #ff7d61 0, #ffdb59 100%);
          background-clip: text;
          padding: 0;
        }
      }
    }
  }
  .item5 {
    padding: 90px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    .mouse {
      height: 100px;
      width: 60px;
      border: 2px solid #fff;
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      .mouse-arrow-down {
        animation: bounce 1600ms infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
      }

      @keyframes bounce {
        from {
          top: 0px;
        }
        to {
          top: 60px;
        }
      }
    }
    .scroll-down {
      color: var(--1, #fff);
      font-size: 16px;
      font-weight: 500;
      line-height: 30px;
      max-width: 80px;
      text-align: center;
    }
  }
`;
function MainSection() {
  return (
    <ManiContainer>
      <Grid>
        <div className="item1">
          <div className="main">
            <p className="main-text">
              Hello, I am <span>👋</span>
            </p>
            <h1>
              <mark>Web</mark> Designer.
            </h1>
            <img src="assets/girl.png"
              alt="img" />
          </div>
        </div>
        <div className="item2"></div>
        <div className="left-border bottom-border item3">
          <h2>700+</h2>
          <p>PROJECT COMPLETED</p>
        </div>
        <div className="left-border bottom-border item4">
          <img
            className="flower"
            src="assets/flower.png"
              alt="img"
          />
          <h2 class="Freelance">
            A <span>Freelance Designer and Developer based in USA.</span> I
            strives to build immersive and beautiful web applications through
            carefully crafted used-centric design.
          </h2>
        </div>
        <div className="left-border item5">
          <div className="mouse">
            <svg
              className="mouse-arrow-down"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="40"
              viewBox="0 0 24 40"
              fill="none"
            >
              <g clip-path="url(#clip0_37_162)">
                <path
                  d="M12 5L12 35"
                  stroke="#FFDB59"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M16 31L12 35"
                  stroke="#FFDB59"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8 31L12 35"
                  stroke="#FFDB59"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_37_162">
                  <rect width="24" height="40" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="scroll-down">SCROLL DOWN</h2>
        </div>
      </Grid>
    </ManiContainer>
  );
}

export default MainSection;

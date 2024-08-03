import React, { useState } from "react";
import styled from "styled-components";

const Outer = styled.div`
  background-color: #171b22;
  width: 100%;
  border-radius: 0;
  padding: 100px 0px;
  border-bottom: 2px solid #63636385;
`;
const Container = styled.div`
  margin: 0px 106px;
  display: flex;
  justify-content: space-between;
  gap: 100px;
  color: #fff;
  .left {
    width: 30%;
    .main-title {
      background: linear-gradient(90deg, #ff7d61 0%, #ffdb59 100%);
      background-clip: text;
      font-size: 20px;
      font-weight: 500;
      line-height: 20px;
      color: transparent;
      margin-bottom: 5px;
    }
    .title {
      font-size: 48px;
      font-weight: 700;
      line-height: 64px;
      padding-bottom: 30px;
    }
    .description {
      font-size: 18px;
      font-weight: 300;
      line-height: 30px;
    }
    .services-circle-main {
      //   position: relative;
      padding-top: 80px;
      display: flex;
      .left-circle {
        width: 190px;
        height: 190px;
        border-radius: 50%;
        background-color: #ffdb59;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        p {
          color: #0f141c;
          text-align: center;
          font-size: 20px;
          font-weight: 500;
          line-height: 32px;
          letter-spacing: 2px;
          max-width: 110px;
        }
        // position: absolute;
        // top: 80px;
        // left: 0;
      }
      .right-circle {
        width: 190px;
        height: 190px;
        border-radius: 50%;
        background-color: #0f141c;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-left: -20px;
        p {
          color: #fff;
          text-align: center;
          font-size: 20px;
          font-weight: 500;
          line-height: 32px;
          letter-spacing: 2px;
          max-width: 110px;
        }
      }
    }
  }
  .right {
    width: 70%;
    color:#fff;
    padding-left:50px;
    .main{
        border-bottom: 1px solid #63636385;
    padding: 20px 0;
    }
    .comment{
        color: #909090;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    .accor-list{
        padding: 10px 0px 30px 20px;
    color:#fff;
    }
    }
    .acc{
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor:pointer;
        h3{
            font-size: 36px;
    font-weight: 500;
    line-height: 48px;
    color:#fff;
    padding:0;
        }
    }
  }
`;

function Services() {
    const [accToggle,setAccToggle]=useState(0)
  return (
    <Outer>
      <Container>
        <div className="left">
          <p className="main-title">OUR SERVICES</p>
          <h2 className="title">Solution We Provide.</h2>
          <p className="description">
            Urna neque sollicitudin odio tempus eleifend est. Vestibulum dictum
            turpis diam arcu rutrum interdum aliquet iaculis.
          </p>
          <div className="services-circle-main">
            <div className="left-circle">
              <p>VIEW MY WORK</p>
            </div>
            <div className="right-circle">
              <p>CONTACT ME</p>
            </div>
          </div>
        </div>
        <div className="right">
            {
                ["Visual Design","Design Systems","Web Design & Development","Design Systems"].map((res,i)=>(
                    <div className="main">
                     <div className="acc" 
                         onClick={()=>setAccToggle(i)}>
                       <h3>{res}</h3>
                       <svg
                         fill="#fff"
                         version="1.1"
                         viewBox="0 0 45.402 45.402"
                         height="20"
                         width="20"
                       >
                         <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                         <g
                           id="SVGRepo_tracerCarrier"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                         ></g>
                         <g id="SVGRepo_iconCarrier">
                           <g>
                             <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"></path>
                           </g>
                         </g>
                       </svg>
                     </div>
                     {
                        accToggle===i &&
                        <div className="comment">Project systematization is something I place a lot of emphasis on.
                                       My passion Design Systems.
                                       <ul class="accor-list">
                                           <li>Interface Design</li>
                                           <li>Creating Design Systems</li>
                                           <li>UI Kits</li>
                                           <li>User Experience Development</li>
                                       </ul>
                                   </div>
                     }
                     </div>
                ))
            }
        </div>
      </Container>
    </Outer>
  );
}

export default Services;

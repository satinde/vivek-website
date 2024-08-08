import React from "react";
import styled from "styled-components";

const Outer = styled.div`
  background-color: #0f141c;
  width: 100%;
  border-radius: 0;
  padding: 100px 0px;
  color: #fff;
  border-bottom:2px solid #63636385;
`;
const Container = styled.div`
  margin: 0px 106px;
  display: flex;
  justify-content: center;
  .main {
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
    .skill-type {
      display: grid;
      gap: 30px;
      grid-template-columns: repeat(4, 1fr);
      align-items: center;
      justify-items: center;
      padding-top: 60px;
      .Skill-box {
        align-items: center;
        background: #171b22;
        border-radius: 150px;
        display: flex;
        flex-direction: column;
        height: 390px;
        justify-content: center;
        width: 300px;
        .counter{
        margin-top:60px;
        h3 {
    color: #fff;
    font-size: 80px;
    font-weight: 700;
    line-height: 80px;
    padding-bottom: 10px;
    text-align: center;
}
    p {
    color: #909090;
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
}
        }
      }
    }
  }
`;

function Skills() {
  return (
    <Outer>
      <Container>
        <div className="main">
          <div className="heading">
            <p>MY SKILLS</p>
            <h2>My Expertise.</h2>
          </div>
          <div className="skill-type">
            {
                [1, 2, 3, 4, 5, 6, 7, 8]?.map(res=>(
                    <div className="Skill-box">
                      <img src="assets/wordpress.png"
              alt="img" />
                      <div class="counter">
                        <h3>
                          98
                        </h3>
                        <p>WORDPRESS</p>
                      </div>
                    </div>
                ))
            }
          </div>
        </div>
      </Container>
    </Outer>
  );
}

export default Skills;

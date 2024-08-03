// src/components/Testimonial.js

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
import styled from "styled-components";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Styled components
const Outer = styled.div`
  background-color: #0f141c;
  width: 100%;
  border-radius: 0;
  padding: 100px 0px;
  border-bottom: 2px solid #63636385;
`;

const Container = styled.div`
  margin: 0px 106px;
  color: #fff;
  .top {
    width: 100%;
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
  }
`;
const SliderContainer = styled.div`
  width: 100%;
`;

const TestimonialCard = styled.div`
  // background: #fff;
  // padding: 20px;
  // border-radius: 10px;
  // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  // text-align: center;
  .heading {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-bottom: 20px;
    h3 {
      color: #fff;
      font-size: 24px;
      font-weight: 500;
      line-height: 30px;
    }
  }
  .description {
    color: #909090;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    padding-bottom: 30px;
  }
  .detail{
  display: flex;
    align-items: center;
    gap: 20px;
    padding-top: 20px;
    .testimonial_client_img {
    max-width: 100%;
    border-radius: 50%;
}
    .client{
    .client-name {
    color: #FFF;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
}
    .studio {
    color: #909090;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
}   
    }
  }
`;

// Testimonials data
const testimonials = [
  {
    text: "This is an amazing service! I couldn't be happier with the results.",
    author: "John Doe",
  },
  {
    text: "A truly exceptional experience from start to finish. Highly recommended!",
    author: "Jane Smith",
  },
  {
    text: "The team went above and beyond to meet my needs. Fantastic job!",
    author: "Alice Johnson",
  },
  {
    text: "I am extremely satisfied with the outcome. Will definitely use again.",
    author: "Bob Brown",
  },
];

// Testimonial Slider Component
const Testimonial = () => {
  return (
    <Outer>
      <Container>
        <div className="top">
          <p className="main-title">TESTIMONIALS</p>
          <h2 className="title">What Our Clients Say.</h2>
        </div>
        <SliderContainer>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{ delay: 5000 }}
            // pagination={{ clickable: true }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard>
                  <div className="heading">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="30"
                      viewBox="0 0 40 30"
                      fill="none"
                    >
                      <g>
                        <path
                          d="M11.9903 8.97047L11.9834 8.98364L11.977 8.997C10.9357 11.1534 10.3315 13.3985 10.1705 15.7265L10.1087 16.6197L10.9897 16.7794L16.4359 17.7668V29H1V20.6818C1 15.4562 2.21666 11.3738 4.55213 8.33851C6.85551 5.3666 9.89607 3.01035 13.7015 1.27904L15.1132 3.79798C14.0057 5.37106 12.9651 7.09582 11.9903 8.97047ZM34.5544 8.97047L34.5475 8.98364L34.5411 8.997C33.4998 11.1534 32.8956 13.3985 32.7346 15.7265L32.6728 16.6197L33.5538 16.7794L39 17.7668V29H23.5641V20.6818C23.5641 15.4561 24.7808 11.3737 27.1163 8.33843C29.4197 5.36656 32.4602 3.01033 36.2656 1.27904L37.6773 3.79798C36.5698 5.37106 35.5292 7.09583 34.5544 8.97047Z"
                          stroke="#FF7D61"
                          stroke-width="2"
                        ></path>
                      </g>
                    </svg>
                    <h3>Best Creative Agency!</h3>
                  </div>
                  <p class="description">
                    Lectus quis sit diam aenean. Neque sed blandit sed at.
                    Adipiscing eu aenean viverra nunc. Lacus ornare massa
                    scelerisque feugiat pretium diam massa purus. Ultrices
                    elementum mattis magna cras viverra nisl enim.
                  </p>
                  <svg
                    class="slider-line"
                    xmlns="http://www.w3.org/2000/svg"
                    height="33"
                    viewBox="0 0 630 33"
                    fill="none"
                  >
                    <path d="M630 1H100L70 31V1H0" stroke="#909090"></path>
                  </svg>
                  <div className="detail">
                  <img class="testimonial_client_img" src="assets/testimonial_client_img3.jpg" alt="testimonial_client_img1" />
                  <div className="client">
                                <h3 class="client-name">Andrew Lewis</h3>
                                <p class="studio">Oria Studio</p>
                            </div>
                  </div>
                </TestimonialCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </SliderContainer>
      </Container>
    </Outer>
  );
};

export default Testimonial;

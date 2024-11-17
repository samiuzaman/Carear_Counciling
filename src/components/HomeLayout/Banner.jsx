// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button } from "keep-react";

export default function App() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide className="bg-career slider-bg">
          <div className="flex flex-col justify-center items-center h-[75vh]">
            <h3 className="text-[#00a8ff] sliderHeading">
              The Best Opportunity to Fulfill Your Dreams
            </h3>
            <p className="text-[#f1f2f6]">
              Join expert career guidance sessions to enhance your skills and
              confidently tackle future challenges
            </p>
            <Button color="primary" className="mt-6 text-warning-25">View Details</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-resume slider-bg">
          <div className="flex flex-col justify-center items-center h-[75vh]">
            <h3 className="sliderHeading text-[#2ed573] ">
              Free Resume Review!
            </h3>
            <p className="text-[#f1f2f6]">
              Get your resume reviewed by experts and make it stand out to
              employers. Limited-time offer
            </p>
            <Button color="success" className="mt-6">
              View Details
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-talking slider-bg">
          <div className="flex flex-col justify-center items-center h-[75vh]">
            <h3 className=" text-[#FFC312] sliderHeading">
              Our Success Stories
            </h3>
            <p className="text-[#f1f2f6]">
              Over 1,000 clients have excelled in their careers with our expert
              guidance. Start your journey today
            </p>
            <Button color="warning" className="mt-6">View Details</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-secure slider-bg">
          <div className="flex flex-col justify-center items-center h-[75vh]">
            <h3 className=" text-[#fa4949] sliderHeading">
              Secure Your Future
            </h3>
            <p className="text-[#f1f2f6]">
              Discover the career path best suited for you and learn how to
              excel in your professional journey
            </p>
            <Button color="error" className="mt-6 text-warning-25">View Details</Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

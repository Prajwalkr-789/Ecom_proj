import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headphones from "../utils/pair-headphones-with-red-band_1212270-2769-removebg-preview.png";
import tv from "../utils/modern-tv-screen-isolated_23-2151430324-removebg-preview.png";

const data = [
  {
    name: "Wireless Bluetooth Headphones",
    price: 59.99,
    ratings: 4.5,
    no_of_ratings: 1023,
    img: "https://img.freepik.com/free-photo/black-headphones-digital-device_53876-97302.jpg?t=st=1727459842~exp=1727463442~hmac=8ed4d40ad1958b320e33cba31f18e3cc70f24c69edc79d4ddb1221e79a46f2f8&w=740",
  },
  {
    name: "Smartphone 128GB",
    price: 699.0,
    ratings: 4.7,
    no_of_ratings: 2540,
    img: "https://img.freepik.com/premium-photo/pair-headphones-with-red-band_1212270-2769.jpg?w=826",
  },
  {
    name: "Gaming Laptop 16GB RAM",
    price: 1299.99,
    ratings: 4.6,
    no_of_ratings: 870,
    img: "https://img.freepik.com/premium-vector/pair-headphones-with-black-background_858664-25557.jpg?ga=GA1.1.442708528.1726944434&semt=ais_hybrid",
  },
  {
    name: "Smartwatch with Heart Monitor",
    price: 199.99,
    ratings: 4.4,
    no_of_ratings: 543,
    img: headphones,
  },
  {
    name: "4K Ultra HD Smart TV",
    price: 899.99,
    ratings: 4.8,
    no_of_ratings: 1378,
    img: "https://img.freepik.com/free-psd/modern-tv-isolated_23-2151430328.jpg?t=st=1727460512~exp=1727464112~hmac=386db4a5d89c885c378224917ada9680e46ddd67197d539436a911e17b5b6b7e&w=996",
  },
  {
    name: "Noise-Cancelling Earbuds",
    price: 149.99,
    ratings: 4.3,
    no_of_ratings: 231,
    img: tv,
  },
];

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
};

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2, // Show 2 items for larger screens
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // 2 items for medium-sized screens (tablets, smaller laptops)
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // 1 item for smaller screens (mobile devices)
        },
      },
    ],
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="p-10 rounded-xl shadow-[inset_0px_0px_138px_10px_black]">
        <Slider {...settings}>
          {data.map((res, index) => (
            <div key={index} className="p-4">
              <div className="w-full hover:scale-[1.05] transition-transform duration-500 flex flex-col sm:flex-row-reverse bg-gradient-to-r from-gray-950 via-gray-800 to-gray-900 rounded-3xl overflow-hidden p-6">
                <div className="w-full sm:w-1/2 pr-4">
                  <img
                    src={res.img}
                    alt={res.name}
                    className="w-full rounded-xl h-40 sm:h-64 object-cover mb-4"
                  />
                </div>
                <div className="w-full sm:w-1/2 flex flex-col justify-center">
                  <h2 className="text-white text-lg sm:text-2xl w-10/12 mx-auto mb-2 sm:mb-3 font-bold text-wrap">
                    {res.name}
                  </h2>
                  <h3 className="text-white text-md sm:text-xl mb-1 sm:mb-2">
                    ${res.price}/-
                  </h3>
                  <h4 className="text-white text-sm sm:text-md">
                    ⭐⭐⭐⭐ {res.ratings} ({res.no_of_ratings})
                  </h4>
                  <button className="mx-auto font-bold mt-2 rounded-xl bg-gradient-to-r from-green-700 to-green-900 text-white p-2 sm:p-3 w-fit">
                    View more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;

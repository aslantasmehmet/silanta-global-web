import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import BackgroundLayer from "./BackgroundLayer";
import TextLayer from "./TextLayer";
import Navbar from "./Navbar";
import NavbarHomePage from "./NavbarHomePage";

const HeroSection = () => {
  const slides = [
    {
      imageUrl:
        "https://res.cloudinary.com/dd4d48hwn/image/upload/v1703497337/E-%C4%B0hracat_ile_3_zhunxn.jpg",
      title: "Dış Ticaret Danışmanlığı ile Zaman Kazanın, Güvende Olun",
      description:
        "Dış ticaret danışmanlığı hizmetimizle iş süreçlerinizi daha verimli hale getirerek zaman tasarrufu sağlıyoruz. Ayrıca, sunduğumuz güvenilir danışmanlık ile işlemlerinizde sorunsuz bir şekilde ilerlemenizi garantiliyoruz. Silanta Global olarak, dış ticaretteki deneyimimizle yanınızdayız, işlerinizi kolaylaştırıyoruz.",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dd4d48hwn/image/upload/v1703314741/E-%C4%B0hracat_ile_2_mounak.jpg",
      title: "E-İhracat ile Dünyaya Açılmanın Tam Zamanı!",
      description:
        "Silanta Global olarak, dış ticarette uzman ekibimizle iş süreçlerinizi hızlandırıyor ve uluslararası arenada başarılı adımlar atmanızı sağlıyoruz. Sunduğumuz kapsamlı danışmanlık hizmetleri ile işlerinizi kolaylaştırıp, güvende olmanızı garanti altına alıyoruz.",
    },

    {
      imageUrl:
        "https://res.cloudinary.com/dd4d48hwn/image/upload/v1703500818/E-%C4%B0hracat_ile_5_wwzmsw.jpg",
      title: "Hızlı, kaliteli ve güvenilir yazılım çözümleri",
      description:
        "Siber Güvenlik Çözümleri, İş Zekası ve Veri Mühendisliği, Yazılım Geliştirme, Yazılım Danışmanlığı, (Mobil, Web) ve Dış Kaynak (outsourcing) kullanımı konularında hızlı, güvenilir ve sağlam çözümleri garanti ediyoruz.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isButtonHovered, setButtonHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  const handleContactButtonClick = () => {
    console.log("Hemen İletişime Geç butonuna tıklandı!");
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      <Navbar />
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        {/* Navbar'ı buraya ekledik */}
        <NavbarHomePage />
      </div>
      <FaArrowLeft
        className="arrow-icon left"
        onClick={handlePrevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "1%",
          fontSize: "2em",
          cursor: "pointer",
        }}
      />
      <FaArrowRight
        className="arrow-icon right"
        onClick={handleNextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "1%",
          fontSize: "2em",
          cursor: "pointer",
        }}
      />
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`w-full h-full ${
            index === currentSlide ? "visible" : "hidden"
          }`}
        >
          <BackgroundLayer
            imageUrl={slide.imageUrl}
            opacity={isButtonHovered ? 0.2 : 0.4}
          />
          <TextLayer title={slide.title} description={slide.description} />
          <div
            className="absolute bottom-28 transform ml-16"
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
          >
            <button
              className="border border-orange-600 bg-blue-950 hover:border hover:border-blue-950 font-semibold font-display border-orange-600 text-white font-display1 px-6 py-4 shadow-xl rounded hover:bg-orange-600 "
              onClick={handleContactButtonClick}
            >
              Hemen İletişime Geç
            </button>
            <button
              className="bg-orange-600 font-semibold font-display hover:border hover:border-orange-600 text-white font-display1 px-6 py-4 shadow-xl rounded ml-4 hover:bg-blue-950 "
              onClick={handleContactButtonClick}
            >
              Hizmet İle İlgili Bilgi Al
            </button>
          </div>
        </div>
      ))}{" "}
    </div>
  );
};

export default HeroSection;

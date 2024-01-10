import React from "react";
import { useSpring, animated } from "react-spring";

export default function About() {
  const springProps = useSpring({
    from: { transform: "translateY(100px)" },
    to: { transform: "translateY(0)" },
  });

  return (
    <div className="bg-[url('https://res.cloudinary.com/dd4d48hwn/image/upload/v1703835875/E_ieasbk.png')] w-full h-auto">
      <div className="flex flex-row">
        <div className="basis-1/4"></div>
        <div className="flex flex-col basis-1/2">
          <div className="flex flex-col items-center mt-12">
            {" "}
            <div className="font-bold text-blue-950  text-4xl font-display">
              Neden Silanta Global ?
            </div>
            <div className="divide-b bg-orange-600 w-32 h-1 mt-4"></div>
          </div>
          <div className="text-center font-semibold mt-12 ">
            Silanta Global, geniş bir hizmet yelpazesi sunan çok yönlü bir firma
            olarak öne çıkıyor. Özellikle dış ticaret danışmanlığı, yurt dışı
            e-ticaret ve yazılım hizmetleri gibi farklı alanlarda uzmanlaşmış
            olmaları, iş süreçlerimizi daha etkili yönetmemize olanak tanıyor.
          </div>
          <div className="text-center mt-12 font-semibold">
           Dış ticaret danışmanlığı, yurt dışı e-ticaret ve
           yazılım hizmetleri gibi birçok alanda hizmet sunarak işlerimi tek bir çatı altında yönetmeme imkan tanıyor. Bu entegre yaklaşım,
           iş süreçlerimdeki karmaşıklığı azaltmama ve daha verimli çalışmama yardımcı oluyor.
          </div>
          <div className="text-center mt-12 font-semibold">
          Firma, dış ticaret danışmanlığı ve yurt dışı e-ticaret alanında sunduğu hizmetlerle küresel 
          pazarda etkili bir şekilde iş yapma fırsatları sunuyor. Ayrıca yazılım hizmetleri, iş operasyonlarımı daha verimli ve özelleştirilmiş
           bir şekilde yönetme olanağı sağlıyor. 
          </div>
          <div className="text-center mt-12 font-semibold">
          Sonuç olarak, Silanta Global'ın geniş hizmet yelpazesi, küresel iş yapma yeteneği,
           teknolojik çözümleri ve müşteri memnuniyetine verdiği önem, firma ile iş birliği yapma kararımda 
           etkili olan başlıca faktörlerdir.
          </div>
        </div>
        <div className="basis-1/4"></div>
      </div>

      <animated.div
        style={springProps}
        className="z-index bottom-0 fixed right-0 w-32 h-32"
      >
        <a href="https://wa.me/905079110466">
          <img
            className="opacity-1"
            src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1703632739/Ads%C4%B1z_tasar%C4%B1m_xsyl5n.png"
            alt="icon"
          />
        </a>
      </animated.div>
    </div>
  );
}

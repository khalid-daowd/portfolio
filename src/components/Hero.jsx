import React from 'react';
import { content } from '../Content';
import '../sendButton.css';
const Hero = () => {
  const { hero } = content;
  const downloadFile = (url) => {
    window.open(url, '_blank');
  };
  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col md:justify-between justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute flex items-end justify-center h-full md:w-4/12 w-8/12 top-0 right-0 bottom-0 -z-10 bg-gradient-to-br from-blue-500 to-purple-500"
        >
          <div className="sm:block hidden md:h-[37rem] h-96">
            <img
              src={hero.image}
              data-aos="slide-up"
              alt="..."
              className="h-full object-cover"
            />
          </div>
        </div>

        <div className="pb-16 px-10 pt-5" data-aos="fade-down">
          <h2 className="pb-4">{hero.title}</h2>
          <h4>{hero.subtitle}</h4>
          <br />
          <div className="flex justify-start items-center flex-col sm:flex-row gap-8">
            <button
              className="send-button"
              id="#hireme"
              onClick={() => downloadFile(hero.btnLink)}
            >
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <i class="fa-solid fa-download"></i>
                </div>
              </div>
              <span>{hero.btnText}</span>
            </button>
            <div className="flex items-center gap-x-3">
              {hero.social_icons.map((icon, i) => {
                const IconComponent = icon.icon;
                return (
                  <a
                    key={i}
                    href={icon?.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn duration-300 pl-6"
                  >
                    <IconComponent className="icon" />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-2 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && ' flex-row-reverse text-right'}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

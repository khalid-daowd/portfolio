import React, { useState } from 'react';
import { createElement } from 'react';
import { content } from '../Content';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '23rem',
    width: '90%',
    zIndex: '1000',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: '2rem',
  },
};
Modal.setAppElement('#root');

const Projects = () => {
  const { Projects } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section id="projects" className="bg-bg_light_primary min-h-full">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex  items-center">
          <img
            src={selectedProject?.image}
            alt=".."
            className="w-40 h-20 mr-4"
          />
          <h6> {selectedProject?.title} </h6>
        </div>{' '}
        <br />
        <ul className="list-decimal sm:text-sm text-xs !leading-7 px-4 font-Poppins">
          {selectedProject?.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
        <br />
        <div className="flex justify-center gap-5 text-sm">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal>

      <div className="md:container py-14 px-5">
        <h2 className="title">{Projects.title}</h2>
        <h4 className="subtitle">{Projects.subtitle}</h4> <br />
        <div className="flex items-center lg:flex-row flex-col-reverse justify-between">
          <img
            src={Projects.image}
            alt="..."
            className="max-w-[45vw] min-w-[22rem]"
          />
          <div className="w-[100%]">
            <Swiper
              pagination={{
                clickable: true,
              }}
              data-aos="fade-left"
              spaceBetween={20}
              modules={[Pagination]}
              className="rounded-3xl pb-16 max-w-xs drop-shadow-primary z-0"
            >
              {Projects.project_content.map((content, i) => (
                <SwiperSlide
                  key={i}
                  className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
                >
                  <img src={content.image} alt="..." />
                  <div className="flex flex-col gap-1 mt-2">
                    <h5 className="font-bold font-Poppins">{content.title}</h5>
                    <button className="font-bold text-gray self-end w-[100%]">
                      <div className="flex flex-row-reverse justify-between gap-1">
                        <a href={content.url} target="_blank" rel="noreferrer">
                          GO LIVE
                        </a>
                        <div
                          onClick={() => {
                            openModal();
                            setSelectedProject(content);
                          }}
                        >
                          DETAILS
                        </div>
                      </div>
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

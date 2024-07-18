import React, { useState } from 'react';
import { createElement } from 'react';
import { content } from '../Content';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '23rem',
    width: '50%',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: '2rem',
  },
};
Modal.setAppElement('#root');

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="min-h-fit" id="skills">
      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center">
          <img
            src={selectedSkill?.logo}
            alt=".."
            className="w-20 h-20 object-contain"
          />
          <h6> {selectedSkill?.name} </h6>
        </div>{' '}
        <br />
        <p className="sm:text-sm text-xs !leading-7 px-4">
          {selectedSkill?.disc}
        </p>
        <br />
        <div className="flex justify-center gap-5 text-sm">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal>

      {/* Content */}
      <div className="md:container py-14 px-5">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>{' '}
        <br />
        <div className="flex flex-wrap justify-center gap-5 pb-16">
          {skills.skills_content.map((skill, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-300 hover:drop-shadow-lg"
            >
              <div className="max-w-[92px] min-w-[91px]">
                <img
                  src={skill.logo}
                  alt=".."
                  className="w-full h-full object-cover group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic text-sm">{skill.para}</p>
                <div
                  onClick={() => {
                    setSelectedSkill(skill);
                    openModal();
                  }}
                  className="text-xl absolute top-3 right-3"
                >
                  <div className="hover:scale-150 duration-200">
                    {createElement(skills.icon)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

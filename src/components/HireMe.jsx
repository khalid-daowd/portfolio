import { content } from "../Content";

const HireMe = () => {  
  const { Hireme } = content;
  return(
    <section id="hireme">
       <div className="md:container py-14 px-5">
        <h2 className="title">{Hireme?.title}</h2>
        <h4 className="subtitle">{Hireme?.subtitle}</h4> <br />
        <div className="flex items-center md:flex-row flex-col-reverse justify-center gap-x-20 ">
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm mb-5
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white">
              {Hireme.btnText}
            </button>
          </div>
        </div>
      </div>  

    </section>
  )
};

export default HireMe;

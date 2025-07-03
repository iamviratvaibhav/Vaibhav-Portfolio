import { experiences } from '../constant'

const Experience = () => {
  return (
    <section
      id='work-experience'
      className="py-24 pb-24 px-[12vw] md:px-[3vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
         “A small yet invaluable milestone in my technology journey.”
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        {/* <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div> */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
              }`}
          >

             <div
              className=" 
                absolute
                sm:left-[52.5%] sm:transform -translate-x-1/2
                left-0
                bg-gray-400 border-4 border-[#8245ec]
                w-12 h-12 sm:w-16 sm:h-16 rounded-full
                flex justify-center items-center z-10
              "
            >
              <img
                src={experience.img}
                alt={experience.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div

              className={`
              bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 
              w-full sm:w-[46%] rounded-2xl border border-white 
              shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] z-10 transform transition-transform duration-600 hover:-translate-y-7
              ${index % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"}
            `}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* Company Logo/Image */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">

                  {experience.skills.map((skill, index) => (
                    <li
                      key={`${skill}-${index}`}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}

                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;




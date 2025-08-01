import Tilt from 'react-parallax-tilt';
import ProfileCounter from './ProfileCounter';
import { TypeAnimation } from 'react-type-animation';
function About() {
  return (
    <section id='about'
      className="py-4 px-[5vw] md:px-[5vw] lg:px-[10vw] font-sans mt-16 md:mt-24 lg:mt-3"
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>

        <div className='md-w-1/2 text-center md:text-left mt-8 md:mt-0'>

          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
            Hy, I am
          </h1>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Vaibhav Verma
          </h2>
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
            <span className='text-white'>
              I am a
            </span>
            <TypeAnimation
              sequence={[
                'FullStack developer',
                2000,
                'Frontend developer',
                2000,
                'Python with A.I. developer',
                2000,
                'UI developer',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h3>

          <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
            I am a Full-Stack Developer with 6 months of hands-on experience in designing, developing, and deploying dynamic web applications. Proficient in front-end and back-end technologies, with a strong foundation in JavaScript, React.js  and Node.js with Express for creating robust server-side logic. A quick learner and collaborative team player, dedicated to writing clean, maintainable code and solving complex problems.
          </p>
          <a href="https://drive.google.com/file/d/12wIOLTOOLocg7X3IVOusVYnEE_Abk2ef/view?usp=drive_link"
            target='_blank'
            rel='noopener noreferrer '
            className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>


        <div className='md:w-1/2 flex justify-center md:justify-end'>
          <Tilt className='w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full'
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img src='/1696518476671.jpg'
              alt='Vaibhav Verma'
              className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'
            >
            </img>
          </Tilt>
          {/* <div>
            <ProfileCounter />
          </div> */}
        </div>
      </div>

    </section>
  )
}

export default About

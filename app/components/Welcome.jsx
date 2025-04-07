import { motion } from "framer-motion";
import StringCycler from './StringCycler';

const Welcome = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={'page-setup'}>
        <div>
          <h1 className='title-size'> Welcome! </h1>
          <div className='font-medium text-primary text-xl lg:text-3xl mt-6'>
            <div className="flex gap-6 mt-8 lg:mt-16 mt-">
              <span>My name is <span className='emphasized-2'>Justin Zakrajsek</span>. </span>
            </div>

            <p className='mt-6'>
              I&apos;m a
              &nbsp;<span className='emphasized-1'>web developer</span>&nbsp;
              with a passion for clean code and problem solving.
            </p>

            <p className='mt-6'>
              At the moment, I'm probably thinking about:&nbsp;
              <span className='emphasized-1'>
                <StringCycler
                  interval={1500}
                  strings={([
                    "writing meaningful tests",
                    "improving code readability",
                    "finding efficient solutions",
                    "keeping code maintainable",
                    "learning from better code",
                    "a delicious hot cup of coffee that makes you forget all your problems for 15 minutes but then you finish it and whoops now you're back in reality but at least you're slightly too caffeinated to pass out",
                  ])}
                />
              </span>
              .
            </p>
          </div>
        </div>
      </div>

      <div className='absolute bottom-24 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary-light flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 28, 0],
              }}
              transition={{
                ease: "linear",
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary-light mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Welcome;

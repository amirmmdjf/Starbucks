import { Inter } from 'next/font/google'
import Header from '../components/header'
import Image from 'next/image'
import firstImage from "../assets/1.webp"
import secondImage from '../assets/2.png'
import thirdImage from '../assets/3.png'
import fourthImage from '../assets/4.jpg'
import fifthImage from '../assets/5.jpg'
import Footer from '@/components/footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div>

      {/* Header section */}
      <Header />


      <main>

        {/* First section */}
        <div className='w-5/5 h-[459px] px-6 flex  max-xl:px-0 max-sm:h-[600px] mt-5 text-center'>
          <div className='w-full bg-pink h-[414px] bg-green-200 flex max-sm:flex-col max-sm:h-[600px]'>
            <div className='w-6/12 h-full flex items-center max-sm:w-auto max-sm:h-[300px]'>
              <Image
                className='h-auto'
                src={firstImage}
                placeholder='blur'
                alt="A hand holding a smartphone with the Starbucks® mobile app 
                open mobile ordering a Peppermint Mocha on a multi-colored background."
              />
            </div>
            <div className='w-6/12  h-full flex flex-col justify-center items-center text-white font-semibold max-sm:h-[400px] max-sm:w-full'>
              <h1>Festivity at your fingertips</h1>
              <p className='text-center mt-5 text-lg tracking-wider leading-9 max-sm:text-[14px]'>Make the season even brighter when you join Starbucks® <br className='max-lg:hidden' />
                Rewards. You’ll save time with easy mobile ordering and <br className='max-lg:hidden' />
                earn free favorites.*</p>

              <a className='link' href="/">
                Join for free
              </a>

            </div>
          </div>
        </div>

        {/* Second section */}
        <div className='box  max-sm:mt-[140px]'>
          <div className='w-full h-[618px] bg-green-200 flex  bg-green max-xl:px-0 max-sm:flex-col-reverse max-sm:h-[730px]'>
            <div className='w-6/12 h-full  flex flex-col justify-center items-center text-white font-semibold max-sm:w-full'>
              <h1 className='title'>Let’s celebrate</h1>
              <p className='parag'>
                Your holi-yay favorites are here. Pick up a <br className='max-lg:hidden' />
                Peppermint Mocha, Iced Sugar Cookie <br className='max-lg:hidden' />
                Almondmilk Latte or Caramel Brulée Latte.
              </p>
              <a className='link' href="/">
                Find your favorite
              </a>
            </div>

            <div className='w-6/12 h-full flex items-center max-sm:w-auto'>
              <Image
                className='h-auto'
                src={secondImage}
                placeholder='blur'
                alt="Two hot espresso drinks with whipped cream and an iced espresso drink in holiday-themed to-go cups."
              />
            </div>
          </div>
        </div>

        {/* Third section */}
        <div className='box  mt-[140px]'>
          <div className='w-full h-[618px] flex bg-purple max-sm:flex-col max-sm:h-[730px] '>
            <div className='w-6/12 h-full flex items-center max-sm:w-auto'>
              <Image
                className='h-auto'
                src={thirdImage}
                placeholder='blur'
                alt="Creamy iced chai drink with a foamy topping in a clear to-go cup."
              />
            </div>
            <div className='w-6/12 h-full flex flex-col justify-center items-center text-white font-semibold max-sm:w-full max-sm:px-2'>
              <h1 className='title'>Gingerbread meets <br className='max-lg:hidden' />chai</h1>
              <p className='parag'>
                Say hello to the festive new Iced Gingerbread <br className='max-lg:hidden' />
                Oatmilk Chai. It's the beloved flavor of <br className='max-lg:hidden' />
                gingerbread with a twist. Here for a limited <br className='max-lg:hidden' />
                time.
              </p>
              <a className='link' href="/">
                Order now
              </a>
            </div>
          </div>
        </div>

        {/* Fourth section */}
        <div className='box mt-[140px]'>
          <div className='w-full h-[618px] flex bg-crimson max-sm:flex-col-reverse max-sm:h-[730px]'>
            <div className='w-6/12 h-full flex flex-col justify-center items-center text-white font-semibold max-sm:w-full max-sm:px-2'>
              <h1 className='title'>Nicely spiced</h1>
              <p className='parag'>
                Our Gingerbread Loaf with citrusy icing pairs<br className='max-lg:hidden' />
                deliciously with coffee.
              </p>
              <a className='link' href="/">
                Order now
              </a>
            </div>
            <div className='w-6/12 h-full flex items-center max-sm:w-[auto]'>
              <Image
                className='h-auto'
                src={fourthImage}
                placeholder='blur'
                alt="Creamy iced chai drink with a foamy topping in a clear to-go cup."
              />
            </div>
          </div>
        </div>

        {/* Fifth section */}
        <div className='box mt-[140px]'>
          <div className='w-full h-[618px] flex bg-darkGreen max-sm:flex-col max-sm:h-[730px]'>
            <div className='w-6/12 h-full flex items-center max-sm:w-auto'>
              <Image
                className='h-auto'
                src={fifthImage}
                placeholder='blur'
                alt="Creamy iced chai drink with a foamy topping in a clear to-go cup."
              />
            </div>
            <div className='w-6/12 h-full flex flex-col justify-center items-center text-white font-semibold max-sm:w-full max-sm:px-2'>
              <h1 className='title'>Brew a cup of <br className='max-lg:hidden' /> magic</h1>
              <p className='parag'>
                The blends you love are back, including <br className='max-lg:hidden' />
                Starbucks® Christmas Blend 2023 with rare <br className='max-lg:hidden' />
                aged Sumatra.
              </p>
              <a className='link' href="/">
                Order now
              </a>
            </div>
          </div>
        </div>

        {/* Sixth section */}
        <div className='w-5/5 h-[140px] px-5 flex flex-col justify-end shadow shadow-gray-300'>
          <div className='w-5/5 h-[90px] pt-2'>
            <p className='text-center text-sm tracking-wider leading-loose	'>*At participating stores.</p>
          </div>
        </div>
      </main>

      <Footer />

    </div>

  )
}

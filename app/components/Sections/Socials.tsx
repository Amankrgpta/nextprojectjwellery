import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from '@fortawesome/free-brands-svg-icons'; 

import { ChevronDownIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


const Socials = () => {
 

 return (
  <div>
  <h2 className="font-playfair md:text-[64px] sm:text-5xl text-xl text-white font-bold text-center p-2">Follow us on our Socials</h2>
   <div className="sm:max-w-[1440px] w-full md:h-[480px] sm:h-[320px] h-[160px] md:my-10 sm:my-8 my-6 mx-auto ">
     <div className="sm:w-[84%] md:w-[79%] w-[73%] h-full mx-auto">
    <Carousel 
     opts={{
      align: "center",
      loop: true,
   }}
    >
     <CarouselContent className="sm:-ml-4 ">
        <CarouselItem></CarouselItem>
        <CarouselItem></CarouselItem>
        <CarouselItem></CarouselItem>
    </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext />
  </Carousel>
     </div>
  </div>
  {/* div for icons */}
  <div className="flex flex-center justify-center gap-[32px] sm:py-[80px] py-6">
     <FontAwesomeIcon icon={faFacebook}  className="text-white sm:text-[64px] text-2xl "/>
     <LinkedInLogoIcon className="sm:h-[64px] sm:w-[64px] h-[24px] w-[24px] text-white"/>
     <InstagramLogoIcon className="sm:h-[64px] sm:w-[64px] h-[24px] w-[24px]  text-white"/>
  </div>
  </div>
 )
}

export default Socials


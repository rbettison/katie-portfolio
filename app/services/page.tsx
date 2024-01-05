import RocketPoint from "../components/RocketPoint";
import StaggeredAnimationContainer from "../portfolio/StaggeredAnimationContainer";

export default function Services() {
    return (
        <StaggeredAnimationContainer delay={0} childrenDelay={0.2} containerClassName="text-center flex flex-col gap-8 text-xl font-bold mt-4 sm:mt-16 sm:mb-16 sm:w-1/2 w-3/4">
            <h1 className="w-1/2 text-xl sm:text-3xl font-bold border-b pb-4 border-double text-left font-highlightFont">Services</h1>
            <RocketPoint message="Go To Market Strategy"/>   
            <RocketPoint message="Marketing Advisory" subMessage="Co-marketing, CRM, Digital, IRL/Experiential, 360 campaigns"/>                
            <RocketPoint message="Partnership Strategy & Execution"/>                
            <RocketPoint message="Business Strategy"/>                
            <RocketPoint message="Pitch Reviews"/>                
            <RocketPoint message="Introductions"/>                
            <RocketPoint message="Speaking engagements" subMessage="IRL, Podcasts"/>            

            <div className="w-1/2 h-4 border-b border-white"></div>
        </StaggeredAnimationContainer>
    )
}
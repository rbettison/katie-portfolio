import AnimatedLogo from "./AnimatedLogo";
import StaggeredAnimationContainer from "./StaggeredAnimationContainer";

export default function Portfolio() {
    return(

        <div className="gap-8 text-xl font-bold mt-16 mb-24 w-1/2 font-highlightFont">
            <h1 className="w-1/2 text-3xl font-bold border-b pb-4 border-double">Portfolio</h1>
            <StaggeredAnimationContainer delay={0} childrenDelay={0.2} containerClassName="grid grid-cols-3 grid-rows-3 place-items-center w-full p-16 gap-16 mt-8 mb-16">
                
                <AnimatedLogo />
                <AnimatedLogo />
                <AnimatedLogo />
                <AnimatedLogo />
                <AnimatedLogo />
                <AnimatedLogo />
                <AnimatedLogo />
                <AnimatedLogo />


            </StaggeredAnimationContainer>
        </div>
    )
}
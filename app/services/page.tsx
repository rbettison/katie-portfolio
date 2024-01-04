import RocketPoint from "../components/RocketPoint";

export default function Services() {
    return (
        <div className="flex flex-col gap-8 text-xl font-bold mt-16 mb-16 w-1/2 font-highlightFont">
            <h1 className="w-1/2 text-3xl font-bold border-b pb-4 border-double">Services</h1>
            <RocketPoint message="Go To Market Strategy"/>   
            <RocketPoint message="Marketing Advisory" subMessage="Co-marketing, CRM, Digital, IRL/Experiential, 360 campaigns"/>                
            <RocketPoint message="Partnership Strategy & Execution"/>                
            <RocketPoint message="Business Strategy"/>                
            <RocketPoint message="Pitch Reviews"/>                
            <RocketPoint message="Introductions"/>                
            <RocketPoint message="Speaking engagements" subMessage="IRL, Podcasts"/>                

            <div className="w-1/2 h-4 border-b border-white"></div>
        </div>
    )
}
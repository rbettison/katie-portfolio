export default function Contact() {
    return(
        <>
        <div className="gap-8 text-xl font-bold mt-4 sm:mt-16 sm:mb-16 sm:w-1/2 w-3/4 font-highlightFont">
            <h1 className="w-1/2 text-xl sm:text-3xl font-bold border-b pb-4 border-double mb-8">Get in touch</h1>

        <div className="p-8">
        <p>I&apos;m always open to hearing from people about new opportunities and projects.</p>

        <form className="flex flex-col mt-4">
            <label>Name</label>
            <input className="text-mainText-100"/>

            <label>Email</label>
            <input className="text-mainText-100"/>

            <label>Message</label>
            <textarea className="h-48 text-mainText-100"/>

        </form>
        </div>
        </div>
        </>
    );
}
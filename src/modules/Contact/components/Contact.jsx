import Form from "./Form";

export default function Contact({}) {
  return (
    <>
      <div className="flex flex-col py-14 lg:flex-row lg:px-52 px-14 lg:h-[500px] gap-10 lg:gap-20">
        <div className="basis-1/2 w-full flex justify-center lg:pr-24 lg:px-0 gap-5 flex-col">
          <div className="text-4xl font-extrabold text-amber-900">
            <h1 className="">Do you have an interesting project?</h1>
            <h1 className="">I'm ready to hear about it. 🤝🤝</h1>
          </div>
          <h2 className="text-lg text-amber-700">Join forces and craft something amazing</h2>
        </div>
        <div className="basis-1/2">
          <Form/>
        </div>
      </div>
    </>
  );
}

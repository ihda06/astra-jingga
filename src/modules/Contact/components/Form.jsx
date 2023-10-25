import Button from "@/commons/components/Button";

export default function Form({}) {
  return (
    <div className="w-full bg-white p-10 rounded-xl shadow-md space-y-2">
      <h3 className="text-2xl font-bold">Send me a message 🚀</h3>
      <form className="space-y-3 duration-300">
        <div className="space-y-1">
          <label className="block " htmlFor="name">
            Name
          </label>
          <input
            className="w-full bg-neutral-100 rounded-lg p-1 outline-none focus:outline-orange-800 duration-300"
            type="text"
            name="name"
          />
        </div>
        <div className="space-y-1">
          <label className="block " htmlFor="email">
            Email
          </label>
          <input
            className="w-full bg-neutral-100 rounded-lg p-1 outline-none focus:outline-orange-800 duration-300"
            type="text"
            name="email"
          />
        </div>
        <div className="space-y-1">
          <label className="block " htmlFor="message">
            Message
          </label>
          <textarea
            type="text"
            name="message"
            className="w-full bg-neutral-100 rounded-lg p-1  outline-none focus:outline-orange-800 duration-300"
          />
        </div>
      </form>
      <Button text="Submit" className="bg-amber-800 text-white" />
    </div>
  );
}

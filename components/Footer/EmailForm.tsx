"use client";

import { useState } from "react";

import { toast } from "sonner";
import { sendEmail } from "@/actions/sendEmail";

import { RxArrowRight } from "react-icons/rx";
import { ImSpinner4 } from "react-icons/im";

const EmailForm = () => {
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      setIsPending(true);
      const res = await sendEmail(formData);

      if (res.success) {
        setTimeout(() => {
          setIsPending(false);
          toast("Message sent ✅", {
            description:
              "Thanks for reaching out! I've received your message and will reply soon 🚀",
            unstyled: true,
          });
        }, 1000);
      } else {
        toast("Message failed ❌", {
          description: "Something went wrong. Please try again.",
          unstyled: true,
        });
      }
    } catch (error) {
      console.error("Error occured with sending the email:", error);
    }
  };

  return (
    <div className="px-4 pb-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block mb-3 font-mono text-pink-400 text-sm">
            $ <span className="text-green-400">your_name</span>
          </label>
          <input
            name="name"
            type="text"
            title=""
            required
            placeholder="What's your name?"
            className="w-full rounded-md bg-[#18181b] border border-[#23232a] px-4 py-2 text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block mb-3 font-mono text-pink-400 text-sm">
            $ <span className="text-green-400">your_email</span>
          </label>
          <input
            name="email"
            type="email"
            title=""
            required
            placeholder="What's your email?"
            className="w-full rounded-md bg-[#18181b] border border-[#23232a] px-4 py-2 text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block mb-3 font-mono text-pink-400 text-sm">
            $ <span className="text-green-400">your_message</span>
          </label>
          <textarea
            name="message"
            title=""
            required
            rows={4}
            placeholder="What do you want to say?"
            className="w-full rounded-md bg-[#18181b] border border-[#23232a] px-4 py-2 text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" disabled={isPending}>
            <div className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-gradient-to-t from-blue-900 to-black border border-blue-500 cursor-pointer shadow-[0_0_10px_#60a5fa] hover:shadow-[0_0_15px_#60a5fa] transition duration-300 gap-2">
              {!isPending ? (
                <>
                  <span>Send Message</span>
                  <RxArrowRight size={20} />
                </>
              ) : (
                <>
                  <span>Sending...</span>
                  <ImSpinner4 className="animate-spin" size={20} />
                </>
              )}
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;

import { motion, slideInFromBottom } from "@/utils/motion";

const LinuxStyleTerminal = () => {
  return (
    <motion.div
      variants={slideInFromBottom(0.7)}
      className="w-full max-w-3xl mt-10 p-6 bg-[#0f1117] rounded-lg shadow-lg font-mono"
    >
      <div className="flex items-center mb-4">
        <span className="h-3 w-3 rounded-full bg-red-500 mr-2"></span>
        <span className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></span>
        <span className="h-3 w-3 rounded-full bg-green-500 mr-4"></span>
        <span className="text-blue-400 font-semibold text-sm">welcome.sh</span>
      </div>
      <p className="text-green-400 mb-4">
        Welcome! Thanks for taking the time to check out my website.
      </p>

      <p className="text-pink-500">
        $ <span className="text-green-500">radosav@portfolio</span>:~$ about_me
      </p>
      <ul className="ml-6 text-blue-200 list-disc mt-1">
        <li>My name is Radosav Panic.</li>
        <li>
          I am Software Developer passionate about Web Technologies and
          currently exploring Mobile and Data Science.
        </li>
        <li>I enjoy building things that make a difference.</li>
      </ul>

      <p className="text-pink-500 mt-5">
        $ <span className="text-green-500">radosav@portfolio</span>:~$
        current_strengths
      </p>
      <ul className="ml-6 text-blue-200 list-disc mt-1">
        <li>
          Knowledge across frontend, backend, and DevOps with modern web tools
        </li>
        <li>
          From scripting to strongly typed — adaptable across many languages
        </li>
        <li>
          Strong fundamentals in programming, debugging, and problem-solving
        </li>
        <li>A growth mindset and willingness to tackle any tech challenge</li>
      </ul>

      <p className="mt-6">
        Always looking to connect with fellow tech enthusiasts!
      </p>
    </motion.div>
  );
};

export default LinuxStyleTerminal;

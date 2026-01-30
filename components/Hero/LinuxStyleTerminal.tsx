import { motion, slideInFromBottom } from "@/utils/motion";

const LinuxStyleTerminal = () => {
  return (
    <motion.div
      variants={slideInFromBottom(0.7)}
      className="w-full max-w-3xl mt-10 p-6 bg-[#0f1117] rounded-lg shadow-lg font-mono text-sm md:text-base"
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
        <li className="my-2">
          I am an aspiring{" "}
          <span className="text-green-400">Junior Software Developer</span> with
          a strong interest in learning new technologies and applying
          problem-solving skills.
        </li>
        <li className="my-2">
          Friendly and team-oriented, I enjoy collaborating with others to
          tackle problems and achieve shared goals.
        </li>
        <li className="my-2">
          I am eager to grow in IT, contribute to projects, and learn from
          experienced teams.
        </li>
      </ul>

      <p className="text-pink-500 mt-5">
        $ <span className="text-green-500">radosav@portfolio</span>:~$
        current_strengths
      </p>
      <ul className="ml-6 text-blue-200 list-disc mt-1">
        <li className="my-2">Knowledge across frontend, backend, and DevOps</li>
        <li className="my-2">From scripting to strongly typed languages</li>
        <li className="my-2">
          Strong fundamentals in programming, debugging, and problem-solving
        </li>
        <li className="my-2">
          A growth mindset and willingness to tackle any challenge
        </li>
      </ul>

      <p className="mt-6">
        Always looking to connect with fellow tech enthusiasts!
      </p>
    </motion.div>
  );
};

export default LinuxStyleTerminal;

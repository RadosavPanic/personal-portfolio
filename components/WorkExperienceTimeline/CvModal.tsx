import Link from "next/link";
import { IoMdCloseCircle } from "react-icons/io";

type CvModalProps = {
  handleClose: () => void;
  cvFileUrl: string;
};

const CvModal = ({ handleClose, cvFileUrl }: CvModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-[#181b23] rounded-lg shadow-lg px-6 py-10 w-11/12 max-w-xs sm:max-w-sm mx-auto flex flex-col items-center relative">
        <IoMdCloseCircle
          onClick={handleClose}
          className="w-7 h-7 absolute top-2 right-2 text-gray-300 hover:text-white transition cursor-pointer"
        />

        <div className="flex flex-col gap-3 w-full mt-2">
          <Link
            href="https://orzzfjanyjkjjuqldtal.supabase.co/storage/v1/object/public/cv-files/radosav_panic_cv.pdf"
            target="_blank"
            className="w-full px-4 py-2 rounded bg-blue-600 text-white font-semibold text-center hover:bg-blue-700 transition"
            onClick={handleClose}
          >
            View CV
          </Link>
          <Link
            href={`${cvFileUrl}`}
            target="_blank"
            className="w-full px-4 py-2 rounded bg-green-600 text-white font-semibold text-center hover:bg-green-700 transition"
            onClick={handleClose}
          >
            Download CV
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CvModal;

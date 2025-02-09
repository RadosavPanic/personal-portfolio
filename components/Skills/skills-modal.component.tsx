import { FC } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

type ModalProps = {
  info: Record<string, string>;
  onClose: () => void;
};

const Modal: FC<ModalProps> = ({ info, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-[4px] z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 p-1 rounded-full"
          onClick={onClose}
          aria-label="Close modal"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <div className="mt-8 space-y-4">
          {Object.entries(info).map(([key, value]) => (
            <p key={key} className="text-gray-800">
              <strong>{key}:</strong>{" "}
              {value.split("\n").map((line, index, arr) => (
                <span key={index}>
                  {line}
                  {index < arr.length - 1 && <br />}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;

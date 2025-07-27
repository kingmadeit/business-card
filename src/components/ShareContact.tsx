import { GoShare } from "react-icons/go";
import {shareContactInfo} from "../lib/data";

const { title, text, url } = shareContactInfo;

const ShareContact = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing is not supported on this device.");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="text-gray-400 hover:text-blue-500 transition z-50 cursor-pointer"
      aria-label="Share"
    >
      <GoShare className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
};

export default ShareContact;

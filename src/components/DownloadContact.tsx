import { RxDownload } from "react-icons/rx";

const DownloadContact = () => {
  return (
    <a
      href="/contact.vcf"
      download
      className="inline-block line-height-0 rounded-full text-gray-300 shadow-lg hover:text-[#84f0f1] transition z-50">
      <RxDownload className="h-5 w-5 md:w-6 md:h-6" />
    </a>
  );
};

export default DownloadContact;

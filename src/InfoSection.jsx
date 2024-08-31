import { FaCalendar, FaHeadphones, FaCheckCircle } from 'react-icons/fa'; // Import icons from react-icons

function InfoSection() {
  return (
    <div className="flex justify-around items-start p-4 bg-black">
      <div className="flex items-center space-x-2">
        <FaCalendar className="text-[#D29A5A] text-2xl" />
        <div>
          <h3 className="text-[#D29A5A] text-xl font-semibold">FREE SHIPPING WORLDWIDE</h3>
          <p className="text-white">Guaranteed Delivery</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <FaHeadphones className="text-[#D29A5A] text-2xl" />
        <div>
          <h3 className="text-[#D29A5A] text-xl font-semibold">24/7 CUSTOMER SERVICE</h3>
          <p className="text-white">Text Us 24/7 at 070-7782-9137</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <FaCheckCircle className="text-[#D29A5A] text-2xl" />
        <div>
          <h3 className="text-[#D29A5A] text-xl font-semibold">QUALITY GUARANTEE!</h3>
          <p className="text-white">Sent Within 30 Days</p>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const PrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute -left-10 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-gray-400 duration-500 rounded-full p-2 shadow-md"
  >
    <FaChevronLeft />
  </button>
);

export const NextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute -right-10 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-gray-400 duration-500 rounded-full p-2 shadow-md"
  >
    <FaChevronRight />
  </button>
);

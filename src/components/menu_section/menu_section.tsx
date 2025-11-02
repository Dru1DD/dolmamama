'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute -left-10 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-gray-400 duration-500 rounded-full p-2 shadow-md"
  >
    <FaChevronLeft />
  </button>
);

const NextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute -right-10 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-gray-400 duration-500 rounded-full p-2 shadow-md"
  >
    <FaChevronRight />
  </button>
);

const MenuSection = () => {
  const dishes = [
    {
      id: 1,
      name: 'Chinkali',
      img: '/images/menu_section/khinkali.jpg',
      desc: 'Soczyste gruzińskie pierożki z mięsnym farszem i bulionem — najlepiej zjeść rękami!',
    },
    {
      id: 2,
      name: 'Chaczapuri adżarskie',
      img: '/images/menu_section/khachapuri.jpg',
      desc: 'Złociste ciasto w kształcie łódki, wypełnione roztopionym serem, masłem i jajkiem — klasyk z Batumi!',
    },
    {
      id: 3,
      name: 'Dolma',
      img: '/images/menu_section/dolma.jpg',
      desc: 'Liście winogron faszerowane aromatycznym ryżem i przyprawami — smak Kaukazu w każdym kęsie.',
    },
    {
      id: 4,
      name: 'Szaszłyk',
      img: '/images/menu_section/shashlyk.jpg',
      desc: 'Mięso marynowane w ziołach i przyprawach, grillowane do perfekcji — prosto z gruzińskiego ognia.',
    },
    {
      id: 5,
      name: 'Baklava',
      img: '/images/menu_section/baklava.jpg',
      desc: 'Kruche ciasto filo, orzechy i miód — słodkie zakończenie gruzińskiej uczty. Najlepiej smakuje z herbatą!',
    },
  ];

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section>
      <h1
        className="sm:text-6xl lg:text-[5rem] italic  w-full text-center whitespace-nowrap leading-tight mt-10"
        style={{ fontFamily: 'var(--font-great-vibes), cursive' }}
      >
        Nasze menu
      </h1>
      <div className="relative max-w-6xl mx-auto">
        <Slider {...settings}>
          {dishes.map((dish) => (
            <div key={dish.id} className="px-4">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500">
                <div className="relative w-full h-64">
                  <Image src={dish.img} alt={dish.name} fill className="object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.desc}</p>
                  <button
                    className="bg-black hover:bg-black/50 text-white font-semibold py-2 px-4 rounded-full transition-all duration-500 shadows-2xl
                      "
                  >
                    Zamów teraz
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default MenuSection;

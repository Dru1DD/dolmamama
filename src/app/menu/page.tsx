import Header from '@/components/header';
import Footer from '@/components/footer';
import FoodSection from './food_section/food_section';

const MenuPage = () => {
  return (
    <main className="relative w-full h-full flex flex-col">
      <Header />
      <FoodSection />
      <Footer />
    </main>
  );
};

export default MenuPage;

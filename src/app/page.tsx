import Header from '@/components/header';
import Footer from '@/components/footer';
import WelcomeSection from '@/components/welcome_section';
import HistorySection from '@/components/history_section';
import ReservationSection from '@/components/reservation_section';
import MenuSection from '@/components/menu_section';
import FeedbackSection from '@/components/feedback_section';

function App() {
  return (
    <main className="overflow-hidden relative w-full h-full flex flex-col">
      <Header />
      <WelcomeSection />
      <HistorySection />
      <ReservationSection />
      <MenuSection />
      <FeedbackSection />
      <Footer />
    </main>
  );
}

export default App;

import Header from '@/components/header';
import Footer from '@/components/footer';
import WelcomeSection from '@/components/welcome_section/welcome_section';
import HistorySection from '@/components/history_section/history_section';
import ReservationSection from '@/components/reservation_section/reservation_section';

function App() {
  return (
    <main className="relative w-full h-full flex flex-col">
      <Header />
      <WelcomeSection />
      <HistorySection />
      <ReservationSection />
      <Footer />
    </main>
  );
}

export default App;

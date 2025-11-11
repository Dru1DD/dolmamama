'use client';

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-gray-200  py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h2 className="font-bold text-lg mb-3">Dane kontaktowe</h2>
          <p>Chmielna 108, 00-801 Warszawa</p>
          <p className="mt-1">+48 123 456 789</p>
          <p className="mt-1">rezerwacje@dolmamama.pl</p>

          <h2 className="font-bold mt-4 mb-2 text-lg">Godziny pracy</h2>
          <ul className="text-sm space-y-1">
            <li>Poniedziałek: 12:00 - 23:00</li>
            <li>Wtorek: 12:00 - 23:00</li>
            <li>Środa: 12:00 - 23:00</li>
            <li>Czwartek: 12:00 - 23:00</li>
            <li>Piątek: 12:00 - 24:00</li>
            <li>Sobota: 12:00 - 24:00</li>
            <li>Niedziela: 12:00 - 23:00</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-3">My w mediach społecznościowych</h2>
          <ul className="space-y-1 text-sm">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Google</li>
            <li>TikTok</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-3">My na mapie</h2>

          <iframe
            className="w-full h-48 rounded-2xl "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.5304618408987!2d20.99619807610659!3d52.22998457198767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc84f88009ab%3A0x9d7796e048a0994b!2sChmielna%20108%2C%2000-801%20Warszawa!5e0!3m2!1spl!2spl!4v1700000000000"
            allowFullScreen
            loading="lazy"
          ></iframe>

          <button
            className="bg-white text-black
              font-semibold text-lg px-6 py-3 rounded-2xl
             hover:bg-gray-300 transition-all duration-500
               hover:shadow-2xl mt-5"
            onClick={() => {
              const destination = '52.22880071592968, 20.9975018134921';
              const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving`;
              window.open(url, '_blank');
            }}
          >
            Dowiedz się, jak dojechać
          </button>
        </div>
      </div>

      <div className="text-center text-sm text-gray-700 mt-8">© 2025 Dolmamama</div>
    </footer>
  );
};

export default Footer;

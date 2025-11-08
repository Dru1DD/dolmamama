'use client';

import { useState } from 'react';

interface Props {
  onClose: () => void;
}

const ReservationModal = ({ onClose }: Props) => {
  const [form, setForm] = useState({
    name: '',
    phone_number: '',
    email: '',
    time: '',
    guests: 1,
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert('Rezerwacja zapisana!');
      onClose();
    } else {
      alert('Błąd podczas rezerwacji.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="bg-white rounded-2xl p-6 w-96 relative">
        <button className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl" onClick={onClose}>
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center">Rezerwacja stolika</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="name"
            placeholder="Imię i nazwisko"
            className="border p-2 rounded"
            onChange={handleChange}
            required
          />
          <input
            name="phone_number"
            placeholder="Numer telefonu"
            className="border p-2 rounded"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            onChange={handleChange}
            required
          />
          <input name="time" type="datetime-local" className="border p-2 rounded" onChange={handleChange} required />
          <input
            name="guests"
            type="number"
            min={1}
            max={20}
            placeholder="Liczba gości"
            className="border p-2 rounded"
            onChange={handleChange}
            required
          />
          <button type="submit" className="bg-black text-white py-2 rounded hover:bg-black/70 transition">
            Zarezerwuj
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationModal;

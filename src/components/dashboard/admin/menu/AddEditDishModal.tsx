'use client';

import { useAddDish } from '@/hooks/add-menu-mutation';
import { useUpdateDish } from '@/hooks/use-update-menu-mutation';
import { useState } from 'react';

const AddEditDishModal = ({ item, onClose }: any) => {
  const [form, setForm] = useState({
    id: item.id || '',
    name: item.name || '',
    description: item.description || '',
    imageUrl: item.imageUrl || '',
    price: item.price || 0,
    vegetarian: item.vegetarian || false,
    category: item.category || '',
  });

  const addDish = useAddDish();
  const updateDish = useUpdateDish();

  const handleSubmit = () => {
    if (form.id) updateDish.mutate(form);
    else addDish.mutate(form);

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center p-6">
      <div className="bg-white p-6 rounded-2xl w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold">{form.id ? 'Edytuj potrawę' : 'Dodaj potrawę'}</h2>

        <input
          type="text"
          placeholder="Nazwa"
          value={form.name}
          className="border p-2 w-full rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="text"
          placeholder="Opis"
          value={form.description}
          className="border p-2 w-full rounded"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input
          type="text"
          placeholder="URL obrazka"
          value={form.imageUrl}
          className="border p-2 w-full rounded"
          onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
        />

        <input
          type="number"
          placeholder="Cena"
          value={form.price}
          className="border p-2 w-full rounded"
          onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
        />

        <input
          type="text"
          placeholder="Kategoria"
          value={form.category}
          className="border p-2 w-full rounded"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <label className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={form.vegetarian}
            onChange={(e) => setForm({ ...form, vegetarian: e.target.checked })}
          />
          Danie wegetariańskie
        </label>

        <div className="flex justify-end gap-3">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
            Anuluj
          </button>
          <button className="px-4 py-2 bg-black text-white rounded" onClick={handleSubmit}>
            Zapisz
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditDishModal;

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Seminar {
  id: number;
  name: string;
  date: string;
  time: string;
  capacity: number;
  price: number;
  location: string;
  address: string;
  description: string;
}

export default function SeminarManagement() {
  const [seminars, setSeminars] = useState<Seminar[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSeminars();
  }, []);

  async function fetchSeminars() {
    try {
      const { data, error } = await supabase
        .from('seminars')
        .select('*')
        .order('date', { ascending: true });

      if (error) throw error;
      setSeminars(data || []);
    } catch (error) {
      console.error('Error fetching seminars:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Načítání...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Seznam seminářů</h2>
      <div className="grid gap-4">
        {seminars.map((seminar) => (
          <div key={seminar.id} className="border rounded-lg p-4 bg-white shadow-sm">
            <h3 className="text-xl font-semibold">{seminar.name}</h3>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <span className="font-medium">Datum:</span> {new Date(seminar.date).toLocaleDateString('cs')}
              </div>
              <div>
                <span className="font-medium">Čas:</span> {seminar.time}
              </div>
              <div>
                <span className="font-medium">Kapacita:</span> {seminar.capacity}
              </div>
              <div>
                <span className="font-medium">Cena:</span> {seminar.price} Kč
              </div>
              <div className="col-span-2">
                <span className="font-medium">Místo:</span> {seminar.location}
              </div>
              <div className="col-span-2">
                <span className="font-medium">Adresa:</span> {seminar.address}
              </div>
              {seminar.description && (
                <div className="col-span-2 mt-2">
                  <span className="font-medium">Popis:</span>
                  <p className="mt-1">{seminar.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

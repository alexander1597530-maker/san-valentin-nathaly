import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SanValentinInvite() {
  const [accepted, setAccepted] = useState(false);
  const targetDate = new Date("February 14, 2026 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-rose-200 p-6">
      {/* Canción romántica */}
      <audio autoPlay loop>
        <source src="/sabesaunacosa-luismiguel.mp3" type="audio/mpeg" />
      </audio>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl w-full"
      >
        <Card className="rounded-2xl shadow-xl text-center">
          <CardContent className="p-10 space-y-6">
            <h1 className="text-3xl font-bold text-rose-600">
              Nathaly Monserrath 💌
            </h1>
            <p className="text-lg text-gray-700">
              Desde que llegaste a mi vida, cada día tiene más sentido, más
              sonrisas y más momentos que quiero guardar para siempre.
            </p>

            {/* Galería de fotos */}
            <div className="grid grid-cols-2 gap-4">
              <img src="/foto-mar.jpg" className="rounded-xl object-cover" />
              <img src="/foto-carta.jpg" className="rounded-xl object-cover" />
              <img src="/foto-playa.jpg" className="rounded-xl object-cover col-span-2" />
              <img src="/foto-bosque.jpg" className="rounded-xl object-cover col-span-2" />
            </div>

            <p className="text-xl font-semibold text-rose-500">
              ¿Quieres ser mi San Valentín? ❤️
            </p>

            {/* Contador regresivo */}
            <div className="text-lg font-semibold text-gray-800">
              {days} días {hours} horas {minutes} min {seconds} seg
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <Button onClick={() => setAccepted(true)} className="rounded-2xl text-lg px-6 py-3">
                Sí, acepto 💖
              </Button>
              <Button variant="outline" className="rounded-2xl text-lg px-6 py-3">
                Claro que sí 🌹
              </Button>
            </div>

            {accepted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-6 p-6 rounded-2xl bg-rose-50"
              >
                <p className="text-xl font-semibold text-rose-600">
                  Entonces queda escrito:
                </p>
                <p className="text-lg text-gray-700 mt-2">
                  Gracias por ser amor, luz, fuerza y pasión. Mi fortuna siempre será tenerte a mi lado. Gracias por ser mi compañera, mi amante, mi novia, mi cómplice, mi princesa, mi consentida.
                </p>
                <p className="text-md text-rose-600 mt-4 italic">
                  Con amor, mucho amor, Geo.
                </p>
                <div className="mt-4 flex justify-center text-2xl">
                  💕 💖 💘 💞 💓
                </div>
              </motion.div>
            )
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

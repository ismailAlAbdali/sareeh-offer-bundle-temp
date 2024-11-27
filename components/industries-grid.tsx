'use client';

import { motion } from 'framer-motion';
import { Store, Utensils, Stethoscope, Shirt, Coffee, Scissors, Wheat, Car, Droplet } from 'lucide-react';
import { useI18n } from './i18n-provider';
import { translations } from '@/lib/translations';

// Types
type Industry = {
  icon: React.ElementType;
  translationKey: string;
};

// Animation variants
const animations = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  },
  item: {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  },
  header: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }
};

// Industry icons mapping
const INDUSTRY_ICONS: Record<string, React.ElementType> = {
  retail: Store,
  restaurants: Utensils,
  pharmacies: Stethoscope,
  fashion: Shirt,
  cafes: Coffee,
  salons: Scissors,
  agriculture: Wheat,
  automotive: Car,
  perfumes: Droplet
};

export default function IndustriesGrid() {
  const { language } = useI18n();
  const t = translations[language].industries;

  return (
    <section id="industries" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          variants={animations.header}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={animations.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {Object.entries(t.sectors).map(([key, name]) => {
            const Icon = INDUSTRY_ICONS[key];
            return (
              <motion.div
                key={key}
                variants={animations.item}
                whileHover={{ scale: 1.05 }}
                className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center cursor-pointer"
              >
                <div className="flex flex-col items-center">
                  <Icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold">{name}</h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
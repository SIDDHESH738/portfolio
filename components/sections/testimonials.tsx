"use client";

import { motion } from 'framer-motion';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-lg shadow-md"
          >
            <p className="text-muted-foreground mb-4">
              "Working with Sidd was a pleasure. He delivered the project on time and exceeded our expectations."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-muted rounded-full mr-4"></div>
              <div>
                <h4 className="font-semibold">Soham Lad</h4>
                <p className="text-sm text-muted-foreground">CEO, Company Inc.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-lg shadow-md"
          >
            <p className="text-muted-foreground mb-4">
              "Sidd's technical skills and attention to detail made our project a success. Highly recommended!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-muted rounded-full mr-4"></div>
              <div>
                <h4 className="font-semibold">Soham Lohote</h4>
                <p className="text-sm text-muted-foreground">CTO, Tech Solutions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

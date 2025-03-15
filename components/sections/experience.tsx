"use client";

import { motion } from 'framer-motion';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l border-primary/30 pl-8 pb-8">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap justify-between mb-2">
                <h3 className="text-xl font-semibold"> Digital Marketer</h3>
                <span className="text-muted-foreground">2024</span>
              </div>
              <h4 className="text-primary mb-4">Corizo</h4>
              <p className="text-muted-foreground">
                Enchanced the brand awareness and sales of the company by 20% by using digital marketing strategies.
              </p>
            </motion.div>
          </div>
          
          <div className="relative border-l border-primary/30 pl-8">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap justify-between mb-2">
                <h3 className="text-xl font-semibold">Web Developer</h3>
                <span className="text-muted-foreground">2025</span>
              </div>
              <h4 className="text-primary mb-4">Forage MNC</h4>
              <p className="text-muted-foreground">
                Developed responsive websites and web applications for various clients.
                Worked with Java ( microservices) , Kotlin ( microservices) , React ( frontend) , and  UI/UX design.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 
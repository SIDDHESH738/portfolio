"use client";

import { motion } from 'framer-motion';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project cards will go here */}
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-muted"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Project Title</h3>
              <p className="text-muted-foreground mb-4">
                Short description of the project goes here.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">React</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Next.js</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

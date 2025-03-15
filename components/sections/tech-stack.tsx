// "use client";

// import { motion } from 'framer-motion';

// export function TechStackSection() {
//   return (
//     <section id="tech-stack" className="py-20">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl font-bold mb-4">My Tech Stack</h2>
//           <div className="h-1 w-20 bg-primary mx-auto"></div>
//         </motion.div>
        
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {/* Tech icons will go here */}
//           <div className="flex flex-col items-center">
//             <div className="w-16 h-16 bg-muted rounded-full mb-4"></div>
//             <span className="font-medium">React</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="w-16 h-16 bg-muted rounded-full mb-4"></div>
//             <span className="font-medium">Next.js</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="w-16 h-16 bg-muted rounded-full mb-4"></div>
//             <span className="font-medium">TypeScript</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="w-16 h-16 bg-muted rounded-full mb-4"></div>
//             <span className="font-medium">Tailwind CSS</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Tech Stack</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* React */}
          <div className="flex flex-col items-center">
            <Image
              src="/react.svg"
              alt="React"
              width={64}
              height={64}
              className="mb-4"
            />
            <span className="font-medium">React</span>
          </div>

          {/* Next.js */}
          <div className="flex flex-col items-center">
            <Image
              src="/nextjs-icon.svg"
              alt="Next.js"
              width={64}
              height={64}
              className="mb-4"
            />
            <span className="font-medium">Next.js</span>
          </div>

          {/* TypeScript */}
          <div className="flex flex-col items-center">
            <Image
              src="/typescript (1).svg"
              alt="TypeScript"
              width={64}
              height={64}
              className="mb-4"
            />
            <span className="font-medium">TypeScript</span>
          </div>

          {/* Tailwind CSS */}
          <div className="flex flex-col items-center">
            <Image
              src="/tailwind.svg"
              alt="Tailwind CSS"
              width={64}
              height={64}
              className="mb-4"
            />
            <span className="font-medium">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

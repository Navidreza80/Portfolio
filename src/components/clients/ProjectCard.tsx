"use client";
import type { ProjectCardProps } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { cardVariants, imageVariants, textVariants } from "@/constants";

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-30px" }}
      variants={cardVariants}
      custom={index}
      className="group bg-background-card rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-all will-change-transform relative isolate"
      aria-labelledby={`project-${project.slug}-title`}
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      {/* Premium visual effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />

      {/* Image with enhanced LCP optimization */}
      <motion.figure
        variants={imageVariants}
        className="relative h-48 overflow-hidden"
      >
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title} project`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 3} // LCP optimization
          placeholder="blur"
          blurDataURL={project.blurDataURL}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </motion.figure>

      {/* Semantic rich content */}
      <motion.div
        variants={textVariants}
        custom={index}
        className="p-6 relative z-10"
      >
        <motion.h3
          whileHover={{ x: 2 }}
          className="text-xl font-bold text-foreground mb-2"
          id={`project-${project.slug}-title`}
          itemProp="name"
        >
          {project.title}
        </motion.h3>

        <motion.p
          whileHover={{ x: 1 }}
          className="text-muted mb-4"
          itemProp="description"
        >
          {project.description}
        </motion.p>

        {/* Enhanced tech tags with schema.org */}
        <div className="flex flex-wrap gap-2 mb-6" itemProp="keywords">
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full hover:bg-accent/90 transition-colors"
              itemProp="knowsAbout"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Animated CTA with micro-interactions */}
        <motion.a
          whileHover={{ x: 3 }}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary font-medium hover:text-primary-hover transition-colors"
          aria-label={`View details of ${project.title} project`}
          itemProp="url"
        >
          View Project
          <motion.svg
            animate={{ x: [0, 2, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </motion.svg>
        </motion.a>
      </motion.div>

      <meta itemProp="datePublished" content={project.publishedDate} />
      <meta itemProp="thumbnailUrl" content={project.image} />
    </motion.article>
  );
};

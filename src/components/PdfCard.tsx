import React from 'react';
import { Github, Globe, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { Course } from '../types';

interface PdfCardProps {
  title: string;
  topics: string[];
  subTitle: string;
  illustration?: string;
  folderUrl?: string;
  webUrl?: string;
}

export const PdfCard: React.FC<PdfCardProps> = ({ title, topics, subTitle, illustration, folderUrl, webUrl }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true }}
      className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all flex flex-col h-full min-w-[320px] max-w-[380px]"
    >
      {/* Dark Header - Using the requested hex #34495E */}
      <div className="bg-[#34495E] p-4 text-white">
        <p className="text-xs opacity-80 mb-1">{subTitle}</p>
        <h3 className="font-bold text-sm leading-tight">{title}</h3>
      </div>

      {/* Illustration Area */}
      <div className="p-6 flex justify-center bg-white border-b border-gray-100 h-48 items-center">
        {illustration ? (
          <img 
            src={illustration} 
            alt={title} 
            className="max-h-full max-w-full object-contain"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-32 h-32 bg-gray-50 rounded flex items-center justify-center">
            <span className="text-gray-400 text-xs">Technical Diagram</span>
          </div>
        )}
      </div>

      {/* Topics List */}
      <div className="p-6 flex-grow">
        <ul className="text-sm text-gray-600 space-y-2">
          {topics.map((t, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Buttons */}
      <div className="p-4 border-t flex justify-between gap-4 bg-gray-50/50">
        <a 
          href={folderUrl || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 text-xs border border-gray-300 px-3 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-white transition-colors text-gray-700 font-medium no-underline"
        >
          <FileText size={14} />
          <span>PDF</span>
        </a>
        <a 
          href={webUrl || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 text-xs border border-gray-300 px-3 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-white transition-colors text-gray-700 font-medium no-underline"
        >
          <Globe size={14} />
          <span>Web</span>
        </a>
      </div>
    </motion.div>
  );
};


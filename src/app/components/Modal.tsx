"use client";

import { FC, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  /** Show or hide the modal */
  isOpen: boolean;
  /** Title text (e.g. "Success!" or "Error") */
  title: string;
  /** Body message */
  children: ReactNode;
  /** Called when the user clicks the backdrop or Close button */
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ isOpen, title, children, onClose }) => {
  const isSuccess = title.toLowerCase().includes('success');
  const isError = title.toLowerCase().includes('error') || title.toLowerCase().includes('oops');

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-sm w-full overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className={`px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between
                ${isSuccess ? 'bg-green-500/10' : ''}
                ${isError ? 'bg-red-500/10' : ''}
              `}>
                <h2 className={`text-xl font-semibold flex items-center gap-2
                  ${isSuccess ? 'text-green-500' : ''}
                  ${isError ? 'text-red-500' : ''}
                  ${!isSuccess && !isError ? 'text-gray-900 dark:text-gray-100' : ''}
                `}>
                  {isSuccess && (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {isError && (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  )}
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="px-6 py-4">
                <div className={`text-base
                  ${isSuccess ? 'text-green-600 dark:text-green-400' : ''}
                  ${isError ? 'text-red-600 dark:text-red-400' : ''}
                  ${!isSuccess && !isError ? 'text-gray-700 dark:text-gray-300' : ''}
                `}>
                  {children}
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 flex justify-end">
                <button
                  onClick={onClose}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200
                    ${isSuccess ? 'bg-green-500 hover:bg-green-600 text-white' : ''}
                    ${isError ? 'bg-red-500 hover:bg-red-600 text-white' : ''}
                    ${!isSuccess && !isError ? 'bg-blue-500 hover:bg-blue-600 text-white' : ''}
                  `}
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
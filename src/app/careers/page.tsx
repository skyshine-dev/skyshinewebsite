"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface JobListing {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
}

export default function Careers() {
  const [jobs, setJobs] = useState<JobListing[]>([]);

  useEffect(() => {
    const savedJobs = localStorage.getItem('jobListings');
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Careers at Skyshine – Join Our Team
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Shape the Future with Skyshine. Join a team where innovation meets impact. At Skyshine, we believe our people are our greatest strength. We&#39;re always on the lookout for passionate, curious, and talented professionals to help us build the next generation of technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
            <div className="space-y-6">
              {jobs.map(job => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{job.description}</p>
                  <Link
                    href="/careers/apply"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Apply Now
                  </Link>
                </motion.div>
              ))}
              {jobs.length === 0 && (
                <div className="text-center py-12 text-gray-600 dark:text-gray-300">
                  <p>No open positions at the moment. Please check back later.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Join Skyshine?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-3">Competitive Compensation</h3>
                <p className="text-gray-600 dark:text-gray-300">Attractive salary packages and benefits that reward your expertise and contribution.</p>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Flexible Work Culture</h3>
                <p className="text-gray-600 dark:text-gray-300">Work-life balance with flexible schedules and remote work options.</p>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold mb-3">Learning & Development</h3>
                <p className="text-gray-600 dark:text-gray-300">Continuous learning opportunities and professional development programs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
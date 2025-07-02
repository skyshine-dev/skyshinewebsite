"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

// CRM field metadata for enumeration fields
const crmFieldMetadata = {
  UF_CRM_3_1726912317234: {
    items: [
      { ID: "217", VALUE: "Training" },
      { ID: "218", VALUE: "Internship" },
      { ID: "223", VALUE: "Part Time Job" },
      { ID: "219", VALUE: "First Job" },
      { ID: "220", VALUE: "Job Switch" },
      { ID: "221", VALUE: "New Business / Startup" },
      { ID: "222", VALUE: "Business Collaboration to scale" }
    ]
  },
  UF_CRM_3_1707666458169: {
    items: [
      { ID: "40", VALUE: "Customer Relationship" },
      { ID: "44", VALUE: "Business Management" },
      { ID: "110", VALUE: "Finance Management" },
      { ID: "45", VALUE: "Human Resources" },
      { ID: "46", VALUE: "Marketing Management" },
      { ID: "111", VALUE: "Software Programming" },
      { ID: "243", VALUE: "Research and Development" },
      { ID: "112", VALUE: "Assistant" }
    ]
  },
  UF_CRM_3_1710744725747: {
    items: [
      { ID: "118", VALUE: "Bengaluru" },
      { ID: "119", VALUE: "Indore" },
      { ID: "120", VALUE: "Jabalpur" }
    ]
  },
  UF_CRM_3_1710744613435: {
    items: [
      { ID: "116", VALUE: "Remote" },
      { ID: "117", VALUE: "On-Site" }
    ]
  }
};

// Helper function to get enum ID by value
// const getEnumIdByValue = (fieldId: string, value: string) => {
//   const field = crmFieldMetadata[fieldId];
//   if (!field) return null;
//   const item = field.items.find(item => item.VALUE === value);
//   return item ? item.ID : null;
// };

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isInternship: boolean;
  employmentType: string;
  UF_CRM_3_1707666458169: string;
  expectedSalary: string;
  UF_CRM_3_1710744613435: string;
  portfolioType: string;
  portfolioLink: string;
  portfolioFile: File | null;
  pastInternship: string;
  currentExpectations: string;
  careerGoal: string;
  resume: File | null;
  locationPreference: string;
  roleCategory: string;
}

export default function JobApplication() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    isInternship: false,
    employmentType: '',
    UF_CRM_3_1707666458169: '',
    expectedSalary: '',
    UF_CRM_3_1710744613435: '',
    portfolioType: '',
    portfolioLink: '',
    portfolioFile: null,
    pastInternship: '',
    currentExpectations: '',
    careerGoal: '',
    resume: null,
    locationPreference: '',
    roleCategory: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: string; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
      if (errors.resume) {
        setErrors(prev => ({ ...prev, resume: '' }));
      }
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Personal Information Validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters long';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters long';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-()+]{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number with at least 10 digits';
    }

    // Job Preferences Validation
    if (!formData.employmentType) {
      newErrors.employmentType = 'Please select employment type';
    }

    if (!formData.UF_CRM_3_1707666458169) {
      newErrors.UF_CRM_3_1707666458169 = 'Please select role category';
    }

    if (!formData.expectedSalary.trim()) {
      newErrors.expectedSalary = 'Expected salary is required';
    } else if (isNaN(Number(formData.expectedSalary.replace(/[^0-9.]/g, '')))) {
      newErrors.expectedSalary = 'Please enter a valid salary amount';
    }

    if (!formData.UF_CRM_3_1710744613435) {
      newErrors.UF_CRM_3_1710744613435 = 'Location preference is required';
    }

    // Portfolio Validation
    if (formData.portfolioType === "113") { // Link type
      if (!formData.portfolioLink || !formData.portfolioLink.trim()) {
        newErrors.portfolioLink = 'Portfolio link is required';
      } else {
        try {
          new URL(formData.portfolioLink);
        } catch {
          newErrors.portfolioLink = 'Please enter a valid URL';
        }
      }
    } else if (formData.portfolioType === "114") { // File type
      if (!formData.portfolioFile) {
        newErrors.portfolioFile = 'Portfolio file is required';
      } else {
        const allowedTypes = ['.pdf', '.doc', '.docx', '.zip', '.rar'];
        const fileExt = '.' + formData.portfolioFile.name.split('.').pop()?.toLowerCase();
        if (!allowedTypes.includes(fileExt)) {
          newErrors.portfolioFile = 'Please upload a valid file format (PDF, DOC, DOCX, ZIP, RAR)';
        } else if (formData.portfolioFile.size > 10 * 1024 * 1024) { // 10MB limit
          newErrors.portfolioFile = 'File size should not exceed 10MB';
        }
      }
    }

    // Additional Information Validation
    if (!formData.currentExpectations.trim()) {
      newErrors.currentExpectations = 'Current expectations are required';
    } else if (formData.currentExpectations.trim().length < 50) {
      newErrors.currentExpectations = 'Please provide more detailed expectations (at least 50 characters)';
    }

    if (!formData.careerGoal.trim()) {
      newErrors.careerGoal = 'Career goal is required';
    } else if (formData.careerGoal.trim().length < 50) {
      newErrors.careerGoal = 'Please provide more detailed career goals (at least 50 characters)';
    }

    // Resume Validation
    if (!formData.resume) {
      newErrors.resume = 'Resume is required';
    } else {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(formData.resume.type)) {
        newErrors.resume = 'Please upload a PDF or Word document';
      } else if (formData.resume.size > 5 * 1024 * 1024) { // 5MB limit
        newErrors.resume = 'File size should not exceed 5MB';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);
    setErrors({});

    const isValid = validateForm();
    if (!isValid) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields correctly.'
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);
    try {
      const formDataPayload = new FormData();
      
      // Add form values
      const values = {
        "CONTACT_NAME": [formData.firstName],
        "CONTACT_LAST_NAME": [formData.lastName],
        "CONTACT_EMAIL": [formData.email],
        "CONTACT_PHONE": [formData.phone],
        "DYNAMIC_141_UF_CRM_3_1726912317234": [formData.isInternship ? "218" : "219"],
        "DYNAMIC_141_UF_CRM_3_1707666458169": [formData.UF_CRM_3_1707666458169],
        "DYNAMIC_141_UF_CRM_3_1726899350310": [formData.expectedSalary],
        "DYNAMIC_141_UF_CRM_3_1710744613435": [formData.UF_CRM_3_1710744613435],
        "DYNAMIC_141_UF_CRM_3_1710744725747": [formData.locationPreference],
        "DYNAMIC_141_UF_CRM_3_1707681166384": [formData.portfolioType],
        "DYNAMIC_141_UF_CRM_3_1726901980831": [formData.currentExpectations],
        "DYNAMIC_141_UF_CRM_3_1726897272233": [formData.careerGoal],
        "DYNAMIC_141_UF_CRM_3_1707681166384_LINK": formData.portfolioType === "113" ? [formData.portfolioLink] : []
      };

      // Add required form data fields
      formDataPayload.append('values', JSON.stringify(values));
      formDataPayload.append('properties', JSON.stringify({}));
      formDataPayload.append('consents', JSON.stringify({ "AGREEMENT_1": "Y" }));
      formDataPayload.append('recaptcha', 'undefined');
      formDataPayload.append('timeZoneOffset', '-330');
      formDataPayload.append('id', '9');
      formDataPayload.append('sec', '6061cm');
      formDataPayload.append('lang', 'en');
      formDataPayload.append('entities', JSON.stringify([]));
      formDataPayload.append('security_sign', 'undefined');

      // Add resume file if present
      if (formData.resume) {
        formDataPayload.append('resume', formData.resume);
      }

      // Add portfolio file if present and type is file
      if (formData.portfolioType === "114" && formData.portfolioFile) {
        formDataPayload.append('portfolio', formData.portfolioFile);
      }

      const response = await fetch('https://office.skyshine.in/bitrix/services/main/ajax.php?action=crm.site.form.fill', {
        method: 'POST',
        body: formDataPayload,
        headers: {
          'Accept': '*/*',
          'User-Agent': 'Mozilla/5.0',
          'Referer': 'https://apply.jobs.skyshine.in/',
          'Origin': 'https://apply.jobs.skyshine.in'
        },
        mode: 'cors',
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setSubmitStatus({
        type: 'success',
        message: 'Your application has been submitted successfully! We will review your application and get back to you soon.'
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        isInternship: false,
        employmentType: '',
        UF_CRM_3_1707666458169: '',
        expectedSalary: '',
        UF_CRM_3_1710744613435: '',
        portfolioType: '',
        portfolioLink: '',
        portfolioFile: null,
        pastInternship: '',
        currentExpectations: '',
        careerGoal: '',
        resume: null,
        locationPreference: '',
        roleCategory: ''
      } as FormData);

      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred while submitting your application. Please try again.'
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Job Application
          </h1>

          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg mb-6 ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
            >
              {submitStatus.message}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 ${errors.firstName ? 'border-red-500' : ''}`}
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 ${errors.lastName ? 'border-red-500' : ''}`}
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 ${errors.phone ? 'border-red-500' : ''}`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Job Preferences */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Employment Type</label>
                <select
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 ${errors.employmentType ? 'border-red-500' : ''}`}
                >
                  <option value="">Select Type</option>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
                {errors.employmentType && <p className="text-red-500 text-sm mt-1">{errors.employmentType}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Expert Job Category</label>
                <select
                  name="UF_CRM_3_1707666458169"
                  value={formData.UF_CRM_3_1707666458169}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 ${errors.UF_CRM_3_1707666458169 ? 'border-red-500' : ''}`}
                >
                  <option value="">Select Category</option>
                  {crmFieldMetadata.UF_CRM_3_1707666458169.items.map(item => (
                    <option key={item.ID} value={item.ID}>{item.VALUE}</option>
                  ))}
                </select>
                {errors.UF_CRM_3_1707666458169 && <p className="text-red-500 text-sm mt-1">{errors.UF_CRM_3_1707666458169}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Expected Salary</label>
                <input
                  type="text"
                  name="expectedSalary"
                  value={formData.expectedSalary}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 ${errors.expectedSalary ? 'border-red-500' : ''}`}
                  placeholder="Annual salary expectation"
                />
                {errors.expectedSalary && <p className="text-red-500 text-sm mt-1">{errors.expectedSalary}</p>}
              </div>
              {/* Job Location Preference */}
              <div>
                <label className="block text-sm font-medium mb-1">Job Location Preference</label>
                <select
                  name="UF_CRM_3_1710744613435"
                  value={formData.UF_CRM_3_1710744613435}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 ${errors.UF_CRM_3_1710744613435 ? 'border-red-500' : ''}`}
                >
                  <option value="">Select Location Preference</option>
                  {crmFieldMetadata.UF_CRM_3_1710744613435.items.map(item => (
                    <option key={item.ID} value={item.ID}>{item.VALUE}</option>
                  ))}
                </select>
                {errors.UF_CRM_3_1710744613435 && <p className="text-red-500 text-sm mt-1">{errors.UF_CRM_3_1710744613435}</p>}
              
                {formData.UF_CRM_3_1710744613435 === "117" && ( // Show when On-Site is selected
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">Preferred Location</label>
                    <select
                      name="locationPreference"
                      value={formData.locationPreference}
                      onChange={handleInputChange}
                      className={`w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 ${errors.locationPreference ? 'border-red-500' : ''}`}
                    >
                      <option value="">Select Location</option>
                      {crmFieldMetadata.UF_CRM_3_1710744725747.items.map(item => (
                        <option key={item.ID} value={item.ID}>{item.VALUE}</option>
                      ))}
                    </select>
                    {errors.locationPreference && <p className="text-red-500 text-sm mt-1">{errors.locationPreference}</p>}
                  </div>
                )}
              </div>

              {/* Portfolio Section */}
              <div>
                <label className="block text-sm font-medium mb-1">Portfolio Type</label>
                <select
                  name="portfolioType"
                  value={formData.portfolioType}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 ${errors.portfolioType ? 'border-red-500' : ''}`}
                >
                  <option value="">Select Portfolio Type</option>
                  <option value="UF_CRM_3_1726901360013">Link</option>
                  <option value="UF_CRM_3_1726901376070">Project File</option>
                  <option value="none">Don&apos;t have (Higher chances of rejection, please prepare and re-submit with a valid portfolio)</option>
                </select>
                {errors.portfolioType && <p className="text-red-500 text-sm mt-1">{errors.portfolioType}</p>}
                <p className="text-sm text-red-500 mt-1">Warning: An invalid portfolio will lead to immediate rejection and a permanent blacklist for future applications</p>

                {formData.portfolioType === "UF_CRM_3_1726901360013" && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">Portfolio Link</label>
                    <input
                      type="url"
                      name="portfolioLink"
                      value={formData.portfolioLink || ''}
                      onChange={handleInputChange}
                      placeholder="Enter your portfolio URL"
                      className={`w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 ${errors.portfolioLink ? 'border-red-500' : ''}`}
                      required
                    />
                    {errors.portfolioLink && <p className="text-red-500 text-sm mt-1">{errors.portfolioLink}</p>}
                  </div>
                )}

                {formData.portfolioType === "UF_CRM_3_1726901376070" && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">Project File</label>
                    <input
                      type="file"
                      name="portfolioFile"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.zip,.rar"
                      className={`w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 ${errors.portfolioFile ? 'border-red-500' : ''}`}
                      required
                    />
                    {errors.portfolioFile && <p className="text-red-500 text-sm mt-1">{errors.portfolioFile}</p>}
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Accepted formats: PDF, DOC, DOCX, ZIP, RAR</p>
                  </div>
                )}
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <label className="block text-sm font-medium mb-1">Career Goal</label>
              <textarea
                name="careerGoal"
                value={formData.careerGoal}
                onChange={handleInputChange}
                rows={4}
                className={`w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 ${errors.careerGoal ? 'border-red-500' : ''}`}
                placeholder="Tell us about your career goals"
              />
              {errors.careerGoal && <p className="text-red-500 text-sm mt-1">{errors.careerGoal}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Current Expectations</label>
              <textarea
                name="currentExpectations"
                value={formData.currentExpectations}
                onChange={handleInputChange}
                rows={4}
                className={`w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 ${errors.currentExpectations ? 'border-red-500' : ''}`}
                placeholder="What are your expectations from this role?"
              />
              {errors.currentExpectations && <p className="text-red-500 text-sm mt-1">{errors.currentExpectations}</p>}
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block text-sm font-medium mb-1">Resume</label>
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className={`w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 ${errors.resume ? 'border-red-500' : ''}`}
              />
              {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Accepted formats: PDF, DOC, DOCX</p>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
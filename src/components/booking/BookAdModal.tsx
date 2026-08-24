"use client";

import React, { useState, useEffect } from "react";
import { useBookModal } from "@/context/BookModalContext";

interface FormData {
  businessName: string;
  contactPerson: string;
  phone: string;
  email: string;
  businessType: string;
  campaignDuration: string;
  startDate: string;
  message: string;
}

interface FormErrors {
  businessName?: string;
  contactPerson?: string;
  phone?: string;
  email?: string;
}

export function BookAdModal() {
  const { isOpen, closeBookModal } = useBookModal();

  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    contactPerson: "",
    phone: "",
    email: "",
    businessType: "",
    campaignDuration: "1 Month",
    startDate: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Lock body scroll and set up ESC key listener when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          closeBookModal();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, closeBookModal]);

  if (!isOpen) return null;

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.businessName.trim()) {
      newErrors.businessName = "Business / Brand Name is required.";
    }

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = "Contact Person is required.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required.";
    } else if (!/^[0-9+\s-]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setFormData({
      businessName: "",
      contactPerson: "",
      phone: "",
      email: "",
      businessType: "",
      campaignDuration: "1 Month",
      startDate: "",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const handleCloseAndReset = () => {
    closeBookModal();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(11, 12, 14, 0.85)",
        backdropFilter: "blur(8px)",
        padding: "0.75rem",
      }}
      onClick={closeBookModal}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <style>{`
        .always-light-modal-card {
          color-scheme: light !important;
          background-color: #FFFFFF !important;
          color: #111827 !important;
        }
        .always-light-modal-card input,
        .always-light-modal-card select,
        .always-light-modal-card textarea {
          color-scheme: light !important;
          background-color: #F9FAFB !important;
          color: #111827 !important;
          border-color: #D1D5DB !important;
        }
        .always-light-modal-card input::placeholder,
        .always-light-modal-card textarea::placeholder {
          color: #9CA3AF !important;
        }
        .always-light-modal-card label {
          color: #374151 !important;
        }
        .always-light-modal-card h2,
        .always-light-modal-card h3 {
          color: #0B0C0E !important;
        }
        .always-light-modal-card p {
          color: #4B5563 !important;
        }
      `}</style>

      {/* Light Premium Modal Surface Box (FORCED ALWAYS LIGHT MODE) */}
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[88vh] bg-white border border-[#E5E7EB] text-[#111827] overflow-y-auto p-5 sm:p-8 lg:p-10 text-left shadow-2xl rounded-none always-light-modal-card"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "800px",
          maxHeight: "92vh",
          backgroundColor: "#FFFFFF",
          border: "1px solid #E5E7EB",
          color: "#111827",
          colorScheme: "light",
          padding: "1.5rem 1.25rem",
          overflowY: "auto",
          boxSizing: "border-box",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top-Right Accessible Close Button (Min 44x44px touch target) */}
        <button
          type="button"
          onClick={closeBookModal}
          aria-label="Close modal"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-11 h-11 flex items-center justify-center text-[#6B7280] hover:text-[#111827] hover:bg-[#F3F4F6] border border-transparent hover:border-[#E5E7EB] transition-colors"
          style={{
            position: "absolute",
            top: "0.75rem",
            right: "0.75rem",
            width: "44px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#6B7280",
            backgroundColor: "transparent",
            border: "1px solid transparent",
            cursor: "pointer",
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* SUCCESS STATE */}
        {isSubmitted ? (
          <div className="py-6 sm:py-8 text-center flex flex-col items-center justify-center">
            <div 
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#F05A24]/10 border border-[#F05A24] flex items-center justify-center mb-5"
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                backgroundColor: "rgba(240, 90, 36, 0.1)",
                border: "1px solid #F05A24",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#F05A24]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h2 
              id="modal-title"
              className="text-xl sm:text-3xl font-extrabold tracking-tight text-[#0B0C0E] uppercase mb-2 font-sans"
              style={{ color: "#0B0C0E", fontWeight: 800, textTransform: "uppercase" }}
            >
              ENQUIRY RECEIVED
            </h2>

            <p 
              className="text-base sm:text-lg text-[#1F2937] max-w-lg mb-1 leading-relaxed font-semibold"
              style={{ color: "#1F2937", fontSize: "1rem", maxWidth: "480px" }}
            >
              Thanks for reaching out.
            </p>
            <p 
              className="text-xs sm:text-base text-[#4B5563] max-w-lg mb-6 leading-relaxed font-normal"
              style={{ color: "#4B5563", fontSize: "0.875rem", maxWidth: "480px", marginBottom: "1.5rem" }}
            >
              Our team will get in touch with you shortly.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleCloseAndReset}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#F05A24] hover:bg-[#D94A17] text-white font-bold text-xs tracking-wider uppercase min-h-[44px] px-8 transition-colors duration-200"
                style={{
                  backgroundColor: "#F05A24",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  minHeight: "44px",
                  padding: "0.75rem 2rem",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                CLOSE
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-[#F3F4F6] text-[#0B0C0E] font-bold text-xs tracking-wider uppercase min-h-[44px] px-8 border border-[#D1D5DB] transition-colors duration-200"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#0B0C0E",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  minHeight: "44px",
                  padding: "0.75rem 2rem",
                  border: "1px solid #D1D5DB",
                  cursor: "pointer",
                }}
              >
                SUBMIT ANOTHER ENQUIRY
              </button>
            </div>
          </div>
        ) : (
          /* FORM CONTENT IN LIGHT THEME */
          <div>
            {/* Modal Header */}
            <div className="mb-6 sm:mb-8 pr-10 text-left">
              <span 
                className="text-xs font-bold tracking-widest text-[#F05A24] uppercase font-mono mb-1.5 block"
                style={{ color: "#F05A24", fontWeight: 700, fontSize: "0.6875rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
              >
                DIGITAL ADVERTISING ENQUIRY
              </span>

              <h2 
                id="modal-title"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0B0C0E] uppercase mb-1.5 font-sans leading-none"
                style={{
                  color: "#0B0C0E",
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                }}
              >
                BOOK YOUR AD
              </h2>

              <p 
                className="text-sm sm:text-lg font-bold text-[#1F2937] mb-1.5 leading-snug"
                style={{ color: "#1F2937", fontSize: "1rem", fontWeight: 700 }}
              >
                Put your brand in front of the people who matter.
              </p>

              <p 
                className="text-xs sm:text-sm text-[#4B5563] max-w-xl leading-relaxed font-normal"
                style={{ color: "#4B5563", fontSize: "0.8125rem", lineHeight: 1.5 }}
              >
                Enquire about advertising on Smart City Digital Media&apos;s giant 22 × 16 FT outdoor LED screen in Dharwad, Karnataka.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className="w-full">
              
              {/* 2-Column Grid Desktop (1-Column Mobile) */}
              <div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-5"
                style={{ display: "grid", gap: "1rem" }}
              >
                {/* LEFT COLUMN */}
                <div className="flex flex-col gap-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  
                  {/* Business Name */}
                  <div>
                    <label 
                      htmlFor="businessName" 
                      className="block text-xs font-bold tracking-widest text-[#374151] uppercase mb-1.5 font-mono"
                      style={{ color: "#374151", fontSize: "0.6875rem", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "0.25rem" }}
                    >
                      Business / Brand Name <span style={{ color: "#F05A24" }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g. Dharwad Retailers"
                      className="w-full bg-[#F9FAFB] border border-[#D1D5DB] text-[#111827] px-3.5 py-3 text-base sm:text-sm focus:border-[#F05A24] focus:outline-none placeholder-[#9CA3AF]"
                      style={{
                        display: "block",
                        width: "100%",
                        boxSizing: "border-box",
                        backgroundColor: "#F9FAFB",
                        border: errors.businessName ? "1px solid #EF4444" : "1px solid #D1D5DB",
                        color: "#111827",
                        colorScheme: "light",
                        padding: "0.75rem 0.875rem",
                        fontSize: "1rem", // 16px to prevent iOS Safari auto-zoom
                        minHeight: "44px",
                        borderRadius: "0px",
                      }}
                    />
                    {errors.businessName && (
                      <span className="text-xs text-red-600 mt-1 font-mono block">{errors.businessName}</span>
                    )}
                  </div>

                  {/* Contact Person */}
                  <div>
                    <label 
                      htmlFor="contactPerson" 
                      className="block text-xs font-bold tracking-widest text-[#374151] uppercase mb-1.5 font-mono"
                      style={{ color: "#374151", fontSize: "0.6875rem", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "0.25rem" }}
                    >
                      Contact Person <span style={{ color: "#F05A24" }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      className="w-full bg-[#F9FAFB] border border-[#D1D5DB] text-[#111827] px-3.5 py-3 text-base sm:text-sm focus:border-[#F05A24] focus:outline-none placeholder-[#9CA3AF]"
                      style={{
                        display: "block",
                        width: "100%",
                        boxSizing: "border-box",
                        backgroundColor: "#F9FAFB",
                        border: errors.contactPerson ? "1px solid #EF4444" : "1px solid #D1D5DB",
                        color: "#111827",
                        colorScheme: "light",
                        padding: "0.75rem 0.875rem",
                        fontSize: "1rem",
                        minHeight: "44px",
                        borderRadius: "0px",
                      }}
                    />
                    {errors.contactPerson && (
                      <span className="text-xs text-red-600 mt-1 font-mono block">{errors.contactPerson}</span>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label 
                      htmlFor="phone" 
                      className="block text-xs font-bold tracking-widest text-[#374151] uppercase mb-1.5 font-mono"
                      style={{ color: "#374151", fontSize: "0.6875rem", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "0.25rem" }}
                    >
                      Phone Number <span style={{ color: "#F05A24" }}>*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#F9FAFB] border border-[#D1D5DB] text-[#111827] px-3.5 py-3 text-base sm:text-sm focus:border-[#F05A24] focus:outline-none placeholder-[#9CA3AF]"
                      style={{
                        display: "block",
                        width: "100%",
                        boxSizing: "border-box",
                        backgroundColor: "#F9FAFB",
                        border: errors.phone ? "1px solid #EF4444" : "1px solid #D1D5DB",
                        color: "#111827",
                        colorScheme: "light",
                        padding: "0.75rem 0.875rem",
                        fontSize: "1rem",
                        minHeight: "44px",
                        borderRadius: "0px",
                      }}
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-600 mt-1 font-mono block">{errors.phone}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-xs font-bold tracking-widest text-[#374151] uppercase mb-1.5 font-mono"
                      style={{ color: "#374151", fontSize: "0.6875rem", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "0.25rem" }}
                    >
                      Email Address <span style={{ color: "#F05A24" }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@business.com"
                      className="w-full bg-[#F9FAFB] border border-[#D1D5DB] text-[#111827] px-3.5 py-3 text-base sm:text-sm focus:border-[#F05A24] focus:outline-none placeholder-[#9CA3AF]"
                      style={{
                        display: "block",
                        width: "100%",
                        boxSizing: "border-box",
                        backgroundColor: "#F9FAFB",
                        border: errors.email ? "1px solid #EF4444" : "1px solid #D1D5DB",
                        color: "#111827",
                        colorScheme: "light",
                        padding: "0.75rem 0.875rem",
                        fontSize: "1rem",
                        minHeight: "44px",
                        borderRadius: "0px",
                      }}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-600 mt-1 font-mono block">{errors.email}</span>
                    )}
                  </div>

                </div>

                {/* RIGHT COLUMN */}
                <div className="flex flex-col gap-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  
                  {/* Type of Business */}
                  <div>
                    <label 
                      htmlFor="businessType" 
                      className="block text-xs font-bold tracking-widest text-[#374151] uppercase mb-1.5 font-mono"
                      style={{ color: "#374151", fontSize: "0.6875rem", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "0.25rem" }}
                    >
                      Type of Business
                    </label>
                    <input
                      type="text"
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      placeholder="e.g. Retail, Automobile, Healthcare"
                      className="w-full bg-[#F9FAFB] border border-[#D1D5DB] text-[#111827] px-3.5 py-3 text-base sm:text-sm focus:border-[#F05A24] focus:outline-none placeholder-[#9CA3AF]"
                      style={{
                        display: "block",
                        width: "100%",
                        boxSizing: "border-box",
                        backgroundColor: "#F9FAFB",
                        border: "1px solid #D1D5DB",
                        color: "#111827",
                        colorScheme: "light",
                        padding: "0.75rem 0.875rem",
                        fontSize: "1rem",
                        minHeight: "44px",
                        borderRadius: "0px",
                      }}
                    />
                  </div>

                  {/* Campaign Duration */}
                  <div>
                    <label 
                      htmlFor="campaignDuration" 
                      className="block text-xs font-bold tracking-widest text-[#374151] uppercase mb-1.5 font-mono"
                      style={{ color: "#374151", fontSize: "0.6875rem", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "0.25rem" }}
                    >
                      Preferred Campaign Duration
                    </label>
                    <select
                      id="campaignDuration"
                      name="campaignDuration"
                      value={formData.campaignDuration}
                      onChange={handleChange}
                      className="w-full bg-[#F9FAFB] border border-[#D1D5DB] text-[#111827] px-3.5 py-3 text-base sm:text-sm focus:border-[#F05A24] focus:outline-none"
                      style={{
                        display: "block",
                        width: "100%",
                        boxSizing: "border-box",
                        backgroundColor: "#F9FAFB",
                        border: "1px solid #D1D5DB",
                        color: "#111827",
                        colorScheme: "light",
                        padding: "0.75rem 0.875rem",
                        fontSize: "1rem",
                        minHeight: "44px",
                        borderRadius: "0px",
                      }}
                    >
                      <option value="1 Week" style={{ backgroundColor: "#FFFFFF", color: "#111827" }}>1 Week</option>
                      <option value="2 Weeks" style={{ backgroundColor: "#FFFFFF", color: "#111827" }}>2 Weeks</option>
                      <option value="1 Month" style={{ backgroundColor: "#FFFFFF", color: "#111827" }}>1 Month</option>
                      <option value="3 Months" style={{ backgroundColor: "#FFFFFF", color: "#111827" }}>3 Months</option>
                      <option value="Other" style={{ backgroundColor: "#FFFFFF", color: "#111827" }}>Other</option>
                    </select>
                  </div>

                  {/* Preferred Start Date */}
                  <div>
                    <label 
                      htmlFor="startDate" 
                      className="block text-xs font-bold tracking-widest text-[#374151] uppercase mb-1.5 font-mono"
                      style={{ color: "#374151", fontSize: "0.6875rem", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "0.25rem" }}
                    >
                      Preferred Start Date
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full bg-[#F9FAFB] border border-[#D1D5DB] text-[#111827] px-3.5 py-3 text-base sm:text-sm focus:border-[#F05A24] focus:outline-none"
                      style={{
                        display: "block",
                        width: "100%",
                        boxSizing: "border-box",
                        backgroundColor: "#F9FAFB",
                        border: "1px solid #D1D5DB",
                        color: "#111827",
                        padding: "0.75rem 0.875rem",
                        fontSize: "1rem",
                        minHeight: "44px",
                        colorScheme: "light",
                        borderRadius: "0px",
                      }}
                    />
                  </div>

                </div>

              </div>

              {/* FULL WIDTH: MESSAGE / REQUIREMENTS */}
              <div className="flex flex-col mb-6">
                <label 
                  htmlFor="message" 
                  className="block text-xs font-bold tracking-widest text-[#374151] uppercase mb-1.5 font-mono"
                  style={{ color: "#374151", fontSize: "0.6875rem", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "0.25rem" }}
                >
                  Message / Advertising Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your brand, campaign goals, or any specific requirements..."
                  className="w-full bg-[#F9FAFB] border border-[#D1D5DB] text-[#111827] px-3.5 py-3 text-base sm:text-sm focus:border-[#F05A24] focus:outline-none placeholder-[#9CA3AF]"
                  style={{
                    display: "block",
                    width: "100%",
                    boxSizing: "border-box",
                    backgroundColor: "#F9FAFB",
                    border: "1px solid #D1D5DB",
                    color: "#111827",
                    colorScheme: "light",
                    padding: "0.75rem 0.875rem",
                    fontSize: "1rem",
                    resize: "vertical",
                    borderRadius: "0px",
                  }}
                />
              </div>

              {/* REFINED LIGHT CTA CONTAINER WITH TWO SEPARATE BUTTONS */}
              <div 
                className="bg-[#F9FAFB] border border-[#E5E7EB] p-5 sm:p-7 text-center flex flex-col items-center justify-center"
                style={{
                  backgroundColor: "#F9FAFB",
                  border: "1px solid #E5E7EB",
                  padding: "1.5rem 1rem",
                  textAlign: "center",
                }}
              >
                <h3 
                  className="text-base sm:text-xl font-bold tracking-tight text-[#0B0C0E] uppercase mb-1 font-sans"
                  style={{ color: "#0B0C0E", fontWeight: 800, textTransform: "uppercase", fontSize: "1.125rem" }}
                >
                  READY TO GET YOUR BRAND SEEN?
                </h3>

                <p 
                  className="text-xs sm:text-sm text-[#4B5563] mb-4 leading-relaxed font-normal"
                  style={{ color: "#4B5563", fontSize: "0.8125rem", marginBottom: "1rem" }}
                >
                  Tell us what you need and we&apos;ll get back to you.
                </p>

                {/* TWO SEPARATE CTA BUTTONS SIDE-BY-SIDE ON DESKTOP */}
                <div 
                  className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full"
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  {/* PRIMARY CTA: BOOK YOUR AD */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-[#F05A24] hover:bg-[#D94A17] text-white font-bold text-xs sm:text-sm tracking-wider uppercase min-h-[44px] px-7 transition-colors duration-200 shadow-md border-none cursor-pointer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#F05A24",
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      minHeight: "44px",
                      padding: "0.75rem 1.75rem",
                      border: "none",
                      cursor: "pointer",
                      borderRadius: "0px",
                    }}
                  >
                    {isSubmitting ? "Submitting..." : "BOOK YOUR AD"}
                  </button>

                  {/* SECONDARY CTA: GET A CALLBACK */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-[#FFF5F0] text-[#0B0C0E] hover:text-[#F05A24] font-bold text-xs sm:text-sm tracking-wider uppercase min-h-[44px] px-7 border-2 border-[#F05A24] transition-colors duration-200 cursor-pointer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#FFFFFF",
                      color: "#0B0C0E",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      minHeight: "44px",
                      padding: "0.75rem 1.75rem",
                      border: "2px solid #F05A24",
                      cursor: "pointer",
                      borderRadius: "0px",
                    }}
                  >
                    {isSubmitting ? "Submitting..." : "GET A CALLBACK"}
                  </button>
                </div>

                <p 
                  className="text-[11px] text-[#6B7280] mt-3 font-normal"
                  style={{ color: "#6B7280", fontSize: "0.6875rem", marginTop: "0.75rem" }}
                >
                  Your enquiry will be reviewed by our team and we&apos;ll get back to you.
                </p>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";

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

export function BookAdForm() {
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

  if (isSubmitted) {
    return (
      <div 
        className="w-full bg-[#14161B] border border-[#242832] p-8 sm:p-12 text-center flex flex-col items-center justify-center my-6"
        style={{
          backgroundColor: "#14161B",
          border: "1px solid #242832",
          padding: "3.5rem 2rem",
          textAlign: "center",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div 
          className="w-16 h-16 rounded-full bg-[#F05A24]/10 border border-[#F05A24] flex items-center justify-center mb-6"
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            backgroundColor: "rgba(240, 90, 36, 0.1)",
            border: "1px solid #F05A24",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg className="w-8 h-8 text-[#F05A24]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase mb-3 font-sans"
          style={{ color: "#FFFFFF", fontWeight: 800, textTransform: "uppercase" }}
        >
          ENQUIRY RECEIVED
        </h2>

        <p 
          className="text-base sm:text-lg text-[#D1D5DB] max-w-lg mb-8 leading-relaxed font-normal"
          style={{ color: "#D1D5DB", fontSize: "1.0625rem", maxWidth: "480px" }}
        >
          Thanks for your enquiry. Our team will get in touch with you shortly.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center bg-[#F05A24] hover:bg-[#D94A17] text-white font-bold text-xs tracking-wider uppercase px-8 py-3.5 transition-colors duration-200"
            style={{
              backgroundColor: "#F05A24",
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              padding: "0.875rem 2rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Submit Another Enquiry
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center bg-transparent hover:bg-[#0B0C0E] text-[#F4F1EA] hover:text-white font-medium text-xs tracking-wider uppercase px-8 py-3.5 border border-[#242832] transition-colors duration-200 no-underline"
            style={{
              backgroundColor: "transparent",
              color: "#F4F1EA",
              fontWeight: 500,
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              padding: "0.875rem 2rem",
              border: "1px solid #242832",
              textDecoration: "none",
            }}
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit}
      noValidate
      className="w-full bg-[#14161B] border border-[#242832] p-6 sm:p-10 lg:p-12 text-left"
      style={{
        backgroundColor: "#14161B",
        border: "1px solid #242832",
        padding: "2.5rem 2rem",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* 2-COLUMN GRID FOR DESKTOP (STACKS TO 1 COLUMN ON MOBILE) */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6"
        style={{
          display: "grid",
          gap: "1.5rem",
        }}
      >
        {/* LEFT COLUMN: CONTACT DETAILS */}
        <div className="flex flex-col gap-6" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          
          {/* 1. Business / Brand Name * */}
          <div className="flex flex-col">
            <label 
              htmlFor="businessName" 
              className="block text-xs font-bold tracking-widest text-[#9CA3AF] uppercase mb-2 font-mono"
              style={{ color: "#9CA3AF", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}
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
              className="w-full bg-[#0B0C0E] border border-[#242832] text-white px-4 py-3.5 text-sm focus:border-[#F05A24] focus:outline-none"
              style={{
                display: "block",
                width: "100%",
                boxSizing: "border-box",
                backgroundColor: "#0B0C0E",
                border: errors.businessName ? "1px solid #EF4444" : "1px solid #242832",
                color: "#FFFFFF",
                padding: "0.875rem 1rem",
                fontSize: "0.9375rem",
                borderRadius: "0px",
              }}
            />
            {errors.businessName && (
              <span className="text-xs text-red-400 mt-1 font-mono">{errors.businessName}</span>
            )}
          </div>

          {/* 2. Contact Person * */}
          <div className="flex flex-col">
            <label 
              htmlFor="contactPerson" 
              className="block text-xs font-bold tracking-widest text-[#9CA3AF] uppercase mb-2 font-mono"
              style={{ color: "#9CA3AF", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}
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
              className="w-full bg-[#0B0C0E] border border-[#242832] text-white px-4 py-3.5 text-sm focus:border-[#F05A24] focus:outline-none"
              style={{
                display: "block",
                width: "100%",
                boxSizing: "border-box",
                backgroundColor: "#0B0C0E",
                border: errors.contactPerson ? "1px solid #EF4444" : "1px solid #242832",
                color: "#FFFFFF",
                padding: "0.875rem 1rem",
                fontSize: "0.9375rem",
                borderRadius: "0px",
              }}
            />
            {errors.contactPerson && (
              <span className="text-xs text-red-400 mt-1 font-mono">{errors.contactPerson}</span>
            )}
          </div>

          {/* 3. Phone Number * */}
          <div className="flex flex-col">
            <label 
              htmlFor="phone" 
              className="block text-xs font-bold tracking-widest text-[#9CA3AF] uppercase mb-2 font-mono"
              style={{ color: "#9CA3AF", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}
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
              className="w-full bg-[#0B0C0E] border border-[#242832] text-white px-4 py-3.5 text-sm focus:border-[#F05A24] focus:outline-none"
              style={{
                display: "block",
                width: "100%",
                boxSizing: "border-box",
                backgroundColor: "#0B0C0E",
                border: errors.phone ? "1px solid #EF4444" : "1px solid #242832",
                color: "#FFFFFF",
                padding: "0.875rem 1rem",
                fontSize: "0.9375rem",
                borderRadius: "0px",
              }}
            />
            {errors.phone && (
              <span className="text-xs text-red-400 mt-1 font-mono">{errors.phone}</span>
            )}
          </div>

          {/* 4. Email Address * */}
          <div className="flex flex-col">
            <label 
              htmlFor="email" 
              className="block text-xs font-bold tracking-widest text-[#9CA3AF] uppercase mb-2 font-mono"
              style={{ color: "#9CA3AF", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}
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
              className="w-full bg-[#0B0C0E] border border-[#242832] text-white px-4 py-3.5 text-sm focus:border-[#F05A24] focus:outline-none"
              style={{
                display: "block",
                width: "100%",
                boxSizing: "border-box",
                backgroundColor: "#0B0C0E",
                border: errors.email ? "1px solid #EF4444" : "1px solid #242832",
                color: "#FFFFFF",
                padding: "0.875rem 1rem",
                fontSize: "0.9375rem",
                borderRadius: "0px",
              }}
            />
            {errors.email && (
              <span className="text-xs text-red-400 mt-1 font-mono">{errors.email}</span>
            )}
          </div>

        </div>

        {/* RIGHT COLUMN: CAMPAIGN SPECIFICATIONS */}
        <div className="flex flex-col gap-6" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          
          {/* 5. Type of Business */}
          <div className="flex flex-col">
            <label 
              htmlFor="businessType" 
              className="block text-xs font-bold tracking-widest text-[#9CA3AF] uppercase mb-2 font-mono"
              style={{ color: "#9CA3AF", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}
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
              className="w-full bg-[#0B0C0E] border border-[#242832] text-white px-4 py-3.5 text-sm focus:border-[#F05A24] focus:outline-none"
              style={{
                display: "block",
                width: "100%",
                boxSizing: "border-box",
                backgroundColor: "#0B0C0E",
                border: "1px solid #242832",
                color: "#FFFFFF",
                padding: "0.875rem 1rem",
                fontSize: "0.9375rem",
                borderRadius: "0px",
              }}
            />
          </div>

          {/* 6. Preferred Campaign Duration (Dropdown Select) */}
          <div className="flex flex-col">
            <label 
              htmlFor="campaignDuration" 
              className="block text-xs font-bold tracking-widest text-[#9CA3AF] uppercase mb-2 font-mono"
              style={{ color: "#9CA3AF", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}
            >
              Preferred Campaign Duration
            </label>
            <select
              id="campaignDuration"
              name="campaignDuration"
              value={formData.campaignDuration}
              onChange={handleChange}
              className="w-full bg-[#0B0C0E] border border-[#242832] text-white px-4 py-3.5 text-sm focus:border-[#F05A24] focus:outline-none"
              style={{
                display: "block",
                width: "100%",
                boxSizing: "border-box",
                backgroundColor: "#0B0C0E",
                border: "1px solid #242832",
                color: "#FFFFFF",
                padding: "0.875rem 1rem",
                fontSize: "0.9375rem",
                borderRadius: "0px",
              }}
            >
              <option value="1 Week" style={{ backgroundColor: "#0B0C0E", color: "#FFFFFF" }}>1 Week</option>
              <option value="2 Weeks" style={{ backgroundColor: "#0B0C0E", color: "#FFFFFF" }}>2 Weeks</option>
              <option value="1 Month" style={{ backgroundColor: "#0B0C0E", color: "#FFFFFF" }}>1 Month</option>
              <option value="3 Months" style={{ backgroundColor: "#0B0C0E", color: "#FFFFFF" }}>3 Months</option>
              <option value="Other" style={{ backgroundColor: "#0B0C0E", color: "#FFFFFF" }}>Other</option>
            </select>
          </div>

          {/* 7. Preferred Start Date */}
          <div className="flex flex-col">
            <label 
              htmlFor="startDate" 
              className="block text-xs font-bold tracking-widest text-[#9CA3AF] uppercase mb-2 font-mono"
              style={{ color: "#9CA3AF", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}
            >
              Preferred Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full bg-[#0B0C0E] border border-[#242832] text-white px-4 py-3.5 text-sm focus:border-[#F05A24] focus:outline-none"
              style={{
                display: "block",
                width: "100%",
                boxSizing: "border-box",
                backgroundColor: "#0B0C0E",
                border: "1px solid #242832",
                color: "#FFFFFF",
                padding: "0.875rem 1rem",
                fontSize: "0.9375rem",
                colorScheme: "dark",
                borderRadius: "0px",
              }}
            />
          </div>

        </div>

      </div>

      {/* FULL-WIDTH SECTION BELOW THE 2 COLUMNS: MESSAGE / REQUIREMENTS */}
      <div className="flex flex-col mb-8 pt-2">
        <label 
          htmlFor="message" 
          className="block text-xs font-bold tracking-widest text-[#9CA3AF] uppercase mb-2 font-mono"
          style={{ color: "#9CA3AF", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}
        >
          Message / Advertising Requirements
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your brand, campaign goals, or any specific requirements..."
          className="w-full bg-[#0B0C0E] border border-[#242832] text-white px-4 py-3.5 text-sm focus:border-[#F05A24] focus:outline-none"
          style={{
            display: "block",
            width: "100%",
            boxSizing: "border-box",
            backgroundColor: "#0B0C0E",
            border: "1px solid #242832",
            color: "#FFFFFF",
            padding: "0.875rem 1rem",
            fontSize: "0.9375rem",
            resize: "vertical",
            borderRadius: "0px",
          }}
        />
      </div>

      {/* PRIMARY CTA & SUBTEXT */}
      <div className="flex flex-col items-start pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center bg-[#F05A24] hover:bg-[#D94A17] text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-9 py-4 transition-colors duration-200 shadow-md"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F05A24",
            color: "#FFFFFF",
            fontWeight: 700,
            fontSize: "0.8125rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "1rem 2.5rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isSubmitting ? "Submitting..." : "BOOK YOUR AD"}
        </button>

        <p 
          className="text-xs text-[#9CA3AF] mt-3 font-normal"
          style={{ color: "#9CA3AF", fontSize: "0.75rem", marginTop: "0.75rem" }}
        >
          Your enquiry will be reviewed by our team and we&apos;ll get back to you.
        </p>
      </div>

    </form>
  );
}

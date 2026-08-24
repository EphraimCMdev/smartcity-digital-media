# Smart City Digital Media — Demo Version 1

> **Demo Version 1 (Frontend Prototype)**  
> Premier Outdoor Digital Advertising Web Platform for Dharwad, Karnataka.

---

## 📌 Project Overview

**Smart City Digital Media** is an outdoor digital media company operating a giant **22 × 16 FT LED digital advertising display screen** in Dharwad, Karnataka.

This repository contains **Demo Version 1**, a standalone, fully-responsive frontend web prototype built to demonstrate the visual brand identity, hero showcase, key metrics, advertising value proposition, screen specifications, and interactive enquiry modal flow for prospective advertisers.

---

## 🌐 Public Deployment Guide (Vercel)

This project is 100% ready for zero-configuration deployment on **Vercel** (or Netlify / Cloudflare Pages).

### Vercel Deployment Settings
* **Framework Preset**: Next.js
* **Build Command**: `npm run build` (or `next build`)
* **Output Directory**: `.next` (automatically managed by Vercel)
* **Install Command**: `npm install`
* **Environment Variables**: **None required**

### How to Deploy to Vercel (1-Click)
1. Push this codebase to GitHub, GitLab, or Bitbucket.
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import the repository.
4. Click **Deploy**. Vercel will automatically detect Next.js and publish a live public URL (e.g. `https://smartcity-digital.vercel.app`).

---

## 🚀 Local Development Guide

### Prerequisites
* **Node.js**: v18.0.0 or higher
* **npm**: v9.0.0 or higher

### 1. Installation
```bash
npm install
```

### 2. Run Dev Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Production Build & Local Preview
```bash
npm run build
npm run start
```

---

## ✨ Features Included in Demo V1

### 1. Sticky Navigation Header
* **Brand Logo**: Official Smart City Digital Media circular logo badge & wordmark.
* **Desktop Navigation**: Links to *Our Screen*, *Advertising*, and *How It Works*.
* **Primary Action CTA**: `BOOK YOUR AD` button triggering the interactive enquiry modal.
* **Mobile Navigation**: Fully responsive slide-down menu drawer for mobile viewports.

### 2. Cinematic Hero Section
* **Headline**: `YOUR BRAND. RIGHT IN THE HEART OF DHARWAD.`
* **Background Visual**: High-visibility city billboard photograph with left gradient dark treatment.
* **Primary CTA**: `BOOK YOUR AD` (triggers enquiry modal).
* **Secondary CTA**: `VIEW OUR SCREEN` (smooth-scrolls to `#screen-preview`).

### 3. Key Statistics Strip
* `22 × 16 FT` — Large Format LED Display
* `90K–120K+` — Estimated Daily Footfall
* `390×` — Daily Ad Display Rotations

### 4. "Our Screen" Showcase Section
* Detailed breakdown of display dimensions, resolution clarity, location prominence, and high-frequency exposure.

### 5. Advertising Opportunity Section
* 4 Benefit Cards (`High Visibility`, `90K-120K+ Daily Footfall`, `390× Ad Displays/Day`, `22x16 FT LED Screen`).
* 3-Step Campaign Process (`Choose Your Campaign`, `Share Your Creative`, `Get Your Brand Seen`).
* Section Finish CTA Banner (`Ready to Get Your Brand Seen?`).

### 6. Light Premium "Book Your Ad" Modal Overlay
* Centered light/white card surface (`#FFFFFF`) sitting above the dimmed, blurred homepage backdrop.
* **2-Column Form Grid** (Desktop) & Single Column (Mobile):
  * `Business / Brand Name *`
  * `Contact Person *`
  * `Phone Number *`
  * `Email Address *`
  * `Type of Business`
  * `Preferred Campaign Duration` (Select dropdown)
  * `Preferred Start Date` (Date selector)
  * `Message / Advertising Requirements` (Full-width text area)
* **Dual Action Conversion Buttons**:
  * `[ BOOK YOUR AD ]` (Solid Brand Orange CTA)
  * `[ GET A CALLBACK ]` (Secondary Outlined CTA)
* **Client-Side Form Validation**: Real-time required field verification.
* **Polished Success State**: Inline confirmation message (`ENQUIRY RECEIVED`) with `CLOSE` and `SUBMIT ANOTHER ENQUIRY` controls.

---

## 🚫 Intentionally Excluded Scope (Demo V1)

As this is **Demo Version 1 (Frontend Prototype)**, the following backend systems are intentionally not implemented:
* ❌ No live database or backend API server (form submission is simulated on the client side).
* ❌ No payment gateway or ad slot booking checkout.
* ❌ No automated email or SMS notification service.
* ❌ No advertiser login portal or administrative analytics dashboard.

---

## 📄 License & Ownership

&copy; Smart City Digital Media. Dharwad, Karnataka. All rights reserved.

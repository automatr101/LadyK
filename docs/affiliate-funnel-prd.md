# Affiliate Funnel Landing Page PRD

## 1. Product Overview

This project builds a high-converting affiliate marketing funnel designed to capture visitor contact information before redirecting them to a course platform.

Traffic originates from Pinterest pins that act as advertisements. When users click a pin they land on a landing page that collects their information before redirecting them to the course platform.

Current problem being solved:
The previous funnel redirects users directly to Digistem and does not capture email or phone numbers, meaning potential customers cannot be followed up with later.

The new funnel must collect leads and store them in a database before sending users to the course offer.

Funnel flow:

Pinterest → Landing Page → Lead Database → Bridge Page → Digistem Offer

## 2. Goals

Primary goals:

• Capture visitor email and phone number
• Create a modern, high-converting landing page
• Avoid generic “AI generated” design
• Store leads in a structured database
• Optimize for mobile traffic

Success metrics:

• Landing page conversion rate target: 25–40%
• Lead captured before redirect
• Fast page load times

## 3. Tech Stack

Frontend Framework
Next.js

Styling
Tailwind CSS

Component System
shadcn/ui

UI Enhancement Libraries
Magic UI
21st.dev

Database (preferred)
Supabase

Database (alternative)
Airtable
Google Sheets

## 4. Funnel Architecture

Traffic Flow

Pinterest Pin
→ Landing Page
→ Lead Form Submission
→ Lead stored in database
→ Redirect to Bridge Page
→ Redirect to Digistem course offer

## 5. Pages

### Page 1 — Landing Page

Purpose: Capture visitor information before allowing them to continue to the offer.

Sections:

Hero Section
Headline:
Learn AI Automation and Start Making Money Online

Subheadline:
Get the free AI starter guide and access the full training.

CTA Button:
Get Free Access

The hero section should use Magic UI effects such as spotlight or animated gradient text.

Lead Capture Form

Fields:
Name
Email
Phone (optional but recommended)

Use shadcn form components.

Form behavior:

1. Validate user inputs
2. Send lead data to database
3. Redirect user to bridge page

Features Section

Three feature cards explaining benefits:

AI automation training
Beginner friendly lessons
Monetization strategies

Use components from 21st.dev.

Testimonials Section

Grid layout showing social proof.

Example testimonial:

"Made my first $500 online using AI automation."

Trust Section

Trust badges
Student count or proof indicators
Security indicators

### Page 2 — Bridge Page

Purpose: Warm up the visitor before redirecting them to the affiliate course page.

Components:

Short video placeholder
Benefit bullet points
Call-to-action button

CTA button text:

Continue to Training

When clicked, the button redirects to the Digistem affiliate link.

## 6. Database Requirements

Lead data must be stored with the following fields:

Name
Email
Phone
Source
Created_at timestamp

Example database schema:

Table: leads

id
name
email
phone
source
created_at

Source field should default to "Pinterest".

## 7. Form Logic

When the user submits the form:

Validate inputs
Send data to database
Redirect user to /bridge

Bridge page button should redirect to Digistem affiliate link.

## 8. UI Requirements

Design goals:

Modern SaaS-style landing page
Clean and minimal UI
Mobile-first layout
Smooth animations
Conversion-focused layout

Design elements:

Subtle gradients
Rounded components
Micro-interactions on buttons
Animated hero section

## 9. Performance Requirements

Page load time under 2 seconds
Mobile optimized
Lighthouse score above 90

## 10. Security

Input validation
Spam protection or rate limiting
Secure API requests

## 11. Future Enhancements

Email automation integration
Retargeting pixels
A/B testing for landing pages
Analytics dashboard for leads

## 12. Deliverables

The system must generate:

Landing page
Lead capture form
Database integration
Bridge page
Affiliate redirect system

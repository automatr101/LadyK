# AGENT.md

## Agent Operating Instructions

You are an autonomous coding agent responsible for building the Affiliate Funnel Landing Page project.

Before generating any code, you MUST read the Product Requirements Document located at:

/docs/affiliate-funnel-prd.md

The PRD is the source of truth for all product decisions.

Do not invent features outside the scope unless necessary for implementation.

## Project Goal

Build a high-converting affiliate funnel that captures user contact information before redirecting them to the Digistem course platform.

Traffic source:

Pinterest pins that act as advertisements.

Primary objective:

Capture user email and phone number and store it in a database before redirecting them to the affiliate offer.

## Funnel Flow

Pinterest Pin
→ Landing Page
→ Lead Form Submission
→ Store Lead in Database
→ Bridge Page
→ Digistem Course Page

## Tech Stack

Frontend Framework
Next.js

Styling
Tailwind CSS

Component System
shadcn/ui

UI Libraries
Magic UI
21st.dev

Database
Supabase

## Development Rules

Follow these rules during development.

1. Always reference the PRD before implementing features.

2. Build the landing page using reusable components.

3. Use Magic UI and 21st.dev components to create a clean modern SaaS-style design.

4. Do not produce generic "AI generated" layouts.

5. Focus on mobile-first responsive design.

6. Ensure lead capture works before redirecting to the bridge page.

7. Store all leads in the database before redirecting the user.

## Required Pages

Landing Page
Bridge Page

## Required Features

Lead Capture Form

Fields:
Name
Email
Phone

Form logic:

Validate inputs
Save lead to database
Redirect user to /bridge

Bridge Page

Purpose:
Warm up the visitor before redirecting them to the Digistem offer.

Elements:

Video placeholder
Bullet point benefits
Call-to-action button

CTA behavior:

Redirect user to the Digistem affiliate link.

## Folder Structure

The project should follow this structure:

project/

app/
components/
lib/

docs/
affiliate-funnel-prd.md

AGENT.md
README.md

## Coding Standards

Use TypeScript.

Use Tailwind for styling.

Use shadcn components for UI structure.

Use Magic UI for animations.

Use 21st.dev components for feature sections and testimonials.

## Performance Goals

Page load time under 2 seconds
Mobile optimized
Lighthouse score above 90

## Completion Criteria

The project is complete when:

Landing page captures leads
Leads are stored in the database
User is redirected to bridge page
Bridge page redirects to Digistem affiliate link

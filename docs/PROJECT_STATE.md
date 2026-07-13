# 🥦 BROKOLINK PROJECT STATE

Version: 2.0 Alpha

Last Updated: 12 July 2026

Status: Active Development

---

# Project Overview

BrokoLink adalah platform AI yang membantu affiliate marketer membuat video pendek TikTok hanya dari link produk.

Target utama bukan editor video.

Target utama adalah affiliate pemula yang ingin membuat video berkualitas dalam waktu kurang dari lima menit.

BrokoLink bukan AI Chat.

BrokoLink adalah AI Workflow.

---

# Product Vision

User hanya melakukan satu hal:

Paste Product Link

Selanjutnya seluruh proses dilakukan AI secara otomatis.

Workflow:

Paste Link

↓

Product Analysis

↓

Script Generation

↓

Voice Generation

↓

Subtitle Generation

↓

Scene Planning

↓

Video Rendering

↓

Thumbnail

↓

Export

---

# Current Development

Version

BrokoLink V2

Current Sprint

Sprint 4

Current Focus

Production UI

Current Screen

Dashboard

Next Screen

Welcome

---

# Technology Stack

Frontend

- Next.js App Router
- React
- TypeScript
- Tailwind CSS

Backend

- Supabase

Authentication

- Supabase Auth

Database

- PostgreSQL (Supabase)

Storage

- Supabase Storage

Rendering

- Remotion

Deployment

- Vercel

AI Providers

- OpenAI
- Claude
- Gemini
- Groq
- DeepSeek

---

# Architecture

Presentation Layer

↓

Components

↓

Feature Components

↓

Services

↓

Workflow

↓

AI Providers

↓

Database

Rules

- UI tidak boleh memanggil AI secara langsung.
- Semua AI harus melalui Workflow.
- Business Logic tidak boleh berada di UI.
- Semua komponen harus reusable.
- Gunakan TypeScript.
- Jangan gunakan any.

---

# Folder Structure

app/

components/

services/

workflow/

ai/

hooks/

types/

styles/

lib/

public/

docs/

---

# Design Language

Mengikuti:

- Apple Human Interface
- Linear
- Stripe
- Notion

Visual Style

- Minimal
- Premium
- White Space
- Rounded Corner
- Soft Shadow
- Green Primary

---

# Broko Character

Broko adalah maskot resmi BrokoLink.

Broko hadir hampir di seluruh aplikasi.

Broko digunakan pada:

- Welcome
- Onboarding
- Login
- Register
- Dashboard
- AI Loading
- Rewards
- Empty State
- Success
- Profile

Seluruh ilustrasi Broko wajib mengikuti Broko Asset Bible.

---

# Economy

Mata Uang

Broko Seeds

Sumber Reward

- Ads
- Referral
- Daily Login
- Achievement
- Event

Model Bisnis

Freemium

Subscription hanya fitur tambahan.

---

# AI Workflow

Product Link

↓

Product Analysis

↓

Script

↓

Voice

↓

Subtitle

↓

Scene Planning

↓

Rendering

↓

Thumbnail

↓

Export

---

# Current Progress

Sprint 1

✅ Complete

Sprint 2

✅ Complete

Sprint 3

✅ Complete

Sprint 4

🚧 Dashboard Production UI

---

# Existing Screens

001 Splash

002 Onboarding

003 Login

004 Register

005 Forgot Password

006 OTP Verification

007 Dashboard

008 Product Link

009 AI Analysis

010 AI Script

011 AI Voice

012 AI Rendering

013 Video Ready

014 Rewards

015 Profile

016 History

017 Settings

018 Logo

---

# Current Priority

1. Dashboard Final UI

2. Broko Asset Bible

3. Asset Pack #1

4. Welcome Screen

5. Login

6. Register

7. AI Workflow

---

# Development Rules

- One Sprint = One Goal
- Commit setelah setiap Sprint
- Tidak membuat prototype
- Production Ready
- Gunakan reusable component
- Jangan duplicate code
- Satu file satu tanggung jawab
- Seluruh asset mengikuti Asset Bible
- Seluruh UI mengikuti mockup BrokoLink
- Seluruh keputusan teknis mengutamakan scalability

---

# Current Repository Status

Architecture

✅ Stable

UI Foundation

✅ Complete

Design System

✅ Complete

Feature Development

🚧 In Progress

Asset Library

🚧 Planning

AI Engine

⏳ Pending

Backend

⏳ Pending

Deployment

⏳ Pending

---

# Next Milestone

Finish Dashboard Production UI

Create Broko Asset Bible

Generate Broko Asset Pack #1

Implement Welcome Screen

Implement Login Screen

Implement Register Screen

Integrate AI Workflow
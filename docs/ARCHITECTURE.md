# 🏗 BrokoLink V2 Architecture

> Last Updated: 12 July 2026

---

# Architecture Philosophy

BrokoLink is built using a layered architecture.

Every layer has exactly one responsibility.

No layer may directly access another layer unless defined by the architecture.

---

# Architecture Flow

User

↓

Pages

↓

UI Components

↓

Business Components

↓

Services

↓

Workflow

↓

AI Providers / Database

---

# Layer Responsibilities

## app/

Contains application pages and routing.

Rules:

- No business logic.
- No API calls.
- Only compose components.

---

## components/ui

Reusable UI components.

Examples:

- Button
- Card
- Input
- Avatar
- Badge

Rules:

- No business logic.
- No API.
- Pure presentation.

---

## components/dashboard

Business UI.

Examples:

- CreditCard
- GenerateCard
- RecentVideo
- Marketplace

Rules:

- Can use UI components.
- Can receive data via props.

---

## services

Responsible for:

- Supabase
- Authentication
- Storage
- Video Service
- Reward Service

Rules:

- No UI.
- No JSX.

---

## workflow

Responsible for AI pipeline.

Product

↓

Analysis

↓

Script

↓

Voice

↓

Subtitle

↓

Scene

↓

Render

---

## ai

Contains:

- Prompt Engine
- Parser
- Providers
- AI Engine

---

## lib

Contains:

- Constants
- Utilities
- Helper Functions
- Mock Data

---

## hooks

Contains custom React hooks.

---

## types

Contains TypeScript interfaces.

---

## styles

Contains Design Tokens.

---

## public

Contains static assets.

Images

Icons

Broko Character

Marketplace Logos

---

# Golden Rules

1. UI must never contain business logic.

2. Services must never render UI.

3. Pages must only assemble components.

4. Components must be reusable.

5. Avoid duplicate code.

6. One file = one responsibility.

---

# Broko Development Principle

Build systems.

Not pages.

Pages are assembled from systems.
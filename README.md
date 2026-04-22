# BurnTrack

This is my personal sport recorder.

## Description

BurnTrack is a prototype app for recording sports activities, estimating calories burned, and showing simple progress over time.

The goal of version 1 is simple: help the user record an activity quickly and understand basic progress clearly.

## Version 1 Features

### 1. User Profile

Fields:

- Name
- Height
- Weight
- Age, optional
- Sex, optional

Why this matters:

Weight is needed for calorie estimates. Height can be stored now even if the app does not use it much yet.

### 2. Add Activity

Fields:

- Sport type
- Duration in minutes
- Intensity
- Date
- Notes, optional

Sport examples:

- Walking
- Running
- Cycling
- Swimming
- Gym
- Football
- Basketball
- Badminton
- Yoga

### 3. Calorie Estimation

Use this simple formula first:

```text
Calories burned = MET x weight(kg) x duration(hours)
```

This is good enough for the first prototype.

Example MET values:

- Walking, light: 3.0
- Running, moderate: 8.0
- Cycling, moderate: 7.0
- Yoga: 3.0
- Football: 7.0

Important rule:

Always show the result as estimated calories, not exact calories.

### 4. History Page

Show:

- Today's activities
- Total calories today
- Last 7 days
- Total exercise time this week

### 5. Dashboard

Show simple cards:

- Today calories
- Today exercise minutes
- This week calories
- This week exercise minutes

Show one simple chart:

- Calories burned per day over the last 7 days

## What Not To Build Yet

Do not add these in the MVP:

- Google login
- Social features
- AI chat
- Meal tracking
- Wearable sync
- Advanced body metrics
- Recommendations
- Streak engine
- Image upload

These can wait until the main app flow works.

## Suggested Tech Stack

Recommended stack for the first prototype:

- Next.js
- React
- Tailwind CSS
- Prisma
- SQLite
- Recharts

Why:

Next.js lets the frontend and backend live in one project. SQLite is simple for local development. Prisma makes it easier to work with the database.

## Simple Database Design

### User

- id
- name
- height_cm
- weight_kg
- age
- sex
- created_at

### Activity

- id
- user_id
- sport_type
- intensity
- duration_minutes
- met_value
- estimated_calories
- activity_date
- notes
- created_at

## App Pages

### Page 1: Profile Setup

User enters:

- Name
- Height
- Weight
- Age, optional
- Sex, optional

### Page 2: Dashboard

Show:

- Summary cards
- 7-day chart
- Recent activities
- Button to add activity

### Page 3: Add Activity

Form fields:

- Sport type dropdown
- Intensity dropdown
- Duration
- Date
- Notes

When the user submits:

- Calculate estimated calories
- Save the activity record

### Page 4: History

List all activity records:

- Date
- Sport
- Duration
- Estimated calories

Also include:

- Edit button
- Delete button

## Beginner Development Order

Follow these steps one by one.

### Step 1: Set Up The Project

Create the project with:

- Next.js
- Tailwind CSS
- Prisma
- SQLite

Goal:

You should be able to start the app and see the default Next.js page in your browser.

### Step 2: Create Database Models

Create two models:

- User
- Activity

Goal:

The database should be ready to store profile data and activity records.

### Step 3: Build Profile Page

Create a page where the user can enter:

- Name
- Height
- Weight
- Age, optional
- Sex, optional

Goal:

The user can save their profile.

### Step 4: Build Add Activity Form

Create a form where the user can enter:

- Sport type
- Intensity
- Duration
- Date
- Notes

Goal:

The user can submit an activity.

### Step 5: Add Calorie Calculation Logic

Use this formula:

```text
Calories burned = MET x weight(kg) x duration(hours)
```

Goal:

The app calculates estimated calories automatically when an activity is saved.

### Step 6: Build Dashboard Totals

Show:

- Today calories
- Today exercise minutes
- This week calories
- This week exercise minutes

Goal:

The user can quickly understand current progress.

### Step 7: Add 7-Day Chart

Use Recharts to show:

- Calories burned per day over the last 7 days

Goal:

The user can see simple progress visually.

### Step 8: Build History Page

Show all saved activities with:

- Date
- Sport
- Duration
- Estimated calories
- Edit button
- Delete button

Goal:

The user can review and manage old activity records.

## Product Rule

Every feature must answer one question:

```text
Does this help the user record activity faster or understand progress better?
```

If the answer is no, do not build it yet.

## Success Criteria

A successful prototype is:

- Usable by yourself
- Working without bugs in the main flow
- Fast enough to record an activity in under 10 seconds
- Accurate enough for basic totals and charts
- Clear and simple to understand

The first version does not need to be beautiful. It needs to work.

## After MVP

Only after version 1 works, consider adding:

- Weekly goals
- Streaks
- State tracking
- Lightweight suggestions
- Smarter summaries

## First Milestone

Build only these four pages first:

- Profile
- Dashboard
- Add Activity
- History

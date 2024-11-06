# AI Kids Story Generator App

## Overview
The **AI Kids Story Generator** app enables users to create kids' stories with the help of AI, integrating modern technologies like React, Next.js, NextUI, and TypeScript. The app generates stories and images based on user inputs and incorporates a credit system to manage story creation.

## Features
- **Landing Page**: Simple login/signup page with Clerk authentication.
- **Dashboard**: Manage accounts, view stories, and track credits.
- **Story Creation**: Users input subject, type, age group, and image style.
- **AI Integration**: Generates stories (Gini AI API) and images (Replicate API).
- **Credit System**: Limitation on story creation, with an option to purchase more credits.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Designing the App](#designing-the-app)
- [AI Integration](#ai-integration)
- [User Authentication](#user-authentication)
- [Dashboard](#dashboard)
- [Story Creation Workflow](#story-creation-workflow)
- [Deployment](#deployment)

## Prerequisites
- Knowledge of JavaScript and React.
- Node.js and npm installed.
- Familiarity with TypeScript (optional).
- GitHub account.

## Setup
1. **Create Next.js Project**:
   ```bash
   npx create-next-app@latest --typescript
## Setup

### Install NextUI
To install NextUI in your project, run the following command:

```bash
npm install @nextui-org/react
Initialize Clerk Authentication
Follow the Clerk documentation for setting up authentication in your app.

##Designing the App
Landing Page
A login/signup screen to authenticate users.
Dashboard
View stories, credits, and user statistics.

##Story Creation Form
#Inputs for:
Subject
Type
Age group
Image style

##Story Viewer
Display generated stories for the user.

## AI Integration

### Gini AI API
- Use Gini AI to generate text stories based on user input.

### Replicate API
- Generate images that correspond to the stories using Replicate API.

## User Authentication
- Use Clerk for user sign-in and registration.
- Protect routes and check authentication status in your app.

## Dashboard
- Display story statistics, credits, and a list of generated stories.
- Implement pagination to easily navigate through the user's created stories.

## Story Creation Workflow

### Input
- The user provides story details such as subject, type, age group, and image style.

### Credit Check
- Verify the user's available credits to generate a new story.

### Story Generation
- Generate the story using AI and deduct credits from the user account.

## Deployment
- Deploy the app to cloud platforms such as **Vercel**, **AWS**, or **Netlify**.
- Set up CI/CD for seamless updates to your app.

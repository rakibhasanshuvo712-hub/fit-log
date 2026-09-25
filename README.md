Fit Log

A modern and responsive fitness workout application built with Next.js, TypeScript, and Tailwind CSS.

Fit Log allows users to explore workouts, view workout details, save workouts, create a personal workout plan, track completed exercises, and manage their selected workouts through an interactive and responsive interface.

🔗 Links

Live Website: "Fit Log" (https://fit-log-sandy.vercel.app/)
GitHub Repository: "Fit Log on GitHub" (https://github.com/rakibhasanshuvo712-hub/fit-log)
✨ Features

Responsive design for mobile, tablet, and desktop
Modern fitness-focused user interface
Workout library with dynamic workout data
Individual workout details
Add workouts to My Plan
Save workouts for later
Saved workouts section
Mark workouts as completed
Remove workouts from My Plan
Dynamic workout statistics
Workout sorting functionality
Toast notifications for user actions
Loading states
Empty states
Custom 404 page
Responsive navigation
Mobile-friendly menu
Persistent client-side workout state
Production deployment with Vercel
🏋️ Main Sections

Home

The home page introduces Fit Log and provides quick access to the workout collection.

It includes:

Responsive navigation
Hero section
Workout-focused call-to-action
Fitness information
Responsive layout
Workouts

The Workouts section allows users to browse available exercises through a responsive card-based layout.

Users can:

Explore workouts
View workout information
Open workout details
Add workouts to My Plan
Save workouts
Workout Details

Each workout has a dedicated details view containing relevant workout information and available actions.

Users can interact with the workout directly from the details page.

My Plan

My Plan is the user's personalized workout collection.

It allows users to:

View selected workouts
See workout statistics
Mark workouts as done
Remove workouts
Manage their current workout plan
Saved

The Saved section contains workouts that the user has saved for later access.

📊 Workout Management

Fit Log provides several workout-management actions:

Action| Description Add to My Plan| Adds a workout to the personal workout plan Save| Saves a workout for later Mark as Done| Marks a planned workout as completed Remove| Removes a workout from My Plan Sort| Organizes workouts based on available metrics

🔄 Dynamic Data

Workout information is loaded dynamically through the FitLog API.

The application uses the API data to display workout information across the workout listing and detail views.

📱 Responsive Design

Fit Log is designed to provide a consistent experience across different screen sizes.

Mobile

Mobile navigation
Responsive workout cards
Stacked sections
Touch-friendly controls
Tablet

Adaptive grid layouts
Responsive hero section
Flexible workout content
Desktop

Multi-column workout layouts
Full navigation
Expanded dashboard sections
🛠️ Tech Stack

Frontend

Next.js
React
TypeScript
Tailwind CSS
UI & Icons

Lucide React
Deployment

Vercel
📂 Project Structure

fit-log/ ├── public/ ├── src/ │ ├── app/ │ │ ├── page.tsx │ │ ├── my-plan/ │ │ └── ... │ ├── components/ │ ├── context/ │ └── ... ├── package.json ├── next.config.ts ├── tsconfig.json └── README.md

🚀 Getting Started

Prerequisites

Make sure you have the following installed:

Node.js
pnpm
Clone the repository
git clone https://github.com/rakibhasanshuvo712-hub/fit-log.git

Navigate to the project
cd fit-log

Install dependencies
pnpm install

Start the development server
pnpm dev

The application will then be available on the local development server.

🏗️ Production Build

To create a production build:

pnpm build

To run the production build locally:

pnpm start

🌐 Live Preview

Try the deployed application:

"Fit Log" (https://fit-log-sandy.vercel.app/)

👨‍💻 Project

Fit Log

A responsive workout planning and fitness tracking application built for Programming Hero Assignment 6.

📄 License

This project was created for educational purposes as part of the Programming Hero course assignment.
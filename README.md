# CodePerfect
# Project Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running an Ionic-Angular Project](#running)
3. [Project Structure](#project-structure)
4. [Usage](#usage)
    - [Home Page](#home-page)
    - [Leaderboard Page](#leaderboard-page)
    - [Profile Page](#profile-page)
    - [Notifications Page](#notifications-page)
      
## 1. Introduction <a name="introduction"></a>

This project is an Ionic application designed to help users track their weight and other health-related data. It provides a user-friendly interface for entering weight values and displays feedback on the entered data.

## 2. Getting Started <a name="getting-started"></a>

### Prerequisites <a name="prerequisites"></a>

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine.
- Ionic CLI installed globally.
- Basic knowledge of Angular and Ionic.

### Installation <a name="installation"></a>

1. Clone this repository to your local machine:
```bash
git clone https://github.com/MnR-Hackathon-Pool-D/2023-hackathon-codeperfect.git
```
   
2. Change to the project directory:
```bash
cd 2023-hackathon-codeperfect
```

3. Install the project dependencies:
```bash
npm install
```
### Running Spring Backend

1. Make sure to use Java 17

2. From root navigate to api
```bash
cd api
```

3. Run backend on linux (Ensure permissions to gradlew)
```bash
./grdalew bootRun
```

4. Run backend on Windows
```bash
gradlew.bat
```
### Running an Ionic-Angular Project <a name="running"></a>
1. Install Ionic CLI
```bash
npm install -g @ionic/cli
```

2. Serve the Application:
```bash
ionic serve
```

## 3. Project Structure <a name="project-structure"></a>
### The project follows the following directory structure:

- src/: Contains the source code for the application.
- app/: Contains the Angular components, services, and modules.
- assets/: Stores static assets such as images and icons.
- pages/: Contains the different pages of the application.

## 4. Usage <a name="usage"></a>

### Home Page

The Home Page provides an overview of the user's challenges and progress in various health-related areas.
- The health data on display:
  - Steps
  - Water
  - Food
  - Weight

### Leaderboard Page

The Leaderboard Page ranks users based on their points and achievements within the application. Key features and usage details include:

- **Points Ranking**: Users are ranked based on the points they have earned by completing challenges. The leaderboard provides motivation for users to actively participate and improve their rankings.

- **Navigation**: Users can navigate through the leaderboard to see the top performers, as well as their own ranking. This feature allows users to set goals and strive to move up the leaderboard.

- **Competition**: The leaderboard is encouraging users to engage with the application's challenges to earn more points.

### Profile Page

The Profile Page offers a personalized view of the user's health and wellness journey. Key features and usage details include:

- **User Profile**: Users can view their own profile.

- **Connections**: The profile page provides a section where users can see people that they may know.

- **Find Doctors**: This feature can provides information about nearby healthcare services, clinics, and specialists.

### Notifications Page

The Notifications Page keeps users informed about important updates, achievements, and interactions within the application. Key features and usage details include:

- **Notifications Feed**: Users can access a feed of notifications that include various types of updates, such as:
  - New connections or friend requests
  - Challenge completion



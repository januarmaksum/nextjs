# Next.js Dashboard

This project is a simple dashboard built with Next.js and TypeScript, styled with Tailwind CSS, and featuring chart visualizations powered by ApexCharts. The application includes pages for user login, registration, and viewing statistics.

## Features

- **Next.js** with **TypeScript** for type-safe and fast frontend development.
- **Tailwind CSS** for responsive and customizable UI styling.
- **ApexCharts** for data visualization on the Dashboard.
- **API integration** for Login and Register using [Reqres.in](https://reqres.in/).

## Pages

### 1. Login Page
Users can log in using the dummy email accounts from Reqres.in. You can use the following dummy emails for testing:
- michael.lawson@reqres.in
- lindsay.ferguson@reqres.in
- tobias.funke@reqres.in
- More emails can be found at [Reqres.in](https://reqres.in/).

### 2. Register Page
New users can register by providing an email and password. The registration data is sent to Reqres.in's registration API for mock user account creation.

### 3. Dashboard
The dashboard includes:
- **Statistics Page**: Displays visualized data using **ApexCharts** with various chart types like bar, line, and pie charts.

## API Endpoints

The project uses the following API endpoints from [Reqres.in](https://reqres.in/):

- **Login**: `POST https://reqres.in/api/login`
- **Register**: `POST https://reqres.in/api/register`

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone git@github.com:januarmaksum/nextjs.git
   cd nextjs
   ```
2. **Install dependencies:**:
   ```bash
   npm install
   ```
3. **Run the development server:**:
   ```bash
   npm run dev
   ```

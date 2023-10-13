# openPoll Svelte App Architecture Document

## Overview

The openPoll Svelte app is a feature-rich web application designed for creating and participating in polls. This architecture document provides a comprehensive view of the project's structure, libraries, and the organization of key components.

## Libraries

The openPoll Svelte app relies on several libraries to provide functionality and maintainability:

- **Svelte**: The core library for building interactive and dynamic user interfaces.

- **Tailwind CSS**: A utility-first CSS framework that streamlines UI development and responsiveness.

- **Preline**: A code preprocessor (available at [preline.co](https://preline.co/index.html)) used for code readability and maintainability.

- **Svelte Routing**: A routing library essential for handling navigation and routing within the app.

- **Yup**: A validation library for data validation and form validation, ensuring data integrity.

- **Axios**: A promise-based HTTP client used for making API requests to a backend server.

## Architecture

The project's directory structure follows a logical organization for improved development and maintainability.

```
openPoll Svelte App
├── public/ (public assets such as images, fonts, and index.html)
│
├── src/ (source code directory)
│ ├── assets/ (application-specific assets)
│ │
│ ├── components/ (Svelte components)
│ │ ├── Navbar.svelte (shared navigation component)
│ │ └── Sidebar.svelte (shared sidebar component)
│ │
│ ├── store/ (Svelte stores and context providers)
│ │
│ ├── schemas/ (data validation schemas for use with Yup)
│ │
│ ├── pages/ (Svelte route pages for navigation)
│ │ ├── auth/ (components for authenticated users)
│ │ │
│ │ ├── public/ (components for public access)
│ │ │
│ │ ├── user/
│ │ │ ├── Dashboard.svelte (user dashboard component)
│ │ │ │
│ │ │ ├── poll/
│ │ │ │ ├── Detail.svelte (poll detail component)
│ │ │ │ ├── View.svelte (poll view component)
│ │ │ │
│ │ │ └── Index.svelte (common layout for user pages)
│ │ │
│ │ └── guest/
│ │ │
│ │ └── poll/
│ │ └── View.svelte (guest poll view component)
│ │
│ ├── services/
│ │ └── api.js (Axios API service for making HTTP requests)
│ │
│ ├── App.svelte (the main application component with Svelte Routing)
```

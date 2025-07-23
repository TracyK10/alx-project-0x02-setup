# Next.js Project Setup and Basics

A modern, responsive Airbnb clone built with Next.js, TypeScript, and Tailwind CSS. This project demonstrates various Next.js features including static site generation, API routes, and responsive design.

![Screenshot](/alx-project-0x02/public/assets/images/image.png)

## Features

- **Responsive Design**: Works on all device sizes
- **Static Site Generation**: Fast page loads with `getStaticProps`
- **Type Safety**: Built with TypeScript
- **Modern UI**: Styled with Tailwind CSS
- **Interactive Components**: Reusable UI components

## Pages

- **Home**: Displays featured properties and posts
- **About**: Information about the platform
- **Posts**: List of blog posts with user interactions
- **Users**: Directory of users with detailed profiles

## Getting Started

### Prerequisites

- Node.js 14.6.0 or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/TracyK10/alx-project-0x02-setup.git
   cd alx-project-0x02
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
alx-project-0x02/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   └── UserCard.tsx
│   └── layout/
│       └── Header.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── about.tsx
│   ├── home.tsx
│   ├── index.tsx
│   ├── posts.tsx
│   └── users.tsx
├── public/
│   └── assets/
│       └── images/
├── styles/
│   └── globals.css
├── .eslintrc.json
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Icons](https://react-icons.github.io/react-icons/) - Icons
- [UUID](https://www.npmjs.com/package/uuid) - Unique ID generation

## API Integration

The application fetches data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/), a free fake API for testing and prototyping.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the mock API

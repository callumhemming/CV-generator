# CV Generator App

A simple **Markdown to PDF CV generator** using **Handlebars.js** and **Markdown**. This project allows you to write your CV in Markdown, dynamically insert data using Handlebars.js, and generate styled web pages that can be easily exported to PDF.

## Features

- Write your CV using **Markdown**.
- Use **Handlebars** to insert dynamic content.

## Tech Stack

- **Handlebars.js**: For dynamic templating in Markdown.
- **Express.js**: Serves the rendered web pages.
- **Markdown**: For easy content creation.

---

## Installation

1. Install the dependencies:

   ```bash
   pnpm install
   ```

---

## Usage

### Development

To run the project in development mode with auto-reloading using `nodemon`, run:

```bash
pnpm dev
```

This will start the server and automatically reload it on file changes.

### How It Works

1. **Data**: Edit the CV content in `inputs/lorem.ts`.

2. **Markdown templates**: Stored in views. layouts is reserved for meta data. Use Handlebars variables to insert data into the CV. For example, in your markdown file:

   ```markdown
   # {{me.name}}

   **Job Title**: {{me.job}}

   ## Contact Information

   - Email: {{contact.email}}
   ```

3. **Rendering**: The Handlebars templates are dynamically rendered into HTML. You can preview your CV in a web browser and print it as a PDF with control p.

## Project Structure

```
.
├── inputs/                 # Contains your data
├── public/                 # Public static assets
├── views/                  # Templates
│   ├── layouts/            # Wrappers
|     ├── main.mdhbs        # Page metadata
│   ├── home.mdhbs/         # Template for home route (/)
└── server.ts               # Express server
```

---

## Scripts

- **pnpm dev**: Run the project in development mode with **nodemon**.

---

## Contributing

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

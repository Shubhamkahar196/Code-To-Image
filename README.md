# CodeImage - Code Snippet Image Generator

CodeImage is a React-based web application that allows users to write, style, and export beautifully formatted code snippets as PNG images. It supports multiple programming languages, themes, backgrounds, and customizable padding to create visually appealing code images for sharing or documentation.

## Features

- **Multi-language support:** Choose from popular programming languages like JavaScript, Python, Java, HTML, CSS, and TypeScript.
- **Theme selection:** Select from various syntax highlighting themes to style your code.
- **Background customization:** Pick different background gradients or colors for your code snippet.
- **Padding control:** Adjust padding around the code block for better spacing.
- **Resizable code editor:** Resize the code editor window to your preferred dimensions.
- **Export as PNG:** Export the styled code snippet as a PNG image, including UI elements like file title and language icon.
- **Responsive UI:** Clean and modern interface with fixed header and footer.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd codeimage
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to use the app.

## Usage

- Select the programming language from the dropdown.
- Choose a theme and background to style your code.
- Adjust padding using the padding selector.
- Write or paste your code in the editor.
- Click the **Export PNG** button to download the styled code snippet as an image.

## Technologies Used

- React 18 with Next.js (App Router)
- TypeScript
- Tailwind CSS for styling
- Ace Editor for code editing
- html2canvas for exporting code editor as PNG
- Lucide React for icons

## Project Structure

- `app/page.tsx`: Main page component containing the editor and controls.
- `app/components/CodeEditor.tsx`: Code editor component with resizable functionality.
- `app/components/LanguageSelector.tsx`, `ThemeSelector.tsx`, `BackgroundSelector.tsx`, `PaddingSelector.tsx`: UI components for customization.
- `app/components/Footer.tsx`: Footer component.
- `app/utils/utilities.tsx`: Utility functions and constants for languages, themes, and backgrounds.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for bug fixes and new features.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Ace Editor for the powerful code editing experience.
- html2canvas-pro for enabling export of DOM elements as images.
- Tailwind CSS for utility-first styling.
- Lucide React for beautiful icons.

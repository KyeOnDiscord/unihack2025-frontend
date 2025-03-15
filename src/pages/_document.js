import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased dots-background">
        <Main />
        <NextScript />
      </body>
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm">© 2025 AllocateUs.</p>
        </div>
      </footer>
    </Html>
  );
}

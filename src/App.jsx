import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import * as pdfjsLib from 'pdfjs-dist';
import { SEOContent } from './components/SEOContent';

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const DPI_OPTIONS = [
  { value: 1, label: '72 DPI' },
  { value: 1.5, label: '108 DPI' },
  { value: 2, label: '144 DPI' },
  { value: 3, label: '216 DPI' },
  { value: 4, label: '288 DPI' }
];

const FORMAT_OPTIONS = [
  { value: 'image/png', extension: 'png', label: 'PNG' },
  { value: 'image/jpeg', extension: 'jpg', label: 'JPEG' },
  { value: 'image/webp', extension: 'webp', label: 'WebP' }
];

function Header({ isDark, toggleTheme }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-primary backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <a href="https://picshifter.com" className="flex items-center space-x-2">
            <img src="/logo.png" alt="PicShifter" className="h-8 w-8" />
            <span className="text-text dark:text-primary font-semibold text-lg">PicShifter</span>
          </a>
          <nav className="hidden md:flex space-x-6">
            <a href="https://picshifter.com/tools/image-resizer/" className="text-text dark:text-white hover:text-primary transition-colors">Resize</a>
            <a href="https://picshifter.com/tools/image-optimizer/" className="text-text dark:text-white hover:text-primary transition-colors">Optimize</a>
            <a href="https://picshifter.com/tools/image-converter/" className="text-text dark:text-white hover:text-primary transition-colors">Convert</a>
          </nav>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-text/50 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-text text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-white mb-2">PDF to Image</h3>
            <p className="text-sm text-white/80">
              Convert PDF files to high-quality images directly in your browser. Fast, secure, and free PDF to image conversion for everyone.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-white mb-4">Tools</h4>
            <ul className="space-y-2">
              <li><a href="https://picshifter.com/tools/image-optimizer/" className="text-sm text-white/80 hover:text-white transition-colors">Image Optimizer</a></li>
              <li><a href="https://picshifter.com/tools/image-resizer/" className="text-sm text-white/80 hover:text-white transition-colors">Image Resizer</a></li>
              <li><a href="https://picshifter.com/tools/image-converter/" className="text-sm text-white/80 hover:text-white transition-colors">Bulk Image Converter</a></li>
              <li><a href="https://picshifter.com/tools/svg-converter/" className="text-sm text-white/80 hover:text-white transition-colors">SVG Converter</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="https://picshifter.com/faq/" className="text-sm text-white/80 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="https://picshifter.com/contact/" className="text-sm text-white/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="https://picshifter.com/privacy/" className="text-sm text-white/80 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="https://picshifter.com/terms/" className="text-sm text-white/80 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="https://picshifter.com/about/" className="text-sm text-white/80 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <h4 className="font-semibold text-white mb-2">Privacy & Data Handling</h4>
          <p className="text-sm text-white/80">
            PDF to Image processes your files in real-time directly in your browser without storing any data. Your uploads are never saved or transmitted to any server, ensuring complete privacy and security. We don't use cookies or track your usage.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} PicShifter. All rights reserved.
          </p>
          <p className="text-sm text-white/80 mt-4 md:mt-0">
            🔒 Secure Processing • No Data Storage • Free Forever
          </p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dpi, setDpi] = useState(1.5);
  const [format, setFormat] = useState(FORMAT_OPTIONS[0]);
  const [fileName, setFileName] = useState('');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setFileName(file.name);
    setLoading(true);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
      const newPages = [];

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: dpi });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({
          canvasContext: context,
          viewport: viewport
        }).promise;

        newPages.push(canvas.toDataURL(format.value, 0.95));
      }

      setPages(newPages);
    } catch (error) {
      console.error('Error processing PDF:', error);
    } finally {
      setLoading(false);
    }
  }, [dpi, format]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    multiple: false
  });

  const downloadImage = (dataUrl, index) => {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `${fileName.replace('.pdf', '')}-page-${index + 1}.${format.extension}`;
    link.click();
  };

  const handleDpiChange = (newDpi) => {
    setDpi(Number(newDpi));
    setPages([]);
  };

  const handleFormatChange = (newFormat) => {
    setFormat(FORMAT_OPTIONS.find(f => f.value === newFormat));
    setPages([]);
  };

  return (
    <div className={`min-h-screen transition-colors ${isDark ? 'dark bg-text/95' : 'bg-background'}`}>
      <Header isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      
      <div className="p-8 pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-text dark:text-white mb-4 text-center">
            PDF to Image Converter
          </h1>
          <p className="text-center text-text/80 dark:text-white/80 mb-8">
            Convert PDF files to high-quality images instantly
          </p>
          
          <div className="mb-6 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-text dark:text-white mb-2">Image Quality:</label>
              <select
                value={dpi}
                onChange={(e) => handleDpiChange(e.target.value)}
                className="w-full px-4 py-2 rounded border border-text/30 bg-white dark:bg-text dark:border-white/30 dark:text-white focus:border-primary focus:outline-none"
              >
                {DPI_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex-1">
              <label className="block text-text dark:text-white mb-2">Image Format:</label>
              <select
                value={format.value}
                onChange={(e) => handleFormatChange(e.target.value)}
                className="w-full px-4 py-2 rounded border border-text/30 bg-white dark:bg-text dark:border-white/30 dark:text-white focus:border-primary focus:outline-none"
              >
                {FORMAT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
              ${isDragActive 
                ? 'border-secondary bg-primary/20 dark:bg-primary/10' 
                : 'border-text/30 dark:border-white/30 hover:border-primary'}`}
          >
            <input {...getInputProps()} />
            <p className="text-text dark:text-white">
              {isDragActive
                ? 'Drop the PDF here...'
                : 'Drag & drop a PDF file here, or click to select one'}
            </p>
          </div>

          {loading && (
            <div className="text-center mt-8">
              <p className="text-text dark:text-white">Converting PDF to images...</p>
            </div>
          )}

          <div className="mt-8 grid gap-6">
            {pages.map((page, index) => (
              <div key={index} className="bg-white dark:bg-text p-4 rounded-lg shadow-lg">
                <img src={page} alt={`Page ${index + 1}`} className="max-w-full h-auto" />
                <button
                  onClick={() => downloadImage(page, index)}
                  className="mt-4 px-4 py-2 bg-gradient-primary text-white rounded hover:opacity-90 transition-opacity"
                >
                  Download image {index + 1}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SEOContent />
      <Footer />
    </div>
  );
}

export default App;

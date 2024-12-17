import React from 'react';

export function SEOContent() {
  return (
    <div className="max-w-4xl mx-auto mt-16 px-4">
      <section className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-text dark:text-white mb-4">
          Convert PDF to Image Online - Free & Secure
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-text/50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-text dark:text-white mb-3">
              How to Convert PDF to Image
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-text/90 dark:text-white/80">
              <li>Select your desired image quality (DPI)</li>
              <li>Choose your preferred output format (PNG, JPEG, or WebP)</li>
              <li>Drag and drop your PDF file into the upload area</li>
              <li>Download your converted images individually</li>
            </ol>
          </div>

          <div className="bg-white dark:bg-text/50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-text dark:text-white mb-3">
              Key Features
            </h3>
            <ul className="list-disc list-inside space-y-2 text-text/90 dark:text-white/80">
              <li>100% Free and Secure</li>
              <li>No File Size Limits</li>
              <li>High-Quality Resolution Options</li>
              <li>Multiple Output Formats</li>
              <li>Browser-Based Processing</li>
              <li>No Registration Required</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-semibold text-text dark:text-white mb-3">
              Why Choose Our PDF to Image Converter?
            </h3>
            <p className="text-text/90 dark:text-white/80">
              Our free online PDF to Image converter provides a secure and efficient way to transform PDF documents into high-quality images. Whether you need PNG, JPEG, or WebP formats, our tool processes everything directly in your browser, ensuring your files remain private and secure.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-text dark:text-white mb-3">
              Supported Output Formats
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-text/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text dark:text-white mb-2">PNG Format</h4>
                <p className="text-sm text-text/90 dark:text-white/80">
                  Best for images with text, logos, and screenshots. Supports transparency and provides lossless quality.
                </p>
              </div>
              <div className="bg-white dark:bg-text/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text dark:text-white mb-2">JPEG Format</h4>
                <p className="text-sm text-text/90 dark:text-white/80">
                  Ideal for photographs and complex images with many colors. Provides smaller file sizes.
                </p>
              </div>
              <div className="bg-white dark:bg-text/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text dark:text-white mb-2">WebP Format</h4>
                <p className="text-sm text-text/90 dark:text-white/80">
                  Modern format offering superior compression and quality. Perfect for web use.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-text dark:text-white mb-3">
              Quality Options Explained
            </h3>
            <div className="space-y-2 text-text/90 dark:text-white/80">
              <p><strong>72 DPI:</strong> Standard web quality, suitable for digital display and basic needs.</p>
              <p><strong>108 DPI:</strong> Enhanced web quality, good for better screen display.</p>
              <p><strong>144 DPI:</strong> High quality, perfect for presentations and detailed viewing.</p>
              <p><strong>216 DPI:</strong> Very high quality, ideal for professional use.</p>
              <p><strong>288 DPI:</strong> Ultra high quality, best for printing and professional publishing.</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-text dark:text-white mb-3">
              Privacy & Security
            </h3>
            <p className="text-text/90 dark:text-white/80">
              Your privacy is our top priority. All PDF to image conversions happen directly in your browser - no files are uploaded to any server. We don't store your files, collect personal data, or use tracking cookies. Your documents remain completely private and secure throughout the conversion process.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-text dark:text-white mb-3">
              Part of PicShifter Suite
            </h3>
            <p className="text-text/90 dark:text-white/80">
              PDF to Image is part of the PicShifter suite of image tools. Visit <a href="https://picshifter.com" className="text-primary hover:text-secondary transition-colors">PicShifter.com</a> to explore our other free tools for resizing, optimizing, and converting images.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}

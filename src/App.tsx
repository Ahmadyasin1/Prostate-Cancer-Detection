import React, { useState } from 'react';
import axios from 'axios';
import { Brain, Activity, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageUploader } from './components/ImageUploader';
import { ResultCard } from './components/ResultCard';
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import type { PredictionResult } from './types';

const BACKEND_URL = 'https://prostate.pythonanywhere.com';

function App() {
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageSelect = (selectedFile: File) => {
    setFile(selectedFile);
    setResult(null);
    setError(null);
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(`${BACKEND_URL}/predict`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResult(response.data);
    } catch (err) {
      setError('An error occurred while analyzing the image. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950 transition-colors duration-200">
        <ThemeToggle />
        
        <div className="container mx-auto px-4 py-12">
          <motion.header 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Brain className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mr-2" />
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                ProstateCare AI
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Advanced prostate cancer detection powered by AI image analysis
            </p>
          </motion.header>

          <div className="max-w-2xl mx-auto">
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <ImageUploader 
                  onImageSelect={handleImageSelect}
                  image={image}
                />

                <div className="flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={!image || isLoading}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors duration-200"
                  >
                    {isLoading ? (
                      <>
                        <Activity className="animate-spin -ml-1 mr-3 h-5 w-5" />
                        Analyzing...
                      </>
                    ) : (
                      'Analyze Image'
                    )}
                  </motion.button>
                </div>
              </form>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg"
                  >
                    <div className="flex items-center text-red-800 dark:text-red-200">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      {error}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {result && <ResultCard result={result} />}

              <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This AI-powered tool is for screening purposes only and should not replace professional medical diagnosis.
                    Always consult with a healthcare provider for proper evaluation and treatment decisions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>© 2025 ProstateCare AI. All rights reserved.</p>
            <p className="mt-1">Powered by Ahmad Yasin & Eman Sarfraz.</p>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
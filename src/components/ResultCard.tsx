import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { PredictionResult } from '../types';

interface ResultCardProps {
  result: PredictionResult;
}

export function ResultCard({ result }: ResultCardProps) {
  const isCancerous = result.prediction === "Cancer Detected";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`
        mt-8 p-6 rounded-xl shadow-lg
        ${isCancerous 
          ? 'bg-red-50 dark:bg-red-900/20' 
          : 'bg-green-50 dark:bg-green-900/20'}
      `}
    >
      <div className="flex items-start space-x-4">
        {isCancerous ? (
          <XCircle className="h-12 w-12 text-red-600 dark:text-red-400 flex-shrink-0" />
        ) : (
          <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400 flex-shrink-0" />
        )}
        <div>
          <h3 className={`text-xl font-medium ${
            isCancerous 
              ? 'text-red-800 dark:text-red-200' 
              : 'text-green-800 dark:text-green-200'
          }`}>
            {result.prediction}
          </h3>
          <p className={`mt-1 text-sm ${
            isCancerous 
              ? 'text-red-700 dark:text-red-300' 
              : 'text-green-700 dark:text-green-300'
          }`}>
            {isCancerous
              ? 'Our AI analysis suggests potential abnormalities that require immediate medical attention.'
              : 'The analysis suggests normal tissue patterns with no concerning features.'}
          </p>
          <div className="mt-4 flex items-center">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div 
                className={`h-2.5 rounded-full ${
                  isCancerous ? 'bg-red-600' : 'bg-green-600'
                }`}
                style={{ width: `${result.confidence * 100}%` }}
              ></div>
            </div>
            <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              {(result.confidence * 100).toFixed(1)}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
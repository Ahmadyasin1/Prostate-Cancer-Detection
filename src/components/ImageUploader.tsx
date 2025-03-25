import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface ImageUploaderProps {
  onImageSelect: (file: File) => void;
  image: string | null;
}

export function ImageUploader({ onImageSelect, image }: ImageUploaderProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles[0]) {
      onImageSelect(acceptedFiles[0]);
    }
  }, [onImageSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.dcm']
    },
    multiple: false
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200",
          "dark:bg-gray-800 dark:border-gray-700",
          isDragActive ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20" : "border-gray-300",
          "hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
        )}
      >
        <input {...getInputProps()} />
        
        {image ? (
          <div className="space-y-4">
            <img 
              src={image} 
              alt="Preview"
              className="max-h-64 mx-auto rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Click or drag to replace image
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <Upload className="w-12 h-12 mx-auto text-gray-400 dark:text-gray-500" />
            <div>
              <p className="text-xl font-medium text-gray-900 dark:text-gray-100">
                Upload Medical Image
              </p>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Drag and drop or click to select
              </p>
              <p className="mt-1 text-sm text-gray-400 dark:text-gray-500">
                Supported formats: PNG, JPG, DICOM
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
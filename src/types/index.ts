export interface PredictionResult {
  prediction: string;
  confidence: number;
}

export interface APIResponse {
  prediction: string;
  confidence: number;
  error?: string;
}

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
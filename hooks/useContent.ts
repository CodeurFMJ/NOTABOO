
import { useState, useEffect } from 'react';
import { defaultContent, Content } from '../data/content';

const CONTENT_STORAGE_KEY = 'notaboo-content';

// This custom hook manages the website content.
// It tries to load content from localStorage first. If it's not there,
// it falls back to the default content from `data/content.ts`.
// Any changes to the content via setContent will be persisted to localStorage.
export const useContent = () => {
  const [content, setContent] = useState<Content>(() => {
    try {
      const storedContent = window.localStorage.getItem(CONTENT_STORAGE_KEY);
      if (storedContent) {
        return JSON.parse(storedContent);
      }
    } catch (error) {
      console.error('Error reading from localStorage', error);
    }
    return defaultContent;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content));
    } catch (error) {
      console.error('Error writing to localStorage', error);
    }
  }, [content]);

  return { content, setContent };
};

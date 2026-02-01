
import React from 'react';

/**
 * Represents a portfolio project.
 */
export interface Project {
  title: string;
  jpTitle: string;
  category: string;
  description: string;
  year: string;
  image: string;
}

/**
 * Represents a service provided by the company.
 */
export interface Service {
  id: string;
  title: string;
  jpTitle: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
}

/**
 * Represents a news article or announcement.
 */
export interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  type: string;
  image: string;
  content: string;
}

/**
 * Represents a message in the chat.
 */
export interface Message {
  role: 'user' | 'model';
  text: string;
}

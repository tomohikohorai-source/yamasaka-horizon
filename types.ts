
import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  year: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
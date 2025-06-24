// src/api/index.js
import apiClient from './axios';

export const api = {
  // Products
  getProducts: () => apiClient.get('/products'),
  getProduct: (id) => apiClient.get(`/products/${id}`),
  
  // Testimonials
  getTestimonials: () => apiClient.get('/testimonials'),
  
  // Quotes
  createQuote: (quoteData) => apiClient.post('/quotes', quoteData),
  
  // Add more endpoints as needed
};
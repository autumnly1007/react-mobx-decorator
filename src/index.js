import React from 'react';
import App from './App';
import { CounterProvider } from './context/counterContext';
import CounterStore from './CounterStore';
import { createRoot } from 'react-dom/client';

const store = new CounterStore();

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <CounterProvider value={store}>
    <App />
  </CounterProvider>
);

import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

const container = document.getElementById('app');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<h1>Hello, world!</h1>);
import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { BrowserRouter as Router } from 'react-router-dom';
let domNode = document.getElementById('root');
let root = createRoot(domNode);
root.render(_jsx(Router, { children: _jsx(App, {}) }));
//# sourceMappingURL=index.js.map
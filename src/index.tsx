import {createRoot} from 'react-dom/client'
import {App} from './App';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

let domNode = document.getElementById('root') as HTMLElement;

let root = createRoot(domNode);

root.render(<Router><App /></Router>);

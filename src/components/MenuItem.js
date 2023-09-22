import { jsx as _jsx } from "react/jsx-runtime";
import { HashLink } from 'react-router-hash-link';
export const MenuItem = ({ title, onClick }) => {
    let link = `#${title}`;
    return (_jsx(HashLink, { smooth: true, to: link, children: _jsx("div", { className: 'h-8 pl-2 font-bold leading-8', onClick: onClick, children: title }) }));
};
//# sourceMappingURL=MenuItem.js.map
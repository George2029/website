import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export let Command = ({ title, header, cost, synopsis, example, badges, data }) => {
    let [isCommandDataHidden, setIsCommandDataHidden] = useState(true);
    let commandClasses = `border-myfiol border-b p-2 ${isCommandDataHidden ? 'hidden' : 'block'}`;
    return (_jsxs("div", { className: 'p-3', children: [_jsxs("div", { className: '\n\t\t\tflex\n\t\t\tjustify-between\n\t\t\tcursor-pointer\n\t\t\tfont-bold\n\t\t\t', onClick: () => setIsCommandDataHidden(e => !e), children: [_jsx("div", { children: title }), _jsx("div", { className: 'text-myfiol drop-shadow-xl', children: isCommandDataHidden ? '∨' : '∧' })] }), _jsx("div", { className: commandClasses, children: data })] }));
};
//# sourceMappingURL=Command.js.map
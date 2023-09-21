import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './style.css';
import { Bot } from './components/Bot';
import { data } from './data';
export let App = () => _jsxs("div", { className: 'main-wrapper text-red-600', children: [_jsx("div", { className: 'label-wrapper', children: _jsx("span", { className: 'logo', children: "Bots" }) }), _jsx("div", { className: 'wrapper', children: [...Array(data.length)]
                .map((el, idx) => _jsx(Bot, { title: data[idx].title, header: data[idx].header, commands: data[idx].commands, img: data[idx].img, note: data[idx].note, github: data[idx].github, badges: data[idx].badges }, idx)) })] });
//# sourceMappingURL=App.js.map
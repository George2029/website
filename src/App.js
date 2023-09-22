import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './index.css';
import { useState } from 'react';
import { Bot } from './components/Bot';
import { data } from './data';
import { MenuItem } from './components/MenuItem';
export let App = () => {
    let [isMobileMenuHidden, setMobileMenuHidden] = useState(true);
    let [theme, setTheme] = useState('light');
    let menuClasses = `
		${isMobileMenuHidden ?
        'h-0 overflow-hidden' :
        'fixed w-4/5 left-4 top-16 p-3'}
		bg-white 
		rounded-xl
		text-myfiol
		flex
		flex-col
		items-center

		md:h-full 
		md:flex-row 
		md:gap-2
		md:justify-end

		dark:bg-blue-950
		md:bg-transparent
		dark:md:bg-transparent
	`;
    let menuBckg = `
		bg-black/80
		z-10
		w-screen
		h-screen
		fixed
		${isMobileMenuHidden ? 'hidden' : ''}
	`;
    let bckgClass = `
		pattern-dots 
		pattern-opacity-100 
		pattern-size-4

		pattern-bg-neutral-200 
		dark:pattern-bg-slate-800 

		pattern-white 
		dark:pattern-indigo-900 

		font-josefin 
		dark:text-blue-50 
		${!isMobileMenuHidden ? 'fixed' : ''} 
		`;
    if (localStorage.getItem('theme') === 'dark') {
        if (theme !== 'dark')
            setTheme('dark');
    }
    else if (localStorage.getItem('theme') === 'light') {
        if (theme !== 'light')
            setTheme('light');
    }
    else {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            if (theme !== 'dark')
                setTheme('dark');
        }
        else {
            if (theme !== 'light')
                setTheme('light');
        }
    }
    return (_jsx("div", { className: theme, children: _jsxs("div", { className: bckgClass, children: [_jsx("div", { className: menuBckg }), _jsxs("div", { className: '\n\t\t\t\t\th-16 \n\t\t\t\t\tflex \n\t\t\t\t\tjustify-between\n\t\t\t\t\tmax-w-2xl\n\t\t\t\t\tmy-0\n\t\t\t\t\tmx-auto\n\t\t\t\t\trelative\n\t\t\t\t\tz-10\n\t\t\t\t', children: [_jsx("div", { className: "\n\t\t\t\t\t\th-full \n\t\t\t\t\t\tw-24 \n\t\t\t\t\t\tbg-contain \n\t\t\t\t\t\tbg-no-repeat \n\t\t\t\t\t\tbg-center \n\t\t\t\t\t\tbg-[url('./img/logo.webp')]\n\t\t\t\t\t\tmx-2\n\t\t\t\t\t\trelative\n\t\t\t\t\t" }), _jsxs("div", { className: menuClasses, children: [[...Array(5)]
                                    .map((el, idx) => _jsx(MenuItem, { title: data[idx].title, onClick: () => setMobileMenuHidden(true) }, idx)), _jsxs("div", { className: '\n\t\t\t\t\t\t\tmt-4 \n\t\t\t\t\t\t\tflex \n\t\t\t\t\t\t\tpt-4 \n\t\t\t\t\t\t\tw-full \n\t\t\t\t\t\t\tborder-t \n\t\t\t\t\t\t\tgap-1\n\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\t\tborder-myfiol\n\t\t\t\t\t\t\tmd:border-0\n\t\t\t\t\t\t\tmd:pt-0\n\t\t\t\t\t\t\tmd:mt-0\n\t\t\t\t\t\t', children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: theme === 'light' ? '#FFFF00' : '', viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-7 h-7", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 \n\t\t\t\t\t\t\t\t\t\t18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 \n\t\t\t\t\t\t\t\t\t\t\t12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" }) }), _jsxs("div", { className: 'toggle flex items-center', children: [_jsx("input", { type: "checkbox", checked: theme === 'dark', id: "toggle" }), _jsx("label", { htmlFor: "toggle", onClick: () => setTheme(theme => {
                                                        if (theme === 'light') {
                                                            localStorage.setItem('theme', 'dark');
                                                            setTheme('dark');
                                                            return 'dark';
                                                        }
                                                        else {
                                                            localStorage.setItem('theme', 'light');
                                                            setTheme('light');
                                                            return 'light';
                                                        }
                                                    }) })] }), _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: theme === 'dark' ? '#FFFF00' : '', viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-7 h-7", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 \n\t\t\t\t\t\t\t\t\t\t0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 \n\t\t\t\t\t\t\t\t\t\t12.75 21a9.753 9.753 0 009.002-5.998z" }) })] })] }), _jsx("div", { className: '\n\t\t\t\t\t\th-full \n\t\t\t\t\t\tselect-none \n\t\t\t\t\t\tflex \n\t\t\t\t\t\tjustify-center \n\t\t\t\t\t\titems-center\n\t\t\t\t\t\tmx-2\n\t\t\t\t\t\trelative\n\n\t\t\t\t\t\tmd:hidden\n\t\t\t\t\t', children: _jsx("span", { onClick: () => setMobileMenuHidden(e => !e), className: '\n\t\t\t\t\t\t\t\ttext-5xl \n\t\t\t\t\t\t\t\tfont-bold \n\t\t\t\t\t\t\t\ttext-myfiol\n\t\t\t\t\t\t\t\tdrop-shadow-2xl\n\t\t\t\t\t\t\t\tbg-white\n\t\t\t\t\t\t\t\trounded-lg\n\t\t\t\t\t\t\t\tpx-1\n\t\t\t\t\t\t\t\tdark:bg-blue-950\n\t\t\t\t\t\t\t', children: "\u2261" }) })] }), _jsx("div", { className: '\n\t\t\t\t\tbg-gradient-to-tr \n\t\t\t\t\tfrom-fuchsia-600 \n\t\t\t\t\tdark:from-indigo-950 \n\t\t\t\t\tvia-pink-700 \n\t\t\t\t\tdark:via-black \n\t\t\t\t\tto-fuchsia-600 \n\t\t\t\t\tdark:to-indigo-950 \n\t\t\t\t\th-60 \n\t\t\t\t\tshadow-[0_1px_1px_1px_rgba(0,0,0,0.6)]  \n\t\t\t\t\tflex \n\t\t\t\t\tjustify-center \n\t\t\t\t\titems-center\n\t\t\t\t', children: _jsx("div", { className: '\n\t\t\t\t\t\ttext-7xl \n\t\t\t\t\t\tfont-bold\n\t\t\t\t\t\tdrop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]\n\t\t\t\t\t\ttext-blue-50 \n\t\t\t\t\t\tdark:text-indigo-500\n\t\t\t\t\t', children: "!who@m\u00A1" }) }), _jsxs("div", { className: '\n\t\t\t\t\tmt-10\n\t\t\t\t\tflex\n\t\t\t\t\tflex-col\n\t\t\t\t\tgap-y-10\n\t\t\t\t\tmax-w-2xl\n\t\t\t\t\tmx-auto\n\t\t\t\t', children: [_jsxs("div", { className: '\n\t\t\t\t\t\tp-3 \n\t\t\t\t\t\trounded-lg \n\t\t\t\t\t\tborder-solid \n\t\t\t\t\t\tborder-purple-500 \n\t\t\t\t\t\tborder \n\t\t\t\t\t\tshadow-2xl \n\t\t\t\t\t\tbg-slate-100\n\t\t\t\t\t\tmx-2\n\n\t\t\t\t\t\tdark:bg-blue-900\n\t\t\t\t\t', children: [_jsx("b", { children: "Hello!" }), _jsx("br", {}), "This is a page about twitch-bots. Together they form all-in-one tool, cure for boredom for a streamer :)"] }), [...Array(data.length)]
                            .map((el, idx) => _jsx(Bot, { title: data[idx].title, descr: data[idx].descr, header: data[idx].header, commands: data[idx].commands, img: data[idx].img, note: data[idx].note, github: data[idx].github, badges: data[idx].badges }, idx))] })] }) }));
};
//# sourceMappingURL=App.js.map
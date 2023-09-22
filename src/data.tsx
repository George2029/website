import follower from './img/twitch/follower.webp';
import mod from './img/twitch/mod.webp';
import broadcaster from './img/twitch/broadcaster.webp';
import vip from './img/twitch/vip.webp';
import everyone from './img/twitch/everyone.webp';

import casinoPng from './img/botUsageExamples/gambler.webp';
import managerPng from './img/botUsageExamples/main-manager.webp';
import citationManagerPng from './img/botUsageExamples/citation-manager.webp';
import h3CalcPng from './img/botUsageExamples/game-utility.webp';
import mpcPng from './img/botUsageExamples/music-player.webp';

export let data = [
	{
		title: 'Dealer',
		header: 'Play casino games in chat!',
		descr: `A bot which handles gambling for points. Currently there are 2 games: 1 is pvp (vs another chat user) and the second game doesn't require a chat user to be playable: you can compete against the bot (dealer). Points are embedded currency which for some on-stream purchases (song requests, etc). Provides game statistics such winrate, total points score, top players`,
		commands: [
			{
				title: '!poker', 
				header: 'Play heads-up with a friend', 
				cost: 100,
				synopsis: '!poker <b>nick</b> [bet]',
				example: '!poker <nick> 200 >> <challenge created. waiting for !call from <nick>',
				badges: [follower],
				data: `Play a poker game with a chat user. Opponent's nickname parameter is required. Default bet is 100.`
			}, 
			{
				title: '!blackjack',
				header: 'Start a blackjack game', 
				cost: 100,
				synopsis: '!blackjack [bet]',
				example: `!blackjack >> <nick>'s game has started. <nick> draws Jc, Kh. (20). <etc>`,
				badges: [follower],
				data: 'Play a blackjack with the dealer. Dealer stands on soft 17. Any hit narrows your next turn options to stand and hit.  A double down after a split is allowed. Number of splits is not restricted. Default bet is 100.'
			},
			{
				title: '!winrate',
				header: 'Check your winrate and score', 
				cost: null,
				synopsis: '!winrate [game]',
				example: '!winrate >> <pokerWR>',
				badges: [everyone],
				data: 'Prints your winrate for the specified game together with total score. Default game is poker.'
			},
			{
				title: '!top',
				header: 'Check top players', 
				cost: null,
				synopsis: '!top [game]',
				example: '!top blackjack >> <top>',
				badges: [everyone],
				data: 'Prints top-5 players of the specified game together with the number of wins and total score. Default game is poker'
			}
		],
		img: casinoPng,
		note: 'All games are points-managed. New games can be added in the future',
		badges: [follower, everyone],
		github: 'https://github.com/George2029/twitch-bot-gamer'
	},
	{
		title: 'Musician',
		header: `Change broadcaster's music!`,
		descr: 'A bot which handles music on stream. Includes various commands for adding tracks to the queue. Viewers can examine the music library / check the queue via the bot.',
		commands: [
			{
				title: '!play', 
				header: 'Add a track', 
				cost: 100,
				synopsis: '!play [[track] @[artist] | @[artist] | #[genre]]',
				example: '!play @System of a down >> appended "Radio/Video" to the queue',
				badges: [follower],
				data: `Adds a track to the queue. If used without params, adds a random track. If used just with the artist's name / genre title adds a random track of that artist / genre. The search method is not strict (method "contains" is used), so if it finds more than 1 track, it'll ask you to be more specific. If your chosen track has a very short and/or common name and a pair of track & artist values is not unique, You have to use !playF command instead, which provides a strict search. Artist name is prexied with '@', genre - '#'.`
			}, 
			{
				title: '!playF', 
				header: 'Add a track using strict search', 
				cost: 100,
				synopsis: '!playF [[track] @[artist] | @[artist] | #[genre]]',
				example: '!playF  >> appended "Radio/Video" to the queue',
				badges: [follower],
				data: `Adds a track to the queue using strict search. If used without params, adds a random track. If used just with the artist's name / genre title adds a random track of that artist / genre. Artist name is prexied with '@', genre - '#'.`
			}, 
			{
				title: '!insert',
				header: 'Insert a track', 
				cost: 400,
				synopsis: '!insert [track] @[artist]',
				example: '!insert godzilla >> appended "Godzilla (feat. Juice WRLD)" to the beginning of the queue',
				badges: [follower],
				data: `Inserts a track to be played after the current track. If used without params, inserts a random track. If used just with the artist's name / genre title inserts a random track of that artist / genre. The search method is not strict (method "contains" is used), so if it finds more than 1 track, it'll ask you to be more specific. If your chosen track has a very short and/or common name and a pair of track & artist values is not unique, You have to use !insertF command instead, which provides a strict search. Artist name is prexied with '@', genre - '#'.`
			},
			{
				title: '!insertF',
				header: 'Insert a track using strict search', 
				cost: 400,
				synopsis: '!insertF [track] @[artist]',
				example: '!insertF godzilla >> appended "Godzilla (feat. Juice WRLD)" to the beginning of the queue',
				badges: [follower],
				data: `Inserts a track to be played after the current track using strict search. If used without params, inserts a random track. If used just with the artist's name / genre title inserts a random track of that artist / genre. Artist name is prexied with '@', genre - '#'.`
			},
			{
				title: '!skip',
				header: 'Skip the current track', 
				cost: 500,
				synopsis: null,
				example: '!skip >> Skipped',
				badges: [follower],
				data: 'Skips the current track.'
			},
			{
				title: '!queue',
				header: 'View the current playlist', 
				cost: null,
				synopsis: null,
				example: '!queue >> Total: 3. 1. "Rap God" by Eminem 2. "Love In Vain" by The Rolling Stones 3. "Так и оставим" by Земфира',
				badges: [everyone],
				data: 'Prints 4 next tracks'
			},
			{
				title: '!track',
				header: 'View the current track info', 
				cost: null,
				synopsis: null,
				example: '!track >> "Rap God" by Eminem. #Rap',
				badges: [everyone],
				data: 'Prints full track title, artist name and the genre'
			},
			
		],

		img: mpcPng,
		note: 'All available music is stored locally. Points-based management.',
		badges: [follower],
		github: 'https://github.com/George2029/twitch-bot-music-player'
	},
	{
		title: 'Citationer',
		header: 'Manage channel text commands!',
		descr: 'A bot which manages adding / refactoring plain-text commands. With the help of tagging, multiple quotes can be added to the same user. Outputs a random quote if tag is not specified.',
		commands: [
			{
				title: '!cite', 
				header: 'Add a citation', 
				cost: null,
				synopsis: '!cite <b>author</b> <b>#tag</b> <text>',
				example: '!cite <author> #<tag> <text> >> Cited',
				badges: [mod],
				data: 'Adds a tagged citation of the specified author. All the three params are required.'
			}, 
			{
				title: '!editc',
				header: 'Edit a citation', 
				cost: null,
				synopsis: '!editc <b>author</b> <b>tag</b>',
				example: '!editc <author> <tag> >> Edited',
				badges: [mod],
				data: 'Edits a tagged citation of the specified author. Both params are required.'
			},
			{
				title: '!deletec',
				header: 'Delete a citation', 
				cost: null,
				synopsis: '!deletec <b>author</b> <b>tag</b>',
				example: '!deletec <author> <tag> >> Removed',
				badges: [mod],
				data: 'Removes a tagged citation of the specified author. Both params are required.'
			},
			{
				title: '!mycitations',
				header: 'List your citatons', 
				cost: null,
				synopsis: null,
				example: '!mycitations >> Total: 2. <author>: <tag> <author>: <tag>',
				badges: [mod],
				data: 'Prints up to 25 author and tag pairs for all the citations added by you'
			}
		],

		img: citationManagerPng,
		note: 'Prone to spam. Better be for mods only.',
		badges: [mod],
		github: 'https://github.com/George2029/twitch-bot-citation-manager'
	},
	{
		title: `Gamer`,
		header: 'Heroes 3 Calculator',
		descr: 'This bot is multitool for a game which is in comes cases more convenient and surely faster to use than gui analogues',
		commands: [
			{
				title: '!guard', 
				header: 'Calc average monster quantity', 
				cost: null,
				synopsis: '!guard <b>value</b> <b>creature</b> $[strength] #[week]',
				example: '!guard 60000 gold dragon $3 #5 >> 21-36 (29)',
				badges: [everyone],
				data: 'Calcs the range of monsters for the specified params. Value and creature are required. Default strength is 2. Default week is 1.'
			}, 
			{
				title: '!value',
				header: 'Get value of an entity', 
				cost: null,
				synopsis: '!value <b>entity</b>',
				example: '!value ore >> 1400 | ore',
				badges: [everyone],
				data: `Prints the value of an entity. Search method is not strict. It means you may provide not the full entity title, as long as it is enough to match a unique entity among others in the collection.`
			},
			{
				title: '!implo',
				header: 'Calc an implosion damage', 
				cost: null,
				synopsis: '!implo [sp] [magiclvl] [orb] [sorcerylvl] [speclvl]',
				example: '!implo 20 >> 1600',
				badges: [everyone],
				data: 'Returns a spell damage. Provide params in the specific order. Value range is enclosed in [], default value is in (): Order: spell power: [1, 99] (2), magic level: [1, 3], orb: [0, 1] (0), sorcery level: [0; 3] (0), sorcery specialist level: [0; 99] (0)'
			},
			{
				title: '!chain',
				header: 'Calc a Chain Lighting damage', 
				cost: null,
				synopsis: '!chain [sp] [magiclvl] [orb] [sorcerylvl] [speclvl]',
				example: '!chain 5 2 0 3 10 >> 306',
				badges: [everyone],
				data: 'Returns a spell damage. Provide params in the specific order. Value range is enclosed in [], default value is in (): Order: spell power: [1, 99] (2), magic level: [1, 3], orb: [0, 1] (0), sorcery level: [0; 3] (0), sorcery specialist level: [0; 99] (0)'
			},
			{
				title: '!armag',
				header: 'Calc an Armageddon damage', 
				cost: null,
				synopsis: '!armag [sp] [magiclvl] [orb] [sorcerylvl] [speclvl]',
				example: '!armag 8 3 1 >> 660',
				badges: [everyone],
				data: 'Returns a spell damage. Provide params in the specific order. Value range is enclosed in [], default value is in (): Order: spell power: [1, 99] (2), magic level: [1, 3], orb: [0, 1] (0), sorcery level: [0; 3] (0), sorcery specialist level: [0; 99] (0)'
			},
			{
				title: '!shower',
				header: 'Calc a Meteor Shower damage', 
				cost: null,
				synopsis: '!shower [sp] [magiclvl] [orb] [sorcerylvl] [speclvl]',
				example: '!shower 10 3 >> 350',
				badges: [everyone],
				data: 'Returns a spell damage. Provide params in the specific order. Value range is enclosed in [], default value is in (): Order: spell power: [1, 99] (2), magic level: [1, 3], orb: [0, 1] (0), sorcery level: [0; 3] (0), sorcery specialist level: [0; 99] (0)'
			},
			{
				title: '!demon',
				header: 'Demonizer tool', 
				cost: null,
				synopsis: '!demon [meat_qnt] [meat_hp] [pit_ant]',
				example: '!demon 25 16 3 >> 9',
				badges: [everyone],
				data: 'Returns the exact amount of creatures to sacrifice for demons to ressurect. The first parameter is a quantity of creatures for a sacrifice, requied. The second parameter is hp of one creature for a sacrifice, required. The third parameter is a quantity of pit lords, optional, default value is 3.'
			},
			{
				title: '!fangarm',
				header: 'Check fangarm power', 
				cost: null,
				synopsis: '!fangarm [fangarm_qnt] [unit_hp]',
				example: '!fangarm 40 200 >> 5',
				badges: [everyone],
				data: `Returns the max creature quantity that can be hypnotized by fangarms. The 1st parameter: fangarms qnt [1; 99999] (3). The 2nd one: unit hp [1; 1000] (30).`
			},
			{
				title: '!thant',
				header: `Calc Thant's animate dead`, 
				cost: null,
				synopsis: '!thant [sp] [magic_lvl] [thant_lvl] [unit_tier] [unit_hp]',
				example: '!thant 10 3 >> 113',
				badges: [everyone],
				data: `Returns the amount of fully ressurectable units (i.e. one might actually ressurect one more, but the extra creature would not have full hp). SP: [2, 99] (2), earthLvl: [1, 3] (1), thantLvl: [1, 99] (1), creatureTier: [1, 7] (1), creatureHp: [6, 200] (6).`
			},
			{
				title: '!luna',
				header: `Calc Luna's firewall damage`, 
				cost: null,
				synopsis: '!luna [sp] [magic_lvl] [orb]',
				example: '!luna 5 2 1 >> 210',
				badges: [everyone],
				data: `Easy calc of Luna's firewall damage. The first parameter is the spellpower, default value is 3. The 2nd is level of fire magic (basic, advanced, expert) with values range from 1 to 3, default value is 3. The last parameter is an orb, 0 means the absence of it and 1 means existence, default value is 0.`
			},
		],

		img: h3CalcPng,
		note: `New features can be added in the future`,
		badges: [everyone],
		github: 'https://github.com/George2029/twitch-bot-game-utility'
	},
	{
		title: 'Manager',
		header: 'Stream manager',
		descr: 'A bot which is in control of regular stream operations, such as points management, title changing and a help-command',
		commands: [
			{
				title: '!title', 
				header: 'Change the title of the stream', 
				cost: null,
				synopsis: '!title [new_title]',
				example: '!title training >> Done',
				badges: [vip],
				data: 'Changes the stream title.'
			}, 
			{
				title: '!points',
				header: 'Check the points balance', 
				cost: null,
				synopsis: null,
				example: '!points >> 1000',
				badges: [follower],
				data: 'Prints points you own at the moment'
			},
			{
				title: '!get',
				header: 'Get points', 
				cost: null,
				synopsis: null,
				example: '!get >> +500',
				badges: [follower],
				data: 'Adds some points to your account depending on your status once per 24h. Vips receive 50% more points.'
			},
			{
				title: '!commands',
				header: 'Output all the commands', 
				cost: null,
				synopsis: null,
				example: '!commands >> <all commands>',
				badges: [everyone],
				data: 'Prints all the channel commands'
			},
			{
				title: '!whoami',
				header: 'Check your channel status', 
				cost: null,
				synopsis: null,
				example: '!whoami >> Young boy!',
				badges: [everyone],
				data: 'Prints a status message depending on the time of your channel follow'
			},
			{
				title: '!give',
				header: 'give points to a user', 
				cost: null,
				synopsis: '!give <b>nick</b> [points]',
				example: '!give user1234 >> Awarded',
				badges: [broadcaster],
				data: 'Premiums a chat user with some points. Default premium size is 1000 points'
			},

		],
		img: managerPng,
		note: null,
		badges: [follower, vip, broadcaster],
		github: 'https://github.com/George2029/twitch-bot-channel-manager'
	},
]


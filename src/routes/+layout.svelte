<script lang="ts">
	import Analytics from '$lib/analytics.svelte'
	import { dev } from '$app/environment'
	import { inject } from '@vercel/analytics'

	import '$lib/style.css'

	import { Comments } from '$lib'

	inject({ mode: dev ? 'development' : 'production' })

	let { children } = $props()
</script>

<Analytics />

<svelte:head>
	<title>"🇺🇸 Countdown to the Election 🇺🇸 2024"</title>
	<meta name="description" content="🇺🇸 Countdown to the Election 🇺🇸 2024" />
	<meta name="keywords" content="🇺🇸 Countdown to the Election 🇺🇸 2024" />
	<meta name="author" content="🇺🇸 Countdown to the Election 🇺🇸 2024" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="theme-color" content="#6712b8" />
	<meta name="twitter:card" content="🇺🇸 Countdown to the Election 🇺🇸 2024" />
	<meta name="twitter:site" content="@timsmith23" />
	<meta name="twitter:creator" content="@timsmith23" />
	<meta property="og:title" content="🇺🇸 Countdown to the Election 🇺🇸 2024" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="/" />
	<meta property="og:description" content="🇺🇸 Countdown to the Election 🇺🇸 2024" />
	<meta property="og:site_name" content="🇺🇸 Countdown to the Election 🇺🇸 2024" />
	<meta property="og:image" content="desktop-screenshot.png" />
	<link rel="apple-touch-icon" href="apple-touch-icon.png" />
	<link rel="manifest" href="manifest.json" />
	<link rel="canonical" href="/" />
</svelte:head>

<header><h1>🇺🇸 Countdown to the Election 🇺🇸 <br /> 2024</h1></header>

<main>
	{@render children()}

	<Comments />
</main>

<footer>
	<p>
		Created by <a href="https://github.com/timscodebase/election-countdown" target="_blank"
			>Tim Smith</a
		>
	</p>
	<p>Copyright &copy; {new Date().getFullYear()}</p>
</footer>

<style>
	main {
		display: grid;
		place-content: center;
		text-align: center;
		gap: 1rem;
	}

	:global(.countdown, footer, header) {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: var(--spacing);
		padding: calc(var(--spacing) / 2) var(--spacing);
		margin: calc(var(--spacing) / 2) var(--spacing);
		background: var(--color-shadow-blue);
		box-shadow:
			3px 3px 0px var(--red),
			6px 6px 0px var(--white),
			9px 9px 0px var(--blue),
			-3px 3px 0px var(--red),
			-6px 6px 0px var(--white),
			-9px 9px 0px var(--blue),
			3px -3px 0px var(--red),
			6px -6px 0px var(--white),
			9px -9px 0px var(--blue),
			-3px -3px 0px var(--red),
			-6px -6px 0px var(--white),
			-9px -9px 0px var(--blue);

		:global(.wall) {
			background: var(--white);
			width: 3px;
			height: 100%;
		}
	}

	footer {
		text-align: center;
		margin-bottom: 4em;
		p {
			font-size: 0.8em;
			color: var(--color-grey);
			text-shadow:
				0 0 0.5em var(--color-shadow-red),
				0 0 1em var(--color-shadow-red),
				0 0 1.2em var(--color-shadow-red);
		}
	}
</style>

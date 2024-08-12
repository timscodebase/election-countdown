<script lang="ts">
	import type { LayoutData } from './$types';
	import Analytics from '$lib/analytics.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	let { children } = $props();
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

{@render children()}

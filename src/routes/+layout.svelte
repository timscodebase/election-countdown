<script lang="ts">
	import type { LayoutData } from './$types';
	import Analytics from '$lib/analytics.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	let { children } = $props();
</script>

<Analytics />

{@render children()}

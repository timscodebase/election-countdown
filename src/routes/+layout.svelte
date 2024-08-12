<script lang="ts">
	import type { LayoutData } from './$types';
	import Analytics from '$lib/analytics.svelte';

	let { children } = $props();
</script>

<Analytics />

{@render children()}

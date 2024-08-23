<script lang="ts">
	import { page } from '$app/stores'
	// import gtag from 'gtag';

	$effect(() => {
		if (typeof gtag !== 'undefined') {
			gtag('config', 'G-79ZYXTX8LL', {
				page_title: document.title,
				page_path: $page.url.pathname
			})
		}
	})
</script>

<svelte:head>
	<meta name="google-adsense-account" content="ca-pub-3189326528459169" />
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-79ZYXTX8LL"></script>
	<script
		async
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3189326528459169"
		crossorigin="anonymous"
	></script>
	<script>
		window.dataLayer = window.dataLayer || []
		function gtag() {
			dataLayer.push(arguments)
		}
		gtag('js', new Date())

		gtag('config', 'G-79ZYXTX8LL')
	</script>
</svelte:head>

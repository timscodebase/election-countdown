<script lang="ts">
	import { onMount } from 'svelte'
	import { enhance } from '$app/forms'
	import { marked } from 'marked'
	import Prism from 'prismjs'

	type Comment = {
		id: number
		content: string
	}

	let newComment: string = ''
	let comments: Comment[] = []

	onMount(() => {
		const storedComments = localStorage.getItem('comments')
		if (storedComments) {
			comments = JSON.parse(storedComments)
			console.log('comments: ', comments)
		}
	})

	function addComment() {
		if (newComment.trim() !== '') {
			comments.push({ id: Date.now(), content: newComment })
			newComment = ''
			localStorage.setItem('comments', JSON.stringify(comments))
		}
	}

	async function renderMarkdown(content: string): Promise<string> {
		let html = await marked(content)
		onMount(() => {
			document.querySelectorAll('pre code').forEach((block) => {
				Prism.highlightElement(block as HTMLElement)
			})
		})
		return html
	}
</script>

<div>
	<form onsubmit={addComment}>
		<textarea bind:value={newComment} placeholder="Write your comment in Markdown..."></textarea>
		<button type="submit">Add Comment</button>
	</form>

	{#each comments as comment}
		<div class="comment">
			hi
			{@html renderMarkdown(comment.content)}
		</div>
	{/each}
</div>

<style>
	.comment {
		margin-bottom: 20px;
		border-bottom: 1px solid #ddd;
		padding-bottom: 10px;
	}

	pre {
		background-color: #f5f5f5;
		padding: 10px;
		border-radius: 5px;
	}
</style>

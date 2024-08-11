<script lang="ts">
	import { daysUntilFutureDate, daysSinceDate } from '$lib';

	const electionDay = new Date('2024-11-05');
	const lastElectionDay = new Date('2020-11-03');
	const earlyVotingMailInStart = new Date('2024-09-06');
	const earlyVotingInPersonStart = new Date('2024-09-20');
</script>

<main>
	<div class="countdown">
		<div class="election-day">
			<h1>Days until Election Day</h1>
			<p>{daysUntilFutureDate(electionDay)}</p>
			<div class="days blue">Days</div>
		</div>
		<div class="wall" />
		<div class="early-vote">
			<h2>Days until Early Voting By Mail</h2>
			<p>{daysUntilFutureDate(earlyVotingMailInStart)}</p>
			<div class="days">Days</div>
			<hr />

			<h2>Days until Early Voting in Person</h2>
			<p>{daysUntilFutureDate(earlyVotingInPersonStart)}</p>
			<div class="days">Days</div>
		</div>
		<div class="wall" />
		<div class="kamala-days">
			<h2>Kamala Vice Presidency</h2>
			<p>{daysSinceDate(lastElectionDay)}</p>
			<div class="days">Days</div>
		</div>
	</div>
</main>

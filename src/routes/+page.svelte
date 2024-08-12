<script lang="ts">
	import { daysUntilFutureDate, daysSinceDate } from '$lib';

	const electionDay = new Date('2024-11-05');
	const lastElectionDay = new Date('2020-11-03');
	const earlyVotingMailInStart = new Date('2024-09-06');
	const earlyVotingInPersonStart = new Date('2024-09-20');
	const foxNewsDebate = new Date('2024-09-04');
	const abcNewsDebate = new Date('2024-09-10');
	const nbcNewsDebate = new Date('2024-09-25');
</script>

<header><h1>🇺🇸 Countdown to the Election 🇺🇸 <br /> 2024</h1></header>
<main>
	<section class="countdown">
		<div class="election-day">
			<h1>Days until Election Day</h1>
			<p>{daysUntilFutureDate(electionDay)}</p>
			<div class="days">Days</div>
		</div>
		<div class="wall"></div>
		<div class="early-vote">
			<h2>Days until Early Voting By Mail</h2>
			<p>{daysUntilFutureDate(earlyVotingMailInStart)}</p>
			<div class="days">Days</div>
			<hr />

			<h2>Days until Early Voting in Person</h2>
			<p>{daysUntilFutureDate(earlyVotingInPersonStart)}</p>
			<div class="days">Days</div>
		</div>
		<div class="wall"></div>
		<div class="kamala-days">
			<h2>Kamala Vice Presidency</h2>
			<p>{daysSinceDate(lastElectionDay)}</p>
			<div class="days">Days</div>
		</div>
	</section>
	<section class="countdown">
		<h2 class="title">Debate Countdown</h2>
		<div class="election-day">
			<h3>Days until Fox News Debate</h3>
			<p>{daysUntilFutureDate(foxNewsDebate)}</p>
			<div class="days blue">Days</div>
		</div>
		<div class="wall"></div>
		<div class="early-vote">
			<h3>Days until ABC News Debate</h3>
			<p>{daysUntilFutureDate(abcNewsDebate)}</p>
			<div class="days blue">Days</div>
			<hr />

			<h3>Days until NBC News Debate</h3>
			<p>{daysUntilFutureDate(nbcNewsDebate)}</p>
			<div class="days blue">Days</div>
		</div>
	</section>
</main>
<footer>
	<p>
		Created by <a href="https://github.com/timscodebase/election-countdown" target="_blank"
			>Tim Smith</a
		>
	</p>
	<p>Copyright &copy; {new Date().getFullYear()}</p>
</footer>

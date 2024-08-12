// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			env?: {
				YOUR_KV_NAMESPACE: ELECTION_COUNTDOWN_KV_NAMESPACE;
				YOUR_DURABLE_OBJECT_NAMESPACE: ElectionCountdownDurableObjectNamespace;
			};
		}
	}
}

export {};

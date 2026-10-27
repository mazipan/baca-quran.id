import { defineEnvVars } from '@sveltejs/kit/env';

// Optional at build time: CI builds run without Firebase credentials,
// and the sync page falls back to dummy values.
const optional = (value: string | undefined) => value;

export const variables = defineEnvVars({
	PUBLIC_FIREBASE_API_KEY: { public: true, schema: optional },
	PUBLIC_FIREBASE_AUTH_DOMAIN: { public: true, schema: optional },
	PUBLIC_FIREBASE_PROJECT_ID: { public: true, schema: optional },
	PUBLIC_FIREBASE_STORAGE_BUCKET: { public: true, schema: optional },
	PUBLIC_FIREBASE_MESSAGING_SENDER_ID: { public: true, schema: optional },
	PUBLIC_FIREBASE_APP_ID: { public: true, schema: optional },
	PUBLIC_FIREBASE_MEASUREMENT_ID: { public: true, schema: optional }
});

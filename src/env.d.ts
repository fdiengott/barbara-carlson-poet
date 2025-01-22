/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly NETLIFY_BUILD_HOOK: string;
    readonly SECRET_FB_ACCESS_TOKE: string;
    readonly SECRET_FB_CLIENT_SECRET: string;
    readonly SECRET_FB_CLIENT_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

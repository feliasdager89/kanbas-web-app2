/// <reference types="vite/client" />

// Optional: declare your env keys for better intellisense
interface ImportMetaEnv {
  readonly VITE_REMOTE_SERVER?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
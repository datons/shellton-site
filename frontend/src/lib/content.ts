export const appStoreUrl = 'https://apps.apple.com/app/id6772469813';

export const landing = {
  hero: {
    eyebrow: 'SSH · MOSH · AI AGENTS',
    title: 'Your agents. Your servers. Your pocket.',
    sub: 'The terminal for iPhone & iPad that keeps Claude Code and Codex reachable wherever you are. Mosh-first. No host daemon. Keys protected on device.',
    ctaPrimary: 'Download on the App Store',
    ctaSecondary: 'Agent setup',
    proof: 'Available on the App Store · Built by Datons',
    terminal: {
      titleBar: 'droplet-ts — mosh · tmux: main',
      lines: [
        { prompt: '❯', command: 'claude', note: '' },
        { prompt: '●', command: 'Claude Code — refactoring AuthService…', note: 'live' },
        { prompt: '⏺', command: 'Edit  Shell/Services/SSH/AuthService.swift', note: 'done' },
        { prompt: '⏺', command: 'Bash  swift test --filter AuthTests', note: 'running' },
        { prompt: '▌', command: 'watching from iPhone — tap to approve', note: '' }
      ]
    }
  },
  features: [
    { icon: '⌁', title: 'Agent cockpit', detail: 'Watch and drive Claude Code & Codex as a native conversation — streamed over ACP, not a screen-scrape.' },
    { icon: '∿', title: 'Mosh-first, always', detail: 'Survives Wi-Fi handoffs, tunnels and locked screens. Falls back to SSH automatically when mosh-server is missing.' },
    { icon: '⬡', title: 'No host daemon', detail: 'Agent conversations need Node.js 22+ and npm on the remote host. Shellton launches the ACP adapter on demand over SSH.' },
    { icon: '🎙', title: 'Voice, on device', detail: 'Whisper, Parakeet or Apple speech — transcribed locally. Your audio never leaves the phone.' },
    { icon: '⌨', title: 'Your keyboard, your rules', detail: 'Accessory bar defined in YAML: modifiers, escape sequences, tmux macros. Version it, sync it via iCloud.' },
    { icon: '🔑', title: 'Keys protected on device', detail: 'SSH keys are sealed in the iOS Keychain and can require Face ID or Touch ID before every use.' }
  ],
  compare: {
    heading: 'How Shellton compares',
    columns: ['', 'Shellton', 'Moshi', 'Termius', 'Blink'],
    rows: [
      ['Agent feature prerequisite', 'Node.js 22+ and npm', 'moshi-hook', '—', '—'],
      ['Agent cockpit', 'Native · ACP', 'Hook-based', '—', '—'],
      ['Mosh with auto-fallback', 'Yes', 'Manual choice', 'Mosh', 'Mosh']
    ],
    note: 'Full, honest comparisons at /compare — including where Moshi is ahead today.'
  },
  pricing: {
    heading: 'Simple pricing',
    free: { name: 'Free', price: '€0', items: ['Full SSH + Mosh terminal', 'Keys in Keychain + Face ID', 'Themes, fonts, Live Activities', 'Default accessory bar'] },
    pro: { name: 'Shellton Pro', price: '€4.99/mo · €39.99/yr', items: ['Agent cockpit (Claude Code, Codex)', 'On-device voice input', 'Compose flow', 'Accessory-bar customization'] }
  },
  footer: 'Shellton — a terminal for humans and their agents. © Datons'
} as const;

export type ComparisonRow = {
  capability: string;
  shellton: string;
  competitor: string;
  advantage: 'shellton' | 'competitor' | 'tie' | 'different';
};

export type Comparison = {
  slug: string;
  name: string;
  title: string;
  intro: string;
  verdict: string;
  rows: ComparisonRow[];
  sources: { label: string; href: string }[];
};

export const comparisons: Record<string, Comparison> = {
  moshi: {
    slug: 'moshi',
    name: 'Moshi',
    title: 'Shellton vs Moshi',
    intro: 'Moshi is broader today. Shellton takes a different position: a focused iPhone and iPad terminal with a native agent cockpit and no host daemon.',
    verdict: 'Choose Moshi for Android, ET, a diff viewer, a file browser, Apple Watch approvals, or image paste. Choose Shellton for native ACP and JSONL agent sessions without moshi-hook, plus automatic Mosh-to-SSH fallback.',
    rows: [
      { capability: 'Agent cockpit', shellton: 'Native over ACP + JSONL, no daemon', competitor: 'Experimental Pro chat view via moshi-hook', advantage: 'different' },
      { capability: 'Agent feature prerequisite', shellton: 'Node.js 22+ and npm; ACP adapter launches on demand', competitor: 'moshi-hook via curl | sh', advantage: 'different' },
      { capability: 'Persistence', shellton: 'Automatic Mosh → SSH fallback', competitor: 'Mosh + ET, manual choice', advantage: 'competitor' },
      { capability: 'On-device voice', shellton: 'Whisper, Parakeet, or Apple Speech', competitor: 'Parakeet, Whisper, Apple, or cloud', advantage: 'tie' },
      { capability: 'Diff viewer, file browser, dev preview', shellton: 'Not available', competitor: 'Available with Pro', advantage: 'competitor' },
      { capability: 'Apple Watch and agent Live Activities', shellton: 'SSH session Live Activities; no Watch app', competitor: 'Watch approvals and agent Live Activities', advantage: 'competitor' },
      { capability: 'Image paste and annotation', shellton: 'Not available', competitor: 'Available', advantage: 'competitor' },
      { capability: 'Platforms', shellton: 'iOS and iPadOS', competitor: 'iOS and Android', advantage: 'competitor' },
      { capability: 'Pro annual price', shellton: '€39.99', competitor: '€22.99', advantage: 'competitor' }
    ],
    sources: [{ label: 'Moshi product and comparison pages', href: 'https://getmoshi.app/compare' }]
  },
  termius: {
    slug: 'termius',
    name: 'Termius',
    title: 'Shellton vs Termius',
    intro: 'Termius is an infrastructure access suite across desktop and mobile. Shellton is a focused iPhone and iPad terminal built around persistent sessions and remote coding agents.',
    verdict: 'Choose Termius for Android and desktop clients, SFTP, encrypted multi-device vaults, or team administration. Choose Shellton for automatic Mosh fallback and a native Claude Code and Codex cockpit.',
    rows: [
      { capability: 'Primary focus', shellton: 'Mobile terminal for humans and coding agents', competitor: 'Infrastructure access and team collaboration', advantage: 'different' },
      { capability: 'Agent cockpit', shellton: 'Native Claude Code and Codex conversation over ACP', competitor: 'No ACP cockpit documented', advantage: 'shellton' },
      { capability: 'Persistence', shellton: 'Automatic Mosh → SSH fallback', competitor: 'SSH workflows', advantage: 'shellton' },
      { capability: 'File management', shellton: 'No file browser', competitor: 'SFTP', advantage: 'competitor' },
      { capability: 'Shared infrastructure vaults', shellton: 'Personal device and iCloud configuration', competitor: 'Encrypted personal and team vaults', advantage: 'competitor' },
      { capability: 'Platforms', shellton: 'iOS and iPadOS', competitor: 'macOS, Windows, Linux, iOS, Android', advantage: 'competitor' },
      { capability: 'On-device voice input', shellton: 'Whisper, Parakeet, or Apple Speech', competitor: 'Not documented as an on-device terminal input feature', advantage: 'shellton' }
    ],
    sources: [
      { label: 'Termius product page', href: 'https://termius.com/' },
      { label: 'Termius documentation', href: 'https://docs.termius.com/' }
    ]
  },
  blink: {
    slug: 'blink',
    name: 'Blink',
    title: 'Shellton vs Blink Shell',
    intro: 'Blink is a capable mobile shell with a broad Unix-style environment. Shellton is narrower and centers native remote-agent control, Mosh-first connections, and device-protected key handling.',
    verdict: 'Choose Blink for its command-line environment, Files integration, broad keyboard workflows, and established Mosh tooling. Choose Shellton for a native agent cockpit, automatic fallback, and an iOS-native host and session model.',
    rows: [
      { capability: 'Primary focus', shellton: 'Native terminal and coding-agent cockpit', competitor: 'Mobile shell and Unix-style workspace', advantage: 'different' },
      { capability: 'Agent cockpit', shellton: 'Native Claude Code and Codex conversation over ACP', competitor: 'Terminal workflow; no ACP cockpit documented', advantage: 'shellton' },
      { capability: 'Mosh workflow', shellton: 'Automatic Mosh → SSH fallback per host', competitor: 'Mosh available as an explicit connection command', advantage: 'different' },
      { capability: 'Host requirement for Mosh', shellton: 'mosh-server optional; SSH fallback when absent', competitor: 'mosh-server required for Mosh', advantage: 'shellton' },
      { capability: 'Files and local environment', shellton: 'No file browser', competitor: 'Files.app integration and a broad command environment', advantage: 'competitor' },
      { capability: 'Keyboard customization', shellton: 'YAML accessory bar with macros and escape sequences', competitor: 'Extensive software and hardware keyboard support', advantage: 'different' },
      { capability: 'Platforms', shellton: 'iOS and iPadOS', competitor: 'iOS and iPadOS', advantage: 'tie' }
    ],
    sources: [
      { label: 'Blink Shell overview', href: 'https://docs.blink.sh/what-is' },
      { label: 'Blink Mosh documentation', href: 'https://docs.blink.sh/advanced/advanced-mosh' }
    ]
  }
};

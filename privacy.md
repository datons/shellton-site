---
title: Privacy Policy
permalink: /privacy/
description: Shellton does not collect data for Datons. This policy explains local storage, iCloud sync, model downloads, and optional user-configured network features.
---

# Shellton Privacy Policy

**Effective date:** 2026-05-23
**Last updated:** 2026-06-28

Shellton is a terminal client for SSH and Mosh, built and operated by **Datons**. This policy explains exactly what Shellton does and does not collect, store, or transmit.

The short version: **Shellton does not track you and never sees your terminal content.** The app collects a small amount of anonymous product telemetry (which screens and features are used — never hostnames, commands, or terminal text) that you can switch off in Settings at any time. The app connects to hosts you configure, can download speech models, can sync accessory-bar configuration through your private iCloud container, and can send Live Activity data to an HTTPS webhook you configure.

---

## 1. Information we do not collect

Shellton does **not** collect or transmit any of the following to Datons:

- Personally identifiable information (name, email, address, phone number)
- Device identifiers (IDFA, IDFV, advertising IDs)
- Crash reports (Apple's standard crash reporting is opt-in via your iOS device settings and goes only to Apple, not to Datons)
- Terminal session content (commands, output, files transferred)
- Server hostnames, usernames, or any data about the systems you connect to
- Voice recordings or transcribed text

Shellton does not contain any advertising, attribution, or marketing SDKs, and does not track you across apps or websites.

## 1a. Anonymous product telemetry

Shellton uses [TelemetryDeck](https://telemetrydeck.com/privacy/) to understand which features are used, so we can prioritize what to improve. This telemetry is designed to be anonymous end to end:

- Identifiers are irreversibly hashed **on your device** before anything is sent; nothing is linked to your identity.
- Events describe product interactions only (e.g. "a connection was started", "the tmux panel was opened", auth method *type*, protocol *type*).
- Hostnames, IP addresses, usernames, commands, terminal output, file contents, and voice transcripts are **never** part of any event — the client strips raw values before sending.
- No cross-app tracking, no advertising identifiers, no fingerprinting.

You can turn telemetry off at any time in **Settings → share anonymous usage analytics**. The app is fully functional with it off.

## 2. Information stored only on your device

Shellton stores the following **locally** on your iPhone. None of this is transmitted to Datons:

| What | Where stored | Why |
|---|---|---|
| Saved server connections (host, port, username, color tag, protocol preference) | App's local SwiftData store | So you can reconnect without retyping |
| SSH private keys you generate or import | iOS Keychain (secure enclave when supported) | To authenticate with your SSH servers |
| Terminal command history typed locally or, when you explicitly enable automatic import, fetched from your servers | Protected app-local Application Support directory | For the in-app history browser |
| Snippets you create | App's local Application Support directory | For the in-app snippet library |
| Accessory bar configuration | Protected app-local storage and your private iCloud container when iCloud is available | Your customized keyboard layout across devices |
| Trusted SSH host fingerprints | App's local Application Support directory | Trust-on-first-use host key verification |
| App preferences (font size, theme, voice model) | iOS UserDefaults | Per-device settings |

Your SSH keys never leave the Keychain. Shellton uses them in-memory at connection time and never copies, exports, or transmits them.

## 3. iCloud sync and manual transfer

When iCloud is available, Shellton stores your personal accessory-bar YAML in its private iCloud container so the layout can follow you between devices. Apple operates this service under [Apple's Privacy Policy](https://www.apple.com/legal/privacy/). Datons cannot access your private iCloud container. Saved hosts, private keys, command history, snippets, and themes are not synchronized by this feature.

Shellton has an Export to YAML / Import from YAML option in Settings → Portability. You can copy the YAML to the clipboard or pick a `.yaml` file from the iOS Files app (which includes iCloud Drive, Dropbox, Working Copy, etc.). Where you choose to keep that file is entirely your decision — Datons doesn't operate any service that receives, stores, or syncs it.

If you put the file in iCloud Drive, Apple's iCloud service syncs it between your own devices under [Apple's Privacy Policy](https://www.apple.com/legal/privacy/). Datons has no access to, and does not request access to, your iCloud Drive contents.

## 4. Network connections Shellton makes

Shellton may make these outbound network connections:

- **SSH connections** to the hostnames and ports you enter into the app (TCP, port 22 by default)
- **Mosh connections** which start as a brief SSH session to your server and then continue as direct UDP between your device and your server (default UDP port range 60000–61000)
- **Speech-model downloads** — when you choose a WhisperKit or MLX Parakeet model that is not already on the device, the model provider receives a normal download request. Recorded audio and transcripts are not included in that request. After download, transcription runs on-device.
- **iCloud** — accessory-bar configuration can sync through Shellton's private iCloud container when iCloud is available.
- **User-configured Live Activity webhook** — only if you enable the feature and enter an HTTPS endpoint. Shellton sends the event type, app bundle ID, ActivityKit activity ID, session ID, host name, user name, display name, connection time and status, encoded Live Activity state, timestamp, and—when issued by Apple—the ActivityKit push token. The destination and its retention policy are controlled by you, not Datons.
- **Apple Push Notification service** — ActivityKit communicates with APNs when server-backed Live Activities are enabled.

There are no Datons analytics endpoints, usage reporting, remote configuration services, or advertising calls.

## 5. Permissions Shellton requests, and why

Shellton may request the following iOS permissions. Each is clearly explained in iOS's permission prompt and is used only for the stated purpose.

### Microphone (`NSMicrophoneUsageDescription`)
Used by the optional voice input feature. Audio is processed **entirely on-device** using Apple Speech, [WhisperKit](https://github.com/argmaxinc/WhisperKit), or MLX Parakeet. Audio recordings are never saved to disk or transmitted off your device. The transcribed text is inserted into your terminal session locally.

### Local Network (`NSLocalNetworkUsageDescription`)
Required by iOS to connect to SSH/Mosh servers on your local network (e.g. a home or office machine on your LAN). Shellton uses this only to make connections to the hostnames you've explicitly configured.

## 6. Data retention and deletion

Deleting Shellton removes its app-container data, including:

- All saved connections
- All command history, snippets, themes, and preferences
- Trusted host key fingerprints

Keychain items can survive app deletion under iOS behavior. Delete keys inside Settings → Security → SSH Keys before uninstalling if you want them removed immediately. If you reinstall Shellton, previously retained Keychain items may still exist.

The private iCloud accessory-bar file and any YAML files you exported to iCloud Drive, Dropbox, or elsewhere are **not** necessarily removed when you uninstall Shellton. Delete those files from Files or the corresponding cloud service if you want them removed.

Datons does not retain any of your data, because Datons never receives any of it.

## 7. Children

Shellton is a developer tool. It is not directed at children under 13 and does not knowingly collect information from anyone, regardless of age.

## 8. Changes to this policy

If this policy changes meaningfully, the update will be published at the URL where you found this document, with a new "Last updated" date at the top. Continued use of Shellton after a change constitutes acceptance of the updated policy. Because Shellton does not collect data, policy changes are typically clarifications rather than substantive shifts.

## 9. Contact

For privacy questions or concerns about Shellton, contact:

**Datons** — email [jesus.lopez@datons.com](mailto:jesus.lopez@datons.com), see the [support page](/support/) for known issues and bug reports.

If you believe Shellton is doing something that contradicts this policy, please contact us before filing a complaint — we want to fix it.

---

## Apple App Store Privacy "Nutrition Label" Mapping

For App Store Connect's App Privacy questionnaire, Shellton answers:

| Question | Answer |
|---|---|
| Do you collect data from this app? | **No** |
| Do you use third-party partners to collect data? | **No** |
| Tracking | **Not used** |

All "data linked to user" and "data not linked to user" categories: **None collected.**

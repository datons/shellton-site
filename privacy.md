---
title: Privacy Policy
permalink: /privacy/
description: Shellton does not collect any personal data. This policy explains what the app does and does not store.
---

# Shellton Privacy Policy

**Effective date:** 2026-05-23
**Last updated:** 2026-05-23

Shellton is a terminal client for SSH and Mosh, built and operated by **Datons**. This policy explains exactly what Shellton does and does not collect, store, or transmit.

The short version: **Shellton does not collect any personal data, does not include analytics or advertising SDKs, does not track you, and never sends your terminal traffic, credentials, or any other content to Datons or any third party.**

---

## 1. Information we do not collect

Shellton does **not** collect, store, or transmit any of the following to Datons or any third-party server:

- Personally identifiable information (name, email, address, phone number)
- Device identifiers (IDFA, IDFV, advertising IDs)
- Usage analytics or telemetry
- Crash reports (Apple's standard crash reporting is opt-in via your iOS device settings and goes only to Apple, not to Datons)
- Terminal session content (commands, output, files transferred)
- Server hostnames, usernames, or any data about the systems you connect to
- Voice recordings or transcribed text

Shellton does not contain any third-party analytics, advertising, attribution, or marketing SDKs.

## 2. Information stored only on your device

Shellton stores the following **locally** on your iPhone or iPad. None of this is transmitted to Datons or any third party:

| What | Where stored | Why |
|---|---|---|
| Saved server connections (host, port, username, color tag, protocol preference) | App's local SwiftData store | So you can reconnect without retyping |
| SSH private keys you generate or import | iOS Keychain (secure enclave when supported) | To authenticate with your SSH servers |
| Terminal command history fetched from your servers | App's local Application Support directory | For the in-app history browser |
| Snippets you create | App's local Application Support directory | For the in-app snippet library |
| Accessory bar configuration | App's local Application Support directory | Your customized keyboard layout |
| Trusted SSH host fingerprints | App's local Application Support directory | Trust-on-first-use host key verification |
| App preferences (font size, theme, voice model) | iOS UserDefaults | Per-device settings |

Your SSH keys never leave the Keychain. Shellton uses them in-memory at connection time and never copies, exports, or transmits them.

## 3. Cross-device transfer (manual, optional)

Shellton has an Export to YAML / Import from YAML option in Settings → Portability. You can copy the YAML to the clipboard or pick a `.yaml` file from the iOS Files app (which includes iCloud Drive, Dropbox, Working Copy, etc.). Where you choose to keep that file is entirely your decision — Datons doesn't operate any service that receives, stores, or syncs it.

If you put the file in iCloud Drive, Apple's iCloud service syncs it between your own devices under [Apple's Privacy Policy](https://www.apple.com/legal/privacy/). Datons has no access to, and does not request access to, your iCloud Drive contents.

## 4. Network connections Shellton makes

Shellton makes outbound network connections **only to the SSH and Mosh servers you explicitly configure**. Specifically:

- **SSH connections** to the hostnames and ports you enter into the app (TCP, port 22 by default)
- **Mosh connections** which start as a brief SSH session to your server and then continue as direct UDP between your device and your server (default UDP port range 60000–61000)
- **APNs (Apple Push Notification service)** — only if you have enabled the optional "Live Activity Push" feature in Settings *and* configured a webhook URL to your own backend. In that case, Shellton sends an ActivityKit push token to the URL you specified. Datons does not operate any backend; the webhook URL is yours.

Shellton makes **no other network connections**. There are no analytics endpoints, no usage reporting, no remote configuration servers, no advertising calls, no third-party SDKs phoning home.

## 5. Permissions Shellton requests, and why

Shellton may request the following iOS permissions. Each is clearly explained in iOS's permission prompt and is used only for the stated purpose.

### Microphone (`NSMicrophoneUsageDescription`)
Used by the optional voice input feature. Audio is processed **entirely on-device** using Apple's Whisper model via [WhisperKit](https://github.com/argmaxinc/WhisperKit). Audio recordings are never saved to disk and are never transmitted off your device. The transcribed text is inserted into your terminal session locally.

### Local Network (`NSLocalNetworkUsageDescription`)
Required by iOS to connect to SSH/Mosh servers on your local network (e.g. a home or office machine on your LAN). Shellton uses this only to make connections to the hostnames you've explicitly configured.

### Location — Always (`NSLocationAlwaysAndWhenInUseUsageDescription`)
**Optional and opt-in only.** SSH connections (unlike Mosh) are interrupted when iOS suspends Shellton in the background. To keep an SSH session alive while you're using another app, iOS requires the app to use one of a small set of background modes — Shellton uses background location with the lowest possible accuracy (cellular tower only, no GPS, no Wi-Fi scanning).

When this feature is active, Shellton **does not record, store, transmit, or otherwise use your location data in any way**. The CoreLocation update callback is intentionally empty — its only purpose is to prevent iOS from suspending the app while an SSH session is active.

This feature is **disabled by default**. Shellton will only request location permission when:
1. You start an SSH session (Mosh sessions never trigger this prompt — Mosh survives backgrounding natively over UDP), and
2. You explicitly answer "Enable" to a one-time in-app prompt that explains exactly what background location is used for.

You can disable background keep-alive at any time in Settings, in which case SSH sessions will simply disconnect when you switch away from the app.

## 6. Data retention and deletion

All data Shellton stores lives entirely on your device. Deleting Shellton from your device removes all locally stored data, including:

- All saved connections
- All SSH keys stored in Shellton's Keychain entries
- All command history, snippets, themes, and preferences
- Trusted host key fingerprints

Any YAML files you exported and saved to iCloud Drive, Dropbox, or elsewhere are **not** affected by uninstalling Shellton — they belong to you and live under your own cloud provider's policy. Open the Files app on any device and delete the file directly if you want to remove it.

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

---
title: "Automated Golf Simulator Door Access"
description: "A customer books a bay and the door opens at their time — no staff, no keypad, no app. How Birdie + PDK works and keeps access secure."
pubDate: 2025-08-31
---

The concept is simple: a customer books a simulator bay, and the door opens for them at their scheduled time — automatically. No staff, no keypad, no app to download. Here's exactly how it works and what you need to set it up.

## The technology — Birdie + PDK

Birdie integrates with ProDataKey (PDK), a cloud-based access-control system used by thousands of commercial facilities. It's one of several commercial access-control platforms serving indoor golf — [Kisi](https://www.getkisi.com/industry/golf-simulator) is another — and Birdie's automated door access runs on PDK today. PDK controls the physical door lock via a cloud node installed at the facility; Birdie controls the booking and the unlock trigger. When a customer books, the system generates a unique, time-gated unlock token tied to that booking and delivers it by SMS. When they tap the link at their appointment time, Birdie verifies the booking is active and sends an unlock command to PDK via API. The door opens — the whole sequence takes 2–3 seconds.

## The customer experience

The customer books online and gets an SMS confirmation with their unlock link; a reminder text arrives 30 minutes before their session with the link included again. They arrive, open the text, tap the link (a simple page opens in their phone browser), and the door unlocks. The link expires at their booking end time. No account creation, no app download, no Bluetooth pairing — any smartphone with SMS works.

## Security — how unauthorized access is prevented

Each unlock link contains a unique token, not a booking ID or any personal data, and only activates during the exact booking window. Tapping early returns a "session hasn't started" message; tapping after the session ends returns "expired." The token is single-use for the initial unlock but can re-trigger the door during the same window if the customer steps out, and tokens are automatically purged after expiration to prevent replay attacks. If a customer shares their link outside the booking window, the door won't open.

## What hardware you need

On the PDK side: a cloud node (RCNE or equivalent), a door controller, and a compatible reader at the entry point — installed by licensed dealers. On the Birdie side: an active account with PDK door access enabled in the admin panel. Setup takes under 10 minutes after the hardware is installed.

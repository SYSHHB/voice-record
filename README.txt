SYSHHB IT RECORDER  -  meetings to minutes (installable app)
==========================================================
Files (upload ALL to GitHub):
 index.html  i18n.js  logo.png  config.js  auth.js  cloud.js  whisper-worker.js  sw.js  manifest.webmanifest
 icon-192.png  icon-512.png  icon-maskable-512.png
Guides: SETUP-MICROSOFT.txt (do this first), README.txt (this file)

ORDER OF WORK
1. GitHub Pages: new repository (e.g. recorder, Public) > upload the files > Settings > Pages >
   Deploy from a branch > main > / (root).  Address:  https://YOURNAME.github.io/recorder/
2. Follow SETUP-MICROSOFT.txt (Entra app, config.js, first sign-in, add users).
   Use the new address as the SPA redirect URI, with the slash at the end.
3. Phone (Chrome or Edge): open the address, sign in, tap "Install app" (or menu > Install app).
   Open it once while online so it can work offline.

LOOK AND CALENDAR
- Loading screen: dark green with the logo, app name, progress bar and percentage, shown when the app opens or reloads.
- Sign-in page: today's Gregorian and Hijri date, greeting, live Brunei time (BNT), English / Bahasa Melayu
  switch and the Sign in with Microsoft button.
- Every screen has the header card: app name, Yayasan name, Gregorian date, Hijri date, clock, and buttons for
  open actions (bell), language, dark mode and sign out.
- Hijri months use the Brunei names in both languages: Muharram, Safar, Rabiulawal, Rabiulakhir, Jamadilawal,
  Jamadilakhir, Rejab, Syaaban, Ramadan, Syawal, Zulkaedah, Zulhijjah.
- The Hijri date is calculated (Umm al-Qura). If the official Brunei date differs by a day after moon sighting,
  set hijriAdjust to 1 or -1 in config.js.
- Phone: bottom bar (Home, Record, Report, Ask, More) and a round + button for a new meeting.
  Computer: menu on the left, wider header card.

SMART FEATURES
- Overview (home)   greeting, counts, quick buttons, open action items from all meetings (tick them off here),
                    recent meetings.
- Assistant         ask questions in English or Malay about this meeting or all saved meetings. Answers come only
                    from your transcript and reports. Tap a time in an answer to jump to that line and hear it.
- Smart analysis    on the Report screen. One tap finds a title, the people mentioned, a summary, topics, decisions,
                    open questions and action items. Action items become a checklist with owner and deadline.
                    Changes save to OneDrive for saved meetings.
- Read and play     on the transcript card. Tap a time to hear that moment (when the recording is on the phone),
                    search inside the transcript, tap a line then a tag to mark Decision / Action / Important / Question.
- Guided steps      the row at the top shows what is done and what to do next: Record, Report, Translate, Save.
- Shortcuts         on a computer while recording: Space pauses, D A I Q add markers.
- Assistant and Smart analysis need internet and your Anthropic API key (Settings). Always check AI results
  before sending minutes out.

LANGUAGE AND DARK MODE
- EN / BM buttons switch the whole app between English and Bahasa Melayu. The name becomes
  "SYSHHB IT Perakam" in Malay. Your choice is remembered on that phone.
- The moon / sun button switches dark mode. It follows the phone setting at first, then remembers your choice
  and is shared with your other SYSHHB systems on the same address.
- On a phone the EN/BM and dark mode buttons are at the top right. On a computer they are at the bottom of the
  left menu and on the sign-in screen.
- Reports, transcripts and translations are never changed by the language switch. The report language is chosen
  separately on the Report and Translate screens.

THE SCREENS (same look as the SYSHHB IT Asset Inventory)
- Record    big microphone button, live level meter, timer, pause/stop, language switch (Malay/English),
            quick markers (Decision, Action, Important, Question), Upload tab for audio or transcript files,
            "Recordings on this device" with offline transcription.
- Report    choose the language, Generate report (summary, discussion, decisions, action table). Save, export.
- Translate From / To (11 languages), swap, Formal or Everyday style, "keep these words" list for names
            and titles, translate the transcript (side by side with the original, line by line) or the report.
            Copy, save, export as Word-ready .html or .txt.
- Saved Records, Manage Access (admins), Audit Logs (admins).

BETTER RECORDING
- Audio is saved on the phone while you record. If the phone restarts or the app closes, the unfinished
  recording is recovered under "Recordings on this device".
- Markers are time-stamped. After offline transcription the markers are merged into the transcript in time order,
  and the report puts decisions, actions and questions in the right sections.
- Live text needs internet. Untick "Live text" (or be offline) to record audio only and transcribe later.
- The screen stays on while recording. Keep the app open.

BETTER TRANSLATION
- Long transcripts are translated in parts, so nothing is cut off. You see it appear as it is written.
- Timestamps, speaker names and markers stay in place, so the original and translation line up.
- Mixed Malay and English is understood. Names and acronyms listed in "Keep these words" are never translated.
- Report, Translate and Fix need internet and your Anthropic API key (Settings).

UPDATING
Upload changed files to GitHub and change VERSION in sw.js (mvr-v8, mvr-v9 ...).

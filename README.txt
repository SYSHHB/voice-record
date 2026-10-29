MEETING VOICE TO REPORT  -  installable phone and computer app
==============================================================

FILES (keep all together, upload ALL of them):
index.html, whisper-worker.js, sw.js, manifest.webmanifest,
icon-192.png, icon-512.png, icon-maskable-512.png

STEP 1  PUT IT ON GITHUB PAGES
1. github.com > New repository > name: meeting-report > Public > Create.
2. "uploading an existing file" > drag in the files above (the files, not the folder) > Commit changes.
3. Settings > Pages > Deploy from a branch > main > / (root) > Save.
4. After 1-2 minutes open  https://YOURNAME.github.io/meeting-report/

STEP 2  INSTALL ON THE PHONE (Chrome or Edge)
1. Open the link above on the phone, while online.
2. Tap "Install app" at the top of the page.
   If you do not see it: Chrome menu (three dots) > Install app / Add to Home screen.
3. Open the app once from the home screen while online. This saves it for offline use.

STEP 3  ONE-TIME SETUP WHILE ONLINE
- Offline transcription: Step 1 > Upload file, choose any short audio, tap
  "Transcribe on this device". The speech model downloads once
  (Fast 40 MB, Balanced 80 MB, Best 250 MB). After that it works offline.
- Report / Translate / Fix: tap Settings and paste your Anthropic API key
  (console.anthropic.com). These three buttons need internet. Everything else does not.

HOW TO USE WITHOUT INTERNET
1. Open the app. Untick "Live text while recording" (or just be offline) and tap Start recording.
   Audio is recorded and saved on the phone. Keep the screen on and the app open.
2. Tap Stop. The recording appears in "Recordings on this device".
3. Tap Transcribe next to it. Text appears in step 2 with timestamps.
4. When you have internet again: Fix mixed-language transcript > Generate report > Translate > Save record.

UPLOADING
- Audio or video (.mp3 .m4a .wav .webm .mp4): kept on the device and transcribed on the device.
- Transcript files (.txt .md .srt .vtt): loaded straight into the transcript.

GOOD TO KNOW
- Live text (words appearing while you speak) uses the browser's online speech service, so it needs internet.
- On-device transcription is slower than real time on many phones. A 30 minute meeting can take
  10-40 minutes. Keep the screen on. Use Fast quality for long meetings, Best for important short ones.
  Recordings over about 45 minutes may run out of memory on a phone: transcribe them on a computer.
- Whisper handles Malay with English words well, but names and technical terms still need checking.
- Saved records and recordings live on that device. Clearing browser data deletes them.
  Download important recordings and export the report.
- The API key is stored only on that device. Use a key with a spending limit.
- iPhone: Chrome and Edge there use Apple's browser engine, so install via Share > Add to Home Screen,
  and live text may not work. On-device transcription may be slower. Android is recommended.
- To publish an update: upload the new files and change VERSION in sw.js (mvr-v3, mvr-v4...).

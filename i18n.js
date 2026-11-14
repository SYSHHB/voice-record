/* English / Bahasa Melayu for SYSHHB IT Recorder.
   Translates the screen text in place, including text the app writes later. Reports and transcripts are never touched. */
(function(){
"use strict";
var KEY = "syshhb_lang";
var D = {
/* ---- name and navigation ---- */
"SYSHHB IT Recorder":"SYSHHB IT Perakam","Meetings to minutes":"Dari mesyuarat kepada minit","Record · Transcribe · Translate":"Rakam · Transkripsikan · Terjemahkan","Meeting":"Mesyuarat","Recording":"Rakaman","Record":"Rakam","Report":"Laporan","New recording":"Rakaman baharu","Recordings":"Rakaman","Recent recordings":"Rakaman terkini","This recording":"Rakaman ini","All saved records":"Semua rekod tersimpan",
"Translate":"Terjemah","Saved Records":"Rekod Tersimpan","Saved records":"Rekod tersimpan","Records":"Rekod","More":"Lagi","Admin":"Pentadbir",
"Manage Access":"Urus Akses","Manage access":"Urus akses","Audit Logs":"Log Audit","Audit logs":"Log audit","Main":"Utama",
"Not signed in":"Belum log masuk","Offline":"Luar talian","Settings":"Tetapan","Install app":"Pasang aplikasi","Refresh":"Muat semula",
"Sign out":"Log keluar","Sign in":"Log masuk","Sign in with Microsoft":"Log masuk dengan Microsoft","Dark mode":"Mod gelap","Language":"Bahasa",
"Open menu":"Buka menu","New meeting":"Mesyuarat baharu","Search records…":"Cari rekod…","Search records":"Cari rekod","Loading…":"Memuatkan…",
"SYSHHB logo":"Logo SYSHHB","Yayasan Sultan Haji Hassanal Bolkiah logo":"Logo Yayasan Sultan Haji Hassanal Bolkiah",
"Record or upload a meeting":"Rakam atau muat naik mesyuarat","Minutes of the meeting":"Minit mesyuarat",
"Record meetings, voice notes, interviews and more. Transcribe, translate and keep every recording in one place.":"Rakam mesyuarat, nota suara, temu bual dan banyak lagi. Transkripsikan, terjemahkan dan simpan setiap rakaman di satu tempat.","Record anything":"Rakam apa sahaja","Record a meeting, voice note, interview, lecture or other audio.":"Rakam mesyuarat, nota suara, temu bual, kuliah atau audio lain.",
"Translate the transcript or the report":"Terjemah transkrip atau laporan","Meetings saved to OneDrive":"Mesyuarat disimpan ke OneDrive",
"Who can use this app":"Siapa boleh menggunakan aplikasi ini","Sign-ins and changes":"Log masuk dan perubahan",
/* ---- record ---- */
"Record live":"Rakam secara langsung","Upload file":"Muat naik fail","Language spoken in the meeting":"Bahasa yang dituturkan dalam mesyuarat","Language spoken in the recording":"Bahasa yang dituturkan dalam rakaman",
"Auto-detect (recommended for mixed languages)":"Kesan automatik (disyorkan untuk bahasa campuran)",
"Recording details and transcript":"Butiran rakaman dan transkrip","Recording type":"Jenis rakaman","Voice note / General recording":"Nota suara / Rakaman umum","Interview":"Temu bual","Lecture / Class":"Kuliah / Kelas","Other":"Lain-lain","Recording title":"Tajuk rakaman","e.g. Project ideas, interview, lecture notes":"cth. Idea projek, temu bual, nota kuliah","People or notes (optional)":"Orang atau nota (pilihan)","Names, topic, or other notes":"Nama, topik atau nota lain","Recording summary":"Ringkasan rakaman",
"Current speaker (optional)":"Penutur semasa (pilihan)","e.g. Pengerusi / Chair":"cth. Pengerusi","Tap the microphone to start":"Ketik mikrofon untuk mula",
"Pause":"Jeda","Resume":"Sambung","Stop":"Henti","Mark the minutes as you go:":"Tanda minit sambil mesyuarat berjalan:",
"✔ Decision":"✔ Keputusan","➜ Action":"➜ Tindakan","★ Important":"★ Penting","? Question":"? Soalan",
"Switch the listening language during the meeting":"Tukar bahasa pendengaran semasa mesyuarat",
"Mixed mode: the browser can only listen in one language at a time, so words from the other language may be spelled wrongly. Tap “Hearing” to switch when a speaker changes language for a while. Afterwards press “Fix mixed-language transcript” on the transcript card. Lines the browser was unsure about start with ~.":
"Mod campuran: pelayar hanya boleh mendengar dalam satu bahasa pada satu masa, jadi perkataan daripada bahasa lain mungkin dieja salah. Ketik “Mendengar” untuk bertukar apabila penutur menukar bahasa seketika. Selepas itu tekan “Betulkan transkrip bahasa campuran” pada kad transkrip. Baris yang pelayar tidak pasti bermula dengan ~.",
"Live text while recording (needs internet). Untick it, or go offline, to record audio only and transcribe later.":"Teks langsung semasa merakam (perlukan internet). Nyahtanda, atau pergi luar talian, untuk merakam audio sahaja dan transkrip kemudian.",
"Download the audio (.webm)":"Muat turun audio (.webm)","Choose a file":"Pilih fail","or drop it here":"atau lepaskan di sini",
"Transcript: .txt .md .srt .vtt · Recording: .mp3 .m4a .wav .webm .mp4":"Transkrip: .txt .md .srt .vtt · Rakaman: .mp3 .m4a .wav .webm .mp4",
"Transcribe on this device":"Transkrip pada peranti ini",
"Works without internet once the speech model has been downloaded one time. It uses the language above and the quality chosen under “Recordings on this device”.":"Berfungsi tanpa internet selepas model pertuturan dimuat turun sekali. Ia menggunakan bahasa di atas dan kualiti yang dipilih di bawah “Rakaman pada peranti ini”.",
"Other methods (use the browser’s online speech service)":"Kaedah lain (guna perkhidmatan pertuturan dalam talian pelayar)",
"Transcribe (new Chrome only)":"Transkrip (Chrome terkini sahaja)","Play and transcribe":"Main dan transkrip",
"“Transcribe” reads the file without sound but only works in newer Chrome and Edge. “Play and transcribe” plays the file out loud while the microphone listens.":"“Transkrip” membaca fail tanpa bunyi tetapi hanya berfungsi pada Chrome dan Edge terkini. “Main dan transkrip” memainkan fail dengan kuat sementara mikrofon mendengar.",
"Recordings on this device":"Rakaman pada peranti ini","Offline transcription quality":"Kualiti transkripsi luar talian",
"Fast (about 40 MB download)":"Pantas (muat turun kira-kira 40 MB)","Balanced (about 80 MB download)":"Seimbang (muat turun kira-kira 80 MB)",
"Best (about 250 MB download, slower)":"Terbaik (muat turun kira-kira 250 MB, lebih perlahan)",
"Meeting details and transcript":"Butiran mesyuarat dan transkrip","Meeting title":"Tajuk mesyuarat","Date":"Tarikh","Attendees":"Peserta",
"Names separated by commas":"Nama dipisahkan dengan koma","e.g. Mesyuarat Panel IT Bil. 3/2026":"cth. Mesyuarat Panel IT Bil. 3/2026",
"Transcript (you can edit it freely)":"Transkrip (boleh disunting dengan bebas)",
"The transcript appears here while you record, or after you upload a file. You can also paste text.":"Transkrip dipaparkan di sini semasa anda merakam, atau selepas anda memuat naik fail. Anda juga boleh menampal teks.",
"Copy":"Salin","Fix mixed-language transcript":"Betulkan transkrip bahasa campuran","Undo fix":"Buat asal pembetulan","Clear all":"Kosongkan semua",
/* ---- report / translate ---- */
"Meeting report":"Laporan mesyuarat","Write the report in":"Tulis laporan dalam","Generate report":"Jana laporan","Cancel":"Batal",
"The meeting report will appear here. Record or paste a transcript first, then press Generate report.":"Laporan mesyuarat akan dipaparkan di sini. Rakam atau tampal transkrip dahulu, kemudian tekan Jana laporan.",
"Save record":"Simpan rekod","Translate this report":"Terjemah laporan ini","Export:":"Eksport:","Word-ready (.html)":"Sedia untuk Word (.html)",
"Opens in Word; use Save as PDF there":"Dibuka dalam Word; guna Simpan sebagai PDF di sana",
"From":"Daripada","To":"Kepada","Style":"Gaya","Formal (official)":"Rasmi","Everyday, simple":"Harian, mudah","Swap languages":"Tukar bahasa",
"Keep these words as they are (names, titles, acronyms)":"Kekalkan perkataan ini seperti asal (nama, gelaran, akronim)",
"e.g. SYSHHB, Yayasan, Pengerusi, YB":"cth. SYSHHB, Yayasan, Pengerusi, YB","Translate transcript":"Terjemah transkrip","Translate report":"Terjemah laporan",
"Side by side":"Bersebelahan","Translation only":"Terjemahan sahaja","Copy translation":"Salin terjemahan","Detect automatically":"Kesan secara automatik",
"The translation will appear here. Side by side shows each original line next to its translation.":"Terjemahan akan dipaparkan di sini. Paparan bersebelahan menunjukkan setiap baris asal di sebelah terjemahannya.",
/* ---- users / audit / lists ---- */
"People who can open this app. They must already have a Microsoft work account.":"Orang yang boleh membuka aplikasi ini. Mereka mesti sudah mempunyai akaun kerja Microsoft.",
"manages users and reads the audit log.":"mengurus pengguna dan membaca log audit.","records, edits and saves meetings.":"merakam, menyunting dan menyimpan mesyuarat.",
"can only read and export.":"hanya boleh membaca dan mengeksport.","Add user":"Tambah pengguna","Connection check":"Semakan sambungan",
"Work email":"E-mel kerja","Display name":"Nama paparan","Full name":"Nama penuh","Role":"Peranan","Editor":"Penyunting","Viewer":"Pelihat",
"Also share the OneDrive data folder with this person (they need this to open the app)":"Kongsi juga folder data OneDrive dengan orang ini (mereka memerlukannya untuk membuka aplikasi)",
"User":"Pengguna","All users":"Semua pengguna","All actions":"Semua tindakan","Action":"Tindakan","Load":"Muat","Export CSV":"Eksport CSV",
"Search in the log":"Cari dalam log","Time":"Masa","Item":"Item","Detail":"Butiran","Active":"Aktif","Disabled":"Dilumpuhkan","Remove":"Buang","Sure?":"Pasti?",
"Delete":"Padam","Open":"Buka","Download":"Muat turun","Play":"Main","Save to OneDrive":"Simpan ke OneDrive","Waiting to upload":"Menunggu muat naik",
"Translated":"Diterjemah","Original":"Asal","Translation":"Terjemahan","Untitled":"Tanpa tajuk",
"Times are shown in this device’s time zone. The log is kept in the OneDrive data folder (audit folder). For a tamper-proof record, also use the Microsoft Purview audit log, which records OneDrive activity independently.":"Masa dipaparkan mengikut zon waktu peranti ini. Log disimpan dalam folder data OneDrive (folder audit). Untuk rekod yang tidak boleh diubah, gunakan juga log audit Microsoft Purview, yang merekod aktiviti OneDrive secara bebas.",
"No events for these filters.":"Tiada peristiwa untuk tapis ini.","No recordings yet. Record audio or upload a file and it will appear here.":"Belum ada rakaman. Rakam audio atau muat naik fail dan ia akan muncul di sini.",
"No users yet.":"Belum ada pengguna.","No record matches your search.":"Tiada rekod sepadan dengan carian anda.","No saved records yet.":"Belum ada rekod tersimpan.",
"Sign in":"Log masuk","Sign-in denied":"Log masuk dinafikan","Sign out":"Log keluar","User added":"Pengguna ditambah","User changed":"Pengguna diubah","User removed":"Pengguna dibuang",
"Folder shared":"Folder dikongsi","Folder access removed":"Akses folder dibuang","Record created":"Rekod dicipta","Record edited":"Rekod disunting","Record deleted":"Rekod dipadam",
"Record opened":"Rekod dibuka","Record exported":"Rekod dieksport","Audio uploaded":"Audio dimuat naik",
/* ---- smart features ---- */
"Overview":"Gambaran Keseluruhan","Assistant":"Pembantu","Home":"Utama","Ask":"Tanya","Your meetings at a glance":"Ringkasan mesyuarat anda",
"Ask questions about your meetings":"Tanya soalan tentang mesyuarat anda","Welcome":"Selamat datang",
"Record a meeting, and the app writes the minutes.":"Rakam mesyuarat, dan aplikasi menulis minitnya.","Upload a file":"Muat naik fail","Ask the assistant":"Tanya pembantu",
"Meetings":"Mesyuarat","This month":"Bulan ini","Open actions":"Tindakan belum selesai","Open action items":"Item tindakan belum selesai","Everyone":"Semua orang","Recent meetings":"Mesyuarat terkini",
"No open action items. Analyse a meeting on the Report screen to find them.":"Tiada item tindakan belum selesai. Analisis mesyuarat pada skrin Laporan untuk mencarinya.",
"No meetings yet. Tap Start recording to begin.":"Belum ada mesyuarat. Ketik Mula merakam untuk bermula.",
"This meeting":"Mesyuarat ini","All saved meetings":"Semua mesyuarat tersimpan","Clear chat":"Kosongkan sembang","Ask about the meeting…":"Tanya tentang mesyuarat…",
"Summarise this in 5 points":"Ringkaskan dalam 5 isi","What was decided?":"Apa yang diputuskan?","List the action items and who is responsible":"Senaraikan item tindakan dan siapa yang bertanggungjawab",
"What is still unresolved?":"Apa yang masih belum selesai?","Draft a follow-up email to the attendees":"Draf e-mel susulan kepada peserta",
"Ask anything about the meeting. Answers come only from your transcript and report, with the time shown so you can check.":"Tanya apa sahaja tentang mesyuarat. Jawapan datang hanya daripada transkrip dan laporan anda, dengan masa dipaparkan supaya anda boleh menyemak.",
"There is no transcript yet. Record or open a meeting first.":"Belum ada transkrip. Rakam atau buka mesyuarat dahulu.","There are no saved meetings yet.":"Belum ada mesyuarat tersimpan.",
"Smart analysis":"Analisis pintar","Analyse meeting":"Analisis mesyuarat","Analysing the meeting…":"Menganalisis mesyuarat…","Analysis done. Check the action items below.":"Analisis selesai. Semak item tindakan di bawah.",
"The analysis came back in a form the app could not read. Please try again.":"Analisis dikembalikan dalam bentuk yang tidak dapat dibaca. Sila cuba lagi.",
"Find and track the decisions and action items in this meeting.":"Cari dan jejak keputusan dan item tindakan dalam mesyuarat ini.",
"Suggested title:":"Tajuk dicadangkan:","People mentioned:":"Orang yang disebut:","Use":"Guna","Summary":"Ringkasan","Topics":"Topik","Decisions":"Keputusan","Open questions":"Soalan terbuka",
"Action items":"Item tindakan","Add action":"Tambah tindakan","What needs to be done":"Apa yang perlu dibuat","Who":"Siapa","Remove this action":"Buang tindakan ini",
"No action items yet. Analyse the meeting or add one.":"Belum ada item tindakan. Analisis mesyuarat atau tambah satu.",
"Edit":"Sunting","Read and play":"Baca dan main","Find in transcript…":"Cari dalam transkrip…","Clear tag":"Buang tanda",
"Tap a time to hear that moment (if the recording is on this device). Tap a line, then a tag, to mark it.":"Ketik masa untuk mendengar saat itu (jika rakaman ada pada peranti ini). Ketik baris, kemudian tanda, untuk menandakannya.",
"Tap a line first.":"Ketik baris dahulu.","The recording for this meeting is not on this device.":"Rakaman untuk mesyuarat ini tiada pada peranti ini.","Nothing found.":"Tiada dijumpai.",
"Decision":"Keputusan","Important":"Penting","Question":"Soalan","Keyboard: Space pauses, D A I Q add markers.":"Papan kekunci: Space menjeda, D A I Q menambah tanda.",
"Action item updated":"Item tindakan dikemas kini","Assistant question":"Soalan kepada pembantu","Meeting analysed":"Mesyuarat dianalisis",
"Gregorian":"Masihi","Hijri":"Hijrah",
"Record meetings, get the transcript and translation, and keep every set of minutes in one place.":"Rakam mesyuarat, dapatkan transkrip dan terjemahan, dan simpan setiap minit di satu tempat.",
"Sign in to continue":"Log masuk untuk meneruskan","Record meetings":"Rakam mesyuarat","Transcribe & translate":"Transkrip & terjemah","Minutes & reports":"Minit & laporan",
"Secure sign-in with your school Microsoft account":"Log masuk selamat dengan akaun Microsoft sekolah anda",
/* ---- settings dialog ---- */
"Anthropic API key":"Kunci API Anthropic","Model":"Model","Save":"Simpan","Close":"Tutup","Remove key":"Buang kunci",
"The key is needed only for":"Kunci ini diperlukan hanya untuk","and":"dan",
". Recording, transcribing, saving and exporting do not use it. Get a key at console.anthropic.com.":". Merakam, mentranskrip, menyimpan dan mengeksport tidak menggunakannya. Dapatkan kunci di console.anthropic.com.",
"The key is stored only on this device and is sent only to Anthropic. Anyone who can use this device can read it, so use a key with a spending limit.":"Kunci ini disimpan pada peranti ini sahaja dan hanya dihantar kepada Anthropic. Sesiapa yang boleh menggunakan peranti ini boleh membacanya, jadi gunakan kunci yang mempunyai had perbelanjaan.",
/* ---- status messages ---- */
"Connecting to OneDrive…":"Menyambung ke OneDrive…","Syncing with OneDrive…":"Menyegerak dengan OneDrive…","Offline: saved on this device":"Luar talian: disimpan pada peranti ini",
"Paused. Tap Resume to continue":"Dijeda. Ketik Sambung untuk meneruskan","Recording with live text…":"Merakam dengan teks langsung…","Recording audio only…":"Merakam audio sahaja…",
"Recording audio only. It is saved on this device. When you stop, transcribe it from the list below, online or offline.":"Merakam audio sahaja. Ia disimpan pada peranti ini. Apabila anda berhenti, transkrip daripada senarai di bawah, dalam talian atau luar talian.",
"Recording saved on this device. Press Transcribe next to it in the list below when you are ready.":"Rakaman disimpan pada peranti ini. Tekan Transkrip di sebelahnya dalam senarai di bawah apabila anda sedia.",
"Recording stopped. Check the transcript below, then generate the report.":"Rakaman dihentikan. Semak transkrip di bawah, kemudian jana laporan.",
"Live speech recognition is not supported in this browser. Use Chrome or Edge for live text. You can still record audio, upload files and paste a transcript.":"Pengecaman pertuturan langsung tidak disokong dalam pelayar ini. Guna Chrome atau Edge untuk teks langsung. Anda masih boleh merakam audio, memuat naik fail dan menampal transkrip.",
"This browser has no speech recognition. Use Chrome or Edge, or paste or upload a transcript instead.":"Pelayar ini tiada pengecaman pertuturan. Guna Chrome atau Edge, atau tampal atau muat naik transkrip sebagai ganti.",
"This browser cannot record audio. Use Chrome or Edge.":"Pelayar ini tidak boleh merakam audio. Guna Chrome atau Edge.",
"The microphone is blocked. Allow microphone access for this app in the browser settings.":"Mikrofon disekat. Benarkan akses mikrofon untuk aplikasi ini dalam tetapan pelayar.",
"Microphone access is blocked here. Allow the microphone for this page in your browser, or open the page in Chrome or Edge. You can also paste text or upload a transcript file.":"Akses mikrofon disekat di sini. Benarkan mikrofon untuk halaman ini dalam pelayar anda, atau buka halaman dalam Chrome atau Edge. Anda juga boleh menampal teks atau memuat naik fail transkrip.",
"Speech recognition needs an internet connection. Check your connection and try again.":"Pengecaman pertuturan memerlukan sambungan internet. Semak sambungan anda dan cuba lagi.",
"This browser does not support the selected language for speech recognition.":"Pelayar ini tidak menyokong bahasa yang dipilih untuk pengecaman pertuturan.",
"Choose an audio file first.":"Pilih fail audio dahulu.","Could not read that file.":"Tidak dapat membaca fail itu.",
"That file type is not supported. Use .txt, .md, .srt, .vtt, or an audio or video recording.":"Jenis fail itu tidak disokong. Guna .txt, .md, .srt, .vtt, atau rakaman audio atau video.",
"Playing the recording and transcribing. Keep the volume up and the room quiet.":"Memainkan rakaman dan mentranskrip. Kekalkan bunyi kuat dan bilik senyap.",
"Finished. Please read through the transcript and correct any mistakes.":"Selesai. Sila baca transkrip dan betulkan sebarang kesilapan.",
"Nothing was recognised. This browser may not support direct file transcription. Try “Play and transcribe”.":"Tiada apa yang dikenali. Pelayar ini mungkin tidak menyokong transkripsi fail secara terus. Cuba “Main dan transkrip”.",
"The browser blocked playback. Press play on the audio bar first.":"Pelayar menyekat main balik. Tekan main pada bar audio dahulu.",
"The browser blocked the file from starting. Press play on the audio bar once, pause it, then try again.":"Pelayar menyekat fail daripada bermula. Tekan main pada bar audio sekali, jeda, kemudian cuba lagi.",
"Transcribing the file. There is no sound and no need to listen. Keep this page open until it finishes.":"Mentranskrip fail. Tiada bunyi dan tidak perlu mendengar. Biarkan halaman ini terbuka sehingga selesai.",
"This browser can’t transcribe a file by itself. Use “Play and transcribe”, or upload a transcript file (.txt or .srt).":"Pelayar ini tidak dapat mentranskrip fail dengan sendiri. Guna “Main dan transkrip”, atau muat naik fail transkrip (.txt atau .srt).",
"Stopped.":"Dihentikan.","Cancelled":"Dibatalkan","Cancelled.":"Dibatalkan.","Preparing the audio…":"Menyediakan audio…","No speech was found in this audio.":"Tiada pertuturan ditemui dalam audio ini.",
"The speech engine could not start. The first run needs internet to download it.":"Enjin pertuturan tidak dapat dimulakan. Larian pertama memerlukan internet untuk memuat turunnya.",
"This device ran out of memory or could not read the audio. Try the Fast quality, or split the recording into shorter parts.":"Peranti ini kehabisan memori atau tidak dapat membaca audio. Cuba kualiti Pantas, atau pecahkan rakaman kepada bahagian yang lebih pendek.",
"Could not keep the audio on this device (storage may be full). Use “Download the audio” to keep it.":"Tidak dapat menyimpan audio pada peranti ini (storan mungkin penuh). Guna “Muat turun audio” untuk menyimpannya.",
"This device is out of storage space.":"Peranti ini kehabisan ruang storan.","Done. Review it, then press Save record.":"Selesai. Semak, kemudian tekan Simpan rekod.",
"Done. Please read through it. If anything looks wrong, press Undo fix.":"Selesai. Sila baca. Jika ada yang tidak betul, tekan Buat asal pembetulan.",
"Restored the transcript from before the fix.":"Transkrip sebelum pembetulan telah dipulihkan.","The transcript is empty.":"Transkrip kosong.",
"The transcript is empty. Record, upload or paste something first.":"Transkrip kosong. Rakam, muat naik atau tampal sesuatu dahulu.",
"There is no report yet. Generate the report first.":"Belum ada laporan. Jana laporan dahulu.","There is nothing to save yet.":"Belum ada apa-apa untuk disimpan.",
"Nothing to export yet.":"Belum ada apa-apa untuk dieksport.","Nothing to export.":"Tiada apa-apa untuk dieksport.","Nothing to copy yet.":"Belum ada apa-apa untuk disalin.",
"Translate something first.":"Terjemah sesuatu dahulu.","Copied.":"Disalin.","Could not copy. Select the text and copy it by hand.":"Tidak dapat menyalin. Pilih teks dan salin secara manual.",
"Claude is writing the report. This can take up to a minute for a long meeting…":"Claude sedang menulis laporan. Ini mungkin mengambil sehingga seminit untuk mesyuarat yang panjang…",
"Translating the report…":"Menterjemah laporan…",
"Done, but the answer was cut short because the transcript is very long. Split the transcript into parts for a complete result.":"Selesai, tetapi jawapan terpotong kerana transkrip sangat panjang. Pecahkan transkrip kepada beberapa bahagian untuk hasil yang lengkap.",
"Done, but some lines were merged or split, so the original and translation do not line up. Only the translation is shown.":"Selesai, tetapi sesetengah baris digabung atau dipecahkan, jadi asal dan terjemahan tidak sejajar. Hanya terjemahan dipaparkan.",
"AI is not available. Open Settings and add your API key.":"AI tidak tersedia. Buka Tetapan dan tambah kunci API anda.",
"Permission to use Claude was declined.":"Kebenaran untuk menggunakan Claude ditolak.","Too many requests. Wait a moment and try again.":"Terlalu banyak permintaan. Tunggu sebentar dan cuba lagi.",
"Too many requests. Wait a moment and try again. Nothing was changed.":"Terlalu banyak permintaan. Tunggu sebentar dan cuba lagi. Tiada apa yang diubah.",
" Nothing was changed.":" Tiada apa yang diubah.","Stopped. Nothing was changed.":"Dihentikan. Tiada apa yang diubah.","A part was too long to finish.":"Satu bahagian terlalu panjang untuk disiapkan.",
"The report is too long to translate in one go.":"Laporan terlalu panjang untuk diterjemah sekali gus.",
"Your role is read-only.":"Peranan anda hanya untuk dibaca.","Saved.":"Disimpan.","Saved. Uploading to OneDrive…":"Disimpan. Memuat naik ke OneDrive…",
"Saved on this device. It will upload to OneDrive when you are online.":"Disimpan pada peranti ini. Ia akan dimuat naik ke OneDrive apabila anda dalam talian.",
"You are offline. Try again when you have internet.":"Anda di luar talian. Cuba lagi apabila ada internet.",
"This recording is over 250 MB, which is too large to upload from the app.":"Rakaman ini melebihi 250 MB, terlalu besar untuk dimuat naik daripada aplikasi.",
"Some records are not on OneDrive yet. Tap again to sign out":"Sesetengah rekod belum berada di OneDrive. Ketik sekali lagi untuk log keluar",
"Tap again to clear everything":"Ketik sekali lagi untuk mengosongkan semuanya",
"You are offline. Report, translation and fix need internet. Recording, transcribing and saving still work.":"Anda di luar talian. Laporan, terjemahan dan pembetulan memerlukan internet. Merakam, mentranskrip dan menyimpan masih berfungsi.",
"Add your API key in Settings first. Recording and transcribing work without it.":"Tambah kunci API anda dalam Tetapan dahulu. Merakam dan mentranskrip berfungsi tanpanya.",
"To use Generate report, Translate and Fix, add your API key in Settings. Recording and transcribing work without it.":"Untuk menggunakan Jana laporan, Terjemah dan Betulkan, tambah kunci API anda dalam Tetapan. Merakam dan mentranskrip berfungsi tanpanya.",
"Key removed from this device.":"Kunci dibuang daripada peranti ini.","This browser would not store the settings.":"Pelayar ini tidak menyimpan tetapan.",
"The API key was rejected. Check it in Settings.":"Kunci API ditolak. Semaknya dalam Tetapan.","No internet connection, or the request was blocked.":"Tiada sambungan internet, atau permintaan disekat.",
"The connection was interrupted.":"Sambungan terganggu.","Downloads are not available in this browser.":"Muat turun tidak tersedia dalam pelayar ini.",
/* ---- users / admin messages ---- */
"Enter a valid work email address.":"Masukkan alamat e-mel kerja yang sah.","That person is already on the list.":"Orang itu sudah ada dalam senarai.",
"You cannot remove your own admin access.":"Anda tidak boleh membuang akses pentadbir anda sendiri.","You cannot remove yourself.":"Anda tidak boleh membuang diri sendiri.",
"There must be at least one active admin.":"Mesti ada sekurang-kurangnya seorang pentadbir aktif.","User not found.":"Pengguna tidak ditemui.",
"Could not save because someone else changed the user list at the same time. Try again.":"Tidak dapat menyimpan kerana orang lain mengubah senarai pengguna pada masa yang sama. Cuba lagi.",
" The OneDrive folder was shared with them.":" Folder OneDrive telah dikongsi dengan mereka.",
" Their OneDrive folder access was removed too.":" Akses folder OneDrive mereka turut dibuang.",
" Remember to remove their access to the OneDrive folder manually.":" Ingat untuk membuang akses mereka ke folder OneDrive secara manual.",
"Checking…":"Menyemak…","offline":"luar talian","unfinished recording, recovered":"rakaman tidak selesai, dipulihkan","Start recording":"Mula merakam",
/* ---- sign-in screen ---- */
"Sign in with your Microsoft work account to continue.":"Log masuk dengan akaun kerja Microsoft anda untuk meneruskan.","Checking your access.":"Menyemak akses anda.","Signing you in…":"Sedang log masuk…",
"Please sign in":"Sila log masuk","Please sign in again.":"Sila log masuk semula.","Your sign-in has expired.":"Log masuk anda telah tamat tempoh.","You are offline":"Anda di luar talian","You are offline.":"Anda di luar talian.",
"Connect to the internet to sign in. Offline use is allowed only for people who signed in recently on this device.":"Sambung ke internet untuk log masuk. Penggunaan luar talian hanya dibenarkan untuk orang yang log masuk baru-baru ini pada peranti ini.",
"Access denied":"Akses dinafikan","Access removed":"Akses dibuang","Your access to this app has been disabled. Contact the IT administrator.":"Akses anda ke aplikasi ini telah dilumpuhkan. Hubungi pentadbir IT.",
"Your access to this app was removed. Contact the IT administrator.":"Akses anda ke aplikasi ini telah dibuang. Hubungi pentadbir IT.",
"Setup needed":"Persediaan diperlukan","Open config.js in your GitHub repository and fill in tenantId and clientId (see SETUP-MICROSOFT.txt), then reload.":"Buka config.js dalam repositori GitHub anda dan isi tenantId dan clientId (lihat SETUP-MICROSOFT.txt), kemudian muat semula.",
"Not set up yet":"Belum disediakan","First-time setup":"Persediaan kali pertama","Could not open the data folder":"Tidak dapat membuka folder data","Sign-in did not finish":"Log masuk tidak selesai","Sign-in failed":"Log masuk gagal",
"The user list has not been created. Ask the IT administrator to sign in first.":"Senarai pengguna belum dicipta. Minta pentadbir IT log masuk dahulu.",
"The OneDrive data folder is not set up yet.":"Folder data OneDrive belum disediakan.","Please try again.":"Sila cuba lagi.",
"The sign-in response did not match. Please try again.":"Respons log masuk tidak sepadan. Sila cuba lagi.","Sign-in check failed. Please try again.":"Semakan log masuk gagal. Sila cuba lagi.",
"This account belongs to a different organisation.":"Akaun ini milik organisasi lain."
};
var R = [
 [/^Good (morning|afternoon|evening), (.*)$/, function(m){ return ({"morning":"Selamat pagi","afternoon":"Selamat petang","evening":"Selamat malam"}[m[1]]) + ", " + m[2]; }],
 [/^Good (morning|afternoon|evening), $/, function(m){ return ({"morning":"Selamat pagi","afternoon":"Selamat petang","evening":"Selamat malam"}[m[1]]); }],
 [/^(✓ |\d\. )(.+)$/, function(m){ return m[1] + core(m[2]); }],
 [/^due (\d{4}-\d{2}-\d{2})$/, "sebelum $1"],
 [/^overdue (\d{4}-\d{2}-\d{2})$/, "lewat $1"],
 [/^Use your school email \(@(.*)\) to record meetings and write the minutes\.$/, "Guna e-mel sekolah anda (@$1) untuk merakam mesyuarat dan menulis minit."],
 [/^([\d,]+) words$/, function(m){ return m[1] + " perkataan"; }],
 [/^Hearing: (.+?) ⇄$/, function(m){ return "Mendengar: " + ({"Malay":"Melayu","English":"Inggeris"}[m[1]] || m[1]) + " ⇄"; }],
 [/^Opened “(.*)”\.$/, "Dibuka “$1”."],
 [/^Marked (.+) at (.+)\.$/, function(m){ return "Ditandakan " + ({"decision":"keputusan","action":"tindakan","important":"penting","question":"soalan"}[m[1]] || m[1]) + " pada " + m[2] + "."; }],
 [/^Recording loaded: (.*)\. It was also added to Recordings on this device\. Press “Transcribe on this device”\.$/, "Rakaman dimuatkan: $1. Ia turut ditambah ke Rakaman pada peranti ini. Tekan “Transkrip pada peranti ini”."],
 [/^Loaded (.*) into the transcript \(([\d,]+) words\)\.$/, "$1 dimuatkan ke dalam transkrip ($2 perkataan)."],
 [/^Saved ([\w.\-]+\.[A-Za-z0-9]+)\.$/, "Disimpan $1."],
 [/^Could not save the file: (.*)$/, "Tidak dapat menyimpan fail: $1"],
 [/^Transcribing (.+) of audio\. This can take a few minutes on a phone\. Keep this screen open…$/, "Mentranskrip $1 audio. Ini mungkin mengambil beberapa minit pada telefon. Biarkan skrin ini terbuka…"],
 [/^Downloading the speech model \(one time only\): (\d+)%$/, "Memuat turun model pertuturan (sekali sahaja): $1%"],
 [/^Done\. ([\d,]+) words were added to the transcript\. Please read through it\. For mixed Malay and English, press “Fix mixed-language transcript”\.$/, "Selesai. $1 perkataan telah ditambah ke dalam transkrip. Sila baca. Untuk Melayu dan Inggeris bercampur, tekan “Betulkan transkrip bahasa campuran”."],
 [/^Fixing part (\d+) of (\d+)…$/, "Membetulkan bahagian $1 daripada $2…"],
 [/^Translating part (\d+) of (\d+)…$/, "Menterjemah bahagian $1 daripada $2…"],
 [/^Loading (\d+) of (\d+) days…$/, "Memuatkan $1 daripada $2 hari…"],
 [/^Showing the newest 1,000 of (.*) events\. Narrow the dates or use Export CSV\.$/, "Memaparkan 1,000 terbaharu daripada $1 peristiwa. Sempitkan tarikh atau guna Eksport CSV."],
 [/^Synced with OneDrive (\d\d:\d\d)$/, "Disegerakkan dengan OneDrive $1"],
 [/^Not synced: (.*)$/, "Tidak disegerakkan: $1"],
 [/^Something went wrong: (.*)$/, "Sesuatu tidak kena: $1"],
 [/^Uploading “(.*)” to OneDrive…$/, "Memuat naik “$1” ke OneDrive…"],
 [/^Saved to OneDrive as (.*)\.$/, "Disimpan ke OneDrive sebagai $1."],
 [/^Could not upload: (.*)$/, "Tidak dapat memuat naik: $1"],
 [/^Could not transcribe: (.*)$/, "Tidak dapat mentranskrip: $1"],
 [/^Could not fix the transcript: (.*)$/, "Tidak dapat membetulkan transkrip: $1"],
 [/^Could not load users: (.*)$/, "Tidak dapat memuatkan pengguna: $1"],
 [/^Could not load the audit log: (.*)$/, "Tidak dapat memuatkan log audit: $1"],
 [/^Could not run the check: (.*)$/, "Tidak dapat menjalankan semakan: $1"],
 [/^Someone else changed “(.*)” at the same time\. Your version was kept as a separate copy\.$/, "Orang lain mengubah “$1” pada masa yang sama. Versi anda disimpan sebagai salinan berasingan."],
 [/^The OneDrive folder “(.*)” is ready\. Copy these two lines into config\.js on GitHub \(replace the empty driveId and folderId\), commit, then reload this page\.$/, "Folder OneDrive “$1” sudah sedia. Salin dua baris ini ke config.js di GitHub (gantikan driveId dan folderId yang kosong), commit, kemudian muat semula halaman ini."],
 [/^The OneDrive data folder has not been connected\. Ask the IT administrator \((.*)\) to open the app and finish setup\.$/, "Folder data OneDrive belum disambungkan. Minta pentadbir IT ($1) membuka aplikasi dan menyiapkan persediaan."],
 [/^Your account \((.*)\) is not on the user list\. Ask the IT administrator to add you\.$/, "Akaun anda ($1) tiada dalam senarai pengguna. Minta pentadbir IT menambah anda."],
 [/^You do not have access to the OneDrive data folder\. Ask the IT administrator to share it with you\. \((.*)\)$/, "Anda tiada akses ke folder data OneDrive. Minta pentadbir IT mengongsinya dengan anda. ($1)"],
 [/^Only @(.*) addresses can be added\.$/, "Hanya alamat @$1 boleh ditambah."],
 [/^Added (\S+) as (\w+)\.(.*)$/, function(m){ return "Menambah " + m[1] + " sebagai " + tx(m[2]) + "." + (m[3] ? " " + tx(m[3].trim()) : ""); }],
 [/^Removed (\S+)\.(.*)$/, function(m){ return "Membuang " + m[1] + "." + (m[2] ? " " + tx(m[2].trim()) : ""); }],
 [/^Updated (\S+)\.$/, "Mengemas kini $1."],
 [/^Unfinished recording (.*)$/, "Rakaman tidak selesai $1"],
 [/^Untitled meeting (.*)$/, "Mesyuarat tanpa tajuk $1"],
 [/^(.*) \(you\)$/, "$1 (anda)"],
 [/^(.*) \(conflict copy\)$/, "$1 (salinan konflik)"]
];
function norm(s){ return s.replace(/\s+/g, " ").trim(); }
function core(c){
  if(Object.prototype.hasOwnProperty.call(D, c)) return D[c];
  if(Object.prototype.hasOwnProperty.call(D, " " + c)) return D[" " + c].trim();
  for(var i = 0; i < R.length; i++){ var m = c.match(R[i][0]); if(m) return typeof R[i][1] === "function" ? R[i][1](m) : c.replace(R[i][0], R[i][1]); }
  if(c.indexOf(" · ") > -1){
    var parts = c.split(" · "), ch = false, out = parts.map(function(p){ var t = core(p); if(t !== p) ch = true; return t; });
    if(ch) return out.join(" · ");
  }
  if(c === ", " || c.length < 2) return c;
  return c;
}
function tx(s){
  if(!s) return s;
  var m = s.match(/^(\s*)([\s\S]*?)(\s*)$/), c = norm(m[2]);
  if(!c) return s;
  var o = core(c);
  return o === c ? s : m[1] + o + m[3];
}
var api = {tx: tx, lang: "en"};
window.MVR_LANG = api;
if(typeof document === "undefined" || !document.createTreeWalker) return;

var lang = "en", ATTRS = ["placeholder", "title", "aria-label", "alt", "data-empty"];
function skip(n){
  var p = n.parentNode; if(!p || p.nodeType !== 1) return true;
  var t = p.nodeName;
  if(t === "SCRIPT" || t === "STYLE" || t === "TEXTAREA" || t === "PRE" || t === "TITLE") return true;
  return !!(p.closest && p.closest("[data-noi18n],#outReport,#outTrans"));
}
function proc(n){
  if(n.nodeType !== 3 || skip(n)) return;
  var cur = n.nodeValue;
  if(n.__en === undefined || (cur !== n.__en && cur !== n.__ms)) n.__en = cur;
  var target = lang === "ms" ? tx(n.__en) : n.__en;
  n.__ms = target;
  if(target !== cur) n.nodeValue = target;
}
function walk(root){
  if(root.nodeType === 3){ proc(root); return; }
  if(root.nodeType !== 1) return;
  var w = document.createTreeWalker(root, 4, null), n;
  while((n = w.nextNode())) proc(n);
  attrs(root);
}
function attrs(root){
  var els = root.querySelectorAll ? Array.prototype.slice.call(root.querySelectorAll("[placeholder],[title],[aria-label],[alt],[data-empty]")) : [];
  if(root.getAttribute) els.unshift(root);
  els.forEach(function(el){
    if(el.closest && el.closest("[data-noi18n]")) return;
    el.__a = el.__a || {};
    ATTRS.forEach(function(a){
      if(!el.hasAttribute || !el.hasAttribute(a)) return;
      var cur = el.getAttribute(a);
      if(el.__a[a] === undefined || (cur !== el.__a[a].en && cur !== el.__a[a].ms)) el.__a[a] = {en: cur, ms: cur};
      var t = lang === "ms" ? tx(el.__a[a].en) : el.__a[a].en;
      el.__a[a].ms = t;
      if(t !== cur) el.setAttribute(a, t);
    });
  });
}
function setLang(l){
  lang = l === "ms" ? "ms" : "en"; api.lang = lang;
  try{ localStorage.setItem(KEY, lang); }catch(e){}
  document.documentElement.lang = lang;
  walk(document.body);
  document.title = lang === "ms" ? tx("SYSHHB IT Recorder") : "SYSHHB IT Recorder";
  Array.prototype.forEach.call(document.querySelectorAll("[data-lang]"), function(b){ b.classList.toggle("on", b.dataset.lang === lang); });
  Array.prototype.forEach.call(document.querySelectorAll("[data-lang-toggle]"), function(b){ b.textContent = lang === "ms" ? "EN" : "BM"; });
  try{ window.dispatchEvent(new Event("syshhb-lang")); }catch(e){}
  try{ if(window.MVR_SPLASH) window.MVR_SPLASH.lang(lang); }catch(e){}
}
api.set = setLang;
var saved = null; try{ saved = localStorage.getItem(KEY); }catch(e){}
if(!saved) saved = (navigator.language || "").toLowerCase().indexOf("ms") === 0 ? "ms" : "en";
Array.prototype.forEach.call(document.querySelectorAll("[data-lang]"), function(b){ b.onclick = function(){ setLang(b.dataset.lang); }; });
Array.prototype.forEach.call(document.querySelectorAll("[data-lang-toggle]"), function(b){ b.onclick = function(){ setLang(lang === "ms" ? "en" : "ms"); }; });
setLang(saved);
if(window.MutationObserver){
  new MutationObserver(function(muts){
    if(lang !== "ms") return;
    muts.forEach(function(m){
      if(m.type === "characterData") proc(m.target);
      else m.addedNodes.forEach(function(n){ walk(n); });
    });
  }).observe(document.body, {childList: true, subtree: true, characterData: true});
}
})();

/* On-device speech to text (Whisper) running in a background thread.
   The first run downloads the model; after that it works offline. */
import { pipeline, env } from "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.5.1";
env.allowLocalModels = false;
var asr = null, loaded = null;
function post(m){ self.postMessage(m); }
async function load(id){
  if(asr && loaded === id) return asr;
  asr = null;
  post({type: "status", text: "Loading the speech model. The first time it downloads, afterwards it works offline."});
  asr = await pipeline("automatic-speech-recognition", id, {
    progress_callback: function(p){ if(p && p.status === "progress") post({type: "progress", pct: p.progress}); }
  });
  loaded = id;
  return asr;
}
self.onmessage = async function(e){
  var d = e.data;
  if(!d || d.type !== "run") return;
  try{
    var t = await load("Xenova/whisper-" + d.model);
    post({type: "status", text: "Transcribing…"});
    var opts = {task: "transcribe", chunk_length_s: 30, stride_length_s: 5, return_timestamps: true};
    if(d.language) opts.language = d.language;
    var out = await t(d.audio, opts);
    post({type: "result", text: out.text || "", chunks: out.chunks || []});
  }catch(err){
    post({type: "error", message: String((err && err.message) || err)});
  }
};

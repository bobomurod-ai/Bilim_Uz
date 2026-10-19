// Bilim_Uz audio effektlar tizimi (Web Audio API yordamida to'liq mustaqil)
window.BilimAudio = (function () {
    let audioCtx = null;
    let isMuted = localStorage.getItem('bilim_sound_muted') === 'true';

    function initContext() {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                audioCtx = new AudioContext();
            }
        }
        if (audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
    }

    // Mayin ohang chiqarish
    function playTone(freq, type = 'sine', duration = 0.2, gainValue = 0.15) {
        if (isMuted) return;
        try {
            initContext();
            if (!audioCtx) return;

            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = type;
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

            gain.gain.setValueAtTime(gainValue, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        } catch (e) {
            console.warn("Audio error:", e);
        }
    }

    return {
        // To'g'ri javob ovozi (yoqimli akkord)
        playCorrect: function () {
            if (isMuted) return;
            initContext();
            setTimeout(() => playTone(523.25, 'triangle', 0.15, 0.2), 0);   // C5
            setTimeout(() => playTone(659.25, 'triangle', 0.15, 0.2), 80);  // E5
            setTimeout(() => playTone(783.99, 'triangle', 0.35, 0.25), 160); // G5
        },

        // Noto'g'ri javob ovozi (past va bosiq)
        playWrong: function () {
            if (isMuted) return;
            initContext();
            playTone(330, 'sawtooth', 0.18, 0.15); // E4
            setTimeout(() => playTone(240, 'sawtooth', 0.25, 0.15), 120);
        },

        // Tugma bosish (click)
        playClick: function () {
            if (isMuted) return;
            playTone(800, 'sine', 0.05, 0.08);
        },

        // G'alaba / Daraja ko'tarilishi ovozi
        playVictory: function () {
            if (isMuted) return;
            initContext();
            const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
            notes.forEach((freq, idx) => {
                setTimeout(() => playTone(freq, 'triangle', 0.3, 0.2), idx * 120);
            });
        },

        // Ovoz holatini o'zgartirish
        toggleMute: function () {
            isMuted = !isMuted;
            localStorage.setItem('bilim_sound_muted', isMuted);
            return isMuted;
        },

        isMuted: function () {
            return isMuted;
        }
    };
})();

let composerOnline = false;

function playSequence(string) {
	if (composerOnline === false) {
		return 'Composer is currently offline!';
	}

	const composer = new Tone.Synth().toDestination();

	const notesToHz = {
		c: 261.626,
		0: 277.183,
		d: 293.665,
		1: 311.127,
		e: 329.628,
		f: 349.228,
		2: 369.994,
		g: 391.995,
		3: 415.305,
		a: 440.000,
		4: 466.164,
		b: 493.883
	};

	let count = 0;
	let notesArray = string.split('');
	let lastNote = notesArray.length;

	notesArray = notesArray.map(char => {
		if (char === " ") {
			return 0;
		}
		return notesToHz[char] ?? 100;
	});

	let sequence = new Tone.Sequence((time, note) => {
		composer.triggerAttackRelease(note, 0.1, time);
		count++;
		if (count === lastNote) {
			sequence.stop();
			Tone.Transport.stop();
		}
	}, [...notesArray], "8n").start(0); // Change this line for speed of notes

	sequence.loop = false;
	Tone.Transport.start();
	return `Playing: ${string}`;
}

const startComposerButton = document.querySelector('#start-composer-btn');

startComposerButton.addEventListener('click', () => {
	composerOnline = true;
	Tone.start();
	console.clear();
	console.log('Composer Online!');

	const messageElem = document.querySelector('.message');
	messageElem.innerText = "";
	messageElem.classList.remove('offline');
	startComposerButton.style.display = "none";

	const sequenceForm = document.querySelector('#sequence-form');
	sequenceForm.classList.remove('hidden');
});

const songLibrary = {
	odetojoy: ["    eefggfe", "   dccdee d e", "    efggfedc", "     cded c "],
	hallelujah: ["   eg gg ga", "   aa  eg gg ga   ", "    aa  ga aa a     ", "    a ag fgg  "],
	standbyme: ["EGA  EG    C", "DEDC  CDE", "C CEDC", "D DDC"],
	onelove: ["$$e@# 1%#%*!#()135151e $@#$@%^230928", "2357 203@#%@^ d#@# %@d 31%#!)*%!12351)!%&%)", ")!*f ed^)(@&)#@^&*#", "@(3720c$dc !!()!*$&)#@*e dc"],
}

function selectSong() {
	let selection = document.getElementById('song-library').value;
	for (let i = 0; i < Object.keys(songLibrary).length; i++) {
		document.getElementById(`sequence-input-${i + 1}`).value = selection ? songLibrary[selection][i] : "";
	}
}
# Simple-Composer-tone-api
This project was made with the assistance of resources provided by the Global Career Accelerator.

## Freelance for Prime Timers Club
The chain of senior centers, the "Prime Timers Club" is looking to provide a creative music program for their residents. They are using a composing tool that allows residents to enter strings of music notes as letters, and hear a playback of the sequence. 

The composer is mostly working, but users are entering non-musical characters and the Prime Timers Club wants to resolve some edge cases. They'd also like to update functionality to let residents enter multiple sequences on different lines. Devshop has been hired to QA and expand the tool to make sure that no matter what is entered the user gets output that makes sense.

## Composer Specs
When the composer is online, gain access to a function called `lintAndPlaySequence()` in `script.js`. Currently, this function takes whatever string is typed into the first input box and plays music notes corresponding with the letters. 

The composer only accepts lowercase letters with corresponding music notes ('a' through 'g') and blank spaces (rests/pauses). If a character in the string isn't recognized, the composer will play a low, discordant tone.

```js
	cde
	// Play the notes C, D, and E in order.

	c ceg
	// Play a C note. Rest. Then play the notes C, E, and G.

	cEG#
	// Play a C note. Unrecognized sequence. Play three low tones.
	 
```

There is also a small library of songs we can use to test the tool's functionality. Press the "Start Composer" button in the Webview and select a song from the song library dropdown. Once you do, strings will be added to each of the four sequence inputs. Click play to hear how they sound.

## The Ask
- Go to `script.js` and complete the QA asks in the function `lintAndPlaySequence()`.

## Note
You need to press the "Start Composer" button before you can play audio. By default, the web browser isn't allowed to play any audio before the user interacts with the page. [Click Here](https://developer.chrome.com/blog/autoplay/) if you're interested in learning more about Chrome's autoplay policy.

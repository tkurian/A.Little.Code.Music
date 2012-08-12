/**
 * File Name: musicalNotes.js
 * File Purpose: Create and display notes based on the user
 *				 hovering over certain keys.
 * Created By: Tina Kurian
 * Date Created: July 9th 2012
 * Version: 1.0
 *
 */

 
 
/****************************************
 *   		GLOBAL VARIABLES			*
 ****************************************/

var noteDivs = ["noteMiddleC", "noteD", "noteE", "noteF", "noteG", "noteA", "noteB", "noteC", "noteCSharp", "noteDSharp", "noteFSharp", "noteGSharp", "noteASharp", "noteMiddleCSharp"]
var notes = { noteMiddleC: "Middle C",
              noteD: "D",
              noteE: "E",
              noteF: "F",
			  noteG: "G",
			  noteA: "A",
			  noteB: "B",
			  noteC: "C",
			  noteCSharp: "C#",
			  noteDSharp: "D#",
			  noteFSharp: "F#",
			  noteGSharp: "G#",
			  noteASharp: "A#", 
			  noteMiddleCSharp: "C#"
			  
            }





/****************************************
 *   			FUNCTIONS			    *
 ****************************************/
/*
 * Function Name: creatingNotes()
 * Description: This method watches for the onmouseover event in order to display
 *				The appropriate note name based on the key that was
 *				hovered over
 * Parameters: N/A
 * Parameter Description: N/A
 * Return: N/A
 */
function creatingNotes () {
    for (var i = 0; i < noteDivs.length ; i++) {
        var noteDiv = document.getElementById(noteDivs[i]);
        noteDiv.note = notes[noteDivs[i]];
        noteDiv.onmouseover = displaySingleNote;
    }
}



/*
 * Function Name: displaySingleNote()
 * Description: This method displays the note name based 
 *				on the key that was hovered over
 * Parameters: N/A
 * Parameter Description: N/A
 * Return: N/A
 */
function displaySingleNote() 
{
	var note=this.note;
	var screen=document.getElementById("noteDisplayBox");
	
	if (note && screen) 
	{
		screen.innerHTML+=note+" . ";
	}
} 
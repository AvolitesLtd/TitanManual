ALWAYS RUN THE SCRIPTS BEFORE PUSHING ANY CODE TO SOURCE CONTROL!

IMPORTANT: docusaurus-search-local currently build with Node 16.18.0 only!

Make changes on the files on the 'shared' folder and run 'copyAndReplaceSharedContent.js' to copy them to the relative app ones.

Leave only the introduction on each folder prism, zero, player! 
Everything else will be copied over and replaced.

- clearContent.js clears unwanted subfolder from prism, zero, and player folder, resetting the prismdocs folder in a clean state.
- copyAndReplaceSharedContent.js copy and replace content, excluding unwanted files.

To run the scripts:
- open terminal and move to "TitanManual\prismdocs"
- run 'node clearContent.js'
- run 'node copyAndReplaceSharedContent.js'
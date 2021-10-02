# Avolites Titan manual Style Guide

If you suggest edits to the manual, please use the following guidelines
to keep it consistent for the reader.

If you use an important word or term in the text, make it **bold**. If you
add extra explanation which is less important, you can *put it in italics*.

Actual physical buttons on the console are rendered in the text in a
square light grey box. This is created in the markdown using the
following tags: \<Keys.HardKey\>Button\</Keys.HardKey\>.

Touch buttons on the screen are rendered in the text in a light
blue rounded box. This is created in the markdown using the
following notation: \<Keys.SoftKey\>Button\</Keys.SoftKey\>'.

If the button is a menu softkey, we would say so in the 
description, for example "Press the \<Keys.SoftKey\>Options\</Keys.SoftKey\>
softkey."

Note: The rendering breaks if one of these tags starts a line in the
markdown file. Add an html non-breaking space (&nbsp;) before the tag
if it is at the start of a line.

---

Extra information about a function is usually added in bullet points
at the bottom of the paragraph (created with a hyphen \- in the markdown).

-  This is an extra thing you might like to know.

---

If there is a particularly useful or important point, this is added
in an "Info Box" (created with a right arrow \> in the markdown). In 
the manual this renders into a box with an "info" symbol on the left 
hand side.

>  A very useful or important thing to know is put in an info box.

---

For step-by-step instructions, these are added as a "123 Block" which is
created by adding numbers before the text. Docusaurus will create the numbering
itself, the actual numbers you put in the markdown aren't used.

1. Do this first
2. Then do this
3. Finally, do this.

# Instructions to Add Clubs

Check the responses spreadsheet for a club that hasn't been added. Check off the checkbox under "started" column to reserve a club. Once you finish step 1 and 2 below, you can check it off in the "finished" column.

# 1 Club Descriptions
(1) Paste this into the appropriate category's HTML file (look at the "types" column), remove all square brackets, and paste under the last club (find <!-- ADD NEXT CLUB ABOVE HERE!!!! -->):

<!--insert club name-->
<a id="clubName"></a>
<h2>clubName</h2>
      <p><strong>Description:</strong>[desc]</p>
      <p><strong>Advisor:</strong>[advisor]</p>
      <p><strong>Student Contacts:</strong>[student contacts]</p>
      <p><strong>Meeting Days:</strong>[meeting day] </p>
      <p><strong>Location:</strong>[room]</p>

# 2 Buttons
(2) Add to the top of the page with the other buttons (find <!--ADD BUTTONS HERE!!!!!-->): 

<a href="#clubName"><button>[Club Name]</button></a>

# Tips:
- Some clubs belong to multiple categories, make sure to add them to all the necessary files before checking them off.
- Sometimes you may miss a few chracters while copy-pasting. Make sure the output on the website makes sense and there are no unclosed tags or syntax errors.
- Make sure to customize fill all the placeholder text.
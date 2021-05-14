# UFOs
JS, Bootstrap, Dynamic Content

# Purpose
To use JavaScript in conjunction with html to create a web application that can filter a dataset in real-time with user input.
</br>
![Capture](https://user-images.githubusercontent.com/14188580/117732918-4d102500-b1b6-11eb-8917-a364aaa45c8c.PNG)


# Results
## In Action:
![ufo2](https://user-images.githubusercontent.com/14188580/118280833-2ee64580-b492-11eb-84d0-b661d2cbc407.gif)
</br>
Each input field takes a user input and updates the table in html upon exiting focus on the field, either by pressing Tab, Enter, or clicking out of the field.</br>
The table update works in reverse for each field as well, when deleting the contents of an input field, it is removing the filter applied. </br>
I have also added a button at the bottom of the filter section to remove all filters at once for easier use.

# Summary
This is a simple representation of a JavaScript web-app that will allow myself and others to share data in a very digestible format.</br>

### Drawbacks
One drawback with this code in its current-state is its lack of typecase-flexibility.</br>
Luckily, for this dataset, all columns with filters are already forced to lowercase, making the user experience a best-case scenario even without flexibility, but this is not going to be a catch-all javascript solution when filtering html tables.</br>

### Further Development
Along with updating the flexibility of user input strings, the date filter leaves a lot to be desired.</br>
I believe the proper UX solution would be a 'datetime' drop-down object instead of a text input field, which would require some data cleaning on the 

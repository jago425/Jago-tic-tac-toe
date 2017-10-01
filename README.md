
# Tic Tac Toe
* The assignment: Create a tic-tac-toe game
* The challenge: Work with an API to allow users to authenticate and save their game stats
## Game Link
https://jago425.github.io/Jago-tic-tac-toe/

## Technologies Used
* JavaScript
* jQuery
* HTML
* CSS
* Bootstrap

## Development Process
I started with the HTML to build out the authentication fields, buttons and the game board. Then I worked on the authentication JS and AJAX.  Once I had authentication complete, I started  working on the game logic.  The piece that took me the longest was figuring out how to create a click handler to work in the individual boxes of the tic-tac-toe board so I could then build my turn logic along with my win and draw logic.

Once the game logic was in place, I had to finally face getting the game to interact with the API.  It took a few hours (with some help) but once that was done, all I had left were some small fixes and updates.
## Unsolved Bugs and Possible Enhancements
* The page is pretty blah, right now.  It needs more styling
* The page only returns number of games played, but could be updated to pull back other stats
* Add a nav bar and move game buttons to the nav bar to give the page a cleaner look and feel
* refactor to optimize page for mobile.
## User Stories
as a user ..
GAME
I want to be able to start a new game
I want to interact with the game
I want to be notified when I win
I want to be notified when no one wins
I want to be able to reset my game
I want to see whether my last turn was valid
After I finish a game, I want to be able to start a new game
I want to see my game data (my wins and losses and draws(maybe) and # of games played associated to my ID)
AUTHENTICATION
I need to be able to sign up
I need to be able to sign in
I need to be able sign out
I need to be able to change password
I need to see feedback whether my authentication process was a success or a failure
I don't want to be able to create multiple accounts with the same username
I want to be alerted if I try to signup with a username that I already registered with
SESSION STATE
when I login, my previous game shall not persist
when I logout, my game shall be cleared from board
After I login, I don't want to see the login or sign up fields anymore
After I logout, I don't want to see the game anymore, just the sign-up and login fields
### Wireframes
https://drive.google.com/file/d/0B2kD4C7RUmLscDJYUnFWLW1aT1k/view?ths=true

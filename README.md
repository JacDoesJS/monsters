# Monsters

Tech assessment exercise using https://www.dnd5eapi.co/api/2014/monsters/


## User Stories
As a user I want to be able to search for more information about specific monsters.  

If the monster isn't in the database, I want to receive a human-readable error message.  

For monsters with lots of properties, I want the option to see more information.  

In order for what I'm seeing to be clear, I want any new search to replace an old search or error message.

1. This was originally achieved as an exercise in plain JavaScript with minimal styling. I wrote this in notepad as an exercise in being clear that I was understanding every bit of syntax.
2. I created a bare bones react native project using Vite, React Native Web, and Typescript.
3. I started building the UI by adding a responsive header banner.
4. Next came the Input and Box components. As I was working without a design, I tried not to spend too much time thinking about the styling but I did focus on responsiveness and large font sizes. I specifically chose to make the Submit button quite large for ease of use. I used a colour picker extension tool to pick out some shades from the banner image to help give things a more homogenised look.
5. It was then just a matter of combining the UI with the HTTP request code from notepad. 
6. To check accessibility, I ran a lighthouse report. It would be great to return to having corporate access to a tool like Evinced. 


## Running the project

### Prerequisites
Node.js - at least v.18 (I'm using v.22.12.0)
Yarn package manager - install globally: `npm install -g yarn`

### Set up instructions
1. clone the repo, see https://github.com/JacDoesJS/monsters
2. inside the project folder, run `yarn install` (or just `yarn` which does the same thing and saves typing an extra word)
3. `yarn web` to run the app and view it in the browser

### Monster Names
Here are a few names to try in the Search box. If you want the full list, go to `https://www.dnd5eapi.co/api/2014/monsters/`
The search box is case insensitive.

Aboleth, Awakened Tree, Balor, Crocodile, Giant Fire Beetle, Pegasus, Roper, Scout, Shadow, Vrock, Warhorse, Zombie


## Next steps

This would benefit greatly from a custom Text component to avoid the repetition of <Text style={styles.text}> in MonsterDetails and to allow consistent text styling across the app. It would be easy to add a custom font here too and props for small, medium, and large font sizes, and different font weights.

In order to offer a choice of light or dark mode, I could add a theme context.

If I fetched the whole of the monster json response for all monsters when the app loaded and stored it in context and wrapped the app in a context provider, I could explore fuzzy matching possibilities and or for example returning every monster with the word dragon in its name.

Given more time, I would love to make the background color fill the screen and test this with a screen reader, and configure Jest for testing.

It would be better user experience if the input box cleared when a user wanted to search for another monster.
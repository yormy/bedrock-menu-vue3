## TODO
combo button open style is niet mooi met groei

# Logo
-- todo --
https://uxhacks.com/website-style-guide/
Differrent formats / positioning / backgrounds

# Typography
https://uxhacks.com/website-style-guide/
Headings H1 ,H2 etc
bullets
Numbered lists
inline text link
emphasis (ie bold ?)
 


# Iconography
https://uxhacks.com/website-style-guide/

# Form
* input
  * label, placeholder, help, success, error
* 

# Button
https://uxplanet.org/7-basic-rules-for-button-design-63dcdf5676b4

Types of buttons
* Contained : button with a filled backgound color
* Outlined  : button with a transparant background and only a border
* Link      : button that is just a text without background or border
* Ghost     : like a ```link``` button, but on hover there is a button background/outlined shown
* Toggle    : Switch on/of , this can be a 2 sided button, or a button that changes state

Types of states
* Default: How a button looks without any state. A default button could be contained, outlined, or flat, depending on your UI design and design system
* Active: Tells the user they have pressed the button (animation or color change, raised button to simulate real button press)
* Hover: Activated when a mouse cursor hovers over a button. Hover tells the user this is a clickable element
* Focus: Used to indicate selection when using the keyboard or assistive technologies. Often, a focus button includes an outline or a glow to let users know that the button is active or usable.
* Disabled: Indicates the user can’t click the button until completing another task, should still look like button but greyed out
* Loading: Communicates the system is processing the user’s action

Types of hierarchies
* High emphasis (Primary): Use a bright color, preferably a contained button, to show this button is most important. Avoid using more than one high-emphasis button on a single screen.
* Medium emphasis (Secondary): Use a lighter shade of your high-emphasis color to signify this button is less important.
* Low emphasis (Tertiary): Use a text button or outlined button with a transparent background to show users its low importance.

Labels
* short
* descriptive on the action

**BAD**
```
[ OK ]
```

**GOOD**
```
[ REMOVE ]
```

```
[ CREATE USER ]
```

# Confirmation Screens
The confirmation screens often contain a confirm and cancel link. 
The confifm link should be in the default style, en the cancel link in the tertiary style.
As the primary action is the confirm button, the cancel is just to have a exit
```
cancel    [ CREATE USER ]
```

The confirm action is in the SUCCESS color
the cancel action is in the DANGER color

# Less is more
Reduce the number of buttons to a bare minimum
Have only 1 clear Call To Action button.

# Size
Dynamically size the button to the content within.

A good button needs the following

# Designs
## Basic
The best buttons are filled in with a background color and a dropshadow to raise it from the screen


## Hover
On hover the item should **pop**

When the background text is WHITE, you DARKEN the button to emphasize the contrast.

When the background text is BLACK, you LIGHTEN the button to emphasize the contrast.
https://ux.stackexchange.com/questions/12929/should-a-button-become-lighter-or-darker-on-hover
On hover - how to change
* color background lighter / darker 
* color text lighter / darker
* text font (text change also changes the alignment if buttons are next to it)
* highlight
* animation


# Placement
Where to place , left center, middel
aligned ?

CONFIRM ...cancel
or
cancel...CONFIRM


# examples:
http://styleguides.io/
https://uxhacks.com/website-style-guide/
http://codeforamerica.clearleft.com/
https://www.canva.com/learn/apple-google-starbucks-inside-the-web-design-style-guides-of-10-famous-companies/
https://blog.hubspot.com/marketing/examples-brand-style-guides


# Buttons
## FlipFlop buttons
Buttons that have 1 indicator and by clicking the state will change. Ie password hide/ password reveal button
There is conflicting ui in the world
* The play button  with the arrow, shows the result of clicking, clicking the arrow will change the state into playing
* In other scenarios the button shows the current state of the system. (folder open icon when the folder is open,)
conclusion: show the current state of the system

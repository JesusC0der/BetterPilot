# BetterPilot
<div align="center">
  <img src="/assets/logorecreation.png" width="300px"></img>

#### A Copilot replacement for Windows that mimics the behavior of Copilot before the new Windows 24H2 update.
  </div>

# Screenshots

<img src="/assets/screenshot.png" width="800px"></img>
<img src="/assets/Screenshot2.png" width="800px"></img>

# Why though?
Because, unlike some people, I actually use Copilot for school among other things, and I dislike Microsoft's decision to move Copilot into an unfinished Edge web app. This project aims to bring back, roughly, the same experience as before this ugly new UI became a thing. This change was intentional by Microsoft and was released in the newest 24H2 update to Windows.

# Okay, how does it work?
This project was made with Electron and Node.JS. For starters, I found that in Microsoft Edge, the Copilot that appears when clicked in the sidebar is just a mini tab opening up a "special" Copilot page on MS's servers. After acknowledging this, I took this URL and made an Electron application using it. Electron is a backend for most web-based applications, or PWAs, such as Slack and Discord; it's a mini browser running within an application container. I then added a shortcut to show and hide this window, made the window borderless and unsizable (for the time being), and BetterPilot was born.

# How do I install it?
Head over to the releases section of this repo and download the latest setup file (betterpilot-v# Setup.exe).
Alternatively, you can build the program from the source by cloning this repo, navigating to the equivalent directory within Command Prompt, and running the command ```npm run make```. Note that a few dependencies must be installed to use this command, including ```npm```, ```electron```, and ```electron-forge```.

# How do I use it?
After installing, the program should start on the far right of the screen, showing the Copilot chat window. To toggle the visibility of this window, and the application itself, use the global shortcut ```ALT + SHIFT + C```. To toggle between the Copilot chat window and the ChatGPT window, use the global shortcut ```ALT + SHIFT + D```.

Now, to sign in to Copilot with your MS account, click log in, enter your login details (again, this is just a web browser running locally on your PC), and when you are presented with a white screen within the program, restart it. After launching again (at least from my testing) you should be logged in successfully. I believe you have to do this every time you reboot your computer, as I have no way currently to store the sign-in cache or cookies, but I will attempt to implement this at a later time. The process to sign in to ChatGPT should be quite similar, although I have not tested it extensively.

# Reporting bugs
As I have tested this on a minimal number of devices (basically just my desktop and laptop), expect bugs. Please report any bugs and I will do my best to correct them. If you have any suggestions for the program, I am all ears and would be happy to implement any features you think would be cool. I was thinking about, in addition to Copilot and ChatGPT, adding the ability to view Grammarly within this program as well, and possibly changing the global shortcut at that point to switch between these to```ALT + SHIFT + 1-3```, respectively. Although, I am unsure if this would be useful or work correctly.

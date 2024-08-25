# BetterPilot
<div align="center">
  <img src="/assets/logorecreation.png" width="300px"></img>

#### A Copilot replacement for Windows that mimics the behavior of Copilot before the new Windows 24H2 update.
  </div>

# Screenshots

<img src="/assets/screenshot.png" width="800px"></img>

# Why though?
Because, unlike some people, I actually use Copilot for school among other things, and I absolutely hate Microsoft's decision to move Copilot into an unfinished Edge webapp. This project aims to bring back, roughly, the same experience as before this ugly new UI became a thing. If you didn't hear, or didn't know, this change was intentional by Microsoft and was released in the newest 24H2 update to Windows.

# Okay, how does it work?
This project was made with Electron and Node.JS. For starters, I found that in Microsoft Edge, the Copilot that appears when clicked in the sidebar is just a mini tab opening up a "special" Copilot page on MS's servers. After acknologing this, I took this URL and made an Electron application using it, which is basically a backend for most web based applications, or PWAs, such as Slack and Discord; it's a mini browser running within an application container. I than added a shortcut to show and hide this window, made the window borderless and unsizable (for the time being), and BetterPilot was born.

---still adding information----

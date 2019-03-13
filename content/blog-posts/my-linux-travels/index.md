---
title: "My Linux Travels"
date: 2015-09-05 03:10:35
---
I've used many distributions over the years. However, I've never really taken
the time to discuss what lead me to my current distribution -- OpenSUSE.
So I wanted to take some time, and share what I've learned in my travels.

<!-- more -->

I originally started playing around with OpenSUSE and Kubuntu/Ubuntu/etc
~2009-2010 on an old computer originally meant to run Windows 98. I quickly
discovered the hardware was, less than adequate to do... well
just about anything. I didn't do much with Linux at this point besides
play around with it, basically clicking buttons, and seeing what would happen.
Then around 2012, I decided that I had, had enough of Windows, and I
decided to get Fedora -- I believe it was Fedora 18 if
my memory serves me correctly -- and use it as my primary operation system.

I choose Fedora because I really liked the fact that it's *almost* a
bleeding edge distribution. I also thought GNOME 3 looked *really* cool,
and to many of my friends protest, I wasn't afraid to share my optimism.
Now, you may be thinking, well that was a while ago, wasn't GNOME 3...
still kind of new? Yup! It had a ton of very strange problems, and
dealings with things which just hadn't been well thought out. One of my
biggest complaints with GNOME 3, is/was the way it handles applications
which try and stick around in the notifications area. I was, and still am,
a heavy user of both Spotify, and Mumble. These applications, at least
historically, have made heavy use of the notifications area. GNOME 3
would just awkwardly place them in the activities overview like any other
notification, this made for a very awkward experience. My other complaint
about GNOME 3, was, and still is, the file manager. "Files" as it's
now called, simply can't compete with KDE's Dolphin. I could write an
entire blog entry about how annoyingly oversimplified, but yet
complicated, the GNOME team has made "Files" -- maybe another time.
However, all that aside, what really put a nail in the coffin of
GNOME 3 was the little things -- like adding a new entry to the
list of applications, which at least at the time, completely lacked a GUI.
There were, and from what I've seen still are a number of cases where
GNOME makes you really work just to
do what -- in my opinion anyways -- should be a simple task.

So, from Fedora GNOME, I went to Fedora KDE. Fedora KDE,
was pretty nice actually. My biggest complaint with Fedora KDE was the
speed at which I was receiving software updates for KDE software.
I really hated how long it took to get the latest builds of KDE onto Fedora.
So, why did I eventually leave Fedora? Well, did I mention,
I like to play games? Did I also mention
this computer had an AMD graphics card? Anyone who's
every tried to use AMD proprietary drivers on Fedora almost
certainly knows what I'm talking about already. These drivers
would frequently be behind in compatibility with the latest Linux
Kernel, and xserver, causing frequent problems. Rest assured, I became
quite good at reinstalling/reconfiguring the Linux graphics stack.

I had to take another break from Linux when I went off to college for a while.
However, once I got my new -- Intel/nvidia powered -- laptop, and with
my previous frustrations about Fedora, I decided to try Arch Linux,
or rather Manjaro Linux -- my hope being this would provide an
excellent buffer on the latest bleeding edge packages.
It did **exactly** that, and I was very happy with it for quite some time.
I could find almost any package I wanted, the AUR was simply amazing,
the proprietary graphics support was superb, and everything was awesome.
I still had to fix my computer from time to time, but that wasn't a
big deal to me. Then... sketchy things started happening. The Manjaro SSL
certificate was allowed to expire for instance. This made me very,
disconcerted with their ability to manage a distribution. I also became
weary of the occasional system fixes, and didn't trust myself to pick all
the software I needed to make a 100% solid, stable, and secure Arch Linux
system, so I broke up with my dearly beloved Arch Linux.

So, from here, I decided to go back to Fedora KDE -- I know what
you're thinking. I was hoping the RPM fusion support for nvidia would be
better than for AMD, and it was! However, the RPM fusion support for
bumblebee/nvidia optimus enabled devices, was non-existant. Thus, I had
to find some random repository that an individual was maintaining
specifically for nvidia optimus enabled laptops/bumblebee/primus/etc.
This worked well enough, however, graphics updates weren't as frequent
nor as trust worthy, as I would have liked them to be. Fedora also stopped
packaging Mumble, so I had to have a self compiled version of Mumble,
and honestly, I feel Fedora treats their KDE spin a bit like an awkward
step child. It's there, and it's given some love, I'm sure those whom work
on it, work very hard. However, regardless of the effort exerted, it doesn't
get the polish that GNOME does in Fedora.

I then decided to try a Debian based distribution again, something I hadn't
done in quite some time at this point. I wanted to bring myself
into "one ecosystem" -- Debian -- to simplify my life. I have several
other people I know, running Linux Mint. However, Linux Mint moved far
to slowly for me. So, I actually decided to go with Debian testing, and
work off of that. My first attempt was to start with only the command line
interface, and then compile my own Qt and KDE Plamsa 5.4/Applications 15.08
desktop environment. The idea being, this would allow me to have an
"unstable"/bleeding edge desktop environment, while still having a stable,
but rolling release base to work off of. I ran into various problems along
the way, and after getting a Breeze style cursor to appear on top of a
black screen, I decided it wasn't worth pursing any further.

This brings me to my second attempt at Debian. I decided to start from a
command line interface, and work my way up by installing their
Plasma 5.3.x packages. I made a lot of progress, and got things
mostly working. However, this as well was very painful, and I got the
feeling that all my work would be for little gain. There was also a major
problem in that, the KDE packages for Debian -- at least at the time -- had
a rather significant issue where KWin5, and several other core KDE
components could not co-exists. You essentially had to either choose
KWin or Plasma. I use KDE for KWin almost as much as I use it
for Plasma -- I love KWin -- so this wasn't really an option for me.

Thus, I decided to try OpenSUSE again. I hadn't paid much attention to
the distribution over the years. I had never really been a fan of
YaST. However, in my attempt to simply my life, I accepted that a
desktop environment independent configuration utility might actually
be quite nice to have. At this point, I was also at the point of...
well what do I have to lose? So, I tried OpenSUSE! I have to say, I was
not expecting to be impressed, however, I am.

OpenSUSE has matured a lot since I last tried it. One big thing for me,
being in Fedora so frequently over the past few years, was that it has
official support for proprietary graphics drivers, including nvidia optimus
enabled systems -- this takes a bit of work to get working, but it's
not too bad. Another thing I really like, is their web based software search.
Once I figured out how to use it, I had a system running KDE Plasma 5.4 with
mostly Applications 15.08 running in little time at all. They also have a
Mumble package -- yippie! The only thing I'm missing at this point, is a
Spotify package, as unfortunately, they are only packaging in deb
format at the moment. I'm still hoping this will change before too much longer.

Now, all that said, I don't want to mislead you, there are a number of
issues with OpenSUSE as well, primarily, with the bleeding edge packages.
I imagine much of this will be resolved in the coming months with little
intervention on my part. However, I'm currently not using KMail, as the
integration with KWallet5 is not there -- KDE PIM 5 was not included in the
stable version of the bleeding edge packages. Additionally, Yakuake,
unfortunately isn't Yakuake5, and isn't working, as it can't find a
compatible Konsole. There is also a rather strange issue with dependencies,
where both the new plasma sound applet, and KMix want to be installed at the
same time. This becomes evident when you use zypper dup, as one of the
package groups includes KMix by default, so if you do a distribution upgrade
with dup, you have to make sure to remove KMix after the upgrade,
otherwise, your sound will be a bit awkward to control -- seeing
as how there are two volume applets open and all.

I think I'll be sticking with OpenSUSE for a while, and seeing how things
turn out. So far, I think it's a keeper, it gives me that stable base I
desire, while still allowing me to have my bleeding edge desktop environment,
which I crave, and minus the initial setup cost, it seems to be rather
low maintenance. If this proves to be as stable as I would like, I may start
pushing my Linux Mint users to move to OpenSUSE, that way I really have
simplified my life -- perhaps I'll write a bit about that some other time.
Anyways, with OpenSUSE 42 sharing upstream SUSE packages, and having a
variety of core improvements, I only see OpenSUSE becoming a
better distribution in the future.

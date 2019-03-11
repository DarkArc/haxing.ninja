---
title: "Open Source Security"
date: 2017-12-03 10:00:00
---
A short while ago, I got into what could be considered a [debate on Twitter](https://twitter.com/haxing_ninja/status/922872057351884800). I finally got around to reading the referenced "[2017 Open Source Security and Risk Analysis Report](https://www.blackducksoftware.com/open-source-security-risk-analysis-2017)". This is a post both in response to said report, and to share my view on the topic.

First, I'd like to start off by addressing Black Duck as an organization. In their own words:

> Organizations worldwide use Black Duck Software’s industry-leading products to automate the processes
> of securing and managing open source software, eliminating the pain related to security vulnerabilities, open source license compliance and operational risk.

Their primary product, is a software for open source "threat monitoring". So, to me, it's immediately evident, this company has something to gain by increasing the fear factor around open source.
While this certainly doesn't discredit Black Duck's report, I think some healthy skepticism is appropriate. All of that said, let's dive into their claims.

Their first -- and only -- real claim in regards to open source security in the report, is that "Organizations are not effectively dealing with open source security threats." On this, I can agree, there is
potential for a problem. However, I would argue that organizations are not effectively dealing with ~~open source~~ security threats, is a better place to start.

Their claim is that "67% of applications [scanned] using open source had vulnerabilities in the components used". They then go on, "On average, vulnerabilities identified in these
applications have been publicly known for over four years." They do not however, discuss how these vulnerabilities are identified, or whether or not these vulnerabilities that have
"been publicly known for over four years" were actually patched.

I think it's fair to argue, that with the lack of specificity, and the commercial interests of the company, these issues could very well
have been reported, and patched upstream, however, again, organizations are not effectively dealing with ~~open source~~ security threats. In other words, I think it's fairly likely,
that the issue lies with the organization managing the software product they're producing. It's easy to get into a situation, where you aren't frequently examining your dependencies for security vulnerabilities, or even updating your dependencies, and thus, you end up with out of date software, that has known security risks.

This is one area where you can use a benefit of open source software against it -- if you're so clever. Open source software, is inherently transparent; I would argue, in the vast majority
of cases, there's no level of management trying to cover up a security incident. There's also in many cases, very public notices of the security vulnerabilities affecting open source software.
For instance, RedHat maintains [a page](https://access.redhat.com/security/security-updates/#/) with various well documented notices of security vulnerabilities in open source applications.
It's been well documented that security by obscurity, or in other words, security by suppression of information, doesn't work. Unfortunately, by embracing transparency, you suddenly look
far more vulnerable, even if you're comparably secure to someone that simply doesn't release as much information.

Another issue I take with this report is their stance on updates. Their claim is that:

> UNLIKE COMMERCIAL SOFTWARE, where updates are automatically "pushed" to users, open source has a "pull" support model -- users are responsible for keeping track of vulnerabilities as
> well as fixes and updates for the open source they use.

This is simply not true. When working with software, in terms of libraries, both closed and open source, you must pull the latest copy of your dependencies. When working with software,
in terms of applications installed and executing on servers, the open source world gives you choice in the matter. You can either, manually update your installed "packages", or you can
instead have the server automatically install these packages.

Additionally, major Linux distributions have a high standard of quality, and well known reputation for rapidly patching exploits.    
In fact, because of the nature of the update mechanisms in the open source world, I would argue it's even easier, and more secure to update your software. Popular tools for software management
on Linux -- ex apt, dnf, pacman -- have the well known capability to update any managed software on the system, and unlike the Windows ecosystem, the vast majority of software,
is indeed managed through these tools. This means, rather than dealing with potentially hundreds of separate update tools, you're instead dealing with one, well tested, well secured tool, and
additionally, you're lowering your maintenance burden by allowing sysadmins the ability quickly update the entire system, rather than wasting their time working through the update mechanisms
of the various installed softwares.

Another interesting point that's made in this report, is that "traditional testing tools miss open source". Again, this is a benefit of open source software, turned against it. With commercial applications,
you would simply not have the option to run your security tools against the source code. However, with open source software, you can indeed run security checks against the libraries you're using. Their "point"
is merely pointing out, that many organizations have internal security policies, and tools, that they use on their own source code, but not on their open source software. I would again argue this is an issue
with organizational management of software security, and not open source software.

The rest of the report continues to use fear as marketing tact. It is mostly concerned with what I can only imagine is content meant to scare upper management into asking their developers "are we using
open source software", merely citing its widespread usage, and attempting to scare upper management into feeling they *must* purchase some kind of auditing tool -- maybe from Black Duck? -- that will
allow them to feel safer, and "ensure" they're not affected.

Now let me be clear, there are definitely benefits to having automated tools look at your software and its dependencies -- you probably should -- and maybe Black Duck's products are solid, I'm not sure. However,
at the end of the day, the issues described in this document, and so many others attacking open source as being "less secure" are merely attacking issues of organizational management. The facts are in open source software's
favor, and I would argue for those users that are **truly** in need of security, and protection, there is no better place to look than the world of open source software. Prominent examples include [Tor](https://github.com/torproject/tor) and [Signal](https://github.com/WhisperSystems/Signal-Android), which are at the forefront of protecting their users privacy, and security. At the end of the day, the only true difference between
software that is open source, versus software that isn't, is you can see the source code that you're using -- and I don't know how anyone could ever truly see that as detrimental to their attempts to secure their application,
their IOT home, their day-to-day communication, or whatever else it is they're using software to accomplish.

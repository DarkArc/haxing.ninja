---
title: "Let's talk about Venom"
date: 2015-08-24 1:16:00
---
Over the years that I've managed my Minecraft server, I've found myself in a great deal of frustration, and wasting a **ton** of time with file upload. This frustration spurred the creation of [Venom](/projects/venom/).

Prior to tonight, Venom was simply known as Skelril Deployment. The script deploy.py, however, even in its current form is capable of doing far more than just deploying our server updates though. Venom is currently capable of finding files in a directory based on their most recent revision as determined per a regex expression to match their name. It also has the ability to remap a directory to a remote directory, effectively ensuring that all files in folder x are in folder y on the remote server.

However, this isn't good enough. This fits my original use case quite well, however, I think there's a lot of room for improvement in this department. We currently have very complicated and powerful tools that manage our compilers, however, what is there for deployment? What exists which you can say <bla> my_project and then have it upload all relevant files to the remote server?

I find it absurd that in 2015, I still have to go to FileZilla, and browse to all the directories/files I need, and then upload them manually. My goal with Venom is resolve this issue. This will be one of many projects over the next few months, so this may take some time, but I have high hopes that I will be able to make deploy.py aka Venom, into something incredibly useful. In the short term though, I hope to make Venom as huge time saver for Minecraft server owners.

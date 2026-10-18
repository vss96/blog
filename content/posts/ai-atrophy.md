---
title: "AI atrophy isn't what you think"
date: "2026-10-18"
category: Tech
slug: ai-atrophy
summary:
  The real cost of AI isn't forgetting how to code. It's forgetting to ask what the system is for.
description:
  Why "AI atrophy" gets misnamed, and what I try to do about it.
cover:
  image:
  alt:
  caption:
  relative: false
draft: false
---

It's pretty interesting to see how quickly things have changed. Last year, we were just starting to use AI to help us write code. I used [Augment](https://www.augmentcode.com/) extensively and thought it was great—until its credit-based pricing got in the way. We eventually switched to Claude, and it's been striking to see how much the models have improved, from version 3 to 5.5.

We also realised that we could ask agents to complete tasks end to end, with a person guiding them and reviewing the result. That raises a question: what happens when we don't guide them well, or when we don't have a strong foundation to build on?

Companies often expect AI to boost output and shorten timelines significantly. That can happen, but it depends on how we build. If we use AI to move faster without thinking through the work, we risk producing a codebase that's full of holes.

I don't think the answer is to try to control every way people use AI. The better question is: how do we keep understanding and looking after the systems we're building?

- Do we understand what we're building, and have we checked that the spec describes the right thing?
- Do our tests cover the behaviour that matters? Good tests can reveal where the design is starting to smell.
- Are we keeping an eye on the code as it changes? Are methods getting too large or taking on too much? Automated rules can help, but too many can become noise. I find a pragmatic approach works best.
- Before adding a feature, have we thought through the design? Is there anything we should clean up first? It's easy to postpone that work, but it's often what makes the next change easier.

Sloppy code often comes from being rushed or not considering the consequences. It's easy to think, "I have to ship this next week; I'll deal with the problems later." But when that becomes a habit, we accumulate technical debt: fragile code, weak tests, and a team worn down by the effort of working around both. The longer we leave it, the harder it gets to clean up.

In other words: the code is on fire, but the deadline says everything is fine.

![This is fine dog sitting in a burning room](/images/ai-atrophy-this-is-fine.gif)

*The codebase, five minutes before the deadline. [GIF via GIPHY](https://giphy.com/gifs/meme-this-is-fine-its-3jbR27OLT5YJv0ewvN).*

I keep coming back to a building metaphor. Imagine a well-kept building with gleaming windows. If nobody looks after it, the building can fall into disrepair, and fixing it later will take more work than maintaining it along the way. A codebase is similar: regular care is easier than waiting until the problems pile up.

As models get better, it's tempting to let them do more while we understand less. I try to keep up with the changes, refactor when I see a good opportunity, and raise maintainability in code reviews. One version of that conversation is: "This looks good. I think this part has grown beyond its original purpose — could we refactor it?" Then we follow up with a small change, review it, and move on with a codebase that's easier to work in. The AI may have written the code, but it still hasn't volunteered to be on call for it.

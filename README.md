# Flight rules for git

## Table of Contents
* [Amending Commits](#amend)
* [Combining Commits](#interactive-rebase)
  * Rebasing Errors:
  * [noop](#noop)
  * [Merge Conflicts](#merge-conflicts)
  * [Forcing Pushes](#force-push)
* [Commit on Wrong Branch](#commit-wrong-branch)
* [Re-Commit Under Another Branch](#cherry-pick)

### What are "flight rules"?

A [guide for astronauts](http://www.jsc.nasa.gov/news/columbia/fr_generic.pdf) (now, programmers using git) about what to do when things go wrong.

>  *Flight Rules* are the hard-earned body of knowledge recorded in manuals that list, step-by-step, what to do if X occurs, and why. Essentially, they are extremely detailed, scenario-specific standard operating procedures. [...]

> NASA has been capturing our missteps, disasters and solutions since the early 1960s, when Mercury-era ground teams first started gathering "lessons learned" into a compendium that now lists thousands of problematic sitautions, from engine failure to busted hatch handles to computer glitches, and their solutions.

&mdash; Chris Hadfield, *An Astronaut's Guide to Life*.


### Conventions for this document

For clarity's sake all examples in this document use customized bash prompt in order to indicate the current branch and whether or not there are staged changes. The branch is enclosed in parentheses, and a `*` next to the branch name indicates staged changes.

<a name="amend"></a>
## I need to add staged changes to the previous commit

```
(my-branch*)$ git commit --amend

```

<a name="force-push"></a>
### I tried to push my amended commit to a remote, but I got an error message

Note that, as with rebasing (see below), amending **replaces the old commit with a new one**, so you must force push (`-f`) your changes if you have already pushed the pre-amended commit to your remote. Be careful when you do this &ndash; *always* make sure you specify a branch!


<a name="interactive-rebase"></a>
## I need to combine commits

You need to do something called an interactive rebase.

If you are working in a branch that is/will become a pull-request against `master`, you can rebase against your `master` branch. Make sure it is up to date:

```
(my-branch)$ git rebase -i master
```

If you aren't working against another branch you'll have to rebase relative to your `HEAD`. If you want to squash the last 2 commits, for example, you'll have to rebase against `HEAD~2`. For the last 3, `HEAD~3`, etc.

```
(master)$ git rebase -i HEAD~2
```

After you run the interactive rebase command, you will see something like this in your  text editor:

```
pick 01b2fd8 New awesome feature
pick b729ad5 fixup
pick e3851e8 another fix

# Rebase 8074d12..b729ad5 onto 8074d12
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

All the lines beginning with a `#` are comments, they won't affect your rebase.

If you want to **combine all your commits with the oldest (first) commit**, you should edit the letter next to each commit except the first to say `f`:

```
pick 01b2fd8 New awesome feature
f b729ad5 fixup
f e3851e8 another fix
```

If you want to combine all your commit with the oldest commit **and rename the commit**, you should additionally add an `r` next to the first commit:

```
r 01b2fd8 New awesome feature
f b729ad5 fixup
f e3851e8 another fix
```

You can then rename the commit in the next text prompt that pops up.

```
Newer, awesomer features

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# rebase in progress; onto 8074d12
# You are currently editing a commit while rebasing branch 'master' on '8074d12'.
#
# Changes to be committed:
#	modified:   README.md
#

```

If everything is successful, you should see something like this:

```
(master)$ Successfully rebased and updated refs/heads/master.
```

### Possible issues with interactive rebases

<a name="noop"></a>
#### The rebase editing screen says 'noop'

If you're seeing this:
```
noop
```

That means you are trying to rebase against a branch that is at an identical commit, or is *ahead* of your current branch. You can try:

* making sure your master branch is where it should be
* rebase against `HEAD~2` or earlier instead

<a name="merge-conflict"></a>
#### There were conflicts

If you are unable to successfully complete the rebase, you may have to resolve conflicts.

First run `git status` to see which files have conflicts in them:

```
(my-branch)$ git status
On branch my-branch
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   README.md
```

In this example, `README.md` has conflicts. Open that file and look for the following:

```
<<<<<<< HEAD
some code
=========
some code
>>>>>>> new-commit

```

You will need to resolve the differences between the code that was added in your new commit (in the example, everything from the middle line to `new-commit`) and your `HEAD`.

After you have resolved all conflicts and tested your code, `git add` the files you have changed, and then continue the rebase with `git rebase --continue`

```
(my-branch)$ git add README.md
(my-branch)$ git rebase --continue
```

If at any time you want to stop the entire rebase and go back to the original state of your branch, you can do so:
```
(my-branch)$ git rebase --abort
```

<a name="force-push"></a>
#### When I try to push, I get an error message:

```
To https://github.com/yourusername/repo.git
! [rejected]        mybranch -> mybranch (non-fast-forward)
error: failed to push some refs to 'https://github.com/tanay1337/webmaker.org.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

Since rebasing **replaces the old commit(s) with a new one**, you must force push (`-f`) your changes. Be careful when you do this &ndash; *always* make sure you specify a branch!

```
(mybranch) $ git push origin mybranch -f
```

<a name="commit-wrong-branch"></a>
## I committed to master instead of a new branch


Check out a new branch, then return to your master branch

```
(master)$ git checkout -b new-branch 
(new-branch)$ git checkout master
(master)$
```

Find out what the commit hash you want to set your master branch to (`git log` should do the trick). Then reset to that hash.

For example, if the hash of the commit that your master branch is supposed to be at is `a13b85e`:

```
(master)$ git reset --hard a13b85e
HEAD is now at a13b85e
```

<a name="cherry-pick"></a>
## I made several commits on a single branch that should be on different branches

Say you are on your master branch. Running `git log`, you see you have made two commits:

```
(master)$ git log

commit e3851e817c451cc36f2e6f3049db528415e3c114
Author: Alex Lee <alexlee@exampledomain123.com>
Date:   Tue Jul 22 15:39:27 2014 -0400

    Bug #21 - Added CSRF protection
    
commit 5ea51731d150f7ddc4a365437931cd8be3bf3131
Author: Alex Lee <alexlee@exampledomain123.com>
Date:   Tue Jul 22 15:39:12 2014 -0400

    Bug #14 - Fixed spacing on title

commit a13b85e984171c6e2a1729bb061994525f626d14
Author: Aki Rose <akirose@exampledomain123.com>
Date:   Tue Jul 21 01:12:48 2014 -0400

    First commit
```

Let's take note of our commit hashes for each bug (`e3851e8` for #21, `5ea5173` for #14).

First, let's reset our master branch to the correct commit (`a13b85e`):

```
(master)$ git reset --hard a13b85e
HEAD is now at a13b85e
```

Now, we can create a fresh branch for our bug #21 branch:

```
(master)$ git checkout -b 21
(21)$
```

Now, let's *cherry-pick* the commit for bug #21 on top of our branch. That means we will be applying that commit, and only that commit, directly on top of whatever our head is at.

```
(21)$ git cherry-pick e3851e8
```

At this point, there is a possibility there might be conflicts. See the [**There were conflicts**](#merge-conflict) section in the [interactive rebasing section above](#interactive-rebase) for how to resolve conflicts.


Now let's create a new branch for bug #14, also based on master

```
(21)$ git checkout master
(master)$ git checkout -b 14
(14)$
```

And finally, let's cherry-pick the commit for bug #14:

```
(14)$ git cherry-pick 5ea5173
```

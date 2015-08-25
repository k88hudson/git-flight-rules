# Flight rules for git

#### What are "flight rules"?

A [guide for astronauts](http://www.jsc.nasa.gov/news/columbia/fr_generic.pdf) (now, programmers using git) about what to do when things go wrong.

>  *Flight Rules* are the hard-earned body of knowledge recorded in manuals that list, step-by-step, what to do if X occurs, and why. Essentially, they are extremely detailed, scenario-specific standard operating procedures. [...]

> NASA has been capturing our missteps, disasters and solutions since the early 1960s, when Mercury-era ground teams first started gathering "lessons learned" into a compendium that now lists thousands of problematic situations, from engine failure to busted hatch handles to computer glitches, and their solutions.

&mdash; Chris Hadfield, *An Astronaut's Guide to Life*.

#### Conventions for this document

For clarity's sake all examples in this document use a customized bash prompt in order to indicate the current branch and whether or not there are staged changes. The branch is enclosed in parentheses, and a `*` next to the branch name indicates staged changes.

[![Join the chat at https://gitter.im/k88hudson/git-flight-rules](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/k88hudson/git-flight-rules?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

  - [I wrote the wrong thing in a commit message](#i-wrote-the-wrong-thing-in-a-commit-message)
  - [I need to add staged changes to the previous commit](#i-need-to-add-staged-changes-to-the-previous-commit)
    - [I tried to push my amended commit to a remote, but I got an error message](#i-tried-to-push-my-amended-commit-to-a-remote-but-i-got-an-error-message)
    - [I rebased, but I don't want to force push.](#i-rebased-but-i-dont-want-to-force-push)
  - [I need to combine commits](#i-need-to-combine-commits)
    - [Possible issues with merging](#possible-issues-with-merging)
      - [Safe merging strategy:](#safe-merging-strategy)
      - [I need to merge a branch into a single commit](#i-need-to-merge-a-branch-into-a-single-commit)
      - [I want to combine only unpushed commits](#i-want-to-combine-only-unpushed-commits)
    - [Possible issues with interactive rebases](#possible-issues-with-interactive-rebases)
      - [The rebase editing screen says 'noop'](#the-rebase-editing-screen-says-noop)
      - [There were conflicts](#there-were-conflicts)
  - [I committed with the wrong name and email configured](#i-committed-with-the-wrong-name-and-email-configured)
  - [I committed to master instead of a new branch](#i-committed-to-master-instead-of-a-new-branch)
  - [I made several commits on a single branch that should be on different branches](#i-made-several-commits-on-a-single-branch-that-should-be-on-different-branches)
  - [I want to add part of a new file, but not the whole file](#i-want-to-add-part-of-a-new-file-but-not-the-whole-file)
  - [I want to add aliases for some git commands](#i-want-to-add-aliases-for-some-git-commands)
  - [I pulled from/into the wrong branch](#i-pulled-frominto-the-wrong-branch)
  - [I want to discard local commits so my branch is the same as one on the server](#i-want-to-discard-local-commits-so-my-branch-is-the-same-as-one-on-the-server)
  - [I want to discard my local, uncommitted changes](#i-want-to-discard-my-local-uncommitted-changes)
  - [I accidentally did a hard reset, and I want my changes back](#i-accidentally-did-a-hard-reset-and-i-want-my-changes-back)
  - [I want to move my unstaged edits to a new branch](#i-want-to-move-my-unstaged-edits-to-a-new-branch)
  - [I want to move my unstaged edits to a different, existing branch](#i-want-to-move-my-unstaged-edits-to-a-different-existing-branch)
  - [What did I just do?](#what-did-i-just-do)
  - [I want to add changes in one file to two different commits](#i-want-to-add-changes-in-one-file-to-two-different-commits)
  - [I want to remove a file from git but keep the file](#i-want-to-remove-a-file-from-git-but-keep-the-file)
  - [I want to change a file name's capitalization, without changing the contents of the file.](#i-want-to-change-a-file-names-capitalization-without-changing-the-contents-of-the-file)
  - [Clone all submodules](#clone-all-submodules)
  - [Deleting Objects](#deleting-objects)
    - [I want to delete local branches that were deleted upstream](#i-want-to-delete-local-branches-that-were-deleted-upstream)
    - [I accidentally deleted my branch](#i-accidentally-deleted-my-branch)
    - [I want to delete or remove my last commit](#i-want-to-delete-or-remove-my-last-commit)
    - [Delete/remove arbitrary commit](#deleteremove-arbitrary-commit)
    - [Delete tag](#delete-tag)
  - [Deleted Patch](#deleted-patch)
  - [Check if all commits on a branch are merged](#check-if-all-commits-on-a-branch-are-merged)
  - [I've no idea what I did wrong](#ive-no-idea-what-i-did-wrong)
- [Other Resources](#other-resources)
  - [Books](#books)
  - [Tutorials](#tutorials)
  - [Scripts & Tools](#scripts-&-tools)
  - [GUI Clients](#gui-clients)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<a name="amend"></a>
## I wrote the wrong thing in a commit message

```sh
git commit --amend
```

## I need to add staged changes to the previous commit

```
(my-branch*)$ git commit --amend

```

<a name="force-push"></a>
### I tried to push my amended commit to a remote, but I got an error message

```sh
To https://github.com/yourusername/repo.git
! [rejected]        mybranch -> mybranch (non-fast-forward)
error: failed to push some refs to 'https://github.com/tanay1337/webmaker.org.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

Note that, as with rebasing (see below), amending **replaces the old commit with a new one**, so you must force push (`-f`) your changes if you have already pushed the pre-amended commit to your remote. Be careful when you do this &ndash; *always* make sure you specify a branch!

```sh
(mybranch) $ git push origin mybranch -f
```

In general, **avoid force pushing**. It is best to create and push a new commit rather than force-pushing the amended commit as it has will cause conflicts in the source history for any other developer who has interacted with the branch in question or any child branches.

<a name="force-push-rebase"></a>
### I rebased, but I don't want to force push.

Unfortunately, you have to force push, if you want those changes to be reflected on the remote branch. This is because you have fast forwarded your commit, and changed git history. The remote branch won't accept changes unless you force push. This is one of the main reasons many people use a merge workflow, instead of a rebasing workflow - large teams can get into trouble with developers force pushing. Use this with caution. A safer way to use rebase is not to reflect your changes on the remote branch at all, and instead to do the following:

```sh
git checkout branch
git rebase -i master
git checkout master
git merge --ff-only branch
```

For more, see [this SO thread](http://stackoverflow.com/questions/11058312/how-can-i-use-git-rebase-without-requiring-a-forced-push).

<a name="interactive-rebase"></a>
## I need to combine commits

You need to do something called an interactive rebase.

If you are working in a branch that is/will become a pull-request against `master`, you can rebase against your `master` branch. Make sure the master branch is up to date, then:

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
### Possible issues with merging
#### Safe merging strategy:
`--no-commit` performs the merge but pretends the merge failed and does not autocommit, giving the user a chance to inspect and further tweak the merge result before committing. `no-ff` maintains evidence that a feature branch once existed, keeping project history consistent.

```sh
(master)$ git merge --no-ff --no-commit featurebranch
```
#### I need to merge a branch into a single commit
```sh
(master)$ git merge --squash featurebranch
```

<a name="rebase-unpushed-commits"></a>
#### I want to combine only unpushed commits

Sometimes you have several work in progress commits that you want to combine before you push them upstream. You don't want to accidentally combine any commits that have already been pushed upstream because someone else may have already made commits that reference them.

```
(master)$ git rebase -i @{u}
```

This will do an interactive rebase that lists only the commits that you haven't already pushed, so it will be safe to reorder/fix/squash anything in the list.


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

Sometimes these merges are complicated and you should use a visual diff editor:
```sh
(master*)$ git mergetool -t opendiff
```

After you have resolved all conflicts and tested your code, `git add` the files you have changed, and then continue the rebase with `git rebase --continue`

```
(my-branch)$ git add README.md
(my-branch)$ git rebase --continue
```

If at any time you want to stop the entire rebase and go back to the original state of your branch, you can do so:
```
(my-branch)$ git rebase --abort
```

<a name="commit-wrong-author"></a>
## I committed with the wrong name and email configured

If it's a single commit, amend it

```
$ git commit --amend --author "New Authorname <authoremail@mydomain.com>"
```

If you need to change all of history, see the man page for 'git filter-branch'

<a name="commit-wrong-branch"></a>
## I committed to master instead of a new branch

Create the new branch while remaining on master:

```
(master)$ git checkout -b new-branch
(new-branch)$ git checkout master
(master)$
```

Reset the branch master to the previous commit:

```sh
(master)$ git reset --hard HEAD^
```

`HEAD^` is short for `HEAD^1`. You can reset further through the generations by specifying which `HEAD` to set to.

Alternatively, if you don't want to use `HEAD^`, find out what the commit hash you want to set your master branch to (`git log` should do the trick). Then reset to that hash. `git push` will make sure that this change is reflected on your remote.

For example, if the hash of the commit that your master branch is supposed to be at is `a13b85e`:

```sh
(master)$ git reset --hard a13b85e
HEAD is now at a13b85e
```

Checkout the new branch to continue working:

```sh
(master)$ git checkout new-branch
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

<a name="commit-partial-new-file"></a>
## I want to add part of a new file, but not the whole file

Normally, if you want to stage part of a file, you run this:

```sh
$ git add --patch filename.x
```

`-p` will work for short. This will open interactive mode. You would be able to use the `s` option to split the commit - however, if the file is new, you will not have this option. To add a new file, do this:

```sh
git add -N filename.x
```

Then, you will need to use the `e` option to manually choose which lines to add. Running `git diff --cached` will show you which lines you have staged compared to which are still saved locally.

<a name="adding-command-aliases"></a>
## I want to add aliases for some git commands

On OS X and Linux, your git configuration file is stored in ```~/.gitconfig```.  I've added some example aliases I use as shortcuts (and some of my common typos) in the ```[aliases]``` section as shown below:

```
[aliases]
    a = add
    amend = --amend
    c = commit
    ca = commit --amend
    ci = commit -a
    co = checkout
    d = diff
    dc = diff --changed
    ds = diff --staged
    f = fetch
    loll = log --graph --decorate --pretty=oneline --abbrev-commit
    m = merge
    one = log --pretty=oneline
    outstanding = rebase -i @{u}
    s = status
    unpushed = log @{u}
    wc = whatchanged
    wip = rebase -i @{u}
    zap = fetch -p
```

<a name="pull-wrong-branch"></a>
## I pulled from/into the wrong branch

This is another chance to use `git reflog` to see where your HEAD pointed before the bad pull.

```
(master)$ git reflog
ab7555f HEAD@{0}: pull origin wrong-branch: Fast-forward
c5bc55a HEAD@{1}: checkout: checkout message goes here
```

Simply reset your branch back to the desired commit:

```
git reset --hard c5bc55a
```

Done.

<a href="discard-local-commits"></a>
## I want to discard local commits so my branch is the same as one on the server

Confirm that you haven't pushed your changes to the server.

`git status` should show how many commits you are ahead of origin:

```sh
(bug24)$ git status
# On branch bug24
# Your branch is ahead of 'origin/bug24' by 2 commits.
#   (use "git push" to publish your local commits)
#
```

One way of reseting to match origin (to have the same as what is on the remote) is to do this:

```sh
(master)$ git reset --hard origin/bug24
```


<a href="discard-local-uncommited-changes"></a>
## I want to discard my local, uncommitted changes

If you want to only reset to some commit between origin and your local, you can do this:

```sh
# one commit
(bug24)$ git reset --hard HEAD^
# two commits
(bug24)$ git reset --hard HEAD^^
# four commits
(bug24)$ git reset --hard HEAD~4
# or
(master)$ git checkout -f
```

<a href="undo-git-reset-hard"></a>
## I accidentally did a hard reset, and I want my changes back

If you accidentally do `git reset --hard`, you can normally still get your commit back, as git keeps a log of everything for a few days.

```sh
$(master) git reflog
```

You'll see a list of your past commits, and a commit for the reset. Choose the SHA of the commit you want to return to, and reset again:

```sh
$(master) git reset --hard SHA1234
```

And you should be good to go.

<a href="move-unstaged-edits-to-new-branch"></a>
## I want to move my unstaged edits to a new branch

```sh
$ git checkout -b new-branch
```

<a href="move-unstaged-edits-to-old-branch"></a>
## I want to move my unstaged edits to a different, existing branch

```sh
$ git stash
$ git checkout branch2
$ git stash pop
```

<a name="diff-last"></a>
## What did I just do?

Let's say that you just blindly committed changes with `git commit -a` and you're not sure what the actual content of the commit you just made was. You can check the difference between your current HEAD and what your HEAD just was with:

```
(master)$ git diff HEAD@{1} HEAD
```

<a href="stage-in-two-commits"></a>
## I want to add changes in one file to two different commits

`git add` will add the entire file to a commit. `git add -p` will allow to interactively select which changes you want to add.

<a href="remove-from-git"></a>
## I want to remove a file from git but keep the file

```sh
(master)$ git rm --cached log.txt
```

<a href="i-want-to-change-a-file-names-capitalization-without-changing-the-contents-of-the-file"></a>
## I want to change a file name's capitalization, without changing the contents of the file.

```sh
(master)$ git mv --force myfile MyFile
```

<a name="clone-submodules"></a>
## Clone all submodules

```sh
git clone --recursive git://github.com/foo/bar.git
# If already cloned:
git submodule update --init --recursive
```

<a name="deleting"></a>
## Deleting Objects

<a name="delete-stale-local-branches">
### I want to delete local branches that were deleted upstream
Once you merge a pull request on github, it gives you the option to delete the merged branch in your fork. If you aren't planning to keep working on the branch, it's cleaner to delete the local copies of the branch so you don't end up cluttering up your working checkout with a lot of stale branches.

```bash
$ git fetch -p
```

<a name='restore-a-deleted-branch'>
### I accidentally deleted my branch

If you're regularly pushing to remote, you should be safe most of the time. But still sometimes you may end up deleting your branches. Let's say we create a branch and create a new file:

```
(master)$ git checkout -b branch-1
(branch-1)$ git branch
(branch-1)$ touch foo.txt
(branch-1)$ ls
README.md foo.txt
```

Let's add it and commit.

```
(branch-1)$ git add .
(branch-1)$ git commit -m 'foo.txt added'
(branch-1)$ foo.txt added
 1 files changed, 1 insertions(+)
 create mode 100644 foo.txt
(branch-1)$ git log

commit 4e3cd85a670ced7cc17a2b5d8d3d809ac88d5012
Author: siemiatj <kuba@saucelabs.com>
Date:   Wed Jul 30 00:34:10 2014 +0200

    foo.txt added

commit 69204cdf0acbab201619d95ad8295928e7f411d5
Author: Kate Hudson <k88hudson@gmail.com>
Date:   Tue Jul 29 13:14:46 2014 -0400

    Fixes #6: Force pushing after amending commits
```

Now we're switching back to master and 'accidentaly' removing our branch.

```
(branch-1)$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.
(master)$ git branch -D branch-1
Deleted branch branch-1 (was 4e3cd85).
(master)$ echo oh noes, deleted my branch!
oh noes, deleted my branch!
```

At this point you should get familiar with 'reflog', an upgraded logger. It stores the history of all the action in the repo.

```
(master)$ git reflog
69204cd HEAD@{0}: checkout: moving from branch-1 to master
4e3cd85 HEAD@{1}: commit: foo.txt added
69204cd HEAD@{2}: checkout: moving from master to branch-1
```

As you can see we have commit hash from our deleted branch. Let's see if we can restore our deleted branch.

```
(master)$ git checkout -b branch-1-help
Switched to a new branch 'branch-1-help'
(branch-1-help)$ git reset --hard 4e3cd85
HEAD is now at 4e3cd85 foo.txt added
(branch-1-help)$ ls
README.md foo.txt
```

Voila! We got our removed file back. Git reflog is also useful when rebasing goes terribly wrong.

<a name="delete-pushed-commit"></a>
### I want to delete or remove my last commit

If you need to delete pushed commits, you can use the following. However, it will irreversabily change your history, and mess up the history of anyone else who had already pulled from the repository. In short, if you're not sure, you should never do this, ever.

```sh
git reset HEAD^ --hard
git push -f [remote] [branch]
```

If you haven't pushed, to reset Git to the state it was in before you made your last commit (while keeping your staged changes):

```
(my-branch*)$ git reset --soft HEAD@{1}

```

This only works if you haven't pushed. If you have pushed, the only truly safe thing to do is `git revert SHAofBadCommit`. That will create a new commit that undoes all the previous commit's changes. Or, if the branched you pushed to is rebase-safe (ie. other devs aren't expected to pull from it), you can just use `git push -f`. For more, see [the above section](#deleteremove-last-pushed-commit).

<a name="delete-any-commit"></a>
### Delete/remove arbitrary commit

The same warning applies as above. Never do this if possible.

```sh
git rebase --onto SHA1_OF_BAD_COMMIT^ SHA1_OF_BAD_COMMIT
git push -f [remote] [branch]
```

<a name="delete-tag"></a>
### Delete tag

```sh
git tag -d <tag_name>
git push <remote> :refs/tags/<tag_name>
```

<a name="deleted-patch"></a>
## Deleted Patch

If someone has sent you a pull request on GitHub, but then deleted their original fork, you will be unable to clone their commits or to use `git am`. In such cases, it is best to manually look at their commits and copy them into a new branch on your local. Then, commit.

After commiting, change the author of the previous commit. To do this, see how to [change author](#commit-wrong-author). Then, apply whatever changes needed on to, and make a new pull request.

<a name="check-if-all-commits-on-a-branch-are-merged"></a>
## Check if all commits on a branch are merged

To check if all commits on a branch are merged into another branch, you should diff between the heads (or any commits) of those branches:

```sh
(master)$ git log --graph --left-right --cherry-pick --oneline HEAD...feature/120-on-scroll
```

This will tell you if any commits are in one but not the other, and will give you a list of any nonshared between the branches. Another option is to do this:

```sh
(master)$ git log master ^feature/120-on-scroll --no-merges
```

<a href="#ive-no-idea-what-i-did-wrong"></a>
## I've no idea what I did wrong

So, you're screwed - you `reset` something, or you merged the wrong branch, or you force pushed and now you can't find your commits. You know, at some point, you were doing alright, and you want to go back to some state you were at.

This is what `git reflog` is for. `reflog` keeps track of any changes to the tip of a branch, even if that tip isn't referenced by a branch or a tag. Basically, every time HEAD changes, a new entry is added to the reflog. This only works for local repositories, sadly, and it only tracks movements (not changes to a file that weren't recorded anywhere, for instance).

```sh
(master)$ git reflog
0a2e358 HEAD@{0}: reset: moving to HEAD~2
0254ea7 HEAD@{1}: checkout: moving from 2.2 to master
c10f740 HEAD@{2}: checkout: moving from master to 2.2
```

The reflog above shows a checkout from master to the 2.2 branch and back. From there, there's a hard reset to an older commit. The latest activity is represented at the top labeled `HEAD@{0}`.

If it turns out that you accidentially moved back, the reflog will contain the commit master pointed to (0254ea7) before you accidentially dropped 2 commits.

```sh
$ git reset --hard 0254ea7
```

Using git reset it is then possible to change master back to the commit it was before. This provides a safety net in case history was accidentially changed.

(copied and edited from [Source](https://www.atlassian.com/git/tutorials/rewriting-history/git-reflog)).


# Other Resources

## Books

* [Pro Git](https://git-scm.com/book/en/v2) - Scott Chacon's excellent git book

## Tutorials

* [Getting solid at Git rebase vs. merge](https://medium.com/@porteneuve/getting-solid-at-git-rebase-vs-merge-4fa1a48c53aa)
* [git-workflow](https://github.com/asmeurer/git-workflow) - [Aaron Meurer](https://github.com/asmeurer)'s howto on using git to contribute to open source repositories
* [GitHub as a workflow](http://hugogiraudel.com/2015/08/13/github-as-a-workflow/) - An interesting take on using GitHub as a workflow, particularly with empty PRs

## Scripts & Tools

* [firstaidgit.io](http://firstaidgit.io/) A searchable selection of the most frequently asked Git questions
* [git-extra-commands](https://github.com/unixorn/git-extra-commands) - a collection of useful extra git scripts
* [git-extras](https://github.com/tj/git-extras) - GIT utilities -- repo summary, repl, changelog population, author commit percentages and more
* [git-tips](https://github.com/git-tips/tips) - Small git tips

## GUI Clients
* [git-cola](https://git-cola.github.io/) - another git client for Windows and OS X
* [gitx-dev](https://rowanj.github.io/gitx/) - another graphical git client for OS X
* [Source Tree](https://www.sourcetreeapp.com/) - a free graphical git client for Windows and OS X
* [Tower](http://www.git-tower.com/) - graphical git client for OS X (paid)

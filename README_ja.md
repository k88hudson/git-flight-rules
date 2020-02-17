# Flight rules for Git

🌍
*[English](README.md) ∙ [Español](README_es.md)  ∙  [Русский](README_ru.md) ∙ [简体中文](README_zh-CN.md)∙ [한국어](README_kr.md)  ∙  [Tiếng Việt](README_vi.md) ∙ [Français](README_fr.md)*

#### What are "flight rules"?

A guide for astronauts (now, programmers using Git) about what to do when things go wrong.

>  *Flight Rules* are the hard-earned body of knowledge recorded in manuals that list, step-by-step, what to do if X occurs, and why. Essentially, they are extremely detailed, scenario-specific standard operating procedures. [...]

> NASA has been capturing our missteps, disasters and solutions since the early 1960s, when Mercury-era ground teams first started gathering "lessons learned" into a compendium that now lists thousands of problematic situations, from engine failure to busted hatch handles to computer glitches, and their solutions.

&mdash; Chris Hadfield, *An Astronaut's Guide to Life*.

#### Conventions for this document

For clarity's sake all examples in this document use a customized bash prompt in order to indicate the current branch and whether or not there are staged changes. The branch is enclosed in parentheses, and a `*` next to the branch name indicates staged changes.

All commands should work for at least git version 2.13.0. See the [git website](https://www.git-scm.com/) to update your local git version.

[![Join the chat at https://gitter.im/k88hudson/git-flight-rules](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/k88hudson/git-flight-rules?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

  - [Repositories](#repositories)
    - [I want to start a local repository](#i-want-to-start-a-local-repository)
    - [I want to clone a remote repository](#i-want-to-clone-a-remote-repository)
    - [I set the wrong remote repository](#i-set-the-wrong-remote-repository)
    - [I want to add code to someone else's repository](#i-want-to-add-code-to-someone-elses-repository)
      - [Suggesting code via pull requests](#suggesting-code-via-pull-requests)
      - [I need to update my fork with latest updates from the original repository](#i-need-to-update-my-fork-with-latest-updates-from-the-original-repository)
  - [Editing Commits](#editing-commits)
    - [What did I just commit?](#what-did-i-just-commit)
    - [I wrote the wrong thing in a commit message](#i-wrote-the-wrong-thing-in-a-commit-message)
    - [I committed with the wrong name and email configured](#i-committed-with-the-wrong-name-and-email-configured)
    - [I want to remove a file from the previous commit](#i-want-to-remove-a-file-from-the-previous-commit)
    - [I want to delete or remove my last commit](#i-want-to-delete-or-remove-my-last-commit)
    - [Delete/remove arbitrary commit](#deleteremove-arbitrary-commit)
    - [I tried to push my amended commit to a remote, but I got an error message](#i-tried-to-push-my-amended-commit-to-a-remote-but-i-got-an-error-message)
    - [I accidentally did a hard reset, and I want my changes back](#i-accidentally-did-a-hard-reset-and-i-want-my-changes-back)
    - [I accidentally committed and pushed a merge](#i-accidentally-committed-and-pushed-a-merge)
    - [I accidentally committed and pushed files containing sensitive data](#i-accidentally-committed-and-pushed-files-containing-sensitive-data)
    - [I want to remove a large file from ever existing in repo history](#i-want-to-remove-a-large-file-from-ever-existing-in-repo-history)
      - [Recommended Technique: Use third-party bfg](#recommended-technique-use-third-party-bfg)
      - [Built-in Technique: Use git-filter-branch](#built-in-technique-use-git-filter-branch)
      - [Final Step: Pushing your changed repo history](#final-step-pushing-your-changed-repo-history)
    - [I need to change the content of a commit which is not my last](#i-need-to-change-the-content-of-a-commit-which-is-not-my-last)
  - [Staging](#staging)
    - [I want to stage all tracked files and leave untracked files](#i-want-to-stage-all-tracked-files-and-leave-untracked-files)
      - [To stage part of tracked files](#to-stage-part-of-tracked-files)
    - [I need to add staged changes to the previous commit](#i-need-to-add-staged-changes-to-the-previous-commit)
    - [I want to stage part of a new file, but not the whole file](#i-want-to-stage-part-of-a-new-file-but-not-the-whole-file)
    - [I want to add changes in one file to two different commits](#i-want-to-add-changes-in-one-file-to-two-different-commits)
    - [I staged too many edits, and I want to break them out into a separate commit](#i-staged-too-many-edits-and-i-want-to-break-them-out-into-a-separate-commit)
    - [I want to stage my unstaged edits, and unstage my staged edits](#i-want-to-stage-my-unstaged-edits-and-unstage-my-staged-edits)
  - [Unstaged Edits](#unstaged-edits)
    - [I want to move my unstaged edits to a new branch](#i-want-to-move-my-unstaged-edits-to-a-new-branch)
    - [I want to move my unstaged edits to a different, existing branch](#i-want-to-move-my-unstaged-edits-to-a-different-existing-branch)
    - [I want to discard my local uncommitted changes (staged and unstaged)](#i-want-to-discard-my-local-uncommitted-changes-staged-and-unstaged)
    - [I want to discard specific unstaged changes](#i-want-to-discard-specific-unstaged-changes)
    - [I want to discard specific unstaged files](#i-want-to-discard-specific-unstaged-files)
    - [I want to discard only my unstaged local changes](#i-want-to-discard-only-my-unstaged-local-changes)
    - [I want to discard all of my untracked files](#i-want-to-discard-all-of-my-untracked-files)
    - [I want to unstage a specific staged file](#i-want-to-unstage-a-specific-staged-file)
  - [Branches](#branches)
    - [I want to list all branches](#i-want-to-list-all-branches)
    - [Create a branch from a commit](#create-a-branch-from-a-commit)
    - [I pulled from/into the wrong branch](#i-pulled-frominto-the-wrong-branch)
    - [I want to discard local commits so my branch is the same as one on the server](#i-want-to-discard-local-commits-so-my-branch-is-the-same-as-one-on-the-server)
    - [I committed to master instead of a new branch](#i-committed-to-master-instead-of-a-new-branch)
    - [I want to keep the whole file from another ref-ish](#i-want-to-keep-the-whole-file-from-another-ref-ish)
    - [I made several commits on a single branch that should be on different branches](#i-made-several-commits-on-a-single-branch-that-should-be-on-different-branches)
    - [I want to delete local branches that were deleted upstream](#i-want-to-delete-local-branches-that-were-deleted-upstream)
    - [I accidentally deleted my branch](#i-accidentally-deleted-my-branch)
    - [I want to delete a branch](#i-want-to-delete-a-branch)
    - [I want to delete multiple branches](#i-want-to-delete-multiple-branches)
    - [I want to rename a branch](#i-want-to-rename-a-branch)
    - [I want to checkout to a remote branch that someone else is working on](#i-want-to-checkout-to-a-remote-branch-that-someone-else-is-working-on)
    - [I want to create a new remote branch from current local one](#i-want-to-create-a-new-remote-branch-from-current-local-one)
    - [I want to set a remote branch as the upstream for a local branch](#i-want-to-set-a-remote-branch-as-the-upstream-for-a-local-branch)
    - [I want to set my HEAD to track the default remote branch](#i-want-to-set-my-head-to-track-the-default-remote-branch)
    - [I made changes on the wrong branch](#i-made-changes-on-the-wrong-branch)
  - [Rebasing and Merging](#rebasing-and-merging)
    - [I want to undo rebase/merge](#i-want-to-undo-rebasemerge)
    - [I rebased, but I don't want to force push](#i-rebased-but-i-dont-want-to-force-push)
    - [I need to combine commits](#i-need-to-combine-commits)
      - [Safe merging strategy](#safe-merging-strategy)
      - [I need to merge a branch into a single commit](#i-need-to-merge-a-branch-into-a-single-commit)
      - [I want to combine only unpushed commits](#i-want-to-combine-only-unpushed-commits)
      - [I need to abort the merge](#i-need-to-abort-the-merge)
    - [I need to update the parent commit of my branch](#i-need-to-update-the-parent-commit-of-my-branch)
    - [Check if all commits on a branch are merged](#check-if-all-commits-on-a-branch-are-merged)
    - [Possible issues with interactive rebases](#possible-issues-with-interactive-rebases)
      - [The rebase editing screen says 'noop'](#the-rebase-editing-screen-says-noop)
      - [There were conflicts](#there-were-conflicts)
  - [Stash](#stash)
    - [Stash all edits](#stash-all-edits)
    - [Stash specific files](#stash-specific-files)
    - [Stash with message](#stash-with-message)
    - [Apply a specific stash from list](#apply-a-specific-stash-from-list)
    - [Stash while keeping unstaged edits](#stash-while-keeping-unstaged-edits)
  - [Finding](#finding)
    - [I want to find a string in any commit](#i-want-to-find-a-string-in-any-commit)
    - [I want to find by author/committer](#i-want-to-find-by-authorcommitter)
    - [I want to list commits containing specific files](#i-want-to-list-commits-containing-specific-files)
    - [I want to view the commit history for a specific function](#i-want-to-view-the-commit-history-for-a-specific-function)
    - [Find a tag where a commit is referenced](#find-a-tag-where-a-commit-is-referenced)
  - [Submodules](#submodules)
    - [Clone all submodules](#clone-all-submodules)
    - [Remove a submodule](#remove-a-submodule)
  - [Miscellaneous Objects](#miscellaneous-objects)
    - [Copy a folder or file from one branch to another](#copy-a-folder-or-file-from-one-branch-to-another)
    - [Restore a deleted file](#restore-a-deleted-file)
    - [Delete tag](#delete-tag)
    - [Recover a deleted tag](#recover-a-deleted-tag)
    - [Deleted Patch](#deleted-patch)
    - [Exporting a repository as a Zip file](#exporting-a-repository-as-a-zip-file)
    - [Push a branch and a tag that have the same name](#push-a-branch-and-a-tag-that-have-the-same-name)
  - [Tracking Files](#tracking-files)
    - [I want to change a file name's capitalization, without changing the contents of the file](#i-want-to-change-a-file-names-capitalization-without-changing-the-contents-of-the-file)
    - [I want to overwrite local files when doing a git pull](#i-want-to-overwrite-local-files-when-doing-a-git-pull)
    - [I want to remove a file from Git but keep the file](#i-want-to-remove-a-file-from-git-but-keep-the-file)
    - [I want to revert a file to a specific revision](#i-want-to-revert-a-file-to-a-specific-revision)
    - [I want to list changes of a specific file between commits or branches](#i-want-to-list-changes-of-a-specific-file-between-commits-or-branches)
    - [I want Git to ignore changes to a specific file](#i-want-git-to-ignore-changes-to-a-specific-file)
  - [Debugging with Git](#debugging-with-git)
  - [Configuration](#configuration)
    - [I want to add aliases for some Git commands](#i-want-to-add-aliases-for-some-git-commands)
    - [I want to add an empty directory to my repository](#i-want-to-add-an-empty-directory-to-my-repository)
    - [I want to cache a username and password for a repository](#i-want-to-cache-a-username-and-password-for-a-repository)
    - [I want to make Git ignore permissions and filemode changes](#i-want-to-make-git-ignore-permissions-and-filemode-changes)
    - [I want to set a global user](#i-want-to-set-a-global-user)
    - [I want to add command line coloring for Git](#i-want-to-add-command-line-coloring-for-git)
  - [I've no idea what I did wrong](#ive-no-idea-what-i-did-wrong)
  - [Git Shortcuts](#git-shortcuts)
    - [Git Bash](#git-bash)
    - [PowerShell on Windows](#powershell-on-windows)
- [Other Resources](#other-resources)
  - [Books](#books)
  - [Tutorials](#tutorials)
  - [Scripts and Tools](#scripts-and-tools)
  - [GUI Clients](#gui-clients)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## リポジトリ

### ローカルリポジトリを初期化したい

既存のディレクトリを Git リポジトリとして初期化するには、次を実行します：

```sh
(my-folder) $ git init
```

### リモートリポジトリをクローンしたい

リモートリポジトリをクローン（コピー）したいときは、リポジトリの URL をコピーし、次を実行します：

```sh
$ git clone [url]
```

すると、リモートリポジトリと同名のフォルダにリポジトリの内容が保存されます。
リモートリポジトリのあるサーバに接続できる必要があります。大抵の場合インターネット接続があれば大丈夫です。

リモートリポジトリと異なる名前のフォルダにクローンしたいときは、次のようにします：

```sh
$ git clone [url] name-of-new-folder
```

### 間違ったリモートリポジトリを設定してしまった

問題はいくつかの場合に分けられます。

間違ったリポジトリをクローンしてしまったときは、`git clone` で作ったディレクトリを削除して、正しいリポジトリをクローンし直せばよいです。

間違ったリポジトリを既存のローカルリポジトリの origin に設定してしまったときは、次のように origin の URL を変更しましょう：

```sh
$ git remote set-url origin [url of the actual repo]
```

ほかの問題の場合は、[この StackOverflow トピック](https://stackoverflow.com/questions/2432764/how-to-change-the-uri-url-for-a-remote-git-repository#2432799)を参照してみてください。

### 他の人のリポジトリにコードを書き加えたい

Git では、アクセス権がないと他の人のリポジトリに書き込むことはできません。GitHub は Git リポジトリのホスティングサービスであって Git 自体とは異なるものですが、GitHub でもやはり同様です。しかし、パッチによってコードを提案することができます。GitHub ならフォークとプルリクエストの機能がこれにあたります。

まずはフォークについて説明しましょう。フォークはリポジトリのコピーです。Git 自体の機能ではないものの、GitHub, BitBucket, GitLab やその他のホスティングサービスにはこの機能があり、各サービスの UI を通して実行できます。

#### プルリクエストでコードを提案するには

リポジトリをフォークしたら、ローカルマシンにクローンして編集しましょう。ちょっとした編集なら GitHub 上でもできるでしょうが、この文書は GitHub フライトルールではないので、ローカルで編集する方法を説明します。

```sh
# ssh を使う場合
$ git clone git@github.com:k88hudson/git-flight-rules.git

# https を使う場合
$ git clone https://github.com/k88hudson/git-flight-rules.git
```

できたディレクトリに `cd` で移動し、`git remote` を実行してください。リモートのリストが表示されるはずです。
ただ、おそらく表示されるのは `k88hudson/git-flight-rules` を参照する `origin` だけなので、自分がフォークして作った方のリモートも用意する必要があります。

Git では、自分自身のリポジトリのリモートには `origin`、フォークした元のリポジトリは `upstream` と名付けるのが一般的です。これにならって、まず、リモート `origin` の名前を `upstream` に変更しましょう：

```sh
$ git remote rename origin upstream
```

実は `git remote set-url` でも同じことができますが、時間と手間が余計にかかります。

次に、自分のプロジェクトを参照する新しいリモートを作成します。

```sh
$ git remote add origin git@github.com:YourName/git-flight-rules.git
```

この時点でリモートは二つです：

- `origin` は自分のリポジトリを参照しています。
- `upstream` は元のリポジトリを参照しています。

`origin` は読み取り・書き込みの両方ができ、`upstream` は読み取り専用です。

編集が済んだら、編集内容を（通常はブランチ内から）リモート `origin` にプッシュしましょう。
ブランチ内にいる場合、次のように `--set-upstream` を使うと、次回から同じブランチからプッシュする際にリモートを指定せずに済みます：

```sh
$ (feature/my-feature) git push --set-upstream origin feature/my-feature
```

Git で CLI からプルリクエストを送る方法はありません（[hub](http://github.com/github/hub) のようなツールを使えば別ですが）。
プルリクエストを送りたいときは、GitHub（あるいは他のホスティングサービス）上でプルリクエストを作成してください。元のリポジトリとフォークしたリポジトリを関連付けるのはホスティングサービスが自動的にしてくれます。

プルリクエストの後、コードレビューのフィードバックに対応するのを忘れないようにしましょう。

#### フォークしたリポジトリを、元のリポジトリの最新版に合わせて更新したい

そのうち `upstream` リポジトリが更新され、自分の `origin` にプルしたくなるかもしれません。
自分だけでなく他の人も共同作業していることを忘れないようにしてください。
自分のフィーチャーブランチにいて、これを元のリポジトリに合わせて更新したい場合を想定します。

元のプロジェクトを参照するリモートは設定してありますか？　まだなら今やってしまいましょう。通常はリモートの名前に `upstream` を使います：

```sh
$ (master) git remote add upstream <link-to-original-repository>
# $ (master) git remote add upstream git@github.com:k88hudson/git-flight-rules.git
```

これで `upstream` から最新版をフェッチできるようになりました。

```sh
$ (master) git fetch upstream
$ (master) git merge upstream/master

# コマンド一つでもできる
$ (master) git pull upstream master
```

## コミットの編集

<a name="diff-last"></a>
### 何をコミットしたかわからなくなった

何も考えず `git commit -a` で編集をコミットしてしまい、その内容がわからないとします。
現在の HEAD の最新のコミット内容は次のように表示できます：

```sh
(master)$ git show
```

あるいは：

```sh
$ git log -n1 -p
```

特定のコミットにおけるファイルの中身を見たいときは次のようにします（`<commitid>` は見たいコミット）：

```sh
$ git show <commitid>:filename
```

### コミットメッセージに間違った内容を書いてしまった

コミットメッセージに間違った内容を書いてしまったとします。
コミットがまだプッシュされていない場合は、次のようにして編集内容は変えずにコミットメッセージを編集できます：

```sh
$ git commit --amend --only
```

デフォルトのテキストエディタが開き、コミットメッセージを編集できます。これらを一つのコマンドでいっぺんにやることもできます：

```sh
$ git commit --amend --only -m 'xxxxxxx'
```

既にコミットをプッシュしてしまった場合、コミットを修正して強制プッシュすることはできますが、おすすめしません。

<a name="commit-wrong-author"></a>
### 間違った名前・メールアドレスの設定でコミットしてしまった

コミットが一つだけなら、次のように修正します。

```sh
$ git commit --amend --no-edit --author "New Authorname <authoremail@mydomain.com>"
```

あるいは、名前とメールアドレスを `git config --global author.(name|email)` で正しく設定してから、次のようにします：

```sh
$ git commit --amend --reset-author --no-edit
```

履歴すべてについて変更したい場合は、`git filter-branch` の man ページを参照してください。

### 直前のコミットからファイルを削除したい

直前のコミットから特定のファイルの編集内容を削除するには次のようにします。

```sh
$ git checkout HEAD^ myfile
$ git add myfile
$ git commit --amend --no-edit
```

直前のコミットで新たに追加したファイルを（Git のみから）削除したいときは次の通りです。

```sh
$ git rm --cached myfile
$ git commit --amend --no-edit
```

このコマンドは、パッチに不要なファイルをコミットしてしまい、強制プッシュでリモートのパッチを更新したいときに特に便利です。
オプション `--no-edit` は既にあるコミットメッセージを変更しないようにするためのものです。

<a name="delete-pushed-commit"></a>
### 直前のコミットを削除したい

既にプッシュしたコミットを削除するには次のようにします。
ただし、編集履歴が不可逆的に変更され、リポジトリから変更内容をプルしてしまった他の人の編集履歴は滅茶苦茶になります。
要するに、よくわからない場合は絶対にしないでください。

```sh
$ git reset HEAD^ --hard
$ git push --force-with-lease [remote] [branch]
```

まだコミットをプッシュしていない場合は、次のようにして（ステージされた編集はそのままで）直前のコミットをする前の状態に Git をリセットできます。

```
(my-branch*)$ git reset --soft HEAD@{1}
```

これはプッシュしていない場合にのみ有効な方法です。
プッシュしてしまった場合、本当に安全な方法は `git revert SHAofBadCommit` だけです。
このコマンドは、直前のコミットを取り消すようなコミットを新たに作成します。
プッシュしたブランチがリベースについて安全である場合（つまり、他の開発者がプルすることを想定していない場合）は、`git push --force-with-lease` を使っても大丈夫です。<!--For more, see [the above section](#deleteremove-last-pushed-commit).-->

<a name="delete-any-commit"></a>
### 任意のコミットを削除したい

上で述べたのと同様に、やむを得ない場合以外絶対に行わないでください。

```sh
$ git rebase --onto SHA1_OF_BAD_COMMIT^ SHA1_OF_BAD_COMMIT
$ git push --force-with-lease [remote] [branch]
```

あるいは [対話的 rebase](#interactive-rebase) で削除したいコミットに対応する行を選択して削除します。

<a name="#force-push"></a>
### 修正したコミットをリモートにプッシュしようとしたら、エラーメッセージが出た

```sh
To https://github.com/yourusername/repo.git
! [rejected]        mybranch -> mybranch (non-fast-forward)
error: failed to push some refs to 'https://github.com/tanay1337/webmaker.org.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

amend による修正は、rebase と同様に（後述）、**古いコミットを新たなコミットで置き換えます**。それゆえ、修正前のコミットを既にリモートにプッシュしてしまっている場合は、強制プッシュ (`--force-with-lease`) しなければいけません。
強制プッシュには細心の注意が必要です。*必ず*ブランチを指定するように！

```sh
(my-branch)$ git push origin mybranch --force-with-lease
```

一般論として、**強制プッシュは避けましょう**。修正したコミットを強制プッシュするよりは、新たなコミットを作ってプッシュするのがベストです。
強制プッシュは、対象のブランチやその子ブランチで作業した他の開発者のソース履歴に齟齬をきたしてしまいます。
誰かが同じブランチで作業していて、強制プッシュがその人の編集を上書きしてしまう場合には、`--force-with-lease` も失敗します。

他の誰も同じブランチで作業していないことが*絶対に*確実な場合、あるいはブランチの一部を*無条件で*更新したい場合は `--force` (`-f`) で行うことができますが、これは原則的に避けるべきです。

<a href="undo-git-reset-hard"></a>
### 間違えて hard reset してしまい、元に戻したい

間違えて `git reset --hard` をしてしまった場合でも、大抵はコミットを復元できます。Git は数日間のログを全て残してくれているからです。

注意：これは作業がバックアップされている場合、つまりコミットかスタッシュされている場合のみです。`git reset --hard` はコミットされていない変更を_削除_してしまうので、注意して使ってください。（安全なのは `git reset --keep` を使うことです。）

```sh
(master)$ git reflog
```

過去のコミットとリセットのコミットが表示されるので、復元したいコミットの SHA を選んでリセットします：

```sh
(master)$ git reset --hard SHA1234
```

これで大丈夫です。

<a href="undo-a-commit-merge"></a>
### 間違えてマージをコミットしてプッシュしてしまった

フィーチャーブランチをマージの準備が整う前に間違えてメインのブランチにマージしてしまった場合、マージを取り消すことができます。
ただし落とし穴があります：マージコミットには複数（通常は二つ）の親があります。

次のコマンドを実行します。

```sh
(feature-branch)$ git revert -m 1 <commit>
```

ここでオプション `-m 1` は親 1（マージした先のブランチ）を差し戻す先の親に指定するものです。

注意：親の番号はコミット ID ではありません。マージコミットの行には `Merge: 8e2ce2d 86ac2e7` のように書かれています。親番号はこのコミットにおいて親を指定するための 1 から始まる番号で、最初の番号は 1 番、次は 2 番、のように振られます。

<a href="undo-sensitive-commit-push"></a>
### 間違えて機密情報を含むファイルをコミットしプッシュしてしまった

機密情報やプライベートな情報（パスワードやキー等）を含むデータを誤ってプッシュしてしまった場合、コミットを修正することができます。
ただし、ひとたびデータをコミットしてプッシュしてしまったら、その内容は盗み取られる恐れがあることに留意してください。
以下の手順でパブリックリポジトリやローカルからデータを削除することはできますが、他の誰かが既にプルしてしまったデータを削除することは**不可能です**。
パスワードをコミットしてしまった場合は**直ちに変更してください**。キーをコミットしてしまった場合は**直ちに再生成しましょう**。
誰かが既に機密情報をプルしてしまった可能性がある限り、プッシュしたコミットを修正するだけでは不十分です。

ファイルを編集して機密情報を削除したあと、次を実行します。
```sh
(feature-branch)$ git add edited_file
(feature-branch)$ git commit --amend --no-edit
(feature-branch)$ git push --force-with-lease origin [branch]
```

ファイルごと削除したいがローカルには残しておきたい場合、次を実行します。
```sh
(feature-branch)$ git rm --cached sensitive_file
echo sensitive_file >> .gitignore
(feature-branch)$ git add .gitignore
(feature-branch)$ git commit --amend --no-edit
(feature-branch)$ git push --force-with-lease origin [branch]
```
あるいは、機密情報をローカルの環境変数に保存しておきましょう。

ファイルごと削除した上でローカルからも削除したい場合は、次を実行します。
```sh
(feature-branch)$ git rm sensitive_file
(feature-branch)$ git commit --amend --no-edit
(feature-branch)$ git push --force-with-lease origin [branch]
```

他のコミットを既にしてしまっている場合（つまり、機密情報のコミットが直前のコミットよりも以前である場合）は、リベースする必要があります。

<a href="#i-want-to-remove-a-large-file-from-ever-existing-in-repo-history"></a>
### 大容量のファイルに関する履歴を完全に削除したい

削除したいファイルが機密情報である場合は[機密情報を削除する方法](#i-accidentally-committed-and-pushed-files-containing-sensitive-data)を参照してください。

最近のコミットで大容量のファイルや不要なファイルを削除しても、`.git` フォルダにある Git の履歴には残ので、`git clone` したときに余計なファイルまでダウンロードしてしまうことになります。

Even if you delete a large or unwanted file in a recent commit, it still exists in git history, in your repo's `.git` folder, and will make `git clone` download unneeded files.

ここで説明する手順には強制プッシュを必要とし、リポジトリ履歴を大きく変更してしまいます。リモートで共同作業している人がいる場合は、全員のローカルな編集履歴がプッシュされていることをまず確認しておいてください。

The actions in this part of the guide will require a force push, and rewrite large sections of repo history, so if you are working with remote collaborators, check first that any local work of theirs is pushed.

履歴を書き換えるのには二つの方法があります。ビルトインの `git-filter-branch` と [`bfg-repo-cleaner`](https://rtyley.github.io/bfg-repo-cleaner/) です。
`bfg` はエレガントで性能がよい一方、サードパーティ製のソフトをダウンロードしなければならず、Java も必要です。
ここでは両方の方法を説明します。
最後のステップでは強制プッシュをしますが、リポジトリの履歴の大部分を永久に変更してしまうため、通常の強制プッシュよりもなお特殊な配慮が必要になります。

<!--There are two options for rewriting history, the built-in `git-filter-branch` or [`bfg-repo-cleaner`](https://rtyley.github.io/bfg-repo-cleaner/). `bfg` is significantly cleaner and more performant, but it is a third-party download and requires java. We will describe both alternatives. The final step is to force push your changes, which requires special consideration on top of a regular force push, given that a great deal of repo history will have been permanently changed.-->

#### おすすめの方法：サードパーティ製の bfg を使う

bfg-repo-cleaner を使うには Java が必要です。[ここ](https://rtyley.github.io/bfg-repo-cleaner/)から bfg の jar ファイルをダウンロードしてください。
以下の例では `bfg.jar` を使いますが、ダウンロードしたものには `bfg-1.13.0.jar` のようにバージョン番号がついているかもしれません。

<!--Using bfg-repo-cleaner requires java. Download the bfg jar from the link [here](https://rtyley.github.io/bfg-repo-cleaner/). Our examples will use `bfg.jar`, but your download may have a version number, e.g. `bfg-1.13.0.jar`.-->

特定のファイルを削除する場合は次のようにします。
```sh
(master)$ git rm path/to/filetoremove
(master)$ git commit -m "Commit removing filetoremove"
(master)$ java -jar ~/Downloads/bfg.jar --delete-files filetoremove
```
bfg を使うときは、ファイルがサブディレクトリにあるときもそのままのファイル名を入力することに注意してください。

パターンからファイルを削除することもできます。例えば：
```sh
(master)$ git rm *.jpg
(master)$ git commit -m "Commit removing *.jpg"
(master)$ java -jar ~/Downloads/bfg.jar --delete-files *.jpg
```

bfg は最新のコミットにあるファイルには影響しません。例えば、リポジトリに複数あった大容量の .tga ファイルのうち一部を以前のコミットで削除したとして、bfg を実行しても最新のコミットにあるファイルはそのままです。

なお、コミットでファイル名を変更した場合、例えばもともと `LargeFileFirstName.mp4` だったファイルが後のコミットで `LargeFileSecondName.mp4` に変更されている場合は、`java -jar ~/Downloads/bfg.jar --delete-files LargeFileSecondName.mp4` を実行しても Git の履歴からは削除されません。両方のファイル名それぞれについて `--delete-files` を実行するか、パターンマッチで両方削除してください。

#### ビルトインの方法：git-filter-branch を使う

`git-filter-branch` はややこしくて機能も貧弱ですが、`bfg` のインストールや実行ができなくても使えます。

以下では、`filepattern` を名前やパターン（`*.jpg` など）に置き換えてください。パターンにマッチしたファイルの履歴が全ての履歴とブランチから削除されます。

```sh
(master)$ git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch filepattern' --prune-empty --tag-name-filter cat -- --all
```

何をしているのか：

`--tag-name-filter cat` は煩雑ですが、これが最も簡単に元のタグを新しいコミットにつける `cat` を使った方法です。

`--prune-empty` は現在空のコミットを全て削除します。

#### 最後のステップ: 変更した履歴をプッシュする

ファイルを削除したら、リポジトリのものを壊してしまっていないか慎重に確認してください。
何か壊してしまった場合は、リポジトリを再度クローンしてやり直すのが最も簡単です。
最後のステップとして、必要に応じて Git ガベージコレクションで .git フォルダの容量を最小化してから、強制プッシュします。

```sh
(master)$ git reflog expire --expire=now --all && git gc --prune=now --aggressive
(master)$ git push origin --force --tags
```

リポジトリの履歴をすべて書き換えているので、`git push` の量が膨大すぎて `“The remote end hung up unexpectedly”` というエラーが返るかもしれません。この場合は Git の post buffer を増やしてみます。

```sh
(master)$ git config http.postBuffer 524288000
(master)$ git push --force
```

うまくいかない場合は、コミットを手作業で小分けにしてプッシュします。
プッシュが成功するまで、`<number>` を増やしながら次のコマンドを試してください。

```sh
(master)$ git push -u origin HEAD~<number>:refs/head/master --force
```
プッシュが最初に成功したら、通常の`git push` が 成功するまで `<number>` を徐々に減らしてください。

<a href="i-need-to-change-the-content-of-a-commit-which-is-not-my-last"></a>
### 直近でないコミットの内容を編集したい

複数（たとえば三件）のコミットを行ったあと、文脈的に最初のコミットに属する作業をし忘れたことに気づいたとします。
この作業を新たなコミットとして行えばコードベースは綺麗に保てるものの、コミットがアトミックでなくなってしまう（同じ文脈の作業が同じコミットに属さない）ので、この状況は厄介です。
し忘れた作業が属するべきコミットを編集し、作業を取り入れつつ、その後のコミットには手をつけないようにしたいとき、`git rebase` が役に立ちます。

<!--Consider you created some (e.g. three) commits and later realize you missed doing something that belongs contextually into the first of those commits. 
This bothers you, because if you'd create a new commit containing those changes, you'd have a clean code base, but your commits weren't atomic (i.e. changes that belonged to each other weren't in the same commit). In such a situation you may want to change the commit where these changes belong to, include them and have the following commits unaltered. In such a case, `git rebase` might save you.-->

最後から三件目のコミットを編集したいとします。
<!--Consider a situation where you want to change the third last commit you made.-->

```sh
(your-branch)$ git rebase -i HEAD~4
```

上のコマンドで対話的リベースモードに入り、直近三件のコミットを編集できるようになります。
テキストエディタが開き、次のような内容が表示されます。

```sh
pick 9e1d264 The third last commit
pick 4b6e19a The second to last commit
pick f4037ec The last commit
```

これを次のように編集します。

```sh
edit 9e1d264 The third last commit
pick 4b6e19a The second to last commit
pick f4037ec The last commit
```

これは最後から三件目のコミットを編集しつつ、他の二件はそのままにするよう `rebase` に指示しています。
テキストエディタを保存して終了したら、Git がリベースを始めます。指定したコミットで止まり、そのコミットを編集できるようになります。
これで最初にコミットしたときにし忘れた作業を適用できます。編集とステージによって適用しましょう。
その後、次を実行します。

<!--This tells rebase that you want to edit your third last commit and keep the other two unaltered. Then you'll save (and close) the editor. Git will then start to rebase. It stops on the commit you want to alter, giving you the chance to edit that commit. Now you can apply the changes which you missed applying when you initially committed that commit. You do so by editing and staging them. Afterwards you'll run-->

```sh
(your-branch)$ git commit --amend
```

これはコミットメッセージはそのままでコミットを作り直すよう Git に指示しています。
これで面倒な作業は終わりです。

<!--which tells Git to recreate the commit, but to leave the commit message unedited. Having done that, the hard part is solved.-->>

```sh
(your-branch)$ git rebase --continue
```

あとは上を実行すれば完了です。

<!--will do the rest of the work for you.-->

## ステージング

<a href="#i-want-to-stage-all-tracked-files-and-leave-untracked-files"></a>

### バージョン管理されているファイルを全部ステージしたい

```sh
$ git add -u
```

#### バージョン管理されているファイルの一部をステージするには

```sh
# 拡張子が .txt のファイルをステージする
$ git add -u *.txt

# src ディレクトリ内の全ファイルをステージする
$ git add -u src/
```

<a href="#i-need-to-add-staged-changes-to-the-previous-commit"></a>
### ステージされた編集内容を直前のコミットに追加したい

```sh
(my-branch*)$ git commit --amend
```

コミットメッセージを変更したくないときは、コミットメッセージを再利用するよう Git に指示します：

```sh
(my-branch*)$ git commit --amend -C HEAD
```

<a name="commit-partial-new-file"></a>
### 新しいファイルの全部ではなく一部をステージしたい

通常、ファイルの一部をステージするには次を実行します：

```sh
$ git add --patch filename.x
```

短縮形は `-p` です。これにより対話モードが開きます。
オプション `s` をつけるとコミットを分割 (split) できます。ただし、新しく作ったファイルの場合このオプションは使えません。
ファイルを新たに追加するには、次を実行します：

```sh
$ git add -N filename.x
```

オプション `e` を使うと、どの行を追加するか手動で選択することができます。
`git diff --cached` あるいは `git diff --staged` を実行すると、ステージした行がローカルに保存されたものと比較して表示されます。

<a href="stage-in-two-commits"></a>
### 一つのファイルに加えた編集を二つの異なるコミットに追加したい

`git add` はファイル全体をコミットに追加します。
`git add -p` を使うと、どの編集内容を追加するか対話的に選択できます。

<a href="selective-unstage-edits"></a>
### ステージした編集内容が多すぎるので、いくつかのコミットに分割したい

`git reset -p` を実行すると、パッチモードのリセットダイアログが開きます。
`git add -p` と似ていますが、"yes" がステージを取り消して次のコミットから除去することを意味する点で異なります。

<a href="unstaging-edits-and-staging-the-unstaged"></a>
### ステージされていない編集内容をステージし、ステージされた編集内容のステージを取り消したい

通常は、ステージされたファイルのステージングを一旦全部取り消したあと、コミットしたいものをピックするべきです。
ステージされている編集とされていない編集を切り替えたいときは、ステージされた編集を記録しておく仮のコミットを作成し、ステージされていないファイルをステージしてスタッシュします。それから仮のコミットをリセットして、スタッシュを pop します。

```sh
$ git commit -m "WIP"
$ git add . # バージョン管理されていないファイルも追加される
$ git stash
$ git reset HEAD^
$ git stash pop --index 0
```

注意 1：ここで `pop` を使うのは、操作を複数回行っても結果がなるべく変わらないようにするためです。
注意 2：ここで `--index` を指定しないと、ステージされたファイルはステージされていない扱いになります（理由は[このリンク](https://stackoverflow.com/questions/31595873/git-stash-with-staged-files-does-stash-convert-staged-files-to-unstaged?answertab=active#tab-top)を参照してください）。

## ステージされていない編集

<a href="move-unstaged-edits-to-new-branch"></a>
### ステージされていない編集内容を新しいブランチに移したい

```sh
$ git checkout -b my-branch
```

<a href="move-unstaged-edits-to-old-branch"></a>
### ステージされていない編集内容を別の既存のブランチに移したい

```sh
$ git stash
$ git checkout my-branch
$ git stash pop
```

<a href="i-want-to-discard-my-local-uncommitted-changes"></a>
### コミットされていないローカルの編集内容を破棄したい（ステージされている場合・されていない場合）

ステージされている編集内容とステージされていない編集内容の両方を全て破棄したいときは、次のようにします：

```sh
(my-branch)$ git reset --hard
# または
(master)$ git checkout -f
```

これは `git add` でステージした全ファイルのステージングを取り消します：

```sh
$ git reset
```

これはコミットされていないローカルの編集内容を全て差し戻します（リポジトリのルートで実行する必要があります）：

```sh
$ git checkout .
```

特定のファイルやディレクトリについてコミットされていない編集を差し戻すこともできます：

```sh
$ git checkout [some_dir|file.txt]
```

コミットされていない全編集内容を差し戻すのには次の方法もあります（コマンドが長いですが、任意のサブディレクトリから実行できます）：

```sh
$ git reset --hard HEAD
```

次を実行するとローカルのバージョン管理されていないファイルが全て削除されます。つまり Git によって管理されているファイルだけ残ります：

```sh
$ git clean -fd
```

Git に無視されるファイルも全て取り除くには `-x` を指定します。

### ステージされていない特定の編集内容を破棄したい

ワークツリー上の編集内容の全部ではなく一部だけを破棄したい場合です。

残したい編集内容だけを残し、残したくない編集をチェックアウトします。

```sh
$ git checkout -p
# 破棄したいコードすべてについて y と答える
```

もう一つの方法は `stash` を使います。残したい編集内容をスタッシュし、ワークツリーをリセットして、残したい編集内容を適用します。

```sh
$ git stash -p
# 残したいコードを全て選ぶ
$ git reset --hard
$ git stash pop
```

あるいは、残したくない編集内容をスタッシュして、スタッシュ内容を破棄してもよいです。

```sh
$ git stash -p
# 残したくないコードを全て選ぶ
$ git stash drop
```

### ステージされていない特定のファイルを破棄したい

ワークツリーの特定のファイル一つを取り除きたいときです。

```sh
$ git checkout myFile
```

ワークツリー上の複数のファイルを破棄したいときは、それらを列挙します。

```sh
$ git checkout myFirstFile mySecondFile
```

### ステージされていないローカルな編集内容だけを破棄したい

コミットもステージもされていないローカルの編集内容を全て破棄したい場合は、次を実行します。

```sh
$ git checkout .
```

<a href="i-want-to-discard-all-my-untracked-files"></a>
### バージョン管理されていないファイルを全て破棄したい

バージョン管理されていないファイルを全て破棄したいときは、次を実行します。

```sh
$ git clean -f
```

<a href="I-want-to-unstage-specific-staged-file"></a>
### 特定のステージされたファイルのステージングを取り消したい

間違えてステージされてしまったファイルが一つまたは複数あって、まだコミットされていない場合です。
そのステージングを取り消すには次のようにします：

```sh
$ git reset -- <filename>
```

ファイルのステージングが取り消され、バージョン管理されていないものとみなされます。

## ブランチ

### 全ブランチの一覧を表示したい

ローカルブランチの一覧を表示する

```sh
$ git branch
```

リモートブランチの一覧を表示する

```sh
$ git branch -r
```

ローカルとリモート両方のブランチの一覧を表示する

```sh
$ git branch -a
```

<a name="create-branch-from-commit"></a>
### コミットからブランチを作成する

```sh
$ git checkout -b <branch> <SHA1_OF_COMMIT>
```

<a name="pull-wrong-branch"></a>
### 間違ったブランチから、あるいは間違ったブランチにプルしてしまった

再び `git reflog` を使う場面です。間違ったプルの以前に HEAD が参照していたものを表示します。

```sh
(master)$ git reflog
ab7555f HEAD@{0}: pull origin wrong-branch: Fast-forward
c5bc55a HEAD@{1}: checkout: checkout message goes here
```

単にブランチを適切なコミットにリセットするだけです：

```sh
$ git reset --hard c5bc55a
```

これで完了です。

<a href="discard-local-commits"></a>
### ローカルのコミットを破棄して、ブランチをサーバ上の状態と同じにしたい

サーバに編集内容をプッシュしていないことを確認してください。

`git status` を実行すると、自分が origin に対して何コミット分作業を進めたのか表示されます。

```sh
(my-branch)$ git status
# On branch my-branch
# Your branch is ahead of 'origin/my-branch' by 2 commits.
#   (use "git push" to publish your local commits)
#
```

origin と同じ状態にリセットする（リモートと同じ状態にする）方法の一つは次の通りです：

```sh
(master)$ git reset --hard origin/my-branch
```

<a name="commit-wrong-branch"></a>
### 新しいブランチではなくマスターブランチにコミットしてしまった

マスターブランチにいたまま、新しいブランチを作成してください：

```sh
(master)$ git branch my-branch
```

マスターブランチを直前のコミットにリセットします：

```sh
(master)$ git reset --hard HEAD^
```

`HEAD^` は `HEAD^1` の短縮形で、`HEAD` の一番目の親を表します。同様に `HEAD^2` は二番目の親を表します（マージには親が二つあります）。

`HEAD^2` は `HEAD~2` と**異なる**ことに注意してください（詳しくは[このリンク](http://www.paulboxley.com/blog/2011/06/git-caret-and-tilde)を参照してください）。

あるいは `HEAD^` を使いたくなければ、マスターブランチを差し戻したい先のコミットハッシュを探します（`git log` が役立ちます）。
見つけたら、そのハッシュにリセットします。あとは `git push` すればこの結果がリモートに反映されるはずです。

例えば、マスターブランチを差し戻すべきコミットのハッシュが `a13b85e` だとして、次のようにします：

```sh
(master)$ git reset --hard a13b85e
HEAD is now at a13b85e
```

作業に戻るため、新しいブランチにチェックアウトしましょう：

```sh
(master)$ git checkout my-branch
```

<a name="keep-whole-file"></a>
### ファイル全てをリファレンス的な場所に保存しておきたい

ワーキングスパイク（メモを参照）にたくさん編集内容があって、すべてうまく機能しているものとします。
この作業内容を保存しておくため、別のブランチにコミットします。

```sh
(solution)$ git add -A && git commit -m "Adding all changes from this spike into one big commit."
```

この内容をブランチ（フィーチャーブランチでも `develop` でも）に適用したいときは、ファイル全部を保存しておきたいはずです。
大きなコミットを小さなコミットに分割します。

いま、次のブランチがあるものとします。

* `solution` ブランチ。スパイクを解消するためのブランチで、`develop` ブランチに対して一コミット先です。
* `develop` ブランチ。ここに編集内容を適用したいとします。

これは編集内容をブランチに適用することで可能です。

```sh
(develop)$ git checkout solution -- file1.txt
```

これで `solution` ブランチの内容が `develop` ブランチに適用されます：

```sh
# On branch develop
# Your branch is up-to-date with 'origin/develop'.
# Changes to be committed:
#  (use "git reset HEAD <file>..." to unstage)
#
#        modified:   file1.txt
```

あとは通常通りコミットしてください。

メモ：スパイクは問題を解析したり解決するためのものです。解決法は判断にかけられたあと、共同編集者が問題を理解した時点で破棄されます。~ [Wikipedia](https://en.wikipedia.org/wiki/Extreme_programming_practices)

<a name="cherry-pick"></a>
### 別々のブランチにするべき複数のコミットを一つのブランチにしてしまった

マスターブランチにいるとして、`git log` でコミットが二つ表示されるとします。

```sh
(master)$ git log

commit e3851e817c451cc36f2e6f3049db528415e3c114
Author: Alex Lee <alexlee@example.com>
Date:   Tue Jul 22 15:39:27 2014 -0400

    Bug #21 - Added CSRF protection

commit 5ea51731d150f7ddc4a365437931cd8be3bf3131
Author: Alex Lee <alexlee@example.com>
Date:   Tue Jul 22 15:39:12 2014 -0400

    Bug #14 - Fixed spacing on title

commit a13b85e984171c6e2a1729bb061994525f626d14
Author: Aki Rose <akirose@example.com>
Date:   Tue Jul 21 01:12:48 2014 -0400

    First commit
```

それぞれのバグに対応するコミットハッシュをメモしておきます（#21 は`e3851e8`、#14 は`5ea5173` です）。

まず、マスターブランチをあるべきコミット `a13b85e` までリセットします：

```sh
(master)$ git reset --hard a13b85e
HEAD is now at a13b85e
```

これで、バグ #21 に対応する新しいブランチを作成できます：

```sh
(master)$ git checkout -b 21
(21)$
```

さて、このブランチにコミットを**チェリーピック**しましょう。
つまり、head が何であろうとそこに当該コミットだけを適用します。

```sh
(21)$ git cherry-pick e3851e8
```

この時点でコミットのコンフリクトが発生しているかもしれません。コンフリクトを解消する方法は[interactive rebasing section above](#interactive-rebase)セクションの[**There were conflicts**](#merge-conflict)を参照してください。

次に、#14 に対応するマスターに紐づいたブランチを作成しましょう。

```sh
(21)$ git checkout master
(master)$ git checkout -b 14
(14)$
```

最後に、バグ #14 に対応するコミットをチェリーピックします。

```sh
(14)$ git cherry-pick 5ea5173
```

<a name="delete-stale-local-branches"></a>
### upstream で削除されたローカルブランチを削除したい

GitHub でプルリクエストをマージすると、マージされたブランチを自分のフォーク上から削除する選択肢が出てきます。
そのブランチで今後作業するつもりがなければ、もはや使わないブランチで作業環境が散らからないように削除しておくほうが綺麗です。

```sh
$ git fetch -p upstream
```

ここで `upstream` は取得したい元のリモートを指します。

<a name='restore-a-deleted-branch'></a>
### 間違ってブランチを削除してしまった

いつもリモートにプッシュしているならたいてい大丈夫です。ただ、ブランチを間違って削除してしまうのはよくあることです。

新しくブランチを作り、ファイルを新規作成したとします：

```sh
(master)$ git checkout -b my-branch
(my-branch)$ git branch
(my-branch)$ touch foo.txt
(my-branch)$ ls
README.md foo.txt
```

これを追加してコミットします。

```sh
(my-branch)$ git add .
(my-branch)$ git commit -m 'foo.txt added'
(my-branch)$ foo.txt added
 1 files changed, 1 insertions(+)
 create mode 100644 foo.txt
(my-branch)$ git log

commit 4e3cd85a670ced7cc17a2b5d8d3d809ac88d5012
Author: siemiatj <siemiatj@example.com>
Date:   Wed Jul 30 00:34:10 2014 +0200

    foo.txt added

commit 69204cdf0acbab201619d95ad8295928e7f411d5
Author: Kate Hudson <katehudson@example.com>
Date:   Tue Jul 29 13:14:46 2014 -0400

    Fixes #6: Force pushing after amending commits
```

マスターに戻って、「間違って」ブランチを削除してみます。

```sh
(my-branch)$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.
(master)$ git branch -D my-branch
Deleted branch my-branch (was 4e3cd85).
(master)$ echo oh noes, deleted my branch!
oh noes, deleted my branch!
```

さて、ここで改良されたロガー `reflog` について学びましょう。これはリポジトリの全ての操作履歴を保存しています。

```
(master)$ git reflog
69204cd HEAD@{0}: checkout: moving from my-branch to master
4e3cd85 HEAD@{1}: commit: foo.txt added
69204cd HEAD@{2}: checkout: moving from master to my-branch
```

このように、削除してしまったブランチのコミットが表示されています。削除したブランチを復元してみましょう。

```sh
(master)$ git checkout -b my-branch-help
Switched to a new branch 'my-branch-help'
(my-branch-help)$ git reset --hard 4e3cd85
HEAD is now at 4e3cd85 foo.txt added
(my-branch-help)$ ls
README.md foo.txt
```

やった！　消えたファイルを取り戻しました。`git reflog` はリベースが滅茶苦茶になってしまったときにも便利です。

### ブランチを削除したい

リモートブランチを削除するには：

```sh
(master)$ git push origin --delete my-branch
```

次のようにもできます：

```sh
(master)$ git push origin :my-branch
```

ローカルブランチを削除するには：

```sh
(master)$ git branch -d my-branch
```

現在のブランチか upstream にマージ**されていない**ブランチを削除するには：

```sh
(master)$ git branch -D my-branch
```

### 複数のブランチを削除したい

`fix/` で始まるブランチを全て削除したいときは：

```sh
(master)$ git branch | grep 'fix/' | xargs git branch -d
```

### ブランチの名前を変更したい

現在の（ローカル）ブランチの名前を変更するには：

```sh
(master)$ git branch -m new-name
```

現在いるブランチと異なる（ローカル）ブランチの名前を変更するには：

```sh
(master)$ git branch -m old-name new-name
```

古い名前（`old-name`）のリモートブランチを削除し、新しい名前（`new-name`）のブランチをプッシュするには：
 
```sh
(master)$ git push origin :old_name new_name
```

<a name="i-want-to-checkout-to-a-remote-branch-that-someone-else-is-working-on"></a>
### 他の人が作業しているリモートブランチにチェックアウトしたい

まず、リモートから全ブランチを取得します：

```sh
(master)$ git fetch --all
```

リモートブランチ `daves` にチェックアウトしたいとします。

```sh
(master)$ git checkout --track origin/daves
Branch daves set up to track remote branch daves from origin.
Switched to a new branch 'daves'
```

（ここで `--track` は `git checkout -b [branch] [remotename]/[branch]` の短縮形です。）

こうするとブランチ `daves` のコピーがローカルに作成され、プッシュされた編集内容がリモートに反映されます。

### 現在のローカルブランチをもとに新しいリモートブランチを作成したい

```sh
$ git push <remote> HEAD
```

同時にこのリモートブランチを現在のブランチの upstream に設定したい場合は代わりに次を実行します。

```sh
$ git push -u <remote> HEAD
```
`push.default` 設定が `upstream` モードか `simple` モード（Git 2.0 のデフォルト）になっている場合、次のコマンドを実行すると、以前に `-u` で登録したリモートブランチに現在のブランチをプッシュします。

```sh
$ git push
```

他のモードが `git push` でどう振る舞うかは[`push.default` のドキュメント](https://git-scm.com/docs/git-config#git-config-pushdefault)で説明されています。

### リモートブランチをローカルブランチの upstream に設定したい

次のようにして、リモートブランチを現在いるローカルブランチの upstream に設定できます。

```sh
$ git branch --set-upstream-to [remotename]/[branch]
# or, using the shorthand:
$ git branch -u [remotename]/[branch]
```

別のローカルブランチの upstream に設定するには次のようにします：

```sh
$ git branch -u [remotename]/[branch] [local-branch]
```

<a name="i-want-to-set-my-HEAD-to-track-the-default-remote-branch"></a>
### 自分の HEAD をデフォルトのリモートブランチを追跡するよう設定したい

リモートブランチを調べると、自分の HEAD がどのリモートブランチを追跡しているかがわかります。
ときどきこれが追跡したいブランチと異なることがあります。

```sh
$ git branch -r
  origin/HEAD -> origin/gh-pages
  origin/master
```

`origin/HEAD` が `origin/master` を追跡するよう設定し直すには、次のコマンドを実行します：

```sh
$ git remote set-head origin --auto
origin/HEAD set to master
```

### 間違ったブランチを編集してしまった

まだコミットしていない編集を加えたあと、間違ったブランチにいることに気づいたとします。
編集内容をスタッシュして、適切なブランチに適用すれば大丈夫です：

```sh
(wrong_branch)$ git stash
(wrong_branch)$ git checkout <correct_branch>
(correct_branch)$ git stash apply
```

## リベースとマージ

<a name="undo-rebase"></a>
### リベースやマージを取り消したい

現在のブランチを間違ったブランチにリベースないしマージしてしまった、あるいはリベースないしマージが出来なさそうと気づいたとしましょう。
Git は危険な操作の前に HEAD が指すものを変数 `ORIG_HEAD` に保存しているので、ブランチをリベースないしマージの前の状態に差し戻すのは簡単です。
<!--You may have merged or rebased your current branch with a wrong branch, or you can't figure it out or finish the rebase/merge process. Git saves the original HEAD pointer in a variable called ORIG_HEAD before doing dangerous operations, so it is simple to recover your branch at the state before the rebase/merge.-->

```sh
(my-branch)$ git reset --hard ORIG_HEAD
```

<a name="force-push-rebase"></a>
### リベースしたが、強制プッシュはしたくない

残念ながら、編集内容をリモートブランチに反映させるには強制プッシュをする必要があります。編集履歴を変えてしまったからです。
強制プッシュしない限りリモートブランチは編集内容を受け付けません。
これが多くの人がリベースワークフローではなくマージワークフローを使う主な理由です。
特に大規模な開発チームは誰かの強制プッシュでハマりやすいです。
リベースの強制プッシュは注意して使いましょう。
リベースを使う安全な方法は、リモートには編集内容を反映させず、代わりに次を実行することです：

<!--Unfortunately, you have to force push, if you want those changes to be reflected on the remote branch. This is because you have changed the history. The remote branch won't accept changes unless you force push. This is one of the main reasons many people use a merge workflow, instead of a rebasing workflow - large teams can get into trouble with developers force pushing. Use this with caution. A safer way to use rebase is not to reflect your changes on the remote branch at all, and instead to do the following:-->

```sh
(master)$ git checkout my-branch
(my-branch)$ git rebase -i master
(my-branch)$ git checkout master
(master)$ git merge --ff-only my-branch
```

詳しくは[この StackOverflow スレッド](https://stackoverflow.com/questions/11058312/how-can-i-use-git-rebase-without-requiring-a-forced-push)を参照してください。

<a name="interactive-rebase"></a>
### コミットを統合したい

`master` ブランチにプルリクエストを送る、またはこれから送るつもりのブランチで作業しているとしましょう。
最も単純なケースとして、タイムスタンプを気にせず**全部の**コミットを一つにまとめてしまいたいとします。この場合はリセットと再コミットを行います。
マスターブランチが最新版で、編集内容がすべてコミットされていることを確認した上で、次を実行します：

<!--Let's suppose you are working in a branch that is/will become a pull-request against `master`. In the simplest case when all you want to do is to combine *all* commits into a single one and you don't care about commit timestamps, you can reset and recommit. Make sure the master branch is up to date and all your changes committed, then:-->

```sh
(my-branch)$ git reset --soft master
(my-branch)$ git commit -am "New awesome feature"
```

もっと細かく設定し、タイムスタンプも残したい場合は、対話的リベースと呼ばれるものを使うます：
<!--If you want more control, and also to preserve timestamps, you need to do something called an interactive rebase:-->

```sh
(my-branch)$ git rebase -i master
```

別のブランチで作業しているわけではない場合は、`HEAD` に対してリベースする必要があります。たとえば直近二件のコミットを圧縮 (squash) したい場合は `HEAD~2`、直近三件なら `HEAD~3` です。
<!--If you aren't working against another branch you'll have to rebase relative to your `HEAD`. If you want to squash the last 2 commits, for example, you'll have to rebase against `HEAD~2`. For the last 3, `HEAD~3`, etc.-->

```sh
(master)$ git rebase -i HEAD~2
```

対話的リベースのコマンドを実行したら、テキストエディタに次のように表示されます：
<!--After you run the interactive rebase command, you will see something like this in your  text editor:-->

```vim
pick a9c8a1d Some refactoring
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

ここで `#` から始まる行はコメントなので、リベースに影響しません。

`pick` コマンドをリストにある好きなコマンドで置き換えればよいです。行を削除すればコミットを削除できます。
<!--Then you replace `pick` commands with any in the list above, and you can also remove commits by removing corresponding lines.-->

例えば、**一番古い（一番目の）コミットはそのまま残し、他のコミット全てを二番目のコミットに統合したい**場合は、最初と二番目のコミット以外のコミットの横に表示された文字を例えば `f` に修正します：
<!--For example, if you want to **leave the oldest (first) commit alone and combine all the following commits with the second oldest**, you should edit the letter next to each commit except the first and the second to say `f`:-->

```vim
pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
f b729ad5 fixup
f e3851e8 another fix
```

コミットを統合し、**さらに名前も変更したい**場合は、二番目のコミットの横にさらに `r` の文字を追加するか、あるいは単に `f` の代わりに `s` を使います：
<!--If you want to combine these commits **and rename the commit**, you should additionally add an `r` next to the second commit or simply use `s` instead of `f`:-->

```vim
pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
s b729ad5 fixup
s e3851e8 another fix
```

するとテキストエディタが起動し、コミットの名前を変更できます。
<!--You can then rename the commit in the next text prompt that pops up.-->

```vim
Newer, awesomer features

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# rebase in progress; onto 8074d12
# You are currently editing a commit while rebasing branch 'master' on '8074d12'.
#
# Changes to be committed:
#   modified:   README.md
#

```

うまくいくと次のように表示されるはずです：
<!--If everything is successful, you should see something like this:-->

```sh
(master)$ Successfully rebased and updated refs/heads/master.
```

#### 安全なマージの方法

`--no-commit` performs the merge but pretends the merge failed and does not autocommit, giving the user a chance to inspect and further tweak the merge result before committing. `no-ff` maintains evidence that a feature branch once existed, keeping project history consistent.

```sh
(master)$ git merge --no-ff --no-commit my-branch
```

オプション `--no-commit` を指定すると、マージを実行しつつ、あたかもマージが失敗したかのように扱って自動コミットはしません。これにより、コミットの前にマージの結果を精査したり調整できます。オプション `no-ff` はフィーチャーブランチが存在したことを記録しておき、プロジェクト履歴の一貫性を保ちます。

#### ブランチを一つのコミットにまとめたい場合

```sh
(master)$ git merge --squash my-branch
```

<a name="rebase-unpushed-commits"></a>
#### プッシュされていないコミットのみを統合したい場合

進行中の作業に関するコミットがいくつかあって、upstream にコミットする前に統合しておきたいことがあるでしょう。
すでに upstream にプッシュされたコミットは、誰かがそれを参照するコミットをしている可能性があるので、それは統合しないでおきたいとします。
<!--Sometimes you have several work in progress commits that you want to combine before you push them upstream. You don't want to accidentally combine any commits that have already been pushed upstream because someone else may have already made commits that reference them.-->

```sh
(master)$ git rebase -i @{u}
```

上を実行すると対話的リベースが始まりますが、一覧にはまだプッシュされていないコミットだけが表示されます。これで順番を入れ替えたり、修正したり、圧縮 (squash) したりしても安全です。
<!--This will do an interactive rebase that lists only the commits that you haven't already pushed, so it will be safe to reorder/fix/squash anything in the list.-->

#### マージを中止したい

マージがファイルに問題をきたすことがあります。
こういうときはオプション `abort` を使うとコンフリクト解消の作業を中止し、マージの前の状態の復元を試みることができます。
<!--Sometimes the merge can produce problems in certain files, in those cases we can use the option `abort` to abort the current conflict resolution process, and try to reconstruct the pre-merge state.-->

```sh
(my-branch)$ git merge --abort
```

ただし、このコマンドが使えるのはバージョン 1.7.4 以上の Git です。
<!--This command is available since Git version >= 1.7.4-->

### ブランチの親コミットを更新したい

マスターブランチとそこから分岐した feature-1 ブランチがあり、feature-1 からさらに分岐した feature-2 ブランチがあるとします。
今 feature-1 ブランチにコミットしたとすると、feature-2 ブランチの親コミットはもはや正確ではありません（feature-1 から分岐したので、親コミットは feature-1 ブランチの head であるべきです。）
こういうときは `git rebase --onto` で修正できます。
<!--Say I have a master branch, a feature-1 branch branched from master, and a feature-2 branch branched off of feature-1. If I make a commit to feature-1, then the parent commit of feature-2 is no longer accurate (it should be the head of feature-1, since we branched off of it). We can fix this with `git rebase --onto`.-->

```sh
(feature-2)$ git rebase --onto feature-1 <the first commit in your feature-2 branch that you don't want to bring along> feature-2
```

まだマージされていないブランチからフィーチャーブランチを分岐させており、feature-1 ブランチのバグ修正を feature-2 に反映させたいときに便利です。
<!--This helps in sticky scenarios where you might have a feature built on another feature that hasn't been merged yet, and a bugfix on the feature-1 branch needs to be reflected in your feature-2 branch.-->

### ブランチの全コミットがマージされているか確認する

ブランチの全てのコミットが別のブランチにマージされたか確認するには、それぞれのブランチの head（あるいは任意のコミット）の間の差分を表示します：
<!--To check if all commits on a branch are merged into another branch, you should diff between the heads (or any commits) of those branches:-->

```sh
(master)$ git log --graph --left-right --cherry-pick --oneline HEAD...feature/120-on-scroll
```

一方のブランチにしかないコミットがあるか表示され、ブランチの間で共有されていないコミットの一覧がわかります。
もう一つの方法は：
<!--This will tell you if any commits are in one but not the other, and will give you a list of any nonshared between the branches. Another option is to do this:-->

```sh
(master)$ git log master ^feature/120-on-scroll --no-merges
```

### 対話的リベースで起こりうる問題

<a name="noop"></a>
#### リベース編集画面に 'noop' と表示される

次のように表示されたとします：

```
noop
```

これは、同じコミットのブランチ、あるいは現在のブランチよりも*先*にあるブランチに対してリベースしようとしたときに表示されるものです。こういう場合は：
<!--That means you are trying to rebase against a branch that is at an identical commit, or is *ahead* of your current branch. You can try:-->

* マスターブランチが正しい場所にあることを確認してください。<!--making sure your master branch is where it should be-->
* `HEAD~2` あるいはより以前にリベースしてください。<!--rebase against `HEAD~2` or earlier instead-->

<a name="merge-conflict"></a>
#### コンフリクトがあった

リベースができないときは、解消すべきコンフリクトがあるかもしれません。
<!--If you are unable to successfully complete the rebase, you may have to resolve conflicts.-->

まず `git status` で、どのファイルがコンフリクトを起こしているか確認します：
<!--First run `git status` to see which files have conflicts in them:-->

```sh
(my-branch)$ git status
On branch my-branch
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  both modified:   README.md
```

この例では `README.md` がコンフリクトをきたしています。ファイルを開き、次のようになっている部分を見てみましょう：
<!--In this example, `README.md` has conflicts. Open that file and look for the following:-->

```vim
   <<<<<<< HEAD
   some code
   =========
   some code
   >>>>>>> new-commit
```

`HEAD` と新しいコミットで加えられたコードの間の差分（この例では、真ん中の行から `new-commit` までの間にあるコード）を解消する必要があります。
<!--You will need to resolve the differences between the code that was added in your new commit (in the example, everything from the middle line to `new-commit`) and your `HEAD`.-->

一方のブランチの版のコードを残したい場合は、`--ours` あるいは `--theirs` を指定します。
<!--If you want to keep one branch's version of the code, you can use `--ours` or `--theirs`:-->

```sh
(master*)$ git checkout --ours README.md
```

- *マージする*場合、ローカルブランチの編集内容を残したいとき `--ours` を指定し、他方の編集内容を残したいとき `--theirs` を指定します。
- *リベースする*場合、ローカルブランチの編集内容を残したいとき `--theirs` を指定し、他方の編集内容を残したいとき `--ours` を指定します。このように逆転する理由は[Git ドキュメントのこのノート](https://git-scm.com/docs/git-rebase#git-rebase---merge)を参照してください。

マージがもっと複雑な場合はヴィジュアル差分エディタを使うことができます：
<!--If the merges are more complicated, you can use a visual diff editor:-->

```sh
(master*)$ git mergetool -t opendiff
```

コンフリクトを全て解消し、コードのテストが済んだら、`git add ` で編集内容をステージし、`git rebase --continue` でリベースを再開します。
<!--After you have resolved all conflicts and tested your code, `git add` the files you have changed, and then continue the rebase with `git rebase --continue`-->

```sh
(my-branch)$ git add README.md
(my-branch)$ git rebase --continue
```

コンフリクトを解消した結果、ワーキングツリーがコミット前と全く同じ状態になった場合は、代わりに `git rebase --skip` を実行します。
<!--If after resolving all the conflicts you end up with an identical tree to what it was before the commit, you need to `git rebase --skip` instead.-->

リベース作業を全て中止し、ブランチを元の状態に差し戻したい場合は、次のようにします：
<!--If at any time you want to stop the entire rebase and go back to the original state of your branch, you can do so:-->

```sh
(my-branch)$ git rebase --abort
```

<a name="stashing"></a>
## スタッシュ

### 全ての編集内容をスタッシュしたい

ワーキングディレクトリの全ての編集をスタッシュするには、次を実行します：

```sh
$ git stash
```

バージョン管理されていないファイルもスタッシュしたい場合は、オプション `-u` を指定します。

```sh
$ git stash -u
```

### 特定のファイルをスタッシュしたい

ワーキングディレクトリのファイル一つをスタッシュするには、次を実行します：

```sh
$ git stash push working-directory-path/filename.ext
```

ワーキングディレクトリの複数のファイルをスタッシュする場合は次の通りです。

```sh
$ git stash push working-directory-path/filename1.ext working-directory-path/filename2.ext
```

<a name="stash-msg"></a>
### メッセージをつけてスタッシュしたい

```sh
$ git stash save <message>
```

あるいは、

```sh
$ git stash push -m <message>
```

<a name="stash-apply-specific"></a>
### 一覧から特定のスタッシュを選んで適用したい

まず、次のようにしてスタッシュの一覧をメッセージとともに表示します。

```sh
$ git stash list
```

そして、次のように特定のスタッシュを選んで適用します。

```sh
$ git stash apply "stash@{n}"
```

ここで、'n' は一覧の中のスタッシュの位置を指します。一番上のスタッシュなら 0 番です。

また、時刻からスタッシュを参照することもできます。

```sh
$ git stash apply "stash@{2.hours.ago}"
```

<a name="stage-and-keep-unstaged"></a>
### ステージされていない編集をそのままにしつつ、スタッシュしたい

手動で `stash commit` を作成し、`git stash store` を実行すればよいです。

```sh
$ git stash create
$ git stash store -m <message> CREATED_SHA1
```

## Finding

### I want to find a string in any commit

To find a certain string which was introduced in any commit, you can use the following structure:

```sh
$ git log -S "string to find"
```

Commons parameters:

* `--source` means to show the ref name given on the command line by which each commit was reached.

* `--all` means to start from every branch.

* `--reverse` prints in reverse order, it means that will show the first commit that made the change.

<a name="i-want-to-find-by-author-committer"></a>
### I want to find by author/committer

To find all commits by author/committer you can use:

```sh
$ git log --author=<name or email>
$ git log --committer=<name or email>
```

Keep in mind that author and committer are not the same. The `--author` is the person who originally wrote the code; on the other hand, the `--committer`, is the person who committed the code on behalf of the original author.

### I want to list commits containing specific files

To find all commits containing a specific file you can use:

```sh
$ git log -- <path to file>
```

You would usually specify an exact path, but you may also use wild cards in the path and file name:

```sh
$ git log -- **/*.js
```

While using wildcards, it's useful to inform `--name-status` to see the list of committed files:

```sh
$ git log --name-status -- **/*.js
```

<a name="#i-want-to-view-the-commit-history-for-a-specific-function"></a>
### I want to view the commit history for a specific function

To trace the evolution of a single function you can use:

```sh
$ git log -L :FunctionName:FilePath
```

Note that you can combine this with further `git log` options, like [revision ranges](https://git-scm.com/docs/gitrevisions) and [commit limits](https://git-scm.com/docs/git-log/#_commit_limiting).

### Find a tag where a commit is referenced

To find all tags containing a specific commit:

```sh
$ git tag --contains <commitid>
```

## Submodules

<a name="clone-submodules"></a>
### Clone all submodules

```sh
$ git clone --recursive git://github.com/foo/bar.git
```

If already cloned:

```sh
$ git submodule update --init --recursive
```

<a name="delete-submodule"></a>
### Remove a submodule

Creating a submodule is pretty straight-forward, but deleting them less so. The commands you need are:

```sh
$ git submodule deinit submodulename
$ git rm submodulename
$ git rm --cached submodulename
$ rm -rf .git/modules/submodulename
```

## Miscellaneous Objects

### Copy a folder or file from one branch to another

```sh
$ git checkout <branch-you-want-the-directory-from> -- <folder-name or file-name>
```

### Restore a deleted file

First find the commit when the file last existed:

```sh
$ git rev-list -n 1 HEAD -- filename
```

Then checkout that file:

```
git checkout deletingcommitid^ -- filename
```

### Delete tag

```sh
$ git tag -d <tag_name>
$ git push <remote> :refs/tags/<tag_name>
```

<a name="recover-tag"></a>
### Recover a deleted tag

If you want to recover a tag that was already deleted, you can do so by following these steps: First, you need to find the unreachable tag:

```sh
$ git fsck --unreachable | grep tag
```

Make a note of the tag's hash. Then, restore the deleted tag with following, making use of [`git update-ref`](https://git-scm.com/docs/git-update-ref):

```sh
$ git update-ref refs/tags/<tag_name> <hash>
```

Your tag should now have been restored.

### Deleted Patch

If someone has sent you a pull request on GitHub, but then deleted their original fork, you will be unable to clone their repository or to use `git am` as the [.diff, .patch](https://github.com/blog/967-github-secrets) URLs become unavailable. But you can checkout the PR itself using [GitHub's special refs](https://gist.github.com/piscisaureus/3342247). To fetch the content of PR#1 into a new branch called pr_1:

```sh
$ git fetch origin refs/pull/1/head:pr_1
From github.com:foo/bar
 * [new ref]         refs/pull/1/head -> pr_1
```

### Exporting a repository as a Zip file

```sh
$ git archive --format zip --output /full/path/to/zipfile.zip master
```
### Push a branch and a tag that have the same name

If there is a tag on a remote repository that has the same name as a branch you will get the following error when trying to push that branch with a standard `$ git push <remote> <branch>` command.

```sh
$ git push origin <branch>
error: dst refspec same matches more than one.
error: failed to push some refs to '<git server>'
```

Fix this by specifying you want to push the head reference.

```sh
$ git push origin refs/heads/<branch-name>
```

If you want to push a tag to a remote repository that has the same name as a branch, you can use a similar command.

```sh
$ git push origin refs/tags/<tag-name>
```

## Tracking Files

<a href="i-want-to-change-a-file-names-capitalization-without-changing-the-contents-of-the-file"></a>
### I want to change a file name's capitalization, without changing the contents of the file

```sh
(master)$ git mv --force myfile MyFile
```

### I want to overwrite local files when doing a git pull

```sh
(master)$ git fetch --all
(master)$ git reset --hard origin/master
```

<a href="remove-from-git"></a>
### I want to remove a file from Git but keep the file

```sh
(master)$ git rm --cached log.txt
```

### I want to revert a file to a specific revision

Assuming the hash of the commit you want is c5f567:

```sh
(master)$ git checkout c5f567 -- file1/to/restore file2/to/restore
```

If you want to revert to changes made just 1 commit before c5f567, pass the commit hash as c5f567~1:

```sh
(master)$ git checkout c5f567~1 -- file1/to/restore file2/to/restore
```

### I want to list changes of a specific file between commits or branches

Assuming you want to compare last commit with file from commit c5f567:

```sh
$ git diff HEAD:path_to_file/file c5f567:path_to_file/file
```

Same goes for branches:

```sh
$ git diff master:path_to_file/file staging:path_to_file/file
```

### I want Git to ignore changes to a specific file

This works great for config templates or other files that require locally adding credentials that shouldn't be committed.

```sh
$ git update-index --assume-unchanged file-to-ignore
```

Note that this does *not* remove the file from source control - it is only ignored locally. To undo this and tell Git to notice changes again, this clears the ignore flag:

```sh
$ git update-index --no-assume-unchanged file-to-stop-ignoring
```

## Debugging with Git

The [git-bisect](https://git-scm.com/docs/git-bisect) command uses a binary search to find which commit in your Git history introduced a bug.

Suppose you're on the `master` branch, and you want to find the commit that broke some feature. You start bisect:

```sh
$ git bisect start
```

Then you should specify which commit is bad, and which one is known to be good. Assuming that your *current* version is bad, and `v1.1.1` is good:

```sh
$ git bisect bad
$ git bisect good v1.1.1
```

Now `git-bisect` selects a commit in the middle of the range that you specified, checks it out, and asks you whether it's good or bad. You should see something like:

```sh
$ Bisecting: 5 revision left to test after this (roughly 5 step)
$ [c44abbbee29cb93d8499283101fe7c8d9d97f0fe] Commit message
$ (c44abbb)$
```

You will now check if this commit is good or bad. If it's good:

```sh
$ (c44abbb)$ git bisect good
```

and `git-bisect` will select another commit from the range for you. This process (selecting `good` or `bad`) will repeat until there are no more revisions left to inspect, and the command will finally print a description of the **first** bad commit.

## Configuration

### I want to add aliases for some Git commands

On OS X and Linux, your git configuration file is stored in ```~/.gitconfig```.  I've added some example aliases I use as shortcuts (and some of my common typos) in the ```[alias]``` section as shown below:

```vim
[alias]
    a = add
    amend = commit --amend
    c = commit
    ca = commit --amend
    ci = commit -a
    co = checkout
    d = diff
    dc = diff --changed
    ds = diff --staged
    extend = commit --amend -C HEAD
    f = fetch
    loll = log --graph --decorate --pretty=oneline --abbrev-commit
    m = merge
    one = log --pretty=oneline
    outstanding = rebase -i @{u}
    reword = commit --amend --only
    s = status
    unpushed = log @{u}
    wc = whatchanged
    wip = rebase -i @{u}
    zap = fetch -p
    day = log --reverse --no-merges --branches=* --date=local --since=midnight --author=\"$(git config --get user.name)\"
    delete-merged-branches = "!f() { git checkout --quiet master && git branch --merged | grep --invert-match '\\*' | xargs -n 1 git branch --delete; git checkout --quiet @{-1}; }; f"
```

### I want to add an empty directory to my repository

You can’t! Git doesn’t support this, but there’s a hack. You can create a .gitignore file in the directory with the following contents:

```
 # Ignore everything in this directory
 *
 # Except this file
 !.gitignore
```

Another common convention is to make an empty file in the folder, titled .gitkeep.

```sh
$ mkdir mydir
$ touch mydir/.gitkeep
```

You can also name the file as just .keep , in which case the second line above would be ```touch mydir/.keep```

### I want to cache a username and password for a repository

You might have a repository that requires authentication.  In which case you can cache a username and password so you don't have to enter it on every push and pull. Credential helper can do this for you.

```sh
$ git config --global credential.helper cache
# Set git to use the credential memory cache
```

```sh
$ git config --global credential.helper 'cache --timeout=3600'
# Set the cache to timeout after 1 hour (setting is in seconds)
```
To find a credential helper:

```sh
$ git help -a | grep credential
# Shows you possible credential helpers
```

For OS specific credential caching:

```sh
$ git config --global credential.helper osxkeychain
# For OSX
```

```sh
$ git config --global credential.helper manager
# Git for Windows 2.7.3+
```

```sh
$ git config --global credential.helper gnome-keyring
# Ubuntu and other GNOME-based distros
```

More credential helpers can likely be found for different distributions and operating systems.

### I want to make Git ignore permissions and filemode changes

```sh
$ git config core.fileMode false
```

If you want to make this the default behaviour for logged-in users, then use:

```sh
$ git config --global core.fileMode false
```

### I want to set a global user

To configure user information used across all local repositories, and to set a name that is identifiable for credit when review version history:

```sh
$ git config --global user.name “[firstname lastname]”
```

To set an email address that will be associated with each history marker:

```sh
git config --global user.email “[valid-email]”
```

### I want to add command line coloring for Git

To set automatic command line coloring for Git for easy reviewing:

```sh
$ git config --global color.ui auto
```

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

If it turns out that you accidentally moved back, the reflog will contain the commit master pointed to (0254ea7) before you accidentally dropped 2 commits.

```sh
$ git reset --hard 0254ea7
```

Using `git reset` it is then possible to change master back to the commit it was before. This provides a safety net in case history was accidentally changed.

(copied and edited from [Source](https://www.atlassian.com/git/tutorials/rewriting-history/git-reflog)).

<a name="git-shortcuts"></a>
## Git Shortcuts

### Git Bash

Once you're comfortable with what the above commands are doing, you might want to create some shortcuts for Git Bash. This allows you to work a lot faster by doing complex tasks in really short commands.

```sh
alias sq=squash

function squash() {
    git rebase -i HEAD~$1
}
```

Copy those commands to your .bashrc or .bash_profile.

### PowerShell on Windows

If you are using PowerShell on Windows, you can also set up aliases and functions. Add these commands to your profile, whose path is defined in the `$profile` variable. Learn more at the [About Profiles](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles) page on the Microsoft documentation site.

```powershell
Set-Alias sq Squash-Commits

function Squash-Commits {
  git rebase -i HEAD~$1
}
```

# Other Resources

## Books

* [Learn Enough Git to Be Dangerous](https://www.learnenough.com/git-tutorial) - A book by Michael Hartl covering Git from basics
* [Pro Git](https://git-scm.com/book/en/v2) - Scott Chacon and Ben Straub's excellent book about Git
* [Git Internals](https://github.com/pluralsight/git-internals-pdf) - Scott Chacon's other excellent book about Git
* [Nasa handbook](https://www.nasa.gov/sites/default/files/atoms/files/nasa_systems_engineering_handbook.pdf)

## Tutorials

* [19 Git Tips For Everyday Use](https://www.alexkras.com/19-git-tips-for-everyday-use) - A list of useful Git one liners
* [Atlassian's Git tutorial](https://www.atlassian.com/git/tutorials) Get Git right with tutorials from beginner to advanced.
* [Learn Git branching](https://learngitbranching.js.org/) An interactive web based branching/merging/rebasing tutorial
* [Getting solid at Git rebase vs. merge](https://medium.com/@porteneuve/getting-solid-at-git-rebase-vs-merge-4fa1a48c53aa)
* [Git Commands and Best Practices Cheat Sheet](https://zeroturnaround.com/rebellabs/git-commands-and-best-practices-cheat-sheet) - A Git cheat sheet in a blog post with more explanations
* [Git from the inside out](https://codewords.recurse.com/issues/two/git-from-the-inside-out) - A tutorial that dives into Git's internals
* [git-workflow](https://github.com/asmeurer/git-workflow) - [Aaron Meurer](https://github.com/asmeurer)'s howto on using Git to contribute to open source repositories
* [GitHub as a workflow](https://hugogiraudel.com/2015/08/13/github-as-a-workflow/) - An interesting take on using GitHub as a workflow, particularly with empty PRs
* [Githug](https://github.com/Gazler/githug) - A game to learn more common Git workflows
* [learnGitBranching](https://github.com/pcottle/learnGitBranching) - An interactive git visualization to challenge and educate!

## Scripts and Tools

* [firstaidgit.io](http://firstaidgit.io/) A searchable selection of the most frequently asked Git questions
* [git-extra-commands](https://github.com/unixorn/git-extra-commands) - a collection of useful extra Git scripts
* [git-extras](https://github.com/tj/git-extras) - GIT utilities -- repo summary, repl, changelog population, author commit percentages and more
* [git-fire](https://github.com/qw3rtman/git-fire) - git-fire is a Git plugin that helps in the event of an emergency by adding all current files, committing, and pushing to a new branch (to prevent merge conflicts).
* [git-tips](https://github.com/git-tips/tips) - Small Git tips
* [git-town](https://github.com/Originate/git-town) - Generic, high-level Git workflow support! http://www.git-town.com

## GUI Clients
* [GitKraken](https://www.gitkraken.com/) - The downright luxurious Git client,for Windows, Mac & Linux
* [git-cola](https://git-cola.github.io/) - another Git client for Windows and OS X
* [GitUp](https://github.com/git-up/GitUp) - A newish GUI that has some very opinionated ways of dealing with Git's complications
* [gitx-dev](https://rowanj.github.io/gitx/) - another graphical Git client for OS X
* [Sourcetree](https://www.sourcetreeapp.com/) - Simplicity meets power in a beautiful and free Git GUI. For Windows and Mac.
* [Tower](https://www.git-tower.com/) - graphical Git client for OS X (paid)
* [tig](https://jonas.github.io/tig/) - terminal text-mode interface for Git
* [Magit](https://magit.vc/) - Interface to Git implemented as an Emacs package.
* [GitExtensions](https://github.com/gitextensions/gitextensions) - a shell extension, a Visual Studio 2010-2015 plugin and a standalone Git repository tool.
* [Fork](https://git-fork.com/) - a fast and friendly Git client for Mac (beta)
* [gmaster](https://gmaster.io/) - a Git client for Windows that has 3-way merge, analyze refactors, semantic diff and merge (beta)
* [gitk](https://git-scm.com/docs/gitk) - a Git client for linux to allow simple view of repo state.
* [SublimeMerge](https://www.sublimemerge.com/) - Blazing fast, extensible client that provides 3-way merges, powerful search and syntax highlighting, in active development.

# Git フライトルール

🌍
*[English](README.md) ∙ [Español](README_es.md)  ∙  [Русский](README_ru.md) ∙ [简体中文](README_zh-CN.md)∙ [한국어](README_kr.md)  ∙  [Tiếng Việt](README_vi.md) ∙ [Français](README_fr.md) ∙ [日本語](README_ja.md)*

#### フライトルールとは？

宇宙飛行士（ここでは、Git を使う開発者）が問題に対処するためのガイドです。

> *フライトルール*は、何か起きたときの手順の一つ一つとその理由を記したマニュアルです。基本的に、シナリオごとに標準的な対処法が事細かに説明されています。[...]

> マーキュリー計画のチームが知見を集め始めた 1960 年代から、NASA は私たちが遭った失敗や災難とその解決策を収集してきました。知見の大全は今や、エンジンの不調からハッチハンドルの故障やコンピュータの不具合に至る問題とその対処法に関する、数千ものリストになりました。

&mdash; Chris Hadfield, *An Astronaut's Guide to Life*.

#### この文書で使う記法について

文書の全ての例で、明確さのため、現在のブランチとステージされた編集の有無を表示するようカスタマイズされた Bash プロンプトを使います。
ブランチは括弧書きされ、ブランチ名の横の `*` はステージされた編集があることを示します。

全てのコマンドは Git バージョン 2.13.0 から動くはずです。Git のバージョンアップについては [Git のウェブサイト](https://www.git-scm.com/) を参照してください。

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

### ローカルリポジトリを初期設定したい

既存のディレクトリを Git リポジトリとして初期設定するには、次を実行します。

```sh
(my-folder) $ git init
```

### リモートリポジトリをクローンしたい

リモートリポジトリをクローン（コピー）したいときは、リポジトリの URL をコピーし、次を実行します。

```sh
$ git clone [url]
```

すると、リモートリポジトリと同名のフォルダにリポジトリの内容が保存されます。
リモートリポジトリのあるサーバに接続できる必要があります。大抵の場合インターネット接続があれば大丈夫です。

リモートリポジトリと異なる名前のフォルダにクローンしたいときは、次のようにします。

```sh
$ git clone [url] name-of-new-folder
```

### 間違ったリモートリポジトリを設定してしまった

問題はいくつかの場合に分けられます。

間違ったリポジトリをクローンしてしまったときは、`git clone` で作ったディレクトリを削除して、正しいリポジトリをクローンし直せばよいです。

間違ったリポジトリを既存のローカルリポジトリの origin に設定してしまったときは、次のように origin の URL を変更しましょう。

```sh
$ git remote set-url origin [url of the actual repo]
```

ほかの問題は[この StackOverflow トピック](https://stackoverflow.com/questions/2432764/how-to-change-the-uri-url-for-a-remote-git-repository#2432799)を参照してください。

### 他の人のリポジトリにコードを書き加えたい

Git では、アクセス権がないかぎり他の人のリポジトリに書き込むことはできません。
GitHub は Git リポジトリのホスティングサービスであって Git 自体とは異なるものですが、GitHub でもやはり同様です。
しかし、パッチでコードを提案することができます。
GitHub ならフォークとプルリクエストの機能がこれにあたります。

まずはフォークについて説明しましょう。
フォークはリポジトリのコピーです。
Git 自体の機能ではないものの、GitHub, BitBucket, GitLab やその他のホスティングサービスにはこの機能があり、各サービスの UI を通して実行できます。

#### プルリクエストでコードを提案するには

リポジトリをフォークしたら、ローカルマシンにクローンして編集しましょう。
ちょっとした編集なら GitHub 上でもできるでしょうが、この文書は GitHub フライトルールではないので、ローカルで編集する方法を説明します。

```sh
# ssh を使う場合
$ git clone git@github.com:k88hudson/git-flight-rules.git

# https を使う場合
$ git clone https://github.com/k88hudson/git-flight-rules.git
```

できたディレクトリに `cd` で移動し、`git remote` を実行してください。
リモートのリストが表示されるはずです。
ただ、おそらく表示されるのは `k88hudson/git-flight-rules` を参照する `origin` だけなので、自分がフォークして作った方のリモートも用意する必要があります。

Git では、自分自身のリポジトリのリモートは `origin`、フォークした元のリポジトリには `upstream` と名付けるのが一般的です。
これにならって、まず、リモート `origin` の名前を `upstream` に変更しましょう。

```sh
$ git remote rename origin upstream
```

実は `git remote set-url` でも同じことができますが、時間と手間が余計にかかります。

次に、自分のプロジェクトを参照する新しいリモートを作成します。

```sh
$ git remote add origin git@github.com:YourName/git-flight-rules.git
```

この時点でリモートは二つです。

- `origin` は自分のリポジトリを参照しています。
- `upstream` は元のリポジトリを参照しています。

`origin` は読み取り・書き込みの両方ができ、`upstream` は読み取り専用です。

編集が済んだら、編集を（通常はブランチ内から）リモート `origin` にプッシュしましょう。
ブランチ内にいる場合、次のように `--set-upstream` を使うと、次回から同じブランチからプッシュする際にリモートを指定せずに済みます。

```sh
$ (feature/my-feature) git push --set-upstream origin feature/my-feature
```

Git で CLI からプルリクエストを送る方法はありません（[hub](http://github.com/github/hub) のようなツールを使えば別ですが）。
プルリクエストを送りたいときは、GitHub（あるいは他のホスティングサービス）上でプルリクエストを作成してください。
元のリポジトリとフォークしたリポジトリの紐付けはホスティングサービスが自動的にしてくれます。

プルリクエストの後、コードレビューのフィードバックに対応するのを忘れないようにしましょう。

#### フォークしたリポジトリを、元のリポジトリの最新版に合わせて更新したい

そのうち `upstream` リポジトリが更新され、自分の `origin` にプルしたくなるかもしれません。
自分だけでなく他の人も共同作業していることを忘れないようにしてください。
自分のフィーチャーブランチにいて、これを元のリポジトリに合わせて更新したい場合を想定します。

元のプロジェクトを参照するリモートは設定してありますか？　まだなら今やってしまいましょう。
通常はリモートの名前に `upstream` を使います。

```sh
$ (master) git remote add upstream <link-to-original-repository>
# $ (master) git remote add upstream git@github.com:k88hudson/git-flight-rules.git
```

これで `upstream` から最新版を取得できるようになりました。

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
現在の HEAD の最新のコミット内容は次のように表示できます。

```sh
(master)$ git show
```

もしくは次の通りです。

```sh
$ git log -n1 -p
```

特定のコミットの時点のファイルの中身を見たいときは次のようにします（`<commitid>` は見たいコミット）。

```sh
$ git show <commitid>:filename
```

### コミットメッセージに間違った内容を書いてしまった

コミットメッセージに間違った内容を書いてしまったとします。
コミットがまだプッシュされていない場合は、次のようにして編集は変えずにコミットメッセージを編集できます。

```sh
$ git commit --amend --only
```

デフォルトのテキストエディタが開き、コミットメッセージを編集できます。
次のようにして、一つのコマンドでいっぺんにやることもできます。

```sh
$ git commit --amend --only -m 'xxxxxxx'
```

すでにコミットをプッシュしてしまった場合、コミットを修正して強制プッシュすることはできますが、おすすめしません。

<a name="commit-wrong-author"></a>
### 間違った名前・メールアドレスでコミットしてしまった

コミットが一つだけなら、次のように修正します。

```sh
$ git commit --amend --no-edit --author "New Authorname <authoremail@mydomain.com>"
```

あるいは、名前とメールアドレスを `git config --global author.(name|email)` で正しく設定してから、次を実行します。

```sh
$ git commit --amend --reset-author --no-edit
```

履歴すべてについて変更したい場合は、`git filter-branch` の man ページを参照してください。

### 直前のコミットからファイルを削除したい

直前のコミットから特定のファイルに関する編集を削除するには次のようにします。

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

このコマンドは、不要なファイルをパッチにコミットしてしまい、強制プッシュでリモートのパッチを更新したいときに特に便利です。
オプション `--no-edit` は既存のコミットメッセージを変更しないようにするためのものです。

<a name="delete-pushed-commit"></a>
### 直前のコミットを削除したい

すでにプッシュしたコミットを削除するには次のようにします。
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
このコマンドは、直前のコミットを相殺するようなコミットを新たに作成します。
プッシュしたブランチがリベースについて安全である場合（つまり、他の開発者がプルすることを想定していない場合）は、`git push --force-with-lease` を使っても大丈夫です。
<!--For more, see [the above section](#deleteremove-last-pushed-commit).-->

<a name="delete-any-commit"></a>
### 特定のコミットを削除したい

上と同様に、やむを得ない場合以外絶対に行わないでください。

```sh
$ git rebase --onto SHA1_OF_BAD_COMMIT^ SHA1_OF_BAD_COMMIT
$ git push --force-with-lease [remote] [branch]
```

あるいは、[対話的 rebase](#interactive-rebase) で削除したいコミットに対応する行を選択して削除します。

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

amend による修正は、rebase と同様に（後述）、**古いコミットを新たなコミットで置き換えます**。
それゆえ、修正前のコミットをすでにリモートにプッシュしてしまった場合は、強制プッシュ (`--force-with-lease`) しなければいけません。
強制プッシュには細心の注意が必要です。
*必ず*ブランチを指定するように！

```sh
(my-branch)$ git push origin mybranch --force-with-lease
```

一般論として、**強制プッシュは避けましょう**。
修正したコミットを強制プッシュするよりは、新たなコミットを作ってプッシュするのがベストです。
強制プッシュは、対象のブランチやその子ブランチで作業した他の開発者のソース履歴にコンフリクトをきたします。
誰かが同じブランチで作業していて、強制プッシュがその人の編集を上書きしてしまう場合は、`--force-with-lease` も失敗します。

他の誰も同じブランチで作業していないことが*絶対に*確実な場合、あるいはブランチの一部を*無条件で*更新したい場合は `--force` (`-f`) で行うことができますが、これは原則として避けるべきです。

<a href="undo-git-reset-hard"></a>
### 間違えて hard reset してしまい、元に戻したい

間違えて `git reset --hard` をしてしまっても、大抵はコミットを復元できます。
Git は数日間のログを全て残してくれているからです。

注意：これは作業がバックアップされている場合、つまりコミットないしスタッシュされている場合に限ります。
`git reset --hard` はコミットされていない変更を*削除*してしまうので、注意して使ってください。
（安全なのは `git reset --keep` を使うことです。）

```sh
(master)$ git reflog
```

過去のコミットとリセットに対応するコミットが表示されるので、復元したいコミットの SHA を選んでリセットします。

```sh
(master)$ git reset --hard SHA1234
```

これで大丈夫です。

<a href="undo-a-commit-merge"></a>
### 間違えてマージをコミットしてプッシュしてしまった

マージの準備ができていないフィーチャーブランチをメインのブランチにマージしてしまったときは、マージを取り消すことができます。
ただし注意すべき点は、マージコミットには複数（通常は二つ）の親があることです。

次のコマンドを実行します。

```sh
(feature-branch)$ git revert -m 1 <commit>
```

ここでオプション `-m 1` は差し戻す先の親として親 1（マージした先のブランチ）を指定します。

注意：親の番号はコミット ID とは異なります。
マージコミットの行は `Merge: 8e2ce2d 86ac2e7` のようになっています。
親番号はこのコミットの親を指定する 1 から始まる番号で、最初の番号は 1 番、次は 2 番、のように振られます。

<a href="undo-sensitive-commit-push"></a>
### 間違えて機密情報を含むファイルをコミットしプッシュしてしまった

機密情報やプライベートな情報（パスワードやキー等）を含むデータを誤ってプッシュしてしまった場合、コミットを修正できます。
ただし、ひとたびデータをコミットしてプッシュしてしまったら、その内容は盗み取られるおそれがあることに留意してください。
下の手順で公開リポジトリやローカルからデータを削除できますが、他の誰かがすでにプルしたデータを削除することは**不可能です**。
パスワードをコミットしてしまった場合は**直ちに変更してください**。
キーをコミットしてしまった場合は**直ちに再生成しましょう**。
誰かがすでに機密情報をプルしてしまった可能性がある限り、プッシュしたコミットを修正するだけでは不十分です。

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

すでに他のコミットをしてしまった場合（つまり、機密情報のコミットが直前のコミットよりも前である場合）は、リベースする必要があります。

<a href="#i-want-to-remove-a-large-file-from-ever-existing-in-repo-history"></a>
### 大容量のファイルに関する履歴を完全に削除したい

削除したいファイルが機密情報である場合は[機密情報を削除する方法](#i-accidentally-committed-and-pushed-files-containing-sensitive-data)を参照してください。

コミットで大容量のファイルや不要なファイルを削除しても、`.git` フォルダの Git 履歴には残るので、`git clone` したときに余計なファイルまでダウンロードしてしまうことになります。

ここで説明する手順には強制プッシュを必要とし、リポジトリ履歴を大きく変更してしまいます。
誰かがリモートで共同作業している場合は、全員のローカルの編集履歴がプッシュされていることを確認しておいてください。

履歴を書き換えるには二つの方法があります。
ビルトインの `git-filter-branch` と [`bfg-repo-cleaner`](https://rtyley.github.io/bfg-repo-cleaner/) です。
`bfg` はエレガントで性能がよい一方、サードパーティ製のソフトをダウンロードしなければならず、Java も必要です。
ここでは両方を説明します。
最後のステップでは強制プッシュをしますが、リポジトリの履歴の大部分を永久に変更するため、通常の強制プッシュよりもなお特別な配慮が必要になります。

#### おすすめの方法：サードパーティ製の bfg を使う

bfg-repo-cleaner を使うには Java が必要です。
[ここ](https://rtyley.github.io/bfg-repo-cleaner/)から bfg の jar ファイルをダウンロードしてください。
下の例では `bfg.jar` を使いますが、ダウンロードしたものには `bfg-1.13.0.jar` のようにバージョン番号がついているかもしれません。

特定のファイルを削除する場合は次のようにします。

```sh
(master)$ git rm path/to/filetoremove
(master)$ git commit -m "Commit removing filetoremove"
(master)$ java -jar ~/Downloads/bfg.jar --delete-files filetoremove
```

なお、bfg を使うときは、ファイルがサブディレクトリにあってもそのままのファイル名を入力することに注意してください。

パターンからファイルを削除することもできます。例えば次の通りです。

```sh
(master)$ git rm *.jpg
(master)$ git commit -m "Commit removing *.jpg"
(master)$ java -jar ~/Downloads/bfg.jar --delete-files *.jpg
```

bfg は最新のコミットにあるファイルには影響しません。
例えば、リポジトリに複数あった大容量の .tga ファイルのうち一部を以前のコミットで削除したとして、bfg を実行しても最新のコミットにあるファイルはそのままです。

なお、コミットでファイル名を変更した場合、例えばもともと `LargeFileFirstName.mp4` だったファイルが後のコミットで `LargeFileSecondName.mp4` に変更されている場合は、`java -jar ~/Downloads/bfg.jar --delete-files LargeFileSecondName.mp4` を実行しても Git の履歴からは削除されません。
両方のファイル名それぞれについて `--delete-files` を実行するか、パターンマッチで両方削除してください。

#### ビルトインの方法：git-filter-branch を使う

`git-filter-branch` はややこしくて機能も貧弱ですが、`bfg` のインストールや実行ができなくても使えます。

以下では、`filepattern` を名前やパターン（`*.jpg` など）に置き換えてください。
パターンにマッチしたファイルの履歴が全ての履歴とブランチから削除されます。

```sh
(master)$ git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch filepattern' --prune-empty --tag-name-filter cat -- --all
```

ここで使っている `--tag-name-filter cat` は煩雑ですが、このように `cat` を使うのが元のタグを新しいコミットにつける最も簡単な方法です。
また、`--prune-empty` は現在空のコミットを全て削除します。

#### 最後のステップ: 変更した履歴をプッシュする

ファイルを削除したら、リポジトリのものを壊していないか慎重に確認してください。
何か壊してしまった場合は、リポジトリを再度クローンしてやり直すのが最も簡単です。
最後のステップとして、必要に応じて Git ガベージコレクションで .git フォルダの容量を最小化してから、強制プッシュします。

```sh
(master)$ git reflog expire --expire=now --all && git gc --prune=now --aggressive
(master)$ git push origin --force --tags
```

リポジトリの履歴を全て書き換えているので、`git push` の量が膨大すぎて `“The remote end hung up unexpectedly”` というエラーが返るかもしれません。
その場合は Git の post buffer を増やしてみます。

```sh
(master)$ git config http.postBuffer 524288000
(master)$ git push --force
```

うまくいかない場合は、コミットを手作業で小分けにしてプッシュします。
プッシュが成功するまで、`<number>` を増やしながら次のコマンドを試してください。

```sh
(master)$ git push -u origin HEAD~<number>:refs/head/master --force
```

プッシュが成功したら、通常の`git push` が 成功するまで `<number>` を徐々に減らしてください。

<a href="i-need-to-change-the-content-of-a-commit-which-is-not-my-last"></a>
### 直近でないコミットの内容を編集したい

複数（たとえば三件）のコミットを行ったあと、文脈的に最初のコミットに属する作業をし忘れたことに気づいたとします。
この作業を新たなコミットとして行えばコードベースは綺麗に保てるものの、コミットがアトミックでなくなってしまう（同じ文脈の作業が同じコミットに属さない）ので、この状況は厄介です。
し忘れた作業が属するべきコミットを編集して作業を取り入れつつ、その後のコミットには手をつけないようにしたいとき、`git rebase` が役に立ちます。

最後から三件目のコミットを編集したいとします。

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

これは最後から三件目のコミットを編集しつつ、他の二件はそのままにするよう `rebase` に指示するコマンドです。
テキストエディタを保存して終了したら、Git がリベースを始めます。指定したコミットで止まり、そのコミットを編集できるようになります。
これで最初にコミットしたときにし忘れた作業を適用できます。編集とステージによって適用しましょう。
その後、次を実行します。

```sh
(your-branch)$ git commit --amend
```

これはコミットメッセージはそのままでコミットを作り直すよう Git に指示するコマンドです。
これで面倒な作業は終わりです。

```sh
(your-branch)$ git rebase --continue
```

あとは上を実行すれば完了です。

## ステージ

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
### ステージされた編集を直前のコミットに追加したい

```sh
(my-branch*)$ git commit --amend
```

コミットメッセージを変更したくないときは、コミットメッセージを再利用するよう Git に指示します。

```sh
(my-branch*)$ git commit --amend -C HEAD
```

<a name="commit-partial-new-file"></a>
### 新しいファイルの全部ではなく一部をステージしたい

通常、ファイルの一部をステージするには次を実行します。

```sh
$ git add --patch filename.x
```

短縮形は `-p` です。これにより対話モードが開きます。
オプション `s` をつけるとコミットを分割 (split) できます。ただし、新しく作ったファイルの場合このオプションは使えません。
ファイルを新たに追加するには、次を実行します。

```sh
$ git add -N filename.x
```

オプション `e` を使うと、どの行を追加するか手動で選択することができます。
コマンド `git diff --cached` あるいは `git diff --staged` を実行すると、ステージした行がローカルに保存されたものと比較して表示されます。

<a href="stage-in-two-commits"></a>
### 一つのファイルに加えた編集を二つの異なるコミットに追加したい

コマンド `git add` はファイル全体をコミットに追加します。
また、`git add -p` を使うと、どの編集を追加するか対話的に選択できます。

<a href="selective-unstage-edits"></a>
### ステージした編集が多すぎるので、いくつかのコミットに分割したい

コマンド `git reset -p` を実行すると、パッチモードのリセットダイアログが開きます。
なお、`git add -p` と似ていますが、"yes" がステージを取り消して次のコミットから除去することを意味する点で異なります。

<a href="unstaging-edits-and-staging-the-unstaged"></a>
### ステージされていない編集をステージし、ステージされた編集のステージを取り消したい

通常は、ステージされたファイルのステージを一旦全部取り消したあと、コミットしたいものをピックするべきです。
ステージされている編集とされていない編集を切り替えたいときは、ステージされた編集を記録しておく仮のコミットを作成し、ステージされていないファイルをステージしてスタッシュします。
それから仮のコミットをリセットして、スタッシュを pop します。

```sh
$ git commit -m "WIP"
$ git add . # バージョン管理されていないファイルも追加される
$ git stash
$ git reset HEAD^
$ git stash pop --index 0
```

注意 1：ここで `pop` を使うのは、操作を複数回行ってもなるべく結果が変わらないようにするためです。

注意 2：ここで `--index` を指定しないと、ステージされたファイルはステージされていない扱いになります（理由は[このリンク](https://stackoverflow.com/questions/31595873/git-stash-with-staged-files-does-stash-convert-staged-files-to-unstaged?answertab=active#tab-top)を参照してください）。

## ステージされていない編集

<a href="move-unstaged-edits-to-new-branch"></a>
### ステージされていない編集を新しいブランチに移したい

```sh
$ git checkout -b my-branch
```

<a href="move-unstaged-edits-to-old-branch"></a>
### ステージされていない編集を別の既存のブランチに移したい

```sh
$ git stash
$ git checkout my-branch
$ git stash pop
```

<a href="i-want-to-discard-my-local-uncommitted-changes"></a>
### コミットされていないローカルの編集を破棄したい

ステージされている編集とされていない編集の両方を全て破棄したいときは、次のようにします。

```sh
(my-branch)$ git reset --hard
# または
(master)$ git checkout -f
```

次のコマンドは `git add` でステージした全ファイルのステージを取り消します。

```sh
$ git reset
```

次のコマンドはコミットされていないローカルの編集を全て差し戻します（リポジトリのルートで実行する必要があります）。

```sh
$ git checkout .
```

特定のファイルやディレクトリについて、コミットされていない編集を差し戻すこともできます。

```sh
$ git checkout [some_dir|file.txt]
```

コミットされていない編集を全て差し戻すのには次の方法もあります（コマンドが長いですが、全てのサブディレクトリから実行できます）。

```sh
$ git reset --hard HEAD
```

次を実行するとローカルのバージョン管理されていないファイルが全て削除されます。
つまり、Git で管理されているファイルだけ残ります。

```sh
$ git clean -fd
```

Git に無視されるファイルも全て取り除くには `-x` を指定します。

### ステージされていない特定の編集を破棄したい

ワークツリーの編集の全部ではなく一部だけを破棄したい場合です。

残したい編集だけを残し、残したくない編集をチェックアウトします。

```sh
$ git checkout -p
# 破棄したいコードすべてについて y と答える
```

もう一つの方法は `stash` を使います。残したい編集をスタッシュし、ワークツリーをリセットして、残したい編集を適用します。

```sh
$ git stash -p
# 残したいコードを全て選ぶ
$ git reset --hard
$ git stash pop
```

あるいは、残したくない編集をスタッシュして、スタッシュを破棄してもよいです。

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

ワークツリー上の複数のファイルを破棄したいときは、破棄したいファイルを列挙します。

```sh
$ git checkout myFirstFile mySecondFile
```

### ステージされていないローカルな編集だけを破棄したい

コミットもステージもされていないローカルの編集を全て破棄したいときは、次を実行します。

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
### 特定のステージされたファイルのステージを取り消したい

間違えてステージしたが、コミットはしていないファイルが一つまたは複数ある場合です。
そのステージを取り消すには次のようにします。

```sh
$ git reset -- <filename>
```

ファイルのステージが取り消され、バージョン管理されていないものとみなされます。

## ブランチ

### 全ブランチの一覧を表示したい

ローカルブランチの一覧を表示

```sh
$ git branch
```

リモートブランチの一覧を表示

```sh
$ git branch -r
```

ローカルとリモート両方のブランチの一覧を表示

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

これも `git reflog` を使う場面です。
間違ったプルの前に HEAD が参照していたものを表示します。

```sh
(master)$ git reflog
ab7555f HEAD@{0}: pull origin wrong-branch: Fast-forward
c5bc55a HEAD@{1}: checkout: checkout message goes here
```

ブランチを適切なコミットにリセットするだけです。

```sh
$ git reset --hard c5bc55a
```

これで完了です。

<a href="discard-local-commits"></a>
### ローカルのコミットを破棄して、ブランチをサーバ上と同じ状態にしたい

サーバに編集をプッシュしていないことを確認してください。

コマンド `git status` を実行すると、自分が origin に対して何コミット分作業を進めたのか表示されます。

```sh
(my-branch)$ git status
# On branch my-branch
# Your branch is ahead of 'origin/my-branch' by 2 commits.
#   (use "git push" to publish your local commits)
#
```

origin と同じ状態にリセットする（リモートと同じ状態にする）方法の一つは次の通りです。

```sh
(master)$ git reset --hard origin/my-branch
```

<a name="commit-wrong-branch"></a>
### 新しいブランチではなくマスターブランチにコミットしてしまった

マスターブランチにいたまま、新しいブランチを作成してください。

```sh
(master)$ git branch my-branch
```

マスターブランチを直前のコミットにリセットします。

```sh
(master)$ git reset --hard HEAD^
```

ここで `HEAD^` は `HEAD^1` の短縮形で、`HEAD` の第一の親を表します。
同様に `HEAD^2` は第二の親です（マージには親が二つあります）。

なお、`HEAD^2` は `HEAD~2` と**異なる**ことに注意してください（詳しくは[このリンク](http://www.paulboxley.com/blog/2011/06/git-caret-and-tilde)を参照してください）。

あるいは `HEAD^` を使いたくなければ、マスターブランチを差し戻したい先のコミットハッシュを探し（`git log` を使うとよいです）、そのハッシュにリセットします。
あとは `git push` すればリモートに反映されるはずです。

例えば、マスターブランチを差し戻したいコミットのハッシュが `a13b85e` なら、次のようにします。

```sh
(master)$ git reset --hard a13b85e
HEAD is now at a13b85e
```

作業に戻るため、新しいブランチにチェックアウトしましょう。

```sh
(master)$ git checkout my-branch
```

<a name="keep-whole-file"></a>
### ファイル全てをリファレンス的な場所に保存しておきたい

ワーキングスパイク（メモを参照）にたくさん編集があって、すべてうまく機能しているものとします。
この作業内容を保存しておくため、別のブランチにコミットします。

```sh
(solution)$ git add -A && git commit -m "Adding all changes from this spike into one big commit."
```

この内容をブランチ（フィーチャーブランチでも `develop` でも）に適用する際は、ファイル全部を保存しておきたいはずです。
大きなコミットを小さなコミットに分割します。

いま、次のブランチがあるものとします。

* `solution` ブランチ。スパイクを解消するためのブランチで、`develop` ブランチに対して一コミット分進んでいます。
* `develop` ブランチ。ここに編集を適用したいとします。

これは編集をブランチに適用することで可能です。

```sh
(develop)$ git checkout solution -- file1.txt
```

これで `solution` ブランチの内容が `develop` ブランチに適用されます。

```sh
# On branch develop
# Your branch is up-to-date with 'origin/develop'.
# Changes to be committed:
#  (use "git reset HEAD <file>..." to unstage)
#
#        modified:   file1.txt
```

あとは通常通りコミットしてください。

メモ：スパイクは問題を解析したり解決するためのものです。
解決法は判断にかけられたあと、共同開発者が問題を理解した時点で破棄されます。~ [Wikipedia](https://en.wikipedia.org/wiki/Extreme_programming_practices)

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

まず、次のようにしてマスターブランチをあるべきコミット `a13b85e` までリセットします。

```sh
(master)$ git reset --hard a13b85e
HEAD is now at a13b85e
```

これで、バグ #21 に対応する新しいブランチを作成できます。

```sh
(master)$ git checkout -b 21
(21)$
```

さて、このブランチにコミットを**チェリーピック**しましょう。
つまり、head が何であろうとそこに当該コミットだけを適用します。

```sh
(21)$ git cherry-pick e3851e8
```

この時点で、コミットのコンフリクトが発生しているかもしれません。
コンフリクトを解消する方法は、[interactive rebasing section above](#interactive-rebase) セクションの [**There were conflicts**](#merge-conflict) を参照してください。

次に、#14 に対応する、マスターに紐づいたブランチを作成しましょう。

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

GitHub でプルリクエストをマージすると、マージされたブランチを自分のフォークから削除する選択肢が出てきます。
そのブランチで今後作業するつもりがなければ、もはや使わないブランチで作業環境が散らからないように削除しておくほうが綺麗です。

```sh
$ git fetch -p upstream
```

ここで `upstream` は取得したい元のリモートを指します。

<a name='restore-a-deleted-branch'></a>
### 間違ってブランチを削除してしまった

いつもリモートにプッシュしているなら大抵大丈夫です。
ブランチを間違って削除してしまうのはよくあることです。

新しくブランチを作り、ファイルを新規作成したとします。

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

さて、ここで改良されたロガー `reflog` について学びましょう。
これはリポジトリの全ての操作履歴を保存しています。

```
(master)$ git reflog
69204cd HEAD@{0}: checkout: moving from my-branch to master
4e3cd85 HEAD@{1}: commit: foo.txt added
69204cd HEAD@{2}: checkout: moving from master to my-branch
```

このように、削除してしまったブランチのコミットが表示されています。
削除したブランチを復元してみましょう。

```sh
(master)$ git checkout -b my-branch-help
Switched to a new branch 'my-branch-help'
(my-branch-help)$ git reset --hard 4e3cd85
HEAD is now at 4e3cd85 foo.txt added
(my-branch-help)$ ls
README.md foo.txt
```

やった！　消えたファイルを取り戻しました。
コマンド `git reflog` は、リベースが滅茶苦茶になってしまったときにも便利です。

### ブランチを削除したい

リモートブランチを削除するには次を実行します。

```sh
(master)$ git push origin --delete my-branch
```

次のようにもできます。

```sh
(master)$ git push origin :my-branch
```

ローカルブランチを削除するには次の通りです。

```sh
(master)$ git branch -d my-branch
```

現在のブランチか upstream にマージ**されていない**ブランチを削除するには次のようにします。

```sh
(master)$ git branch -D my-branch
```

### 複数のブランチを削除したい

名前が `fix/` で始まるブランチを全て削除したいときは次の通りです。

```sh
(master)$ git branch | grep 'fix/' | xargs git branch -d
```

### ブランチの名前を変更したい

現在の（ローカル）ブランチの名前を変更するには次を実行します。

```sh
(master)$ git branch -m new-name
```

現在いるブランチと異なる（ローカル）ブランチの名前を変更するには次のようにします。

```sh
(master)$ git branch -m old-name new-name
```

古い名前（`old-name`）のリモートブランチを削除し、新しい名前（`new-name`）のブランチをプッシュするには次の通りです。
 
```sh
(master)$ git push origin :old_name new_name
```

<a name="i-want-to-checkout-to-a-remote-branch-that-someone-else-is-working-on"></a>
### 他の人が作業しているリモートブランチにチェックアウトしたい

まず、リモートから全ブランチを取得します。

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

これでローカルにブランチ `daves` のコピーが作成され、プッシュした編集がリモートに反映されるようになります。

### 現在のローカルブランチをもとに新しいリモートブランチを作成したい

```sh
$ git push <remote> HEAD
```

同時にこのリモートブランチを現在のブランチの upstream に設定したい場合は、代わりに次を実行します。

```sh
$ git push -u <remote> HEAD
```

`push.default` の設定が `upstream` モードか `simple` モード（Git 2.0 のデフォルト）になっている場合、次のコマンドを実行すると、以前に `-u` で登録したリモートブランチに現在のブランチをプッシュします。

```sh
$ git push
```

他のモードが `git push` でどう振る舞うかは、[`push.default` のドキュメント](https://git-scm.com/docs/git-config#git-config-pushdefault)で説明されています。

### リモートブランチをローカルブランチの upstream に設定したい

次のようにして、リモートブランチを現在いるローカルブランチの upstream に設定できます。

```sh
$ git branch --set-upstream-to [remotename]/[branch]
# or, using the shorthand:
$ git branch -u [remotename]/[branch]
```

別のローカルブランチの upstream に設定するには次のようにします。

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

`origin/HEAD` が `origin/master` を追跡するよう設定し直すには、次を実行します：

```sh
$ git remote set-head origin --auto
origin/HEAD set to master
```

### 間違ったブランチを編集してしまった

まだコミットしていない編集を加えたあと、間違ったブランチにいることに気づいたとします。
編集をスタッシュして、適切なブランチに適用すれば大丈夫です。

```sh
(wrong_branch)$ git stash
(wrong_branch)$ git checkout <correct_branch>
(correct_branch)$ git stash apply
```

## リベースとマージ

<a name="undo-rebase"></a>
### リベースやマージを取り消したい

現在のブランチを間違ったブランチにリベースないしマージしてしまった、あるいはリベースないしマージができなさそうだと気づいたとしましょう。
Git は危険な操作の前に HEAD が指すものを変数 `ORIG_HEAD` に保存しているので、ブランチをリベースないしマージの前の状態に差し戻すのは簡単です。

```sh
(my-branch)$ git reset --hard ORIG_HEAD
```

<a name="force-push-rebase"></a>
### リベースしたが、強制プッシュはしたくない

残念ながら、編集をリモートブランチに反映させるには強制プッシュをする必要があります。
編集履歴を変えてしまったからです。
強制プッシュしない限り、リモートブランチは編集を受け付けません。
これが多くの人がリベースワークフローではなくマージワークフローを使う主な理由です。
特に大規模な開発チームは強制プッシュでハマりやすいです。
リベースの強制プッシュは注意して使いましょう。
リベースの安全な使い方は、リモートには編集を反映させずに、代わりに次を実行することです。

```sh
(master)$ git checkout my-branch
(my-branch)$ git rebase -i master
(my-branch)$ git checkout master
(master)$ git merge --ff-only my-branch
```

詳しくは[この StackOverflow スレッド](https://stackoverflow.com/questions/11058312/how-can-i-use-git-rebase-without-requiring-a-forced-push)を参照してください。

<a name="interactive-rebase"></a>
### コミットを統合したい

`master` ブランチにプルリクエストを送る、あるいはこれから送るつもりのブランチで作業しているとします。
最も単純なケースとして、タイムスタンプを気にせずコミット**全部**を一つにまとめたいとします。
この場合はリセットと再コミットを行います。
マスターブランチが最新版で、編集がすべてコミットされていることを確認した上で、次を実行してください。

```sh
(my-branch)$ git reset --soft master
(my-branch)$ git commit -am "New awesome feature"
```

もっと細かく設定し、タイムスタンプも残したい場合は、対話的リベースを使います。

```sh
(my-branch)$ git rebase -i master
```

別のブランチで作業しているわけではない場合、`HEAD` に対してリベースする必要があります。
たとえば直近二件のコミットを圧縮 (squash) したい場合は `HEAD~2`、直近三件なら `HEAD~3` です。

```sh
(master)$ git rebase -i HEAD~2
```

対話的リベースのコマンドを実行したら、テキストエディタに次のように表示されます。

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

コマンド `pick` をリストの好きなコマンドで書きかえればよいです。
行を削除すればコミットを削除できます。

例えば、**一番古い（一番目の）コミットはそのまま残し、他のコミット全てを二番目のコミットに統合したい**場合は、最初と二番目以外のコミットの横の文字を `f` に書きかえます。

```vim
pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
f b729ad5 fixup
f e3851e8 another fix
```

コミットを統合し、**さらに名前も変更したい**場合は、二番目のコミットの横にさらに `r` の文字を追加するか、あるいは単に `f` の代わりに `s` を使います。

```vim
pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
s b729ad5 fixup
s e3851e8 another fix
```

するとテキストエディタが起動し、コミットの名前を変更できます。

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

うまくいくと次のように表示されるはずです。

```sh
(master)$ Successfully rebased and updated refs/heads/master.
```

#### 安全なマージの方法

オプション `--no-commit` を指定すると、マージを実行しつつ、あたかもマージが失敗したかのように扱って自動コミットはしません。
これにより、コミットの前にマージの結果を精査したり調整できます。
オプション `--no-ff` はフィーチャーブランチが存在したことを記録に残しておき、プロジェクト履歴の一貫性を保ちます。

```sh
(master)$ git merge --no-ff --no-commit my-branch
```

#### ブランチを一つのコミットにまとめたい場合

```sh
(master)$ git merge --squash my-branch
```

<a name="rebase-unpushed-commits"></a>
#### プッシュされていないコミットのみを統合したい場合

進行中の作業に関するコミットがいくつかあって、upstream にコミットする前に統合しておきたいとします。
すでに upstream にプッシュされたコミットは、誰かがそれを参照するコミットをしている可能性があるので、それは統合しないでおきたいとします。

```sh
(master)$ git rebase -i @{u}
```

上を実行すると対話的リベースが始まりますが、一覧にはまだプッシュされていないコミットだけが表示されます。
これで順番を入れ替えたり、修正したり、圧縮 (squash) したりしても安全です。

#### マージを中止したい

マージがファイルに問題をきたすことがあります。
こういうときはオプション `abort` を使うとコンフリクト解消の作業を中止し、マージの前の状態の復元を試みることができます。

```sh
(my-branch)$ git merge --abort
```

ただし、このコマンドが使えるのはバージョン 1.7.4 以上の Git に限ります。

### ブランチの親コミットを更新したい

マスターブランチとそこから分岐した feature-1 ブランチがあり、feature-1 からさらに分岐した feature-2 ブランチがあるとします。
いま feature-1 ブランチにコミットしたとすると、feature-2 ブランチの親コミットはもはや正確ではありません（feature-1 から分岐したので、親コミットは feature-1 ブランチの head であるべきです。）
こういうときは `git rebase --onto` で修正できます。

```sh
(feature-2)$ git rebase --onto feature-1 <the first commit in your feature-2 branch that you don't want to bring along> feature-2
```

まだマージされていないブランチからフィーチャーブランチを分岐させており、feature-1 ブランチのバグ修正を feature-2 に反映させたいときに便利です。

### ブランチの全コミットがマージされているか確認する

ブランチの全コミットが別のブランチにマージされているか確認するには、それぞれのブランチの head（あるいは任意のコミット）の間の差分を表示します。

```sh
(master)$ git log --graph --left-right --cherry-pick --oneline HEAD...feature/120-on-scroll
```

一方のブランチにしかないコミットがあるか表示され、ブランチ間で共有されていないコミットの一覧がわかります。
もう一つの方法は次の通りです。

```sh
(master)$ git log master ^feature/120-on-scroll --no-merges
```

### 対話的リベースで起こりうる問題

<a name="noop"></a>
#### リベース編集画面に 'noop' と表示される

次のように表示された場合です。

```
noop
```

これは、同じコミットのブランチ、あるいは現在のブランチよりも*先*にあるブランチに対してリベースしようとしたときに表示されます。
この場合は、

* マスターブランチが正しい場所にあることを確認してください。
* `HEAD~2` あるいはより以前にリベースしてください。

<a name="merge-conflict"></a>
#### コンフリクトがあった

リベースができないときは、解消すべきコンフリクトがあるかもしれません。

まず `git status` で、どのファイルがコンフリクトを起こしているか確認します。

```sh
(my-branch)$ git status
On branch my-branch
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  both modified:   README.md
```

この例では `README.md` にコンフリクトがあります。
ファイルを開き、次のようになっている箇所を見てみましょう。

```vim
   <<<<<<< HEAD
   some code
   =========
   some code
   >>>>>>> new-commit
```

`HEAD` と新しいコミットで加えられたコードの間の差分（この例では、真ん中の行から `new-commit` の間にあるコード）を解消する必要があります。

一方のブランチの版のコードを残したい場合は、`--ours` あるいは `--theirs` を指定します。

```sh
(master*)$ git checkout --ours README.md
```

- *マージする*場合、ローカルブランチの編集を残したいとき `--ours` を指定し、他方の編集を残したいとき `--theirs` を指定します。
- *リベースする*場合、ローカルブランチの編集を残したいとき `--theirs` を指定し、他方の編集を残したいとき `--ours` を指定します。このように逆転する理由は[ Git ドキュメントのこのノート](https://git-scm.com/docs/git-rebase#git-rebase---merge)を参照してください。

マージがもっと複雑なときは、ビジュアル差分エディタを使うとよいです。

```sh
(master*)$ git mergetool -t opendiff
```

コンフリクトを全て解消し、コードのテストが済んだら、`git add ` で編集をステージし、`git rebase --continue` でリベースを再開します。

```sh
(my-branch)$ git add README.md
(my-branch)$ git rebase --continue
```

コンフリクトを解消した結果、ワーキングツリーがコミット前と全く同じ状態になった場合は、代わりに `git rebase --skip` を実行します。

リベース作業を全て中止し、ブランチを元の状態に差し戻したい場合は、次を実行します。

```sh
(my-branch)$ git rebase --abort
```

<a name="stashing"></a>
## スタッシュ

### 全ての編集をスタッシュしたい

ワーキングディレクトリの編集を全てスタッシュするには、次を実行します。

```sh
$ git stash
```

バージョン管理されていないファイルもスタッシュしたいときは、オプション `-u` を指定します。

```sh
$ git stash -u
```

### 特定のファイルをスタッシュしたい

ワーキングディレクトリのファイル一つをスタッシュするには、次を実行します。

```sh
$ git stash push working-directory-path/filename.ext
```

ワーキングディレクトリの複数のファイルをスタッシュするときは次の通りです。

```sh
$ git stash push working-directory-path/filename1.ext working-directory-path/filename2.ext
```

<a name="stash-msg"></a>
### メッセージをつけてスタッシュしたい

```sh
$ git stash save <message>
```

あるいは次の通りです。

```sh
$ git stash push -m <message>
```

<a name="stash-apply-specific"></a>
### 一覧から特定のスタッシュを選んで適用したい

まず、次のようにしてスタッシュの一覧をメッセージとともに表示します。

```sh
$ git stash list
```

そして、次のようにして特定のスタッシュを選び適用します。

```sh
$ git stash apply "stash@{n}"
```

ここで、`n` は一覧の中のスタッシュの位置を指します。一番上のスタッシュなら 0 番です。

また、時刻からスタッシュを指定することもできます。

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

## 検索

### 全コミットから文字列を検索したい

どこかのコミットで導入された文字列を検索したいときは、次のコマンドを使います。

```sh
$ git log -S "string to find"
```

よく使われるパラメータは次の通りです。

* `--source` はコマンドラインでつけられた各コミットの参照名を表示します。
* `--all` は全てのブランチから検索します。
* `--reverse` は逆順に表示します。すなわち最初のコミットから表示します。

<a name="i-want-to-find-by-author-committer"></a>
### author または committer から検索する

全てのコミットを author または committer の名前から検索するには次のようにします。

```sh
$ git log --author=<name or email>
$ git log --committer=<name or email>
```

なお、author と committer は異なることに注意してください。
`--author` ははじめにコードを書いた人、`--committer` は author の代わりにコミットした人を指します。

### 特定のファイルを含むコミットの一覧を表示したい

特定のファイルを含むコミットの一覧を表示するには、次を実行します。

```sh
$ git log -- <path to file>
```

通常は正確なパスを指定しますが、パスやファイル名にワイルドカードを使うこともできます。

```sh
$ git log -- **/*.js
```

ワイルドカードを使う際は、`--name-status` を指定すると、コミットされたファイルの一覧が表示されて便利です。

```sh
$ git log --name-status -- **/*.js
```

<a name="#i-want-to-view-the-commit-history-for-a-specific-function"></a>
### 特定の関数に関するコミット履歴を見たい

特定の関数の履歴を追跡するには次を実行します。

```sh
$ git log -L :FunctionName:FilePath
```

このコマンドは `git log` の他のオプション、例えば [revision ranges](https://git-scm.com/docs/gitrevisions) や [commit limits](https://git-scm.com/docs/git-log/#_commit_limiting) と一緒に使うことができます。

### コミットが参照されているタグを検索したい

特定のコミットを含むタグを検索するには次のようにします。

```sh
$ git tag --contains <commitid>
```

## サブモジュール

<a name="clone-submodules"></a>
### 全てのサブモジュールをクローンする

```sh
$ git clone --recursive git://github.com/foo/bar.git
```

すでにクローンしている場合は次の通りです。

```sh
$ git submodule update --init --recursive
```

<a name="delete-submodule"></a>
### サブモジュールを削除する

サブモジュールの作成はきわめて簡単ですが、削除はそうでもありません。
削除に必要なコマンドは次の通りです。

```sh
$ git submodule deinit submodulename
$ git rm submodulename
$ git rm --cached submodulename
$ rm -rf .git/modules/submodulename
```

## その他色々

### あるブランチから別のブランチにフォルダをコピーしたい

```sh
$ git checkout <branch-you-want-the-directory-from> -- <folder-name or file-name>
```

### 削除されたファイルを復元したい

まず、ファイルが最後に存在していたコミットを探します。

```sh
$ git rev-list -n 1 HEAD -- filename
```

見つけたら、ファイルをチェックアウトします。

```
git checkout deletingcommitid^ -- filename
```

### タグを削除したい

```sh
$ git tag -d <tag_name>
$ git push <remote> :refs/tags/<tag_name>
```

<a name="recover-tag"></a>
### 削除されたタグを復元したい

削除されたタグを復元する手順は次の通りです。
まず、unreachable になったタグを探します。

```sh
$ git fsck --unreachable | grep tag
```

タグのハッシュをメモしておきます。
続いて、次のように [`git update-ref`](https://git-scm.com/docs/git-update-ref) で削除されたタグを復元します。

```sh
$ git update-ref refs/tags/<tag_name> <hash>
```

これでタグが復元されたはずです。

### 削除されたパッチを取得したい

誰かが GitHub でプルリクエストを送ったあとにフォークを削除してしまった場合、そのリポジトリをクローンしたり、`git am` でパッチを適用することができなくなります。
[.diff や .patch](https://github.com/blog/967-github-secrets) の URL が使えなくなってしまうためです。
しかし、[GitHub 独自の参照](https://gist.github.com/piscisaureus/3342247)を使って、プルリクエスト自体をチェックアウトすることができます。
プルリクエスト #1 の内容を新しいブランチ pr_1 に取得するには、次を実行します。

```sh
$ git fetch origin refs/pull/1/head:pr_1
From github.com:foo/bar
 * [new ref]         refs/pull/1/head -> pr_1
```

### リポジトリを zip ファイルとしてエクスポートしたい

```sh
$ git archive --format zip --output /full/path/to/zipfile.zip master
```

### 同じ名前のブランチとタグをプッシュしたい

ブランチと同じ名前のタグがリモートリポジトリに存在する場合、通常通り `git push <remote> <branch>` でプッシュしようとすると、次のようなエラーが出ます。

```sh
$ git push origin <branch>
error: dst refspec same matches more than one.
error: failed to push some refs to '<git server>'
```

このエラーはブランチのヘッドを指定することで回避できます。

```sh
$ git push origin refs/heads/<branch-name>
```

同名のブランチがリモートリポジトリにあるタグをプッシュしたいときも、似たコマンドを使います。

```sh
$ git push origin refs/tags/<tag-name>
```

## ファイルの追跡

<a href="i-want-to-change-a-file-names-capitalization-without-changing-the-contents-of-the-file"></a>
### ファイルの内容は変えずに、ファイル名の大文字・小文字を変更したい

```sh
(master)$ git mv --force myfile MyFile
```

### git pull してローカルのファイルを上書きしたい

```sh
(master)$ git fetch --all
(master)$ git reset --hard origin/master
```

<a href="remove-from-git"></a>
### ファイルを残しつつ Git から削除したい

```sh
(master)$ git rm --cached log.txt
```

### ファイルを特定の版まで差し戻したい

差し戻したいコミットのハッシュが `c5f567` なら、次を実行します。

```sh
(master)$ git checkout c5f567 -- file1/to/restore file2/to/restore
```

差し戻したいコミットが c5f567 の一つ前なら、コミットハッシュに `c5f567~1` を指定します。

```sh
(master)$ git checkout c5f567~1 -- file1/to/restore file2/to/restore
```

### 特定のファイルのコミット間・ブランチ間の差分を表示したい

コミット c5f567 とその一つ前の間の差分を表示したい場合、次を実行します。

```sh
$ git diff HEAD:path_to_file/file c5f567:path_to_file/file
```

ブランチでも同様です。

```sh
$ git diff master:path_to_file/file staging:path_to_file/file
```

### 特定のファイルの変更を無視したい

これはローカル環境で設定テンプレートにコミットできない認証情報を追加する必要があるときなどに役立ちます。

```sh
$ git update-index --assume-unchanged file-to-ignore
```

ファイルがバージョン管理されなくなるわけでは*ない*ことに注意してください。ローカルで無視されるだけです。
設定を取り消して変更を再び追跡するには、次のように ignore フラッグを削除します。

```sh
$ git update-index --no-assume-unchanged file-to-stop-ignoring
```

## Git によるデバッグ

コマンド [git-bisect](https://git-scm.com/docs/git-bisect) は、Git 履歴を二分探索してバグをもたらしたコミットを探します。

いま `master` ブランチにいるとして、失敗をやらかしたコミットを探してみましょう。
次のコマンドで二分探索を始めます。

```sh
$ git bisect start
```

問題のあるコミットとないコミットを指定する必要があります。
*現在の*バージョンに問題があり、`v1.1.1` は問題ないとします。

```sh
$ git bisect bad
$ git bisect good v1.1.1
```

すると、`git-bisect` は選んだバージョンの中間のコミットを選んで調べ、問題があるかどうか尋ねてきます。
次のように表示されるはずです。

```sh
$ Bisecting: 5 revision left to test after this (roughly 5 step)
$ [c44abbbee29cb93d8499283101fe7c8d9d97f0fe] Commit message
$ (c44abbb)$
```

このコミットに問題があるか調べましょう。
問題がない (good) 場合は次を実行します。

```sh
$ (c44abbb)$ git bisect good
```

すると、`git-bisect` はまた別のコミットを選択します。
このように `good` か `bad` を選んでいく作業は、調べるコミットがなくなるまで続きます。
終了したら、コマンドラインには問題をきたした**最初の**コミットの詳細が表示されます。

## 設定

### Git コマンドにエイリアスを設定したい

OS X と Linux では、Git 設定ファイルは ```~/.gitconfig``` に保存されています。
私の場合、ショートカット（とよくやるタイポ）のために次のようなものを ```[alias]``` セクションに設定しています。

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

### 空のディレクトリをリポジトリに加えたい

できません！　Git ではできませんが、ハックする方法があります。
次のような内容の .gitignore を作成してディレクトリに加えればよいです。

```
 # Ignore everything in this directory
 *
 # Except this file
 !.gitignore
```

もう一つのよくある方法は、.gitkeep という名前の空のファイルをディレクトリに作成することです。

```sh
$ mkdir mydir
$ touch mydir/.gitkeep
```

単に .keep という名前でもよいです。この場合、二行目は ```touch mydir/.keep``` とします。

### リポジトリへのユーザ名とパスワードをキャッシュしたい

認証が必要なリポジトリがあるとします。
ユーザ名とパスワードをキャッシュしておけば、プッシュやプルのたび入力せずに済みます。
認証情報ヘルパーが役に立ちます。

```sh
$ git config --global credential.helper cache
# Git が認証情報キャッシュを使うよう設定する
```

```sh
$ git config --global credential.helper 'cache --timeout=3600'
# キャッシュが一時間でタイムアウトするよう設定する（設定は秒単位）
```

認証情報ヘルパーを探すには、次のコマンドを実行します。

```sh
$ git help -a | grep credential
# 認証情報ヘルパーの候補が表示される
```

OS 固有の認証情報キャッシュは次の通りです。

```sh
$ git config --global credential.helper osxkeychain
# OSX
```

```sh
$ git config --global credential.helper manager
# Git for Windows 2.7.3+
```

```sh
$ git config --global credential.helper gnome-keyring
# Ubuntu やその他の GNOME ベースディストリビューション
```

その他のディストリビューションや OS 向けの認証情報キャッシュもあります。

### パーミッションとファイルモードの変更を Git が無視するようにしたい

```sh
$ git config core.fileMode false
```


これをログインユーザ向けのデフォルト設定にしたい場合、次を実行します。

```sh
$ git config --global core.fileMode false
```

### グローバルユーザを設定したい

全てのローカルリポジトリにわたるユーザ情報を設定し、バージョン履歴のレビューの際にわかりやすい名前を設定するには、次のようにします。

```sh
$ git config --global user.name “[firstname lastname]”
```

各履歴のマーカーに紐づけられるメールアドレスを設定したい場合は次の通りです。

```sh
git config --global user.email “[valid-email]”
```

### Git のコマンドラインに色をつけたい

レビューの際に見やすいようコマンドラインに自動で色を付けるには、次を実行します。

```sh
$ git config --global color.ui auto
```

## 何を間違ったかわからないとき

何かやらかした場合です。つまり、何かを `reset` してしまった、間違ったブランチをマージしてしまった、あるいは強制プッシュしてしまいコミットが見つけられない、といった状況です。
ある時点まではうまくいっていたので、その状態に戻したいとします。

こうしたときに `git reflog` が役に立ちます。
`reflog` は、ブランチが他のブランチやタグに参照されていなくても、ブランチになされた変更を記録しています。
HEAD が変更される際は基本的に reflog に記録が追加されます。
ただ、残念ながら機能するのはローカルリポジトリのみで、記録するのは変化だけです（たとえば、どこにも記録されていないファイルへの変更は記録されません）。

```sh
(master)$ git reflog
0a2e358 HEAD@{0}: reset: moving to HEAD~2
0254ea7 HEAD@{1}: checkout: moving from 2.2 to master
c10f740 HEAD@{2}: checkout: moving from master to 2.2
```

上の reflog には、master から 2.2 へのチェックアウトが表示されています。
それから古いコミットへの hard reset があります。
最新のアクティビティは一番上に `HEAD@{0}` のラベルで表示されます。

間違えて差し戻ししてしまったとします。
コミット二つを間違って捨ててしまう前の、`0254ea7` を参照するコミットを reflog は保持しています。

```sh
$ git reset --hard 0254ea7
```

コマンド `git reset` を使って、マスターブランチを以前の状態に戻すことができます。履歴を間違えて変更してしまった場合の安全策です。

（[出典](https://www.atlassian.com/git/tutorials/rewriting-history/git-reflog) からコピー・改変しました。）

<a name="git-shortcuts"></a>
## Git ショートカット

### Git Bash

上記のコマンドに慣れてきたら、Git Bash のショートカットを作りたくなるはずです。複雑なタスクを短いコマンドで素早く行うことができるようになります。

```sh
alias sq=squash

function squash() {
    git rebase -i HEAD~$1
}
```

このコマンドを .bashrc か .bash_profile にコピーしてください。

### Windows の PowerShell

Windows で PowerShell を使っているなら、エイリアスや関数を作成できます。profile に次のコマンドを追加してください。profile のパスは `$profile` に定義されています。詳しくは Microsoft のドキュメントサイトの [About Profiles](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles) を参照してください。

```powershell
Set-Alias sq Squash-Commits

function Squash-Commits {
  git rebase -i HEAD~$1
}
```

# 文献

## 本

* [Learn Enough Git to Be Dangerous](https://www.learnenough.com/git-tutorial) - Git の基礎からカバーした Michael Hartl の本
* [Pro Git](https://git-scm.com/book/en/v2) - Scott Chacon と Ben Straub による Git に関する素晴らしい本
* [Git Internals](https://github.com/pluralsight/git-internals-pdf) - Scott Chacon による Git に関する素晴らしい本
* [Nasa handbook](https://www.nasa.gov/sites/default/files/atoms/files/nasa_systems_engineering_handbook.pdf)

## チュートリアル

* [19 Git Tips For Everyday Use](https://www.alexkras.com/19-git-tips-for-everyday-use) - Git の便利なワンライナーの一覧
* [Atlassian's Git tutorial](https://www.atlassian.com/git/tutorials) - 初心者から上級者までチュートリアルで Git を正しく使おう
* [Learn Git branching](https://learngitbranching.js.org/) - web で動くブランチ・マージ・リベースの対話的なチュートリアル
* [Getting solid at Git rebase vs. merge](https://medium.com/@porteneuve/getting-solid-at-git-rebase-vs-merge-4fa1a48c53aa)
* [Git Commands and Best Practices Cheat Sheet](https://zeroturnaround.com/rebellabs/git-commands-and-best-practices-cheat-sheet) - ブログ投稿にあるもっと説明の豊富な Git チートシート
* [Git from the inside out](https://codewords.recurse.com/issues/two/git-from-the-inside-out) - Git の内部に踏み込んだチュートリアル
* [git-workflow](https://github.com/asmeurer/git-workflow) - [Aaron Meurer](https://github.com/asmeurer) による Git を使ってオープンソースリポジトリに貢献する方法の解説
* [GitHub as a workflow](https://hugogiraudel.com/2015/08/13/github-as-a-workflow/) - GitHub を、特に空のプルリクエストを用いてワークフローとして使う面白い試み
* [Githug](https://github.com/Gazler/githug) - よく使う Git ワークフローを学ぶゲーム
* [learnGitBranching](https://github.com/pcottle/learnGitBranching) - 刺激を得たり教育に使える git の可視化

## スクリプトとツール

* [firstaidgit.io](http://firstaidgit.io/) - 検索可能な Git のよくある質問集
* [git-extra-commands](https://github.com/unixorn/git-extra-commands) - 便利な Git スクリプトのコレクション
* [git-extras](https://github.com/tj/git-extras) - Git の 便利機能 -- リポジトリの要約、REPL、編集履歴の人口、開発者ごとのコミット率など
* [git-fire](https://github.com/qw3rtman/git-fire) - 緊急時に（マージのコンフリクトを防ぐため）新しいブランチに全ファイルを追加・コミット・プッシュする Git のプラグイン
* [git-tips](https://github.com/git-tips/tips) - ちょっとした Git のコツ
* [git-town](https://github.com/Originate/git-town) - 一般的でハイレベルな Git ワークフローのサポート http://www.git-town.com

## GUI クライアント
* [GitKraken](https://www.gitkraken.com/) - Windows, Mac, Linux 向けの真正で豪華な Git クライアント
* [git-cola](https://git-cola.github.io/) - Windows と OS X 向けのもう一つの Git クライアント
* [GitUp](https://github.com/git-up/GitUp) - Git の問題に対処する志向の強い方法をそなえた新しい GUI クライアント
* [gitx-dev](https://rowanj.github.io/gitx/) - OS X 向けのグラフィカル Git クライアント
* [Sourcetree](https://www.sourcetreeapp.com/) - シンプルさと強力さを兼ね備えた Windows と Mac 向けの美しい Git GUI です。で動きます。
* [Tower](https://www.git-tower.com/) - OS X で動くグラフィカル Git クライアント（有料）
* [tig](https://jonas.github.io/tig/) - Git のターミナルテキストモードインターフェース
* [Magit](https://magit.vc/) - Emacs のパッケージとして実装された Git のインターフェース
* [GitExtensions](https://github.com/gitextensions/gitextensions) - シェル拡張・Visual Studio 2010-2015 プラグイン・スタンドアローンの Git リポジトリツール
* [Fork](https://git-fork.com/) - Mac で動く高速で使いやすい Git クライアント（ベータ版）
* [gmaster](https://gmaster.io/) - Windows で動く、三者間マージ、リファクタリング解析、セマンティック差分とマージのできる Git クライアント（ベータ版）
* [gitk](https://git-scm.com/docs/gitk) - Linux 向けのリポジトリの状態をシンプルに見られる Git クライアント
* [SublimeMerge](https://www.sublimemerge.com/) - 三者間マージ・強力な検索機能・シンタックスハイライトをそなえた驚異的に高速で拡張性の高いクライアント。活発に開発されている

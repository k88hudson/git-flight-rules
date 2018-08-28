# 깃을 위한 flight rules

🌍
*[English](README.md) ∙ [Español](README_es.md)  ∙  [Русский](README_ru.md) ∙ [简体中文](README_zh-CN.md)∙ [한국어](README_kr.md)*

#### flight rules 가 뭐야?

뭔가 잘못 됐을 때 뭘 해야할지에 대한 [우주비행사를 위한 가이드](https://www.jsc.nasa.gov/news/columbia/fr_generic.pdf) (여기선 깃을 쓰는 개발자를 위한) 


>  *Flight Rules* 는 X가 발생한 이유와 그 단계의 매뉴얼에서 어렵사리 얻은 지식이에요. 기본적으로 각 시나리오의 매우 자세하고 구체적인 운영 절차랍니다. [...]

> NASA는 수성(Mecury) 시대 때 지상팀에서 처음으로 "lessons learned" 이란 것을 모았는데 수천개의 문제의 상황들, 부서진 해치 손잡이로 인한 엔진 고장부터 컴퓨터 문제 그리고 그 해답까지, 1960년대 초부터 우리의 실수들, 재앙들, 해결책들을 목록화 돼있어요. 

— Chris Hadfield, *인생을 위한 우주비행사의 가이드*.

#### 이 문서의 규칙

명확성을 위해 이 문서의 모든 예제는 현재 브랜치를 표시하고 스테이지에 변경이 있는지를 나타내기 위해 커스텀 된 배시 프롬프트를 써요. 
브랜치는 괄호 안에 있고, 브랜치 다음의 *는 스테이지의 변경된 것을 나타내요.  

[![Join the chat at https://gitter.im/k88hudson/git-flight-rules](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/k88hudson/git-flight-rules?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Repositories](#repositories)
  - [I want to start a local repository](#i-want-to-start-a-local-repository)
  - [I want to clone a remote repository](#i-want-to-clone-a-remote-repository)
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
- [Staging](#staging)
  - [I need to add staged changes to the previous commit](#i-need-to-add-staged-changes-to-the-previous-commit)
  - [I want to stage part of a new file, but not the whole file](#i-want-to-stage-part-of-a-new-file-but-not-the-whole-file)
  - [I want to add changes in one file to two different commits](#i-want-to-add-changes-in-one-file-to-two-different-commits)
  - [I want to stage my unstaged edits, and unstage my staged edits](#i-want-to-stage-my-unstaged-edits-and-unstage-my-staged-edits)
- [Unstaged Edits](#unstaged-edits)
  - [I want to move my unstaged edits to a new branch](#i-want-to-move-my-unstaged-edits-to-a-new-branch)
  - [I want to move my unstaged edits to a different, existing branch](#i-want-to-move-my-unstaged-edits-to-a-different-existing-branch)
  - [I want to discard my local uncommitted changes (staged and unstaged)](#i-want-to-discard-my-local-uncommitted-changes-staged-and-unstaged)
  - [I want to discard specific unstaged changes](#i-want-to-discard-specific-unstaged-changes)
  - [I want to discard specific unstaged files](#i-want-to-discard-specific-unstaged-files)
  - [I want to discard only my unstaged local changes](#i-want-to-discard-only-my-unstaged-local-changes)
  - [I want to discard all of my untracked files](#i-want-to-discard-all-of-my-untracked-files)
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
  - [Check if all commits on a branch are merged](#check-if-all-commits-on-a-branch-are-merged)
  - [Possible issues with interactive rebases](#possible-issues-with-interactive-rebases)
    - [The rebase editing screen says 'noop'](#the-rebase-editing-screen-says-noop)
    - [There were conflicts](#there-were-conflicts)
- [Stash](#stash)
  - [Stash all edits](#stash-all-edits)
  - [Stash specific files](#stash-specific-files)
  - [Stash with message](#stash-with-message)
  - [Apply a specific stash from list](#apply-a-specific-stash-from-list)
- [Finding](#finding)
  - [I want to find a string in any commit](#i-want-to-find-a-string-in-any-commit)
  - [I want to find by author/committer](#i-want-to-find-by-authorcommitter)
  - [I want to list commits containing specific files](#i-want-to-list-commits-containing-specific-files)
  - [Find a tag where a commit is referenced](#find-a-tag-where-a-commit-is-referenced)
- [Submodules](#submodules)
  - [Clone all submodules](#clone-all-submodules)
  - [Remove a submodule](#remove-a-submodule)
- [Miscellaneous Objects](#miscellaneous-objects)
  - [Restore a deleted file](#restore-a-deleted-file)
  - [Delete tag](#delete-tag)
  - [Recover a deleted tag](#recover-a-deleted-tag)
  - [Deleted Patch](#deleted-patch)
  - [Exporting a repository as a Zip file](#exporting-a-repository-as-a-zip-file)
- [Tracking Files](#tracking-files)
  - [I want to change a file name's capitalization, without changing the contents of the file](#i-want-to-change-a-file-names-capitalization-without-changing-the-contents-of-the-file)
  - [I want to overwrite local files when doing a git pull](#i-want-to-overwrite-local-files-when-doing-a-git-pull)
  - [I want to remove a file from Git but keep the file](#i-want-to-remove-a-file-from-git-but-keep-the-file)
  - [I want to revert a file to a specific revision](#i-want-to-revert-a-file-to-a-specific-revision)
  - [I want to list changes of a specific file between commits or branches](#i-want-to-list-changes-of-a-specific-file-between-commits-or-branches)
- [Configuration](#configuration)
  - [I want to add aliases for some Git commands](#i-want-to-add-aliases-for-some-git-commands)
  - [I want to add an empty directory to my repository](#i-want-to-add-an-empty-directory-to-my-repository)
  - [I want to cache a username and password for a repository](#i-want-to-cache-a-username-and-password-for-a-repository)
  - [I want to make Git ignore permissions and filemode changes](#i-want-to-make-git-ignore-permissions-and-filemode-changes)
  - [I want to set a global user](#i-want-to-set-a-global-user)
  - [I want to add command line coloring for Git](#i-want-to-add-command-line-coloring-for-git)
- [I've no idea what I did wrong](#ive-no-idea-what-i-did-wrong)
  - [Other Resources](#other-resources)
- [Books](#books)
- [Tutorials](#tutorials)
- [Scripts and Tools](#scripts-and-tools)
- [GUI Clients](#gui-clients)

## 레파지토리

### 로컬 레파지토리에서 시작하고 싶어

이미 존재하는 프로젝트 디렉토리를 깃 레파지토리로 최적화해 쓰려면:

```sh
(my-folder) $ git init
```

### 난 리모트 레파지토리를 복제해오고 싶어

리모트 레파지토리를 클론하려면, 레파지토리 URL을 복사해와서 실행해요.

```sh
$ git clone [url]
```

폴더 이름이 리모트 레파지토리 이름과 같이 저장될꺼에요. 

복제할 리모트 서버의 연결을 확인하세요.(대부분 인터넷 연결을 확인하란 뜻이에요)

다른 레파지토리 이름으로 복제를 해오고 싶다면

```sh
$ git clone [url] name-of-new-folder
```

## 커밋 수정

<a name="diff-last"></a>
<!-- ### What did I just commit? -->

### 내가 방금 어떤 커밋을 남겼지?

`git commit -a` 로 막 커밋을 남기고 내가 뭐라고 안에 적었더라? 한다고 하고. 최근의 커밋을 현재 HEAD에서 볼 수 있어요.

```sh
(master)$ git show
```

또는 

```sh
$ git log -n1 -p
```

만약 특정 커밋의 파일을 보고 싶다면, 이렇게 할 수도 있어요. (commitID는 바로 당신이 관심있는 그 commit이에요)

```sh
$ git show <commitid>:filename
```

### 커밋 메세지를 잘못 썻어

만약 메시지를 잘못 썻고 아직 푸쉬를 안했다면, 커밋 메시지 바꾸기를 따라해 볼 수 있어요.

```sh
$ git commit --amend
```

이 방법은 편집 가능한 기본 텍스트르 에디터가 열릴텐데요, 다른 방법으론 한줄에 쓸 수도 있어요.

```sh
$ git commit --amend -m 'xxxxxxx'
```

만약 푸시를 이미 했다면, 커밋을 수정해서 강제 푸시를 할 수 있긴한대 별로 추천하진 않아요.

<a name="commit-wrong-author"></a>
### 커밋을 다른 이름과 이메일 설정으로 해버렸어

하나의 커밋이라면 이렇게 수정해요.

```sh
$ git commit --amend --no-edit --author "New Authorname <authoremail@mydomain.com>"
```

대안으로는 `git config --global author.(name|email)`에서 설정을 다시 맞춘 다음  

```sh
$ git commit --amend --reset-author --no-edit
```

만약 전체 이력 변경이 필요하다면, `git filter-branch`의 설명 페이지를 봐요.

### 지난 커밋에서 파일 하나를 지우고 싶어

지난 커밋에서 파일 변경내역을 지우려면, 이렇게 해봐요:

```sh
$ git checkout HEAD^ myfile
$ git add myfile
$ git commit --amend --no-edit
```

그 파일이 새롭게 커밋으로 추가됐고 그 파일만 지우고 (git 에서만) 싶은 경우엔,

```sh
$ git rm --cached myfile
$ git commit --amend --no-edit
```

이 방법은 열린 패치가 있고 불필요한 파일을 커밋 했거나 리모트에 강제 푸시로 패치를 업데이트 해야할때 특히 유용해요. `--no-edit` 옵션은 기존 커밋 메세지를 유지하는데 사용돼요.

<a name="delete-pushed-commit"></a>
### 마지막 커밋을 지우고 싶어

푸시된 커밋을 지우고 싶다면 이걸 따라하면 되는데, 이력을 돌이킬 수 없게 되고 레파지토리에서 이미 풀을 받아간 다른 사람의 이력도 엉망이 되요. 간단히 말하자면, 잘 모르겠으면 절대 하지마요.

```sh
$ git reset HEAD^ --hard
$ git push --force-with-lease [remote] [branch]
```

아직 푸시 안했으면, 리셋으로 마지막 커밋 전 상태로 돌아가요. (변경점은 스테이지에 두고서)

```
(my-branch*)$ git reset --soft HEAD@{1}
```

이 방법은 푸시를 안 했을 때만 동작해요. 푸시를 했으면, 안전한 방법은 `git revert SHAofBadCommit` 한가지 밖이에요. 
이 방법은 모든 지난 커밋 변경점으로 되돌아간 새 커밋을 만들꺼에요. 또는, 만약 푸시한 브랜치가 리베이스에 안전하다면 (만약 다른 사람이 풀 받지 않는다면), `git push --force-with-lease` 명령어를 쓸수 있어요. 
더 알고 싶다면, [이 섹션](#deleteremove-last-pushed-commit)을 참고해주세요 .

<a name="delete-any-commit"></a>
### 임의적인 커밋 지우기

이전과 동일한 경고에요. 가능한 이 방법은 쓰지 마세요.

```sh
$ git rebase --onto SHA1_OF_BAD_COMMIT^ SHA1_OF_BAD_COMMIT
$ git push --force-with-lease [remote] [branch]
```

아니면 [대화형 리베이스](#interactive-rebase)를 쓰고 지우고 싶은 커밋 라인을 지워도 되요.

<a name="#force-push"></a>
### 수정된 커밋을 푸시했는데, 에러 메세지가 떠

```sh
To https://github.com/yourusername/repo.git
! [rejected]        mybranch -> mybranch (non-fast-forward)
error: failed to push some refs to 'https://github.com/tanay1337/webmaker.org.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

알아두세요, 리베이스(아래를 보세요)나 amend는 **기존 commit을 새걸로 바꿔요**,
그래서 이미 먼저 수정된 commit이 push 됐다면 force push를 해야 해요.
이 방법을 쓸땐 조심하세요; *항상* 작업되는 브랜치가 맞나 확인해요!

```sh
(my-branch)$ git push origin mybranch --force-with-lease
```

In general, **avoid force pushing**. 
It is best to create and push a new commit rather than force-pushing the amended commit as it will cause conflicts in the source history for any other developer who has interacted with the branch in question or any child branches. 
`--force-with-lease` will still fail, if someone else was also working on the same branch as you, and your push would overwrite those changes.

일반적으로 force push를 쓰지 마세요.
새 커밋을 만들어서 푸시하는게 수정된 커밋을 강제로 푸시하는것보다 훨씬 나아요 그런 수정된 커밋은 그 브랜치나 다른 자식 브랜치를 쓰는 다른 개발자의 소스 이력과 충돌의 원인이 될꺼에요. 
`--force-with-lease` 는 여전히 실패할텐데, 누군가가 같은 브랜치를 쓴다면 변경점을 덮어쓰는 push를 할 수도 있어요.

If you are *absolutely* sure that nobody is working on the same branch or you want to update the tip of the branch *unconditionally*, 
you can use `--force` (`-f`), but this should be avoided in general.
절대로 아무도 같은 브랜치를 안 쓰거나, 절대로 브랜치에 업데이트를 해야할때 `--force` (`-f`) 옵션을 쓸 수 있지만 일반적으론 피하는게 좋아요.

<a href="undo-git-reset-hard"></a>

### I accidentally did a hard reset, and I want my changes back
### 하드 리셋을 해버렸는데 되돌리고 싶어

If you accidentally do `git reset --hard`, you can normally still get your commit back, as git keeps a log of everything for a few days.
만약 하드 리셋을 했다고 해도 커밋을 돌릴 순 있어요. 깃은 며칠간은 로그를 가지고 있거든요. 

Note: This is only valid if your work is backed up, i.e., either committed or stashed. `git reset --hard` _will remove_ uncommitted modifications, so use it with caution. (A safer option is `git reset --keep`.)
알아두기 : 이건 커밋을 남겼더나 스테이시같이 백업을 했을 때만 유효해요. `git reset --hard` 은 커밋되지 않은 수정사항을 다 지울 꺼에요, 그러니 조심해서 써야해요. (안전한 방법으론 `git reset --keep` 이 있어요)

```sh
(master)$ git reflog
```

You'll see a list of your past commits, and a commit for the reset. Choose the SHA of the commit you want to return to, and reset again:
지난 커밋과 리셋을 위한 커밋을 볼 수 있을 꺼에요. 돌아가고 싶은 커밋의 SHA 코드를 골라서,   

```sh
(master)$ git reset --hard SHA1234
```

And you should be good to go.
계속 할 수 있을꺼에요.

<a href="undo-a-commit-merge"></a>

### I accidentally committed and pushed a merge
### 실수로 머지한 커밋을 푸시해버렸어

If you accidentally merged a feature branch to the main development branch before it was ready to be merged, you can still undo the merge. 
But there's a catch: A merge commit has more than one parent (usually two).

만약 실수로 작업중인 브랜치를 메인 브랜치에 머지했어도 되돌릴 순 있어요.
하지만 문제는 있어요. 머지 커밋은 한개 이상의 부모(보통은 두 개)를 가지게 돼요.

The command to use 
사용하려면

```sh
(feature-branch)$ git revert -m 1 <commit>
```

where the -m 1 option says to select parent number 1 (the branch into which the merge was made) as the parent to revert to.
-m 1 옵션은 머지된 브랜치인 부모 번호 1로 되돌릴 것을 말해줘요. ??? 

Note: the parent number is not a commit identifier. Rather, a merge commit has a line `Merge: 8e2ce2d 86ac2e7`. 
The parent number is the 1-based index of the desired parent on this line, the first identifier is number 1, the second is number 2, and so on.

알아두기 : 부모 번호는 커밋 식별자가 아니고, 오히려 머지된 커밋이 `Merge: 8e2ce2d 86ac2e7` 라인을 가지고 있어요. ???
부모 번호는 이 행에서 원하는 부모의 1 기준이고, 첫번째 식별자는 1, 다음은 2 이렇게 이어져요.  ????

## Staging
## 스테이지

<a href="#i-need-to-add-staged-changes-to-the-previous-commit"></a>

### I need to add staged changes to the previous commit
### 지난 커밋에 변경된 사항을 추가하고 싶어

```sh
(my-branch*)$ git commit --amend
```

<a name="commit-partial-new-file"></a>

### I want to stage part of a new file, but not the whole file
### 전체말고 새 파일만 스테이지에 올리고 싶어

Normally, if you want to stage part of a file, you run this:
보통은, 부분적으로 파일을 스테이지하려면, 이렇게 해요. 

```sh
$ git add --patch filename.x
```

`-p` will work for short. This will open interactive mode. You would be able to use the `s` option to split the commit - however, if the file is new, you will not have this option. To add a new file, do this:
`-p`는 축약된 옵션이에요. 이 방식은 대화형 모드를 열텐데요. `s` 옵션을 쓰면 커밋을 나눌 수 있어요. 그치만, 새 파일이라면 그런 옵션이 없을꺼에요. 새 파일을 추가하려면,

```sh
$ git add -N filename.x
```

Then, you will need to use the `e` option to manually choose which lines to add. Running `git diff --cached` or
`git diff --staged` will show you which lines you have staged compared to which are still saved locally.
그 다음 임의적으로 라인들을 골라 추가해주려면 `e`옵션이 필요할꺼에요. `git diff --cached`나 `git diff --staged`는 로컬에 저장된 부분과 스테이지에 있는 라인들을 비교해서 보여줄 꺼에요.

<a href="stage-in-two-commits"></a>

### I want to add changes in one file to two different commits
### 하나의 파일 변경점을 두개의 다른 커밋에 남기고 싶어

`git add` will add the entire file to a commit. `git add -p` will allow to interactively select which changes you want to add.
`git add`는 전체 파일들을 커밋에 추가해요. `git add -p`는 대화형으로 추가하고픈 변경점들을 고를 수 있어요.

<a href="unstaging-edits-and-staging-the-unstaged"></a>

### I want to stage my unstaged edits, and unstage my staged edits
### 아직 스테이지에 안 올라간 변경점을 스테이지에 추가하고, 스테이지에 있는 변경점을 다시 뺴고 싶어

This is tricky. The best I figure is that you should stash your unstaged edits. Then, reset. After that, pop your stashed edits back, and add them.
이건 좀 꼼수인데요, 스테이지 전인 파일들을 스테이시해서 빼두고선 리셋을 해요. 그 다음 스테이시를 다시 불러와 추가를 해요. 

```sh
$ git stash -k
$ git reset --hard
$ git stash pop
$ git add -A
```

## Unstaged Edits
## 스테이지 전의 변경점


<a href="move-unstaged-edits-to-new-branch"></a>

### I want to move my unstaged edits to a new branch
### 스테이지전 변경점을 새 브랜치로 옮기고 싶어

```sh
$ git checkout -b my-branch
```

<a href="move-unstaged-edits-to-old-branch"></a>

### I want to move my unstaged edits to a different, existing branch
### 스테이지전 변경점을 만들어준 다른 브랜치로 옮기고 싶어

```sh
$ git stash
$ git checkout my-branch
$ git stash pop
```

<a href="i-want-to-discard-my-local-uncommitted-changes"></a>

### I want to discard my local uncommitted changes (staged and unstaged)
### 내 로컬에 있는 커밋 안된 변경점을 다 버리고 싶어 (스테이징 됐던 안됐던)

If you want to discard all your local staged and unstaged changes, you can do this:
만약 모든 스테이지 된, 스테이지 전인 변경점을 버리고 싶다면 이렇게 해요:

```sh
(my-branch)$ git reset --hard
# or
(master)$ git checkout -f
```

This will unstage all files you might have staged with `git add`:
이 방법은 `git add`로 스테이징된 모든 파일이 빠지게 돼요. 

```sh
$ git reset
```

This will revert all local uncommitted changes (should be executed in repo root):
이 방법은 커밋되지 않은 모든 로컬 변경점이 되돌려 져요. (레파지토리 최상단 루트에서 실행해야 할꺼에요)

```sh
$ git checkout .
```

You can also revert uncommitted changes to a particular file or directory:
또 커밋되지 않은 변경점들 중 몇가지 파일이나 디렉토리만 되돌릴 수 있어요.

```sh
$ git checkout [some_dir|file.txt]
```

Yet another way to revert all uncommitted changes (longer to type, but works from any subdirectory):
거기에 또 다른 되돌리는 방법으로 (타이핑 칠게 많지만 어떤 하위 디렉토리에서도 돼요):

```sh
$ git reset --hard HEAD
```

This will remove all local untracked files, so only files tracked by Git remain:
이 방법은 모든 트래킹 되지 않은 파일들을 지워요, 그래서 깃에서 트래킹되는 파일들만 남아요:

```sh
$ git clean -fd
```

`-x` will also remove all ignored files.
`-x` 옵 또한 무시된 파일들을 다 지워요.

### I want to discard specific unstaged changes
### 스테이지 안된 특정 변경점을 지우고 싶어

When you want to get rid of some, but not all changes in your working copy.
Checkout undesired changes, keep good changes.
작업중인 영역에서 전체가 아닌 특정 부분을 지우고 싶을때
원치않는 변경점을 확인하고, 변경점을 잘 보관하세요.

```sh
$ git checkout -p
# Answer y to all of the snippets you want to drop
# 날리고 싶은 사항에 y를 적으세요 
```

Another strategy involves using `stash`. Stash all the good changes, reset working copy, and reapply good changes.
또다른 전략은 `stash`을 같이 쓰는거에요. 챙겨야 하는 변경점을 스테이시 하고, 작업 중인 영역을 리셋하고, 다시 스테이시 팝으로 재적용해요.   

```sh
$ git stash -p
# Select all of the snippets you want to save
# 저장하고 싶은 사항들을 다 선택하세요
$ git reset --hard
$ git stash pop
```

Alternatively, stash your undesired changes, and then drop stash.
대안으로, 원치않는 변경점을 스테이시해서 그걸 날리는 방법도 있어요.

```sh
$ git stash -p
# Select all of the snippets you don't want to save
# 저장하고 싶지 앟은 사항들을 다 선택하세요
$ git stash drop
```

### I want to discard specific unstaged files
### 스테이지 안된 특정 파일을 지우고 싶어

When you want to get rid of one specific file in your working copy.
작업 영역에서 특정 파일을 지우고 싶을때.

```sh
$ git checkout myFile
```

Alternatively, to discard multiple files in your working copy, list them all.
대안으로, 작업영역 내 여러 파일들을 지우고 싶을때 모두 나열해서 적어요.

```sh
$ git checkout myFirstFile mySecondFile
```

### I want to discard only my unstaged local changes
### 로컬에 있는 스테이지 안된 변경점만 지우고 싶어

When you want to get rid of all of your unstaged local uncommitted changes
모든 스테이지 전이고 커밋 전인 변경점을 지우고 싶을 때

```sh
$ git checkout .
```

<a href="i-want-to-discard-all-my-untracked-files"></a>

### I want to discard all of my untracked files
### 트래킹 안된 파일들 다 지우고 싶어

When you want to get rid of all of your untracked files
트래킹 안된 파일들 다 지우고 싶을 땐 

```sh
$ git clean -f
```

## Branches
## 브랜치

### I want to list all branches
### 모든 브랜치 리스트를 보고 싶어 

List local branches
로컬 브랜치 다 보기

```sh
$ git branch
```

List remote branches
(리모트 레파지토리) 리모트 브랜치 다 보기  

```sh
$ git branch -r
```

List all branches (both local and remote)
로컬과 리모트 브랜치 모두 보기

```sh
$ git branch -a
```

<a name="create-branch-from-commit"></a>

### Create a branch from a commit
### 커밋에서 브랜치 만들기

```sh
$ git checkout -b <branch> <SHA1_OF_COMMIT>
```

<a name="pull-wrong-branch"></a>

### I pulled from/into the wrong branch
### 다른 브랜치에서 풀을 받아야 버렸어

This is another chance to use `git reflog` to see where your HEAD pointed before the bad pull.
이건 잘못된 풀을 받기전 HEAD가 어딜 가르키고 있었는지 볼 수 있는 `git reflog`를 써볼 수 있는 기회에요.

```sh
(master)$ git reflog
ab7555f HEAD@{0}: pull origin wrong-branch: Fast-forward
c5bc55a HEAD@{1}: checkout: checkout message goes here
```

Simply reset your branch back to the desired commit:
간단히 원하는 커밋으로 브랜치를 되돌릴 수 있어: 

```sh
$ git reset --hard c5bc55a
```

Done.
끝.

<a href="discard-local-commits"></a>

### I want to discard local commits so my branch is the same as one on the server
### 로컬의 커밋을 지워서 서버에 있는 내 브랜치와 맞추고 싶어

Confirm that you haven't pushed your changes to the server.
서버에 변경점을 푸시 안했는지부터 확인해요.

`git status` should show how many commits you are ahead of origin:
`git status` 가 오리진보다 몇개의 커밋들이 앞서 있는지 보여줄꺼에요: 

```sh
(my-branch)$ git status
# On branch my-branch
# Your branch is ahead of 'origin/my-branch' by 2 commits.
#   (use "git push" to publish your local commits)
#
```

One way of resetting to match origin (to have the same as what is on the remote) is to do this:
오리진(리모트과 같은 상태의)로 맞추는 리셋을 하는 방법 중 하나는:


```sh
(master)$ git reset --hard origin/my-branch
```

<a name="commit-wrong-branch"></a>

### I committed to master instead of a new branch
### 새 브랜치 대신에 마스터에 커밋을 해버렸어

Create the new branch while remaining on master:
마스터에 있으면서 새 브랜치를 만들어요:

```sh
(master)$ git branch my-branch
```

Reset the branch master to the previous commit:
마스터 브랜치를 기존 커밋으로 리셋해요:


```sh
(master)$ git reset --hard HEAD^
```

`HEAD^` is short for `HEAD^1`. This stands for the first parent of `HEAD`, similarly `HEAD^2` stands for the second parent of the commit (merges can have 2 parents).
`HEAD^`는 `HEAD^1`의 축약인데요. `HEAD^`의 첫번째 부모를 의미하고, 비슷한 `HEAD^2`는 두번째 부모를 의미해요. (머지는 두 부모를 가질 수 있죠) 

Note that `HEAD^2` is **not** the same as `HEAD~2` (see [this link](http://www.paulboxley.com/blog/2011/06/git-caret-and-tilde) for more information).
알아두세요 `HEAD^2`는 `HEAD~2`과 같은게 아니에요. (더 자세한 정보는 [이 링크](http://www.paulboxley.com/blog/2011/06/git-caret-and-tilde)를 참고해요 )

Alternatively, if you don't want to use `HEAD^`, find out what the commit hash you want to set your master branch to (`git log` should do the trick). 
Then reset to that hash. `git push` will make sure that this change is reflected on your remote.
대안으로, `HEAD^`를 쓰고 싶지 않다면, 마스터 브랜치로 옮길 커밋 해시를 알아둬요 (`git log`가 트릭을 부릴 꺼에요)
그리고 그 해쉬로 리셋을 해요. `git push`가 리모트랑 변경점이 똑같은걸 확인해줄꺼에요.

For example, if the hash of the commit that your master branch is supposed to be at is `a13b85e`:
예를 들자면, 그 마스터의 커밋의 해쉬가 `a13b85e`라면:

```sh
(master)$ git reset --hard a13b85e
HEAD is now at a13b85e
```

Checkout the new branch to continue working:
새 브랜치로 체크아웃 해서 계속 작업을 해요:

```sh
(master)$ git checkout my-branch
```

<a name="keep-whole-file"></a>

### I want to keep the whole file from another ref-ish
### 다른 레퍼런스 같은 곳에서 모든 파일을 유지하고 싶어 

Say you have a working spike (see note), with hundreds of changes. Everything is working. Now, you commit into another branch to save that work:
수백번의 변경점을 가진 스파이크(아래 알아두기 참고) 작업을 한다고 가정해보죠. 모든 건 동작하고 있고,그 작업을 저장해두기 위해  다른 브랜치로 커밋을 해요:

```sh
(solution)$ git add -A && git commit -m "Adding all changes from this spike into one big commit."
```

When you want to put it into a branch (maybe feature, maybe `develop`), you're interested in keeping whole files. You want to split your big commit into smaller ones.
그 커밋을 브랜치(아마 feature일수도 있고, `develop` 일수도 있겠죠)에 넣고 싶을 때, 모든 파일을 지키는데 관심이 있을꺼에요. 큰 커밋을 작게 나누고 싶을꺼에요.

Say you have:
가정해보면:

* branch `solution`, with the solution to your spike. One ahead of `develop`.
* branch `develop`, where you want to add your changes.
* 스파이크를 위한 솔루션과 함께인 `solution` 브랜치. `develop` 브랜치의 1단계 앞선 상태. ???
* 변경점을 추가하고 싶은 `develop` 브랜치

You can solve it bringing the contents to your branch:
브랜치로 내용들을 불러오는 것으로 해결할 수 있어요:

```sh
(develop)$ git checkout solution -- file1.txt
```

This will get the contents of that file in branch `solution` to your branch `develop`:
`develop`브랜치에서 `solution` 브랜치의 저 파일의 내용들을 얻을 수 있어요.

```sh
# On branch develop
# Your branch is up-to-date with 'origin/develop'.
# Changes to be committed:
#  (use "git reset HEAD <file>..." to unstage)
#
#        modified:   file1.txt
```

Then, commit as usual.
그 다음, 평소처럼 커밋해요.

Note: Spike solutions are made to analyze or solve the problem. These solutions are used for estimation and discarded once everyone gets clear visualization of the problem. ~ [Wikipedia](https://en.wikipedia.org/wiki/Extreme_programming_practices).
알아두기 : 스파이크 솔루션은 문제를 분석하거나 풀기위해 만들어졌어요. 이 솔루션들은 모두가 문제의 확실한 시각화를 얻고선 평가되고 무시돼요.~ [위키피디아](https://en.wikipedia.org/wiki/Extreme_programming_practices).   


<a name="cherry-pick"></a>

### I made several commits on a single branch that should be on different branches
### 한 브랜치에 다른 브랜치에 남겼어야 하는 여러 커밋을 남겼어

Say you are on your master branch. Running `git log`, you see you have made two commits:
마스터 브랜치에 있다고 가정하고 `git log` 해보면 커밋 두개 볼 수 있을꺼에요:

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

Let's take note of our commit hashes for each bug (`e3851e8` for #21, `5ea5173` for #14).
각 버그 커밋의 해쉬를 가져와요. (21번은 `e3851e8`, 14번은 `5ea5173`)

First, let's reset our master branch to the correct commit (`a13b85e`):
우선, 마스터 브랜치의 정확한 커밋 (`a13b85e`)으로 리셋해요:

```sh
(master)$ git reset --hard a13b85e
HEAD is now at a13b85e
```

Now, we can create a fresh branch for our bug #21:
그리고, 21번 작업을 위한 새 브랜치를 만들수 있어요:

```sh
(master)$ git checkout -b 21
(21)$
```

Now, let's *cherry-pick* the commit for bug #21 on top of our branch. That means we will be applying that commit, and only that commit, directly on top of whatever our head is at.
그리고 브랜치 최상단의 커밋을 *체리픽* 해봐요. 그 커밋을 적용할건데, 오직 그 커밋만 헤드의 최상단에 적용할거란 의미에요.

```sh
(21)$ git cherry-pick e3851e8
```

At this point, there is a possibility there might be conflicts. 
See the [**There were conflicts**](#merge-conflict) section in the [interactive rebasing section above](#interactive-rebase) for how to resolve conflicts.
이 지점에서 충돌이 있을 수도 있어요.
어떻게 충돌을 해결할지 [대화형 리베이스 섹션](#interactive-rebase) 안에 있는 [**충돌이 났었다**](#merge-conflict) 부분을 참고하세요.  

Now let's create a new branch for bug #14, also based on master
자 이제 14번 버그작업을 위해 마스터 기반의 새 브랜치를 만들어요.

```sh
(21)$ git checkout master
(master)$ git checkout -b 14
(14)$
```

And finally, let's cherry-pick the commit for bug #14:
그리고 마지막으로, 14번 버그작업을 위한 커밋을 체리픽해요. 

```sh
(14)$ git cherry-pick 5ea5173
```

<a name="delete-stale-local-branches"></a>

### I want to delete local branches that were deleted upstream
### 업스트림에선 지워진 로컬 브랜치를 지우고 싶어

Once you merge a pull request on GitHub, it gives you the option to delete the merged branch in your fork. 
If you aren't planning to keep working on the branch, it's cleaner to delete the local copies of the branch so you don't end up cluttering up your working checkout with a lot of stale branches.
깃헙에 풀리퀘스트로 머지를 하면, 포크 뜬 머지 브랜치를 지울껀지 선택할 수 있는 옵션을 줘요.
해당 브랜치에 계속 작업할 예정이 없다면, 다량의 오래된 브랜치들로 뒤덮이지 않게 로컬 작업을 지워주는게 더 깔끔해요.

```sh
$ git fetch -p upstream
```

where, `upstream` is the remote you want to fetch from.
여기서, `upstream`은 가져오려는 리모트레파지토리에요.

<a name='restore-a-deleted-branch'></a>

### I accidentally deleted my branch
### 브랜치를 지워버렸어

If you're regularly pushing to remote, you should be safe most of the time. But still sometimes you may end up deleting your branches. Let's say we create a branch and create a new file:
주기적으로 리모트으로 푸시한다면, 대부분은 안전해야 해요. 그치만 가끔은 브랜치를 지울 수 있어요. 새 브랜치를 만들고 파일을 하나 만들었다고 해보죠:


```sh
(master)$ git checkout -b my-branch
(my-branch)$ git branch
(my-branch)$ touch foo.txt
(my-branch)$ ls
README.md foo.txt
```

Let's add it and commit.
추가하고 커밋해요.

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

Now we're switching back to master and 'accidentally' removing our branch.
이제 다시 마스터로 돌아가 '실수로' 브랜치를 지워보죠.

```sh
(my-branch)$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.
(master)$ git branch -D my-branch
Deleted branch my-branch (was 4e3cd85).
(master)$ echo oh noes, deleted my branch!
oh noes, deleted my branch!
```

At this point you should get familiar with 'reflog', an upgraded logger. It stores the history of all the action in the repo.
여기에서 업그레이드된 로그 도구인 '리플로그'에 익숙해져야 해요. 리플로그는 레파지토리의 모든 행동의 이력을 다 보관해요.

```
(master)$ git reflog
69204cd HEAD@{0}: checkout: moving from my-branch to master
4e3cd85 HEAD@{1}: commit: foo.txt added
69204cd HEAD@{2}: checkout: moving from master to my-branch
```

As you can see we have commit hash from our deleted branch. Let's see if we can restore our deleted branch.
보시다시피 지워진 브랜치의 커밋 해쉬도 볼 수 있어요. 지웠던 브랜치를 살릴 수 있는 지 한번 해보죠.


```sh
(master)$ git checkout -b my-branch-help
Switched to a new branch 'my-branch-help'
(my-branch-help)$ git reset --hard 4e3cd85
HEAD is now at 4e3cd85 foo.txt added
(my-branch-help)$ ls
README.md foo.txt
```

Voila! We got our removed file back. `git reflog` is also useful when rebasing goes terribly wrong.
짜잔! 지워진 파일들을 되돌려 놨어요. `git reflog`는 리베이스가 끔찍하게 잘못 됐을때 아주 유용해요.


### I want to delete a branch
### 브랜치를 지우고 싶어

To delete a remote branch:
리모트 브랜치를 삭제하려면:

```sh
(master)$ git push origin --delete my-branch
```

You can also do:
이렇게도:

```sh
(master)$ git push origin :my-branch
```

To delete a local branch:
로컬 브랜치를 삭제하려면:

```sh
(master)$ git branch -d my-branch
```

To delete a local branch that *has not* been merged to the current branch or an upstream:
현재 브랜치나 업스트림에 머지되지 않은 로컬 브랜치를 지우려면:

```sh
(master)$ git branch -D my-branch
```

### I want to delete multiple branches
### 여러개의 브랜치를 지우고 싶어

Say you want to delete all branches that start with `fix/`:
`fix/`로 시작하는 모든 브랜치들을 지우고 싶다고 할 때:

```sh
(master)$ git branch | grep 'fix/' | xargs git branch -d
```

### I want to rename a branch
### 브랜치 이름을 바꾸고 싶어

To rename the current (local) branch:
현재 (로컬) 브랜치 이름을 바꾸려면:

```sh
(master)$ git branch -m new-name
```

To rename a different (local) branch:
다른 (로컬) 브랜치 이름을 바꾸려면

```sh
(master)$ git branch -m old-name new-name
```

<a name="i-want-to-checkout-to-a-remote-branch-that-someone-else-is-working-on"></a>

### I want to checkout to a remote branch that someone else is working on
### 다른 사람이 작업중인 리모트 브랜치로 체크아웃 하고 싶어

First, fetch all branches from remote:
우선, 리모트 레파지토리에서 모든 브랜치를 패치 받아요: 

```sh
(master)$ git fetch --all
```

Say you want to checkout to `daves` from the remote.
리모트의 `daves`로 체크아웃 하고 싶다고 하면.

```sh
(master)$ git checkout --track origin/daves
Branch daves set up to track remote branch daves from origin.
Switched to a new branch 'daves'
```

(`--track` is shorthand for `git checkout -b [branch] [remotename]/[branch]`)
(`--track` 은 `git checkout -b [branch] [remotename]/[branch]` 의 축약이에요)

This will give you a local copy of the branch `daves`, and any update that has been pushed will also show up remotely.
`daves` 브랜치의 로컬 카피를 줄꺼에요. 그리고 푸시된 업데이트들도 리모트으로 표시되요.

### I want to create a new remote branch from current local one
### 현재 로컬에서 새로운 리모트 브랜치를 만들고 싶어

```sh
$ git push <remote> HEAD
```

If you would also like to set that remote branch as upstream for the current one, use the following instead:
또한 리모트 브랜치를 현재 브랜치를 위한 업스트림으로 설정하고 싶다면, 대신 아래 방법을 써봐요:

```sh
$ git push -u <remote> HEAD
```

With the `upstream` mode and the `simple` (default in Git 2.0) mode of the `push.default` config, 
the following command will push the current branch with regards to the remote branch that has been registered previously with `-u`:
`push.default` 설정의 `upstream` 모드와 `simple`모드 (2.0 버전의 깃의 기본)와 함께,
아래 커맨드는 이전에 `-u` 옵션으로 등록된 리모트 브랜치와 관련된 현재 브랜치를 푸시할꺼에요:

```sh
$ git push
```

The behavior of the other modes of `git push` is described in the [doc of `push.default`](https://git-scm.com/docs/git-config#git-config-pushdefault).
`git push`의 다른 모드의 동작은 [`push.default` 문서](https://git-scm.com/docs/git-config#git-config-pushdefault)에 설명돼 있어요.

### I want to set a remote branch as the upstream for a local branch
### 리모트 브랜치를 로컬 브랜치를 위한 업스트림으로 설정하고 싶어

You can set a remote branch as the upstream for the current local branch using:
리모트 브랜치를 현재 쓰고 있는 로컬 브랜치를 위한 업스트림으로 설정할 수 있어요:

```sh
$ git branch --set-upstream-to [remotename]/[branch]
# or, using the shorthand:
$ git branch -u [remotename]/[branch]
```

To set the upstream remote branch for another local branch:
다른 로컬 브랜치를 위한 업스트림 리모트 브랜치를 설정하려면:

```sh
$ git branch -u [remotename]/[branch] [local-branch]
```

<a name="i-want-to-set-my-HEAD-to-track-the-default-remote-branch"></a>

### I want to set my HEAD to track the default remote branch
### HEAD를 기본 리모트 브랜치로 트래킹하도록 설정하고 싶어

By checking your remote branches, you can see which remote branch your HEAD is tracking. In some cases, this is not the desired branch.
리모트 브랜치를 확인해보는 것으로, HEAD가 트래킹 중인 리모트 브랜치를 볼 수 있어요. 몇몇 경우에는, 원하던 브랜치가 아닐꺼에요.

```sh
$ git branch -r
  origin/HEAD -> origin/gh-pages
  origin/master
```

To change `origin/HEAD` to track `origin/master`, you can run this command:
`origin/HEAD`를 `origin/master`를 트래킹하는 것으로 변경하려면, 이 커맨드로 실행할 수 있어요:

```sh
$ git remote set-head origin --auto
origin/HEAD set to master
```

### I made changes on the wrong branch
### 다른 브랜치에 변경점을 남기고 있었어

You've made uncommitted changes and realise you're on the wrong branch. Stash changes and apply them to the branch you want:
커밋 되지 않은 변경점, 거기다 잘못된 브랜치에 하고 있었다면 변경점을 스테이시 하고 원하는 브랜치로 가 스테이시 어플라이 해요.

```sh
(wrong_branch)$ git stash
(wrong_branch)$ git checkout <correct_branch>
(correct_branch)$ git stash apply
```

## Rebasing and Merging
## 리베이스와 머지

<a name="undo-rebase"></a>

### I want to undo rebase/merge
### 리베이스/머지 한 걸 되돌리고 싶어

You may have merged or rebased your current branch with a wrong branch, or you can't figure it out or finish the rebase/merge process. 
Git saves the original HEAD pointer in a variable called ORIG_HEAD before doing dangerous operations, so it is simple to recover your branch at the state before the rebase/merge.
현재 브랜치를 의도하지 않던 브랜치로 머지 또는 리베이스 했거나, 리베이스/머지 도중에 완료하거나 끝내지 못했을꺼에요.
깃은 위험한 과정 전에 원래의 HEAD 포인트를 ORIG_HEAD라 불리는 변수에 보관해요, 그러니 리베이스/머지 전 상태로 브랜치를 복구하기 쉬워요.

```sh
(my-branch)$ git reset --hard ORIG_HEAD
```

<a name="force-push-rebase"></a>

### I rebased, but I don't want to force push
### 리베이스를 했는데, 강제 푸시하고 싶진 않아

Unfortunately, you have to force push, if you want those changes to be reflected on the remote branch. This is because you have changed the history. 
The remote branch won't accept changes unless you force push. 
This is one of the main reasons many people use a merge workflow, instead of a rebasing workflow - large teams can get into trouble with developers force pushing. 
Use this with caution. 
A safer way to use rebase is not to reflect your changes on the remote branch at all, and instead to do the following:
아쉽게도 그런 변경점을 리모트 브랜치에 반영하려면 강제 푸시밖에 방법이 없어요. 이력을 변경해왔기 떄문이죠.
리모트 브랜치는 강제 푸시 외엔 적용 해주지 않을꺼에요.
많은 분들이 머지 워크플로우를 리에비스 워크플로우보다 선호하는 많이 이유 중 하나죠 - 큰 팀에선 개발자의 강제 푸시로 곤란해질 수 있어요.
주의해서 쓰세요.
리베이스를 그나마 안전하게 쓰는 방법은 리모트 브랜치의 모든 변경점과 똑같이 반영하는게 아니라 대신에 이렇게 해봐요:  


```sh
(master)$ git checkout my-branch
(my-branch)$ git rebase -i master
(my-branch)$ git checkout master
(master)$ git merge --ff-only my-branch
```

For more, see [this SO thread](https://stackoverflow.com/questions/11058312/how-can-i-use-git-rebase-without-requiring-a-forced-push).
더 확인이 필요하다면, [이 스택오버플로우의 쓰레드](https://stackoverflow.com/questions/11058312/how-can-i-use-git-rebase-without-requiring-a-forced-push)를 참고해요.


<a name="interactive-rebase"></a>

### I need to combine commits
### 커밋끼리 합치고 싶어

Let's suppose you are working in a branch that is/will become a pull-request against `master`. 
In the simplest case when all you want to do is to combine *all* commits into a single one and you don't care about commit timestamps, you can reset and recommit. 
Make sure the master branch is up to date and all your changes committed, then:
`master`에 풀리퀘스트가 될 브랜치에서 작업하고 있다고 가정해봐요.
가장 간단한 경우는 원하는게 *모든* 커밋을 하나의 커밋으로 합치고 변경점의 시간을 신경쓰지 않아도 되는 것일 때, 리셋하고 커밋 다시하면 돼요.
마스터 브랜치가 최신이고 모든 변경점이 커밋된 것만 확인한 다음:

```sh
(my-branch)$ git reset --soft master
(my-branch)$ git commit -am "New awesome feature"
```

If you want more control, and also to preserve timestamps, you need to do something called an interactive rebase:
좀더 조정하고, 시간기록까지 보관하고 싶다면, 대화형 리베이스가 필요할꺼에요.

```sh
(my-branch)$ git rebase -i master
```

If you aren't working against another branch you'll have to rebase relative to your `HEAD`.
If you want to squash the last 2 commits, for example, you'll have to rebase against `HEAD~2`. For the last 3, `HEAD~3`, etc.
만약 다른 브랜치에 작업하는게 아니라면, `HEAD`을 기준으로 리베이스 해야해요.
예로 마지막 2개의 커밋을 스쿼시(기존 커밋에 반영해넣는)하고 싶다면 `HEAD~2`로 리베이스 해요. 3개라면 `HEAD~3`으로 하구요.

```sh
(master)$ git rebase -i HEAD~2
```

After you run the interactive rebase command, you will see something like this in your  text editor:
대화형 리베이스를 실행하면 텍스트 에디터로 이런 것들을 볼 수 있을꺼에요.

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

All the lines beginning with a `#` are comments, they won't affect your rebase.
모든 `#`으로 시작하는 주석줄은 리베이스에 영향을 주진 않아요. 

Then you replace `pick` commands with any in the list above, and you can also remove commits by removing corresponding lines.
다음으로 `pick` 부분을 다른 명령어로 바꾸거나, 해당하는 라인을 지워서 커밋을 지울 수도 있어요.

For example, if you want to **leave the oldest (first) commit alone and combine all the following commits with the second oldest**, you should edit the letter next to each commit except the first and the second to say `f`:
예를 들자면 **오래된 (첫번째) 커밋만 두고 두번째 오래된 커밋과 나머지를 다 합치고 싶을때**, 첫번째와 두번째 커밋 제외한 나머지 커맨드들을 `f`로 바꿔야 할꺼에요:  

```vim
pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
f b729ad5 fixup
f e3851e8 another fix
```

If you want to combine these commits **and rename the commit**, you should additionally add an `r` next to the second commit or simply use `s` instead of `f`:
이 커밋들을 합치고 **커밋 이름을 바꾸고 싶다면**, 추가로 적어줘야 해요 두번째 커밋 다음에 `r`를 추가하거나 간단히 `f` 대신 `s`를 추가해주면 될꺼에요:

```vim
pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
s b729ad5 fixup
s e3851e8 another fix
```

You can then rename the commit in the next text prompt that pops up.
그런 다음에 한번 더 뜨는 텍스트 에디터로 커밋 이름을 바꿀 수 있어요.

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

If everything is successful, you should see something like this:
전부 다 성공하면, 이런 메세지를 볼꺼에요:

```sh
(master)$ Successfully rebased and updated refs/heads/master.
```

#### Safe merging strategy
#### 안전한 머지 전략

`--no-commit` performs the merge but pretends the merge failed and does not autocommit, giving the user a chance to inspect and further tweak the merge result before committing. 
`no-ff` maintains evidence that a feature branch once existed, keeping project history consistent.
`--no-commit`는 머지는 하지만 실패하고 자동 커밋이 안된것처럼 보이는데, 커밋하기전에 머지 결과를 보고 추가로 조정할 수 있게 해줘요.
`no-ff`는 피쳐 브랜치가 있었다는 증거를 남기고, 이력을 일관되게 가지게 해요. 


```sh
(master)$ git merge --no-ff --no-commit my-branch
```///

#### I need to merge a branch into a single commit
#### 

```sh
(master)$ git merge --squash my-branch
```

<a name="rebase-unpushed-commits"></a>

#### I want to combine only unpushed commits
#### 푸시 되지 않은 커밋만 합치고 싶어

Sometimes you have several work in progress commits that you want to combine before you push them upstream. 
You don't want to accidentally combine any commits that have already been pushed upstream because someone else may have already made commits that reference them.
가끔 여러가지 작업 도중인 커밋을 푸시하기 전에 합치고 싶을꺼에요.
다른 누군가가 벌써 참고해서 커밋을 만들고 있을테니 이미 푸시된 커밋을 잘못 합치길 바라진 않을꺼에요.

```sh
(master)$ git rebase -i @{u}
```

This will do an interactive rebase that lists only the commits that you haven't already pushed, 
so it will be safe to reorder/fix/squash anything in the list.
이 명령은 아직 푸시하지 않은 커밋만으로 대화형 리베이스를 실행해요. 그러니 목록 내에 있는 어떤 커밋이든 재정렬/수정/합치기 안전해요. 

#### I need to abort the merge
#### 머지를 중단해야해

Sometimes the merge can produce problems in certain files, in those cases we can use the option `abort` to abort the current conflict resolution process, and try to reconstruct the pre-merge state.
때떄로 머지는 어떤 파일에 문제를 일으킬 수도 있어요, 이 경우 옵션 `abort`으로 현재 충돌 해결 프로세스를 중단하고 병합하기 전 상태로 다시 구성할 수 있어요.

```sh
(my-branch)$ git merge --abort
```

This command is available since Git version >= 1.7.4
이 명령은 1.7.4 버전부터 쓸 수 있어요.

### Check if all commits on a branch are merged
### 브랜치내 모든 커밋이 머지됐는지 확인해

To check if all commits on a branch are merged into another branch, you should diff between the heads (or any commits) of those branches:
브랜치 내 모든 커밋이 다른 브랜치로 머지됐는지 확인하려면, 그 브랜치들 HEAD (또는 특정 커밋)를 비교해야해요:


```sh
(master)$ git log --graph --left-right --cherry-pick --oneline HEAD...feature/120-on-scroll
```

This will tell you if any commits are in one but not the other, and will give you a list of any nonshared between the branches. Another option is to do this:
이 명령은 어디에는 있고 다른덴 없는 커밋이 있나를 알려줄꺼에요 그리고 브랜치들 사이에 공유되지 않은게 목록을 보여줄꺼구요. 다른 옵션은 이렇게:

```sh
(master)$ git log master ^feature/120-on-scroll --no-merges
```

### Possible issues with interactive rebases
### 대화형 리베이스로 발생가능한 이슈

<a name="noop"></a>

#### The rebase editing screen says 'noop'
#### 리베이스 편집 화면에서 'noop'

If you're seeing this:
이런 걸 본다면:

```
noop
```

That means you are trying to rebase against a branch that is at an identical commit, or is *ahead* of your current branch. You can try:
동일한 커밋에 있거나 현재 브랜치보다 앞서 있는 브랜치에 대해 리베이스를 시도한다는 의미에요. 이렇게 해볼 수 있어요:

* making sure your master branch is where it should be
* rebase against `HEAD~2` or earlier instead
* 마스터 브랜치가 있어야 할 곳에 있나 확인
* 대신해서 `HEAD~2` 또는 더 기존 항목을 리베이스


<a name="merge-conflict"></a>

#### There were conflicts
#### 충돌이 있었어

If you are unable to successfully complete the rebase, you may have to resolve conflicts.
리베이스를 똑바로 끝내지 못했다면, 충돌을 해결해야 할꺼에요.

First run `git status` to see which files have conflicts in them:
어떤 파일이 충돌났는지 `git status`를 먼저 실행해봐요: 

```sh
(my-branch)$ git status
On branch my-branch
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  both modified:   README.md
```

In this example, `README.md` has conflicts. Open that file and look for the following:
이 예시에선, `README.md` 가 충돌났네요. 파일을 열어서 아래와 같은 부분을 찾아봐요:

```vim
   <<<<<<< HEAD
   some code
   =========
   some code
   >>>>>>> new-commit
```

You will need to resolve the differences between the code that was added in your new commit (in the example, everything from the middle line to `new-commit`) and your `HEAD`.
새로운 커밋으로 추가된 코드(예시에선, 중간 선부터 `new-commit` 까지의)와 `HEAD` 사이에서 차이점을 해결해야 할꺼에요.

If you want to keep one branch's version of the code, you can use `--ours` or `--theirs`:
어느 한쪽 브랜치의 코드를 남기고 싶다면, `--ours` 또는 `--theirs`를 쓰면 돼요:

```sh
(master*)$ git checkout --ours README.md
```

- When *merging*, use `--ours` to keep changes from the local branch, or `--theirs` to keep changes from the other branch.
- When *rebasing*, use `--theirs` to keep changes from the local branch, or `--ours` to keep changes from the other branch. For an explanation of this swap, see [this note in the Git documentation](https://git-scm.com/docs/git-rebase#git-rebase---merge).
- *머지*할때, `--ours`를 쓰면 로컬 브랜치의 변경점 유지하고, `--theirs` 는 다른 브랜치의 변경점를 유지해요.
- *리베이스*할 땐, `--theirs`가 로컬 브랜치의 변경점을 유지하고 `--ours`는 다른 브랜치의 변경점을 유지해요. 이런 차이에 관한 설명은 Git 정식 문서 중 [이 문서](https://git-scm.com/docs/git-rebase#git-rebase---merge)를 보세요. 

If the merges are more complicated, you can use a visual diff editor:
만약 머지가 더 복잡하면, 비주얼 디프 에디터를 쓸 수도 있어요.

```sh
(master*)$ git mergetool -t opendiff
```

After you have resolved all conflicts and tested your code, `git add` the files you have changed, and then continue the rebase with `git rebase --continue`
코드의 충돌을 해결하고 테스트가 해결되고 나면, 바뀐 파일 내용을 `git add` 해주고, `git rebase --continue`로 리베이스를 이어서 해요.

```sh
(my-branch)$ git add README.md
(my-branch)$ git rebase --continue
```

If after resolving all the conflicts you end up with an identical tree to what it was before the commit, you need to `git rebase --skip` instead.
만약 모든 충돌을 개선한 내용이 커밋 전과 동일한 트리 구조를 가진다면, 대신에 `git rebase --skip`를 해야 해요.

If at any time you want to stop the entire rebase and go back to the original state of your branch, you can do so:
리베이스 중 멈추고 싶은 어떤 시점이거나 원래 상태의 브랜치로 돌아가고 싶다면, 이렇게 할 수 있어요:  

```sh
(my-branch)$ git rebase --abort
```

<a name="stashing"></a>

## Stash
## 스테이시

### Stash all edits
### 모든 변경점 스테이시 하기

To stash all the edits in your working directory
작업중인 디렉토리에서의 모든 변경한 내용을 스테이시 하려면

```sh
$ git stash
```

If you also want to stash untracked files, use `-u` option.
트래킹 되지 않은 파일까지도 포함하려면, `-u` 옵션을 써요.

```sh
$ git stash -u
```

### Stash specific files
### 특정 파일들만 스테이시 하기

To stash only one file from your working directory
작업중인 디렉토리에서 한 파일만 스테이시 하기

```sh
$ git stash push working-directory-path/filename.ext
```

To stash multiple files from your working directory
작업중인 디렉토리에서 여러 파일 스테이시 하기

```sh
$ git stash push working-directory-path/filename1.ext working-directory-path/filename2.ext
```

<a name="stash-msg"></a>

### Stash with message
### 메세지와 함께 스테이시 하기

```sh
$ git stash save <message>
```

<a name="stash-apply-specific"></a>

### Apply a specific stash from list
### 특정 스테이시 목록에서 가져와 적용하기 

First check your list of stashes with message using
메세지 작성된 스테이시 리스트 먼저 확인하세요

```sh
$ git stash list
```

Then apply a specific stash from the list using
그런 다음 리스트 내 특정 스테이시를 적용해요

```sh
$ git stash apply "stash@{n}"
```

Here, 'n' indicates the position of the stash in the stack. The topmost stash will be position 0.
여기에서, 'n' 은 스택 안에서 스테이시의 위치를 나타내요. 젤 위에 있는 스테이시가 0 일꺼에요.


## Finding
## 찾아보기

### I want to find a string in any commit
### 어떤 커밋에서 문자열을 찾고 싶어


To find a certain string which was introduced in any commit, you can use the following structure:
특정한 문자열이 포함된 어떤 커밋을 찾으려면, 이런 구조로 쓸 수 있어요:

```sh
$ git log -S "string to find"
```

Commons parameters:
일반적인 파라미터들은:

* `--source` means to show the ref name given on the command line by which each commit was reached.
* `--source` 각 커밋에 도달한 명령어에 지정된 참조 이름을 보여주는걸 의미해요 ???

* `--all` means to start from every branch.
* `--all` 는 모든 브랜치에서 시작하는걸 의미해요.

* `--reverse` prints in reverse order, it means that will show the first commit that made the change.
* `--reverse` 반대의 순서로 출력해요, 변경점의 첫번째 커밋이 보일꺼란 거죠.

<a name="i-want-to-find-by-author-committer"></a>

### I want to find by author/committer
### 코드 작성자나 커미터를 찾고 싶어

To find all commits by author/committer you can use:
작성자나 커미터의 모든 커밋을 찾으려면 이렇게 쓼 수 있어요:

```sh
$ git log --author=<name or email>
$ git log --committer=<name or email>
```

Keep in mind that author and committer are not the same. 
The `--author` is the person who originally wrote the code; 
on the other hand, the `--committer`, is the person who committed the code on behalf of the original author.
작성자와 커미터가 같지 않다는 것만 염두해두세요.
`--author`는 코드를 실제로 코드를 작성한 사람이고;
반면에 `--committer`는 실제 작성자를 대신해 커밋을 한 사람이에요.


### I want to list commits containing specific files
### 특정 파일이 포함된 커밋을 목록화 하고 싶어

To find all commits containing a specific file you can use:
특정 파일이 든 모든 커밋을 찾으려면 이렇게 해요:

```sh
$ git log -- <path to file>
```

You would usually specify an exact path, but you may also use wild cards in the path and file name:
보통은 정확한 경로를 지정할테지만 와일드 카드로 경로나 파일명을 쓸수도 있어요:

```sh
$ git log -- **/*.js
```

While using wildcards, it's useful to inform `--name-status` to see the list of committed files:
와일드 카드를 쓸 때, 커밋된 파일의 목록을 볼 수 있는 `--name-status`로 확인하는게 유용할꺼에요: 

```sh
$ git log --name-status -- **/*.js
```

### Find a tag where a commit is referenced
### 커밋을 참조할 태그를 찾고 싶어

To find all tags containing a specific commit:
특정 커밋이 포함된 모든 태그를 찾으려면:

```sh
$ git tag --contains <commitid>
```

## Submodules
## 서브모듈

<a name="clone-submodules"></a>

### Clone all submodules
### 모든 서브모듈을 클론하기

```sh
$ git clone --recursive git://github.com/foo/bar.git
```

If already cloned:
벌써 클론했다면:

```sh
$ git submodule update --init --recursive
```

<a name="delete-submodule"></a>

### Remove a submodule
### 서브모듈 지우기

Creating a submodule is pretty straight-forward, but deleting them less so. The commands you need are:
서브모듈을 만드는건 아주 간단하지만 지우는건 그렇진 않아요. 필요한 명령어는:

```sh
$ git submodule deinit submodulename
$ git rm submodulename
$ git rm --cached submodulename
$ rm -rf .git/modules/submodulename
```

## Miscellaneous Objects
## 잡다한 것들

### Restore a deleted file
### 지운 파일 복구하기

First find the commit when the file last existed:
우선 그 파일이 마지막으로 잇었던 커밋을 찾고:

```sh
$ git rev-list -n 1 HEAD -- filename
```

Then checkout that file:
그런 다음 그 파일을 체크아웃해요 

```
git checkout deletingcommitid^ -- filename
```

### Delete tag
### 태그 지우기

```sh
$ git tag -d <tag_name>
$ git push <remote> :refs/tags/<tag_name>
```

<a name="recover-tag"></a>

### Recover a deleted tag
### 지워진 태그 복구학기

If you want to recover a tag that was already deleted, you can do so by following these steps: First, you need to find the unreachable tag:
이미 지운 태그를 복구하고 싶다면, 이런 단계를 따라해 볼 수 있어요: 우선, 연결할 수 없는 태그를 찾고:

```sh
$ git fsck --unreachable | grep tag
```

Make a note of the tag's hash. 
Then, restore the deleted tag with following, making use of [`git update-ref`](https://git-scm.com/docs/git-update-ref):
태그의 해쉬를 메모해두세요.
그런 다음 [`git update-ref`](https://git-scm.com/docs/git-update-ref)을 써서 지워진 태그를 복구해요:

```sh
$ git update-ref refs/tags/<tag_name> <hash>
```

Your tag should now have been restored.
이제 태그가 복구돼있을꺼에요.

### Deleted Patch
### 지워진 패치

If someone has sent you a pull request on GitHub, but then deleted their original fork, 
you will be unable to clone their repository or to use `git am` as the [.diff, .patch](https://github.com/blog/967-github-secrets) urls become unavailable. 
But you can checkout the PR itself using [GitHub's special refs](https://gist.github.com/piscisaureus/3342247). 
To fetch the content of PR#1 into a new branch called pr_1:
만약 깃헙에서 누군가가 풀리퀘스트를 보냈는데 이미 원래의 포크가 지워졌다면,
url을 쓸 수 없게 돼 레파지토리를 클론할 수 없거나 [.diff, .patch](https://github.com/blog/967-github-secrets)와 같은 `git am`를 쓸 수 없을 꺼에요.
하지만 [깃헙의 특별한 참조](https://gist.github.com/piscisaureus/3342247)을 이용해서 풀 리퀘스트 자체를 확인할 수 있어요.
PR#1의 내용을 pr_1이란 새 브랜치로 패치 받을려면:

```sh
$ git fetch origin refs/pull/1/head:pr_1
From github.com:foo/bar
 * [new ref]         refs/pull/1/head -> pr_1
```

### Exporting a repository as a Zip file
### Zip파일로 레파지토리 추출하기

```sh
$ git archive --format zip --output /full/path/to/zipfile.zip master
```

## Tracking Files
## 파일 추적하기

<a href="i-want-to-change-a-file-names-capitalization-without-changing-the-contents-of-the-file"></a>

### I want to change a file name's capitalization, without changing the contents of the file
### 파일 내용엔 변경이 없이 파일 이름을 앞글자만 대문자로 바꾸고 싶어

```sh
(master)$ git mv --force myfile MyFile
```

### I want to overwrite local files when doing a git pull
### 깃 풀 받을때 로컬 파일을 덮어씌우고 싶어

```sh
(master)$ git fetch --all
(master)$ git reset --hard origin/master
```

<a href="remove-from-git"></a>

### I want to remove a file from Git but keep the file
### 파일을 로컬에는 그대로 두고 깃에서 지우고 싶어

```sh
(master)$ git rm --cached log.txt
```

### I want to revert a file to a specific revision
### 특정한 버전대로 파일을 복구하고 싶어

Assuming the hash of the commit you want is c5f567:
복구하고 싶은 해시가 c5f567 이라고 가정하면:

```sh
(master)$ git checkout c5f567 -- file1/to/restore file2/to/restore
```

If you want to revert to changes made just 1 commit before c5f567, pass the commit hash as c5f567~1:
c5f567 한 단계전으로 복구하고 싶다면, c5f567~1로 적어줘요:

```sh
(master)$ git checkout c5f567~1 -- file1/to/restore file2/to/restore
```

### I want to list changes of a specific file between commits or branches
### 커밋과 브랜치 간의 특적 파일 변경 이력이 필요해

Assuming you want to compare last commit with file from commit c5f567:
마지막 커밋과 c5f567으로 부터의 차이를 비교하고 싶다고 가정하면:


```sh
$ git diff HEAD:path_to_file/file c5f567:path_to_file/file
```

Same goes for branches:
브랜치도 같은 방법으로:

```sh
$ git diff master:path_to_file/file staging:path_to_file/file
```

## Configuration
## 설정

### I want to add aliases for some Git commands
### 깃 명령어 몇개 앨리어스 등록하고 싶어

On OS X and Linux, your git configuration file is stored in ```~/.gitconfig```.  
I've added some example aliases I use as shortcuts (and some of my common typos) in the ```[alias]``` section as shown below:
맥OS나 리눅스에는, 깃 설정 파일이 ```~/.gitconfig``` 에 있어요.
단축용으로 (몇개는 평소 쓰는 용도로) 앨리어스 몇개를 아래와 같이 계속 추가해오고 있어요. 


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

### I want to add an empty directory to my repository
### 레파지토리에 빈 디렉토리를 추가하고 싶어

You can’t! Git doesn’t support this, but there’s a hack. You can create a .gitignore file in the directory with the following contents:
못해요! 깃은 지원하지 않거든요, 근데 꼼수가 있어요. 디렉토리에에 .gitignore 파일을 아래 내용으로 만들어요:  

```
 # Ignore everything in this directory
 *
 # Except this file
 !.gitignore
```

Another common convention is to make an empty file in the folder, titled .gitkeep.
다른 일반적인 컨벤션은 그 폴더 안에 .gitkeep이라는 이름의 빈 파일을 만드는 거에요.

```sh
$ mkdir mydir
$ touch mydir/.gitkeep
```

You can also name the file as just .keep , in which case the second line above would be ```touch mydir/.keep```
.keep이란 이름으로도 쓸 수 있는데요, 두번째 라인이 ```touch mydir/.keep```가 되어야겠죠.

### I want to cache a username and password for a repository
### 레파지토리 유저명과 비밀번호를 캐시해두고 싶어

You might have a repository that requires authentication.  
In which case you can cache a username and password so you don't have to enter it on every push / pull. 
Credential helper can do this for you.
인증이 필요한 레파지토리를 가지고 있을 텐데요.
이런 경우 유저명과 비밀번호를 캐시할 수 있을테니 매번 푸시/풀 할 때마다 입력할 필욘 없어요.
크리덴셜 헬퍼가 해줄꺼에요.

```sh
$ git config --global credential.helper cache
# Set git to use the credential memory cache
```

```sh
$ git config --global credential.helper 'cache --timeout=3600'
# Set the cache to timeout after 1 hour (setting is in seconds)
```

### I want to make Git ignore permissions and filemode changes
### 깃이 권한과 파일모드 변경을 무시하게 만들고 싶어   

```sh
$ git config core.fileMode false
```

If you want to make this the default behaviour for logged-in users, then use:
이 것을 로그인된 유저의 기본 행위로 설정으로 해두려면, 이렇게 써요: 

```sh
$ git config --global core.fileMode false
```

### I want to set a global user
### 글로버 유저로 설정해두고 싶어

To configure user information used across all local repositories, and to set a name that is identifiable for credit when review version history:
모든 로컬 레파지토리에 사용되는 유저 정보를 설정하려면, 그리고 버전 이력을 리뷰할때 알아보기 쉬운 이름으로 설정하려면: 

```sh
$ git config --global user.name “[firstname lastname]”
```

To set an email address that will be associated with each history marker:
각 이력 생산자에게 연관해서 이메일 설정을 해주려면:

```sh
git config --global user.email “[valid-email]”
```

### I want to add command line coloring for Git
### 깃에 명령어 색상을을 넣고 싶어

To set automatic command line coloring for Git for easy reviewing:
손 쉬운 리뷰를 위한 깃 명령줄 자동 색상을 설정 하려면:

```sh
$ git config --global color.ui auto
```

## I've no idea what I did wrong
## 내가 뭘 잘못했는지 모르겠어

So, you're screwed - you `reset` something, or you merged the wrong branch, or you force pushed and now you can't find your commits. 
You know, at some point, you were doing alright, and you want to go back to some state you were at.
This is what `git reflog` is for. `reflog` keeps track of any changes to the tip of a branch, even if that tip isn't referenced by a branch or a tag. 
Basically, every time HEAD changes, a new entry is added to the reflog. This only works for local repositories, sadly, and it only tracks movements (not changes to a file that weren't recorded anywhere, for instance).
음, 망했군요. 뭔가를 `reset` 했거나, 다른 브랜치로 머지했거나, 지금은 찾질 못하는 커밋으로 강제 푸시를 해버렸군요.
알다시피, 어떤 시점에선, 잘 하고 있었고 거기로 돌아가고 싶겠죠.
이게 바로 `git reflog`의 존재이유에요.  `reflog` 는 브랜치 끝의 어떤 변경점이든 브랜치나 태그에 의해 참조되지 않더라도 다 보관해요.       
기본적으로, HEAD가 변경되는 모든 경우, 리플로그에 새로운 입력이 추가돼요. 아쉽게도 이 기능은 로컬 레파지토리에서만 동작해고, 오직 움직임만을 트래킹해요 (예를 들자면 어디에도 기록되지 않았던 파일의 변경은 아니에요)

```sh
(master)$ git reflog
0a2e358 HEAD@{0}: reset: moving to HEAD~2
0254ea7 HEAD@{1}: checkout: moving from 2.2 to master
c10f740 HEAD@{2}: checkout: moving from master to 2.2
```

The reflog above shows a checkout from master to the 2.2 branch and back. 
From there, there's a hard reset to an older commit. The latest activity is represented at the top labeled `HEAD@{0}`.
이 리플로그는 마스터에서 2.2 브랜치로 체크아웃하고 되돌린 것을 보여주네요.
저기에선, 오래된 커밋으로 리셋하기 어려워요. 최신 활동이 `HEAD@{0}` 상단 라벨로 보여지네요.

If it turns out that you accidentally moved back, 
the reflog will contain the commit master pointed to (0254ea7) before you accidentally dropped 2 commits.
만약 실수로 뒤로 이동했다면,
리플로그는 실수로 지워진 2개의 커밋 전인 (0254ea7)를 가르키는 커밋 마스터를 포함할꺼에요.


```sh
$ git reset --hard 0254ea7
```

Using `git reset` it is then possible to change master back to the commit it was before. 
This provides a safety net in case history was accidentally changed.
`git reset`을 쓰는 것으로 마스터를 이전 커밋으로 되돌릴 수 있어요.
이력이 실수로 변경됐을 때의 안정망을 제공할꺼에요.  

(copied and edited from [Source](https://www.atlassian.com/git/tutorials/rewriting-history/git-reflog)).
(복사해서 수정해봐가며 배워요 [Source](https://www.atlassian.com/git/tutorials/rewriting-history/git-reflog))

# Other Resources
# 다른 리소스

## Books
## 도서

* [Pro Git](https://git-scm.com/book/en/v2) - Scott Chacon and Ben Straub's excellent book about Git
* [Git Internals](https://github.com/pluralsight/git-internals-pdf) - Scott Chacon's other excellent book about Git

## Tutorials
## 튜토리얼

* [Atlassian's Git tutorial](https://www.atlassian.com/git/tutorials) Get Git right with tutorials from beginner to advanced.
* [Learn Git branching](https://learngitbranching.js.org/) An interactive web based branching/merging/rebasing tutorial
* [Getting solid at Git rebase vs. merge](https://medium.com/@porteneuve/getting-solid-at-git-rebase-vs-merge-4fa1a48c53aa)
* [git-workflow](https://github.com/asmeurer/git-workflow) - [Aaron Meurer](https://github.com/asmeurer)'s howto on using Git to contribute to open source repositories
* [GitHub as a workflow](https://hugogiraudel.com/2015/08/13/github-as-a-workflow/) - An interesting take on using GitHub as a workflow, particularly with empty PRs
* [Githug](https://github.com/Gazler/githug) - A game to learn more common Git workflows

## Scripts and Tools
## 스크립트와 도구

* [firstaidgit.io](http://firstaidgit.io/) A searchable selection of the most frequently asked Git questions
* [git-extra-commands](https://github.com/unixorn/git-extra-commands) - a collection of useful extra Git scripts
* [git-extras](https://github.com/tj/git-extras) - GIT utilities -- repo summary, repl, changelog population, author commit percentages and more
* [git-fire](https://github.com/qw3rtman/git-fire) - git-fire is a Git plugin that helps in the event of an emergency by adding all current files, committing, and pushing to a new branch (to prevent merge conflicts).
* [git-tips](https://github.com/git-tips/tips) - Small Git tips
* [git-town](https://github.com/Originate/git-town) - Generic, high-level Git workflow support! http://www.git-town.com

## GUI Clients
## GUI 클라이언트

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

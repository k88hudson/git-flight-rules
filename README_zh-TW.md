# Git飛行規則(Flight Rules)

🌍
*[English](README.md) ∙ [Español](README_es.md)  ∙  [Русский](README_ru.md) ∙ [繁體中文](README_zh-TW.md) ∙ [簡體中文](README_zh-CN.md) ∙ [한국어](README_kr.md)  ∙  [Tiếng Việt](README_vi.md) ∙ [Français](README_fr.md) ∙ [日本語](README_ja.md)*

#### 前言

- 英文原版[README](https://github.com/k88hudson/git-flight-rules/blob/master/README.md)
- 翻譯可能存在錯誤或不標準的地方，歡迎大家指正和修改，謝謝！

#### 什麼是"飛行規則"?

這是一篇給太空人（這裡就是指使用Git的程式設計師們）的指南，用來指導問題出現後的應對之法。

>  *飛行規則(Flight Rules)* 是記錄在手冊上的來之不易的一系列知識，記錄了某個事情發生的原因，以及怎樣一步一步的進行處理。本質上, 它們是特定場景的非常詳細的標準處理流程。 [...]

> 自20世紀60年代初以來，NASA一直在捕捉(capturing)我們的失誤，災難和解決方案, 當時水星時代(Mercury-era)的地面小組首先開始將“經驗教訓”收集到一個綱要(compendium)中，該綱現在已經有上千個問題情景，從發動機故障到破損的艙口把手到計算機故障，以及它們對應的解決方案。

&mdash; Chris Hadfield, *一個太空人的生活指南(An Astronaut's Guide to Life)*。

#### 這篇文章的約定

為了清楚的表述，這篇文件裡的所有例子使用了自訂的bash 提示，以便指示當前分支和是否有暫存的變化(changes)。分支名用小括號括起來，分支名後面跟的`*`表示暫存的變化(changes)。

[![Join the chat at https://gitter.im/k88hudson/git-flight-rules](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/k88hudson/git-flight-rules?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

  - [編輯提交(editting commits)](#%E7%BC%96%E8%BE%91%E6%8F%90%E4%BA%A4editting-commits)
    - [我剛才提交了什麼?](#%E6%88%91%E5%88%9A%E6%89%8D%E6%8F%90%E4%BA%A4%E4%BA%86%E4%BB%80%E4%B9%88)
    - [我的提交訊息(commit message)寫錯了](#%E6%88%91%E7%9A%84%E6%8F%90%E4%BA%A4%E4%BF%A1%E6%81%AFcommit-message%E5%86%99%E9%94%99%E4%BA%86)
    - [我提交(commit)裡的使用者名稱和信箱不對](#%E6%88%91%E6%8F%90%E4%BA%A4commit%E9%87%8C%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1%E4%B8%8D%E5%AF%B9)
    - [我想從一個提交(commit)裡移除一個文件](#%E6%88%91%E6%83%B3%E4%BB%8E%E4%B8%80%E4%B8%AA%E6%8F%90%E4%BA%A4commit%E9%87%8C%E7%A7%BB%E9%99%A4%E4%B8%80%E4%B8%AA%E6%96%87%E4%BB%B6)
    - [我想刪除我的最後一次提交(commit)](#%E6%88%91%E6%83%B3%E5%88%A0%E9%99%A4%E6%88%91%E7%9A%84%E7%9A%84%E6%9C%80%E5%90%8E%E4%B8%80%E6%AC%A1%E6%8F%90%E4%BA%A4commit)
    - [刪除任意提交(commit)](#%E5%88%A0%E9%99%A4%E4%BB%BB%E6%84%8F%E6%8F%90%E4%BA%A4commit)
    - [我嘗試推一個修正後的提交(amended commit)到遠程，但是報錯：](#%E6%88%91%E5%B0%9D%E8%AF%95%E6%8E%A8%E4%B8%80%E4%B8%AA%E4%BF%AE%E6%AD%A3%E5%90%8E%E7%9A%84%E6%8F%90%E4%BA%A4amended-commit%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BD%86%E6%98%AF%E6%8A%A5%E9%94%99)
    - [我意外的做了一次硬重設(hard reset)，我想找回我的內容](#%E6%88%91%E6%84%8F%E5%A4%96%E7%9A%84%E5%81%9A%E4%BA%86%E4%B8%80%E6%AC%A1%E7%A1%AC%E9%87%8D%E7%BD%AEhard-reset%E6%88%91%E6%83%B3%E6%89%BE%E5%9B%9E%E6%88%91%E7%9A%84%E5%86%85%E5%AE%B9)
  - [暫存(Staging)](#%E6%9A%82%E5%AD%98staging)
    - [我需要把暫存的內容添加到上一次的提交(commit)](#%E6%88%91%E9%9C%80%E8%A6%81%E6%8A%8A%E6%9A%82%E5%AD%98%E7%9A%84%E5%86%85%E5%AE%B9%E6%B7%BB%E5%8A%A0%E5%88%B0%E4%B8%8A%E4%B8%80%E6%AC%A1%E7%9A%84%E6%8F%90%E4%BA%A4commit)
    - [我想要暫存一個新文件的一部分，而不是這個文件的全部](#%E6%88%91%E6%83%B3%E8%A6%81%E6%9A%82%E5%AD%98%E4%B8%80%E4%B8%AA%E6%96%B0%E6%96%87%E4%BB%B6%E7%9A%84%E4%B8%80%E9%83%A8%E5%88%86%E8%80%8C%E4%B8%8D%E6%98%AF%E8%BF%99%E4%B8%AA%E6%96%87%E4%BB%B6%E7%9A%84%E5%85%A8%E9%83%A8)
    - [我想把在一個文件裡的變化(changes)加到兩個提交(commit)裡](#%E6%88%91%E6%83%B3%E6%8A%8A%E5%9C%A8%E4%B8%80%E4%B8%AA%E6%96%87%E4%BB%B6%E9%87%8C%E7%9A%84%E5%8F%98%E5%8C%96changes%E5%8A%A0%E5%88%B0%E4%B8%A4%E4%B8%AA%E6%8F%90%E4%BA%A4commit%E9%87%8C)
    - [我想把暫存的內容變成未暫存，把未暫存的內容暫存起來](#%E6%88%91%E6%83%B3%E6%8A%8A%E6%9A%82%E5%AD%98%E7%9A%84%E5%86%85%E5%AE%B9%E5%8F%98%E6%88%90%E6%9C%AA%E6%9A%82%E5%AD%98%E6%8A%8A%E6%9C%AA%E6%9A%82%E5%AD%98%E7%9A%84%E5%86%85%E5%AE%B9%E6%9A%82%E5%AD%98%E8%B5%B7%E6%9D%A5)
  - [未暫存(Unstaged)的內容](#%E6%9C%AA%E6%9A%82%E5%AD%98unstaged%E7%9A%84%E5%86%85%E5%AE%B9)
    - [我想把未暫存的內容移動到一個新分支](#%E6%88%91%E6%83%B3%E6%8A%8A%E6%9C%AA%E6%9A%82%E5%AD%98%E7%9A%84%E5%86%85%E5%AE%B9%E7%A7%BB%E5%8A%A8%E5%88%B0%E4%B8%80%E4%B8%AA%E6%96%B0%E5%88%86%E6%94%AF)
    - [我想把未暫存的內容移動到另一個已存在的分支](#%E6%88%91%E6%83%B3%E6%8A%8A%E6%9C%AA%E6%9A%82%E5%AD%98%E7%9A%84%E5%86%85%E5%AE%B9%E7%A7%BB%E5%8A%A8%E5%88%B0%E5%8F%A6%E4%B8%80%E4%B8%AA%E5%B7%B2%E5%AD%98%E5%9C%A8%E7%9A%84%E5%88%86%E6%94%AF)
    - [我想丟棄本地未提交的變化(uncommitted changes)](#%E6%88%91%E6%83%B3%E4%B8%A2%E5%BC%83%E6%9C%AC%E5%9C%B0%E6%9C%AA%E6%8F%90%E4%BA%A4%E7%9A%84%E5%8F%98%E5%8C%96uncommitted-changes)
    - [我想丟棄某些未暫存的內容](#%E6%88%91%E6%83%B3%E4%B8%A2%E5%BC%83%E6%9F%90%E4%BA%9B%E6%9C%AA%E6%9A%82%E5%AD%98%E7%9A%84%E5%86%85%E5%AE%B9)
  - [分支(Branches)](#%E5%88%86%E6%94%AFbranches)
    - [我從錯誤的分支拉取了內容，或把內容拉取到了錯誤的分支](#%E6%88%91%E4%BB%8E%E9%94%99%E8%AF%AF%E7%9A%84%E5%88%86%E6%94%AF%E6%8B%89%E5%8F%96%E4%BA%86%E5%86%85%E5%AE%B9%E6%88%96%E6%8A%8A%E5%86%85%E5%AE%B9%E6%8B%89%E5%8F%96%E5%88%B0%E4%BA%86%E9%94%99%E8%AF%AF%E7%9A%84%E5%88%86%E6%94%AF)
    - [我想扔掉本地的提交(commit)，以便我的分支與遠程的保持一致](#%E6%88%91%E6%83%B3%E6%89%94%E6%8E%89%E6%9C%AC%E5%9C%B0%E7%9A%84%E6%8F%90%E4%BA%A4commit%E4%BB%A5%E4%BE%BF%E6%88%91%E7%9A%84%E5%88%86%E6%94%AF%E4%B8%8E%E8%BF%9C%E7%A8%8B%E7%9A%84%E4%BF%9D%E6%8C%81%E4%B8%80%E8%87%B4)
    - [我需要提交到一個新分支，但錯誤的提交到了main](#%E6%88%91%E9%9C%80%E8%A6%81%E6%8F%90%E4%BA%A4%E5%88%B0%E4%B8%80%E4%B8%AA%E6%96%B0%E5%88%86%E6%94%AF%E4%BD%86%E9%94%99%E8%AF%AF%E7%9A%84%E6%8F%90%E4%BA%A4%E5%88%B0%E4%BA%86main)
    - [我想保留來自另外一個ref-ish的整個文件](#%E6%88%91%E6%83%B3%E4%BF%9D%E7%95%99%E6%9D%A5%E8%87%AA%E5%8F%A6%E5%A4%96%E4%B8%80%E4%B8%AAref-ish%E7%9A%84%E6%95%B4%E4%B8%AA%E6%96%87%E4%BB%B6)
    - [我把幾個提交(commit)提交到了同一個分支，而這些提交應該分布在不同的分支裡](#%E6%88%91%E6%8A%8A%E5%87%A0%E4%B8%AA%E6%8F%90%E4%BA%A4commit%E6%8F%90%E4%BA%A4%E5%88%B0%E4%BA%86%E5%90%8C%E4%B8%80%E4%B8%AA%E5%88%86%E6%94%AF%E8%80%8C%E8%BF%99%E4%BA%9B%E6%8F%90%E4%BA%A4%E5%BA%94%E8%AF%A5%E5%88%86%E5%B8%83%E5%9C%A8%E4%B8%8D%E5%90%8C%E7%9A%84%E5%88%86%E6%94%AF%E9%87%8C)
    - [我想刪除上遊(upstream)分支被刪除了的本地分支](#%E6%88%91%E6%83%B3%E5%88%A0%E9%99%A4%E4%B8%8A%E6%B8%B8upstream%E5%88%86%E6%94%AF%E8%A2%AB%E5%88%A0%E9%99%A4%E4%BA%86%E7%9A%84%E6%9C%AC%E5%9C%B0%E5%88%86%E6%94%AF)
    - [我不小心刪除了我的分支](#%E6%88%91%E4%B8%8D%E5%B0%8F%E5%BF%83%E5%88%A0%E9%99%A4%E4%BA%86%E6%88%91%E7%9A%84%E5%88%86%E6%94%AF)
    - [我想刪除一個分支](#%E6%88%91%E6%83%B3%E5%88%A0%E9%99%A4%E4%B8%80%E4%B8%AA%E5%88%86%E6%94%AF)
    - [我想從別人正在工作的遠程分枝籤出(checkout)一個分支](#%E6%88%91%E6%83%B3%E4%BB%8E%E5%88%AB%E4%BA%BA%E6%AD%A3%E5%9C%A8%E5%B7%A5%E4%BD%9C%E7%9A%84%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF%E7%AD%BE%E5%87%BAcheckout%E4%B8%80%E4%B8%AA%E5%88%86%E6%94%AF)
  - [Rebasing 和合併(Merging)](#rebasing-%E5%92%8C%E5%90%88%E5%B9%B6merging)
    - [我想撤銷rebase/merge](#%E6%88%91%E6%83%B3%E6%92%A4%E9%94%80rebasemerge)
    - [我已經rebase過, 但是我不想強推(force push)](#%E6%88%91%E5%B7%B2%E7%BB%8Frebase%E8%BF%87-%E4%BD%86%E6%98%AF%E6%88%91%E4%B8%8D%E6%83%B3%E5%BC%BA%E6%8E%A8force-push)
    - [我需要組合(combine)幾個提交(commit)](#%E6%88%91%E9%9C%80%E8%A6%81%E7%BB%84%E5%90%88combine%E5%87%A0%E4%B8%AA%E6%8F%90%E4%BA%A4commit)
      - [安全合併(merging)策略](#%E5%AE%89%E5%85%A8%E5%90%88%E5%B9%B6merging%E7%AD%96%E7%95%A5)
      - [我需要將一個分支合併成一個提交(commit)](#%E6%88%91%E9%9C%80%E8%A6%81%E5%B0%86%E4%B8%80%E4%B8%AA%E5%88%86%E6%94%AF%E5%90%88%E5%B9%B6%E6%88%90%E4%B8%80%E4%B8%AA%E6%8F%90%E4%BA%A4commit)
      - [我只想組合(combine)未推的提交(unpushed commit)](#%E6%88%91%E5%8F%AA%E6%83%B3%E7%BB%84%E5%90%88combine%E6%9C%AA%E6%8E%A8%E7%9A%84%E6%8F%90%E4%BA%A4unpushed-commit)
    - [檢查是否分支上的所有提交(commit)都合併(merge)過了](#%E6%A3%80%E6%9F%A5%E6%98%AF%E5%90%A6%E5%88%86%E6%94%AF%E4%B8%8A%E7%9A%84%E6%89%80%E6%9C%89%E6%8F%90%E4%BA%A4commit%E9%83%BD%E5%90%88%E5%B9%B6merge%E8%BF%87%E4%BA%86)
    - [互動式rebase(interactive rebase)可能出現的問題](#%E4%BA%A4%E4%BA%92%E5%BC%8Frebaseinteractive-rebase%E5%8F%AF%E8%83%BD%E5%87%BA%E7%8E%B0%E7%9A%84%E9%97%AE%E9%A2%98)
      - [這個rebase 編輯螢幕出現'noop'](#%E8%BF%99%E4%B8%AArebase-%E7%BC%96%E8%BE%91%E5%B1%8F%E5%B9%95%E5%87%BA%E7%8E%B0noop)
      - [有衝突的情況](#%E6%9C%89%E5%86%B2%E7%AA%81%E7%9A%84%E6%83%85%E5%86%B5)
  - [Stash](#stash)
    - [暫存所有改動](#%E6%9A%82%E5%AD%98%E6%89%80%E6%9C%89%E6%94%B9%E5%8A%A8)
    - [暫存指定文件](#%E6%9A%82%E5%AD%98%E6%8C%87%E5%AE%9A%E6%96%87%E4%BB%B6)
    - [暫存時記錄消息](#%E6%9A%82%E5%AD%98%E6%97%B6%E8%AE%B0%E5%BD%95%E6%B6%88%E6%81%AF)
    - [使用某個指定暫存](#%E4%BD%BF%E7%94%A8%E6%9F%90%E4%B8%AA%E6%8C%87%E5%AE%9A%E6%9A%82%E5%AD%98)
    - [暫存時保留未暫存的內容](#%E6%9A%82%E5%AD%98%E6%97%B6%E4%BF%9D%E7%95%99%E6%9C%AA%E6%9A%82%E5%AD%98%E7%9A%84%E5%86%85%E5%AE%B9)
  - [雜項(Miscellaneous Objects)](#%E6%9D%82%E9%A1%B9miscellaneous-objects)
    - [複製所有子模組](#%E5%85%8B%E9%9A%86%E6%89%80%E6%9C%89%E5%AD%90%E6%A8%A1%E5%9D%97)
    - [刪除標籤(tag)](#%E5%88%A0%E9%99%A4%E6%A0%87%E7%AD%BEtag)
    - [恢覆已刪除標籤(tag)](#%E6%81%A2%E5%A4%8D%E5%B7%B2%E5%88%A0%E9%99%A4%E6%A0%87%E7%AD%BEtag)
    - [已刪除補丁(patch)](#%E5%B7%B2%E5%88%A0%E9%99%A4%E8%A1%A5%E4%B8%81patch)
  - [跟蹤文件(Tracking Files)](#%E8%B7%9F%E8%B8%AA%E6%96%87%E4%BB%B6tracking-files)
    - [我只想改變一個檔案名字的大小寫，而不修改內容](#%E6%88%91%E5%8F%AA%E6%83%B3%E6%94%B9%E5%8F%98%E4%B8%80%E4%B8%AA%E6%96%87%E4%BB%B6%E5%90%8D%E5%AD%97%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%86%99%E8%80%8C%E4%B8%8D%E4%BF%AE%E6%94%B9%E5%86%85%E5%AE%B9)
    - [我想從Git刪除一個文件，但保留該文件](#%E6%88%91%E6%83%B3%E4%BB%8Egit%E5%88%A0%E9%99%A4%E4%B8%80%E4%B8%AA%E6%96%87%E4%BB%B6%E4%BD%86%E4%BF%9D%E7%95%99%E8%AF%A5%E6%96%87%E4%BB%B6)
  - [配置(Configuration)](#%E9%85%8D%E7%BD%AEconfiguration)
    - [我想給一些Git命令添加別名(alias)](#%E6%88%91%E6%83%B3%E7%BB%99%E4%B8%80%E4%BA%9Bgit%E5%91%BD%E4%BB%A4%E6%B7%BB%E5%8A%A0%E5%88%AB%E5%90%8Dalias)
    - [我想快取一個倉庫(repository)的使用者名稱和密碼](#%E6%88%91%E6%83%B3%E7%BC%93%E5%AD%98%E4%B8%80%E4%B8%AA%E4%BB%93%E5%BA%93repository%E7%9A%84%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E5%AF%86%E7%A0%81)
  - [我不知道我做錯了些什麼](#%E6%88%91%E4%B8%8D%E7%9F%A5%E9%81%93%E6%88%91%E5%81%9A%E9%94%99%E4%BA%86%E4%BA%9B%E4%BB%80%E4%B9%88)
- [其它資源(Other Resources)](#%E5%85%B6%E5%AE%83%E8%B5%84%E6%BA%90other-resources)
  - [書(Books)](#%E4%B9%A6books)
  - [教學(Tutorials)](#%E6%95%99%E7%A8%8Btutorials)
  - [腳本和工具(Scripts and Tools)](#%E8%84%9A%E6%9C%AC%E5%92%8C%E5%B7%A5%E5%85%B7scripts-and-tools)
  - [GUI用戶端(GUI Clients)](#gui%E5%AE%A2%E6%88%B7%E7%AB%AFgui-clients)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 編輯提交(editting commits)

<a name="diff-last"></a>
### 我剛才提交了什麼?

如果你用 `git commit -a` 提交了一次變化(changes)，而你又不確定到底這次提交了哪些內容。 你就可以用下面的命令顯示當前`HEAD`上的最近一次的提交(commit):

```sh
(main)$ git show
```

或者

```sh
$ git log -n1 -p
```

<a name="#i-wrote-the-wrong-thing-in-a-commit-message"></a>
### 我的提交訊息(commit message)寫錯了

如果你的提交訊息(commit message)寫錯了且這次提交(commit)還沒有推(push), 你可以透過下面的方法來修改提交訊息(commit message):

```sh
$ git commit --amend --only
```
這會打開你的默認編輯器, 在這裡你可以編輯訊息. 另一方面, 你也可以用一條命令一次完成:

```sh
$ git commit --amend --only -m 'xxxxxxx'
```

如果你已經推(push)了這次提交(commit), 你可以修改這次提交(commit)然後強推(force push), 但是不推薦這麼做。

<a name="commit-wrong-author"></a>
### 我提交(commit)裡的使用者名稱和信箱不對

如果這只是單個提交(commit)，修改它：

```sh
$ git commit --amend --author "New Authorname <authoremail@mydomain.com>"
```

如果你需要修改所有歷史, 參考 'git filter-branch'的指南頁.

<a href="#i-want-to-remove-a-file-from-a-commit"></a>
### 我想從一個提交(commit)裡移除一個文件

通過下面的方法，從一個提交(commit)裡移除一個文件:

```sh
$ git checkout HEAD^ myfile
$ git add -A
$ git commit --amend
```

這將非常有用，當你有一個開放的補丁(open patch)，你往上面提交了一個不必要的文件，你需要強推(force push)去更新這個遠程補丁。

<a name="delete-pushed-commit"></a>
### 我想刪除我的的最後一次提交(commit)

如果你需要刪除推了的提交(pushed commits)，你可以使用下面的方法。可是，這會不可逆的改變你的歷史，也會搞亂那些已經從該倉庫拉取(pulled)了的人的歷史。簡而言之，如果你不是很確定，千萬不要這麼做。

```sh
$ git reset HEAD^ --hard
$ git push -f [remote] [branch]
```

如果你還沒有推到遠程, 把Git重設(reset)到你最後一次提交前的狀態就可以了(同時保存暫存的變化):

```
(my-branch*)$ git reset --soft HEAD@{1}

```

這只能在沒有推送之前有用. 如果你已經推了, 唯一安全能做的是 `git revert SHAofBadCommit`， 那會創建一個新的提交(commit)用於撤消前一個提交的所有變化(changes)； 或者, 如果你推的這個分支是rebase-safe的 (例如： 其它開發者不會從這個分支拉), 只需要使用 `git push -f`； 更多, 請參考 [the above section](#deleteremove-last-pushed-commit)。

<a name="delete-any-commit"></a>
### 刪除任意提交(commit)

同樣的警告：不到萬不得已的時候不要這麼做.

```sh
$ git rebase --onto SHA1_OF_BAD_COMMIT^ SHA1_OF_BAD_COMMIT
$ git push -f [remote] [branch]
```

或者做一個 [互動式rebase](#interactive-rebase) 刪除那些你想要刪除的提交(commit)裡所對應的行。

<a name="#force-push"></a>
### 我嘗試推一個修正後的提交(amended commit)到遠程，但是報錯：

```sh
To https://github.com/yourusername/repo.git
! [rejected]        mybranch -> mybranch (non-fast-forward)
error: failed to push some refs to 'https://github.com/tanay1337/webmaker.org.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

注意, rebasing(見下面)和修正(amending)會用一個**新的提交(commit)代替舊的**, 所以如果之前你已經往遠程倉庫上推過一次修正前的提交(commit)，那你現在就必須強推(force push) (`-f`)。 注意 &ndash; *總是* 確保你指明一個分支!

```sh
(my-branch)$ git push origin mybranch -f
```

一般來說, **要避免強推**. 最好是創建和推(push)一個新的提交(commit)，而不是強推一個修正後的提交。後者會使那些與該分支或該分支的子分支工作的開發者，在源歷史中產生衝突。

<a href="undo-git-reset-hard"></a>
### 我意外的做了一次硬重設(hard reset)，我想找回我的內容

如果你意外的做了 `git reset --hard`, 你通常能找回你的提交(commit), 因為Git對每件事都會有日誌，且都會保存幾天。

```sh
(main)$ git reflog
```

你將會看到一個你過去提交(commit)的列表, 和一個重設的提交。 選擇你想要回到的提交(commit)的SHA，再重設一次:

```sh
(main)$ git reset --hard SHA1234
```

這樣就完成了。

## 暫存(Staging)

<a href="#i-need-to-add-staged-changes-to-the-previous-commit"></a>
### 我需要把暫存的內容添加到上一次的提交(commit)

```sh
(my-branch*)$ git commit --amend

```

<a name="commit-partial-new-file"></a>
### 我想要暫存一個新文件的一部分，而不是這個文件的全部

一般來說, 如果你想暫存一個文件的一部分, 你可這樣做:

```sh
$ git add --patch filename.x
```

`-p` 簡寫。這會打開交互模式， 你將能夠用 `s` 選項來分隔提交(commit)； 然而, 如果這個文件是新的, 會沒有這個選擇， 添加一個新文件時, 這樣做:

```sh
$ git add -N filename.x
```

然後, 你需要用 `e` 選項來手動選擇需要添加的行，執行 `git diff --cached` 將會顯示哪些行暫存了哪些行只是保存在本地了。

<a href="stage-in-two-commits"></a>
### 我想把在一個文件裡的變化(changes)加到兩個提交(commit)裡

`git add` 會把整個文件加入到一個提交. `git add -p` 允許互動式的選擇你想要提交的部分.

<a href="unstaging-edits-and-staging-the-unstaged"></a>
### 我想把暫存的內容變成未暫存，把未暫存的內容暫存起來

多數情況下，你應該將所有的內容變為未暫存，然後再選擇你想要的內容進行commit。
但假定你就是想要這麼做，這裡你可以創建一個臨時的commit來保存你已暫存的內容，然後暫存你的未暫存的內容並進行stash。然後reset最後一個commit將原本暫存的內容變為未暫存，最後stash pop回來。

```sh
$ git commit -m "WIP"
$ git add .
$ git stash
$ git reset HEAD^
$ git stash pop --index 0
```

注意1: 這裡使用`pop`僅僅是因為想盡可能保持冪等。
注意2: 假如你不加上`--index`你會把暫存的文件標記為為儲存.這個[連結](https://stackoverflow.com/questions/31595873/git-stash-with-staged-files-does-stash-convert-staged-files-to-unstaged?answertab=active#tab-top) 解釋得比較清楚。（不過是英文的，其大意是說，這是一個較為底層的問題，stash時會做2個commit，其中一個會記錄index狀態，staged的文件等東西，另一個紀錄worktree和其他的一些東西，如果你不在apply時加index，git會把兩個一起銷毀，所以staged裡就空了）。

## 未暫存(Unstaged)的內容

<a href="move-unstaged-edits-to-new-branch"></a>
### 我想把未暫存的內容移動到一個新分支

```sh
$ git checkout -b my-branch
```

<a href="move-unstaged-edits-to-old-branch"></a>
### 我想把未暫存的內容移動到另一個已存在的分支

```sh
$ git stash
$ git checkout my-branch
$ git stash pop
```

<a href="i-want-to-discard-my-local-uncommitted-changes"></a>
### 我想丟棄本地未提交的變化(uncommitted changes)

如果你只是想重設源(origin)和你本地(local)之間的一些提交(commit)，你可以：

```sh
# one commit
(my-branch)$ git reset --hard HEAD^
# two commits
(my-branch)$ git reset --hard HEAD^^
# four commits
(my-branch)$ git reset --hard HEAD~4
# or
(main)$ git checkout -f
```

重設某個特殊的文件, 你可以用檔案名做為參數:

```sh
$ git reset filename
```

<a href="i-want-to-discard-specific-unstaged-changes"></a>
### 我想丟棄某些未暫存的內容

如果你想丟棄工作拷貝中的一部分內容，而不是全部。

簽出(checkout)不需要的內容，保留需要的。

```sh
$ git checkout -p
# Answer y to all of the snippets you want to drop
```

另外一個方法是使用 `stash`， Stash所有要保留下的內容, 重設工作拷貝, 重新應用保留的部分。

```sh
$ git stash -p
# Select all of the snippets you want to save
$ git reset --hard
$ git stash pop
```

或者, stash 你不需要的部分, 然後stash drop。

```sh
$ git stash -p
# Select all of the snippets you don't want to save
$ git stash drop
```

## 分支(Branches)

<a name="pull-wrong-branch"></a>
### 我從錯誤的分支拉取了內容，或把內容拉取到了錯誤的分支

這是另外一種使用 `git reflog` 情況，找到在這次錯誤拉(pull) 之前HEAD的指向。

```sh
(main)$ git reflog
ab7555f HEAD@{0}: pull origin wrong-branch: Fast-forward
c5bc55a HEAD@{1}: checkout: checkout message goes here
```

重設分支到你所需的提交(desired commit):

```sh
$ git reset --hard c5bc55a
```

完成。

<a href="discard-local-commits"></a>
### 我想扔掉本地的提交(commit)，以便我的分支與遠程的保持一致

先確認你沒有推(push)你的內容到遠程。

`git status` 會顯示你領先(ahead)源(origin)多少個提交:

```sh
(my-branch)$ git status
# On branch my-branch
# Your branch is ahead of 'origin/my-branch' by 2 commits.
#   (use "git push" to publish your local commits)
#
```

一種方法是:

```sh
(main)$ git reset --hard origin/my-branch
```

<a name="commit-wrong-branch"></a>
### 我需要提交到一個新分支，但錯誤的提交到了main

在main下創建一個新分支，不切換到新分支,仍在main下:

```sh
(main)$ git branch my-branch
```

把main分支重設到前一個提交:

```sh
(main)$ git reset --hard HEAD^
```

`HEAD^` 是 `HEAD^1` 的簡寫，你可以透過指定要設置的`HEAD`來進一步重設。

或者, 如果你不想使用 `HEAD^`, 找到你想重設到的提交(commit)的hash(`git log` 能夠完成)， 然後重設到這個hash。 使用`git push` 同步內容到遠程。

例如, main分支想重設到的提交的hash為`a13b85e`:

```sh
(main)$ git reset --hard a13b85e
HEAD is now at a13b85e
```

簽出(checkout)剛才新建的分支繼續工作:

```sh
(main)$ git checkout my-branch
```

<a name="keep-whole-file"></a>
### 我想保留來自另外一個ref-ish的整個文件

假設你正在做一個原型方案(原文為working spike (see note)), 有成百的內容，每個都工作得很好。現在, 你提交到了一個分支，保存工作內容:

```sh
(solution)$ git add -A && git commit -m "Adding all changes from this spike into one big commit."
```

當你想要把它放到一個分支裡 (可能是`feature`, 或者 `develop`), 你關心是保持整個文件的完整，你想要一個大的提交分隔成比較小。

假設你有:

  * 分支 `solution`, 擁有原型方案， 領先 `develop` 分支。
  * 分支 `develop`, 在這裡你應用原型方案的一些內容。

我去可以透過把內容拿到你的分支裡，來解決這個問題:

```sh
(develop)$ git checkout solution -- file1.txt
```

這會把這個文件內容從分支 `solution` 拿到分支 `develop` 裡來:

```sh
# On branch develop
# Your branch is up-to-date with 'origin/develop'.
# Changes to be committed:
#  (use "git reset HEAD <file>..." to unstage)
#
#        modified:   file1.txt
```

然後, 正常提交。

Note: Spike solutions are made to analyze or solve the problem. These solutions are used for estimation and discarded once everyone gets clear visualization of the problem. ~ [Wikipedia](https://en.wikipedia.org/wiki/Extreme_programming_practices).

<a name="cherry-pick"></a>
### 我把幾個提交(commit)提交到了同一個分支，而這些提交應該分布在不同的分支裡

假設你有一個`main`分支， 執行`git log`, 你看到你做過兩次提交:

```sh
(main)$ git log

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

讓我們用提交hash(commit hash)標記bug (`e3851e8` for #21, `5ea5173` for #14).

首先, 我們把`main`分支重設到正確的提交(`a13b85e`):

```sh
(main)$ git reset --hard a13b85e
HEAD is now at a13b85e
```

現在, 我們對 bug #21 創建一個新的分支:

```sh
(main)$ git checkout -b 21
(21)$
```

接著, 我們用 *cherry-pick* 把對bug #21的提交放入當前分支。 這意味著我們將應用(apply)這個提交(commit)，僅僅這一個提交(commit)，直接在HEAD上面。

```sh
(21)$ git cherry-pick e3851e8
```

這時候, 這裡可能會產生衝突， 參見[互動式 rebasing 章](#interactive-rebase) [**衝突節**](#merge-conflict) 解決衝突.

再者， 我們為bug #14 創建一個新的分支, 也基於`main`分支

```sh
(21)$ git checkout main
(main)$ git checkout -b 14
(14)$
```

最後, 為 bug #14 執行 `cherry-pick`:

```sh
(14)$ git cherry-pick 5ea5173
```

<a name="delete-stale-local-branches"></a>
### 我想刪除上遊(upstream)分支被刪除了的本地分支
一旦你在github 上面合併(merge)了一個pull request, 你就可以刪除你fork裡被合併的分支。 如果你不準備繼續在這個分支裡工作, 刪除這個分支的本地拷貝會更乾淨，使你不會陷入工作分支和一堆陳舊分支的混亂之中。

```sh
$ git fetch -p
```

<a name='restore-a-deleted-branch'></a>
### 我不小心刪除了我的分支

如果你定期推送到遠程, 多數情況下應該是安全的，但有些時候還是可能刪除了還沒有推到遠程的分支。 讓我們先創建一個分支和一個新的文件:

```sh
(main)$ git checkout -b my-branch
(my-branch)$ git branch
(my-branch)$ touch foo.txt
(my-branch)$ ls
README.md foo.txt
```

添加文件並做一次提交

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

現在我們切回到主(main)分支，‘不小心的’刪除`my-branch`分支

```sh
(my-branch)$ git checkout main
Switched to branch 'main'
Your branch is up-to-date with 'origin/main'.
(main)$ git branch -D my-branch
Deleted branch my-branch (was 4e3cd85).
(main)$ echo oh noes, deleted my branch!
oh noes, deleted my branch!
```

在這時候你應該想起了`reflog`, 一個升級版的日誌，它儲存了倉庫(repo)裡面所有動作的歷史。

```
(main)$ git reflog
69204cd HEAD@{0}: checkout: moving from my-branch to main
4e3cd85 HEAD@{1}: commit: foo.txt added
69204cd HEAD@{2}: checkout: moving from main to my-branch
```

正如你所見，我們有一個來自刪除分支的提交hash(commit hash)，接下來看看是否能恢覆刪除了的分支。

```sh
(main)$ git checkout -b my-branch-help
Switched to a new branch 'my-branch-help'
(my-branch-help)$ git reset --hard 4e3cd85
HEAD is now at 4e3cd85 foo.txt added
(my-branch-help)$ ls
README.md foo.txt
```

看! 我們把刪除的文件找回來了。 Git的 `reflog` 在rebasing出錯的時候也是同樣有用的。

<a name="i-want-to-delete-a-branch"></a>
### 我想刪除一個分支

刪除一個遠程分支:

```sh
(main)$ git push origin --delete my-branch
```

你也可以:

```sh
(main)$ git push origin :my-branch
```

刪除一個本地分支:

```sh
(main)$ git branch -D my-branch
```

<a name="i-want-to-checkout-to-a-remote-branch-that-someone-else-is-working-on"></a>
### 我想從別人正在工作的遠程分枝籤出(checkout)一個分支

首先, 從遠程拉取(fetch) 所有分支:

```sh
(main)$ git fetch --all
```

假設你想要從遠程的`daves`分枝籤出到本地的`daves`

```sh
(main)$ git checkout --track origin/daves
Branch daves set up to track remote branch daves from origin.
Switched to a new branch 'daves'
```

(`--track` 是 `git checkout -b [branch] [remotename]/[branch]` 的簡寫)

這樣就得到了一個`daves`分支的本地拷貝, 任何推過(pushed)的更新，遠程都能看到.

## Rebasing 和合併(Merging)

<a name="undo-rebase"></a>
### 我想撤銷rebase/merge

你可以合併(merge)或rebase了一個錯誤的分支, 或者完成不了一個進行中的rebase/merge。 Git 在進行危險操作的時候會把原始的HEAD保存在一個叫ORIG_HEAD的變數裡, 所以要把分支恢覆到rebase/merge前的狀態是很容易的。

```sh
(my-branch)$ git reset --hard ORIG_HEAD
```

<a name="force-push-rebase"></a>
### 我已經rebase過, 但是我不想強推(force push)

不幸的是，如果你想把這些變化(changes)反應到遠程分支上，你就必須得強推(force push)。 是因你快進(Fast forward)了提交，改變了Git歷史, 遠程分支不會接受變化(changes)，除非強推(force push)。這就是許多人使用 merge 工作流, 而不是 rebasing 工作流的主要原因之一， 開發者的強推(force push)會使大的團隊陷入麻煩。使用時需要注意，一種安全使用 rebase 的方法是，不要把你的變化(changes)反映到遠程分支上, 而是按下面的做:

```sh
(main)$ git checkout my-branch
(my-branch)$ git rebase -i main
(my-branch)$ git checkout main
(main)$ git merge --ff-only my-branch
```

更多, 參見 [this SO thread](http://stackoverflow.com/questions/11058312/how-can-i-use-git-rebase-without-requiring-a-forced-push).

<a name="interactive-rebase"></a>
### 我需要組合(combine)幾個提交(commit)

假設你的工作分支將會做對於 `main` 的pull-request。 一般情況下你不關心提交(commit)的時間戳，只想組合 *所有* 提交(commit) 到一個單獨的裡面, 然後重設(reset)重提交(recommit)。 確保主(main)分支是最新的和你的變化都已經提交了, 然後:

```sh
(my-branch)$ git reset --soft main
(my-branch)$ git commit -am "New awesome feature"
```

如果你想要更多的控制, 想要保留時間戳, 你需要做互動式rebase (interactive rebase):

```sh
(my-branch)$ git rebase -i main
```

如果沒有相對的其它分支， 你將不得不相對自己的`HEAD` 進行 rebase。 例如：你想組合最近的兩次提交(commit), 你將相對於`HEAD~2` 進行rebase， 組合最近3次提交(commit), 相對於`HEAD~3`, 等等。

```sh
(main)$ git rebase -i HEAD~2
```

在你執行了互動式 rebase的命令(interactive rebase command)後, 你將在你的編輯器裡看到類似下面的內容:

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

所有以 `#` 開頭的行都是注釋, 不會影響 rebase.

然後，你可以用任何上面命令列表的命令替換 `pick`, 你也可以透過刪除對應的行來刪除一個提交(commit)。

例如, 如果你想 **單獨保留最舊(first)的提交(commit),組合所有剩下的到第二個裡面**, 你就應該編輯第二個提交(commit)後面的每個提交(commit) 前的單字為 `f`:

```vim
pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
f b729ad5 fixup
f e3851e8 another fix
```

如果你想組合這些提交(commit) **並重命名這個提交(commit)**, 你應該在第二個提交(commit)旁邊添加一個`r`，或者更簡單的用`s` 替代 `f`:

```vim
pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
s b729ad5 fixup
s e3851e8 another fix
```

你可以在接下來彈出的文本提示框裡重命名提交(commit)。

```vim
Newer, awesomer features

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# rebase in progress; onto 8074d12
# You are currently editing a commit while rebasing branch 'main' on '8074d12'.
#
# Changes to be committed:
#	modified:   README.md
#

```

如果成功了, 你應該看到類似下面的內容:

```sh
(main)$ Successfully rebased and updated refs/heads/main.
```

#### 安全合併(merging)策略
`--no-commit` 執行合併(merge)但不自動提交, 給用戶在做提交前檢查和修改的機會。 `no-ff` 會為特性分支(feature branch)的存在過留下證據, 保持項目歷史一致。

```sh
(main)$ git merge --no-ff --no-commit my-branch
```

#### 我需要將一個分支合併成一個提交(commit)

```sh
(main)$ git merge --squash my-branch
```

<a name="rebase-unpushed-commits"></a>
#### 我只想組合(combine)未推的提交(unpushed commit)

有時候，在將數據推向上遊之前，你有幾個正在進行的工作提交(commit)。這時候不希望把已經推(push)過的組合進來，因為其他人可能已經有提交(commit)引用它們了。

```sh
(main)$ git rebase -i @{u}
```

這會產生一次互動式的rebase(interactive rebase), 只會列出沒有推(push)的提交(commit)， 在這個列表時進行reorder/fix/squash 都是安全的。

<a name="check-if-all-commits-on-a-branch-are-merged"></a>
### 檢查是否分支上的所有提交(commit)都合併(merge)過了

檢查一個分支上的所有提交(commit)是否都已經合併(merge)到了其它分支, 你應該在這些分支的head(或任何 commits)之間做一次diff:

```sh
(main)$ git log --graph --left-right --cherry-pick --oneline HEAD...feature/120-on-scroll
```

這會告訴你在一個分支裡有而另一個分支沒有的所有提交(commit), 和分支之間不共享的提交(commit)的列表。 另一個做法可以是:

```sh
(main)$ git log main ^feature/120-on-scroll --no-merges
```

### 互動式rebase(interactive rebase)可能出現的問題

<a name="noop"></a>
#### 這個rebase 編輯螢幕出現'noop'

如果你看到的是這樣:
```
noop
```

這意味著你rebase的分支和當前分支在同一個提交(commit)上, 或者 *領先(ahead)* 當前分支。 你可以嘗試:

* 檢查確保主(main)分支沒有問題
* rebase  `HEAD~2` 或者更早

<a name="merge-conflict"></a>
#### 有衝突的情況

如果你不能成功的完成rebase, 你可能必須要解決衝突。

首先執行 `git status` 找出哪些文件有衝突:

```sh
(my-branch)$ git status
On branch my-branch
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   README.md
```

在這個例子裡面, `README.md` 有衝突。 打開這個文件找到類似下面的內容:

```vim
   <<<<<<< HEAD
   some code
   =========
   some code
   >>>>>>> new-commit
```

你需要解決新提交的代碼(範例裡, 從中間`==`線到`new-commit`的地方)與`HEAD` 之間不一樣的地方.

有時候這些合並非常複雜，你應該使用可視化的差異編輯器(visual diff editor):

```sh
(main*)$ git mergetool -t opendiff
```

在你解決完所有衝突和測試過後, `git add` 變化了的(changed)文件, 然後用`git rebase --continue` 繼續rebase。

```sh
(my-branch)$ git add README.md
(my-branch)$ git rebase --continue
```

如果在解決完所有的衝突過後，得到了與提交前一樣的結果, 可以執行`git rebase --skip`。

任何時候你想結束整個rebase 過程，回來rebase前的分支狀態, 你可以做:

```sh
(my-branch)$ git rebase --abort
```

<a name="stashing"></a>
## Stash

### 暫存所有改動

暫存你工作目錄下的所有改動

```sh
$ git stash
```

你可以使用`-u`來排除一些文件

```sh
$ git stash -u
```

### 暫存指定文件

假設你只想暫存某一個文件

```sh
$ git stash push working-directory-path/filename.ext
```

假設你想暫存多個文件

```sh
$ git stash push working-directory-path/filename1.ext working-directory-path/filename2.ext
```

<a name="stash-msg"></a>
### 暫存時記錄消息

這樣你可以在`list`時看到它

```sh
$ git stash save <message>
```
或
```sh
$ git stash push -m <message>
```
<a name="stash-apply-specific"></a>
### 使用某個指定暫存

首先你可以查看你的`stash`記錄

```sh
$ git stash list
```

然後你可以`apply`某個`stash`

```sh
$ git stash apply "stash@{n}"
```

此處， 'n'是`stash`在棧中的位置，最上層的`stash`會是0

除此之外，也可以使用時間標記(假如你能記得的話)。

```sh
$ git stash apply "stash@{2.hours.ago}"
```

<a href="stage-and-keep-unstaged"></a>
### 暫存時保留未暫存的內容

你需要手動create一個`stash commit`， 然後使用`git stash store`。

```sh
$ git stash create
$ git stash store -m "commit-message" CREATED_SHA1
```

<a name="miscellaneous-objects"></a>
## 雜項(Miscellaneous Objects)

<a name="clone-submodules"></a>
### 複製所有子模組

```sh
$ git clone --recursive git://github.com/foo/bar.git
```

如果已經複製了:

```sh
$ git submodule update --init --recursive
```

<a name="delete-tag"></a>
### 刪除標籤(tag)

```sh
$ git tag -d <tag_name>
$ git push <remote> :refs/tags/<tag_name>
```

<a name="recover-tag"></a>
### 恢覆已刪除標籤(tag)

如果你想恢覆一個已刪除標籤(tag), 可以按照下面的步驟: 首先, 需要找到無法訪問的標籤(unreachable tag):

```sh
$ git fsck --unreachable | grep tag
```

記下這個標籤(tag)的hash，然後用Git的 [update-ref](http://git-scm.com/docs/git-update-ref):

```sh
$ git update-ref refs/tags/<tag_name> <hash>
```

這時你的標籤(tag)應該已經恢覆了。

<a name="deleted-patch"></a>
### 已刪除補丁(patch)

如果某人在 GitHub 上給你發了一個pull request, 但是然後他刪除了他自己的原始 fork, 你將沒辦法複製他們的提交(commit)或使用 `git am`。在這種情況下, 最好手動的查看他們的提交(commit)，並把它們拷貝到一個本地新分支，然後做提交。

做完提交後, 再修改作者，參見[變更作者](#commit-wrong-author)。 然後, 應用變化, 再發起一個新的pull request。

## 跟蹤文件(Tracking Files)

<a href="i-want-to-change-a-file-names-capitalization-without-changing-the-contents-of-the-file"></a>
### 我只想改變一個檔案名字的大小寫，而不修改內容

```sh
(main)$ git mv --force myfile MyFile
```

<a href="remove-from-git"></a>
### 我想從Git刪除一個文件，但保留該文件

```sh
(main)$ git rm --cached log.txt
```

## 配置(Configuration)

<a name="adding-command-aliases"></a>
### 我想給一些Git命令添加別名(alias)

在 OS X 和 Linux 下, 你的 Git的配置文件儲存在 ```~/.gitconfig```。我在```[alias]``` 部分添加了一些快捷別名(和一些我容易拼寫錯誤的)，如下:

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

<a name="credential-helper"></a>
### 我想快取一個倉庫(repository)的使用者名稱和密碼

你可能有一個倉庫需要授權，這時你可以快取使用者名稱和密碼，而不用每次推/拉(push/pull)的時候都輸入，Credential helper能幫你。

```sh
$ git config --global credential.helper cache
# Set git to use the credential memory cache
```

```sh
$ git config --global credential.helper 'cache --timeout=3600'
# Set the cache to timeout after 1 hour (setting is in seconds)
```

<a href="#ive-no-idea-what-i-did-wrong"></a>
## 我不知道我做錯了些什麼

你把事情搞砸了：你 `重設(reset)` 了一些東西, 或者你合併了錯誤的分支, 亦或你強推了後找不到你自己的提交(commit)了。有些時候, 你一直都做得很好, 但你想回到以前的某個狀態。

這就是 `git reflog` 的目的， `reflog` 記錄對分支頂端(the tip of a branch)的任何改變, 即使那個頂端沒有被任何分支或標籤引用。基本上, 每次HEAD的改變, 一條新的紀錄就會增加到`reflog`。遺憾的是，這只對本地分支起作用，且它只跟蹤動作 (例如，不會跟蹤一個沒有被記錄的文件的任何改變)。

```sh
(main)$ git reflog
0a2e358 HEAD@{0}: reset: moving to HEAD~2
0254ea7 HEAD@{1}: checkout: moving from 2.2 to main
c10f740 HEAD@{2}: checkout: moving from main to 2.2
```

上面的reflog展示了從main分枝籤出(checkout)到2.2 分支，然後再簽回。 那裡，還有一個硬重設(hard reset)到一個較舊的提交。最新的動作出現在最上面以 `HEAD@{0}`標識.

如果事實證明你不小心回移(move back)了提交(commit), reflog 會包含你不小心回移前main上指向的提交(0254ea7)。

```sh
$ git reset --hard 0254ea7
```

然後使用git reset就可以把main改回到之前的commit，這提供了一個在歷史被意外更改情況下的安全網。

([摘自](https://www.atlassian.com/git/tutorials/rewriting-history/git-reflog)).

# 其它資源(Other Resources)

## 書(Books)

* [Pro Git](https://git-scm.com/book/en/v2) - Scott Chacon's excellent git book
* [Git Internals](https://github.com/pluralsight/git-internals-pdf) - Scott Chacon's other excellent git book

## 教學(Tutorials)

* [Learn Git branching](https://learngitbranching.js.org/) 一個基於網頁的互動式 branching/merging/rebasing 教學
* [Getting solid at Git rebase vs. merge](https://medium.com/@porteneuve/getting-solid-at-git-rebase-vs-merge-4fa1a48c53aa)
* [git-workflow](https://github.com/asmeurer/git-workflow) - [Aaron Meurer](https://github.com/asmeurer)的怎麼使用Git為開源倉庫貢獻
* [GitHub as a workflow](http://hugogiraudel.com/2015/08/13/github-as-a-workflow/) - 使用GitHub做為工作流的趣事, 尤其是空PRs

## 腳本和工具(Scripts and Tools)

* [firstaidgit.io](http://firstaidgit.io/) 一個可搜索的最常被問到的Git的問題
* [git-extra-commands](https://github.com/unixorn/git-extra-commands) - 一堆有用的額外的Git腳本
* [git-extras](https://github.com/tj/git-extras) - GIT 工具集 -- repo summary, repl, changelog population, author commit percentages and more
* [git-fire](https://github.com/qw3rtman/git-fire) - git-fire 是一個 Git 插件，用於幫助在緊急情況下添加所有當前文件, 做提交(committing), 和推(push)到一個新分支(阻止合併衝突)。
* [git-tips](https://github.com/git-tips/tips) - Git小提示
* [git-town](https://github.com/Originate/git-town) - 通用，高級Git工作流支持！ http://www.git-town.com

## GUI用戶端(GUI Clients)
* [GitKraken](https://www.gitkraken.com/) - 豪華的Git用戶端 Windows, Mac & Linux
* [git-cola](https://git-cola.github.io/) - 另外一個Git用戶端 Windows & OS X
* [GitUp](https://github.com/git-up/GitUp) - 一個新的Git用戶端，在處理Git的複雜性上有自己的特點
* [gitx-dev](https://rowanj.github.io/gitx/) - 圖形化的Git用戶端 OS X
* [Source Tree](https://www.sourcetreeapp.com/) - 免費的圖形化Git用戶端 Windows & OS X
* [Tower](http://www.git-tower.com/) - 圖形化Git用戶端 OS X(付費)

# Git 飛行規則（Flight Rules）

🌍
*[English](README.md) ∙ [Español](README_es.md)  ∙  [Русский](README_ru.md) ∙ [繁體中文](README_zh-TW.md) ∙ [簡體中文](README_zh-CN.md) ∙ [한국어](README_kr.md)  ∙  [Tiếng Việt](README_vi.md) ∙ [Français](README_fr.md) ∙ [日本語](README_ja.md)*

#### 前言

- 英文原版 [README](https://github.com/k88hudson/git-flight-rules/blob/master/README.md)
- 翻譯可能存在錯誤或不標準的地方，歡迎大家指正和修改，謝謝！

#### 什麼是「飛行規則」？

這是一篇給太空人（這裡就是指使用 Git 的程式設計師們）的指南，用來指導問題出現後的應對之法。

> 飛行規則（flight rules）是記錄在手冊上的來之不易的一系列知識，記錄了某個事情發生的原因，以及怎樣一步一步的進行處理。本質上，它們是特定場景的非常詳細的標準處理流程。[...]

> 自 20 世紀 60 年代初以來，NASA 一直在捕捉（capturing）失誤、災難和解決方案。當時水星時代（Mercury-era）的地面小組首先開始將「經驗教訓」收集到一個綱要（compendium）中，該綱現在已經有上千個問題情景，從發動機故障、到破損的艙口把手、再到計算機故障，以及它們對應的解決方案。

——Chris Hadfield，《一個太空人的生活指南》（An Astronaut's Guide to Life）

#### 這篇文章的約定

為了清楚的表述，這篇文件裡的所有例子使用了自訂的 Bash 提示，以便指示目前分支和是否有暫存的變化（changes）。分支名用小括號括起來，分支名後面跟的 `*` 表示暫存的變化（changes）。

[![Join the chat at https://gitter.im/k88hudson/git-flight-rules](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/k88hudson/git-flight-rules?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

  - [編輯提交（editting commits）](#%E7%B7%A8%E8%BC%AF%E6%8F%90%E4%BA%A4editting-commits)
    - [我剛才提交了什麼？](#%E6%88%91%E5%89%9B%E6%89%8D%E6%8F%90%E4%BA%A4%E4%BA%86%E4%BB%80%E9%BA%BC)
    - [我的提交訊息（commit message）寫錯了](#%E6%88%91%E7%9A%84%E6%8F%90%E4%BA%A4%E8%A8%8A%E6%81%AFcommit-message%E5%AF%AB%E9%8C%AF%E4%BA%86)
    - [我提交（commit）裡的使用者名稱和信箱不對](#%E6%88%91%E6%8F%90%E4%BA%A4commit%E8%A3%A1%E7%9A%84%E4%BD%BF%E7%94%A8%E8%80%85%E5%90%8D%E7%A8%B1%E5%92%8C%E4%BF%A1%E7%AE%B1%E4%B8%8D%E5%B0%8D)
    - [我想從一個提交（commit）裡移除一個文件](#%E6%88%91%E6%83%B3%E5%BE%9E%E4%B8%80%E5%80%8B%E6%8F%90%E4%BA%A4commit%E8%A3%A1%E7%A7%BB%E9%99%A4%E4%B8%80%E5%80%8B%E6%96%87%E4%BB%B6)
    - [我想刪除我最後一次提交（commit）](#%E6%88%91%E6%83%B3%E5%88%AA%E9%99%A4%E6%88%91%E6%9C%80%E5%BE%8C%E4%B8%80%E6%AC%A1%E6%8F%90%E4%BA%A4commit)
    - [刪除任意提交（commit）](#%E5%88%AA%E9%99%A4%E4%BB%BB%E6%84%8F%E6%8F%90%E4%BA%A4commit)
    - [我嘗試推送一個修正後的提交（amended commit）到遠端，但是報錯](#%E6%88%91%E5%98%97%E8%A9%A6%E6%8E%A8%E9%80%81%E4%B8%80%E5%80%8B%E4%BF%AE%E6%AD%A3%E5%BE%8C%E7%9A%84%E6%8F%90%E4%BA%A4amended-commit%E5%88%B0%E9%81%A0%E7%AB%AF%E4%BD%86%E6%98%AF%E5%A0%B1%E9%8C%AF)
    - [我意外地硬重設（hard reset）了，我想找回我的內容](#%E6%88%91%E6%84%8F%E5%A4%96%E5%9C%B0%E7%A1%AC%E9%87%8D%E8%A8%ADhard-reset%E4%BA%86%E6%88%91%E6%83%B3%E6%89%BE%E5%9B%9E%E6%88%91%E7%9A%84%E5%85%A7%E5%AE%B9)
  - [暫存（staging）](#%E6%9A%AB%E5%AD%98staging)
    - [我需要把暫存的內容添加到上一次的提交（commit）](#%E6%88%91%E9%9C%80%E8%A6%81%E6%8A%8A%E6%9A%AB%E5%AD%98%E7%9A%84%E5%85%A7%E5%AE%B9%E6%B7%BB%E5%8A%A0%E5%88%B0%E4%B8%8A%E4%B8%80%E6%AC%A1%E7%9A%84%E6%8F%90%E4%BA%A4commit)
    - [我想要暫存一個新文件的一部分，而不是這個文件的全部](#%E6%88%91%E6%83%B3%E8%A6%81%E6%9A%AB%E5%AD%98%E4%B8%80%E5%80%8B%E6%96%B0%E6%96%87%E4%BB%B6%E7%9A%84%E4%B8%80%E9%83%A8%E5%88%86%E8%80%8C%E4%B8%8D%E6%98%AF%E9%80%99%E5%80%8B%E6%96%87%E4%BB%B6%E7%9A%84%E5%85%A8%E9%83%A8)
    - [我想把在一個文件裡的變化（changes）加到兩個提交（commit）裡](#%E6%88%91%E6%83%B3%E6%8A%8A%E5%9C%A8%E4%B8%80%E5%80%8B%E6%96%87%E4%BB%B6%E8%A3%A1%E7%9A%84%E8%AE%8A%E5%8C%96changes%E5%8A%A0%E5%88%B0%E5%85%A9%E5%80%8B%E6%8F%90%E4%BA%A4commit%E8%A3%A1)
    - [我想把暫存的內容變成未暫存，把未暫存的內容暫存起來](#%E6%88%91%E6%83%B3%E6%8A%8A%E6%9A%AB%E5%AD%98%E7%9A%84%E5%85%A7%E5%AE%B9%E8%AE%8A%E6%88%90%E6%9C%AA%E6%9A%AB%E5%AD%98%E6%8A%8A%E6%9C%AA%E6%9A%AB%E5%AD%98%E7%9A%84%E5%85%A7%E5%AE%B9%E6%9A%AB%E5%AD%98%E8%B5%B7%E4%BE%86)
  - [未暫存（unstaged）的變化](#%E6%9C%AA%E6%9A%AB%E5%AD%98unstaged%E7%9A%84%E8%AE%8A%E5%8C%96)
    - [我想把未暫存的變化移動到新分支](#%E6%88%91%E6%83%B3%E6%8A%8A%E6%9C%AA%E6%9A%AB%E5%AD%98%E7%9A%84%E8%AE%8A%E5%8C%96%E7%A7%BB%E5%8B%95%E5%88%B0%E6%96%B0%E5%88%86%E6%94%AF)
    - [我想把未暫存的變化移動到另一個已存在的分支](#%E6%88%91%E6%83%B3%E6%8A%8A%E6%9C%AA%E6%9A%AB%E5%AD%98%E7%9A%84%E8%AE%8A%E5%8C%96%E7%A7%BB%E5%8B%95%E5%88%B0%E5%8F%A6%E4%B8%80%E5%80%8B%E5%B7%B2%E5%AD%98%E5%9C%A8%E7%9A%84%E5%88%86%E6%94%AF)
    - [我想丟棄本地未提交的變化（uncommitted changes）](#%E6%88%91%E6%83%B3%E4%B8%9F%E6%A3%84%E6%9C%AC%E5%9C%B0%E6%9C%AA%E6%8F%90%E4%BA%A4%E7%9A%84%E8%AE%8A%E5%8C%96uncommitted-changes)
    - [我想丟棄某些未暫存的變化](#%E6%88%91%E6%83%B3%E4%B8%9F%E6%A3%84%E6%9F%90%E4%BA%9B%E6%9C%AA%E6%9A%AB%E5%AD%98%E7%9A%84%E8%AE%8A%E5%8C%96)
  - [分支（branches）](#%E5%88%86%E6%94%AFbranches)
    - [我從錯誤的分支拉取了內容，或把內容拉取到了錯誤的分支](#%E6%88%91%E5%BE%9E%E9%8C%AF%E8%AA%A4%E7%9A%84%E5%88%86%E6%94%AF%E6%8B%89%E5%8F%96%E4%BA%86%E5%85%A7%E5%AE%B9%E6%88%96%E6%8A%8A%E5%85%A7%E5%AE%B9%E6%8B%89%E5%8F%96%E5%88%B0%E4%BA%86%E9%8C%AF%E8%AA%A4%E7%9A%84%E5%88%86%E6%94%AF)
    - [我想丟棄本地的提交（commit），以讓分支與遠端保持一致](#%E6%88%91%E6%83%B3%E4%B8%9F%E6%A3%84%E6%9C%AC%E5%9C%B0%E7%9A%84%E6%8F%90%E4%BA%A4commit%E4%BB%A5%E8%AE%93%E5%88%86%E6%94%AF%E8%88%87%E9%81%A0%E7%AB%AF%E4%BF%9D%E6%8C%81%E4%B8%80%E8%87%B4)
    - [我需要提交到一個新分支，但錯誤的提交到了 `main`](#%E6%88%91%E9%9C%80%E8%A6%81%E6%8F%90%E4%BA%A4%E5%88%B0%E4%B8%80%E5%80%8B%E6%96%B0%E5%88%86%E6%94%AF%E4%BD%86%E9%8C%AF%E8%AA%A4%E7%9A%84%E6%8F%90%E4%BA%A4%E5%88%B0%E4%BA%86-main)
    - [我想保留來自另外一個 ref-ish 的整個文件](#%E6%88%91%E6%83%B3%E4%BF%9D%E7%95%99%E4%BE%86%E8%87%AA%E5%8F%A6%E5%A4%96%E4%B8%80%E5%80%8B-ref-ish-%E7%9A%84%E6%95%B4%E5%80%8B%E6%96%87%E4%BB%B6)
    - [我把幾個提交（commit）提交到了同一個分支，而這些提交應該在不同的分支上](#%E6%88%91%E6%8A%8A%E5%B9%BE%E5%80%8B%E6%8F%90%E4%BA%A4commit%E6%8F%90%E4%BA%A4%E5%88%B0%E4%BA%86%E5%90%8C%E4%B8%80%E5%80%8B%E5%88%86%E6%94%AF%E8%80%8C%E9%80%99%E4%BA%9B%E6%8F%90%E4%BA%A4%E6%87%89%E8%A9%B2%E5%9C%A8%E4%B8%8D%E5%90%8C%E7%9A%84%E5%88%86%E6%94%AF%E4%B8%8A)
    - [我想刪除上遊（upstream）刪除了的本地分支](#%E6%88%91%E6%83%B3%E5%88%AA%E9%99%A4%E4%B8%8A%E9%81%8Aupstream%E5%88%AA%E9%99%A4%E4%BA%86%E7%9A%84%E6%9C%AC%E5%9C%B0%E5%88%86%E6%94%AF)
    - [我不小心刪除了分支](#%E6%88%91%E4%B8%8D%E5%B0%8F%E5%BF%83%E5%88%AA%E9%99%A4%E4%BA%86%E5%88%86%E6%94%AF)
    - [我想刪除一個分支](#%E6%88%91%E6%83%B3%E5%88%AA%E9%99%A4%E4%B8%80%E5%80%8B%E5%88%86%E6%94%AF)
    - [我想從別人正在工作的遠端分支簽出（checkout）一個分支](#%E6%88%91%E6%83%B3%E5%BE%9E%E5%88%A5%E4%BA%BA%E6%AD%A3%E5%9C%A8%E5%B7%A5%E4%BD%9C%E7%9A%84%E9%81%A0%E7%AB%AF%E5%88%86%E6%94%AF%E7%B0%BD%E5%87%BAcheckout%E4%B8%80%E5%80%8B%E5%88%86%E6%94%AF)
  - [變基（rebase）與合併（merge）](#%E8%AE%8A%E5%9F%BArebase%E8%88%87%E5%90%88%E4%BD%B5merge)
    - [撤銷變基或合併](#%E6%92%A4%E9%8A%B7%E8%AE%8A%E5%9F%BA%E6%88%96%E5%90%88%E4%BD%B5)
    - [我做了變基，但是我不想強制推送（force push）](#%E6%88%91%E5%81%9A%E4%BA%86%E8%AE%8A%E5%9F%BA%E4%BD%86%E6%98%AF%E6%88%91%E4%B8%8D%E6%83%B3%E5%BC%B7%E5%88%B6%E6%8E%A8%E9%80%81force-push)
    - [我需要組合（combine）幾個提交（commit）](#%E6%88%91%E9%9C%80%E8%A6%81%E7%B5%84%E5%90%88combine%E5%B9%BE%E5%80%8B%E6%8F%90%E4%BA%A4commit)
      - [安全合併的策略](#%E5%AE%89%E5%85%A8%E5%90%88%E4%BD%B5%E7%9A%84%E7%AD%96%E7%95%A5)
      - [我需要將一個分支合併成一個提交](#%E6%88%91%E9%9C%80%E8%A6%81%E5%B0%87%E4%B8%80%E5%80%8B%E5%88%86%E6%94%AF%E5%90%88%E4%BD%B5%E6%88%90%E4%B8%80%E5%80%8B%E6%8F%90%E4%BA%A4)
      - [我只想組合（combine）未推送的提交](#%E6%88%91%E5%8F%AA%E6%83%B3%E7%B5%84%E5%90%88combine%E6%9C%AA%E6%8E%A8%E9%80%81%E7%9A%84%E6%8F%90%E4%BA%A4)
    - [檢查分支上的所有提交是否都合併了](#%E6%AA%A2%E6%9F%A5%E5%88%86%E6%94%AF%E4%B8%8A%E7%9A%84%E6%89%80%E6%9C%89%E6%8F%90%E4%BA%A4%E6%98%AF%E5%90%A6%E9%83%BD%E5%90%88%E4%BD%B5%E4%BA%86)
    - [互動式變基（interactive rebase）可能出現的問題](#%E4%BA%92%E5%8B%95%E5%BC%8F%E8%AE%8A%E5%9F%BAinteractive-rebase%E5%8F%AF%E8%83%BD%E5%87%BA%E7%8F%BE%E7%9A%84%E5%95%8F%E9%A1%8C)
      - [編輯介面出現「noop」](#%E7%B7%A8%E8%BC%AF%E4%BB%8B%E9%9D%A2%E5%87%BA%E7%8F%BEnoop)
      - [有衝突的情況](#%E6%9C%89%E8%A1%9D%E7%AA%81%E7%9A%84%E6%83%85%E6%B3%81)
  - [儲藏（stash）](#%E5%84%B2%E8%97%8Fstash)
    - [儲藏所有變化](#%E5%84%B2%E8%97%8F%E6%89%80%E6%9C%89%E8%AE%8A%E5%8C%96)
    - [儲藏指定檔案](#%E5%84%B2%E8%97%8F%E6%8C%87%E5%AE%9A%E6%AA%94%E6%A1%88)
    - [儲藏時附加訊息](#%E5%84%B2%E8%97%8F%E6%99%82%E9%99%84%E5%8A%A0%E8%A8%8A%E6%81%AF)
    - [應用（apply）指定儲藏](#%E6%87%89%E7%94%A8apply%E6%8C%87%E5%AE%9A%E5%84%B2%E8%97%8F)
    - [儲藏時保留未暫存的內容](#%E5%84%B2%E8%97%8F%E6%99%82%E4%BF%9D%E7%95%99%E6%9C%AA%E6%9A%AB%E5%AD%98%E7%9A%84%E5%85%A7%E5%AE%B9)
  - [雜項](#%E9%9B%9C%E9%A0%85)
    - [複製所有子模組](#%E8%A4%87%E8%A3%BD%E6%89%80%E6%9C%89%E5%AD%90%E6%A8%A1%E7%B5%84)
    - [刪除標籤（tag）](#%E5%88%AA%E9%99%A4%E6%A8%99%E7%B1%A4tag)
    - [恢復已刪除標籤（tag）](#%E6%81%A2%E5%BE%A9%E5%B7%B2%E5%88%AA%E9%99%A4%E6%A8%99%E7%B1%A4tag)
    - [已刪除補丁（patch）](#%E5%B7%B2%E5%88%AA%E9%99%A4%E8%A3%9C%E4%B8%81patch)
  - [追蹤檔案（tracking files）](#%E8%BF%BD%E8%B9%A4%E6%AA%94%E6%A1%88tracking-files)
    - [我只想改變一個檔案名字的大小寫，而不修改內容](#%E6%88%91%E5%8F%AA%E6%83%B3%E6%94%B9%E8%AE%8A%E4%B8%80%E5%80%8B%E6%AA%94%E6%A1%88%E5%90%8D%E5%AD%97%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%AF%AB%E8%80%8C%E4%B8%8D%E4%BF%AE%E6%94%B9%E5%85%A7%E5%AE%B9)
    - [我想從 Git 刪除一個檔案，但保留該檔案](#%E6%88%91%E6%83%B3%E5%BE%9E-git-%E5%88%AA%E9%99%A4%E4%B8%80%E5%80%8B%E6%AA%94%E6%A1%88%E4%BD%86%E4%BF%9D%E7%95%99%E8%A9%B2%E6%AA%94%E6%A1%88)
  - [組態（configuration）](#%E7%B5%84%E6%85%8Bconfiguration)
    - [我想為 Git 命令設定別名（alias）](#%E6%88%91%E6%83%B3%E7%82%BA-git-%E5%91%BD%E4%BB%A4%E8%A8%AD%E5%AE%9A%E5%88%A5%E5%90%8Dalias)
    - [我想快取一個倉庫（repository）的使用者名稱和密碼](#%E6%88%91%E6%83%B3%E5%BF%AB%E5%8F%96%E4%B8%80%E5%80%8B%E5%80%89%E5%BA%ABrepository%E7%9A%84%E4%BD%BF%E7%94%A8%E8%80%85%E5%90%8D%E7%A8%B1%E5%92%8C%E5%AF%86%E7%A2%BC)
  - [我不知道我做錯了什麼](#%E6%88%91%E4%B8%8D%E7%9F%A5%E9%81%93%E6%88%91%E5%81%9A%E9%8C%AF%E4%BA%86%E4%BB%80%E9%BA%BC)
- [其他資源](#%E5%85%B6%E4%BB%96%E8%B3%87%E6%BA%90)
  - [書籍](#%E6%9B%B8%E7%B1%8D)
  - [教學](#%E6%95%99%E5%AD%B8)
  - [腳本和工具](#%E8%85%B3%E6%9C%AC%E5%92%8C%E5%B7%A5%E5%85%B7)
  - [GUI 客戶端](#gui-%E5%AE%A2%E6%88%B6%E7%AB%AF)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 編輯提交（editting commits）

### 我剛才提交了什麼？

如果你盲目地用 `git commit -a` 提交了變化（changes），而不確定到底提交了哪些內容，可以用以下命令顯示目前 `HEAD` 上的最近一次的提交（commit）：

```sh
(main)$ git show
```

或者

```sh
$ git log -n1 -p
```

### 我的提交訊息（commit message）寫錯了

如果你的提交訊息（commit message）寫錯了，且這次提交（commit）還沒有推送（push），可以透過下面的方法來修改提交訊息（commit message）：

```sh
$ git commit --amend --only
```
這會開啟你的預設編輯器來編輯訊息。你也可以選擇只靠一個命令來做這些事：

```sh
$ git commit --amend --only -m 'xxxxxxx'
```

如果你已經推送（push）了這次提交（commit），可以修改這次提交（commit）然後強制推送（force push），但是不推薦這麼做。

### 我提交（commit）裡的使用者名稱和信箱不對

如果這只是單個提交（commit），修改它：

```sh
$ git commit --amend --author "New Authorname <authoremail@mydomain.com>"
```

如果你需要修改所有歷史，參考 `git filter-branch` 的手冊頁。

### 我想從一個提交（commit）裡移除一個文件

要從一個提交（commit）裡移除一個文件：

```sh
$ git checkout HEAD^ myfile
$ git add -A
$ git commit --amend
```

當你有一個開放的補丁（open patch），而你往上面提交了一個不必要的文件，需要強制推送（force push）去更新這個遠程補丁時，這非常有用。

### 我想刪除我最後一次提交（commit）

如果你需要刪除推送了的提交（pushed commits），你可以使用以下方法。但是，這將不可逆的改變你的歷史，也會搞亂那些已經從該倉庫拉取（pulled）了的人的歷史。簡而言之，如果你不是很確定，千萬不要這麼做。

```sh
$ git reset HEAD^ --hard
$ git push -f [remote] [branch]
```

如果你還沒有推送到遠端，重設（reset）到你最後一次提交前的狀態就可以了（同時保存暫存的變化）：

```
(my-branch)$ git reset --soft HEAD^
```

這只能在推送之前使用。如果你已經推送了，唯一安全的做法是 `git revert SHAofBadCommit`，那會創建一個新的提交（commit）來撤消前一個提交的所有變化（changes）；或者，如果這個分支是 rebase-safe 的（例如：其他開發者不會從這個分支拉取），只需要使用 `git push -f`；參見[上一節](#deleteremove-last-pushed-commit)。

### 刪除任意提交（commit）

同樣，除非必須，否則不要這麼做。

```sh
$ git rebase --onto SHA1_OF_BAD_COMMIT^ SHA1_OF_BAD_COMMIT
$ git push -f [remote] [branch]
```

或者使用[互動式變基（interactive rebase）](#interactive-rebase) 刪除那些你想要刪除的提交（commit）所對應的行。

### 我嘗試推送一個修正後的提交（amended commit）到遠端，但是報錯

```sh
To https://github.com/yourusername/repo.git
! [rejected]        mybranch -> mybranch (non-fast-forward)
error: failed to push some refs to 'https://github.com/tanay1337/webmaker.org.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

注意，變基（rebasing）和修正（amending）會用一個新的提交（commit）取代舊的，所以如果舊的提交已經推送到遠端上了，那你必須強制推送（force push）。注意：總是確保你指明一個分支！

```sh
(my-branch)$ git push origin mybranch -f
```

一般來說，要避免強制推送。最好是創建和推送一個新的提交（commit），而不是強推一個修正後的提交。後者會使在該分支或該分支的子分支上工作的開發者，在源歷史中產生衝突。

### 我意外地硬重設（hard reset）了，我想找回我的內容

如果你意外地做了 `git reset --hard`，你通常能找回你的提交（commit），因為 Git 對每件事都會有日誌，且都會保存幾天。

```sh
(main)$ git reflog
```

你將會看到一個你過去提交（commit）的列表，和一個重設的提交。選擇你想要回到的提交（commit）的 SHA，再重設一次：

```sh
(main)$ git reset --hard SHA1234
```

## 暫存（staging）

### 我需要把暫存的內容添加到上一次的提交（commit）

```sh
(my-branch*)$ git commit --amend
```

### 我想要暫存一個新文件的一部分，而不是這個文件的全部

一般來說，如果你想暫存一個文件的一部分，你可以使用以下命令來開啟互動式介面，並使用 `s` 選項來選擇想要的行。

```sh
$ git add --patch filename.x # 或 `-p`。
```

然而，當這個檔案是新的，則需改用以下命令：

```sh
$ git add -N filename.x
```

然後，你需要用 `e` 選項來選擇需要添加的行，執行 `git diff --cached` 將會顯示哪些行暫存了、哪些行只是保存在本地了。

### 我想把在一個文件裡的變化（changes）加到兩個提交（commit）裡

`git add` 會把整個文件加入到一個提交。`git add -p` 則允許你互動式地選擇想要提交的部分。

### 我想把暫存的內容變成未暫存，把未暫存的內容暫存起來

多數情況下，你應該將所有的內容變為未暫存，然後再加入（add）你想要的內容提交（commit）。
但如果你就是想這麼做，你可以創建一個臨時的提交來儲存你已暫存的內容，然後加入未暫存的內容並儲藏（stash）。最後，重設（reset）最後一個提交將原本暫存的內容變為未暫存，最後彈出儲藏（pop stash）。

```sh
$ git commit -m "WIP"     # 將之前已暫存的內容提交。
$ git add .               # 加入未暫存的內容。
$ git stash               # 儲藏剛剛加入的內容。
$ git reset HEAD^         # 重設到父提交。
$ git stash pop --index 0 # 彈出儲藏。
```

註一：這裡使用 `pop` 僅僅是因為想盡可能保持冪等。
註二：假如不加上 `--index`，會把暫存的文件標記為未暫存。[這裡](https://stackoverflow.com/questions/31595873/git-stash-with-staged-files-does-stash-convert-staged-files-to-unstaged?answertab=active#tab-top)解釋得比較清楚。（其大意是說，這是一個較為底層的問題，儲藏時會創建兩個提交，一個記錄 index 狀態、暫存的內容等，另一個紀錄 worktree 和其他的一些東西，如果你不在 apply 時加 index，Git 會把兩個一起銷毀，所以暫存區（stage）裡就空了）。

## 未暫存（unstaged）的變化

### 我想把未暫存的變化移動到新分支

```sh
$ git checkout -b my-branch
```

### 我想把未暫存的變化移動到另一個已存在的分支

```sh
$ git stash
$ git checkout my-branch
$ git stash pop
```

### 我想丟棄本地未提交的變化（uncommitted changes）

如果你只是想重設源（origin）和你本地（local）之間的一些提交（commit），你可以：

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

如果要重設某個特定檔案，可以用檔案名做為引數：

```sh
$ git reset filename
```

### 我想丟棄某些未暫存的變化

如果你想丟棄工作拷貝中的一部分內容，而不是全部。

簽出（checkout）不需要的內容，保留需要的。

```sh
$ git checkout -p
# Answer y to all of the snippets you want to drop
```

另外一個方法是使用儲藏（stash），儲藏所有要保留的變化，重設工作拷貝，然後把儲藏彈出。

```sh
$ git stash -p
# Select all of the snippets you want to save
$ git reset --hard
$ git stash pop
```

或者，儲藏你不需要的部分，然後丟棄儲藏（drop stash）。

```sh
$ git stash -p
# Select all of the snippets you don't want to save
$ git stash drop
```

## 分支（branches）

### 我從錯誤的分支拉取了內容，或把內容拉取到了錯誤的分支

這是另外一種可以使用 `git reflog` 情況，找到在這次錯誤拉取（pull）之前 HEAD 的指向。

```sh
(main)$ git reflog
ab7555f HEAD@{0}: pull origin wrong-branch: Fast-forward
c5bc55a HEAD@{1}: checkout: checkout message goes here
```

然後，重設分支到所需的提交：

```sh
$ git reset --hard c5bc55a
```

完成。

### 我想丟棄本地的提交（commit），以讓分支與遠端保持一致

首先，確認你沒有推送（push）你的內容到遠端。

`git status` 會顯示本地領先（ahead）源（origin）多少個提交：

```sh
(my-branch)$ git status
# On branch my-branch
# Your branch is ahead of 'origin/my-branch' by 2 commits.
#   (use "git push" to publish your local commits)
#
```

一種方法是：

```sh
(my-branch)$ git reset --hard origin/my-branch
```

### 我需要提交到一個新分支，但錯誤的提交到了 `main`

在 `main` 下創建一個新分支：

```sh
(main)$ git branch my-branch
```

把 `main` 重設到前一個提交：

```sh
(main)$ git reset --hard HEAD^
```

`HEAD^` 是 `HEAD^1` 的縮寫，你可以指定數字來進一步重設。或者，如果你不想使用 `HEAD^`，你可以指定一個提交（commit）的雜湊值（hash）（可以使用 `git log` 查看），如 `git reset --hard a13b85e`。

簽出（checkout）到剛才新建的分支繼續工作：

```sh
(main)$ git checkout my-branch
```

### 我想保留來自另外一個 ref-ish 的整個文件

假設你正在做一個原型方案（原文為 working spike），有成百上千的內容。當你提交到一個分支，儲存工作內容：

```sh
(solution)$ git add -A && git commit -m "Adding all changes from this spike into one big commit."
```

當你想要把它放到一個分支裡（假設是 `develop`），你希望保持整個檔案的完整，並將大的提交分割成數個小的。

假設這裡有：
  * 分支 `solution`，擁有原型方案，領先 `develop` 分支。
  * 分支 `develop`，應用原型方案的一些內容。

可以將內容放到那個分支中：

```sh
(develop)$ git checkout solution -- file1.txt
(develop)$ git status
# On branch develop
# Your branch is up-to-date with 'origin/develop'.
# Changes to be committed:
#  (use "git reset HEAD <file>..." to unstage)
#
#        modified:   file1.txt
```

然後，普通地提交。

註：Spike solutions are made to analyze or solve the problem. These solutions are used for estimation and discarded once everyone gets clear visualization of the problem. ~ [Wikipedia](https://en.wikipedia.org/wiki/Extreme_programming_practices).

### 我把幾個提交（commit）提交到了同一個分支，而這些提交應該在不同的分支上

假設在 `main` 分支，執行 `git log` 的結果如下：

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

要把 `e3851e8` 和 `5ea5173` 分別移到新的分支，首先，要把 `main` 分支重設到正確的提交（`a13b85e`）：

```sh
(main)$ git reset --hard a13b85e
HEAD is now at a13b85e
```

新增一個分支：

```sh
(main)$ git checkout -b 21
```

接著，然後挑揀（cherry-pick）提交到正確的分支上。這意味著我們將直接在 HEAD 上面應用（apply）這個提交。

```sh
(21)$ git cherry-pick e3851e8
```

這可能會造成衝突（conflict），參見〈[互動式變基](#interactive-rebase)・[衝突](#merge-conflict)〉來解決衝突。

同樣地，為 `5ea5173` 也創建一個分支，並把提交挑揀到其上：

```sh
(main)$ git checkout -b 14
(14)$ git cherry-pick 5ea5173
```

### 我想刪除上遊（upstream）刪除了的本地分支

比方說，在 GitHub 中，合併（merge）了拉取請求（pull request）後，就可以刪除掉分支。如果不準備繼續在這個分支上工作，刪除這個分支會使工作拷貝（working copy）更乾淨。

```sh
$ git fetch -p
```

### 我不小心刪除了分支

如果你定期推送（push）到遠端（remote），多數情況下應該是安全的，但有時可能刪除了還沒推送的分支。

為了模擬這種情況，首先，創建一個分支和一個檔案：

```sh
(main)$ git checkout -b my-branch
(my-branch)$ touch foo.txt
(my-branch)$ ls
README.md foo.txt
```

加入變化並提交：

```sh
(my-branch)$ git add .
(my-branch)$ git commit -m 'foo.txt added'
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

現在，切回 `main` 分支，並「不小心」刪除了 `my-branch`：

```sh
(my-branch)$ git checkout main
Switched to branch 'main'
Your branch is up-to-date with 'origin/main'.
(main)$ git branch -D my-branch
Deleted branch my-branch (was 4e3cd85).
(main)$ echo oh noes, deleted my branch!
oh noes, deleted my branch!
```

你應該想起了 `reflog`，它記錄了所有動作。

```
(main)$ git reflog
69204cd HEAD@{0}: checkout: moving from my-branch to main
4e3cd85 HEAD@{1}: commit: foo.txt added
69204cd HEAD@{2}: checkout: moving from main to my-branch
```

如你所見，其中包含了刪除分支的提交的雜湊值（hash）。可以藉此把提交找回來：

```sh
(main)$ git checkout -b my-branch-help
Switched to a new branch 'my-branch-help'
(my-branch-help)$ git reset --hard 4e3cd85
HEAD is now at 4e3cd85 foo.txt added
(my-branch-help)$ ls
README.md foo.txt
```

看！我們把遺失的檔案找回來了。Git 的 `reflog` 在變基（rebase）出錯時也同樣有用。

### 我想刪除一個分支

刪除一個遠端分支：

```sh
(main)$ git push origin --delete my-branch
```

或：

```sh
(main)$ git push origin :my-branch
```

刪除一個本地分支：

```sh
(main)$ git branch -D my-branch
```

### 我想從別人正在工作的遠端分支簽出（checkout）一個分支

首先，從遠端獲取（fetch）所有分支：

```sh
(main)$ git fetch --all
```

假設你想要從遠端的 `daves` 分支簽出到本地的 `daves`：

```sh
(main)$ git checkout --track origin/daves
Branch daves set up to track remote branch daves from origin.
Switched to a new branch 'daves'
```

（`--track` 是 `git checkout -b [branch] [remotename]/[branch]` 的縮寫。）

這樣就有 `daves` 的本地拷貝了。

## 變基（rebase）與合併（merge）

### 撤銷變基或合併

你可能對一個錯誤的分支做了變基或合併，或者無法完成變基或合併。Git 在進行危險操作時，會將原本的 `HEAD` 存成 `ORIG_HEAD`，因此可以很容易的恢復到之前的狀態。

```sh
(my-branch)$ git reset --hard ORIG_HEAD
```

### 我做了變基，但是我不想強制推送（force push）

不幸的是，如果你想把變基的結果反映在遠端分支上，你必須強制推送（force push）。因為你改變了歷史，遠端不會接受使用快進（fast-forward），而必須強制推送。這就是許多人使用合併工作流程、而不是變基工作流程的主要原因之一，開發者的強制推送會使大團隊陷入麻煩。

一種安全的方式是，不要推送到遠端：

```sh
(main)$ git checkout my-branch
(my-branch)$ git rebase -i main
(my-branch)$ git checkout main
(main)$ git merge --ff-only my-branch
```

參見[此 StackOverflow 討論串](http://stackoverflow.com/questions/11058312/how-can-i-use-git-rebase-without-requiring-a-forced-push)。

### 我需要組合（combine）幾個提交（commit）

假設你的工作分支將對 `main` 分支做拉取請求（pull request）。

最簡單的情況下，不會關心提交的時間戳（timestamp），只想將所有的提交組合成一個單獨的提交，你可以重設（reset）和重新提交（recommit）。確保 `main` 是最新的，且你的變化都已經提交，然後：

```sh
(my-branch)$ git reset --soft main
(my-branch)$ git commit -am "New awesome feature"
```

如果你想保留更多控制、保留時間戳，你需要互動式變基（interactive rebase）：

```sh
(my-branch)$ git rebase -i main
```

如果沒有相對於其他分支，將不得不相對於 `HEAD` 變基。例如，要組合最近的兩次提交，需相對於 `HEAD~2` 變基，組合最近三次提交，則相對於 `HEAD~3`，以此類推。

```sh
(main)$ git rebase -i HEAD~2
```

在執行了互動式變基的命令（interactive rebase command）後，你會在編輯器裡看到類似以下的內容：

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

（以 `#` 開頭的行是註解，不影響變基。）

你可以以註解中提到的命令替換 `pick`，也可以刪除一行來刪除對應的提交。例如，如果要保留最舊（first）的提交，並將其他組合成第二個提交，應該將第二個提交之後所有提交的命令改為 `f`：

```vim
pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
f b729ad5 fixup
f e3851e8 another fix
```

如果要組合並重新命名這個提交，應該在第二個提交加上 `r`，或使用 `s` 取代 `f`：

```vim
pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
s b729ad5 fixup
s e3851e8 another fix
```

你可以在接著彈出的文字提示中重新命名那個提交：

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

應該會看到如下的成功訊息：

```sh
(main)$ Successfully rebased and updated refs/heads/main.
```

#### 安全合併的策略

`--no-commit` 選項會合併但不會自動提交，給使用者在提交前檢查和修改的機會。`--no-ff` 會留下功能分支（feature branch）存在過的證據，保持歷史一致。

```sh
(main)$ git merge --no-ff --no-commit my-branch
```

#### 我需要將一個分支合併成一個提交

```sh
(main)$ git merge --squash my-branch
```

#### 我只想組合（combine）未推送的提交

假設在推送到上遊前，你有幾個正在進行的工作提交，這時候不希望把已推送的提交也組合進來，因為其他人可能已經有提交引用它們了。

```sh
(main)$ git rebase -i @{u}
```

這會進行一次互動式變基（interactive rebase），只會列出還沒推送的提交。對這些提交重新排序或做 squash、fixup 都是安全的。

### 檢查分支上的所有提交是否都合併了

要檢查一個分支上的所有提交是否都已經合併進了其它分支，應該在這些分支的 `HEAD`（或任何提交）之間檢查差異：

```sh
(main)$ git log --graph --left-right --cherry-pick --oneline HEAD...feature/120-on-scroll
```

這會顯示一個分支有而另一個分支沒有的提交，和分支之間不共享的提交的列表。

另一個方法是：

```sh
(main)$ git log main ^feature/120-on-scroll --no-merges
```

### 互動式變基（interactive rebase）可能出現的問題

#### 編輯介面出現「noop」

如果你看到：

```
noop
```

表示變基的分支和目前分支在同一個提交，或領先（ahead）目前分支。你可以嘗試：
  * 確保 `main` 分支沒有問題
  * 對 `HEAD~2` 或更早的提交變基

#### 有衝突的情況

如果不能成功的完成變基，你可能必須要解決衝突（resolve conflict）。

首先用 `git status` 檢查哪些檔案有衝突：

```sh
(my-branch)$ git status
On branch my-branch
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   README.md
```

在這個例子中，`README.md` 有衝突。打開衝突的檔案會看到類似下面的內容：

```vim
   <<<<<<< HEAD
   some code
   =========
   some code
   >>>>>>> new-commit
```

你必須解決新提交的內容和 `HEAD` 中的內容的衝突。

有時候衝突非常複雜，你可以使用可視化差異編輯器（visual diff editor）：

```sh
(main*)$ git mergetool -t opendiff
```

解決所有衝突後，加入變化了的檔案，然後用 `git rebase --continue` 繼續變基：

```sh
(my-branch)$ git add README.md
(my-branch)$ git rebase --continue
```

如果在解決所有衝突過後，得到了與提交前一樣的結果，可以使用 `git rebase --skip`。

如果想放棄變基，回到之前的狀態，可以在任何時候用：

```sh
(my-branch)$ git rebase --abort
```

## 儲藏（stash）

### 儲藏所有變化

儲藏工作目錄下所有變化：

```sh
$ git stash
```

可以使用 `-u` 選項排除一些檔案：

```sh
$ git stash -u
```

### 儲藏指定檔案

儲藏一個檔案：

```sh
$ git stash push working-directory-path/filename.ext
```

儲藏多個檔案：

```sh
$ git stash push working-directory-path/filename1.ext working-directory-path/filename2.ext
```

### 儲藏時附加訊息

```sh
$ git stash save <message>
```

或

```sh
$ git stash push -m <message>
```

如此可以在使用 `stash list` 時看到訊息。

### 應用（apply）指定儲藏

可以先列出擁有的儲藏：

```sh
$ git stash list
```

然後，將以下命令的 `n` 替換成儲藏在堆疊中的位置（最上方為 `0`），應用指定儲藏：

```sh
$ git stash apply "stash@{n}"
```

除此之外，也可以使用時間標記（假如你能記住的話），如：

```sh
$ git stash apply "stash@{2.hours.ago}"
```

### 儲藏時保留未暫存的內容

你需要先手動創建一個儲藏提交，然後使用 `git stash store`。

```sh
$ git stash create
$ git stash store -m "commit-message" CREATED_SHA1
```

## 雜項

### 複製所有子模組

```sh
$ git clone --recursive git://github.com/foo/bar.git
```

如果已經複製了：

```sh
$ git submodule update --init --recursive
```

### 刪除標籤（tag）

```sh
$ git tag -d <tag_name>
$ git push <remote> :refs/tags/<tag_name>
```

### 恢復已刪除標籤（tag）

如果想恢復一個已刪除標籤，首先，找到無法觸及的標籤（unreachable tag）：

```sh
$ git fsck --unreachable | grep tag
```

記下這個標籤的雜湊值，然後用 Git 的 [`update-ref`](http://git-scm.com/docs/git-update-ref)：

```sh
$ git update-ref refs/tags/<tag_name> <hash>
```

### 已刪除補丁（patch）

如果有人在 GitHub 上向你提出了拉取請求（pull request），但他接著刪除了他的分叉（fork），你無法複製他的提交或使用 `git am`。在這種情況下，最好手動的查看他們的提交，把它們拷貝到一個本地新分支，然後提交。

最後，再修改作者，參見[〈變更作者〉](#commit-wrong-author)。然後，應用變化，再發起一個新的拉取請求。

## 追蹤檔案（tracking files）

### 我只想改變一個檔案名字的大小寫，而不修改內容

```sh
(main)$ git mv --force myfile MyFile
```

### 我想從 Git 刪除一個檔案，但保留該檔案

```sh
(main)$ git rm --cached log.txt
```

## 組態（configuration）

### 我想為 Git 命令設定別名（alias）

在 OS X 和 Linux 下，Git 的組態檔案儲存在 `~/.gitconfig`。可以在 `[alias]` 部分設定一些快捷別名（以及容易拼錯的），如：

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

### 我想快取一個倉庫（repository）的使用者名稱和密碼

假設有一個倉庫需要授權，這時你可以快取使用者名稱和密碼，而不用每次推送和拉取時都輸入一次：

```sh
$ git config --global credential.helper cache
# Set Git to use the credential memory cache.
```

```sh
$ git config --global credential.helper 'cache --timeout=3600'
# Set the cache to timeout after 1 hour (setting is in seconds).
```

## 我不知道我做錯了什麼

如果你把事情搞砸了：你錯誤地重設、合併、或強制推送後，找不到自己的提交了；抑或你做得很好，但你想回到以前的某個狀態。

這時 `git reflog` 就派上用場了。`reflog` 記錄對分支頂端（the tip of a branch）的任何改變，即使沒有任何分支或標籤參考那個頂端。基本上，只要 `HEAD` 改變，`reflog` 就會記錄下來。然而，這只能用於本地分支，且它只追蹤動作（例如，不會追蹤一個沒被記錄的檔案的任何改變）。

```sh
(main)$ git reflog
0a2e358 HEAD@{0}: reset: moving to HEAD~2
0254ea7 HEAD@{1}: checkout: moving from 2.2 to main
c10f740 HEAD@{2}: checkout: moving from main to 2.2
```

上面的 `reflog` 顯示了曾經從 `main` 分支簽出到 `2.2` 分支，然後再簽出回去，還有硬重設到一個較舊的提交。最新的動作出現在最上面，並以 `HEAD@{0}` 標示。

如果你不小心回移（move back）了提交，`reflog` 會包含回移前 `main` 參考的提交（在這個例子中是 `0254ea7`）。只要硬重設就能恢復到之前的狀態，這提供了歷史不小心被變更時的安全網。

```sh
$ git reset --hard 0254ea7
```

摘自[這裡](https://www.atlassian.com/git/tutorials/rewriting-history/git-reflog)。

# 其他資源

## 書籍

* [Pro Git](https://git-scm.com/book/en/v2)——Scott Chacon 的傑出書籍
* [Git Internals](https://github.com/pluralsight/git-internals-pdf)——Scott Chacon 的另一本傑出書籍

## 教學

* [Learn Git branching](https://learngitbranching.js.org/)——一個基於網頁的互動式分支、合併、變基教學
* [Getting solid at Git rebase vs. merge](https://medium.com/@porteneuve/getting-solid-at-git-rebase-vs-merge-4fa1a48c53aa)
* [git-workflow](https://github.com/asmeurer/git-workflow)——[Aaron Meurer](https://github.com/asmeurer) 的怎麼使用 Git 開源貢獻
* [GitHub as a workflow](http://hugogiraudel.com/2015/08/13/github-as-a-workflow/)——GitHub 作為工作流程的趣事，特別是空拉取請求

## 腳本和工具

* [firstaidgit.io](http://firstaidgit.io/)——一個可搜尋的 Git 常見問題集
* [git-extra-commands](https://github.com/unixorn/git-extra-commands)——一堆有用的額外 Git 腳本
* [git-extras](https://github.com/tj/git-extras)——Git 工具集，倉庫概要、repl、變更記錄、提交百分比和更多
* [git-fire](https://github.com/qw3rtman/git-fire)——git-fire 是一個 Git 插件，用於在緊急情況下幫助加入目前所有檔案、提交、推送到一個新分支（防止合併衝突）。
* [git-tips](https://github.com/git-tips/tips)——Git 小撇步
* [git-town](https://github.com/Originate/git-town)——通用、高級 Git 工作流程支援！ http://www.git-town.com

## GUI 客戶端

* [GitKraken](https://www.gitkraken.com/)——豪華的 Git 客戶端，適用於 Windows、Mac、Linux
* [git-cola](https://git-cola.github.io/)——又一個 Git 客戶端，適用於 Windows、OS X
* [GitUp](https://github.com/git-up/GitUp)——一個新的 Git 客戶端，在解決 Git 的複雜問題上有自己的特點
* [gitx-dev](https://rowanj.github.io/gitx/)——又一個圖形化的 Git 客戶端，適用於 OS X
* [Source Tree](https://www.sourcetreeapp.com/)——簡單而強大的免費 Git GUI 客戶端，適用於 Windows、OS X
* [Tower](http://www.git-tower.com/)——圖形化 Git 客戶端，適用於 OS X（付費）

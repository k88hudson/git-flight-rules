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

為了清楚的表述，這篇文件裡的所有例子使用了自訂的 Bash 提示字元，以便指示目前分支和是否有暫存的更動。分支名用小括號括起來，分支名後面跟的 `*` 表示暫存的更動。

[![Join the chat at https://gitter.im/k88hudson/git-flight-rules](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/k88hudson/git-flight-rules?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

  - [版本庫](#%E7%89%88%E6%9C%AC%E5%BA%AB)
    - [我想建立本機版本庫](#%E6%88%91%E6%83%B3%E5%BB%BA%E7%AB%8B%E6%9C%AC%E6%A9%9F%E7%89%88%E6%9C%AC%E5%BA%AB)
    - [我想複製遠端版本庫](#%E6%88%91%E6%83%B3%E8%A4%87%E8%A3%BD%E9%81%A0%E7%AB%AF%E7%89%88%E6%9C%AC%E5%BA%AB)
    - [我設定了錯的遠端版本庫](#%E6%88%91%E8%A8%AD%E5%AE%9A%E4%BA%86%E9%8C%AF%E7%9A%84%E9%81%A0%E7%AB%AF%E7%89%88%E6%9C%AC%E5%BA%AB)
    - [我想將程式碼加到其他人的版本庫中](#%E6%88%91%E6%83%B3%E5%B0%87%E7%A8%8B%E5%BC%8F%E7%A2%BC%E5%8A%A0%E5%88%B0%E5%85%B6%E4%BB%96%E4%BA%BA%E7%9A%84%E7%89%88%E6%9C%AC%E5%BA%AB%E4%B8%AD)
      - [透過拉取請求建議程式碼](#%E9%80%8F%E9%81%8E%E6%8B%89%E5%8F%96%E8%AB%8B%E6%B1%82%E5%BB%BA%E8%AD%B0%E7%A8%8B%E5%BC%8F%E7%A2%BC)
      - [透過修補建議程式碼](#%E9%80%8F%E9%81%8E%E4%BF%AE%E8%A3%9C%E5%BB%BA%E8%AD%B0%E7%A8%8B%E5%BC%8F%E7%A2%BC)
      - [我需要將分叉更新到原版的最新進度](#%E6%88%91%E9%9C%80%E8%A6%81%E5%B0%87%E5%88%86%E5%8F%89%E6%9B%B4%E6%96%B0%E5%88%B0%E5%8E%9F%E7%89%88%E7%9A%84%E6%9C%80%E6%96%B0%E9%80%B2%E5%BA%A6)
  - [編輯提交](#%E7%B7%A8%E8%BC%AF%E6%8F%90%E4%BA%A4)
    - [我剛才提交了什麼？](#%E6%88%91%E5%89%9B%E6%89%8D%E6%8F%90%E4%BA%A4%E4%BA%86%E4%BB%80%E9%BA%BC)
    - [我的提交訊息寫錯了](#%E6%88%91%E7%9A%84%E6%8F%90%E4%BA%A4%E8%A8%8A%E6%81%AF%E5%AF%AB%E9%8C%AF%E4%BA%86)
    - [我提交裡的使用者名稱和信箱不對](#%E6%88%91%E6%8F%90%E4%BA%A4%E8%A3%A1%E7%9A%84%E4%BD%BF%E7%94%A8%E8%80%85%E5%90%8D%E7%A8%B1%E5%92%8C%E4%BF%A1%E7%AE%B1%E4%B8%8D%E5%B0%8D)
    - [我想從一個提交裡移除一個檔案](#%E6%88%91%E6%83%B3%E5%BE%9E%E4%B8%80%E5%80%8B%E6%8F%90%E4%BA%A4%E8%A3%A1%E7%A7%BB%E9%99%A4%E4%B8%80%E5%80%8B%E6%AA%94%E6%A1%88)
    - [我想將更動從一個提交移到另一個](#%E6%88%91%E6%83%B3%E5%B0%87%E6%9B%B4%E5%8B%95%E5%BE%9E%E4%B8%80%E5%80%8B%E6%8F%90%E4%BA%A4%E7%A7%BB%E5%88%B0%E5%8F%A6%E4%B8%80%E5%80%8B)
    - [我想刪除我最後一次提交](#%E6%88%91%E6%83%B3%E5%88%AA%E9%99%A4%E6%88%91%E6%9C%80%E5%BE%8C%E4%B8%80%E6%AC%A1%E6%8F%90%E4%BA%A4)
    - [刪除任意提交](#%E5%88%AA%E9%99%A4%E4%BB%BB%E6%84%8F%E6%8F%90%E4%BA%A4)
    - [我嘗試推送一個修正後的提交到遠端，但是報錯](#%E6%88%91%E5%98%97%E8%A9%A6%E6%8E%A8%E9%80%81%E4%B8%80%E5%80%8B%E4%BF%AE%E6%AD%A3%E5%BE%8C%E7%9A%84%E6%8F%90%E4%BA%A4%E5%88%B0%E9%81%A0%E7%AB%AF%E4%BD%86%E6%98%AF%E5%A0%B1%E9%8C%AF)
    - [我意外地硬性重設了，我想找回我的內容](#%E6%88%91%E6%84%8F%E5%A4%96%E5%9C%B0%E7%A1%AC%E6%80%A7%E9%87%8D%E8%A8%AD%E4%BA%86%E6%88%91%E6%83%B3%E6%89%BE%E5%9B%9E%E6%88%91%E7%9A%84%E5%85%A7%E5%AE%B9)
    - [我意外地提交並推送了合併](#%E6%88%91%E6%84%8F%E5%A4%96%E5%9C%B0%E6%8F%90%E4%BA%A4%E4%B8%A6%E6%8E%A8%E9%80%81%E4%BA%86%E5%90%88%E4%BD%B5)
    - [我意外地提交並推送了敏感資料](#%E6%88%91%E6%84%8F%E5%A4%96%E5%9C%B0%E6%8F%90%E4%BA%A4%E4%B8%A6%E6%8E%A8%E9%80%81%E4%BA%86%E6%95%8F%E6%84%9F%E8%B3%87%E6%96%99)
    - [我想要從現有的版本庫歷史記錄中移除大檔案](#%E6%88%91%E6%83%B3%E8%A6%81%E5%BE%9E%E7%8F%BE%E6%9C%89%E7%9A%84%E7%89%88%E6%9C%AC%E5%BA%AB%E6%AD%B7%E5%8F%B2%E8%A8%98%E9%8C%84%E4%B8%AD%E7%A7%BB%E9%99%A4%E5%A4%A7%E6%AA%94%E6%A1%88)
      - [推薦的工具：第三方的 BFG](#%E6%8E%A8%E8%96%A6%E7%9A%84%E5%B7%A5%E5%85%B7%E7%AC%AC%E4%B8%89%E6%96%B9%E7%9A%84-bfg)
      - [內建的工具：`git filter-branch`](#%E5%85%A7%E5%BB%BA%E7%9A%84%E5%B7%A5%E5%85%B7git-filter-branch)
      - [最後一步：推送你變更過的歷史](#%E6%9C%80%E5%BE%8C%E4%B8%80%E6%AD%A5%E6%8E%A8%E9%80%81%E4%BD%A0%E8%AE%8A%E6%9B%B4%E9%81%8E%E7%9A%84%E6%AD%B7%E5%8F%B2)
    - [我需要變更非最新者的提交的內容](#%E6%88%91%E9%9C%80%E8%A6%81%E8%AE%8A%E6%9B%B4%E9%9D%9E%E6%9C%80%E6%96%B0%E8%80%85%E7%9A%84%E6%8F%90%E4%BA%A4%E7%9A%84%E5%85%A7%E5%AE%B9)
  - [暫存](#%E6%9A%AB%E5%AD%98)
    - [我想暫存所有追蹤的檔案](#%E6%88%91%E6%83%B3%E6%9A%AB%E5%AD%98%E6%89%80%E6%9C%89%E8%BF%BD%E8%B9%A4%E7%9A%84%E6%AA%94%E6%A1%88)
      - [只暫存一部分追蹤的檔案](#%E5%8F%AA%E6%9A%AB%E5%AD%98%E4%B8%80%E9%83%A8%E5%88%86%E8%BF%BD%E8%B9%A4%E7%9A%84%E6%AA%94%E6%A1%88)
    - [我需要把暫存的內容添加到上一次的提交](#%E6%88%91%E9%9C%80%E8%A6%81%E6%8A%8A%E6%9A%AB%E5%AD%98%E7%9A%84%E5%85%A7%E5%AE%B9%E6%B7%BB%E5%8A%A0%E5%88%B0%E4%B8%8A%E4%B8%80%E6%AC%A1%E7%9A%84%E6%8F%90%E4%BA%A4)
    - [我想要暫存一個新檔案的一部分，而不是這個檔案的全部](#%E6%88%91%E6%83%B3%E8%A6%81%E6%9A%AB%E5%AD%98%E4%B8%80%E5%80%8B%E6%96%B0%E6%AA%94%E6%A1%88%E7%9A%84%E4%B8%80%E9%83%A8%E5%88%86%E8%80%8C%E4%B8%8D%E6%98%AF%E9%80%99%E5%80%8B%E6%AA%94%E6%A1%88%E7%9A%84%E5%85%A8%E9%83%A8)
    - [我想把在一個檔案裡的更動加到兩個提交裡](#%E6%88%91%E6%83%B3%E6%8A%8A%E5%9C%A8%E4%B8%80%E5%80%8B%E6%AA%94%E6%A1%88%E8%A3%A1%E7%9A%84%E6%9B%B4%E5%8B%95%E5%8A%A0%E5%88%B0%E5%85%A9%E5%80%8B%E6%8F%90%E4%BA%A4%E8%A3%A1)
    - [我暫存了太多更動，而想把它們分到多個提交中](#%E6%88%91%E6%9A%AB%E5%AD%98%E4%BA%86%E5%A4%AA%E5%A4%9A%E6%9B%B4%E5%8B%95%E8%80%8C%E6%83%B3%E6%8A%8A%E5%AE%83%E5%80%91%E5%88%86%E5%88%B0%E5%A4%9A%E5%80%8B%E6%8F%90%E4%BA%A4%E4%B8%AD)
    - [我想把暫存的內容變成未暫存，把未暫存的內容暫存起來](#%E6%88%91%E6%83%B3%E6%8A%8A%E6%9A%AB%E5%AD%98%E7%9A%84%E5%85%A7%E5%AE%B9%E8%AE%8A%E6%88%90%E6%9C%AA%E6%9A%AB%E5%AD%98%E6%8A%8A%E6%9C%AA%E6%9A%AB%E5%AD%98%E7%9A%84%E5%85%A7%E5%AE%B9%E6%9A%AB%E5%AD%98%E8%B5%B7%E4%BE%86)
  - [未暫存的更動](#%E6%9C%AA%E6%9A%AB%E5%AD%98%E7%9A%84%E6%9B%B4%E5%8B%95)
    - [我想把未暫存的更動移動到新分支](#%E6%88%91%E6%83%B3%E6%8A%8A%E6%9C%AA%E6%9A%AB%E5%AD%98%E7%9A%84%E6%9B%B4%E5%8B%95%E7%A7%BB%E5%8B%95%E5%88%B0%E6%96%B0%E5%88%86%E6%94%AF)
    - [我想把未暫存的更動移動到另一個現有分支](#%E6%88%91%E6%83%B3%E6%8A%8A%E6%9C%AA%E6%9A%AB%E5%AD%98%E7%9A%84%E6%9B%B4%E5%8B%95%E7%A7%BB%E5%8B%95%E5%88%B0%E5%8F%A6%E4%B8%80%E5%80%8B%E7%8F%BE%E6%9C%89%E5%88%86%E6%94%AF)
    - [我想捨棄未提交的更動](#%E6%88%91%E6%83%B3%E6%8D%A8%E6%A3%84%E6%9C%AA%E6%8F%90%E4%BA%A4%E7%9A%84%E6%9B%B4%E5%8B%95)
    - [我想捨棄某些未暫存的更動](#%E6%88%91%E6%83%B3%E6%8D%A8%E6%A3%84%E6%9F%90%E4%BA%9B%E6%9C%AA%E6%9A%AB%E5%AD%98%E7%9A%84%E6%9B%B4%E5%8B%95)
  - [分支](#%E5%88%86%E6%94%AF)
    - [我想列出所有分支](#%E6%88%91%E6%83%B3%E5%88%97%E5%87%BA%E6%89%80%E6%9C%89%E5%88%86%E6%94%AF)
    - [我想從一個提交創建分支](#%E6%88%91%E6%83%B3%E5%BE%9E%E4%B8%80%E5%80%8B%E6%8F%90%E4%BA%A4%E5%89%B5%E5%BB%BA%E5%88%86%E6%94%AF)
    - [我從錯誤的分支拉取，或拉取到錯誤的分支了](#%E6%88%91%E5%BE%9E%E9%8C%AF%E8%AA%A4%E7%9A%84%E5%88%86%E6%94%AF%E6%8B%89%E5%8F%96%E6%88%96%E6%8B%89%E5%8F%96%E5%88%B0%E9%8C%AF%E8%AA%A4%E7%9A%84%E5%88%86%E6%94%AF%E4%BA%86)
    - [我想捨棄本機上的提交，以讓分支與遠端保持一致](#%E6%88%91%E6%83%B3%E6%8D%A8%E6%A3%84%E6%9C%AC%E6%A9%9F%E4%B8%8A%E7%9A%84%E6%8F%90%E4%BA%A4%E4%BB%A5%E8%AE%93%E5%88%86%E6%94%AF%E8%88%87%E9%81%A0%E7%AB%AF%E4%BF%9D%E6%8C%81%E4%B8%80%E8%87%B4)
    - [我需要提交到一個新分支，但錯誤的提交到了 `main`](#%E6%88%91%E9%9C%80%E8%A6%81%E6%8F%90%E4%BA%A4%E5%88%B0%E4%B8%80%E5%80%8B%E6%96%B0%E5%88%86%E6%94%AF%E4%BD%86%E9%8C%AF%E8%AA%A4%E7%9A%84%E6%8F%90%E4%BA%A4%E5%88%B0%E4%BA%86-main)
    - [我想從另一個引用之類保留整個檔案](#%E6%88%91%E6%83%B3%E5%BE%9E%E5%8F%A6%E4%B8%80%E5%80%8B%E5%BC%95%E7%94%A8%E4%B9%8B%E9%A1%9E%E4%BF%9D%E7%95%99%E6%95%B4%E5%80%8B%E6%AA%94%E6%A1%88)
    - [我把在同一分支提交了幾次，而這些提交應該在不同的分支上](#%E6%88%91%E6%8A%8A%E5%9C%A8%E5%90%8C%E4%B8%80%E5%88%86%E6%94%AF%E6%8F%90%E4%BA%A4%E4%BA%86%E5%B9%BE%E6%AC%A1%E8%80%8C%E9%80%99%E4%BA%9B%E6%8F%90%E4%BA%A4%E6%87%89%E8%A9%B2%E5%9C%A8%E4%B8%8D%E5%90%8C%E7%9A%84%E5%88%86%E6%94%AF%E4%B8%8A)
    - [我想刪除上游刪除了的本機分支](#%E6%88%91%E6%83%B3%E5%88%AA%E9%99%A4%E4%B8%8A%E6%B8%B8%E5%88%AA%E9%99%A4%E4%BA%86%E7%9A%84%E6%9C%AC%E6%A9%9F%E5%88%86%E6%94%AF)
    - [我不小心刪除了分支](#%E6%88%91%E4%B8%8D%E5%B0%8F%E5%BF%83%E5%88%AA%E9%99%A4%E4%BA%86%E5%88%86%E6%94%AF)
    - [我想刪除一個分支](#%E6%88%91%E6%83%B3%E5%88%AA%E9%99%A4%E4%B8%80%E5%80%8B%E5%88%86%E6%94%AF)
    - [我想刪除多個分支](#%E6%88%91%E6%83%B3%E5%88%AA%E9%99%A4%E5%A4%9A%E5%80%8B%E5%88%86%E6%94%AF)
    - [我想重新命名一個分支](#%E6%88%91%E6%83%B3%E9%87%8D%E6%96%B0%E5%91%BD%E5%90%8D%E4%B8%80%E5%80%8B%E5%88%86%E6%94%AF)
    - [我想簽出別人正在其上工作的遠端分支](#%E6%88%91%E6%83%B3%E7%B0%BD%E5%87%BA%E5%88%A5%E4%BA%BA%E6%AD%A3%E5%9C%A8%E5%85%B6%E4%B8%8A%E5%B7%A5%E4%BD%9C%E7%9A%84%E9%81%A0%E7%AB%AF%E5%88%86%E6%94%AF)
    - [我想從本機分支創建一個遠端的](#%E6%88%91%E6%83%B3%E5%BE%9E%E6%9C%AC%E6%A9%9F%E5%88%86%E6%94%AF%E5%89%B5%E5%BB%BA%E4%B8%80%E5%80%8B%E9%81%A0%E7%AB%AF%E7%9A%84)
    - [我想設定本機分支的上游](#%E6%88%91%E6%83%B3%E8%A8%AD%E5%AE%9A%E6%9C%AC%E6%A9%9F%E5%88%86%E6%94%AF%E7%9A%84%E4%B8%8A%E6%B8%B8)
    - [我想設定 `HEAD` 追蹤預設遠端分支](#%E6%88%91%E6%83%B3%E8%A8%AD%E5%AE%9A-head-%E8%BF%BD%E8%B9%A4%E9%A0%90%E8%A8%AD%E9%81%A0%E7%AB%AF%E5%88%86%E6%94%AF)
    - [我在錯誤的分支上做了更動](#%E6%88%91%E5%9C%A8%E9%8C%AF%E8%AA%A4%E7%9A%84%E5%88%86%E6%94%AF%E4%B8%8A%E5%81%9A%E4%BA%86%E6%9B%B4%E5%8B%95)
    - [我想將分支一分為二](#%E6%88%91%E6%83%B3%E5%B0%87%E5%88%86%E6%94%AF%E4%B8%80%E5%88%86%E7%82%BA%E4%BA%8C)
  - [重定基底與合併](#%E9%87%8D%E5%AE%9A%E5%9F%BA%E5%BA%95%E8%88%87%E5%90%88%E4%BD%B5)
    - [撤銷重定基底或合併](#%E6%92%A4%E9%8A%B7%E9%87%8D%E5%AE%9A%E5%9F%BA%E5%BA%95%E6%88%96%E5%90%88%E4%BD%B5)
    - [我重定了基底，但我不想強制推送](#%E6%88%91%E9%87%8D%E5%AE%9A%E4%BA%86%E5%9F%BA%E5%BA%95%E4%BD%86%E6%88%91%E4%B8%8D%E6%83%B3%E5%BC%B7%E5%88%B6%E6%8E%A8%E9%80%81)
    - [我需要組合幾個提交](#%E6%88%91%E9%9C%80%E8%A6%81%E7%B5%84%E5%90%88%E5%B9%BE%E5%80%8B%E6%8F%90%E4%BA%A4)
      - [安全合併的策略](#%E5%AE%89%E5%85%A8%E5%90%88%E4%BD%B5%E7%9A%84%E7%AD%96%E7%95%A5)
      - [我需要將整個分支合併成單一提交](#%E6%88%91%E9%9C%80%E8%A6%81%E5%B0%87%E6%95%B4%E5%80%8B%E5%88%86%E6%94%AF%E5%90%88%E4%BD%B5%E6%88%90%E5%96%AE%E4%B8%80%E6%8F%90%E4%BA%A4)
      - [我只想組合未推送的提交](#%E6%88%91%E5%8F%AA%E6%83%B3%E7%B5%84%E5%90%88%E6%9C%AA%E6%8E%A8%E9%80%81%E7%9A%84%E6%8F%90%E4%BA%A4)
      - [我需要中止合併](#%E6%88%91%E9%9C%80%E8%A6%81%E4%B8%AD%E6%AD%A2%E5%90%88%E4%BD%B5)
    - [我需要更新分支的親代提交](#%E6%88%91%E9%9C%80%E8%A6%81%E6%9B%B4%E6%96%B0%E5%88%86%E6%94%AF%E7%9A%84%E8%A6%AA%E4%BB%A3%E6%8F%90%E4%BA%A4)
    - [檢查分支上的所有提交是否都合併了](#%E6%AA%A2%E6%9F%A5%E5%88%86%E6%94%AF%E4%B8%8A%E7%9A%84%E6%89%80%E6%9C%89%E6%8F%90%E4%BA%A4%E6%98%AF%E5%90%A6%E9%83%BD%E5%90%88%E4%BD%B5%E4%BA%86)
    - [互動式重定基底可能出現的問題](#%E4%BA%92%E5%8B%95%E5%BC%8F%E9%87%8D%E5%AE%9A%E5%9F%BA%E5%BA%95%E5%8F%AF%E8%83%BD%E5%87%BA%E7%8F%BE%E7%9A%84%E5%95%8F%E9%A1%8C)
      - [編輯介面出現「noop」](#%E7%B7%A8%E8%BC%AF%E4%BB%8B%E9%9D%A2%E5%87%BA%E7%8F%BEnoop)
      - [衝突](#%E8%A1%9D%E7%AA%81)
  - [貯存](#%E8%B2%AF%E5%AD%98)
    - [貯存所有更動](#%E8%B2%AF%E5%AD%98%E6%89%80%E6%9C%89%E6%9B%B4%E5%8B%95)
    - [貯存指定檔案](#%E8%B2%AF%E5%AD%98%E6%8C%87%E5%AE%9A%E6%AA%94%E6%A1%88)
    - [貯存時附加訊息](#%E8%B2%AF%E5%AD%98%E6%99%82%E9%99%84%E5%8A%A0%E8%A8%8A%E6%81%AF)
    - [套用指定貯存](#%E5%A5%97%E7%94%A8%E6%8C%87%E5%AE%9A%E8%B2%AF%E5%AD%98)
    - [貯存時保留未暫存的內容](#%E8%B2%AF%E5%AD%98%E6%99%82%E4%BF%9D%E7%95%99%E6%9C%AA%E6%9A%AB%E5%AD%98%E7%9A%84%E5%85%A7%E5%AE%B9)
  - [尋找](#%E5%B0%8B%E6%89%BE)
    - [我想找到引入特定字串的提交](#%E6%88%91%E6%83%B3%E6%89%BE%E5%88%B0%E5%BC%95%E5%85%A5%E7%89%B9%E5%AE%9A%E5%AD%97%E4%B8%B2%E7%9A%84%E6%8F%90%E4%BA%A4)
    - [我想找到特定作者／提交者的提交](#%E6%88%91%E6%83%B3%E6%89%BE%E5%88%B0%E7%89%B9%E5%AE%9A%E4%BD%9C%E8%80%85%EF%BC%8F%E6%8F%90%E4%BA%A4%E8%80%85%E7%9A%84%E6%8F%90%E4%BA%A4)
    - [我想找到包含特定檔案的提交](#%E6%88%91%E6%83%B3%E6%89%BE%E5%88%B0%E5%8C%85%E5%90%AB%E7%89%B9%E5%AE%9A%E6%AA%94%E6%A1%88%E7%9A%84%E6%8F%90%E4%BA%A4)
    - [我想找到特定函式的歷史記錄](#%E6%88%91%E6%83%B3%E6%89%BE%E5%88%B0%E7%89%B9%E5%AE%9A%E5%87%BD%E5%BC%8F%E7%9A%84%E6%AD%B7%E5%8F%B2%E8%A8%98%E9%8C%84)
    - [我想找到引用特定提交的標籤](#%E6%88%91%E6%83%B3%E6%89%BE%E5%88%B0%E5%BC%95%E7%94%A8%E7%89%B9%E5%AE%9A%E6%8F%90%E4%BA%A4%E7%9A%84%E6%A8%99%E7%B1%A4)
  - [子模組](#%E5%AD%90%E6%A8%A1%E7%B5%84)
    - [複製所有子模組](#%E8%A4%87%E8%A3%BD%E6%89%80%E6%9C%89%E5%AD%90%E6%A8%A1%E7%B5%84)
    - [移除子模組](#%E7%A7%BB%E9%99%A4%E5%AD%90%E6%A8%A1%E7%B5%84)
  - [雜項](#%E9%9B%9C%E9%A0%85)
    - [從另一個分支拷貝檔案](#%E5%BE%9E%E5%8F%A6%E4%B8%80%E5%80%8B%E5%88%86%E6%94%AF%E6%8B%B7%E8%B2%9D%E6%AA%94%E6%A1%88)
    - [恢復刪除的檔案](#%E6%81%A2%E5%BE%A9%E5%88%AA%E9%99%A4%E7%9A%84%E6%AA%94%E6%A1%88)
    - [刪除標籤](#%E5%88%AA%E9%99%A4%E6%A8%99%E7%B1%A4)
    - [恢復已刪除標籤](#%E6%81%A2%E5%BE%A9%E5%B7%B2%E5%88%AA%E9%99%A4%E6%A8%99%E7%B1%A4)
    - [已刪除修補檔](#%E5%B7%B2%E5%88%AA%E9%99%A4%E4%BF%AE%E8%A3%9C%E6%AA%94)
    - [將版本庫導出為 Zip 檔](#%E5%B0%87%E7%89%88%E6%9C%AC%E5%BA%AB%E5%B0%8E%E5%87%BA%E7%82%BA-zip-%E6%AA%94)
    - [推送有相同名稱的分支與標籤](#%E6%8E%A8%E9%80%81%E6%9C%89%E7%9B%B8%E5%90%8C%E5%90%8D%E7%A8%B1%E7%9A%84%E5%88%86%E6%94%AF%E8%88%87%E6%A8%99%E7%B1%A4)
  - [追蹤檔案](#%E8%BF%BD%E8%B9%A4%E6%AA%94%E6%A1%88)
    - [我只想改變一個檔案名稱的大小寫，而不修改內容](#%E6%88%91%E5%8F%AA%E6%83%B3%E6%94%B9%E8%AE%8A%E4%B8%80%E5%80%8B%E6%AA%94%E6%A1%88%E5%90%8D%E7%A8%B1%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%AF%AB%E8%80%8C%E4%B8%8D%E4%BF%AE%E6%94%B9%E5%85%A7%E5%AE%B9)
    - [我想在拉取時覆蓋本機檔案](#%E6%88%91%E6%83%B3%E5%9C%A8%E6%8B%89%E5%8F%96%E6%99%82%E8%A6%86%E8%93%8B%E6%9C%AC%E6%A9%9F%E6%AA%94%E6%A1%88)
    - [我想將檔案從 Git 移除，但保留檔案](#%E6%88%91%E6%83%B3%E5%B0%87%E6%AA%94%E6%A1%88%E5%BE%9E-git-%E7%A7%BB%E9%99%A4%E4%BD%86%E4%BF%9D%E7%95%99%E6%AA%94%E6%A1%88)
    - [我想將特定檔案還原至某個修訂版](#%E6%88%91%E6%83%B3%E5%B0%87%E7%89%B9%E5%AE%9A%E6%AA%94%E6%A1%88%E9%82%84%E5%8E%9F%E8%87%B3%E6%9F%90%E5%80%8B%E4%BF%AE%E8%A8%82%E7%89%88)
    - [我想列出提交或分支之間特定檔案的差異](#%E6%88%91%E6%83%B3%E5%88%97%E5%87%BA%E6%8F%90%E4%BA%A4%E6%88%96%E5%88%86%E6%94%AF%E4%B9%8B%E9%96%93%E7%89%B9%E5%AE%9A%E6%AA%94%E6%A1%88%E7%9A%84%E5%B7%AE%E7%95%B0)
    - [我想 Git 忽略特定檔案的更動](#%E6%88%91%E6%83%B3-git-%E5%BF%BD%E7%95%A5%E7%89%B9%E5%AE%9A%E6%AA%94%E6%A1%88%E7%9A%84%E6%9B%B4%E5%8B%95)
  - [用 Git 除錯](#%E7%94%A8-git-%E9%99%A4%E9%8C%AF)
  - [組態](#%E7%B5%84%E6%85%8B)
    - [我想為 Git 命令設定別名](#%E6%88%91%E6%83%B3%E7%82%BA-git-%E5%91%BD%E4%BB%A4%E8%A8%AD%E5%AE%9A%E5%88%A5%E5%90%8D)
    - [我想將空目錄加入到版本庫](#%E6%88%91%E6%83%B3%E5%B0%87%E7%A9%BA%E7%9B%AE%E9%8C%84%E5%8A%A0%E5%85%A5%E5%88%B0%E7%89%88%E6%9C%AC%E5%BA%AB)
    - [我想快取一個版本庫的使用者名稱和密碼](#%E6%88%91%E6%83%B3%E5%BF%AB%E5%8F%96%E4%B8%80%E5%80%8B%E7%89%88%E6%9C%AC%E5%BA%AB%E7%9A%84%E4%BD%BF%E7%94%A8%E8%80%85%E5%90%8D%E7%A8%B1%E5%92%8C%E5%AF%86%E7%A2%BC)
    - [我想 Git 忽略權限與檔案模式更動](#%E6%88%91%E6%83%B3-git-%E5%BF%BD%E7%95%A5%E6%AC%8A%E9%99%90%E8%88%87%E6%AA%94%E6%A1%88%E6%A8%A1%E5%BC%8F%E6%9B%B4%E5%8B%95)
    - [我想設定全域使用者資訊](#%E6%88%91%E6%83%B3%E8%A8%AD%E5%AE%9A%E5%85%A8%E5%9F%9F%E4%BD%BF%E7%94%A8%E8%80%85%E8%B3%87%E8%A8%8A)
  - [我不知道我做錯了什麼](#%E6%88%91%E4%B8%8D%E7%9F%A5%E9%81%93%E6%88%91%E5%81%9A%E9%8C%AF%E4%BA%86%E4%BB%80%E9%BA%BC)
  - [Git 快捷命令](#git-%E5%BF%AB%E6%8D%B7%E5%91%BD%E4%BB%A4)
    - [Git Bash](#git-bash)
    - [Windows 上的 PowerShell](#windows-%E4%B8%8A%E7%9A%84-powershell)
- [其他資源](#%E5%85%B6%E4%BB%96%E8%B3%87%E6%BA%90)
  - [書籍](#%E6%9B%B8%E7%B1%8D)
  - [教學](#%E6%95%99%E5%AD%B8)
  - [腳本和工具](#%E8%85%B3%E6%9C%AC%E5%92%8C%E5%B7%A5%E5%85%B7)
  - [GUI 客戶端](#gui-%E5%AE%A2%E6%88%B6%E7%AB%AF)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 版本庫

### 我想建立本機版本庫

將現有目錄初始化為 Git 版本庫：

```sh
(my-folder)$ git init
```

### 我想複製遠端版本庫

要複製遠端版本庫，找到該版本庫的 URL，然後執行：

```sh
$ git clone [URL]
```

版本庫會複製到與其名稱相同的目錄中。確保你能連線到你要從之複製的遠端伺服器（通常來說，這表示你要連接上網際網路。）

如果想要將版本庫複製到不同名稱的目錄：

```sh
$ git clone [URL] [目錄名稱]
```

### 我設定了錯的遠端版本庫

有幾種可能的情況：

如果你複製錯了遠端版本庫，刪掉 `git clone` 創建的目錄，然後複製正確的版本庫就好。

如果你為本機版本庫設定了錯的遠端，你可以用以下命令變更 `origin` 的 URL：

```sh
$ git remote set-url origin [正確的 URL]
```

詳見 [此 Stack Overflow 討論串](https://stackoverflow.com/questions/2432764/how-to-change-the-uri-url-for-a-remote-git-repository#2432799)。

### 我想將程式碼加到其他人的版本庫中

Git 不允許沒有存取權的人將程式碼加到其他人的版本庫。GitHub，一個 Git 版本庫的託管服務，也不行。不過你可以建議程式碼，透過修補，或者用 GitHub 的分叉與拉取請求。

關於分叉：分叉是版本庫的複本。這不是 Git 的功能，但是是 GitHub、Bitbucket、GitLab——或其他任何託管 Git 版本庫的地方——上很常見的動作。你可以透過其 UI 分叉版本庫。

#### 透過拉取請求建議程式碼

在分叉版本庫後，你只需要一般地將其複製到你的機器上。你可以在 GitHub 上做一些小修改，而不需要複製，但這不是一份 GitHub 飛行規則，所以我們還是來談談該怎麼在本機上操作吧。

```sh
# 如果你用 SSH 的話：
$ git clone git@github.com:k88hudson/git-flight-rules.git

# 如果你用 HTTPS 的話：
$ git clone https://github.com/k88hudson/git-flight-rules.git
```

如果你 `cd` 進創建的目錄，然後輸入 `git remote`，你會看到遠端的列表。基本上，會有一個遠端——`origin`——指向 `k88hudson/git-flight-rules`。在這個情況下，我們也希望有一個指向你的分叉的遠端。

首先，按照 Git 的慣例，我們用 `origin` 表示你的分叉、`upstream` 表示原本的版本庫。因此，先將 `origin` 重新命名為 `upstream`：

```sh
$ git remote rename origin upstream
```

你也可以用 `git remote set-url` 來達到同樣的結果，但會花費更多步驟。

接著，設定一個新的遠端指向你的版本庫：

```sh
$ git remote add origin git@github.com:YourName/git-flight-rules.git
```

現在有兩個遠端了：

- `origin` 指向你分叉版本庫。
- `upstream` 則指向原版版本庫。

`origin` 可以讀寫，`upstream` 則是唯讀的。

當你完成更動後，推送你（通常在某個分支上的）更動到遠端 `origin`。如果是在分支上，你可以用 `--set-upstream` 來避免每次推送都要指定遠端分支。例如：

```sh
(feature/my-feature)$ git push --set-upstream origin feature/my-feature
```

你沒辦法用 Git 在 CLI 中發起拉取請求（但有一些工具可以幫你做這件事，例如 [hub](https://github.com/github/hub)）。所以當你準備好時，到 GitHub（或其他 Git 託管服務）上創建拉取請求。

之後也別忘了回覆程式碼的檢閱回饋。

#### 透過修補建議程式碼

另一個建議更動的方法是用 `git format-patch`，這不依賴於如 GitHub 的第三方服務。

`format-patch` 會為你的提交創建一個 `.patch` 檔案，本質上就是類似於能在 GitHub 上看到的提交差異的更動列表。

`git am` 可以用於查看、甚至編輯、套用修補檔。

例如，要基於前一個提交創建修補檔，你可以執行 `git format-patch HEAD^`，來創建一個名字類似於 `0001-提交訊息.patch` 的修補檔。

將修補檔套用至你的版本庫則需執行 `git am ./0001-提交訊息.patch`。

修補檔也可以以 `git send-email` 命令透過 email 傳送。使用與組態資訊參見：https://git-send-email.io

#### 我需要將分叉更新到原版的最新進度

在一段時間後，`upstream` 版本庫可能更新了，而這些更新需要拉取至你的 `origin` 版本庫。

你可能已經設定了指向原版的遠端。如果還沒的話，執行以下命令。通常我們用 `upstream` 作為名稱：

```sh
$ git remote add upstream [原版的 URL]
```

現在你可以從 `upstream` 抓取，並取得最新更新了。

```sh
(main)$ git fetch upstream
(main)$ git merge upstream/main

# 或者：
(main)$ git pull upstream main
```

## 編輯提交

### 我剛才提交了什麼？

如果你盲目地用 `git commit -a` 提交了更動，而不確定到底提交了哪些內容，可以用以下命令顯示目前 `HEAD` 上的最近一次的提交：

```sh
(main)$ git show
```

或者

```sh
$ git log -n1 -p
```

如果你想查看特定提交的特定檔案，你可以用：（`[提交]` 是你想要的提交）

```sh
$ git show [提交]:filename
```

### 我的提交訊息寫錯了

如果你的提交訊息寫錯了，且這次提交還沒有推送，可以透過下面的方法來修改提交訊息：

```sh
$ git commit --amend --only
```

這會開啟你的預設編輯器來編輯訊息。你也可以選擇只靠一個命令來做這些事：

```sh
$ git commit --amend --only -m 'xxxxxxx'
```

如果你已經推送了提交，可以在修改後強制推送，但是不推薦這麼做。

### 我提交裡的使用者名稱和信箱不對

如果只是單個提交有錯，修正它：

```sh
$ git commit --amend --no-edit --author "New Authorname <authoremail@mydomain.com>"
```

另一個方法是在 `git config --global author.(name|email)` 正確配置你的作者資訊，然後用：

```sh
$ git commit --amend --no-edit --reset-author
```

如果你需要修改所有歷史記錄，參考 `git filter-branch` 的手冊頁。

### 我想從一個提交裡移除一個檔案

要從一個提交裡移除一個檔案：

```sh
$ git checkout HEAD^ filename
$ git add filename
$ git commit --amend --no-edit
```

如果該檔案是新加入的，而你想要（從 Git）刪除它，用：

```sh
$ git rm --cached filename
$ git commit --amend --no-edit
```

當你有一個開放的修補，而你往上面提交了一個不必要的檔案，需要強制推送去更新這個遠端修補時，這非常有用。`--no-edit` 選項將保留現有提交訊息。

### 我想將更動從一個提交移到另一個

如果你在一個提交作了一個更動，而它更符合另一個提交做的事，你可以用互動式重定基底將更動移動過去。這節來自 [Stack Overflow](https://stackoverflow.com/a/54985304/2491502)。

假設你有三個提交，`a`、`b`、`c`。`b` 變更了 `file1` 和 `file2`，你想要把 `file1` 的更動從 `b` 移到 `a`。

首先，互動式重定基底：

```sh
$ git rebase -i HEAD~3
```

這會打開包含以下內容的編輯器：

```vim
pick a
pick b
pick c
```

將 `a` 和 `b` 那行改為 `edit`：

```vim
edit a
edit b
pick c
```

儲存並關閉編輯器後，你會被帶到 `b`。重設 `file1` 的更動：

```sh
$ git reset HEAD~1 file1
```

這會取消暫存 `file1` 的更動。貯存更動然後繼續重定基底：

```sh
$ git stash
$ git rebase --continue
```

現在要編輯 `a`。彈出貯存，將更動加入這個提交，然後繼續重定基底：

```sh
$ git stash pop
$ git add file1
$ git commit --amend --no-edit
$ git rebase --continue
```

現在你完成重定基底，並將更動從 `b` 移到 `a` 了。如果你要將更動從 `b` 移到 `c`，因為 `c` 在 `b` 之前，你會需要重定基底兩次，一次將更動從 `b` 取出，一次將更動加入到 `c`。

### 我想刪除我最後一次提交

如果你需要刪除推送了的提交，你可以使用以下方法。但是，這將不可逆的改變你的歷史記錄，也會搞亂那些已經從該版本庫拉取了的人的歷史記錄。簡而言之，如果你不是很確定，千萬不要這麼做。

```sh
$ git reset HEAD^ --hard
$ git push --force-with-lease [遠端] [分支]
```

如果你還沒有推送到遠端，重設到你最後一次提交前的狀態就可以了（同時保存暫存的更動）：

```
(my-branch)$ git reset --soft HEAD^
```

這只能在推送之前使用。如果你已經推送了，唯一安全的做法是 `git revert [不要的提交]`，那會創建一個新的提交來還原前一個提交的所有更動；或者，如果這個分支是重定基底安全的（即其他開發者不會從這個分支拉取），只需要使用 `git push --force-with-lease`，參見這一節前半部分。

### 刪除任意提交

同樣，除非必須，否則不要這麼做。

```sh
$ git rebase --onto [不要的提交]^ [不要的提交]
$ git push --force-with-lease [遠端] [分支]
```

或者使用[互動式重定基底](#%E6%88%91%E9%9C%80%E8%A6%81%E7%B5%84%E5%90%88%E5%B9%BE%E5%80%8B%E6%8F%90%E4%BA%A4)刪除那些你想要刪除的提交所對應的行。

### 我嘗試推送一個修正後的提交到遠端，但是報錯

```sh
To https://github.com/yourusername/repo.git
! [rejected]        mybranch -> mybranch (non-fast-forward)
error: failed to push some refs to 'https://github.com/tanay1337/webmaker.org.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

注意，重定基底和修正會**用新的提交取代舊的**，所以如果舊的提交已經推送到遠端上了，那你必須強制推送。注意：總是確保你指明一個分支！

```sh
(my-branch)$ git push --force-with-lease origin mybranch
```

一般來說，**應該避免強制推送**。最好是創建和推送一個新的提交，而不是強制推送一個修正後的提交。後者會使其他開發者該分支或其子分支的歷史記錄，與遠端歷史記錄產生衝突。`--force-with-lease` 仍然可能失敗，如果有人在同樣的分支上推送了提交，而你的推送會覆蓋他們的更動。

如果你*完全*確定沒有人在同一個分支上工作，或者你想要*無條件*更新分支的頂端，你可以用 `--force`（`-f`），但通常應該避免。

### 我意外地硬性重設了，我想找回我的內容

如果你意外地做了 `git reset --hard`，你通常能找回你的提交，因為 Git 對每件事都會有日誌，且都會保存幾天。

注意，只適用於你的作業備份了的情況，即有提交或貯存。`git reset --hard` *會移除*未提交的更動，所以請謹慎使用。（更安全的選擇是 `git reset --keep`。）

```sh
(main)$ git reflog
```

你將會看到一個你過去提交的列表，和一個重設的提交。選擇你想要回到的提交的 SHA，再重設一次：

```sh
(main)$ git reset --hard [SHA]
```

### 我意外地提交並推送了合併

如果你意外地將功能分支在準備好合併之前，合併進了主開發分支，你可以撤銷合併。但有個問題：合併提交有多於一個親代（通常是兩個）。

使用命令：

```sh
(feature-branch)$ git revert -m 1 [提交]
```

`-m 1` 選項的意思是選擇 1 號親代（合併進去的分支）作為要還原到的親代。

注意，親代編號不是提交識別符。合併提交有一行 `Merge: 8e2ce2d 86ac2e7`，親代編號是這行上的親代從 1 開始的索引，第一個識別符是 1 號親代，第二個是 2 號，以此類推。

### 我意外地提交並推送了敏感資料

如果你意外地推送了包含敏感或私人資料（密碼、金鑰等）的檔案，你可以修正該提交。記得，你應該認定其中的所有資料都外洩了。以下步驟可以從你的本機複本和公開版本庫移除敏感資料，但你**不能**從別人拉取的複本移除敏感資料。如果你提交了密碼，**立刻變更**，如果你提交了金鑰，**立刻重新生成**。修正推送的提交並不夠，任何人都可能拉取了包含敏感資料的原提交。

如果你編輯檔案移除了敏感資料，執行：

```sh
$ git add [編輯過的檔案]
$ git commit --amend --no-edit
$ git push --force-with-lease [遠端] [分支]
```

或是將敏感資料儲存在本機環境變數。

如果你希望移除整個檔案（但保留在本機），執行：

```sh
$ git rm --cached [敏感的檔案]
$ echo [敏感的檔案] >> .gitignore
$ git add .gitignore
$ git commit --amend --no-edit
$ git push --force-with-lease [遠端] [分支]
```

如果你同時做了其他提交（即，敏感資料不是在上一個提交引入的），你需要重定基底。

### 我想要從現有的版本庫歷史記錄中移除大檔案

如果你想移除的檔案是機密或敏感的，見[〈我意外地提交並推送了敏感資料〉](#%E6%88%91%E6%84%8F%E5%A4%96%E5%9C%B0%E6%8F%90%E4%BA%A4%E4%B8%A6%E6%8E%A8%E9%80%81%E4%BA%86%E6%95%8F%E6%84%9F%E8%B3%87%E6%96%99)。

即使你在最近的提交中刪除了大或不想要的檔案，它仍然存於 Git 歷史記錄，存於版本庫的 `.git` 目錄中，且 `git clone` 也會下載到不需要的檔案。

這節中提到的操作需要強制推送，且會重寫版本庫大部分的歷史，所以如果你與其他人在進行遠端協作，請先確認他們的本機複本都推送了。

有兩個方法可以重寫歷史記錄：內建的 `git filter-branch` 或 [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/)。BFG 能以更好的效能顯著清理，但是是第三方，且需要 Java。這裡兩種選擇都會描述。最後一步是強制推送，這需要比起一般強制推送更再三考慮，因為這會永久變更版本庫大量的歷史記錄。

#### 推薦的工具：第三方的 BFG

BFG Repo Cleaner 需要 Java。到[這裡]下載 BFG 的 JAR 檔。以下例子中將假設檔案名稱為 `bfg.jar`，位於 `~/Downloads/`。

刪除特定檔案：

```sh
$ git rm path/filename
$ git commit
$ java -jar ~/Downloads/bfg.jar --delete-files filename
```

注意，你應該直接給 BFG 檔案名稱，即使其在子目錄中。

你也可以用 glob 模式刪除檔案：

```sh
$ git rm *.jpg
$ git commit
$ java -jar ~/Downloads/bfg.jar --delete-files *.jpg
```

BFG 不會影響在最新提交中存在的檔案。例如，版本庫中有幾個大 `.tga` 檔，在之前的提交移除了其中一些，在最新的提交還存在的檔案則不會觸及。

注意，如果你重新命名了檔案，例如原本是 `LargeFileFirstName.mp4` 的檔案在一次提交中重新命名為 `LargeFileSecondName.mp4`，`java -jar ~/Downloads/bfg.jar --delete-files LargeFileSecondName.mp4` 並不會從 Git 歷史記錄中刪除這個檔案。需要對兩個檔案名都執行一次，或使用匹配到兩個檔案名的模式。

#### 內建的工具：`git filter-branch`

`git filter-branch` 較為麻煩且功能較少，但如果你不能安裝或執行 BFG，你可以使用它。

將以下例子中的 `filepattern` 替換為某個檔案名稱或模式，例如 `*.jpg`。所有分支的歷史記錄中匹配到的檔案都會被移除。

```sh
$ git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch filepattern' --prune-empty --tag-name-filter cat -- --all
```

解釋：

`--tag-name-filter cat` 是使用 `cat` 命令將原本的標籤套用至新提交上，麻煩、但最簡單的方法。

`--prune-empty` 移除任何變為空的提交。

#### 最後一步：推送你變更過的歷史

一旦你移除了檔案，細心地測試一下你沒有弄壞版本庫的任何東西——如果有，最簡單的方法是重新複製一個，然後重頭來過。最後，可以用 Git 垃圾收集來最小化你本機 `.git` 目錄的大小，然後強制推送。

```sh
$ git reflog expire --expire=now --all && git gc --prune=now --aggressive
$ git push --force --tags [遠端]
```

由於你重寫了整個歷史記錄，`git push` 可能會需要推送太多資料，導致回傳錯誤 `The remote end hung up unexpectedly`（遠端意外掛斷了）。如果出現這個問題，可以嘗試增加 Git post 緩衝區大小：

```sh
$ git config http.postBuffer 524288000
$ git push --force
```

如果沒有用的話，你需要手動將提交分成多塊推送歷史記錄。試著增加以下命令中的 `<數量>` 直到成功推送：

```sh
(main)$ git push -u [遠端] HEAD~<數量>:refs/head/main --force
```

第一次成功推送後，逐步減少 `<數量>`，直到可以成功使用常規的 `git push`。

### 我需要變更非最新者的提交的內容

如果你創建了好幾個提交，然後發現自己少做了一些應該在其中的第一個提交做的事。若創建新提交來放這些少做的更動，你會有乾淨的版本庫，但是你的提交便不是「原子」的（也就是說，應該在一起的更動沒有在同一個提交）。因此，你可能會想變更第一個提交，也就是這些更動應該在的地方，並保持其後的提交不變。這種情況下，重定基底或許能幫上忙。

假設你要變更第三新的提交。

```sh
$ git rebase -i HEAD~4
```

開始互動式重定基底後，你可以編輯最新的三個提交。啟動的文字編輯器會顯示類似這樣的內容：

```vim
pick 9e1d264 第三新的提交
pick 4b6e19a 第二新的提交
pick f4037ec 最新的提交
```

將其改為：

```vim
edit 9e1d264 第三新的提交
pick 4b6e19a 第二新的提交
pick f4037ec 最新的提交
```

然後儲存並退出編輯器。這表示你想要編輯第三新的提交，並保持其他兩者不變。重定基底會在你想編輯的提交停下，你可以做原本少了的更動，和往常一樣編輯、暫存，然後：

```sh
$ git commit --amend
```

這會修正這個提交，也就是用原本的更動和新做出的更動，重新創建一個提交來替換掉舊的。接著繼續重定基底就好了：

```sh
$ git rebase --continue
```

## 暫存

### 我想暫存所有追蹤的檔案

```sh
$ git add -u
```

#### 只暫存一部分追蹤的檔案

```sh
$ git add -u *.txt # 只暫存副檔名 .txt 的檔案。
$ git add -u src/ # 只暫存目錄 src/ 中的檔案。
```

### 我需要把暫存的內容添加到上一次的提交

```sh
(my-branch*)$ git commit --amend
```

如果你沒有要修改提交訊息，可以讓 Git 重用訊息：

```sh
(my-branch*)$ git commit --amend -C HEAD
```

### 我想要暫存一個新檔案的一部分，而不是這個檔案的全部

一般來說，如果你想暫存一個檔案的一部分，你可以使用以下命令來開啟互動式介面，並使用 `s` 選項來選擇想要的行。

```sh
$ git add --patch filename.x # 或 `-p`。
```

然而，當這個檔案是新的，則需改用以下命令：

```sh
$ git add -N filename.x
```

然後，你需要用 `e` 選項來選擇需要添加的行。執行 `git diff --cached` 將會顯示哪些行暫存了、哪些行只儲存在本機。

### 我想把在一個檔案裡的更動加到兩個提交裡

`git add` 會把整個檔案加入到一個提交，`git add -p` 則允許你互動式地選擇想要提交的部分。

### 我暫存了太多更動，而想把它們分到多個提交中

`git reset -p` 會打開修補模式重設對話框。類似於 `git add -p`，但選擇 `yes` 會取消暫存更動。

### 我想把暫存的內容變成未暫存，把未暫存的內容暫存起來

多數情況下，你應該將所有的內容變為未暫存，然後再加入你想要的內容提交。但如果你就是想這麼做，你可以創建一個臨時的提交來儲存你已暫存的內容，然後加入未暫存的內容並貯存起來。最後，重設最後一個提交將原本暫存的內容變為未暫存，最後彈出貯存。

```sh
$ git commit -m "WIP"     # 將之前已暫存的內容提交。
$ git add .               # 加入未暫存的內容。
$ git stash               # 貯存剛剛加入的內容。
$ git reset HEAD^         # 重設到父提交。
$ git stash pop --index 0 # 彈出貯存。
```

註一：這裡使用 `pop` 僅僅是因為想盡可能保持冪等。

註二：假如不加上 `--index`，會把暫存的檔案標記為未暫存。[這裡](https://stackoverflow.com/questions/31595873/git-stash-with-staged-files-does-stash-convert-staged-files-to-unstaged?answertab=active#tab-top)解釋得比較清楚。（其大意是說，這是一個較為底層的問題，貯存時會創建兩個提交，一個記錄索引狀態、暫存的內容等，另一個紀錄工作區和其他的一些東西，如果你不在套用時指定索引，Git 會把兩個一起銷毀，所以暫存區裡就空了）。

## 未暫存的更動

### 我想把未暫存的更動移動到新分支

```sh
$ git checkout -b my-branch
```

### 我想把未暫存的更動移動到另一個現有分支

```sh
$ git stash
$ git checkout my-branch
$ git stash pop
```

### 我想捨棄未提交的更動

取消暫存所有更動：

```sh
$ git reset
```

捨棄所有未提交的更動（在版本庫根目錄執行）：

```sh
$ git checkout .
```

捨棄特定檔案未提交的更動：

```sh
$ git checkout [檔案名稱]
```

另一個捨棄所有未提交的更動的方法（比較長，但可以在任何子目錄執行）：

```sh
$ git reset --hard HEAD
```

移除所有未追蹤的本機檔案，只有 Git 追蹤的會保留：

```sh
$ git clean -fd
```

`-x` 能將忽略的檔案也移除。

### 我想捨棄某些未暫存的更動

如果只想捨棄某些更動，而不是全部，簽出不要的、保留要的：

```sh
$ git checkout -p
# 回答 y 捨棄不要的更動。
```

另外一個方法是使用貯存。貯存所有要的更動，重設工作複本，然後把貯存彈出。

```sh
$ git stash -p
# Select all of the snippets you want to save
$ git reset --hard
$ git stash pop
```

或者，貯存你不需要的部分，然後捨棄貯存。

```sh
$ git stash -p
# Select all of the snippets you don't want to save
$ git stash drop
```

## 分支

### 我想列出所有分支

列出本機分支：

```sh
$ git branch
```

列出遠端分支：

```sh
$ git branch -r
```

列出兩者：

```sh
$ git branch -a
```

### 我想從一個提交創建分支

```sh
$ git checkout -b [分支名稱] [提交 SHA]
```

### 我從錯誤的分支拉取，或拉取到錯誤的分支了

這是另外一種可以使用 `git reflog` 情況。找到在這次錯誤拉取之前 HEAD 的指向。

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

### 我想捨棄本機上的提交，以讓分支與遠端保持一致

首先，確認你沒有推送到遠端。

`git status` 會顯示本機領先遠端多少個提交：

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

`HEAD^` 是 `HEAD^1` 的縮寫，表示 `HEAD` 的第一個親代，而 `HEAD^2` 則是其第二個親代（合併提交會有兩個親代）。

請注意 `HEAD^2` **不同於** `HEAD~2`，詳見 [這篇部落格](http://www.paulboxley.com/blog/2011/06/git-caret-and-tilde)。

或者，如果你不想用 `HEAD^`，找到想要將 `main` 重設到的提交的雜湊值（`git log` 可以做到這件事）。然後重設到那個提交。例如，要將 `main` 重設到 `a13b85e`，執行 `git reset --hard a13b85e`。

簽出剛才新建的分支繼續工作：

```sh
(main)$ git checkout my-branch
```

### 我想從另一個引用之類保留整個檔案

假設你正在做一個探針解決方案（註），有成百上千的更動，一切都運作良好。現在，你提交到另一個分支來儲存該工作：

```sh
(solution)$ git add -A && git commit -m "Adding all changes from this spike into one big commit."
```

當你想要把它放到一個分支裡（可能是功能分支，可能是 `develop`），你希望保持整個檔案的完整，並將大的提交分割成數個小的。

假設有：
  * 分支 `solution`，擁有原型方案，領先 `develop`。
  * 分支 `develop`，你想套用解決方案的分支。

假如檔案名稱是 `file1.txt`，你可以將 `solution` 分支的那個檔案的內容放到 `develop` 分支。

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

註：探針解決方案（spike solution）旨在分析或解決問題。當所有人都清楚瞭解問題後，這些方案將被評估或捨棄。參見 [Wikipedia](https://en.wikipedia.org/wiki/Extreme_programming_practices)。

### 我把在同一分支提交了幾次，而這些提交應該在不同的分支上

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

要將 `e3851e8` 和 `5ea5173` 分別移到新的分支，首先，要把 `main` 分支重設到正確的提交（`a13b85e`）：

```sh
(main)$ git reset --hard a13b85e
HEAD is now at a13b85e
```

新增一個分支：

```sh
(main)$ git checkout -b 21
```

接著，將提交揀選到這個分支的頂端。這意味著套用、且只套用該提交，直接在 `HEAD` 的頂端。

```sh
(21)$ git cherry-pick e3851e8
```

這可能會造成衝突，參見〈[互動式重定基底可能出現的問題](#%E4%BA%92%E5%8B%95%E5%BC%8F%E9%87%8D%E5%AE%9A%E5%9F%BA%E5%BA%95%E5%8F%AF%E8%83%BD%E5%87%BA%E7%8F%BE%E7%9A%84%E5%95%8F%E9%A1%8C)・[衝突](#%E8%A1%9D%E7%AA%81)〉來解決衝突。

同樣地，為 `5ea5173` 也創建一個分支，並把提交揀選到其上：

```sh
(main)$ git checkout -b 14
(14)$ git cherry-pick 5ea5173
```

### 我想刪除上游刪除了的本機分支

比方說，在 GitHub 中，拉取請求合併後，會有一個選項可以刪除你分叉中合併了的分支。如果你並未計劃在該分支上繼續工作，將該分支的本機複本刪除會更乾淨，而不會有一堆陳舊分支。

```sh
$ git fetch -p [遠端]
```

### 我不小心刪除了分支

如果你定期推送到遠端，多數情況下應該是安全的。但有時可能刪除了還沒推送的分支。為了模擬這種情況，首先，創建一個分支和一個檔案：

```sh
(main)$ git checkout -b my-branch
(my-branch)$ touch foo.txt
(my-branch)$ ls
README.md foo.txt
```

加入更動並提交：

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

如你所見，其中包含了刪除分支的提交的雜湊值。可以藉此把提交找回來：

```sh
(main)$ git checkout -b my-branch-help
Switched to a new branch 'my-branch-help'
(my-branch-help)$ git reset --hard 4e3cd85
HEAD is now at 4e3cd85 foo.txt added
(my-branch-help)$ ls
README.md foo.txt
```

看！我們把遺失的檔案找回來了。Git 的 `reflog` 在重定基底出錯時也同樣有用。

### 我想刪除一個分支

刪除一個遠端分支：

```sh
(main)$ git push origin --delete my-branch
```

或：

```sh
(main)$ git push origin :my-branch
```

刪除一個本機分支：

```sh
(main)$ git branch -D my-branch
```

刪除一個*未*合併進目前分支或上游的分支：

```sh
(main)$ git branch -D my-branch
```

### 我想刪除多個分支

假如你想刪除以 `fix/` 開頭的所有分支：

```sh
(main)$ git branch | grep 'fix/' | xargs git branch -d
```

### 我想重新命名一個分支

重新命名目前的本機分支：

```sh
$ git branch -m [新名稱]
```

重新命名另一個本機分支：

```sh
$ git branch -m [原名稱] [新名稱]
```

刪除遠端上原名稱的分支，並推送新名稱的分支：

```sh
$ git push [遠端] :[原名稱] [新名稱]
```

### 我想簽出別人正在其上工作的遠端分支

首先，從遠端抓取所有分支：

```sh
(main)$ git fetch --all
```

假設你想要從遠端 `origin` 簽出分支 `daves`。

```sh
(main)$ git checkout --track origin/daves
Branch daves set up to track remote branch daves from origin.
Switched to a new branch 'daves'
```

（`--track` 是 `git checkout -b [分支] [遠端]/[分支]` 的縮寫。）

這樣就有 `daves` 的本機複本了。

### 我想從本機分支創建一個遠端的

```sh
$ git push [遠端] HEAD
```

如果你亦希望將該遠端分支設為上游，則改用：

```sh
$ git push -u [遠端] HEAD
```

若 `push.default` 組態為 `upstream` 模式或 `simple` 模式（Git 2.0 的預設值），以下命令會將目前分支推送到先前以 `-u` 註冊的遠端分支：

```sh
$ git push
```

`git push` 其他模式的行為參見 [`push.default` 的文件](https://git-scm.com/docs/git-config#Documentation/git-config.txt-pushdefault)。

### 我想設定本機分支的上游

設定目前的本機分支的上游：

```sh
$ git branch --set-upstream-to [遠端]/[分支]
# 或
$ git branch -u [遠端]/[分支]
```

設定另一個本機分支的上游：

```sh
$ git branch -u [遠端]/[分支] [本機分支]
```

### 我想設定 `HEAD` 追蹤預設遠端分支

透過檢查遠端分支，可以看到 `HEAD` 在追蹤哪個遠端分支。在某些情況下，可能不會是希望的分支。

```sh
$ git branch -r
origin/HEAD -> origin/gh-pages
origin/main
```

設定 `origin/HEAD` 追蹤 `origin/main`：

```sh
$ git remote set-head origin --auto
origin/HEAD set to main
```

### 我在錯誤的分支上做了更動

如果你有未提交的更動，而其應該在另一個分支上，貯存更動然後在正確的分支上套用：

```sh
(wrong-branch)$ git stash
(wrong-branch)$ git checkout correct-branch
(correct-branch)$ git stash apply
```

### 我想將分支一分為二

你在一個分支上提交了幾次，而你想其一分為二，一個結束於較早的某個提交，一個包含所有提交。

用 `git log` 找到你想作為分開點的提交的 SHA，然後：

```sh
(original-branch)$ git branch new-branch
(original-branch)$ git reset --hard [分開點]
```

如果你先前已推送 `original-branch`，你將需要強制推送，參見 [Stack Overflow](https://stackoverflow.com/questions/28983458/how-to-split-a-branch-in-two-with-git/28983843#28983843)。

## 重定基底與合併

### 撤銷重定基底或合併

你可能對一個錯誤的分支做了重定基底或合併，或者無法完成重定基底或合併。Git 在進行危險操作時，會將原本的 `HEAD` 存成 `ORIG_HEAD`，因此可以很容易的恢復到之前的狀態。

```sh
(my-branch)$ git reset --hard ORIG_HEAD
```

### 我重定了基底，但我不想強制推送

不幸的是，如果你想把重定基底的結果反映在遠端分支上，你必須強制推送。因為歷史記錄變更了，遠端不會接受使用快轉，而必須強制推送。這就是許多人使用合併工作流程、而不是重定基底工作流程的主要原因之一，強制推送會使大團隊陷入麻煩。

一種安全的方式是，不要推送到遠端：

```sh
(main)$ git checkout my-branch
(my-branch)$ git rebase -i main
(my-branch)$ git checkout main
(main)$ git merge --ff-only my-branch
```

參見[此 Stack Overflow 討論串](http://stackoverflow.com/questions/11058312/how-can-i-use-git-rebase-without-requiring-a-forced-push)。

### 我需要組合幾個提交

假設你在（將）對 `main` 分支拉取請求的分支上工作。最簡單的例子中，你只是想將所有的提交組合成一個單獨的提交，且你不關心提交的時間戳，你可以重設和重新提交。確保 `main` 是最新的，且你的更動都提交了，然後：

```sh
(my-branch)$ git reset --soft main
(my-branch)$ git commit -am "New awesome feature"
```

如果你想更精細地控制、保留時間戳，你需要互動式重定基底：

```sh
(my-branch)$ git rebase -i main
```

如果沒有相對於另一個分支，你將不得不相對於 `HEAD` 重定基底。例如，要壓縮最近的兩次提交，需對 `HEAD~2` 重定基底；組合最近三次提交，則是對 `HEAD~3`；以此類推。

```sh
(main)$ git rebase -i HEAD~2
```

在執行了互動式重定基底的命令後，你會在編輯器裡看到類似以下的內容：

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

以 `#` 開頭的行是註解，不影響重定基底。

你可以用註解中列出的命令替換 `pick`，也可以刪除一行來刪除對應的提交。

例如，如果要**保留最舊（第一個）的提交，並將其餘的組合成第二個提交**，應該將第二個提交之後所有提交的命令改為 `f`：

```vim
pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
f b729ad5 fixup
f e3851e8 another fix
```

如果要組合**並重新命名這個提交**，應該在第二個提交加上 `r`，或使用 `s` 取代 `f`：

```vim
pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
s b729ad5 fixup
s e3851e8 another fix
```

你可以在接著彈出的編輯器中重新命名那個提交：

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
Successfully rebased and updated refs/heads/main.
```

#### 安全合併的策略

`--no-commit` 選項會合併但不會自動提交，給使用者在提交前檢查和修改的機會。`--no-ff` 會留下功能分支存在過的證據，保持歷史記錄一致。

```sh
(main)$ git merge --no-ff --no-commit my-branch
```

#### 我需要將整個分支合併成單一提交

```sh
(main)$ git merge --squash my-branch
```

#### 我只想組合未推送的提交

假設在推送到上游前，你有幾個在製的提交，這時候不希望把已推送的提交也組合進來，因為其他人可能已經有提交引用它們了。

```sh
(main)$ git rebase -i @{u}
```

這會進行一次互動式重定基底，只會列出還沒推送的提交。對這些提交重新排序或做 `squash`、`fixup` 都是安全的。

#### 我需要中止合併

有時合併會導致某些檔案有問題，這種情況下可以用 `--abort` 選項中止衝突解決，嘗試回復到先前的狀態。

```sh
$ git merge --abort
```

此命令在 Git 1.7.4 及以後可用。

### 我需要更新分支的親代提交

假設有分支：
  * `main`
  * `feature-1`，從 `main` 分支出來
  * `feature-2`，從 `feature-1` 延伸出來

如果在 `feature-1` 上提交，`feature-2` 的親代提交便不對了（因為是其的延伸，應該要在 `feature-1` 的頂端）。可以用 `git rebase --onto` 來修正這個問題。

```sh
(feature-2)$ git rebase --onto feature-1 [feature-2 上第一個不想帶來的提交] feature-2
```

如果你正在一個尚未合併的功能上編寫新的功能，而前者的漏洞修復需要反映到後者的分支，這會很有用。

### 檢查分支上的所有提交是否都合併了

要檢查一個分支上的所有提交是否都已經合併進了另一個分支，應該在這些分支的 `HEAD`（或任何提交）之間檢查差異：

```sh
(main)$ git log --graph --left-right --cherry-pick --oneline HEAD...feature/120-on-scroll
```

這會顯示一個分支有而另一個分支沒有的提交，和分支之間不共享的提交的列表。

另一個方法是：

```sh
(main)$ git log main ^feature/120-on-scroll --no-merges
```

### 互動式重定基底可能出現的問題

#### 編輯介面出現「noop」

如果你看到：

```
noop
```

表示重定基底的分支和目前分支在同一個提交，或領先目前分支。你可以嘗試：
  * 確保 `main` 分支沒有問題
  * 對 `HEAD~2` 或更早的提交重定基底

#### 衝突

如果不能成功的完成重定基底，你可能必須要解決衝突。

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

如果你想要保留其中一個分支的版本，你可以用 `--ours` 和 `--theirs`：

```sh
$ git checkout --ours README.md
```

* *合併*時，`--ours` 代表保留本機分支的更動，`--theirs` 則是另一個分支的更動。
* *重定基底*時，`--theirs` 代表保留本機分支的更動，`--ours` 則是另一個分支的更動。

關於為什麼互換了，參見 [Git 文件的此註記](https://git-scm.com/docs/git-rebase#Documentation/git-rebase.txt---merge)。

有時候衝突非常複雜，你可以使用可視化差異編輯器：

```sh
(main*)$ git mergetool -t opendiff
```

解決所有衝突後，加入變更了的檔案，然後用 `git rebase --continue` 繼續重定基底：

```sh
(my-branch)$ git add README.md
(my-branch)$ git rebase --continue
```

如果在解決所有衝突過後，得到了與提交前一樣的結果，可以使用 `git rebase --skip`。

如果想放棄重定基底，回到之前的狀態，可以在任何時候用：

```sh
(my-branch)$ git rebase --abort
```

## 貯存

### 貯存所有更動

貯存工作目錄下所有更動：

```sh
$ git stash
```

也貯存未追蹤的檔案：

```sh
$ git stash -u
```

### 貯存指定檔案

貯存一個檔案：

```sh
$ git stash push working-directory-path/filename.ext
```

貯存多個檔案：

```sh
$ git stash push working-directory-path/filename1.ext working-directory-path/filename2.ext
```

### 貯存時附加訊息

```sh
$ git stash save <message>
```

或

```sh
$ git stash push -m <message>
```

如此可以在使用 `stash list` 時看到訊息。

### 套用指定貯存

先列出貯存：

```sh
$ git stash list
```

然後，將以下命令的 `n` 替換成貯存在堆疊中的位置（最上方為 `0`），套用指定貯存：

```sh
$ git stash apply "stash@{n}"
```

除此之外，也可以使用時間標記（假如你能記住的話），如：

```sh
$ git stash apply "stash@{2.hours.ago}"
```

### 貯存時保留未暫存的內容

你需要先手動創建一個貯存提交，然後使用 `git stash store`。

```sh
$ git stash create
$ git stash store -m "commit-message" CREATED_SHA1
```

## 尋找

### 我想找到引入特定字串的提交

```sh
$ git log -S [要尋找的字串]
```

常見的選項：
  * `--source` 顯示引用名稱。
  * `--all` 尋找每個分支。
  * `--reverse` 以相反順序印出，即第一個為最早如此變更的提交。

### 我想找到特定作者／提交者的提交

尋找特定作者／提交者的提交：

```sh
$ git log --author=[名字或 email]
$ git log --committer=[名字或 email]
```

注意作者與提交者並不相同，`--author` 是寫下程式碼的人，`--committer` 則是提交程式碼的人。

### 我想找到包含特定檔案的提交

```sh
$ git log -- [檔案路徑]
```

也可以在檔案路徑中使用萬用字元，如：

```sh
$ git log -- **/*.js
```

使用萬用字元時，以 `--name-status` 列出提交的檔案會有幫助：

```sh
$ git log --name-status -- **/*.js
```

### 我想找到特定函式的歷史記錄

```sh
$ git log -L :[函式名稱]:[檔案路徑]
```

也可以結合其他 `git log` 選項使用，例如[修訂版範圍](https://git-scm.com/docs/gitrevisions)和[提交限制](https://git-scm.com/docs/git-log/#_commit_limiting)。

### 我想找到引用特定提交的標籤

```sh
$ git tag --contains [提交]
```

## 子模組

### 複製所有子模組

```sh
$ git clone --recursive git://github.com/foo/bar.git
```

如果已經複製了：

```sh
$ git submodule update --init --recursive
```

### 移除子模組

創建子模組很直覺，但刪除不是，你需要：

```sh
$ git submodule deinit [子模組名稱]
$ git rm [子模組名稱]
$ git rm --cached [子模組名稱]
$ rm -rf .git/modules/[子模組名稱]
```

## 雜項

### 從另一個分支拷貝檔案

```sh
$ git checkout [分支] -- [檔案名稱]
```

### 恢復刪除的檔案

先找到該檔案最後存在的提交：

```sh
$ git rev-list -n 1 HEAD -- [檔案名稱]
```

然後簽出該檔案：

```sh
$ git checkout [刪除檔案的提交]^ -- [檔案名稱]
```

### 刪除標籤

```sh
$ git tag -d [標籤名稱]
$ git push [遠端] :refs/tags/[標籤名稱]
```

### 恢復已刪除標籤

如果想恢復一個已刪除標籤，首先，找到無法觸及的標籤：

```sh
$ git fsck --unreachable | grep tag
```

記下這個標籤的雜湊值，然後用 [`git update-ref`](http://git-scm.com/docs/git-update-ref)：

```sh
$ git update-ref refs/tags/[標籤名稱] [雜湊值]
```

### 已刪除修補檔

如果有人在 GitHub 上向你提出了拉取請求，但他接著刪除了他的分叉，因為 [`.diff` 和 `.patch` URL](https://github.com/blog/967-github-secrets) 失效，你無法複製他的提交或使用 `git am`。但你可以透過 [GitHub 的特殊引用](https://gist.github.com/piscisaureus/3342247)簽出拉取請求本身。例如將拉取請求 #1 的內容抓取到名為 `pr_1` 的新分支：

```sh
$ git fetch [遠端] refs/pull/1/head:pr_1
From github.com:foo/bar
 * [new ref]         refs/pull/1/head -> pr_1
```

### 將版本庫導出為 Zip 檔

```sh
$ git archive --format zip --output [zip 的完整檔案路徑] main
```

### 推送有相同名稱的分支與標籤

如果遠端有與分支同名的標籤，若試圖以標準的 `git push [遠端] [分支]` 命令推送該分支時會得到以下錯誤：

```sh
$ git push [遠端] [分支]
error: dst refspec same matches more than one.
error: failed to push some refs to '<git server>'
```

指明要推送 `HEAD` 引用來修正這個問題：

```sh
$ git push [遠端] refs/heads/[分支名稱]
```

相對地，推送標籤使用：

```sh
$ git push [遠端] refs/tags/[標籤名稱]
```

## 追蹤檔案

### 我只想改變一個檔案名稱的大小寫，而不修改內容

```sh
(main)$ git mv --force [原名稱] [新名稱]
```

### 我想在拉取時覆蓋本機檔案

```sh
(main)$ git fetch --all
(main)$ git reset --hard origin/main
```

### 我想將檔案從 Git 移除，但保留檔案

```sh
(main)$ git rm --cached [檔案名稱]
```

### 我想將特定檔案還原至某個修訂版

```sh
$ git checkout [提交] -- [檔案名稱]
```

還原多個檔案：

```sh
$ git checkout [提交] -- [檔案名稱1] [檔案名稱2]
```

### 我想列出提交或分支之間特定檔案的差異

```sh
$ git diff [提交1]:[檔案名稱] [提交2]:[檔案名稱]
# 或
$ git diff [提交1] [提交2] -- [檔案名稱]
```

當然，也可以用分支名稱來表示分支頂端的提交。

### 我想 Git 忽略特定檔案的更動

這可以用於不應該提交的組態模板或其他需在本機加入憑證的檔案。

```sh
$ git update-index --assume-unchanged [要忽略的檔案]
```

注意，這*並不會*將檔案從版本控制移除——只是在本機上忽略。要取消這個設定，以下命令清除此旗標：

```sh
$ git update-index --no-assume-unchanged [要取消忽略的檔案]
```

## 用 Git 除錯

[`git bisect`](https://git-scm.com/docs/git-bisect) 命令透過二分搜尋找到哪個提交引入了漏洞。

假設你在 `main` 分支上，想找到哪個提交導致程式出錯。你開始二分搜尋：

```sh
$ git bisect start
```

接著你應該指定哪個提交已經包含了這個漏洞，哪個沒有。例如，你目前所在的修訂版是壞的，而 `v1.1.1` 是好的：

```sh
$ git bisect bad
$ git bisect good v1.1.1
```

接著 Git 會簽出你提供的範圍中間的提交，並詢問該提交是好是壞。你應該會看到類似這樣的訊息：

```sh
Bisecting: 5 revision left to test after this (roughly 5 step)
[c44abbbee29cb93d8499283101fe7c8d9d97f0fe] Commit message
(c44abbb)$
```

然後你可以檢查這個提交是好是壞。然後用以下命令告訴 Git：

```sh
$ git bisect good # 如果是好的。
$ git bisect bad  # 如果是壞的。
```

Git 會從範圍中選擇另一個提交，這個過程將重複直到沒有剩下的修訂版需要檢查，而命令最後會印出**第一個**壞提交。

## 組態

### 我想為 Git 命令設定別名

在 OS X 和 Linux 下，Git 組態檔案位於 `~/.gitconfig`。可以在 `[alias]` 部分設定一些快捷別名（以及容易拼錯的），如：

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

### 我想將空目錄加入到版本庫

你無法這麼做！Git 不支援，但有一個技巧——你可以在該目錄創建包含以下內容的 `.gitignore` 檔案：

```
# 忽略這個目錄中所有檔案。
.
# 除了這個檔案自身。
!.gitignore
```

另一個慣例是在該目錄中創建一個名為 `.gitkeep` 的空檔案：

```sh
$ mkdir 空目錄
$ touch 空目錄/.gitkeep
```

你也可以改稱其為 `.keep`，將第二個命令改為 `touch 空目錄/.keep` 即可。

### 我想快取一個版本庫的使用者名稱和密碼

假設有一個版本庫需要身分認證，這時你可以快取使用者名稱和密碼，而不用每次推送和拉取時都輸入一次。憑證協助程式可以做到這點：

```sh
# 設定 Git 使用憑證記憶快取。
$ git config --global credential.helper cache
```

```sh
# 設定快取在 1 小時後過期（以秒為單位）。
$ git config --global credential.helper 'cache --timeout=3600'
```

顯示可能的憑證協助程式：

```sh
$ git help -a | grep credential
```

作業系統特定的憑證快取協助程式：

```sh
# OS X：
$ git config --global credential.helper osxkeychain
```

```sh
# Windows 2.7.3+：
$ git config --global credential.helper manager
```

```sh
# Ubuntu 或其他使用 GNOME 的發行版：
$ git config --global credential.helper gnome-keyring
```

其他作業系統和發行版可能有不同的協助程式。

### 我想 Git 忽略權限與檔案模式更動

```sh
$ git config core.fileMode false
```

如果要設定為目前登入的使用者的預設行為：

```sh
$ git config --global core.fileMode false
```

### 我想設定全域使用者資訊

設定跨版本庫的使用者資訊：

```sh
$ git config --global user.name [名字]
$ git config --global user.email [email]
```

## 我不知道我做錯了什麼

如果你把事情搞砸了：你錯誤地重設、合併、或強制推送後，找不到自己的提交了；抑或你做得很好，但你想回到以前的某個狀態。

這時 `git reflog` 就派上用場了。`reflog` 記錄對分支頂端的任何改變，即使沒有任何分支或標籤參考那個頂端。基本上，只要 `HEAD` 改變，`reflog` 就會記錄下來。然而，這只能用於本機分支，且它只追蹤動作（例如，不會追蹤一個沒被記錄的檔案的任何改變）。

```sh
(main)$ git reflog
0a2e358 HEAD@{0}: reset: moving to HEAD~2
0254ea7 HEAD@{1}: checkout: moving from 2.2 to main
c10f740 HEAD@{2}: checkout: moving from main to 2.2
```

上面的 `reflog` 顯示了曾經從 `main` 分支簽出到 `2.2` 分支，然後再簽出回去，還有硬性重設到一個較舊的提交。最新的動作出現在最上面，並以 `HEAD@{0}` 標示。

如果你不小心移回了提交，`reflog` 會包含移回前 `main` 參考的提交（在這個例子中是 `0254ea7`）。只要硬性重設就能恢復到之前的狀態，這提供了歷史記錄不小心被變更時的安全網。

```sh
$ git reset --hard 0254ea7
```

摘自[這裡](https://www.atlassian.com/git/tutorials/rewriting-history/git-reflog)。

## Git 快捷命令

### Git Bash

如果你已經很熟悉以上命令的用法了，你可能會想創建一些快捷方式，讓你可以用很短的命令完成複雜的任務。

```sh
alias sq=squash

function squash() {
    git rebase -i HEAD~$1
}
```

將以上命令複製至你的 `.bashrc` 或 `.bash_profile`。

### Windows 上的 PowerShell

Windows 上的 PowerShell 也可以設定別名與函式。將以下命令加到你位於 `$profile` 變數的設定檔，詳見微軟文件網頁的 [關於設定檔](https://learn.microsoft.com/zh-tw/powershell/module/microsoft.powershell.core/about/about_profiles)。

```powershell
Set-Alias sq Squash-Commit

function Squash-Commit {
    git rebase -i HEAD~$1
}
```

# 其他資源

## 書籍

* [Learn Enough Git to Be Dangerous](https://www.learnenough.com/git-tutorial)——Michael Hartl 所著的從基礎開始的 Git 書籍
* [Pro Git](https://git-scm.com/book/en/v2)——Scott Chacon 與 Ben Straub 合著的傑出書籍
* [Git Internals](https://github.com/pluralsight/git-internals-pdf)——Scott Chacon 的另一本傑出書籍
* [Nasa Handbook](https://www.nasa.gov/sites/default/files/atoms/files/nasa_systems_engineering_handbook.pdf)

## 教學

* [19 Git Tips For Everyday Use](https://www.alexkras.com/19-git-tips-for-everyday-use)——實用的 Git 一行命令列表
* [Atlassian's Git tutorial](https://www.atlassian.com/git/tutorials)——從初學到熟練，正確掌握 Git 的教學
* [Learn Git branching](https://learngitbranching.js.org/)——分支、合併、重定基底的互動式網頁教學
* [Getting solid at Git rebase vs. merge](https://medium.com/@porteneuve/getting-solid-at-git-rebase-vs-merge-4fa1a48c53aa)
* [Git Commands and Best Practices Cheat Sheet](https://zeroturnaround.com/rebellabs/git-commands-and-best-practices-cheat-sheet)——一篇部落格中的 Git 小抄與更多解釋
* [Git from the inside out](https://codewords.recurse.com/issues/two/git-from-the-inside-out)——深度探討 Git 內部的教學
* [git-workflow](https://github.com/asmeurer/git-workflow) - [Aaron Meurer](https://github.com/asmeurer)——如何用 Git 貢獻開源版本庫
* [GitHub as a workflow](https://hugogiraudel.com/2015/08/13/github-as-a-workflow/)——將 GitHub 用作工作流程的有趣做法，尤其是空 PR
* [Githug](https://github.com/Gazler/githug)——學習常見 Git 工作流程的遊戲
* [learnGitBranching](https://github.com/pcottle/learnGitBranching)——用於挑戰與教育的互動式 Git 可視化！

## 腳本和工具

* [firstaidgit.io](http://firstaidgit.io/)——一個可搜尋的 Git 常見問題集
* [git-extra-commands](https://github.com/unixorn/git-extra-commands)——一堆有用的額外 Git 腳本
* [git-extras](https://github.com/tj/git-extras)——Git 工具集，版本庫概要、repl、歷史記錄、提交百分比和更多
* [git-fire](https://github.com/qw3rtman/git-fire)——git-fire 是一個 Git 插件，用於在緊急情況下幫助加入目前所有檔案、提交、推送到一個新分支（防止合併衝突）。
* [git-tips](https://github.com/git-tips/tips)——Git 小撇步
* [git-town](https://github.com/Originate/git-town)——通用、高級 Git 工作流程支援！<http://www.git-town.com>

## GUI 客戶端

* [GitKraken](https://www.gitkraken.com/)——豪華的 Git 客戶端，適用於 Windows、Mac、Linux
* [git-cola](https://git-cola.github.io/)——又一個 Git 客戶端，適用於 Windows、OS X
* [GitUp](https://github.com/git-up/GitUp)——一個新的 Git 客戶端，在解決 Git 的複雜問題上有自己的特點
* [gitx-dev](https://rowanj.github.io/gitx/)——又一個圖形化的 Git 客戶端，適用於 OS X
* [Sourcetree](https://www.sourcetreeapp.com/)——簡單而強大的免費 Git GUI 客戶端，適用於 Windows、OS X
* [Tower](http://www.git-tower.com/)——圖形化 Git 客戶端，適用於 OS X（付費）
* [tig](https://jonas.github.io/tig/)——Git 的終端文本模式介面
* [Magit](https://magit.vc/)——Emacs 的 Git 介面
* [GitExtensions](https://github.com/gitextensions/gitextensions)——殼層插件、Visual Studio 2010-2015 插件、獨立的 Git 版本庫工具
* [Fork](https://git-fork.com/)——快速且友善的 Git 客戶端，適用於 Mac（beta）
* [gmaster](https://gmaster.io/)——包含三路合併、分析重構、語意化差異、合併等的 Git 客戶端，適用於 Windows（beta）
* [gitk](https://git-scm.com/docs/gitk)——可以簡單查看版本庫狀態的 Git 客戶端，適用於 Linux
* [SublimeMerge](https://www.sublimemerge.com/)——極速、可擴展的客戶端，有三路合併、強大的搜尋、語法高亮功能，活躍開發中

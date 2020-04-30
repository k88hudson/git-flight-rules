# 깃을 위한 flight rules

🌍
*[English](README.md) ∙ [Español](README_es.md)  ∙  [Русский](README_ru.md) ∙ [简体中文](README_zh-CN.md)∙ [한국어](README_kr.md)  ∙  [Tiếng Việt](README_vi.md) ∙ [Français](README_fr.md) ∙ [日本語](README_ja.md)*

#### flight rules 가 뭐야?

뭔가 잘못 됐을 때 뭘 해야할지에 대한 우주비행사를 위한 가이드 (여기선 깃을 쓰는 개발자를 위한) 


>  *Flight Rules* 는 어떤 문제 X가 발생한 이유와 그 단계의 매뉴얼에서 어렵사리 얻은 지식이에요. 기본적으로 각 시나리오의 매우 자세하고 구체적인 운영 절차랍니다. [...]

> NASA는 수성(Mercury) 시대 때 지상팀에서 처음으로 "lessons learned" 이란 것을 모았는데 수천개의 문제의 상황들, 부서진 해치 손잡이로 인한 엔진 고장부터 컴퓨터 문제 그리고 그 해답까지, 1960년대 초부터 우리의 실수들, 재앙들, 해결책 등이  목록화 돼있어요. 

— Chris Hadfield, *인생을 위한 우주비행사의 가이드*.

#### 이 문서의 규칙

명확하게 하기 위해 이 문서의 모든 예제는 현재 브랜치를 표시하고 스테이지에 변경이 있는지를 나타내기 위해 커스텀 된 배시 프롬프트를 써요. 브랜치는 괄호 안에 있고, 브랜치 다음의 *는 스테이지의 변경된 것을 나타내요.  

[![Join the chat at https://gitter.im/k88hudson/git-flight-rules](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/k88hudson/git-flight-rules?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

  - [레파지토리](#%EB%A0%88%ED%8C%8C%EC%A7%80%ED%86%A0%EB%A6%AC)
    - [로컬 레파지토리에서 시작하고 싶어](#%EB%A1%9C%EC%BB%AC-%EB%A0%88%ED%8C%8C%EC%A7%80%ED%86%A0%EB%A6%AC%EC%97%90%EC%84%9C-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [난 리모트 레파지토리를 복제해오고 싶어](#%EB%82%9C-%EB%A6%AC%EB%AA%A8%ED%8A%B8-%EB%A0%88%ED%8C%8C%EC%A7%80%ED%86%A0%EB%A6%AC%EB%A5%BC-%EB%B3%B5%EC%A0%9C%ED%95%B4%EC%98%A4%EA%B3%A0-%EC%8B%B6%EC%96%B4)
  - [커밋 수정](#%EC%BB%A4%EB%B0%8B-%EC%88%98%EC%A0%95)
    - [내가 방금 어떤 커밋을 남겼지?](#%EB%82%B4%EA%B0%80-%EB%B0%A9%EA%B8%88-%EC%96%B4%EB%96%A4-%EC%BB%A4%EB%B0%8B%EC%9D%84-%EB%82%A8%EA%B2%BC%EC%A7%80)
    - [커밋 메세지를 잘못 썼어](#%EC%BB%A4%EB%B0%8B-%EB%A9%94%EC%84%B8%EC%A7%80%EB%A5%BC-%EC%9E%98%EB%AA%BB-%EC%8D%BC%EC%96%B4)
    - [커밋을 다른 이름과 이메일 설정으로 해버렸어](#%EC%BB%A4%EB%B0%8B%EC%9D%84-%EB%8B%A4%EB%A5%B8-%EC%9D%B4%EB%A6%84%EA%B3%BC-%EC%9D%B4%EB%A9%94%EC%9D%BC-%EC%84%A4%EC%A0%95%EC%9C%BC%EB%A1%9C-%ED%95%B4%EB%B2%84%EB%A0%B8%EC%96%B4)
    - [지난 커밋에서 파일 하나를 지우고 싶어](#%EC%A7%80%EB%82%9C-%EC%BB%A4%EB%B0%8B%EC%97%90%EC%84%9C-%ED%8C%8C%EC%9D%BC-%ED%95%98%EB%82%98%EB%A5%BC-%EC%A7%80%EC%9A%B0%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [마지막 커밋을 지우고 싶어](#%EB%A7%88%EC%A7%80%EB%A7%89-%EC%BB%A4%EB%B0%8B%EC%9D%84-%EC%A7%80%EC%9A%B0%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [임의적인 커밋 지우기](#%EC%9E%84%EC%9D%98%EC%A0%81%EC%9D%B8-%EC%BB%A4%EB%B0%8B-%EC%A7%80%EC%9A%B0%EA%B8%B0)
    - [수정된 커밋을 푸시했는데, 에러 메세지가 떠](#%EC%88%98%EC%A0%95%EB%90%9C-%EC%BB%A4%EB%B0%8B%EC%9D%84-%ED%91%B8%EC%8B%9C%ED%96%88%EB%8A%94%EB%8D%B0-%EC%97%90%EB%9F%AC-%EB%A9%94%EC%84%B8%EC%A7%80%EA%B0%80-%EB%96%A0)
    - [하드 리셋을 해버렸는데 되돌리고 싶어](#%ED%95%98%EB%93%9C-%EB%A6%AC%EC%85%8B%EC%9D%84-%ED%95%B4%EB%B2%84%EB%A0%B8%EB%8A%94%EB%8D%B0-%EB%90%98%EB%8F%8C%EB%A6%AC%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [머지를 실수로 커밋, 푸시해버렸어](#%EB%A8%B8%EC%A7%80%EB%A5%BC-%EC%8B%A4%EC%88%98%EB%A1%9C-%EC%BB%A4%EB%B0%8B-%ED%91%B8%EC%8B%9C%ED%95%B4%EB%B2%84%EB%A0%B8%EC%96%B4)
  - [스테이지](#%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%A7%80)
    - [지난 커밋에 스테이지 변경점을 추가하고 싶어](#%EC%A7%80%EB%82%9C-%EC%BB%A4%EB%B0%8B%EC%97%90-%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%A7%80-%EB%B3%80%EA%B2%BD%EC%A0%90%EC%9D%84-%EC%B6%94%EA%B0%80%ED%95%98%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [전체가 아닌 새 파일만 스테이지에 올리고 싶어](#%EC%A0%84%EC%B2%B4%EA%B0%80-%EC%95%84%EB%8B%8C-%EC%83%88-%ED%8C%8C%EC%9D%BC%EB%A7%8C-%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%A7%80%EC%97%90-%EC%98%AC%EB%A6%AC%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [하나의 파일 변경점을 두개의 다른 커밋에 남기고 싶어](#%ED%95%98%EB%82%98%EC%9D%98-%ED%8C%8C%EC%9D%BC-%EB%B3%80%EA%B2%BD%EC%A0%90%EC%9D%84-%EB%91%90%EA%B0%9C%EC%9D%98-%EB%8B%A4%EB%A5%B8-%EC%BB%A4%EB%B0%8B%EC%97%90-%EB%82%A8%EA%B8%B0%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [아직 스테이지에 안 올라간 변경점을 스테이지에 추가하고, 스테이지에 있는 변경점을 다시 빼고 싶어](#%EC%95%84%EC%A7%81-%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%A7%80%EC%97%90-%EC%95%88-%EC%98%AC%EB%9D%BC%EA%B0%84-%EB%B3%80%EA%B2%BD%EC%A0%90%EC%9D%84-%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%A7%80%EC%97%90-%EC%B6%94%EA%B0%80%ED%95%98%EA%B3%A0-%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%A7%80%EC%97%90-%EC%9E%88%EB%8A%94-%EB%B3%80%EA%B2%BD%EC%A0%90%EC%9D%84-%EB%8B%A4%EC%8B%9C-%EB%B9%BC%EA%B3%A0-%EC%8B%B6%EC%96%B4)
  - [스테이지 전의 변경점](#%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%A7%80-%EC%A0%84%EC%9D%98-%EB%B3%80%EA%B2%BD%EC%A0%90)
    - [스테이지 전의 변경점을 새 브랜치로 옮기고 싶어](#%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%A7%80-%EC%A0%84%EC%9D%98-%EB%B3%80%EA%B2%BD%EC%A0%90%EC%9D%84-%EC%83%88-%EB%B8%8C%EB%9E%9C%EC%B9%98%EB%A1%9C-%EC%98%AE%EA%B8%B0%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [스테이지전 변경점을 만들어둔 다른 브랜치로 옮기고 싶어](#%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%A7%80%EC%A0%84-%EB%B3%80%EA%B2%BD%EC%A0%90%EC%9D%84-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%91%94-%EB%8B%A4%EB%A5%B8-%EB%B8%8C%EB%9E%9C%EC%B9%98%EB%A1%9C-%EC%98%AE%EA%B8%B0%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [내 로컬에 있는 커밋 안된 변경점을 다 무시하고 싶어 (스테이징 됐던 안됐던)](#%EB%82%B4-%EB%A1%9C%EC%BB%AC%EC%97%90-%EC%9E%88%EB%8A%94-%EC%BB%A4%EB%B0%8B-%EC%95%88%EB%90%9C-%EB%B3%80%EA%B2%BD%EC%A0%90%EC%9D%84-%EB%8B%A4-%EB%AC%B4%EC%8B%9C%ED%95%98%EA%B3%A0-%EC%8B%B6%EC%96%B4-%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%A7%95-%EB%90%90%EB%8D%98-%EC%95%88%EB%90%90%EB%8D%98)
    - [스테이지 안된 특정 변경점을 지우고 싶어](#%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%A7%80-%EC%95%88%EB%90%9C-%ED%8A%B9%EC%A0%95-%EB%B3%80%EA%B2%BD%EC%A0%90%EC%9D%84-%EC%A7%80%EC%9A%B0%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [스테이지 안된 특정 파일을 지우고 싶어](#%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%A7%80-%EC%95%88%EB%90%9C-%ED%8A%B9%EC%A0%95-%ED%8C%8C%EC%9D%BC%EC%9D%84-%EC%A7%80%EC%9A%B0%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [로컬에 있는 스테이지 안된 변경점만 지우고 싶어](#%EB%A1%9C%EC%BB%AC%EC%97%90-%EC%9E%88%EB%8A%94-%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%A7%80-%EC%95%88%EB%90%9C-%EB%B3%80%EA%B2%BD%EC%A0%90%EB%A7%8C-%EC%A7%80%EC%9A%B0%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [트래킹 안된 파일들 다 지우고 싶어](#%ED%8A%B8%EB%9E%98%ED%82%B9-%EC%95%88%EB%90%9C-%ED%8C%8C%EC%9D%BC%EB%93%A4-%EB%8B%A4-%EC%A7%80%EC%9A%B0%EA%B3%A0-%EC%8B%B6%EC%96%B4)
  - [브랜치](#%EB%B8%8C%EB%9E%9C%EC%B9%98)
    - [모든 브랜치 리스트를 보고 싶어](#%EB%AA%A8%EB%93%A0-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EB%A6%AC%EC%8A%A4%ED%8A%B8%EB%A5%BC-%EB%B3%B4%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [커밋에서 브랜치 만들기](#%EC%BB%A4%EB%B0%8B%EC%97%90%EC%84%9C-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EB%A7%8C%EB%93%A4%EA%B8%B0)
    - [다른 브랜치에서 풀을 받아와버렸어](#%EB%8B%A4%EB%A5%B8-%EB%B8%8C%EB%9E%9C%EC%B9%98%EC%97%90%EC%84%9C-%ED%92%80%EC%9D%84-%EB%B0%9B%EC%95%84%EC%99%80%EB%B2%84%EB%A0%B8%EC%96%B4)
    - [로컬의 커밋을 지워서 서버에 있는 내 브랜치와 맞추고 싶어](#%EB%A1%9C%EC%BB%AC%EC%9D%98-%EC%BB%A4%EB%B0%8B%EC%9D%84-%EC%A7%80%EC%9B%8C%EC%84%9C-%EC%84%9C%EB%B2%84%EC%97%90-%EC%9E%88%EB%8A%94-%EB%82%B4-%EB%B8%8C%EB%9E%9C%EC%B9%98%EC%99%80-%EB%A7%9E%EC%B6%94%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [새 브랜치 대신에 마스터에 커밋을 해버렸어](#%EC%83%88-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EB%8C%80%EC%8B%A0%EC%97%90-%EB%A7%88%EC%8A%A4%ED%84%B0%EC%97%90-%EC%BB%A4%EB%B0%8B%EC%9D%84-%ED%95%B4%EB%B2%84%EB%A0%B8%EC%96%B4)
    - [다른 레퍼런스 같은 곳에서 모든 파일을 유지하고 싶어](#%EB%8B%A4%EB%A5%B8-%EB%A0%88%ED%8D%BC%EB%9F%B0%EC%8A%A4-%EA%B0%99%EC%9D%80-%EA%B3%B3%EC%97%90%EC%84%9C-%EB%AA%A8%EB%93%A0-%ED%8C%8C%EC%9D%BC%EC%9D%84-%EC%9C%A0%EC%A7%80%ED%95%98%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [한 브랜치에 다른 브랜치에 남겼어야 하는 커밋을 여러개 남겼어](#%ED%95%9C-%EB%B8%8C%EB%9E%9C%EC%B9%98%EC%97%90-%EB%8B%A4%EB%A5%B8-%EB%B8%8C%EB%9E%9C%EC%B9%98%EC%97%90-%EB%82%A8%EA%B2%BC%EC%96%B4%EC%95%BC-%ED%95%98%EB%8A%94-%EC%BB%A4%EB%B0%8B%EC%9D%84-%EC%97%AC%EB%9F%AC%EA%B0%9C-%EB%82%A8%EA%B2%BC%EC%96%B4)
    - [업스트림에선 지워진 로컬 브랜치를 지우고 싶어](#%EC%97%85%EC%8A%A4%ED%8A%B8%EB%A6%BC%EC%97%90%EC%84%A0-%EC%A7%80%EC%9B%8C%EC%A7%84-%EB%A1%9C%EC%BB%AC-%EB%B8%8C%EB%9E%9C%EC%B9%98%EB%A5%BC-%EC%A7%80%EC%9A%B0%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [브랜치를 지워버렸어](#%EB%B8%8C%EB%9E%9C%EC%B9%98%EB%A5%BC-%EC%A7%80%EC%9B%8C%EB%B2%84%EB%A0%B8%EC%96%B4)
    - [브랜치를 지우고 싶어](#%EB%B8%8C%EB%9E%9C%EC%B9%98%EB%A5%BC-%EC%A7%80%EC%9A%B0%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [여러개의 브랜치를 지우고 싶어](#%EC%97%AC%EB%9F%AC%EA%B0%9C%EC%9D%98-%EB%B8%8C%EB%9E%9C%EC%B9%98%EB%A5%BC-%EC%A7%80%EC%9A%B0%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [브랜치 이름을 바꾸고 싶어](#%EB%B8%8C%EB%9E%9C%EC%B9%98-%EC%9D%B4%EB%A6%84%EC%9D%84-%EB%B0%94%EA%BE%B8%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [다른 사람이 작업중인 리모트 브랜치로 체크아웃 하고 싶어](#%EB%8B%A4%EB%A5%B8-%EC%82%AC%EB%9E%8C%EC%9D%B4-%EC%9E%91%EC%97%85%EC%A4%91%EC%9D%B8-%EB%A6%AC%EB%AA%A8%ED%8A%B8-%EB%B8%8C%EB%9E%9C%EC%B9%98%EB%A1%9C-%EC%B2%B4%ED%81%AC%EC%95%84%EC%9B%83-%ED%95%98%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [현재 로컬 브랜치로 새로운 리모트 브랜치를 만들고 싶어](#%ED%98%84%EC%9E%AC-%EB%A1%9C%EC%BB%AC-%EB%B8%8C%EB%9E%9C%EC%B9%98%EB%A1%9C-%EC%83%88%EB%A1%9C%EC%9A%B4-%EB%A6%AC%EB%AA%A8%ED%8A%B8-%EB%B8%8C%EB%9E%9C%EC%B9%98%EB%A5%BC-%EB%A7%8C%EB%93%A4%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [리모트 브랜치를 로컬 브랜치를 위한 업스트림으로 설정하고 싶어](#%EB%A6%AC%EB%AA%A8%ED%8A%B8-%EB%B8%8C%EB%9E%9C%EC%B9%98%EB%A5%BC-%EB%A1%9C%EC%BB%AC-%EB%B8%8C%EB%9E%9C%EC%B9%98%EB%A5%BC-%EC%9C%84%ED%95%9C-%EC%97%85%EC%8A%A4%ED%8A%B8%EB%A6%BC%EC%9C%BC%EB%A1%9C-%EC%84%A4%EC%A0%95%ED%95%98%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [HEAD를 기본 리모트 브랜치로 트래킹하도록 설정하고 싶어](#head%EB%A5%BC-%EA%B8%B0%EB%B3%B8-%EB%A6%AC%EB%AA%A8%ED%8A%B8-%EB%B8%8C%EB%9E%9C%EC%B9%98%EB%A1%9C-%ED%8A%B8%EB%9E%98%ED%82%B9%ED%95%98%EB%8F%84%EB%A1%9D-%EC%84%A4%EC%A0%95%ED%95%98%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [다른 브랜치에 변경점을 잘못 남겼어](#%EB%8B%A4%EB%A5%B8-%EB%B8%8C%EB%9E%9C%EC%B9%98%EC%97%90-%EB%B3%80%EA%B2%BD%EC%A0%90%EC%9D%84-%EC%9E%98%EB%AA%BB-%EB%82%A8%EA%B2%BC%EC%96%B4)
  - [리베이스와 머지](#%EB%A6%AC%EB%B2%A0%EC%9D%B4%EC%8A%A4%EC%99%80-%EB%A8%B8%EC%A7%80)
    - [리베이스/머지 한 걸 되돌리고 싶어](#%EB%A6%AC%EB%B2%A0%EC%9D%B4%EC%8A%A4%EB%A8%B8%EC%A7%80-%ED%95%9C-%EA%B1%B8-%EB%90%98%EB%8F%8C%EB%A6%AC%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [리베이스를 했는데, 강제 푸시하고 싶진 않아](#%EB%A6%AC%EB%B2%A0%EC%9D%B4%EC%8A%A4%EB%A5%BC-%ED%96%88%EB%8A%94%EB%8D%B0-%EA%B0%95%EC%A0%9C-%ED%91%B8%EC%8B%9C%ED%95%98%EA%B3%A0-%EC%8B%B6%EC%A7%84-%EC%95%8A%EC%95%84)
    - [커밋끼리 합치고 싶어](#%EC%BB%A4%EB%B0%8B%EB%81%BC%EB%A6%AC-%ED%95%A9%EC%B9%98%EA%B3%A0-%EC%8B%B6%EC%96%B4)
      - [안전한 머지 전략](#%EC%95%88%EC%A0%84%ED%95%9C-%EB%A8%B8%EC%A7%80-%EC%A0%84%EB%9E%B5)
      - [브랜치를 커밋 하나로 머지해야해](#%EB%B8%8C%EB%9E%9C%EC%B9%98%EB%A5%BC-%EC%BB%A4%EB%B0%8B-%ED%95%98%EB%82%98%EB%A1%9C-%EB%A8%B8%EC%A7%80%ED%95%B4%EC%95%BC%ED%95%B4)
      - [푸시 되지 않은 커밋만 합치고 싶어](#%ED%91%B8%EC%8B%9C-%EB%90%98%EC%A7%80-%EC%95%8A%EC%9D%80-%EC%BB%A4%EB%B0%8B%EB%A7%8C-%ED%95%A9%EC%B9%98%EA%B3%A0-%EC%8B%B6%EC%96%B4)
      - [머지를 중단해야해](#%EB%A8%B8%EC%A7%80%EB%A5%BC-%EC%A4%91%EB%8B%A8%ED%95%B4%EC%95%BC%ED%95%B4)
    - [브랜치내 모든 커밋이 머지됐는지 확인해](#%EB%B8%8C%EB%9E%9C%EC%B9%98%EB%82%B4-%EB%AA%A8%EB%93%A0-%EC%BB%A4%EB%B0%8B%EC%9D%B4-%EB%A8%B8%EC%A7%80%EB%90%90%EB%8A%94%EC%A7%80-%ED%99%95%EC%9D%B8%ED%95%B4)
    - [대화형 리베이스로 발생가능한 이슈](#%EB%8C%80%ED%99%94%ED%98%95-%EB%A6%AC%EB%B2%A0%EC%9D%B4%EC%8A%A4%EB%A1%9C-%EB%B0%9C%EC%83%9D%EA%B0%80%EB%8A%A5%ED%95%9C-%EC%9D%B4%EC%8A%88)
      - [리베이스 편집 화면에서 'noop'](#%EB%A6%AC%EB%B2%A0%EC%9D%B4%EC%8A%A4-%ED%8E%B8%EC%A7%91-%ED%99%94%EB%A9%B4%EC%97%90%EC%84%9C-noop)
      - [충돌이 있어](#%EC%B6%A9%EB%8F%8C%EC%9D%B4-%EC%9E%88%EC%96%B4)
  - [스테이시](#%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%8B%9C)
    - [모든 변경점 스테이시 하기](#%EB%AA%A8%EB%93%A0-%EB%B3%80%EA%B2%BD%EC%A0%90-%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%8B%9C-%ED%95%98%EA%B8%B0)
    - [특정 파일들만 스테이시 하기](#%ED%8A%B9%EC%A0%95-%ED%8C%8C%EC%9D%BC%EB%93%A4%EB%A7%8C-%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%8B%9C-%ED%95%98%EA%B8%B0)
    - [메세지와 함께 스테이시 하기](#%EB%A9%94%EC%84%B8%EC%A7%80%EC%99%80-%ED%95%A8%EA%BB%98-%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%8B%9C-%ED%95%98%EA%B8%B0)
    - [특정 스테이시 목록에서 가져와 적용하기](#%ED%8A%B9%EC%A0%95-%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%8B%9C-%EB%AA%A9%EB%A1%9D%EC%97%90%EC%84%9C-%EA%B0%80%EC%A0%B8%EC%99%80-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)
  - [찾아보기](#%EC%B0%BE%EC%95%84%EB%B3%B4%EA%B8%B0)
    - [어떤 커밋에서 문자열을 찾고 싶어](#%EC%96%B4%EB%96%A4-%EC%BB%A4%EB%B0%8B%EC%97%90%EC%84%9C-%EB%AC%B8%EC%9E%90%EC%97%B4%EC%9D%84-%EC%B0%BE%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [작성자나 커미터를 찾고 싶어](#%EC%9E%91%EC%84%B1%EC%9E%90%EB%82%98-%EC%BB%A4%EB%AF%B8%ED%84%B0%EB%A5%BC-%EC%B0%BE%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [특정 파일이 포함된 커밋을 목록화 하고 싶어](#%ED%8A%B9%EC%A0%95-%ED%8C%8C%EC%9D%BC%EC%9D%B4-%ED%8F%AC%ED%95%A8%EB%90%9C-%EC%BB%A4%EB%B0%8B%EC%9D%84-%EB%AA%A9%EB%A1%9D%ED%99%94-%ED%95%98%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [커밋을 참조하는 태그를 찾고 싶어](#%EC%BB%A4%EB%B0%8B%EC%9D%84-%EC%B0%B8%EC%A1%B0%ED%95%98%EB%8A%94-%ED%83%9C%EA%B7%B8%EB%A5%BC-%EC%B0%BE%EA%B3%A0-%EC%8B%B6%EC%96%B4)
  - [서브모듈](#%EC%84%9C%EB%B8%8C%EB%AA%A8%EB%93%88)
    - [모든 서브모듈을 클론하기](#%EB%AA%A8%EB%93%A0-%EC%84%9C%EB%B8%8C%EB%AA%A8%EB%93%88%EC%9D%84-%ED%81%B4%EB%A1%A0%ED%95%98%EA%B8%B0)
    - [서브모듈 지우기](#%EC%84%9C%EB%B8%8C%EB%AA%A8%EB%93%88-%EC%A7%80%EC%9A%B0%EA%B8%B0)
  - [기타 항목들](#%EA%B8%B0%ED%83%80-%ED%95%AD%EB%AA%A9%EB%93%A4)
    - [지운 파일 복구하기](#%EC%A7%80%EC%9A%B4-%ED%8C%8C%EC%9D%BC-%EB%B3%B5%EA%B5%AC%ED%95%98%EA%B8%B0)
    - [태그 지우기](#%ED%83%9C%EA%B7%B8-%EC%A7%80%EC%9A%B0%EA%B8%B0)
    - [지워진 태그 복구하기](#%EC%A7%80%EC%9B%8C%EC%A7%84-%ED%83%9C%EA%B7%B8-%EB%B3%B5%EA%B5%AC%ED%95%98%EA%B8%B0)
    - [지워진 패치](#%EC%A7%80%EC%9B%8C%EC%A7%84-%ED%8C%A8%EC%B9%98)
    - [Zip파일로 레파지토리 추출하기](#zip%ED%8C%8C%EC%9D%BC%EB%A1%9C-%EB%A0%88%ED%8C%8C%EC%A7%80%ED%86%A0%EB%A6%AC-%EC%B6%94%EC%B6%9C%ED%95%98%EA%B8%B0)
  - [파일 추적하기](#%ED%8C%8C%EC%9D%BC-%EC%B6%94%EC%A0%81%ED%95%98%EA%B8%B0)
    - [파일 내용엔 변경이 없이 파일 이름을 앞글자만 대문자로 바꾸고 싶어](#%ED%8C%8C%EC%9D%BC-%EB%82%B4%EC%9A%A9%EC%97%94-%EB%B3%80%EA%B2%BD%EC%9D%B4-%EC%97%86%EC%9D%B4-%ED%8C%8C%EC%9D%BC-%EC%9D%B4%EB%A6%84%EC%9D%84-%EC%95%9E%EA%B8%80%EC%9E%90%EB%A7%8C-%EB%8C%80%EB%AC%B8%EC%9E%90%EB%A1%9C-%EB%B0%94%EA%BE%B8%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [깃 풀 받을때 로컬 파일을 덮어씌우고 싶어](#%EA%B9%83-%ED%92%80-%EB%B0%9B%EC%9D%84%EB%95%8C-%EB%A1%9C%EC%BB%AC-%ED%8C%8C%EC%9D%BC%EC%9D%84-%EB%8D%AE%EC%96%B4%EC%94%8C%EC%9A%B0%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [파일을 로컬에는 보관하고 깃에서 지우고 싶어](#%ED%8C%8C%EC%9D%BC%EC%9D%84-%EB%A1%9C%EC%BB%AC%EC%97%90%EB%8A%94-%EB%B3%B4%EA%B4%80%ED%95%98%EA%B3%A0-%EA%B9%83%EC%97%90%EC%84%9C-%EC%A7%80%EC%9A%B0%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [특정한 버전대로 파일을 복구하고 싶어](#%ED%8A%B9%EC%A0%95%ED%95%9C-%EB%B2%84%EC%A0%84%EB%8C%80%EB%A1%9C-%ED%8C%8C%EC%9D%BC%EC%9D%84-%EB%B3%B5%EA%B5%AC%ED%95%98%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [커밋과 브랜치 간의 특정 파일 변경 이력이 필요해](#%EC%BB%A4%EB%B0%8B%EA%B3%BC-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EA%B0%84%EC%9D%98-%ED%8A%B9%EC%A0%95-%ED%8C%8C%EC%9D%BC-%EB%B3%80%EA%B2%BD-%EC%9D%B4%EB%A0%A5%EC%9D%B4-%ED%95%84%EC%9A%94%ED%95%B4)
  - [설정](#%EC%84%A4%EC%A0%95)
    - [깃 명령어 몇 개를 앨리어스 등록하고 싶어](#%EA%B9%83-%EB%AA%85%EB%A0%B9%EC%96%B4-%EB%AA%87-%EA%B0%9C%EB%A5%BC-%EC%95%A8%EB%A6%AC%EC%96%B4%EC%8A%A4-%EB%93%B1%EB%A1%9D%ED%95%98%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [레파지토리에 빈 디렉토리를 추가하고 싶어](#%EB%A0%88%ED%8C%8C%EC%A7%80%ED%86%A0%EB%A6%AC%EC%97%90-%EB%B9%88-%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC%EB%A5%BC-%EC%B6%94%EA%B0%80%ED%95%98%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [레파지토리 유저명과 비밀번호를 캐시해두고 싶어](#%EB%A0%88%ED%8C%8C%EC%A7%80%ED%86%A0%EB%A6%AC-%EC%9C%A0%EC%A0%80%EB%AA%85%EA%B3%BC-%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8%EB%A5%BC-%EC%BA%90%EC%8B%9C%ED%95%B4%EB%91%90%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [깃이 권한과 파일모드 변경을 무시하게 만들고 싶어](#%EA%B9%83%EC%9D%B4-%EA%B6%8C%ED%95%9C%EA%B3%BC-%ED%8C%8C%EC%9D%BC%EB%AA%A8%EB%93%9C-%EB%B3%80%EA%B2%BD%EC%9D%84-%EB%AC%B4%EC%8B%9C%ED%95%98%EA%B2%8C-%EB%A7%8C%EB%93%A4%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [글로벌 유저로 설정해두고 싶어](#%EA%B8%80%EB%A1%9C%EB%B2%8C-%EC%9C%A0%EC%A0%80%EB%A1%9C-%EC%84%A4%EC%A0%95%ED%95%B4%EB%91%90%EA%B3%A0-%EC%8B%B6%EC%96%B4)
    - [깃에 명령어 색상을 넣고 싶어](#%EA%B9%83%EC%97%90-%EB%AA%85%EB%A0%B9%EC%96%B4-%EC%83%89%EC%83%81%EC%9D%84-%EB%84%A3%EA%B3%A0-%EC%8B%B6%EC%96%B4)
  - [뭘 잘못했는지 모르겠어](#%EB%AD%98-%EC%9E%98%EB%AA%BB%ED%96%88%EB%8A%94%EC%A7%80-%EB%AA%A8%EB%A5%B4%EA%B2%A0%EC%96%B4)
- [다른 리소스](#%EB%8B%A4%EB%A5%B8-%EB%A6%AC%EC%86%8C%EC%8A%A4)
  - [도서](#%EB%8F%84%EC%84%9C)
  - [튜토리얼](#%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC)
  - [스크립트와 도구](#%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%99%80-%EB%8F%84%EA%B5%AC)
  - [GUI 클라이언트](#gui-%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

폴더 이름이 리모트 레파지토리 이름과 같이 저장될 거에요. 

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

### 커밋 메세지를 잘못 썼어

만약 메시지를 잘못 썼고 아직 푸시를 안했다면, 커밋 메시지 바꾸기를 따라해 볼 수 있어요.

```sh
$ git commit --amend --only
```

이 방법은 편집 가능한 기본 텍스트 에디터가 열릴텐데요, 다른 방법으론 한줄에 쓸 수도 있어요.

```sh
$ git commit --amend --only -m 'xxxxxxx'
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
이 방법은 모든 지난 커밋 변경점으로 되돌아간 새 커밋을 만들 거에요. 또는, 만약 푸시한 브랜치가 리베이스에 안전하다면 (만약 다른 사람이 풀 받지 않는다면), `git push --force-with-lease` 명령어를 쓸수 있어요. 
더 알고 싶다면, [이 섹션](#deleteremove-last-pushed-commit)을 참고해주세요.

<a name="delete-any-commit"></a>
### 임의적인 커밋 지우기

이전과 동일한 경고에요. 가능한 이 방법은 쓰지 마세요.

```sh
$ git rebase --onto SHA1_OF_BAD_COMMIT^ SHA1_OF_BAD_COMMIT
$ git push --force-with-lease [remote] [branch]
```

아니면 [대화형 리베이스](#interactive-rebase)를 쓰고 지우고 싶은 커밋 라인을 지워도 돼요.

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

알아두세요, 리베이스(아래를 보세요)나 어멘드는 **기존 커밋을 새걸로 바꿔요**,
그래서 이미 먼저 수정된 커밋이 푸시됐다면 강제 푸시를 해야 해요.
이 방법을 쓸땐 조심하세요; *항상* 작업되는 브랜치가 맞나 확인해요!

```sh
(my-branch)$ git push origin mybranch --force-with-lease
```

일반적으로 강제 푸시를 쓰지 마세요.
새 커밋을 만들어서 푸시하는게 수정된 커밋을 강제로 푸시하는 것보다 훨씬 나아요. 그런 수정된 커밋은 그 브랜치나 다른 자식 브랜치를 쓰는 다른 개발자의 소스 이력과 충돌의 원인이 될거에요. 
`--force-with-lease` 는 여전히 실패할텐데, 누군가가 같은 브랜치를 쓴다면 변경점을 덮어쓰는 푸시를 할 수도 있어요.

절대로 아무도 같은 브랜치를 안 쓰거나, 절대로 브랜치에 업데이트를 해야할때 `--force` (`-f`) 옵션을 쓸 수 있지만 일반적으론 피하는게 좋아요.

<a href="undo-git-reset-hard"></a>
### 하드 리셋을 해버렸는데 되돌리고 싶어

만약 하드 리셋을 했다고 해도 커밋을 돌릴 순 있어요. 깃은 며칠간은 로그를 가지고 있거든요. 

알아두기 : 이건 커밋을 남겼거나 스테이시같이 백업을 했을 때만 유효해요. `git reset --hard` 은 커밋되지 않은 수정사항을 _다 지울 거에요_, 그러니 조심해서 써야해요. (안전한 방법으론 `git reset --keep` 이 있어요)

```sh
(master)$ git reflog
```

지난 커밋과 리셋을 위한 커밋을 볼 수 있을 거에요. 돌아가고 싶은 커밋의 SHA 코드를 골라서, 리셋을 해요:   

```sh
(master)$ git reset --hard SHA1234
```

계속 할 수 있을거에요.

<a href="undo-a-commit-merge"></a>
### 머지를 실수로 커밋, 푸시해버렸어

만약 실수로 머지할 준비가 안된 피쳐 브랜치를 메인 브랜치에 머지했어도 되돌릴 순 있어요.
하지만 문제는 있어요: 머지 커밋은 한개 이상의 부모(보통은 두 개)를 가지게 돼요.
 
사용하려면

```sh
(feature-branch)$ git revert -m 1 <commit>
```

여기서 -m 1 옵션은 부모 번호 1(머지가 만들어진 브랜치)을 되돌릴 상위 항목으로 선택하라고 해요. 

알아두기 : 부모 번호는 커밋 식별자가 아니고, 오히려 머지된 커밋이 `Merge: 8e2ce2d 86ac2e7` 이라는 라인을 가지고 있어요.
부모 번호는 이 라인에서 원하는 부모의 1 기반 인덱스이고, 첫번째 식별자는 1, 다음은 2 이렇게 이어져요.

## 스테이지

<a href="#i-need-to-add-staged-changes-to-the-previous-commit"></a>
### 지난 커밋에 스테이지 변경점을 추가하고 싶어

```sh
(my-branch*)$ git commit --amend
```

<a name="commit-partial-new-file"></a>
### 전체가 아닌 새 파일만 스테이지에 올리고 싶어

보통은 부분적으로 파일을 스테이지하려면 이렇게 해요: 

```sh
$ git add --patch filename.x
```

`-p`는 축약된 옵션이에요. 이 방식은 대화형 모드를 열텐데요. `s` 옵션을 쓰면 커밋을 나눌 수 있어요. 하지만 새 파일이라면 그런 옵션이 없을거에요. 새 파일을 추가하려면:

```sh
$ git add -N filename.x
```

그 다음 임의적으로 라인들을 골라 추가해주려면 `e`옵션이 필요할거에요. `git diff --cached`나 `git diff --staged`는 로컬에 저장된 부분과 스테이지에 있는 라인들을 비교해서 보여줄 거에요.

<a href="stage-in-two-commits"></a>
### 하나의 파일 변경점을 두개의 다른 커밋에 남기고 싶어

`git add`는 전체 파일들을 커밋에 추가해요. `git add -p`는 대화형으로 추가하고픈 변경점들을 고를 수 있어요.

<a href="unstaging-edits-and-staging-the-unstaged"></a>
### 아직 스테이지에 안 올라간 변경점을 스테이지에 추가하고, 스테이지에 있는 변경점을 다시 빼고 싶어

이건 좀 꼼수인데요, 스테이지 전인 파일들을 스테이시해서 빼두고선 리셋 할 수 있을거에요. 그 다음 스테이시를 다시 불러와 추가를 해요. 

```sh
$ git stash -k
$ git reset --hard
$ git stash pop
$ git add -A
```

## 스테이지 전의 변경점

<a href="move-unstaged-edits-to-new-branch"></a>
### 스테이지 전의 변경점을 새 브랜치로 옮기고 싶어

```sh
$ git checkout -b my-branch
```

<a href="move-unstaged-edits-to-old-branch"></a>
### 스테이지전 변경점을 만들어둔 다른 브랜치로 옮기고 싶어

```sh
$ git stash
$ git checkout my-branch
$ git stash pop
```

<a href="i-want-to-discard-my-local-uncommitted-changes"></a>
### 내 로컬에 있는 커밋 안된 변경점을 다 무시하고 싶어 (스테이징 됐던 안됐던)

만약 모든 스테이징 됐거나 안 된 변경점을 버리고 싶다면 이렇게 해요:

```sh
(my-branch)$ git reset --hard
# or
(master)$ git checkout -f
```

이 방법은 `git add`로 스테이징된 모든 파일이 빠지게 돼요. 

```sh
$ git reset
```

이 방법은 커밋되지 않은 모든 로컬 변경점이 되돌려 져요. (레파지토리 최상단 루트에서 실행해야 할거에요)

```sh
$ git checkout .
```

또 커밋되지 않은 변경점들 중 몇가지 파일이나 디렉토리만 되돌릴 수 있어요.

```sh
$ git checkout [some_dir|file.txt]
```

거기에 또 다른 되돌리는 방법으로 (타이핑 칠게 많지만 어떤 하위 디렉토리에서도 돼요):

```sh
$ git reset --hard HEAD
```

이 방법은 모든 트래킹되지 않은 파일들을 지워요, 그래서 깃에서 트래킹되는 파일들만 남아요:

```sh
$ git clean -fd
```

`-x` 옵 또한 무시된 파일들을 다 지워요.

### 스테이지 안된 특정 변경점을 지우고 싶어

작업중인 영역에서 전체가 아닌 특정 부분을 지우고 싶을때
원치않는 변경점을 확인하고, 변경점을 잘 보관하세요.

```sh
$ git checkout -p
# 날리고 싶은 사항에 y를 적으세요 
```

또다른 전략은 `stash`을 같이 쓰는거에요. 챙겨야 하는 변경점을 스테이시 하고, 작업 중인 영역을 리셋하고, 다시 올바른 변경점으로 재적용해요.   

```sh
$ git stash -p
# 저장하고 싶은 사항들을 다 선택하세요
$ git reset --hard
$ git stash pop
```

대안으로, 원치않는 변경점을 스테이시해서 그걸 날리는 방법도 있어요.

```sh
$ git stash -p
# 저장하고 싶지 앟은 사항들을 다 선택하세요
$ git stash drop
```

### 스테이지 안된 특정 파일을 지우고 싶어

작업 영역에서 특정 파일을 지우고 싶을 때.

```sh
$ git checkout myFile
```

대안으로, 작업영역 내 여러 파일들을 지우고 싶을때 모두 나열해서 적어요.

```sh
$ git checkout myFirstFile mySecondFile
```

### 로컬에 있는 스테이지 안된 변경점만 지우고 싶어

모든 스테이징 안된 커밋 전인 변경점을 지우고 싶을 때

```sh
$ git checkout .
```

<a href="i-want-to-discard-all-my-untracked-files"></a>
### 트래킹 안된 파일들 다 지우고 싶어

트래킹 안된 파일들 다 지우고 싶을 땐 

```sh
$ git clean -f
```

## 브랜치

### 모든 브랜치 리스트를 보고 싶어 

로컬 브랜치 다 보기

```sh
$ git branch
```

리모트 브랜치 다 보기  

```sh
$ git branch -r
```

로컬과 리모트 브랜치 모두 보기

```sh
$ git branch -a
```

<a name="create-branch-from-commit"></a>
### 커밋에서 브랜치 만들기

```sh
$ git checkout -b <branch> <SHA1_OF_COMMIT>
```

<a name="pull-wrong-branch"></a>
### 다른 브랜치에서 풀을 받아와버렸어

이건 잘못된 풀을 받기전 HEAD가 어딜 가르키고 있었는지 볼 수 있는 `git reflog`를 써볼 수 있는 기회에요.

```sh
(master)$ git reflog
ab7555f HEAD@{0}: pull origin wrong-branch: Fast-forward
c5bc55a HEAD@{1}: checkout: checkout message goes here
```

간단히 원하는 커밋으로 브랜치를 되돌릴 수 있어요: 

```sh
$ git reset --hard c5bc55a
```

끝!

<a href="discard-local-commits"></a>
### 로컬의 커밋을 지워서 서버에 있는 내 브랜치와 맞추고 싶어

서버에 변경점을 푸시 안했는지부터 확인해요.

`git status` 가 오리진보다 몇개의 커밋들이 앞서 있는지 보여줄거에요: 

```sh
(my-branch)$ git status
# On branch my-branch
# Your branch is ahead of 'origin/my-branch' by 2 commits.
#   (use "git push" to publish your local commits)
#
```

오리진(리모트과 같은 상태의)로 맞추는 리셋을 하는 방법 중 하나는:

```sh
(master)$ git reset --hard origin/my-branch
```

<a name="commit-wrong-branch"></a>
### 새 브랜치 대신에 마스터에 커밋을 해버렸어

마스터에 있으면서 새 브랜치를 만들어요:

```sh
(master)$ git branch my-branch
```

마스터 브랜치를 기존 커밋으로 리셋해요:


```sh
(master)$ git reset --hard HEAD^
```

`HEAD^`는 `HEAD^1`의 축약인데요. `HEAD^`의 첫번째 부모를 의미하고, 비슷한 `HEAD^2`는 두번째 부모를 의미해요. (머지는 두 부모를 가질 수 있죠) 

알아두세요 `HEAD^2`는 `HEAD~2`과 같은게 아니에요. (더 자세한 정보는 [이 링크](http://www.paulboxley.com/blog/2011/06/git-caret-and-tilde)를 참고해요 )

대안으로, `HEAD^`를 쓰고 싶지 않다면, 마스터 브랜치로 옮길 커밋 해시를 알아둬요 (`git log`가 트릭을 부릴 거에요) 그리고 그 해쉬로 리셋을 해요. `git push`가 리모트랑 변경점이 똑같은걸 확인해줄거에요.

예를 들자면, 그 마스터의 커밋의 해쉬가 `a13b85e`라면:

```sh
(master)$ git reset --hard a13b85e
HEAD is now at a13b85e
```

새 브랜치로 체크아웃 해서 계속 작업을 해요:

```sh
(master)$ git checkout my-branch
```

<a name="keep-whole-file"></a>
### 다른 레퍼런스 같은 곳에서 모든 파일을 유지하고 싶어 

수백번의 변경점을 가진 스파이크(아래 알아두기 참고) 작업을 한다고 가정해보죠. 모든 건 동작하고 있고,그 작업을 저장해두기 위해  다른 브랜치로 커밋을 해요:

```sh
(solution)$ git add -A && git commit -m "Adding all changes from this spike into one big commit."
```

그 커밋을 브랜치(아마 feature일수도 있고, `develop` 일수도 있겠죠)에 넣고 싶을 때, 모든 파일을 지키는데 관심이 있을거에요. 큰 커밋을 작게 나누고 싶을거에요.

현재 가지고 있는건:

* 스파이크를 위한 솔루션과 함께인 `solution` 브랜치. `develop` 브랜치의 1단계 앞선 상태.
* 변경점을 추가하고 싶은 `develop` 브랜치

브랜치로 내용들을 불러오는 것으로 해결할 수 있어요:

```sh
(develop)$ git checkout solution -- file1.txt
```

`develop`브랜치에서 `solution` 브랜치의 저 파일의 내용들을 얻을 수 있어요.

```sh
# On branch develop
# Your branch is up-to-date with 'origin/develop'.
# Changes to be committed:
#  (use "git reset HEAD <file>..." to unstage)
#
#        modified:   file1.txt
```

그 다음, 평소처럼 커밋해요.

알아두기 : 스파이크 솔루션은 문제를 분석하거나 풀기위해 만들어졌어요. 이 솔루션들은 모두가 문제의 확실한 시각화를 얻고선 평가되고 제거돼요.~ [위키피디아](https://en.wikipedia.org/wiki/Extreme_programming_practices).   

<a name="cherry-pick"></a>
### 한 브랜치에 다른 브랜치에 남겼어야 하는 커밋을 여러개 남겼어

마스터 브랜치에 있다고 가정하고 `git log` 해보면 커밋 두개 볼 수 있을거에요:

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

각 버그커밋의 해쉬를 가져와요. (21번은 `e3851e8`, 14번은 `5ea5173`)

우선, 마스터 브랜치의 정확한 커밋 (`a13b85e`)으로 리셋해요:

```sh
(master)$ git reset --hard a13b85e
HEAD is now at a13b85e
```

그리고, 21번 버그 작업을 위한 새로운 브랜치를 만들수 있어요:

```sh
(master)$ git checkout -b 21
(21)$
```

그리고 21번 버그 커밋을 *체리픽* 해서 브랜치 최상단에 올려요. 그 커밋을 적용할건데, 오직 그 커밋만을 헤드에 뭐가 있든 최상단으로 적용할거란 의미에요.

```sh
(21)$ git cherry-pick e3851e8
```

이 지점에서 충돌이 있을 수도 있어요.
어떻게 충돌을 해결할지 [대화형 리베이스 섹션](#interactive-rebase) 안에 있는 [**충돌이 있어**](#merge-conflict) 부분을 참고하세요.  

자 이제 14번 버그 작업을 위해 마스터로 가서 새 브랜치를 만들어요.

```sh
(21)$ git checkout master
(master)$ git checkout -b 14
(14)$
```

그리고 마지막으로, 14번 버그작업을 위한 커밋을 체리픽해요. 

```sh
(14)$ git cherry-pick 5ea5173
```

<a name="delete-stale-local-branches"></a>
### 업스트림에선 지워진 로컬 브랜치를 지우고 싶어

깃헙에 풀리퀘스트로 머지를 하면, 포크 뜬 머지 브랜치를 지울껀지 선택할 수 있는 옵션을 줘요.
해당 브랜치에 계속 작업할 예정이 없다면, 다량의 오래된 브랜치들로 뒤덮이지 않게 로컬 작업을 지워주는게 더 깔끔해요.

```sh
$ git fetch -p upstream
```

여기서, `upstream`은 패치로 가져오려는 리모트 레파지토리에요.

<a name='restore-a-deleted-branch'></a>
### 브랜치를 지워버렸어

주기적으로 리모트으로 푸시한다면, 대부분은 안전해야 해요. 그치만 가끔은 브랜치를 지울 수 있어요. 새 브랜치를 만들고 파일을 하나 만들었다고 해보죠:

```sh
(master)$ git checkout -b my-branch
(my-branch)$ git branch
(my-branch)$ touch foo.txt
(my-branch)$ ls
README.md foo.txt
```

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

여기에서 업그레이드된 로그 도구인 '리플로그'에 익숙해져야 해요. 리플로그는 레파지토리의 모든 행동의 이력을 다 보관해요.

```
(master)$ git reflog
69204cd HEAD@{0}: checkout: moving from my-branch to master
4e3cd85 HEAD@{1}: commit: foo.txt added
69204cd HEAD@{2}: checkout: moving from master to my-branch
```

보시다시피 지워진 브랜치의 커밋 해쉬도 볼 수 있어요. 지웠던 브랜치를 살릴 수 있는 지 한번 해보죠.

```sh
(master)$ git checkout -b my-branch-help
Switched to a new branch 'my-branch-help'
(my-branch-help)$ git reset --hard 4e3cd85
HEAD is now at 4e3cd85 foo.txt added
(my-branch-help)$ ls
README.md foo.txt
```

짜잔! 지워진 파일들을 되돌려 놨어요. `git reflog`는 리베이스가 끔찍하게 잘못 됐을때 아주 유용해요.

### 브랜치를 지우고 싶어

리모트 브랜치를 삭제하려면:

```sh
(master)$ git push origin --delete my-branch
```

이렇게도:

```sh
(master)$ git push origin :my-branch
```

로컬 브랜치를 삭제하려면:

```sh
(master)$ git branch -d my-branch
```

현재 브랜치나 업스트림에 머지되지 않은 로컬 브랜치를 지우려면:

```sh
(master)$ git branch -D my-branch
```

### 여러개의 브랜치를 지우고 싶어

`fix/`로 시작하는 모든 브랜치들을 지우고 싶다면:

```sh
(master)$ git branch | grep 'fix/' | xargs git branch -d
```

### 브랜치 이름을 바꾸고 싶어

현재 (로컬) 브랜치 이름을 바꾸려면:

```sh
(master)$ git branch -m new-name
```

다른 (로컬) 브랜치 이름을 바꾸려면

```sh
(master)$ git branch -m old-name new-name
```

<a name="i-want-to-checkout-to-a-remote-branch-that-someone-else-is-working-on"></a>
### 다른 사람이 작업중인 리모트 브랜치로 체크아웃 하고 싶어

우선, 리모트 레파지토리에서 모든 브랜치를 패치 받아요: 

```sh
(master)$ git fetch --all
```

리모트의 `daves`로 체크아웃 하고 싶다고 하면.

```sh
(master)$ git checkout --track origin/daves
Branch daves set up to track remote branch daves from origin.
Switched to a new branch 'daves'
```

(`--track` 은 `git checkout -b [branch] [remotename]/[branch]` 의 축약이에요)

`daves` 브랜치의 로컬 카피를 줄거에요. 그리고 푸시된 업데이트들도 리모트로 표시돼요.

### 현재 로컬 브랜치로 새로운 리모트 브랜치를 만들고 싶어

```sh
$ git push <remote> HEAD
```

또한 리모트 브랜치를 현재 브랜치를 위한 업스트림으로 설정하고 싶다면, 대신 아래 방법을 써봐요:

```sh
$ git push -u <remote> HEAD
```

`push.default` 설정의 `upstream` 모드와 `simple`모드 (2.0 버전의 깃의 기본)와 함께,
아래 커맨드는 이전에 `-u` 옵션으로 등록된 리모트 브랜치와 관련된 현재 브랜치를 푸시할거에요:

```sh
$ git push
```

`git push`의 다른 모드의 동작은 [`push.default` 문서](https://git-scm.com/docs/git-config#git-config-pushdefault)에 설명돼 있어요.

### 리모트 브랜치를 로컬 브랜치를 위한 업스트림으로 설정하고 싶어

리모트 브랜치를 현재 쓰고 있는 로컬 브랜치를 위한 업스트림으로 설정할 수 있어요:

```sh
$ git branch --set-upstream-to [remotename]/[branch]
# 아니면 짧게:
$ git branch -u [remotename]/[branch]
```

다른 로컬 브랜치를 위한 업스트림 리모트 브랜치를 설정하려면:

```sh
$ git branch -u [remotename]/[branch] [local-branch]
```

<a name="i-want-to-set-my-HEAD-to-track-the-default-remote-branch"></a>

### HEAD를 기본 리모트 브랜치로 트래킹하도록 설정하고 싶어

리모트 브랜치를 확인해보는 것으로, HEAD가 트래킹 중인 리모트 브랜치를 볼 수 있어요. 몇몇 경우에는, 원하던 브랜치가 아닐거에요.

```sh
$ git branch -r
  origin/HEAD -> origin/gh-pages
  origin/master
```

`origin/HEAD`를 `origin/master`를 트래킹하는 것으로 변경하려면, 이 커맨드로 실행할 수 있어요:

```sh
$ git remote set-head origin --auto
origin/HEAD set to master
```

### 다른 브랜치에 변경점을 잘못 남겼어

커밋 되지 않은 변경점, 거기다 잘못된 브랜치에 하고 있었다면 변경점을 스테이시 하고 원하는 브랜치로 가 스테이시 어플라이 해요:

```sh
(wrong_branch)$ git stash
(wrong_branch)$ git checkout <correct_branch>
(correct_branch)$ git stash apply
```

## 리베이스와 머지

<a name="undo-rebase"></a>
### 리베이스/머지 한 걸 되돌리고 싶어

현재 브랜치를 의도하지 않던 브랜치로 머지 또는 리베이스 했거나, 리베이스/머지 도중에 완료하거나 끝내지 못했을거에요.
깃은 위험한 과정 전에 원래의 HEAD 포인트를 ORIG_HEAD라 불리는 변수에 보관해요, 그러니 리베이스/머지 전 상태로 브랜치를 복구하기 간단해요.

```sh
(my-branch)$ git reset --hard ORIG_HEAD
```

<a name="force-push-rebase"></a>
### 리베이스를 했는데, 강제 푸시하고 싶진 않아

아쉽게도 그런 변경점을 리모트 브랜치에 반영하려면 강제 푸시밖에 방법이 없어요. 이력을 변경해왔기 때문이죠.
리모트 브랜치는 강제 푸시 외엔 적용 해주지 않을거에요.
많은 분들이 머지 워크플로우를 리베이스 워크플로우보다 선호하는 많이 이유 중 하나죠 - 큰 팀에선 개발자의 강제 푸시로 곤란해질 수 있어요.
주의해서 쓰세요.
리베이스를 그나마 안전하게 쓰는 방법은 리모트 브랜치의 모든 변경점과 똑같이 반영하는게 아니라 대신에 이렇게 해봐요:  


```sh
(master)$ git checkout my-branch
(my-branch)$ git rebase -i master
(my-branch)$ git checkout master
(master)$ git merge --ff-only my-branch
```

더 확인이 필요하다면, [이 스택오버플로우의 쓰레드](https://stackoverflow.com/questions/11058312/how-can-i-use-git-rebase-without-requiring-a-forced-push)를 참고해요.


<a name="interactive-rebase"></a>
### 커밋끼리 합치고 싶어

`master`에 풀 리퀘스트가 될 브랜치에서 작업하고 있다고 가정해봐요.
가장 간단한 경우는 원하는게 *모든* 커밋을 하나의 커밋으로 합치고 변경점의 시간을 신경쓰지 않아도 되는 것일 때, 리셋하고 커밋 다시하면 돼요.
마스터 브랜치가 최신이고 모든 변경점이 커밋된 것만 확인한 다음:

```sh
(my-branch)$ git reset --soft master
(my-branch)$ git commit -am "New awesome feature"
```

좀더 조정하고, 시간기록까지 보관하고 싶다면, 대화형 리베이스가 필요할거에요.

```sh
(my-branch)$ git rebase -i master
```

만약 다른 브랜치로 붙는 작업을 하는게 아니라면, `HEAD`을 기준으로 리베이스 해야해요.
예로 마지막 2개의 커밋을 스쿼시(기존 커밋에 반영해넣는)하고 싶다면 `HEAD~2`로 리베이스 해요. 3개라면 `HEAD~3`으로 하구요.

```sh
(master)$ git rebase -i HEAD~2
```

대화형 리베이스를 실행하면 텍스트 에디터로 이런 것들을 볼 수 있을거에요.

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

모든 `#`으로 시작하는 주석줄은 리베이스에 영향을 주진 않아요. 

다음으로 `pick` 부분을 다른 명령어로 바꾸거나, 해당하는 라인을 지워서 커밋을 지울 수도 있어요.

예를 들자면 **오래된 (첫번째) 커밋만 두고 두번째 오래된 커밋과 나머지를 다 합치고 싶을때**, 첫번째와 두번째 커밋 제외한 나머지 커맨드들을 `f`로 바꿔야 할거에요:  

```vim
pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
f b729ad5 fixup
f e3851e8 another fix
```

이 커밋들을 합치고 **커밋 이름을 바꾸고 싶다면**, 추가로 적어줘야 해요 두번째 커밋 다음에 `r`를 추가하거나 간단히 `f` 대신 `s`를 추가해주면 될거에요:

```vim
pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
s b729ad5 fixup
s e3851e8 another fix
```

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

전부 다 성공하면, 이런 메세지를 볼거에요:

```sh
(master)$ Successfully rebased and updated refs/heads/master.
```

#### 안전한 머지 전략

`--no-commit`는 머지는 하지만 실패하고 자동 커밋이 안된것처럼 보이는데, 커밋하기전에 머지 결과를 보고 추가로 조정할 수 있게 해줘요.
`no-ff`는 피쳐 브랜치가 있었다는 증거를 남기고, 이력을 일관되게 가지게 해요.


```sh
(master)$ git merge --no-ff --no-commit my-branch
```

#### 브랜치를 커밋 하나로 머지해야해 

```sh
(master)$ git merge --squash my-branch
```

<a name="rebase-unpushed-commits"></a>
#### 푸시 되지 않은 커밋만 합치고 싶어

가끔 여러가지 작업 도중인 커밋을 푸시하기 전에 합치고 싶을거에요.
다른 누군가가 벌써 참고해서 커밋을 만들고 있을테니 이미 푸시된 커밋을 잘못 합치길 바라진 않을거에요.

```sh
(master)$ git rebase -i @{u}
```

이 명령은 아직 푸시하지 않은 커밋만으로 대화형 리베이스를 실행해요. 그러니 목록 내에 있는 어떤 커밋이든 재정렬/수정/합치기 안전해요. 

#### 머지를 중단해야해

때때로 머지는 어떤 파일에 문제를 일으킬 수도 있어요, 이 경우 옵션 `abort`으로 현재 충돌 해결 프로세스를 중단하고 병합하기 전 상태로 다시 구성할 수 있어요.

```sh
(my-branch)$ git merge --abort
```

이 명령은 1.7.4 버전부터 쓸 수 있어요.

### 브랜치내 모든 커밋이 머지됐는지 확인해

브랜치 내 모든 커밋이 다른 브랜치로 머지됐는지 확인하려면, 그 브랜치들 HEAD (또는 특정 커밋)를 비교해야해요:

```sh
(master)$ git log --graph --left-right --cherry-pick --oneline HEAD...feature/120-on-scroll
```

이 명령은 어디에는 있고 다른덴 없는 커밋이 있나를 알려줄거에요 그리고 브랜치들 사이에 공유되지 않은게 목록을 보여줄 거구요. 다른 옵션은 이렇게:

```sh
(master)$ git log master ^feature/120-on-scroll --no-merges
```

### 대화형 리베이스로 발생가능한 이슈

<a name="noop"></a>
#### 리베이스 편집 화면에서 'noop'

이런 걸 본다면:

```
noop
```

동일한 커밋에 있거나 현재 브랜치보다 앞서 있는 브랜치에 대해 리베이스를 시도한다는 의미에요. 이렇게 해볼 수 있어요:

* 마스터 브랜치가 있어야 할 곳에 있나 확인
* 대신해서 `HEAD~2` 또는 더 기존 항목을 리베이스

<a name="merge-conflict"></a>

#### 충돌이 있어

리베이스를 똑바로 끝내지 못했다면, 충돌을 해결해야 할거에요.

어떤 파일이 충돌났는지 `git status`를 먼저 실행해봐요: 

```sh
(my-branch)$ git status
On branch my-branch
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  both modified:   README.md
```

이 예시에선, `README.md` 가 충돌났네요. 파일을 열어서 아래와 같은 부분을 찾아봐요:

```vim
   <<<<<<< HEAD
   some code
   =========
   some code
   >>>>>>> new-commit
```

새로운 커밋으로 추가된 코드(예시에선, 중간 선부터 `new-commit` 까지의)와 `HEAD` 사이에서 차이점을 해결해야 할거에요.

어느 한쪽 브랜치의 코드를 남기고 싶다면, `--ours` 또는 `--theirs`를 쓰면 돼요:

```sh
(master*)$ git checkout --ours README.md
```

- *머지*할때, `--ours`를 쓰면 로컬 브랜치의 변경점 유지하고, `--theirs` 는 다른 브랜치의 변경점를 유지해요.
- *리베이스*할 땐, `--theirs`가 로컬 브랜치의 변경점을 유지하고 `--ours`는 다른 브랜치의 변경점을 유지해요. 이런 차이에 관한 설명은 Git 정식 문서 중 [이 문서](https://git-scm.com/docs/git-rebase#git-rebase---merge)를 보세요. 

만약 머지가 더 복잡하면, 비주얼 디프 에디터를 쓸 수도 있어요:

```sh
(master*)$ git mergetool -t opendiff
```

코드의 충돌을 해결하고 테스트가 해결되고 나면, 바뀐 파일 내용을 `git add` 해주고, `git rebase --continue`로 리베이스를 이어서 해요.

```sh
(my-branch)$ git add README.md
(my-branch)$ git rebase --continue
```

만약 모든 충돌을 개선한 내용이 커밋 전과 동일한 트리 구조를 가진다면, 대신에 `git rebase --skip`를 해야 해요.

리베이스 중 멈추고 싶은 어떤 시점이거나 원래 상태의 브랜치로 돌아가고 싶다면, 이렇게 할 수 있어요:  

```sh
(my-branch)$ git rebase --abort
```

<a name="stashing"></a>
## 스테이시

### 모든 변경점 스테이시 하기

작업중인 디렉토리에서의 변경한 내용 전부를 스테이시 하려면

```sh
$ git stash
```

트래킹 되지 않은 파일까지도 포함하려면, `-u` 옵션을 써요.

```sh
$ git stash -u
```

### 특정 파일들만 스테이시 하기

작업중인 디렉토리에서 한 파일만 스테이시 하기

```sh
$ git stash push working-directory-path/filename.ext
```

작업중인 디렉토리에서 여러 파일 스테이시 하기

```sh
$ git stash push working-directory-path/filename1.ext working-directory-path/filename2.ext
```

<a name="stash-msg"></a>
### 메세지와 함께 스테이시 하기

```sh
$ git stash save <message>
```

<a name="stash-apply-specific"></a>
### 특정 스테이시 목록에서 가져와 적용하기 

메세지 작성된 스테이시 리스트 먼저 확인하세요

```sh
$ git stash list
```

그런 다음 리스트 내 특정 스테이시를 적용해요

```sh
$ git stash apply "stash@{n}"
```

여기에서, 'n' 은 스택 안에서 스테이시의 위치를 나타내요. 젤 위에 있는 스테이시가 0 일거에요.


## 찾아보기

### 어떤 커밋에서 문자열을 찾고 싶어

특정한 문자열이 포함된 어떤 커밋을 찾으려면, 이런 구조로 쓸 수 있어요:

```sh
$ git log -S "string to find"
```

일반적인 파라미터들은:

* `--source` 각 커밋에 도달한 명령어에 지정된 참조 이름을 보여주는걸 의미해요.

* `--all` 는 모든 브랜치에서 시작하는걸 의미해요.

* `--reverse` 반대의 순서로 출력해요, 변경점의 첫번째 커밋이 보일꺼란 거죠.

<a name="i-want-to-find-by-author-committer"></a>
### 작성자나 커미터를 찾고 싶어

작성자나 커미터의 모든 커밋을 찾으려면 이렇게 쓸 수 있어요:

```sh
$ git log --author=<name or email>
$ git log --committer=<name or email>
```

작성자와 커미터가 같지 않다는 것만 염두해두세요.
`--author`는 코드를 실제로 코드를 작성한 사람이고
반면에 `--committer`는 실제 작성자를 대신해 커밋을 한 사람이에요.

### 특정 파일이 포함된 커밋을 목록화 하고 싶어

특정 파일이 든 모든 커밋을 찾으려면 이렇게 해요:

```sh
$ git log -- <path to file>
```

보통은 정확한 경로를 쓸테지만 와일드 카드로 경로나 파일명을 쓸수도 있어요:

```sh
$ git log -- **/*.js
```

와일드 카드를 쓸 때, 커밋된 파일의 목록을 볼 수 있는 `--name-status`로 확인하는게 유용할거에요: 

```sh
$ git log --name-status -- **/*.js
```

### 커밋을 참조하는 태그를 찾고 싶어

특정 커밋이 포함된 모든 태그를 찾으려면:

```sh
$ git tag --contains <commitid>
```

## 서브모듈

<a name="clone-submodules"></a>

### 모든 서브모듈을 클론하기

```sh
$ git clone --recursive git://github.com/foo/bar.git
```

벌써 클론했다면:

```sh
$ git submodule update --init --recursive
```

<a name="delete-submodule"></a>
### 서브모듈 지우기

서브모듈을 만드는건 아주 간단하지만 지우는건 그렇진 않아요. 필요한 명령어는:

```sh
$ git submodule deinit submodulename
$ git rm submodulename
$ git rm --cached submodulename
$ rm -rf .git/modules/submodulename
```

## 기타 항목들

### 지운 파일 복구하기

우선 그 파일이 마지막으로 있었던 커밋을 찾고:

```sh
$ git rev-list -n 1 HEAD -- filename
```

그런 다음 그 파일을 체크아웃해요 

```
git checkout deletingcommitid^ -- filename
```

### 태그 지우기

```sh
$ git tag -d <tag_name>
$ git push <remote> :refs/tags/<tag_name>
```

<a name="recover-tag"></a>
### 지워진 태그 복구하기

이미 지운 태그를 복구하고 싶다면, 이런 단계를 따라해 볼 수 있어요: 우선, 연결할 수 없는 태그를 찾고:

```sh
$ git fsck --unreachable | grep tag
```

태그의 해쉬를 메모해두세요.
그런 다음 [`git update-ref`](https://git-scm.com/docs/git-update-ref)을 써서 지워진 태그를 복구해요:

```sh
$ git update-ref refs/tags/<tag_name> <hash>
```

이제 태그가 복구돼있을거에요.

### 지워진 패치

만약 깃헙에서 누군가가 풀리퀘스트를 보냈는데 이미 원래의 포크가 지워졌다면,
url을 쓸 수 없게 돼 레파지토리를 클론할 수 없거나 [.diff, .patch](https://github.com/blog/967-github-secrets)와 같은 `git am`를 쓸 수 없을 거에요.
하지만 [깃헙의 특별한 참조](https://gist.github.com/piscisaureus/3342247)을 이용해서 풀 리퀘스트 자체를 확인할 수 있어요.
PR#1의 내용을 pr_1이란 새 브랜치로 패치 받으려면:

```sh
$ git fetch origin refs/pull/1/head:pr_1
From github.com:foo/bar
 * [new ref]         refs/pull/1/head -> pr_1
```

### Zip파일로 레파지토리 추출하기

```sh
$ git archive --format zip --output /full/path/to/zipfile.zip master
```

## 파일 추적하기

<a href="i-want-to-change-a-file-names-capitalization-without-changing-the-contents-of-the-file"></a>

### 파일 내용엔 변경이 없이 파일 이름을 앞글자만 대문자로 바꾸고 싶어

```sh
(master)$ git mv --force myfile MyFile
```

### 깃 풀 받을때 로컬 파일을 덮어씌우고 싶어

```sh
(master)$ git fetch --all
(master)$ git reset --hard origin/master
```

<a href="remove-from-git"></a>
### 파일을 로컬에는 보관하고 깃에서 지우고 싶어

```sh
(master)$ git rm --cached log.txt
```

### 특정한 버전대로 파일을 복구하고 싶어

복구하고 싶은 해시가 c5f567 이라고 가정하면:

```sh
(master)$ git checkout c5f567 -- file1/to/restore file2/to/restore
```

c5f567 한 단계전으로 복구하고 싶다면, c5f567~1로 적어줘요:

```sh
(master)$ git checkout c5f567~1 -- file1/to/restore file2/to/restore
```

### 커밋과 브랜치 간의 특정 파일 변경 이력이 필요해

마지막 커밋과 c5f567으로 부터의 차이를 비교하고 싶다고 가정하면:


```sh
$ git diff HEAD:path_to_file/file c5f567:path_to_file/file
```

브랜치도 같은 방법으로:

```sh
$ git diff master:path_to_file/file staging:path_to_file/file
```

## 설정

### 깃 명령어 몇 개를 앨리어스 등록하고 싶어

맥OS나 리눅스에는, 깃 설정 파일이 ```~/.gitconfig``` 에 있어요. 단축용으로 (몇개는 평소 쓰는 용도로) 앨리어스 몇개를 아래와 같이 계속 추가해오고 있어요. 

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

### 레파지토리에 빈 디렉토리를 추가하고 싶어

못해요! 깃은 지원하지 않거든요, 근데 꼼수가 있어요. 디렉토리에에 .gitignore 파일을 아래 내용으로 만들어요:  

```
 # Ignore everything in this directory
 *
 # Except this file
 !.gitignore
```

다른 일반적인 컨벤션은 그 폴더 안에 .gitkeep이라는 이름의 빈 파일을 만드는 거에요.

```sh
$ mkdir mydir
$ touch mydir/.gitkeep
```

.keep이란 이름으로도 쓸 수 있는데요, 두번째 라인이 ```touch mydir/.keep```가 되어야겠죠.

### 레파지토리 유저명과 비밀번호를 캐시해두고 싶어

인증이 필요한 레파지토리를 가지고 있을 텐데요.
이런 경우 유저명과 비밀번호를 캐시할 수 있을테니 매번 푸시/풀 할 때마다 입력할 필욘 없어요.
크리덴셜 헬퍼가 해줄거에요.

```sh
$ git config --global credential.helper cache
# Set git to use the credential memory cache
```

```sh
$ git config --global credential.helper 'cache --timeout=3600'
# Set the cache to timeout after 1 hour (setting is in seconds)
```

### 깃이 권한과 파일모드 변경을 무시하게 만들고 싶어   

```sh
$ git config core.fileMode false
```

이 것을 로그인된 유저의 기본 행위로 설정으로 해두려면, 이렇게 써요: 

```sh
$ git config --global core.fileMode false
```

### 글로벌 유저로 설정해두고 싶어

모든 로컬 레파지토리에 사용되는 유저 정보를 설정하려면, 그리고 버전 이력을 리뷰할때 알아보기 쉬운 이름으로 설정하려면: 

```sh
$ git config --global user.name “[firstname lastname]”
```

각 이력 생산자에게 연관해서 이메일 설정을 해주려면:

```sh
git config --global user.email “[valid-email]”
```

### 깃에 명령어 색상을 넣고 싶어

손 쉬운 리뷰를 위한 깃 명령줄 자동 색상을 설정 하려면:

```sh
$ git config --global color.ui auto
```

## 뭘 잘못했는지 모르겠어

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

이 리플로그는 마스터에서 2.2 브랜치로 체크아웃하고 되돌린 것을 보여주네요.
저기에선, 오래된 커밋으로 리셋하기 어려워요. 최신 활동이 `HEAD@{0}` 상단 라벨로 보여지네요.

만약 실수로 뒤로 이동했다면,
리플로그는 실수로 지워진 2개의 커밋 전 상태인 (0254ea7)를 가리키는 커밋 마스터를 포함할거에요.

```sh
$ git reset --hard 0254ea7
```

`git reset`을 쓰는 것으로 마스터를 이전 커밋으로 되돌릴 수 있어요.
이력이 실수로 변경됐을 때의 안정망을 제공할거에요.  

([여기](https://www.atlassian.com/git/tutorials/rewriting-history/git-reflog)에서 복제해와 수정했어요).


# 다른 리소스

## 도서

* [Pro Git](https://git-scm.com/book/en/v2) - Scott Chacon 과 Ben Straub의 훌륭한 깃 책
* [Git Internals](https://github.com/pluralsight/git-internals-pdf) - Scott Chacon의 또다른 훌륭한 깃 책

## 튜토리얼

* [Atlassian's Git tutorial](https://www.atlassian.com/git/tutorials) 기초부터 고급까지 튜토리얼과 함께 하는 깃 제대로 얻기
* [Learn Git branching](https://learngitbranching.js.org/) 대화형 웹 기반의 브랜치/머지/리베이스 튜토리얼
* [Getting solid at Git rebase vs. merge](https://medium.com/@porteneuve/getting-solid-at-git-rebase-vs-merge-4fa1a48c53aa)
* [git-workflow](https://github.com/asmeurer/git-workflow) - [Aaron Meurer](https://github.com/asmeurer)의 어떻게 깃을 통해 오픈소스 레파지토리에 어떻게 기여할까
* [GitHub as a workflow](https://hugogiraudel.com/2015/08/13/github-as-a-workflow/) - 깃헙을 워크플로우로 쓰는 흥미로운 작업, 특히 빈 풀 리퀘스트를 활용하는
* [Githug](https://github.com/Gazler/githug) - 더 일반적인 깃 워크플로우를 배우는 게임

## 스크립트와 도구

* [firstaidgit.io](http://firstaidgit.io/) 가장 많이 묻는 깃 질문의, 검색가능한 모음
* [git-extra-commands](https://github.com/unixorn/git-extra-commands) - 유용한 기타 깃 스크립트 모음
* [git-extras](https://github.com/tj/git-extras) - 깃 유틸리티 -- 레파지토리 요약, repl, 변경이력 밀집도, 작성자 커밋 비율 등
* [git-fire](https://github.com/qw3rtman/git-fire) - git-fire는 모든 현재 파일을 추가,커밋,새 브랜치로 푸시(머지를 예방하기 위한) 등 비상사태를 도와주는 플러그인
* [git-tips](https://github.com/git-tips/tips) - 자그마한 깃 팁들
* [git-town](https://github.com/Originate/git-town) - 포괄적이고, 높은 수준의 깃 워크플로우 지원! http://www.git-town.com

## GUI 클라이언트

* [GitKraken](https://www.gitkraken.com/) - 완전 고급의 깃 클라이언트 Windows, Mac & Linux
* [git-cola](https://git-cola.github.io/) - 또 다른 깃 클라이언트 Windows, OS X
* [GitUp](https://github.com/git-up/GitUp) - 아주 독단적으로 방식으로 깃의 복잡함을 다루는 새로운 GUI
* [gitx-dev](https://rowanj.github.io/gitx/) - 또다른 그래픽적인 깃 클라이언트 OS X
* [Sourcetree](https://www.sourcetreeapp.com/) - 아름답고 무료인 깃 GUI 안에서 단순함과 강력함이 만났어 Windows and Mac
* [Tower](https://www.git-tower.com/) - 그래픽 Git 클라이언트 OS X (유료)
* [tig](https://jonas.github.io/tig/) - 깃을 위한 터민러 텍스트 모드 인터페이스
* [Magit](https://magit.vc/) - Emacs 패키지를 위해 구현된 깃 인터페이스 
* [GitExtensions](https://github.com/gitextensions/gitextensions) - 쉘 확장, 비주얼 스투디오 2010-2015 플러그인 그리고 독자적인 깃 레파지토리 도구
* [Fork](https://git-fork.com/) - 빠르고 친숙한 깃 클라이언트 Mac (베타)
* [gmaster](https://gmaster.io/) - 3-way 머지, 리팩터 분석기, 시멘틱 diff와 머지 기능의 윈도 전용 깃 클라이언트 (베타)
* [gitk](https://git-scm.com/docs/gitk) - 간단한 레파지토리 상태를 볼 수 있는 리눅스 깃 클라이언트

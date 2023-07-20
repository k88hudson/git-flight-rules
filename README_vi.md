# Flight rules cho Git

🌍
*[English](README.md) ∙ [Español](README_es.md)  ∙  [Русский](README_ru.md) ∙ [繁體中文](README_zh-TW.md) ∙ [简体中文](README_zh-CN.md) ∙ [한국어](README_kr.md)  ∙  [Tiếng Việt](README_vi.md) ∙ [Français](README_fr.md) ∙ [日本語](README_ja.md)*

#### "Flight rules" là gì?

Là tài liệu hướng dẫn cho các phi hành gia vũ trụ (và tại đây, cho các lập trình viên sử dụng Git) về những việc cần làm khi có sai lầm xảy ra.

>  *Flight Rules* là những kiến thức vất vả kiếm được trong các hướng dẫn sử dụng chỉ ra, từng bước, phải làm gì nếu X xảy ra và tại sao. Về cơ bản, chúng là các chuẩn quy trình thực hiện rất chi tiết cho từng kịch bản cụ thể . [...]

> NASA qua thời gian đã ghi lại những sai lầm, thảm hoạ và giải pháp của chúng tôi kể từ đầu những năm 1960, khi các đội mặt đất trong thời kỳ chương trình Mercury bắt đầu thu thập "các bài học kinh nghiệm" thành một bản yếu lược liệt kê hàng nghìn tình huống có vấn đề, từ lỗi động cơ đến các tay cầm bị bẻ cong đến trục trặc máy tính, và các giải pháp của họ.

&mdash; Chris Hadfield, *Sổ Tay Phi Hành Gia*.

#### Quy chuẩn cho tài liệu này

Để  chuyền tải rõ ràng, tất cả các ví dụ trong tài liệu này sử dụng bash prompt được tuỳ chỉnh để chỉ ra nhánh hiện tại và có hay không thay đổi trong vùng chuyển tiếp (staged changes). Nhánh được đặt trong dấu ngoặc đơn và một ký tự `*` bên cạnh tên nhánh cho biết các thay đổi trong vùng chuyển tiếp.

Tất cả các lệnh (command) phải thi hành với phiên bản lâu đời nhất là git 2.13.0. Xem [git website](https://www.git-scm.com/) để cập nhật phiên bản git trên local của bạn.

[![Join the chat at https://gitter.im/k88hudson/git-flight-rules](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/k88hudson/git-flight-rules?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Danh mục nội dung**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

  - [Repositories (Kho)](#repositories-kho)
    - [Tôi muốn tạo một repository trên local](#t%C3%B4i-mu%E1%BB%91n-t%E1%BA%A1o-m%E1%BB%99t-repository-tr%C3%AAn-local)
    - [Tôi muốn clone một remote repository](#t%C3%B4i-mu%E1%BB%91n-clone-m%E1%BB%99t-remote-repository)
    - [Tôi để sai remote repository](#t%C3%B4i-%C4%91%E1%BB%83-sai-remote-repository)
    - [Tôi muốn thêm sửa code cho repository của người khác](#t%C3%B4i-mu%E1%BB%91n-th%C3%AAm-s%E1%BB%ADa-code-cho-repository-c%E1%BB%A7a-ng%C6%B0%E1%BB%9Di-kh%C3%A1c)
      - [Thêm sửa code với pull requests](#th%C3%AAm-s%E1%BB%ADa-code-v%E1%BB%9Bi-pull-requests)
      - [Thêm sửa code với các patch (vá)](#th%C3%AAm-s%E1%BB%ADa-code-v%E1%BB%9Bi-c%C3%A1c-patch-v%C3%A1)
      - [Tôi cần update fork của tôi với những thay đổi mới nhất từ repository nguyên bản](#t%C3%B4i-c%E1%BA%A7n-update-fork-c%E1%BB%A7a-t%C3%B4i-v%E1%BB%9Bi-nh%E1%BB%AFng-thay-%C4%91%E1%BB%95i-m%E1%BB%9Bi-nh%E1%BA%A5t-t%E1%BB%AB-repository-nguy%C3%AAn-b%E1%BA%A3n)
  - [Chỉnh sửa Commit](#ch%E1%BB%89nh-s%E1%BB%ADa-commit)
    - [Tôi vừa commit cái gì?](#t%C3%B4i-v%E1%BB%ABa-commit-c%C3%A1i-g%C3%AC)
    - [Tôi đã viết sai vài thứ trong message (thông điệp) của commit](#t%C3%B4i-%C4%91%C3%A3-vi%E1%BA%BFt-sai-v%C3%A0i-th%E1%BB%A9-trong-message-th%C3%B4ng-%C4%91i%E1%BB%87p-c%E1%BB%A7a-commit)
    - [Tôi đã commit với cấu hình tên và email sai](#t%C3%B4i-%C4%91%C3%A3-commit-v%E1%BB%9Bi-c%E1%BA%A5u-h%C3%ACnh-t%C3%AAn-v%C3%A0-email-sai)
    - [Tôi muốn xoá một file từ commit trước](#t%C3%B4i-mu%E1%BB%91n-xo%C3%A1-m%E1%BB%99t-file-t%E1%BB%AB-commit-tr%C6%B0%E1%BB%9Bc)
    - [Tôi muốn xoá hoặc loại bỏ commit mới nhất](#t%C3%B4i-mu%E1%BB%91n-xo%C3%A1-ho%E1%BA%B7c-lo%E1%BA%A1i-b%E1%BB%8F-commit-m%E1%BB%9Bi-nh%E1%BA%A5t)
    - [Xoá/loại bỏ bất kỳ commit nào](#xo%C3%A1lo%E1%BA%A1i-b%E1%BB%8F-b%E1%BA%A5t-k%E1%BB%B3-commit-n%C3%A0o)
    - [Tôi đã cố gắng push commit đã sửa đổi lên remote, nhưng tôi gặp thông báo lỗi](#t%C3%B4i-%C4%91%C3%A3-c%E1%BB%91-g%E1%BA%AFng-push-commit-%C4%91%C3%A3-s%E1%BB%ADa-%C4%91%E1%BB%95i-l%C3%AAn-remote-nh%C6%B0ng-t%C3%B4i-g%E1%BA%B7p-th%C3%B4ng-b%C3%A1o-l%E1%BB%97i)
    - [Tôi đã vô tình thực hiện hard reset và tôi muốn các thay đổi của tôi.](#t%C3%B4i-%C4%91%C3%A3-v%C3%B4-t%C3%ACnh-th%E1%BB%B1c-hi%E1%BB%87n-hard-reset-v%C3%A0-t%C3%B4i-mu%E1%BB%91n-c%C3%A1c-thay-%C4%91%E1%BB%95i-c%E1%BB%A7a-t%C3%B4i)
    - [Tôi vô tình commit và đẩy lên một merge](#t%C3%B4i-v%C3%B4-t%C3%ACnh-commit-v%C3%A0-%C4%91%E1%BA%A9y-l%C3%AAn-m%E1%BB%99t-merge)
    - [Tôi vô tình commit và đẩy các file chứa dữ liệu nhảy cảm](#t%C3%B4i-v%C3%B4-t%C3%ACnh-commit-v%C3%A0-%C4%91%E1%BA%A9y-c%C3%A1c-file-ch%E1%BB%A9a-d%E1%BB%AF-li%E1%BB%87u-nh%E1%BA%A3y-c%E1%BA%A3m)
    - [Tôi muốn xóa file to quá để chưa bao giờ xuất hiện trong lịch sử repository](#t%C3%B4i-mu%E1%BB%91n-x%C3%B3a-file-to-qu%C3%A1-%C4%91%E1%BB%83-ch%C6%B0a-bao-gi%E1%BB%9D-xu%E1%BA%A5t-hi%E1%BB%87n-trong-l%E1%BB%8Bch-s%E1%BB%AD-repository)
      - [Cách khuyến khích: Sử dụng dịch vụ bên thứ ba bfg](#c%C3%A1ch-khuy%E1%BA%BFn-kh%C3%ADch-s%E1%BB%AD-d%E1%BB%A5ng-d%E1%BB%8Bch-v%E1%BB%A5-b%C3%AAn-th%E1%BB%A9-ba-bfg)
      - [Cách có sẵn: Sử dụng git-filter-branch](#c%C3%A1ch-c%C3%B3-s%E1%BA%B5n-s%E1%BB%AD-d%E1%BB%A5ng-git-filter-branch)
      - [Bước cuối: Đẩy lịch sử đã thay đổi của repository](#b%C6%B0%E1%BB%9Bc-cu%E1%BB%91i-%C4%91%E1%BA%A9y-l%E1%BB%8Bch-s%E1%BB%AD-%C4%91%C3%A3-thay-%C4%91%E1%BB%95i-c%E1%BB%A7a-repository)
    - [Tôi cần thay đổi nội dung của một commit nhưng không phải là cái mới nhất](#t%C3%B4i-c%E1%BA%A7n-thay-%C4%91%E1%BB%95i-n%E1%BB%99i-dung-c%E1%BB%A7a-m%E1%BB%99t-commit-nh%C6%B0ng-kh%C3%B4ng-ph%E1%BA%A3i-l%C3%A0-c%C3%A1i-m%E1%BB%9Bi-nh%E1%BA%A5t)
  - [Staging (sân chuyển tiếp)](#staging-s%C3%A2n-chuy%E1%BB%83n-ti%E1%BA%BFp)
    - [Tôi muốn nâng lên stage tất cả file đang theo dõi và bỏ qua file không theo dõi](#t%C3%B4i-mu%E1%BB%91n-n%C3%A2ng-l%C3%AAn-stage-t%E1%BA%A5t-c%E1%BA%A3-file-%C4%91ang-theo-d%C3%B5i-v%C3%A0-b%E1%BB%8F-qua-file-kh%C3%B4ng-theo-d%C3%B5i)
      - [Chỉ nâng một phần các file đang theo dõi](#ch%E1%BB%89-n%C3%A2ng-m%E1%BB%99t-ph%E1%BA%A7n-c%C3%A1c-file-%C4%91ang-theo-d%C3%B5i)
    - [Tôi cần cho thêm các thay đổi đang trong stage vào commit trước](#t%C3%B4i-c%E1%BA%A7n-cho-th%C3%AAm-c%C3%A1c-thay-%C4%91%E1%BB%95i-%C4%91ang-trong-stage-v%C3%A0o-commit-tr%C6%B0%E1%BB%9Bc)
    - [Tôi muốn stage một phần của một file mới, nhưng không phải toàn bộ file](#t%C3%B4i-mu%E1%BB%91n-stage-m%E1%BB%99t-ph%E1%BA%A7n-c%E1%BB%A7a-m%E1%BB%99t-file-m%E1%BB%9Bi-nh%C6%B0ng-kh%C3%B4ng-ph%E1%BA%A3i-to%C3%A0n-b%E1%BB%99-file)
    - [Tôi muốn thêm các thay đổi trong một file vào 2 commit khác nhau](#t%C3%B4i-mu%E1%BB%91n-th%C3%AAm-c%C3%A1c-thay-%C4%91%E1%BB%95i-trong-m%E1%BB%99t-file-v%C3%A0o-2-commit-kh%C3%A1c-nhau)
    - [Tôi cho lên stage quá nhiều thay đổi, và tôi muốn tách ra thành các commit khác nhau](#t%C3%B4i-cho-l%C3%AAn-stage-qu%C3%A1-nhi%E1%BB%81u-thay-%C4%91%E1%BB%95i-v%C3%A0-t%C3%B4i-mu%E1%BB%91n-t%C3%A1ch-ra-th%C3%A0nh-c%C3%A1c-commit-kh%C3%A1c-nhau)
    - [Tôi muốn cho lên stage các chỉnh sửa chưa được stage và hã khỏi stage các chỉnh sửa đã stage](#t%C3%B4i-mu%E1%BB%91n-cho-l%C3%AAn-stage-c%C3%A1c-ch%E1%BB%89nh-s%E1%BB%ADa-ch%C6%B0a-%C4%91%C6%B0%E1%BB%A3c-stage-v%C3%A0-h%C3%A3-kh%E1%BB%8Fi-stage-c%C3%A1c-ch%E1%BB%89nh-s%E1%BB%ADa-%C4%91%C3%A3-stage)
  - [Thay đổi chưa lên sân (Unstaged Edits)](#thay-%C4%91%E1%BB%95i-ch%C6%B0a-l%C3%AAn-s%C3%A2n-unstaged-edits)
    - [Tôi muốn di chuyển các chỉnh sửa chưa lên stage sang một nhánh mới](#t%C3%B4i-mu%E1%BB%91n-di-chuy%E1%BB%83n-c%C3%A1c-ch%E1%BB%89nh-s%E1%BB%ADa-ch%C6%B0a-l%C3%AAn-stage-sang-m%E1%BB%99t-nh%C3%A1nh-m%E1%BB%9Bi)
    - [Tôi muốn di chuyển các chỉnh sửa chưa stage của tôi đến một nhánh khác đã tồn tại](#t%C3%B4i-mu%E1%BB%91n-di-chuy%E1%BB%83n-c%C3%A1c-ch%E1%BB%89nh-s%E1%BB%ADa-ch%C6%B0a-stage-c%E1%BB%A7a-t%C3%B4i-%C4%91%E1%BA%BFn-m%E1%BB%99t-nh%C3%A1nh-kh%C3%A1c-%C4%91%C3%A3-t%E1%BB%93n-t%E1%BA%A1i)
    - [Tôi muốn bỏ các thay đôi chưa trong commit tại local (đã lên hoặc chưa lên stage)](#t%C3%B4i-mu%E1%BB%91n-b%E1%BB%8F-c%C3%A1c-thay-%C4%91%C3%B4i-ch%C6%B0a-trong-commit-t%E1%BA%A1i-local-%C4%91%C3%A3-l%C3%AAn-ho%E1%BA%B7c-ch%C6%B0a-l%C3%AAn-stage)
    - [Tôi muốn loại bỏ các thay đổi cụ thể chưa lên stage](#t%C3%B4i-mu%E1%BB%91n-lo%E1%BA%A1i-b%E1%BB%8F-c%C3%A1c-thay-%C4%91%E1%BB%95i-c%E1%BB%A5-th%E1%BB%83-ch%C6%B0a-l%C3%AAn-stage)
    - [Tôi muốn loại bỏ các file cụ thể chưa lên stage](#t%C3%B4i-mu%E1%BB%91n-lo%E1%BA%A1i-b%E1%BB%8F-c%C3%A1c-file-c%E1%BB%A5-th%E1%BB%83-ch%C6%B0a-l%C3%AAn-stage)
    - [Tôi muốn chỉ loại bỏ các thay đổi chưa lên stage tại local](#t%C3%B4i-mu%E1%BB%91n-ch%E1%BB%89-lo%E1%BA%A1i-b%E1%BB%8F-c%C3%A1c-thay-%C4%91%E1%BB%95i-ch%C6%B0a-l%C3%AAn-stage-t%E1%BA%A1i-local)
    - [Tôi muốn loại bỏ tất cả các file chưa được theo dõi (track)](#t%C3%B4i-mu%E1%BB%91n-lo%E1%BA%A1i-b%E1%BB%8F-t%E1%BA%A5t-c%E1%BA%A3-c%C3%A1c-file-ch%C6%B0a-%C4%91%C6%B0%E1%BB%A3c-theo-d%C3%B5i-track)
    - [Tôi muốn hạ khỏi stage một file cụ thể đã stage](#t%C3%B4i-mu%E1%BB%91n-h%E1%BA%A1-kh%E1%BB%8Fi-stage-m%E1%BB%99t-file-c%E1%BB%A5-th%E1%BB%83-%C4%91%C3%A3-stage)
  - [Nhánh](#nh%C3%A1nh)
    - [Tôi muốn liệt kê tất cả các nhánh](#t%C3%B4i-mu%E1%BB%91n-li%E1%BB%87t-k%C3%AA-t%E1%BA%A5t-c%E1%BA%A3-c%C3%A1c-nh%C3%A1nh)
    - [Tạo một nhánh mới từ một commit](#t%E1%BA%A1o-m%E1%BB%99t-nh%C3%A1nh-m%E1%BB%9Bi-t%E1%BB%AB-m%E1%BB%99t-commit)
    - [Tôi đã pull (kéo) từ/vào sai nhánh](#t%C3%B4i-%C4%91%C3%A3-pull-k%C3%A9o-t%E1%BB%ABv%C3%A0o-sai-nh%C3%A1nh)
    - [Tôi muốn loại bỏ các commit tại local để nhánh của tôi giống như nhánh trên server](#t%C3%B4i-mu%E1%BB%91n-lo%E1%BA%A1i-b%E1%BB%8F-c%C3%A1c-commit-t%E1%BA%A1i-local-%C4%91%E1%BB%83-nh%C3%A1nh-c%E1%BB%A7a-t%C3%B4i-gi%E1%BB%91ng-nh%C6%B0-nh%C3%A1nh-tr%C3%AAn-server)
    - [Tôi đã tạo commit lên main thay vì một nhánh mới](#t%C3%B4i-%C4%91%C3%A3-t%E1%BA%A1o-commit-l%C3%AAn-main-thay-v%C3%AC-m%E1%BB%99t-nh%C3%A1nh-m%E1%BB%9Bi)
    - [Tôi muốn giữ toàn bộ file từ một ref-ish khác](#t%C3%B4i-mu%E1%BB%91n-gi%E1%BB%AF-to%C3%A0n-b%E1%BB%99-file-t%E1%BB%AB-m%E1%BB%99t-ref-ish-kh%C3%A1c)
    - [Tôi đã thực hiện một số commit trên một nhánh mặc dù chúng nên ở các nhánh khác nhau](#t%C3%B4i-%C4%91%C3%A3-th%E1%BB%B1c-hi%E1%BB%87n-m%E1%BB%99t-s%E1%BB%91-commit-tr%C3%AAn-m%E1%BB%99t-nh%C3%A1nh-m%E1%BA%B7c-d%C3%B9-ch%C3%BAng-n%C3%AAn-%E1%BB%9F-c%C3%A1c-nh%C3%A1nh-kh%C3%A1c-nhau)
    - [Tôi muốn xóa các nhánh local đã bị xóa tại luồng trước (upstream)](#t%C3%B4i-mu%E1%BB%91n-x%C3%B3a-c%C3%A1c-nh%C3%A1nh-local-%C4%91%C3%A3-b%E1%BB%8B-x%C3%B3a-t%E1%BA%A1i-lu%E1%BB%93ng-tr%C6%B0%E1%BB%9Bc-upstream)
    - [Tôi vô tình xóa nhánh của tôi](#t%C3%B4i-v%C3%B4-t%C3%ACnh-x%C3%B3a-nh%C3%A1nh-c%E1%BB%A7a-t%C3%B4i)
    - [Tôi muốn xoá một nhánh](#t%C3%B4i-mu%E1%BB%91n-xo%C3%A1-m%E1%BB%99t-nh%C3%A1nh)
    - [Tôi muốn xoá nhiều nhánh](#t%C3%B4i-mu%E1%BB%91n-xo%C3%A1-nhi%E1%BB%81u-nh%C3%A1nh)
    - [Tôi muốn đổi tên một nhánh](#t%C3%B4i-mu%E1%BB%91n-%C4%91%E1%BB%95i-t%C3%AAn-m%E1%BB%99t-nh%C3%A1nh)
    - [Tôi muốn checkout đến một nhánh remote mà người khác đang làm việc trên đó](#t%C3%B4i-mu%E1%BB%91n-checkout-%C4%91%E1%BA%BFn-m%E1%BB%99t-nh%C3%A1nh-remote-m%C3%A0-ng%C6%B0%E1%BB%9Di-kh%C3%A1c-%C4%91ang-l%C3%A0m-vi%E1%BB%87c-tr%C3%AAn-%C4%91%C3%B3)
    - [Tôi muốn tạo một nhánh remote mới từ một nhánh local hiện tại](#t%C3%B4i-mu%E1%BB%91n-t%E1%BA%A1o-m%E1%BB%99t-nh%C3%A1nh-remote-m%E1%BB%9Bi-t%E1%BB%AB-m%E1%BB%99t-nh%C3%A1nh-local-hi%E1%BB%87n-t%E1%BA%A1i)
    - [Tôi muốn thiết lập một nhánh remote làm upstream (luồng trước) cho một nhánh local](#t%C3%B4i-mu%E1%BB%91n-thi%E1%BA%BFt-l%E1%BA%ADp-m%E1%BB%99t-nh%C3%A1nh-remote-l%C3%A0m-upstream-lu%E1%BB%93ng-tr%C6%B0%E1%BB%9Bc-cho-m%E1%BB%99t-nh%C3%A1nh-local)
    - [Tôi muốn để HEAD của tôi dõi theo nhánh mặc định của remote](#t%C3%B4i-mu%E1%BB%91n-%C4%91%E1%BB%83-head-c%E1%BB%A7a-t%C3%B4i-d%C3%B5i-theo-nh%C3%A1nh-m%E1%BA%B7c-%C4%91%E1%BB%8Bnh-c%E1%BB%A7a-remote)
    - [Tôi đã thực hiện thay đổi trên sai nhánh](#t%C3%B4i-%C4%91%C3%A3-th%E1%BB%B1c-hi%E1%BB%87n-thay-%C4%91%E1%BB%95i-tr%C3%AAn-sai-nh%C3%A1nh)
    - [Tôi muốn tách một nhánh thành hai](#t%C3%B4i-mu%E1%BB%91n-t%C3%A1ch-m%E1%BB%99t-nh%C3%A1nh-th%C3%A0nh-hai)
  - [Rebasing và Merging](#rebasing-v%C3%A0-merging)
    - [Tôi muốn đảo ngược rebase/merge](#t%C3%B4i-mu%E1%BB%91n-%C4%91%E1%BA%A3o-ng%C6%B0%E1%BB%A3c-rebasemerge)
    - [Tôi đã rebase, nhưng tôi không muốn push ép (force push)](#t%C3%B4i-%C4%91%C3%A3-rebase-nh%C6%B0ng-t%C3%B4i-kh%C3%B4ng-mu%E1%BB%91n-push-%C3%A9p-force-push)
    - [Tôi cần kết hợp các commit](#t%C3%B4i-c%E1%BA%A7n-k%E1%BA%BFt-h%E1%BB%A3p-c%C3%A1c-commit)
      - [Chiến lược merge an toàn](#chi%E1%BA%BFn-l%C6%B0%E1%BB%A3c-merge-an-to%C3%A0n)
      - [Tôi cần merge một nhánh thành một commit duy nhất](#t%C3%B4i-c%E1%BA%A7n-merge-m%E1%BB%99t-nh%C3%A1nh-th%C3%A0nh-m%E1%BB%99t-commit-duy-nh%E1%BA%A5t)
      - [Tôi chỉ muốn kết hợp các commit chưa push](#t%C3%B4i-ch%E1%BB%89-mu%E1%BB%91n-k%E1%BA%BFt-h%E1%BB%A3p-c%C3%A1c-commit-ch%C6%B0a-push)
      - [Tôi cần huỷ bỏ merge](#t%C3%B4i-c%E1%BA%A7n-hu%E1%BB%B7-b%E1%BB%8F-merge)
    - [Tôi cần cập nhật commit gốc (parent commit) cho nhánh của tôi](#t%C3%B4i-c%E1%BA%A7n-c%E1%BA%ADp-nh%E1%BA%ADt-commit-g%E1%BB%91c-parent-commit-cho-nh%C3%A1nh-c%E1%BB%A7a-t%C3%B4i)
    - [Kiểm tra xem tất cả commit trên một nhánh đã được merge](#ki%E1%BB%83m-tra-xem-t%E1%BA%A5t-c%E1%BA%A3-commit-tr%C3%AAn-m%E1%BB%99t-nh%C3%A1nh-%C4%91%C3%A3-%C4%91%C6%B0%E1%BB%A3c-merge)
    - [Các vấn đề có thể xảy ra với interactive rebase](#c%C3%A1c-v%E1%BA%A5n-%C4%91%E1%BB%81-c%C3%B3-th%E1%BB%83-x%E1%BA%A3y-ra-v%E1%BB%9Bi-interactive-rebase)
      - [Màn hình chỉnh sửa rebase ghi 'noop'](#m%C3%A0n-h%C3%ACnh-ch%E1%BB%89nh-s%E1%BB%ADa-rebase-ghi-noop)
      - [Có một vài xung đột](#c%C3%B3-m%E1%BB%99t-v%C3%A0i-xung-%C4%91%E1%BB%99t)
  - [Stash (Cất)](#stash-c%E1%BA%A5t)
    - [Stash tất cả chỉnh sửa](#stash-t%E1%BA%A5t-c%E1%BA%A3-ch%E1%BB%89nh-s%E1%BB%ADa)
    - [Stash các file cụ thể](#stash-c%C3%A1c-file-c%E1%BB%A5-th%E1%BB%83)
    - [Stash với message (thông điệp)](#stash-v%E1%BB%9Bi-message-th%C3%B4ng-%C4%91i%E1%BB%87p)
    - [Apply một stash cụ thể từ danh sách](#apply-m%E1%BB%99t-stash-c%E1%BB%A5-th%E1%BB%83-t%E1%BB%AB-danh-s%C3%A1ch)
    - [Stash trong khi giữ các thay đổi chưa stage](#stash-trong-khi-gi%E1%BB%AF-c%C3%A1c-thay-%C4%91%E1%BB%95i-ch%C6%B0a-stage)
  - [Finding (Tìm)](#finding-t%C3%ACm)
    - [Tôi muốn tìm một chuỗi ký tự trong bất kỳ commit nào](#t%C3%B4i-mu%E1%BB%91n-t%C3%ACm-m%E1%BB%99t-chu%E1%BB%97i-k%C3%BD-t%E1%BB%B1-trong-b%E1%BA%A5t-k%E1%BB%B3-commit-n%C3%A0o)
    - [Tôi muốn tìm tác giả hoặc người commit](#t%C3%B4i-mu%E1%BB%91n-t%C3%ACm-t%C3%A1c-gi%E1%BA%A3-ho%E1%BA%B7c-ng%C6%B0%E1%BB%9Di-commit)
    - [Tôi muốn liệt kê các commit chứa các file cụ thể](#t%C3%B4i-mu%E1%BB%91n-li%E1%BB%87t-k%C3%AA-c%C3%A1c-commit-ch%E1%BB%A9a-c%C3%A1c-file-c%E1%BB%A5-th%E1%BB%83)
    - [Tôi muốn xem lịch sử commit của một function (chức năng) cụ thể](#t%C3%B4i-mu%E1%BB%91n-xem-l%E1%BB%8Bch-s%E1%BB%AD-commit-c%E1%BB%A7a-m%E1%BB%99t-function-ch%E1%BB%A9c-n%C4%83ng-c%E1%BB%A5-th%E1%BB%83)
    - [Tìm một tag mà một commit đã tham chiếu](#t%C3%ACm-m%E1%BB%99t-tag-m%C3%A0-m%E1%BB%99t-commit-%C4%91%C3%A3-tham-chi%E1%BA%BFu)
  - [Submodules](#submodules)
    - [Clone tất cả submodules](#clone-t%E1%BA%A5t-c%E1%BA%A3-submodules)
    - [Xoá một submodule](#xo%C3%A1-m%E1%BB%99t-submodule)
  - [Miscellaneous Objects (Những thứ khác)](#miscellaneous-objects-nh%E1%BB%AFng-th%E1%BB%A9-kh%C3%A1c)
    - [Copy thư mục hoặc tệp file từ một nhánh sang nhánh khác](#copy-th%C6%B0-m%E1%BB%A5c-ho%E1%BA%B7c-t%E1%BB%87p-file-t%E1%BB%AB-m%E1%BB%99t-nh%C3%A1nh-sang-nh%C3%A1nh-kh%C3%A1c)
    - [Khôi phục một file đã bị xoá](#kh%C3%B4i-ph%E1%BB%A5c-m%E1%BB%99t-file-%C4%91%C3%A3-b%E1%BB%8B-xo%C3%A1)
    - [Xoá tag](#xo%C3%A1-tag)
    - [Khôi phục một tag đã bị xoá](#kh%C3%B4i-ph%E1%BB%A5c-m%E1%BB%99t-tag-%C4%91%C3%A3-b%E1%BB%8B-xo%C3%A1)
    - [Patch (Vá) bị xóa](#patch-v%C3%A1-b%E1%BB%8B-x%C3%B3a)
    - [Xuất một repository ra một file Zip](#xu%E1%BA%A5t-m%E1%BB%99t-repository-ra-m%E1%BB%99t-file-zip)
    - [Push một nhánh và một tag có tên giống nhau](#push-m%E1%BB%99t-nh%C3%A1nh-v%C3%A0-m%E1%BB%99t-tag-c%C3%B3-t%C3%AAn-gi%E1%BB%91ng-nhau)
  - [Tracking (Theo dõi) các file](#tracking-theo-d%C3%B5i-c%C3%A1c-file)
    - [Tôi muốn thay đổi cách viết hoa của tên tệp mà không thay đổi nội dung của tệp](#t%C3%B4i-mu%E1%BB%91n-thay-%C4%91%E1%BB%95i-c%C3%A1ch-vi%E1%BA%BFt-hoa-c%E1%BB%A7a-t%C3%AAn-t%E1%BB%87p-m%C3%A0-kh%C3%B4ng-thay-%C4%91%E1%BB%95i-n%E1%BB%99i-dung-c%E1%BB%A7a-t%E1%BB%87p)
    - [Tôi muốn ghi đè lên các tệp local khi thực hiện lệnh git pull](#t%C3%B4i-mu%E1%BB%91n-ghi-%C4%91%C3%A8-l%C3%AAn-c%C3%A1c-t%E1%BB%87p-local-khi-th%E1%BB%B1c-hi%E1%BB%87n-l%E1%BB%87nh-git-pull)
    - [Tôi muốn xóa một tệp khỏi Git nhưng vẫn giữ tệp](#t%C3%B4i-mu%E1%BB%91n-x%C3%B3a-m%E1%BB%99t-t%E1%BB%87p-kh%E1%BB%8Fi-git-nh%C6%B0ng-v%E1%BA%ABn-gi%E1%BB%AF-t%E1%BB%87p)
    - [Tôi muốn đảo ngược tệp về bản sửa đổi cụ thể](#t%C3%B4i-mu%E1%BB%91n-%C4%91%E1%BA%A3o-ng%C6%B0%E1%BB%A3c-t%E1%BB%87p-v%E1%BB%81-b%E1%BA%A3n-s%E1%BB%ADa-%C4%91%E1%BB%95i-c%E1%BB%A5-th%E1%BB%83)
    - [Tôi muốn liệt kê các thay đổi của một tệp cụ thể giữa các commit hoặc các nhánh](#t%C3%B4i-mu%E1%BB%91n-li%E1%BB%87t-k%C3%AA-c%C3%A1c-thay-%C4%91%E1%BB%95i-c%E1%BB%A7a-m%E1%BB%99t-t%E1%BB%87p-c%E1%BB%A5-th%E1%BB%83-gi%E1%BB%AFa-c%C3%A1c-commit-ho%E1%BA%B7c-c%C3%A1c-nh%C3%A1nh)
    - [Tôi muốn Git bỏ qua những thay đổi đối với một tệp cụ thể](#t%C3%B4i-mu%E1%BB%91n-git-b%E1%BB%8F-qua-nh%E1%BB%AFng-thay-%C4%91%E1%BB%95i-%C4%91%E1%BB%91i-v%E1%BB%9Bi-m%E1%BB%99t-t%E1%BB%87p-c%E1%BB%A5-th%E1%BB%83)
  - [Debugging (Gỡ lỗi) with Git](#debugging-g%E1%BB%A1-l%E1%BB%97i-with-git)
  - [Cấu hình (Configuration)](#c%E1%BA%A5u-h%C3%ACnh-configuration)
    - [Tôi muốn thêm bí danh (alias) cho một số lệnh Git](#t%C3%B4i-mu%E1%BB%91n-th%C3%AAm-b%C3%AD-danh-alias-cho-m%E1%BB%99t-s%E1%BB%91-l%E1%BB%87nh-git)
    - [Tôi muốn thêm một thư mục trống vào repository của tôi](#t%C3%B4i-mu%E1%BB%91n-th%C3%AAm-m%E1%BB%99t-th%C6%B0-m%E1%BB%A5c-tr%E1%BB%91ng-v%C3%A0o-repository-c%E1%BB%A7a-t%C3%B4i)
    - [Tôi muốn cache (cho vào bộ nhớ đệm) một username và password cho một repository](#t%C3%B4i-mu%E1%BB%91n-cache-cho-v%C3%A0o-b%E1%BB%99-nh%E1%BB%9B-%C4%91%E1%BB%87m-m%E1%BB%99t-username-v%C3%A0-password-cho-m%E1%BB%99t-repository)
    - [Tôi muốn Git bỏ qua các quyền và thay đổi về filemode (chế độ file)](#t%C3%B4i-mu%E1%BB%91n-git-b%E1%BB%8F-qua-c%C3%A1c-quy%E1%BB%81n-v%C3%A0-thay-%C4%91%E1%BB%95i-v%E1%BB%81-filemode-ch%E1%BA%BF-%C4%91%E1%BB%99-file)
    - [Tôi muốn đặt người dùng toàn cục (global user)](#t%C3%B4i-mu%E1%BB%91n-%C4%91%E1%BA%B7t-ng%C6%B0%E1%BB%9Di-d%C3%B9ng-to%C3%A0n-c%E1%BB%A5c-global-user)
  - [Tôi không biết mình đã làm gì sai](#t%C3%B4i-kh%C3%B4ng-bi%E1%BA%BFt-m%C3%ACnh-%C4%91%C3%A3-l%C3%A0m-g%C3%AC-sai)
  - [Git Shortcuts (phím tắt)](#git-shortcuts-ph%C3%ADm-t%E1%BA%AFt)
    - [Git Bash](#git-bash)
    - [PowerShell trên Windows](#powershell-tr%C3%AAn-windows)
- [Tài nguyên khác](#t%C3%A0i-nguy%C3%AAn-kh%C3%A1c)
  - [Sách](#s%C3%A1ch)
  - [Hướng dẫn](#h%C6%B0%E1%BB%9Bng-d%E1%BA%ABn)
  - [Scripts (tập lệnh) và các công cụ](#scripts-t%E1%BA%ADp-l%E1%BB%87nh-v%C3%A0-c%C3%A1c-c%C3%B4ng-c%E1%BB%A5)
  - [GUI Clients](#gui-clients)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Repositories (Kho)

### Tôi muốn tạo một repository trên local

Để tạo một Git repository tại thư mục đã tồn tại:

```sh
(thư-mục-của-tôi) $ git init
```

### Tôi muốn clone một remote repository

Để clone (copy) một remote repository, copy đường dẫn url cho repository, và chạy :

```sh
$ git clone [url]
```

Lệnh này sẽ tải xuống một thư mục có tên giống tên của remote repository. Hãy chắc chắn rằng bạn có kết nối đến remote server khi bạn đang clone về (phần lớn thời gian nghĩa là cần đảm bảo bạn kết nối được với internet).

Để clone vào một thư mục với tên khác với tên mặc định của repository:

```sh
$ git clone [url] name-of-new-folder
```

### Tôi để sai remote repository

Có thể có vài vấn đề khác nhau:

Nếu bạn clone sai repository, chỉ cần xóa thư mục tạo bởi `git clone` và sau đó clone đúng remote repository.

Nếu bạn để nhầm repository là origin của một local repository hiện tại, thay đổi URL của origin với lệnh:

```sh
$ git remote set-url origin [url của repo đúng]
```

Xem thêm tại [StackOverflow](https://stackoverflow.com/questions/2432764/how-to-change-the-uri-url-for-a-remote-git-repository#2432799).


### Tôi muốn thêm sửa code cho repository của người khác

Git không cho bạn thêm sửa code vào repository của người khác nếu không có quyền truy cập. GitHub cũng thế, GitHub khác với Git vì là dịch vụ hosting cho các Git repository. Nhưng bạn có thể  thêm sửa code với các patch vá lỗi, hoặc, nếu trên GitHub, với forks và pull requests.

Trước hêt, một vài điều về fork. Một fork là một copy của một repository. Đây không phải là một lệnh git, mà là một hành động thường thấy trên GitHub, Bitbucket, GitLab — hoặc bắt cứ đâu host các Git repository. Bạn có thể fork một repository qua UI của dịch vụ host.

#### Thêm sửa code với pull requests

Sau khi đã fork một repository, bạn thường phải clone repository về máy của bạn. Tất nhiên bạn có thể tạo vài chỉnh sửa nhỏ trên GitHub nếu không clone về máy, nhưng văn bản này không phải là github-flight-rules, thế nên hãy xem cách trên máy local.

```sh
# nếu bạn dùng ssh
$ git clone git@github.com:k88hudson/git-flight-rules.git

# nếu bạn dùng https
$ git clone https://github.com/k88hudson/git-flight-rules.git
```

Nếu bạn `cd` vào thư mục được tạo, và chạy lệnh `git remote`, bạn sẽ thấy danh sách các remote. Thường sẽ có một remote - `origin` - trỏ đến `k88hudson/git-flight-rules`. Trong trường hợp này, bạn cũng muốn một remote trỏ đến fork của bạn.

Đầu tiên, để theo quy chuẩn dùng Git, chúng ta sẽ dùng remote tên `origin` cho repository của bạn và tên `upstream` cho repository mà bạn fork. Để đổi tên cho remote `origin` sang tên `upstream` chạy lệnh:

```sh
$ git remote rename origin upstream
```

Bạn cũng có thể đổi tên với lệnh `git remote set-url`, nhưng sẽ mất thêm thời gian và nhiều bước hơn.

Sau đó, tạo remote mới để trỏ về repository của bạn.

```sh
$ git remote add origin git@github.com:YourtGitHubUsername/git-flight-rules.git
```

Lưu ý là bây giờ bạn có hai remote.

- `origin` trỏ đến repository của bạn.
- `upstream` trỏ đến repository nguyên bản  .

Với `origin`, bạn có thể đọc và viết. Với `upstream`, bạn chỉ có thể đọc.

Sau khi đã chỉnh sửa theo mong muốn, push (đẩy) các thay đổi (thường là ở trong branch) tới remote tên `origin`. Nếu bạn ở trên nhánh, bạn có thể dùng `--set-upstream` để tránh cần phải ghi rõ dùng brach nào của remote mỗi lần push trong tương lai khi dùng nhánh đấy. Ví dụ:

```sh
$ (feature/my-feature) git push --set-upstream origin feature/my-feature
```

Không có cách nào để tạo pull request trên giao diện lệnh (CLI) với Git (mặc dù có vài công cụ, như [hub](http://github.com/github/hub), có cho bạn lựa chọn này). Nếu bạn sãn sàng tạo Pull Request, trở lại GitHub (hoặc dịch vụ host Git) và tạo pull request mới. Nhớ là dịch vụ host sẽ tự động link repository nguyên bản và repository do fork.

Sau cùng, nhớ đùng quên trả lời những comment phê duyệt code.

#### Thêm sửa code với các patch (vá)

Một cách khác để thêm sửa code mà không cần sử dụng dịch vụ bên thứ ba như GitHub là dùng `git format-patch`.

`format-patch` tạo file (tệp) dạng .patch  cho một hoặc nhiều commit. File này là cơ bản là danh sách nhưng thay đổi, giống như những commit diffs bạn xem được trên Github.

Các patch có thể được xem hoặc thậm chí thêm sửa bởi người nhận và áp gắn với lệnh `git am`.

Ví dụ, để tạo patch dựa vào commit mới nhât, bạn chạy lệnh `git format-patch HEAD^`, lệnh sẽ tạo một tệp .patch với tên như: `0001-My-Commit-Message.patch`.

Để áp gắn tệp patch cho repository, bạn sẽ dùng lệnh `git am ./0001-My-Commit-Message.patch`.

Các patch còn có thể gửi qua email với lệnh `git send-email`. Để xem thêm thông tin về cách dùng hoặc cấu hình, xem: https://git-send-email.io

#### Tôi cần update fork của tôi với những thay đổi mới nhất từ repository nguyên bản

Sau một quãng thời gian, kho `upstream` có thể có thêm thay đổi, và những thay đổi này cần phải được tải về  kho `origin`. Nhớ là giống bạn, những người khác cũng đang góp sức của họ. Giả dụ bạn đang ở nhánh cho tính năng mới bạn đang thiết kế, và bạn cần update nhánh với những thay đổi trên repository nguyên bản.

Có khi bạn đã có remote trỏ đến project nguyên bản. Nếu không, hãy tạo nó. Thường chúng ta dùng tên `upstream` cho remote này:

```sh
$ (main) git remote add upstream <link-tới-repository-nguyên-bản>
# $ (main) git remote add upstream git@github.com:k88hudson/git-flight-rules.git
```

Bây giờ bạn fetch (lấy) từ `upstream` và nhận những update mới nhất.

```sh
$ (main) git fetch upstream
$ (main) git merge upstream/main

# hoặc với một lệnh duy nhất
$ (main) git pull upstream main
```

## Chỉnh sửa Commit

<a name="diff-last"></a>
### Tôi vừa commit cái gì?

Giả sử bạn vừa commit những thay đổi một cách mù quáng với lệnh `git commit -a` và bạn không chắc chắn nội dung thực sự của commit vừa thực hiện là gì. Bạn có thể hiển thị ra commit gần nhất trên trỏ HEAD hiện tại của bạn với lệnh:

```sh
(main)$ git show
```

Hoặc

```sh
$ git log -n1 -p
```

Nếu bạn muốn xem một file tại một commit cụ thể, bạn cũng có thể làm được điều này (khi `<commitid>`  là commit mà bạn muốn biết) với lệnh:

```sh
$ git show <commitid>:filename
```

<a name="wrong-thing-in-commit-message"></a>
### Tôi đã viết sai vài thứ trong message (thông điệp) của commit

Nếu bạn đã viết sai thứ gì đó và commit chưa được push lên, bạn có thể làm theo cách sau để thay đổi message của commit mà không làm thay đổi commit:

```sh
$ git commit --amend --only
```

Câu lệnh đó sẽ mở trình soạn thảo (text editor) mặc định của bạn, nơi bạn có thể chỉnh sửa message. Ngoài ra, bạn có thể làm tất cả điều này với lệnh sau:

```sh
$ git commit --amend --only -m 'xxxxxxx'
```

Nếu bạn đã đẩy message lên, bạn có thể chỉnh sửa commit và force push (đẩy ép), nhưng cách này không được khuyến khích.

<a name="commit-wrong-author"></a>
### Tôi đã commit với cấu hình tên và email sai

Nếu đó là một commit độc lập, chỉnh sửa nó:

```sh
$ git commit --amend --no-edit --author "TênTácGiảMới <authoremail@mydomain.com>"
```

Một cách khác để cấu hình đúng tác giả là cài đặt lại với lệnh `git config --global author.(name|email)` và sau đó chạy lệnh

```sh
$ git commit --amend --reset-author --no-edit
```

Nếu bạn cần thay đổi tất cả lịch sử, hãy xem trang `man` của `git filter-branch`.

### Tôi muốn xoá một file từ commit trước

Để xoá các thay đổi đối với một file khỏi commit trước, hãy làm như sau:

```sh
$ git checkout HEAD^ myfile
$ git add myfile
$ git commit --amend --no-edit
```

Trong trường hợp file mới được thêm vào commit và bạn muốn xoá nó (riêng trên Git), hãy thực hiện:

```sh
$ git rm --cached myfile
$ git commit --amend --no-edit
```

Cách này đăc biệt hữu ích khi bạn đang mở một bản patch và bạn đã commit một file không cần thiết và cần force push để cập nhật bản patch trên remote. Dòng `--no-edit` được dùng để giữ không thay đổi message cho commit hiện tại.

<a name="delete-pushed-commit"></a>
### Tôi muốn xoá hoặc loại bỏ commit mới nhất

Nếu bạn muốn xoá các commit đã push, bạn có thể làm như sau. Tuy nhiên, cách này sẽ thay đổi lịch sử  commit không thay đổi được và làm hỏng lịch sử của bất kỳ ai khác đã pull từ repository. Tóm lại, nếu bạn không chắc chắn, bạn không bao giờ nên làm cách này.

```sh
$ git reset HEAD^ --hard
$ git push --force-with-lease [remote] [branch]
```

Nếu bạn chưa push, để  đảo ngược Git về trạng thái trước khi bạn thực hiện commit mới nhất (trong khi vãn giữ các thay đổi trong stage) hãy chạy lệnh:

```
(my-branch)$ git reset --soft HEAD^
```

Cách này chỉ phù hợp nếu bạn chưa push. Nếu bạn đã push, điều thực sự an toàn nhất cần làm là `git revert SHAcủaCommitSai`. Lệnh này sẽ tạo một commit mới để quay trở lại thay đổi của commit trước đó. Hoặc nếu nhánh bạn đã push là rebase-safe (không có kỳ vọng các dev khác sẽ pull từ nó), bạn chỉ có thể sử dụng `git push --force-with-lease`. Để biết thêm, hãy xem [phần trên](#delete-pushed-commit).

<a name="delete-any-commit"></a>
### Xoá/loại bỏ bất kỳ commit nào

Lưu ý như trên. Không bao giờ làm điều này nếu có thể tránh được.

```sh
$ git rebase --onto SHA1_OF_BAD_COMMIT^ SHA1_OF_BAD_COMMIT
$ git push --force-with-lease [remote] [branch]
```

Hoặc thực hiện một [interactive rebase](#interactive-rebase) và loại bỏ các dòng tương ứng với các commit bạn muốn loại bỏ.

<a name="force-push"></a>
### Tôi đã cố gắng push commit đã sửa đổi lên remote, nhưng tôi gặp thông báo lỗi

```sh
To https://github.com/yourusername/repo.git
! [rejected]        mybranch -> mybranch (non-fast-forward)
error: failed to push some refs to 'https://github.com/tanay1337/webmaker.org.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

Lưu ý rằng, như với rebase (xem bên dưới), amend **thay thế commit cũ với một commit mới**, nên bạn phải force push (`--force-with-lease`) các thay đổi của bạn nếu bạn đã push commit trước amend lên remote của bạn. Hãy cẩn thận khi bạn cách này &ndash; *luôn luôn* đảm bảo rằng bạn đã chỉ định một nhánh!

```sh
(my-branch)$ git push origin mybranch --force-with-lease
```

Nói chung, **tránh force push**. Tốt nhất là tạo và push một commit mới thay vì force-push commit đã sửa đổi vì nó sẽ gây xung đột trong lịch sử commit cho bất kỳ developer nào đã tương tác với nhánh được đề cập hoặc bất kỳ nhánh con nào. `--force-with-lease` sẽ vẫn fail, nếu ai khác cũng đang làm việc trên cùng một nhánh với bạn và việc push lên sẽ ép trên những thay đổi đó.

Nếu bạn *hoàn toàn chắc chắn* rằng không ai đang làm việc trên cùng một nhánh hoặc bạn muốn cập nhật đỉnh nhánh (tip of branch) *vô điều kiện*, bạn có thể sử dụng `--force` (`-f`), nhưng cách này nói chung nên tránh.

<a name="undo-git-reset-hard"></a>
### Tôi đã vô tình thực hiện hard reset và tôi muốn các thay đổi của tôi.

Nếu vô tình bạn thực hiện `git reset --hard`, bạn có thể vẫn phục hồi lại được commit của bạn, vì git giữ một bản log cho tất cả mọi thứ trong vài ngày.

Chú ý: Điều này chỉ hợp lệ nếu đã có sao lưu, tức là đã có commit hoặc được `stash`. Lệnh `git reset --hard` *sẽ loại bỏ* các thay đổi chưa được commit, vì vậy hãy sử dụng nó một cách thận trọng. (Một lựa chọn an toàn là `git reset --keep`.)

```sh
(main)$ git reflog
```

Bạn sẽ thấy danh sách các commit gần đây và một commit để reset. Chọn SHA của commit bạn muốn trở lại tới và reset lại:

```sh
(main)$ git reset --hard SHA1234
```

Thế này là xong.

<a name="undo-a-commit-merge"></a>
### Tôi vô tình commit và đẩy lên một merge

Nếu bạn vô tình merge một nhánh tính năng mới vào nhánh phát triển chính trước khi sẵn sàng để merge, bạn vẫn có thể đảo ngược merge. Nhưng có một điểm phải nắm được: Một commit merge có một hoặc nhiều hơn một parent (gốc) (thường là 2).

Lệnh để chạy:
```sh
(feature-branch)$ git revert -m 1 <commit>
```
Dòng `-m 1` là để cho biết cần chọn parent thứ nhất` (nhánh mà merge được thực hiện) làm parent để đảo ngược lại.

Chú ý: Số parent không phải là số commit. Thay vào đó, một commit merge sẽ có một dòng như `Merge: 8e2ce2d 86ac2e7`. Số parent là số số nhận dạng đầu-1 (1-based index) của dòng nay, số nhận dạng đầu tiên là 1 cho parent thứ nhất, thứ 2 là cho parent 2, và tiếp tục như thế.

<a name="undo-sensitive-commit-push"></a>
### Tôi vô tình commit và đẩy các file chứa dữ liệu nhảy cảm

Nếu bạn vô tình push lên các file chứa dữ liệu nhạy cảm (mật khẩu, keys, etc.), bạn có thể amend commit trước. Lưu ý rằng khi bạn đã đẩy một commit, bạn nên coi bất kỳ dữ liệu nào đã bị đẩy như đã bị lộ. Các bước này có thể xoá dữ liệu nhạy cảm từ repo công khai (public repo) hoặc bản sao nội bộ, nhưng bạn *không thể* xóa dữ liệu nhạy cảm khỏi các bản sao đã được tải về bởi người khác. Nếu bạn có commit mật khẩu, *hãy thay đổi mật khẩu ngay lập tức*. Nếu bạn đã commit một key, *hãy tạo lại key đó ngay lập tức*. Việc amend commit đã đẩy là không đủ, vì bất kỳ ai cũng có thể đã pull commit chứa dữ liệu nhạy cảm của bạn trong thời gian đấy.

Nếu bạn đã chỉnh sửa tệp và xóa dữ liệu nhạy cảm, hãy chạy
```sh
(feature-branch)$ git add EditedFile
(feature-branch)$ git commit --amend --no-edit
(feature-branch)$ git push --force-with-lease origin [branch]
```

Nếu bạn muốn xóa toàn bộ tệp (nhưng giữ trên local), hãy chạy:
```sh
(feature-branch)$ git rm --cached sensitive_file
echo sensitive_file >> .gitignore
(feature-branch)$ git add .gitignore
(feature-branch)$ git commit --amend --no-edit
(feature-branch)$ git push --force-with-lease origin [branch]
```
Ngoài ra, lưu trữ dữ liệu nhạy cảm của bạn trong các biến môi trường (variable) của local.

Nếu bạn muốn xóa hoàn toàn toàn bộ tệp (và không giữ tệp tại local), hãy chạy

```sh
(feature-branch)$ git rm sensitive_file
(feature-branch)$ git commit --amend --no-edit
(feature-branch)$ git push --force-with-lease origin [branch]
```

Nếu bạn đã thực hiện các commit khác (tức là dữ liệu nhạy cảm nằm tại commit trước commit mới nhất), bạn sẽ phải rebase.

<a name="remove-large-file-in-repo-history"></a>
### Tôi muốn xóa file to quá để chưa bao giờ xuất hiện trong lịch sử repository

Nếu file bạn muốn xóa cần bảo mật hay là file chưa thông tin nhạy cảm, xem phần [xóa file chứa thông tin nhạy cảm](#undo-sensitive-commit-push).

Mặc dù bạn đã xóa một file to hay file không muốn có trong dự án, nó có thể vẫn tồn tại trong lịch sử git (git history) của respository trong thư mục `.git`, và sẽ khiến các lệnh `git clone` tải file không cần thiết.

Những bước trong phần này sẽ yêu cầu push ép, và viết lại phần nào lịch sử git của repository, thế nên nếu bạn làm việc với những người khác, kiểm tra là những thay đổi của họ đã được đẩy.

Có hai lựa chọn để viết lại lịch sử, sử dụng tính năng sãn có `git-filter-branch` hoặc dùng [`bfg-repo-cleaner`](https://rtyley.github.io/bfg-repo-cleaner/). `bfg` thao tác sạch hơn và nhanh hơn, nhưng đây là phần mềm bên thứ ba và cần có Java. Chúng ta sẽ xem cả hai cách. Bước cuối cùng là push ép thay đổi của bạn, lần này sẽ còn cần chú ý xem xét hơn các push ép bình thường bởi vì một phần không nhỏ lịch sử repository sẽ thay đổi vĩnh viễn. 

#### Cách khuyến khích: Sử dụng dịch vụ bên thứ ba bfg

Sử dụng bfg-repo-cleaner cần có Java. Tải file dạng .jar cho phần mềm bfg với đường link [này](https://rtyley.github.io/bfg-repo-cleaner/). Ví dụ tại đây sẽ dùng `bfg.jar`, nhưng file bạn tải xuống có thể có thêm số phiên bản như `bfg-1.13.0.jar`.

Để xóa một file, dùng lệnh:

```sh
(main)$ git rm path/to/FileToRemove
(main)$ git commit -m "Commit removing filetoremove"
(main)$ java -jar ~/Downloads/bfg.jar --delete-files FileToRemove
```

Lưu ý là với bfg bạn dùng tển của file chứ không phải đường dẫn đến file.

Bạn cũng có thể xóa file dượng theo một khuôn mẫu, ví dụ xóa tất cả file dạng .jpg:

```sh
(main)$ git rm *.jpg
(main)$ git commit -m "Commit removing *.jpg"
(main)$ java -jar ~/Downloads/bfg.jar --delete-files *.jpg
```

Với bfg, the files that exist on your latest commit will not be affected. For example, if you had several large .tga files in your repo, and then in an earlier commit, you deleted a subset of them, this call does not touch files present in the latest commit

Lưu ý, nếu bạn thay đổi tên file trong một commit trước, ví dụ: nếu tệp bắt đầu với tên `LargeFileFirstName.mp4` và một commit đổi tên tệp thành `LargeFileSecondName.mp4`, chạy lệnh `java -jar ~/Downloads/bfg.jar --delete-files LargeFileSecondName.mp4` sé không xóa file trong lịch sử git. Hoặc là chạy lệnh `--delete-files` với cả hai tên, hoặc với khuôn mẫu như trên.

#### Cách có sẵn: Sử dụng git-filter-branch

`git-filter-branch` nặng hơn và ít tính năng hơn, nhưng bạn có thể dùng cách này nếu không thể cài hay chạy `bfg`.

Trong lệnh bên dưới, thay `filepattern` với tên file hoặc khuông mẫu, v.d. `*.jpg`. Lệnh này sẽ xóa file theo khuôn mẫu khỏi tất cả lịch sử của tất cả các nhánh. 

```sh
(main)$ git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch filepattern' --prune-empty --tag-name-filter cat -- --all
```

Giải thích lệnh trên:

`--tag-name-filter cat` khá là nặng, nhưng là cách đơn giản nhất để giữ nguyên các tags cho các commit mới bằng cách sử dụng lệnh `cat`.

`--prune-empty` xóa những commit bây giờ để trống rỗng.

#### Bước cuối: Đẩy lịch sử đã thay đổi của repository

Một khi bạn đã xóa file, kiểm tra thật cẩn thận là bạn không làm hỏng cái gì trong repo - và nếu bạn đã làm hỏng cái gì đó, dễ nhất là clone repo lại và bắt đầu từ đầu.
Để kết thúc, bạn có thể dùng chức năng thu hồi rác (garbage collection) để giảm thiểu kích cỡ tệp .git và rồi push ép. c
```sh
(main)$ git reflog expire --expire=now --all && git gc --prune=now --aggressive
(main)$ git push origin --force --tags
```

Vì bạn vừa viết lại toàn bộ lịch sử git repository, lệnh `git push` có thể quá to để thi hành, và gửi lại thông điệp lỗi (error) `“The remote end hung up unexpectedly”`. Nếu việc này xảy ra, bạn có thể thử tăng post buffer của git:
```sh
(main)$ git config http.postBuffer 524288000
(main)$ git push --force
```

Nếu cách này không hiệu quả, bạn sẽ phải push thủ công lịch sử repo từng cục một. Với lệnh bên dưới, dần dần tăng con số cho `<số cục>` đến khi nào lệnh push thành công.
```sh
(main)$ git push -u origin HEAD~<số cục>:refs/head/main --force
```
Một khi lệnh push thành công, dần dần giảm thiểu `<số cục>` cho đến khi một lệnh `git push` bình thường thành công.

<a name="change-content-of-commit-not-my-last"></a>
### Tôi cần thay đổi nội dung của một commit nhưng không phải là cái mới nhất

Giả sử bạn đã có vài (v.d. ba) commit và sau nhận ra là bạn quên mất không cho vào một thứ gì đó hợp hơn với commit đầu tiên. Việc này làm phiền bạn vì mặc dù nếu tiếp tục commit bạn sẽ có lịch sử sạch sẽ nhưng commit của bạn không nguyên chất (những thay đổi liên quan với nhau nên ở cùng một commit). Trong trường hợp như vậy, bạn chắc muốn cho thêm những thay đổi liên quan vào commit mong muốn nhưng không muốn những commit sau tiếp cũng phải sửa theo. Trong trường hợp như vây, `git rebase` có thể cứu bạn.

Hay xem trường hợp mà bạn muốn thay đổi commit số ba nếu đếm ngược. 

```sh
(nhánh-bạn)$ git rebase -i HEAD~4
```

Lệnh trên đưa bạn vào mode (chế độ) rebase tương tác (interactive rebase), chế độ cho phép bạn edit ba commit mới nhất. Một trình soạn thảo (text editor) sẽ bật lên trông giống như sau:

```sh
pick 9e1d264 commit trước ba
pick 4b6e19a commit trước hai
pick f4037ec commit trước
```

và bạn thay/viết thành:

```sh
edit 9e1d264 commit trước ba
pick 4b6e19a commit trước hai
pick f4037ec commit trước
```

Lệnh này bảo rebase là bạn muốn thay đổi commit trước ba và giữ hai commit kia không thay đổi. Sau đó bạn save (và đóng) trình soạn thảo. Git bây giờ sẽ bắt đầu rebase. Nó dừng lại ở commit bạn để là edit và cho bạn cơ hội thay đổi commit đấy. Bây giờ bạn có thể cho thêm những thay đổi bạn lỡ không cho vào lần đầu. Để làm thế, bạn edit rồi stage những thay đổi đấyNow you can apply the changes which you missed applying when you initially committed that commit. Sau đó bạn chạy lệnh:

```sh
(your-branch)$ git commit --amend
```

Lệnh bảo Git là cần tạo lại commit, nhưng giữ nguyên thông điệp commit. which tells Git to recreate the commit, but to leave the commit message unedited. Thế là xong phần khó nhất. Cuối cùng là chạy lệnh:

```sh
(your-branch)$ git rebase --continue
```

Lệnh trên sẽ giải quyết phần còn lại.

## Staging (sân chuyển tiếp)

<a name="stage-tracked-files-and-leave-untracked-files"></a>
### Tôi muốn nâng lên stage tất cả file đang theo dõi và bỏ qua file không theo dõi

```sh
$ git add -u
```

#### Chỉ nâng một phần các file đang theo dõi

```sh
# Để nâng các file dạng .txt
$ git add -u *.txt

# Để nang các file trong thu mục src
$ git add -u src/
```

<a name="add-staged-changes-to-previous-commit"></a>
### Tôi cần cho thêm các thay đổi đang trong stage vào commit trước

```sh
(my-branch*)$ git commit --amend
```

Nếu bạn đã biết bạn không muốn thay đổi thông điệp commit, bạn có thể yêu cầu git sử dụng lại commit message:

```sh
(my-branch*)$ git commit --amend -C HEAD
```

<a name="commit-partial-new-file"></a>
### Tôi muốn stage một phần của một file mới, nhưng không phải toàn bộ file

Thông thường, nếu bạn muốn stage một phần của một file, bạn chạy lệnh này:

```sh
$ git add --patch filename.x
```

Bạn có thể dùng `-p` thay `--patch` cho ngắn. Lệnh này sẽ mở chế độ interactive. Bạn có thể cho thêm `s` để cắt commit - tuy nhiên, nếu là file mới, bạn sẽ không có lựa chọn này. Để thêm một file mới, làm như sau:

```sh
$ git add -N filename.x
```

Sau đó, bạn sẽ cần sử dụng `e` để thủ công thêm dòng. Chạy lệnh `git diff --cached` hoặc
`git diff --staged` sẽ cho bạn thấy những dòng bạn đã stage so với những dòng vẫn lưu ở local.

<a name="stage-in-two-commits"></a>
### Tôi muốn thêm các thay đổi trong một file vào 2 commit khác nhau

`git add` sẽ thêm toàn bộ file vào một commit. `git add -p` sẽ cho vào chế độ tương tác để chọn những thay đổi bạn muốn thêm vào.

<a name="selective-unstage-edits"></a>
### Tôi cho lên stage quá nhiều thay đổi, và tôi muốn tách ra thành các commit khác nhau

`git reset -p` sẽ mở chế độ patch và hộp thoại để reset. Việc này sẽ giống như với lệnh `git add -p`, ngoại trừ là việc chọn "yes" sẽ đưa thay đổi khỏi stage, loại trừ nó khỏi commit tiếp đến.

<a name="unstaging-edits-and-staging-the-unstaged"></a>
### Tôi muốn cho lên stage các chỉnh sửa chưa được stage và hã khỏi stage các chỉnh sửa đã stage

Phần lớn thời gian, bạn nên hạ tất cả các file đã trên stage và chọn lại những file bạn muốn commit.Nhưng giả sử bạn muốn thay các thay đổi lên và hạ stage, bạn có thể tạo một commit tạm thời, nâng lên stage các thay đổi, rồi stash (cất) nó. Sau đó, reset cái commit tạm thời rồi pop cái stage bạn vừa cất.

```sh
$ git commit -m "WIP"
$ git add . # "." sẽ thêm tất cả file chưa theo dõi
$ git stash
$ git reset HEAD^
$ git stash pop --index 0
```

GHI CHÚ 1: Lý do để dùng `pop` là để giữ nguyên các thay đổi nhất có thể.
GHI CHÚ 2: Các file đã nâng lên stage sẽ bị hạ nếu không có thêm cờ `--index`. ([Link](https://stackoverflow.com/questions/31595873/git-stash-with-staged-files-does-stash-convert-staged-files-to-unstaged?answertab=active#tab-top) explains why.)

## Thay đổi chưa lên sân (Unstaged Edits)

<a name="move-unstaged-edits-to-new-branch"></a>
### Tôi muốn di chuyển các chỉnh sửa chưa lên stage sang một nhánh mới

```sh
$ git checkout -b nhánh-mới
```

<a name="move-unstaged-edits-to-old-branch"></a>
### Tôi muốn di chuyển các chỉnh sửa chưa stage của tôi đến một nhánh khác đã tồn tại

```sh
$ git stash
$ git checkout nhánh-tồn-tại
$ git stash pop
```

<a name="discard-local-uncommitted-changes"></a>
### Tôi muốn bỏ các thay đôi chưa trong commit tại local (đã lên hoặc chưa lên stage)

Nếu bạn muốn bỏ tất cả các thay đổi đã lên hoặc chưa lên stage tại local của bạn, bạn có thể làm như sau:

```sh
(my-branch)$ git reset --hard
# hoặc
(main)$ git checkout -f
```

Lệnh sau sẽ hạ khỏi stage tất cả thay đổi bạn đã cho lên stage với `git add`:

```sh
$ git reset
```

Lệnh sau sẽ đảo ngược tất cả các thay đổi chưa commit tại local (nên chạy tại thư mục gốc repo):

```sh
$ git checkout .
```

Bạn cũng có thể đảo ngược các thay đổi chưa commit cho một file hoặc một thư mục cụ thể:

```sh
$ git checkout [thư_mục|file.txt]
```

Tuy nhiên, một cách khác để đảo ngược tất cả các thay đổi chưa commit (dài hơn để nhập, nhưng hoạt động từ bất kỳ thư mục con nào):

```sh
$ git reset --hard HEAD
```

Lệnh trên sẽ xoá tất cả các file chưa được theo dõi(untracked) tại local, do đó, chỉ các file đã được theo dõi bởi git (tracked) còn tồn:

```sh
$ git clean -fd
```

Thêm cờ `-x` để xoá tất cả các file đã ignore.

### Tôi muốn loại bỏ các thay đổi cụ thể chưa lên stage

Khi bạn muốn loại bỏ một số, nhưng không phải tất cả, các thay đổi trong bản sao làm việc của bạn.

Checkout các thay đổi không mong muốn, giữ các thay đổi tốt.

```sh
$ git checkout -p
# Trả lời y đối với những thay đổi bạn không muốn giữ
```

Một cách khác thì sử dụng `stash` (cất). Cất tất cả các thay đổi tốt, reset bản sao làm việc và apply lại các thay đổi tốt.

```sh
$ git stash -p
# Chọn những thay đổi bạn muốn giữ
$ git reset --hard
$ git stash pop
```

Ngoài ra, còn cách cất những thay đổi không mong muốn của bạn và sau đó drop stash.

```sh
$ git stash -p
# Chọn những thay đổi bạn không muốn giữ
$ git stash drop
```

### Tôi muốn loại bỏ các file cụ thể chưa lên stage

Khi bạn muốn loại bỏ một file cụ thể trong bản sao làm việc của bạn.

```sh
$ git checkout FileCủaTôi
```

Ngoài ra, để loại bỏ nhiều file trong bản sao làm việc của bạn, hãy liệt kê tất cả chúng.

```sh
$ git checkout FileThứNhất FileThứHai
```

### Tôi muốn chỉ loại bỏ các thay đổi chưa lên stage tại local

Khi bạn muốn loại bỏ tất cả các thay đổi chưa commit mà chưa stage tại local

```sh
$ git checkout .
```
<a name="discard-all-untracked-files"></a>
### Tôi muốn loại bỏ tất cả các file chưa được theo dõi (track)

Khi bạn muốn loại bỏ tất cả các file chưa được theo dõi

```sh
$ git clean -f
```

<a name="unstage-specific-staged-file"></a>
### Tôi muốn hạ khỏi stage một file cụ thể đã stage

Đôi khi, chúng ta có một hoặc nhiều file đã vô tình lên stage và các file này chưa được commit trước đó. Để hạ chúng khỏi stage:

```sh
$ git reset -- <TênFile>
```

Lệnh trên sẽ hạ file khỏi stage và làm nó không được theo dõi (untracked).

## Nhánh

### Tôi muốn liệt kê tất cả các nhánh

Liệt kê các nhanh tại local

```sh
$ git branch
```

Liệt kê cách nhánh trên remote

```sh
$ git branch -r
```

Liệt kê tất cả các nhánh (cả local và remote)

```sh
$ git branch -a
```

<a name="create-branch-from-commit"></a>
### Tạo một nhánh mới từ một commit
```sh
$ git checkout -b <nhánh> <SHA1_Của_COMMIT>
```

<a name="pull-wrong-branch"></a>
### Tôi đã pull (kéo) từ/vào sai nhánh

Đây là một cơ hội khác để dùng `git reflog` để xem HEAD đã trỏ ở đâu trước khi pull sai.

```sh
(main)$ git reflog
ab7555f HEAD@{0}: pull origin nhánh-sai: Fast-forward
c5bc55a HEAD@{1}: checkout: checkout message goes here
```

Chỉ cần reset nhánh của bạn về commit mong muốn:

```sh
$ git reset --hard c5bc55a
```

Xong.

<a name="discard-local-commits"></a>
### Tôi muốn loại bỏ các commit tại local để nhánh của tôi giống như nhánh trên server

Kiểm tra rằng bạn chưa push các thay đổi của mình đến server.

`git status` sẽ hiển thị số lượng các commit bạn có hơn origin:

```sh
(my-branch)$ git status
# On branch my-branch
# Your branch is ahead of 'origin/my-branch' by 2 commits.
#   (use "git push" to publish your local commits)
#
```

Một cách để reset về origin (để có nhánh giống như trên remote) là chạy lệnh:

```sh
(my-branch)$ git reset --hard origin/my-branch
```

<a name="commit-wrong-branch"></a>
### Tôi đã tạo commit lên main thay vì một nhánh mới

Tạo nhánh mới trong khi giữ main:

```sh
(main)$ git branch my-branch
```

Reset nhánh main đến commit trước đó:

```sh
(main)$ git reset --hard HEAD^
```

`HEAD^` là viết tắt của `HEAD^1`. Đây là viết tắt của parent thứ nhất `HEAD`, tương tự `HEAD^2` là viết tắt của parent thứ hai của commit (merge có thể có 2 parent).

Chú ý rằng `HEAD^2`  **không** giống như `HEAD~2` (xem [link](http://www.paulboxley.com/blog/2011/06/git-caret-and-tilde) để thêm thông tin).

Ngoài ra, nếu bạn không muốn sử dụng `HEAD^`, tìm mã hash của commit mà bạn muốn main trỏ về(`git log` sẽ giúp bạn). Sau đó reset về mã hash đấy. `git push` sẽ đảm bảo rằng thay đổi này sẽ hiện trên remote của bạn.

Ví dụ, nếu hash của commit mà nhánh main của bạn đáng ra là `a13b85e`:

```sh
(main)$ git reset --hard a13b85e
HEAD is now at a13b85e
```

Checkout một nhánh mới để tiếp tục làm việc:

```sh
(main)$ git checkout my-branch
```

<a name="keep-whole-file"></a>
### Tôi muốn giữ toàn bộ file từ một ref-ish khác

Giả sử bạn có một cột mũi làm việc (xem Ghi Chú), với hàng trăm thay đổi. Mọi thứ đang hoạt động. Bây giờ, bạn commit vào một nhánh khác để lưu những thay đổi đó:

```sh
(solution)$ git add -A && git commit -m "Cho tất cả các thay đổi trong cột mũi làm việc này vào một commit to."
```

Khi bạn muốn đặt nó vào một nhánh (có thể là feature, có thể `develop`), bạn quan tâm đến việc giữ toàn bộ các file. Bạn muốn chia commit lớn của bạn thành những cái nhỏ hơn.

Giả sử bạn có:

  * nhánh `solution`, với giáp pháp bạn phát triển với cột mũi làm việc của bạn. Hơn `develop` một commit.
  * nhánh `develop`, nơi bạn muốn thêm các thay đổi của bạn.

Bạn có thể giải quyết bằng cách mang nội dung thay đổi sang nhánh của bạn:

```sh
(develop)$ git checkout solution -- file1.txt
```

Lệnh trên sẽ lấy nội dung của tập tin đó trong nhánh `solution` đến nhánh `develop` của bạn:

```sh
# On branch develop
# Your branch is up-to-date with 'origin/develop'.
# Changes to be committed:
#  (use "git reset HEAD <file>..." to unstage)
#
#        modified:   file1.txt
```

Sau đó, commit như bình thường.

Lưu ý: Cột mũi giải pháp được phát triển để phân tích hoặc giải quyết vấn đề. Các giải pháp này được sử dụng để ước tính và loại bỏ sau khi mọi người hiểu rõ vấn đề. ~ [Wikipedia](https://en.wikipedia.org/wiki/Extreme_programming_practices).

<a name="cherry-pick"></a>
### Tôi đã thực hiện một số commit trên một nhánh mặc dù chúng nên ở các nhánh khác nhau

Giả sử bạn đang ở trên nhánh main của bạn. Chạy `git log`, bạn thấy bạn đã thực hiện 2 commit:

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

Hãy lưu ý các hash commit của chúng ta cho mỗi bug (lỗi) (`e3851e8` cho #21, `5ea5173` cho #14).

Trước tiên, hãy đặt lại nhánh main của chúng ta về commit chính xác (`a13b85e`):

```sh
(main)$ git reset --hard a13b85e
HEAD is now at a13b85e
```

Bây giờ, chúng ta có thể tạo ra một nhánh mới cho lỗi #21 của chúng ta:

```sh
(main)$ git checkout -b 21
(21)$
```

Bây giờ, hãy *cherry-pick* commit cho bug #21 trên đầu của nhánh. Nói tóm lại là chúng ta sẽ áp commit đó, và chỉ commit đó, trực tiếp vào đầu của nhánh.

```sh
(21)$ git cherry-pick e3851e8
```

Tại thời điểm này, có khả năng có thể có xung đột hợp (merge conflicts). Hãy xem phần [**Có một vài xung đột**](#merge-conflict) trong [phần interactive rebasing ở trên](#interactive-rebase) để làm thế nào giải quyết xung đột hợp.

Bây giờ chúng ta hãy tạo một nhánh mới cho bug # 14, cũng dựa trên nhánh main:

```sh
(21)$ git checkout main
(main)$ git checkout -b 14
(14)$
```

Và cuối cùng, hãy cherry-pick commit cho bug #14:

```sh
(14)$ git cherry-pick 5ea5173
```

<a name="delete-stale-local-branches"></a>
### Tôi muốn xóa các nhánh local đã bị xóa tại luồng trước (upstream)

Khi bạn kết hợp (merge) một pull request trên GitHub, nó sẽ cho bạn lựa chọn để xóa nhánh đã được kết hợp trong fork của bạn. Nếu bạn không có kế hoạch tiếp tục làm việc trên nhánh đấy, mọi thứ sẽ sạch hơn nếu xóa các bản sao local của nhánh, do đó bạn không tồn đọng một cách lộn xộn tại bản sao làm việc của bạn với các nhánh cũ.

```sh
$ git fetch -p upstream
```

upstream` là remote bạn muốn fetch (gọi) về.

<a name="restore-a-deleted-branch"></a>
### Tôi vô tình xóa nhánh của tôi

Nếu bạn thường xuyên push lên remote, bạn sẽ an toàn phần lớn thời gian. Nhưng đôi khi bạn có thể sẽ xóa các nhánh của bạn. Giả sử chúng ta tạo một nhánh và tạo một tệp mới:

```sh
(main)$ git checkout -b my-branch
(my-branch)$ git branch
(my-branch)$ touch foo.txt
(my-branch)$ ls
README.md foo.txt
```

Hãy thêm nó và rồi tạo commit.

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

Bây giờ chúng ta chuyển lại về main và 'vô tình' xóa nhánh của chúng ta

```sh
(my-branch)$ git checkout main
Switched to branch 'main'
Your branch is up-to-date with 'origin/main'.
(main)$ git branch -D my-branch
Deleted branch my-branch (was 4e3cd85).
(main)$ echo ôi không,tôi delete nhánh tôi!
ôi không,tôi delete nhánh tôi!
```

Tại thời điểm này, bạn nên làm quen với 'reflog', một logger (ký sử) được nâng cấp. Nó lưu trữ lịch sử của tất cả các hành động trong repo.

```
(main)$ git reflog
69204cd HEAD@{0}: checkout: moving from my-branch to main
4e3cd85 HEAD@{1}: commit: foo.txt added
69204cd HEAD@{2}: checkout: moving from main to my-branch
```

Như bạn có thể thấy chúng ta có số hash của commit từ nhánh đã xóa của chúng ta. Hãy xem liệu chúng ta có thể khôi phục nhánh đã xóa của chúng ta hay không.

```sh
(main)$ git checkout -b my-branch-help
Switched to a new branch 'my-branch-help'
(my-branch-help)$ git reset --hard 4e3cd85
HEAD is now at 4e3cd85 foo.txt added
(my-branch-help)$ ls
README.md foo.txt
```

Và đấy! Chúng ta đã phục hồi lại được file bị xóa của chúng ta. `git reflog` cũng hữu ích khi rebase tạo sai lầm lớn.

### Tôi muốn xoá một nhánh

Để xoá một nhánh tại remote:

```sh
(main)$ git push origin --delete my-branch
```

Bạn cũng có thể chạy :

```sh
(main)$ git push origin :my-branch
```

Để xoá nhánh tại local:

```sh
(main)$ git branch -d my-branch
```

Để xoá một nhánh local *chưa được* merge với nhánh hiện tại hoặc trên upstream (luồng trước):

```sh
(main)$ git branch -D my-branch
```

### Tôi muốn xoá nhiều nhánh

Giả sử bạn muốn xoá tất cả các nhánh bắt đầu với `fix/`:

```sh
(main)$ git branch | grep 'fix/' | xargs git branch -d
```

### Tôi muốn đổi tên một nhánh

Để đổi tên nhánh local hiện tại:

```sh
(main)$ git branch -m tên-mới
```

Để đổi tên nhánh local khác:

```sh
(main)$ git branch -m tên-cũ tên-mới
```

Để vừa xóa nhánh `tên-cũ` tại remote và push nhánh `tên-mới` từ local:

```sh
(main)$ git push origin :tên_cũ tên_mới
```

<a name="working-on-checkout-remote-branch"></a>
### Tôi muốn checkout đến một nhánh remote mà người khác đang làm việc trên đó

Đầu tiên, fetch tất cả nhánh từ remote:

```sh
(main)$ git fetch --all
```

Giả sử bạn muốn checkout sang `daves` từ remote.

```sh
(main)$ git checkout --track origin/daves
Branch daves set up to track remote branch daves from origin.
Switched to a new branch 'daves'
```

(`--track` là viết tắt của `git checkout -b [branch] [remotename]/[branch]`)

Lệnh này sẽ cung cấp cho bạn một bản sao tại local của nhánh `daves` và mọi cập nhật đã được push cũng sẽ được hiển thị từ remote.

### Tôi muốn tạo một nhánh remote mới từ một nhánh local hiện tại

```sh
$ git push <remote> HEAD
```

Nếu bạn cũng muốn đặt nhánh remote là upstream cho nhánh hiện tại, sử dụng:

```sh
$ git push -u <remote> HEAD
```

Với chế độ `upstream` và `simple` (mặc định trong Git 2.0) của cấu hình `push.default`, lệnh sau sẽ push nhánh hiện tại lên nhánh remote được đăng ký trước đó với `-u`:

```sh
$ git push
```

Các hành vi của các chế độ khác của `git push` được mô tả trong [doc cho `push.default`](https://git-scm.com/docs/git-config#Documentation/git-config.txt-pushdefault).

### Tôi muốn thiết lập một nhánh remote làm upstream (luồng trước) cho một nhánh local

Bạn có thể thiết lập một nhánh remote làm upstream cho nhánh local hiện tại bằng cách chạy lệnh:

```sh
$ git branch --set-upstream-to [remotename]/[branch]
# hoặc, dùng ký tắt:
$ git branch -u [remotename]/[branch]
```

Để thiết lập nhánh upstream remote cho nhánh local khác:

```sh
$ git branch -u [remotename]/[branch] [local-branch]
```

<a name="head-to-track-remote-branch"></a>
### Tôi muốn để HEAD của tôi dõi theo nhánh mặc định của remote

Bằng cách kiểm tra các nhánh remote của bạn, bạn có thể thấy nhánh remote nào mà HEAD của bạn đang theo dõi. Trong một số trường hợp, có thể đấy không phải là nhánh mong muốn.

```sh
$ git branch -r
  origin/HEAD -> origin/gh-pages
  origin/main
```

Để thay đổi  `origin/HEAD` sang theo dõi `origin/main`, bạn có thể chạy lệnh này:

```sh
$ git remote set-head origin --auto
origin/HEAD set to main
```

### Tôi đã thực hiện thay đổi trên sai nhánh

Bạn đã thực hiện các thay đổi chưa được commit và nhận ra bạn đang ở sai nhánh. Stash (cất) các thay đổi và apply (áp dụng) chúng vào nhánh bạn muốn:

```sh
(wrong_branch)$ git stash
(wrong_branch)$ git checkout nhánh_đúng
(correct_branch)$ git stash apply
```

<a name="split-branch-into-two"></a>
### Tôi muốn tách một nhánh thành hai

Bạn đã tạo rất nhiều commit trên một nhành và bây giờ bạn muốn tách nhánh ra thành hai, một nhánh kết thúc với một commit cũ, và một nhánh với tất cả các thay đổi.

Dùng `git log` để tìm commit bạn muốn làm mốc để tách. Sau đó chạy lệnh như sau:

```sh
(original_branch)$ git checkout -b new_branch
(new_branch)$ git checkout original_branch
(original_branch)$ git reset --hard <số sha1 commit để tách>
```

Nếu bạn trước đó đã push nhánh gốc lên remote, bạn sẽ cần phải push ép (force push). Để thêm thông tin xem [Stack Overlflow](https://stackoverflow.com/questions/28983458/how-to-split-a-branch-in-two-with-git/28983843#28983843).

## Rebasing và Merging

<a name="undo-rebase"></a>
### Tôi muốn đảo ngược rebase/merge

Bạn có thể đã merge hoặc rebase nhánh hiện tại của bạn với một nhánh sai hoặc bạn không thể tìm ra cách hoàn thành quá trình rebase/merge. Git lưu con trỏ original HEAD trong một variable (biến) được gọi là ORIG_HEAD trước khi chạy các hành động nguy hiểm, vì vậy bạn có thể dễ dàng khôi phục lại trạng thái trước khi rebase/merge.

```sh
(my-branch)$ git reset --hard ORIG_HEAD
```

<a name="force-push-rebase"></a>
### Tôi đã rebase, nhưng tôi không muốn push ép (force push)

Thật không may, bạn bắt buộc phải push ép, nếu bạn muốn những thay đổi đó được phản ánh trên nhánh remote. Điều này là do bạn đã thay đổi lịch sử. Nhánh remote sẽ không chấp nhận thay đổi trừ khi bạn push ép. Đây là một trong những lý do chính khiến nhiều người sử dụng quy trình làm việc trên merge, thay vì quy trình làm việc trên rebasing - các nhóm lớn có thể gặp rắc rối khi developer push ép. Nên sử dụng rebase một cách thận trọng. Một cách an toàn hơn để sử dụng rebase không là không phản ánh các thay đổi của bạn trên nhánh remote và thay vào đó thực hiện các thao tác sau:

```sh
(main)$ git checkout my-branch
(my-branch)$ git rebase -i main
(my-branch)$ git checkout main
(main)$ git merge --ff-only my-branch
```

Để biết thêm hãy xem [chủ đề này trên SO](https://stackoverflow.com/questions/11058312/how-can-i-use-git-rebase-without-requiring-a-forced-push).

<a name="interactive-rebase"></a>
### Tôi cần kết hợp các commit

Giả sử bạn đang làm việc trong một nhánh có / sẽ trở thành một pull-request cho `main`. Trong trường hợp đơn giản nhất khi bạn chỉ muốn là kết hợp *tất cả* các commit thành một commit và bạn không quan tâm đến timestamp (mốc thời gian) của commit, bạn có thể reset và commit lại. Đảm bảo rằng nhánh main được cập nhật và tất cả các thay đổi của bạn được commit, sau đó:

```sh
(my-branch)$ git reset --soft main
(my-branch)$ git commit -am "New awesome feature"
```

Nếu bạn muốn kiểm soát được nhiều hơn và cũng để bảo vệ timestamp, bạn cần phải làm một vài thứ được gọi là interactive rebase:

```sh
(my-branch)$ git rebase -i main
```

Nếu bạn không làm việc với một nhánh khác, bạn phải rebase tương đối so với `HEAD` của bạn. Nếu bạn muốn gộp 2 commit cuối, bạn sẽ phải rebase tới `HEAD~2`. Cho 3 commit cuối, `HEAD~3`,...

```sh
(main)$ git rebase -i HEAD~2
```

Sau khi bạn chạy lệnh interactive rebase, bạn sẽ thấy trông giống thế này trong trình soạn thảo (text editor) của bạn:

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

Tất cả các dòng bắt đầu bằng một `#` là các comment (chú thích), chúng sẽ không ảnh hưởng đến rebase của bạn.

Sau đó bạn thay thể  lệnh `pick` với những bất cứ lệnh nào trong danh sách trên và bạn cũng có thể loại bỏ các commit khỏi rebase bằng cách xoá các dòng tương ứng.

Ví dụ, nếu bạn muốnn **dữ nguyên commit cũ nhất(đầu tiên) và kết hợp tất cả commit sau với commit cũ thứ hai**, bạn nên chỉnh sửa chữ cái bên cạnh mỗi commit ngoại trừ chữ cái đầu tiên và chữ cái thứ hai với `f`:

```vim
pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
f b729ad5 fixup
f e3851e8 another fix
```

Nếu bạn muốn kết hợp tất cả các commit **và đổi tên commit**, bạn nên thêm một chữ cái `r` bên cạnh commit thứ 2 hoặc đơn giản sử dụng `s` thay vì `f`:

```vim
pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
s b729ad5 fixup
s e3851e8 another fix
```

Bạn có thể đổi tên commit trong đoạn hội thoại sẽ bật lên.

```vim
Newer, awesomer features

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# rebase in progress; onto 8074d12
# You are currently editing a commit while rebasing branch 'main' on '8074d12'.
#
# Changes to be committed:
#   modified:   README.md
#

```

Nếu mọi thứ thành công, bạn sẽ thấy giống như thế này:

```sh
(main)$ Successfully rebased and updated refs/heads/main.
```

#### Chiến lược merge an toàn
`--no-commit` thực hiện merge nhưng giả vờ kết hợp không thành công và không tự động tạo commit, cho phép người dùng có cơ hội kiểm tra và chỉnh thêm kết quả merge trước khi commit. `no-ff` duy trì bằng chứng rằng một nhánh tính năng đã từng tồn tại, giữ lịch sử dự án nhất quán.

```sh
(main)$ git merge --no-ff --no-commit my-branch
```

#### Tôi cần merge một nhánh thành một commit duy nhất

```sh
(main)$ git merge --squash my-branch
```

<a name="rebase-unpushed-commits"></a>
#### Tôi chỉ muốn kết hợp các commit chưa push

Đôi khi bạn có một số commit trong khi công-việc-đang-tiến-hành và bạn muốn kết hợp thành một trước khi bạn đẩy lên upstream. Bạn không muốn vô tình kết hợp bất kỳ commit nào đã được push lên upstream vì người khác có thể đã thực hiện các commit tham chiếu chúng.

```sh
(main)$ git rebase -i @{u}
```

Lệnh này sẽ thực hành một interactive rebase mà chỉ liệt kê các commit bạn chưa push, vì vậy mọi thứ sẽ an toàn để sắp xếp lại / sửa chữa / squash (gộp) bất cứ gì trong danh sách

#### Tôi cần huỷ bỏ merge

Đôi khi việc merge có thể gây ra sự cố trong một số file nhất định, trong những trường hợp đó, chúng ta có thể sử dụng cờ `abort` để hủy bỏ quá trình giải quyết xung đột hiện tại và cố gắng xây dựng lại trạng thái trước merge.

```sh
(my-branch)$ git merge --abort
```

Lệnh này có sẵn từ phiên bản Git >= 1.7.4

### Tôi cần cập nhật commit gốc (parent commit) cho nhánh của tôi

Giả sử tôi có một nhánh main, một nhánh feature-1 tách từ main và một nhánh feature-2 tách từ feature-1. Nếu tôi thực hiện commit đối với feature-1, thì commit của feature-2 không còn chính xác nữa (gốc nên là đầu của feature-1, vì chúng ta đã tách nhánh từ nó). Chúng ta có thể sửa vấn đề này với `git rebase --onto`.

```sh
(feature-2)$ git rebase --onto feature-1 <commit đầu tiên trong nhánh feature-2 mà bạn không muốn mang theo> feature-2
```

Lệnh này giúp trong các trường hợp khó nơi bạn có thể có một feature được xây dựng trên một feature khác chưa được merge, hoặc một bugfix (vá lỗi) trên nhánh feature-1 cần được phản ánh trong nhánh feature-2 của bạn.

### Kiểm tra xem tất cả commit trên một nhánh đã được merge

Để kiểm tra tất cả commit trên một nhánh đã được merge vào nhánh khác, bạn nên diff (khác biệt) giữa các head (hoặc các commit) của các nhánh:

```sh
(main)$ git log --graph --left-right --cherry-pick --oneline HEAD...feature/120-on-scroll
```

Lệnh này sẽ cho bạn biết nếu bất kỳ commit ở trong một nhánh nhưng không trong nhánh kia, và sẽ cung cấp cho bạn một danh sách của bất kỳ tệp không chia sẽ giữa các nhánh. Một lựa chọn khác là chạy lệnh:

```sh
(main)$ git log main ^feature/120-on-scroll --no-merges
```

### Các vấn đề có thể xảy ra với interactive rebase

<a name="noop"></a>
#### Màn hình chỉnh sửa rebase ghi 'noop'

Nếu bạn thấy như sau:
```
noop
```

Điều này có nghĩa bạn đang cố rebase lại một nhánh đang có commit giống hệt hoặc là *ở trước* nhánh hiện tại. Bạn có thể thử:

* đảm bảo nhánh main của bạn ở đúng chỗ
* rebase với `HEAD~2` hoặc cũ hơn

<a name="merge-conflict"></a>
#### Có một vài xung đột

Nếu bạn không thể hoàn tất thành công rebase, bạn có thể phải giải quyết xung đột.

Đầu tiên chạy `git status` để xem tệp nào có xung đột:

```sh
(my-branch)$ git status
On branch my-branch
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  both modified:   README.md
```

Trong ví dụ đó, `README.md` có xung đột. Mở tệp đó và tìm những dòng trông như sau:

```vim
   <<<<<<< HEAD
   some code
   =========
   some code
   >>>>>>> new-commit
```

Bạn sẽ cần phải giải quyết sự khác biệt giữa code đã được thêm vào với commit mới của bạn (trong ví dụ, mọi thứ từ dòng ở giữa cho đến  `new-commit`) và `HEAD` của bạn.

Nếu bạn muốn giữ phiên bản code của một nhánh, bạn có thể sử dụng `--ours` hoặc `--theirs`:

```sh
(main*)$ git checkout --ours README.md
```

- Khi *đang merge*, sử dụng `--ours` để giữ các thay đổi từ nhánh local, hoặc `--theirs` để giữ các thay đổi từ nhánh khác.
- Khi *đang rebase*, sử dụng `--theirs` để giữ các thay đổi từ nhánh local, hoặc `--ours` để giữ các thay đổi từ nhánh khác. Để hiểu giải thích về sự hoán đổi này, hãy xem [ghi chú này trong tài liệu Git](https://git-scm.com/docs/git-rebase#Documentation/git-rebase.txt---merge).

Nếu việc merge phức tạp hơn, bạn có thể sử dụng trình chỉnh sửa khác biệt trực quan (visual diff editor):

```sh
(main*)$ git mergetool -t opendiff
```

Sau khi bạn đã giải quyết tất cả xung đột và đã kiểm tra code của mình, `git add` các file đã thay đổi và sau đó tiếp tục rebase với `git rebase --continue`

```sh
(my-branch)$ git add README.md
(my-branch)$ git rebase --continue
```

Nếu sau khi giải quyết tất cả các xung đột bạn kết thúc với một cây giống hệt với cái trước khi thực hiện, bạn cần `git rebase --skip`.

Nếu bất kỳ lúc nào bạn muốn dừng toàn bộ quá trình rebase và quay trở lại trạng thái ban đầu nhánh của bạn, bạn có thể làm như thế này:

```sh
(my-branch)$ git rebase --abort
```

<a name="stashing"></a>
## Stash (Cất)

### Stash tất cả chỉnh sửa

Để stash tất cả các chỉnh sửa trong thư mục làm việc

```sh
$ git stash
```

Nếu bạn cũng muốn stash các file chưa được theo dõi, sử dụng cờ `-u`.

```sh
$ git stash -u
```

### Stash các file cụ thể

Để stash chỉ một file từ thư mục làm việc

```sh
$ git stash push working-directory-path/filename.ext
```

Để stash nhiều file từ thư mục làm việc

```sh
$ git stash push working-directory-path/filename1.ext working-directory-path/filename2.ext
```

<a name="stash-msg"></a>
### Stash với message (thông điệp)

```sh
$ git stash save <message>
```

hoặc

```sh
$ git stash push -m <message>
```

<a name="stash-apply-specific"></a>
### Apply một stash cụ thể từ danh sách

Đầu tiên kiểm tra danh sách các stash với message bằng lệnh

```sh
$ git stash list
```

Sau đó apply (áp dụng) một stash cụ thể từ danh sách với

```sh
$ git stash apply "stash@{n}"
```

Ở đây, 'n' cho biết vị trí của stash trong stack. Stash trên cùng sẽ là vị trí 0.

Hơn nữa, cũng có thể chỉ stash dựa vào mốc thời gian

```sh
$ git stash apply "stash@{2.hours.ago}"
```

<a name="stage-and-keep-unstaged"></a>
### Stash trong khi giữ các thay đổi chưa stage

Bạn có thể  tạo một `stash commit`, rồi dùng lệnh  `git stash store`.

```sh
$ git stash create
$ git stash store -m <message> CREATED_SHA1
```

## Finding (Tìm)

### Tôi muốn tìm một chuỗi ký tự trong bất kỳ commit nào

Để tìm một chuỗi ký tự được giới thiệu với commit, bạn có thể sử dụng lệnh như sau:

```sh
$ git log -S "chuỗi ký tự để tìm"
```

Các cờ thường dùng:

* `--source` có nghĩa là hiển thị tên ref được đưa ra trên dòng lệnh mà mỗi lần commit đã đạt tới.

* `--all` nghĩa là bắt đầu từ mọi nhánh.

* `--reverse` in theo thứ tự ngược lại, có nghĩa là hiển thị commit đầu tiên đã thực hiện thay đổi.

<a name="find-by-committer"></a>
### Tôi muốn tìm tác giả hoặc người commit

Để tìm tất cả commit từ tác giả hoặc người commit bạn có thể sử dụng:

```sh
$ git log --author=<tên hoặc email>
$ git log --committer=<tên hoặc email>
```

Hãy nhớ rằng tác giả và người commit không giống nhau. `--author` là người ban đầu viết code; mặt khác,  `--committer`, là người đã commit code thay mặt tác giả gốc.

### Tôi muốn liệt kê các commit chứa các file cụ thể

Để tìm tất cả các commit chưa một file cụ thể bạn có thể sử dụng:

```sh
$ git log -- <path to file>
```

Bạn thường sẽ chỉ định một đường dẫn (filepath) chính xác, nhưng bạn cũng có thể sử dụng các ký tự đại diện bất kỳ cho đường dẫn và tên tệp:

```sh
$ git log -- **/*.js
```

Trong khi sử dụng ký tự đại diện bất kỳ, sẽ hữu ích hơn khi thêm `--name-status` để xem danh sách các tệp trong commit:

```sh
$ git log --name-status -- **/*.js
```

<a name="view-commit-history-for-specific-function"></a>
### Tôi muốn xem lịch sử commit của một function (chức năng) cụ thể

Để truy tìm lịch sử tiến hóa của một function là dùng lệnh:

```sh
$ git log -L :TênFunction:FilePath
```

Ghi chú là bạn có thể xây dựng lệnh trên thêm với các cờ `git log` khác, giống như [phạm vi sửa đổi](https://git-scm.com/docs/gitrevisions) và [hạn mức commit](https://git-scm.com/docs/git-log/#_commit_limiting).

### Tìm một tag mà một commit đã tham chiếu

Để tìm tất cả các tag có chứa một commit cụ thể

```sh
$ git tag --contains <commitid>
```

## Submodules

<a name="clone-submodules"></a>
### Clone tất cả submodules

```sh
$ git clone --recursive git://github.com/foo/bar.git
```

Nếu đã clone:

```sh
$ git submodule update --init --recursive
```

<a name="delete-submodule"></a>
### Xoá một submodule

Tạo một submodule là khá rõ rành, nhưng xóa chúng ít không như vậy. Các lệnh bạn cần là:

```sh
$ git submodule deinit submodulename
$ git rm submodulename
$ git rm --cached submodulename
$ rm -rf .git/modules/submodulename
```

## Miscellaneous Objects (Những thứ khác)

### Copy thư mục hoặc tệp file từ một nhánh sang nhánh khác

```sh
$ git checkout <nhánh-có-tệp-bạn-muốn> -- <thư mục hoặc tên file>
```

### Khôi phục một file đã bị xoá

Đầu tiên tìm commit cuối cùng ma file vẫn tồn tại:

```sh
$ git rev-list -n 1 HEAD -- filename
```

Sau đó checkout file:

```
git checkout id-của-commit-delete-trên^ -- filename
```

### Xoá tag

```sh
$ git tag -d <tag_name>
$ git push <remote> :refs/tags/<tag_name>
```

<a name="recover-tag"></a>
### Khôi phục một tag đã bị xoá

Nếu bạn muốn khôi phục tag đã bị xóa, bạn có thể làm được vậy với các bước sau: Trước tiên, bạn cần phải tìm tag không thể truy cập

```sh
$ git fsck --unreachable | grep tag
```

Ghi lại mã hash của tag. Sau đó, khôi phục tag đã xóa theo cách sử  dụng [`git update-ref`](https://git-scm.com/docs/git-update-ref):

```sh
$ git update-ref refs/tags/<tag_name> <hash>
```

Tag của bạn bây giờ đã được khôi phục.

### Patch (Vá) bị xóa

Nếu ai đó đã gửi cho bạn một pull request trên GitHub, nhưng sau đó đã xoá chúng trên fork gốc, bạn sẽ không thể clone repository của họ hoặc sử dụng `git am` vì url của [.diff, .patch](https://github.com/blog/967-github-secrets) không dùng được. Nhưng bạn có thể checkout chính PR bằng cách sử dụng [GitHub's special refs](https://gist.github.com/piscisaureus/3342247). Để fetch nội dung của PR#1 vào một nhánh được gọi là pr_1, chạy:

```sh
$ git fetch origin refs/pull/1/head:pr_1
From github.com:foo/bar
 * [new ref]         refs/pull/1/head -> pr_1
```

### Xuất một repository ra một file Zip

```sh
$ git archive --format zip --output /full/path/to/zipfile.zip main
```
### Push một nhánh và một tag có tên giống nhau

Nếu có một tag trên một remote repository mà có tên giống với một nhánh bạn sẽ gặp phải lỗi khi cố push nhanh với một lệnh `$ git push <remote> <branch>` bình thường.

```sh
$ git push origin <branch>
error: dst refspec same matches more than one.
error: failed to push some refs to '<git server>'
```

Sửa lỗi này bằng cách chỉ định bạn muốn đẩy tham chiếu của head.

```sh
$ git push origin refs/heads/<branch-name>
```

Nếu bạn muốn đẩy một tag vào một repository tại remote có cùng tên với một nhánh, bạn có thể sử dụng một lệnh tương tự.

```sh
$ git push origin refs/tags/<tag-name>
```

## Tracking (Theo dõi) các file

<a name="change-file-name-capitalization-without-changing-contents"></a>
### Tôi muốn thay đổi cách viết hoa của tên tệp mà không thay đổi nội dung của tệp

```sh
(main)$ git mv --force myfile MyFile
```

### Tôi muốn ghi đè lên các tệp local khi thực hiện lệnh git pull

```sh
(main)$ git fetch --all
(main)$ git reset --hard origin/main
```

<a name="remove-from-git"></a>
### Tôi muốn xóa một tệp khỏi Git nhưng vẫn giữ tệp

```sh
(main)$ git rm --cached log.txt
```

### Tôi muốn đảo ngược tệp về bản sửa đổi cụ thể

Giả sử mã hash của commit bạn muốn là c5f567:

```sh
(main)$ git checkout c5f567 -- fileSố1/Để/PhụcHồi fileSố2/Để/PhụcHồi
```

Nếu bạn muốn đảo ngược các thay đổi được thực hiện chỉ 1 commit trước c5f567, đưa số hash commit như c5f567~1:

```sh
(main)$ git checkout c5f567~1 -- file1/to/restore file2/to/restore
```

### Tôi muốn liệt kê các thay đổi của một tệp cụ thể giữa các commit hoặc các nhánh

Giả sử bạn muốn so sánh commit cuối cùng với tệp từ commit c5f567:

```sh
$ git diff HEAD:path_to_file/file c5f567:path_to_file/file
# hoặc
$ git diff HEAD c5f567 -- path_to_file/file
```

Cũng giống khi so sánh nhánh nhánh:

```sh
$ git diff main:path_to_file/file staging:path_to_file/file
# hoặc
$ git diff main staging -- path_to_file/file
```

### Tôi muốn Git bỏ qua những thay đổi đối với một tệp cụ thể

Các bước sau khá hợp cho các mẫu cấu hình hoặc các tệp yêu cầu thêm thông tin đăng nhập tại local mà không nên commit

```sh
$ git update-index --assume-unchanged file-to-ignore
```

Lưu ý rằng điều này không xóa tệp khỏi kiểm soát source - nó chỉ bị bỏ qua tại local. Để hoán đổi thao tác này và yêu cầu Git lại chú ý các thay đổi, lệnh sau sẽ xóa cờ bỏ qua (ignore flag):

```sh
$ git update-index --no-assume-unchanged file-to-stop-ignoring
```

## Debugging (Gỡ lỗi) with Git

Lệnh [git-bisect](https://git-scm.com/docs/git-bisect) sử dụng tìm nhị phân để tìm commit đã giớ thiệu lỗi.

Giả sử bạn đang ở nhánh `main` và bạn muốn tìm commit đã làm hỏng cái gì đó. Bạn bắt đầu bisect với: 

```sh
$ git bisect start
```

Sau đó bạn đề rõ commit nào tồi và commit nào biết là tốt. Giả sử bạn biết phiên bản *hiện tại* là tồi, và `v1.1.1` là tốt: 

```sh
$ git bisect bad
$ git bisect good v1.1.1
```

Bây giờ `git-bisect` chọn commit ở giữa khoảng cách bạn lựa chọn, checkout cái commit đấy, và hỏi bạn là commit này tồi hay tốt. Bạn sẽ thấy giống như thế này:

```sh
$ Bisecting: 5 revision left to test after this (roughly 5 step)
$ [c44abbbee29cb93d8499283101fe7c8d9d97f0fe] Commit message
$ (c44abbb)$
```

Bạn kiểm tra commit xem tốt hay tồi. Nếu tốt:

```sh
$ (c44abbb)$ git bisect good
```

và `git-bisect` sẽ chọn một commit khác trong phạm vi của bạn. Quá trình này sẽ tiếp tục lặp lại cho đến khi không còn sửa đổi cần kiểm tra, và lệnh sẽ cuối cùng in ra mô tả của commit tồi **đầu tiên**

## Cấu hình (Configuration)

### Tôi muốn thêm bí danh (alias) cho một số lệnh Git

Trên OS X và Linux, file cấu hình git được lưu trong ```~/.gitconfig```.  Tôi đã thêm một số bí danh mẫu mà tôi sử dụng làm shortcut (và một số lỗi chính tả phổ biến của tôi) trong phần ```[alias]``` được hiển thị như dưới đây:

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
    delete-merged-branches = "!f() { git checkout --quiet main && git branch --merged | grep --invert-match '\\*' | xargs -n 1 git branch --delete; git checkout --quiet @{-1}; }; f"
```

### Tôi muốn thêm một thư mục trống vào repository của tôi

Bạn không thể! Git không hỗ trợ điều này, nhưng có một hack. Bạn có thể tạo tệp .gitignore trong thư mục với các nội dung sau:

```
 # Bỏ qua tất cả mọi thứ trong repository
 *
 # Ngoại trừ file này
 !.gitignore
```

Một quy ước chung khác là tạo một tệp trống trong thư mục có tên .gitkeep.

```sh
$ mkdir mydir
$ touch mydir/.gitkeep
```

Bạn cũng có thể đặt tên tệp là .keep, trong trường hợp đó dòng thứ hai ở trên sẽ ```touch mydir/.keep```

### Tôi muốn cache (cho vào bộ nhớ đệm) một username và password cho một repository

Bạn có thể có một repository yêu cầu xác thực (authentication).  Trong trường hợp này bạn có thể cache một username và password vì vậy bạn không phải nhập nó vào mỗi lần push / pull. Phụ tá chứng chỉ(credential.helper) có thể làm điều này cho bạn.

```sh
$ git config --global credential.helper cache
# Đặt git dùng bộ nhớ đệm chứng chỉ
```

```sh
$ git config --global credential.helper 'cache --timeout=3600'
# Đặt bộ nhớ đệm kết thúc sau 1h (cấu hình dùng giây/s)
```

Để tìm phụ tá chứng chỉ:

```sh
$ git help -a | grep credential
# Phô bày các phụ tá chứng chỉ
```

Bộ nhớ đệm chứng chỉ cho các hệ điều hành (operating system/OS) cụ thể :

```sh
$ git config --global credential.helper osxkeychain
# cho OSX
```

```sh
$ git config --global credential.helper manager
# Git for Windows 2.7.3+
```

```sh
$ git config --global credential.helper gnome-keyring
# Ubuntu và các bản phân phối dựa trên GNOME
```

Các phụ tá chứng chỉ khác có khả năng cao tìm được cho các bản phân phối và hệ điều hành khác.

### Tôi muốn Git bỏ qua các quyền và thay đổi về filemode (chế độ file)

```sh
$ git config core.fileMode false
```

Nếu bạn muốn đặt hành vi này là hành vi mặc định cho người dùng đã đăng nhập, thì hãy sử dụng:

```sh
$ git config --global core.fileMode false
```

### Tôi muốn đặt người dùng toàn cục (global user)

Để cấu hình thông tin người dùng được sử dụng trên tất cả các repository tại local và để đặt tên có thể nhận dạng khi xem lịch sử phiên bản:

```sh
$ git config --global user.name "[tên-riêng tên-họ]"
```

Để đặt địa chỉ email gắn với mỗi mốc lịch sử:

```sh
git config --global user.email "[email-có-hiệu-lực]"
```

## Tôi không biết mình đã làm gì sai

Ok, bạn gặp rắc rối lớn - bạn `reset` vài thứ, hoặc bạn merge sai nhánh, hoặc bạn push ép (force push) và bây giờ bạn không thể tìm thấy các commit của bạn. Bạn biết, tại một số thời điểm, bạn không có vấn đề và bạn muốn quay trở lại trạng thái bạn đang ở đó.

Đây là tình huống cho `git reflog`. `reflog` theo dõi bất kỳ thay đổi nào đối với đầu nhánh, ngay cả khi đầu nhánh đó không được tham chiếu bởi nhánh hoặc tag. Về cơ bản, mỗi lần HEAD thay đổi, một mục mới được thêm vào reflog. Thật đáng buồn là cách này chỉ hoạt động tốt đối với các repository ở local, và nó chỉ theo dõi các chuyển động (ví dụ: không thay đổi một tệp không được ghi ở bất kỳ đâu).

```sh
(main)$ git reflog
0a2e358 HEAD@{0}: reset: moving to HEAD~2
0254ea7 HEAD@{1}: checkout: moving from 2.2 to main
c10f740 HEAD@{2}: checkout: moving from main to 2.2
```

Các reflog ở trên cho thấy một checkout từ main đến nhánh 2.2 rồi quay trở lại. Từ đó, có một reset cứng về một commit cũ hơn. Hoạt động mới nhất được thể hiện ở đầu được gắn nhãn `HEAD@{0}`.

Nếu nó chỉ ra rằng bạn vô tình di chuyển trở lại, các reflog sẽ chứa commit mà main chỉ đến (0254ea7) trước khi bạn vô tình giảm 2 commit

```sh
$ git reset --hard 0254ea7
```

Sử dụng `git reset` để có thể thay đổi main trở về commit trước đó. Cách này cung cấp mạng lưới an toàn trong trường hợp lịch sử vô tình bị thay đổi.

(đã sao chép và chỉnh sửa từ [Source](https://www.atlassian.com/git/tutorials/rewriting-history/git-reflog)).

<a name="git-shortcuts"></a>
## Git Shortcuts (phím tắt)

### Git Bash

Một khi bạn thấy thoải mái với các lệnh trên, bạn có thể muốn tạo các phím tắt cho Git Bash. Cách này giúp bạn làm việc nhanh hơn vì chạy các hành vi phức tạp với các lệnh ngắn hơn.

```sh
alias sq=squash

function squash() {
    git rebase -i HEAD~$1
}
```

Copy các lệnh này vào .bashrc hoặc .bash_profile của bạn.

### PowerShell trên Windows

Nếu bạn dùng Powershell trên Windows, bạn cũng có thể đặt các bí danh và chức năng tắt. Cho thêm các lệnh này vào prolfe của bạn, đường dẫn được định nghĩa ở biến `$profile`. Học thêm với trang [About Profiles](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles) tại trang tài liệu tham khảo của Microsoft .

```powershell
Set-Alias sq Squash-Commits

function Squash-Commits {
  git rebase -i HEAD~$1
}
```

# Tài nguyên khác

## Sách

* [Learn Enough Git to Be Dangerous](https://www.learnenough.com/git-tutorial) - Sách của Michael Hartl cho Git từ những điều cơ bản
* [Pro Git](https://git-scm.com/book/en/v2) - Một cuốn sách xuất chúng của Scott Chacon và Ben Straub
* [Git Internals](https://github.com/pluralsight/git-internals-pdf) - Cuốn sách xuất chúng khác về Git của Scott Chacon
* [Sổ tay NASA](https://www.nasa.gov/sites/default/files/atoms/files/nasa_systems_engineering_handbook.pdf)

## Hướng dẫn

* [19 mẹo sử dụng GIT hàng ngày](https://www.alexkras.com/19-git-tips-for-everyday-use) - Một danh sách các mẹo dùng GIT hữu ích.
* [Hướng dẫn Git của Atlassian](https://www.atlassian.com/git/tutorials) - Sử dụng Git đúng với các hướng dẫn từ cơ bản đến nâng cao.
* [Học về nhánh Git](https://learngitbranching.js.org/) - Hướng dẫn phân nhánh / merging / rebasing dựa trên web interactive
* [Chở nên vững chắc về Git rebase vs. merge](https://medium.com/@porteneuve/getting-solid-at-git-rebase-vs-merge-4fa1a48c53aa)
* [Tờ gian lận lệnh và thực hành tốt Git ](https://zeroturnaround.com/rebellabs/git-commands-and-best-practices-cheat-sheet) - Một Git cheat sheet trong một bài đăng trên blog với nhiều giải thích hơn
* [Git từ trong ra ngoài](https://codewords.recurse.com/issues/two/git-from-the-inside-out) - Hướng dẫn đi sâu vào Git
* [git-workflow](https://github.com/asmeurer/git-workflow) - [Aaron Meurer](https://github.com/asmeurer) viết cách sử dụng Git để đóng góp vào repository mã nguồn mở (open source)
* [GitHub as a workflow](https://hugogiraudel.com/2015/08/13/github-as-a-workflow/) - Một ý kiến thú vị về sử dụng GitHub như một quy trình làm việc, đặc biệt với các PR trống.
* [Githug](https://github.com/Gazler/githug) - Một trò chơi để học thêm về luồng làm việc thường thấy của Git.
* [learnGitBranching](https://github.com/pcottle/learnGitBranching) - Hình dung git có tương tác để thử thách và giáo dục!

## Scripts (tập lệnh) và các công cụ

* [firstaidgit.io](http://firstaidgit.io/) - Danh sách được lựa chọn có thể tìm kiếm các câu hỏi thường gặp về Git
* [git-extra-commands](https://github.com/unixorn/git-extra-commands) - Tập hợp các script Git mở rộng hữu ích
* [git-extras](https://github.com/tj/git-extras) - Các tiện ích GIT -- Repo tóm tắt, thay thế, số lượng thay đổi, tỷ lệ phần trăm của tác giả và nhiều nữa
* [git-fire](https://github.com/qw3rtman/git-fire) - git-fire là một plugin cho Git để giúp trong trường hợp khẩn cấp bằng cách thêm tất cả các tệp hiện tại, commit và push vào một nhánh mới (để ngăn xung đột khi merge).
* [git-tips](https://github.com/git-tips/tips) - Các mẹo Git nhỏ
* [git-town](https://github.com/Originate/git-town) - Hỗ trợ luồng làm việc Git chung, tầm nâng cao! http://www.git-town.com

## GUI Clients
* [GitKraken](https://www.gitkraken.com/) - Client sang trọng cho Windows, Mac & Linux
* [git-cola](https://git-cola.github.io/) - Git client khác cho Windows và OS X
* [GitUp](https://github.com/git-up/GitUp) - Một GUI mới mẻ mà có một số cách rất quan tâm để giải quyết các việc khó chịu của Git
* [gitx-dev](https://rowanj.github.io/gitx/) - Một Git client đồ hoạ khác cho OS X
* [Sourcetree](https://www.sourcetreeapp.com/) - Sự đơn giản nhưng mạnh mẽ cho giao diện Git đẹp và miễn phí cho Windows và Mac.
* [Tower](https://www.git-tower.com/) - Git client đồ hoạ cho OS X (trả phí)
* [tig](https://jonas.github.io/tig/) - Terminal text-mode interface cho Git
* [Magit](https://magit.vc/) - Interface cho Git thực hiện như một gói Emacs .
* [GitExtensions](https://github.com/gitextensions/gitextensions) - Một shell extension, một Visual Studio 2010-2015 plugin và một công cụ Git repository độc lập.
* [Fork](https://git-fork.com/) - Một Git client nhanh và thân thiện cho Mac (beta)
* [gmaster](https://gmaster.io/) - Một Git client cho Windows với 3 cách merge, analyze refactors, semantic diff và merge (beta)
* [gitk](https://git-scm.com/docs/gitk) - Một Git client cho Linux để cho phép xem đơn giản cho trạng thái repo.
* [SublimeMerge](https://www.sublimemerge.com/) - Client nhanh, mở rộng, cung cấp 3 cách merge, tìm kiếm mạnh mẽ và làm nổi bật cú pháp, đang phát triển tích cực.

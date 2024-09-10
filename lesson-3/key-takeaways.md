1. Thay đổi tên message trên git:
    + Thay đổi tên message bằng cách gõ lệnh "git commit --amend" => Vào tới màn chỉnh sửa, sử dụng mũi tên để di chuyển=> Bấm i (viết tắt của insert) để bắt đầu chế độ chỉnh sửa, chỉnh sửa file để thoát màn insert => bấm Esc => nhập wq
2. đưa dữ liệu từ vùng stagging về vùng working
    + git restore --staged <file>
3. Đưa dữ liệu từ vùng Repository về vùng working
    + git reset HEAD~1 (roll bac bao nhiêu commit thì nhập số tương ứng)



+ Check status của commit sử dụng  "git log" 



tên file đặt tên theo kebab-case: viết thường sư dụng gạch nối
tên biến viết theo cameCale: viết hoa kí tự thứ 2
tên class viết theo PascalCase: viết hoa kí tự đầu và kí sau


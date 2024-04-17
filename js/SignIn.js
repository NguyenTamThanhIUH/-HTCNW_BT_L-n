$(document).ready(function(){
    $("#tendn").focus();
    function ktTendn(){
        var tendn=$("#tendn").val();
        if(tendn.length == 0){
            $("#enrrtendn").text("Tên đăng nhập không được trống").css('color','red');
            return false;
        }
        else if (tendn.length > 6){
            $("#enrrtendn").css('color','green');
            return true;
        }
        else{
            $("#enrrtendn").text('Tên đăng nhập phải lớn hơn 6 ký tự').css('color','red');
            return false;
        }

    }
    $("#tendn").blur(ktTendn);
    function ktMatKhau(){
        var matkhau=$('#matkhau').val();
        if(matkhau.length==0){
            $('#enrrmk').text('Mật khẩu không được trống').css('color','red');
            return false;
        }
        else {
            // mật khẩu phải có ít nhất 6 ký tự có chứa kí tự in hóa, khí tự đặc biệt và số
            var reg=/^(?=.*[A-Z])(?=.*[\W_])(?=.*[0-9]).{6,}$/
            if(matkhau.match(reg)){
                // $('#errmk').text('Mật khẩu hợp lệ');
                $('#enrrmk').css('color','green');
                return true;
            }
            else{
                $('#enrrmk').text('Mật khẩu ít nhất 6 ký tự, gồm kí tự in hóa, đặc biệt và số');
                return false;
            }
        }
    }
    $('#matkhau').blur(ktMatKhau);
    function NhaplaiMK(){
        var NhaplaiMK=$('#nlmatkhau').val();
        if(NhaplaiMK.length==0){
            $('#enrrnlmk').text('Nhập lại mật khẩu không được trống').css('color','red');
            return false;
        }
        else{
            if(NhaplaiMK==$('#matkhau').val()){
                $('#enrrnlmk').text('*').css('color','green');
                return true;
            }
            else{
                $('#enrrnlmk').text('Nhập lại mật khẩu không đúng').css('color','red');
                return false;
            }
        }
    }
    $('#nlmatkhau').blur(NhaplaiMK);
    function ktHoTen(){
        var hoten=$('#hoten').val();
        if(hoten.length==0){
            $('#enrrhoten').text('Họ tên không được trống').css('color','red');
            return false;
        }
        else{
            var reg=/^([A-Z][a-z]+\s){0,6}([A-Z][a-z]+)$/
            if(hoten.match(reg)){
                $('#enrrhoten').css('color','green');
                return true;
            }
            else{
                $('#enrrhoten').text('Họ tên không hợp lệ').css('color','red');
                return false;
            }
        }
    }
    $('#hoten').blur(ktHoTen);
    function ktNgaysinh(){
        var ngaysinh=$('#ngaysinh').val();
        var date=new Date(ngaysinh).getFullYear();
        var now=new Date().getFullYear();
        if(ngaysinh.length==0){
            $('#enrrngaysinh').text('Ngày sinh không được trống').css('color','red');
            return false;
        }
        else if(now-date<16){
            $('#enrrngaysinh').text('Ngày sinh không hợp lệ').css('color','red');
            return false;
        }
        else{
            $('#enrrngaysinh').css('color','green');
            return true;
        }}
        $('#ngaysinh').blur(ktNgaysinh);
        function ktSodienthoai(){
            var sdt=$('#sdt').val();
            var reg=/^(032|033|034|035|036|037|038|039|096|097|098|086|083|084|085|081|082|088|091|094|070|079|077|076|078|090|093|089|056|058|092|059|099)[0-9]{7}$/;
            if(sdt.length==0){
                $('#enrrsdt').text('Số điện thoại không được trống').css('color','red');
                return false;
            }
            else if(sdt.match(reg)){
                $('#enrrsdt').css('color','green');
                return true;
            }
            else{
                $('#enrrsdt').text('Số điện thoại không hợp lệ');
                return false;
            }
        }
        $('#sdt').blur(ktSodienthoai);
        function ktEmail(){
            var email=$('#email').val();
            var reg=/^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
            if(email.length==0){
                $('#enrremail').text('Email không được trống').css('color','red');
                return false;
            }
            else if(email.match(reg)){
                $('#enrremail').css('color','green');
                return true;
            }
            else{
                $('#enrremail').text('Email không hợp lệ').css('color','red');
                return false;
            }
        }
        $('#email').blur(ktEmail);
        $('#submit').click(function(){
        if(ktTendn()&&ktMatKhau()&&NhaplaiMK()&&ktHoTen()&&ktNgaysinh()&&ktSodienthoai()&&ktEmail()){
            alert('Đăng ký thành công');
            window.open('login.html', '_blank');

        }
        else{
            alert('Vui lòng kiểm tra lại thông tin');
    }
    } );  


});
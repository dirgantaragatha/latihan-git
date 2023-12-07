window.onload = function () {
    window.onscroll = function () {
        scrollFunction();
        // console.log(scrollY);

        if (scrollY == 0) {
            document.getElementById('profil-perusahaan').className = 'container shows-hidden';
        } else if (scrollY >= 200) {
            document.getElementById('profil-perusahaan').className = 'container shows-fading';
        }
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("gotop").style.display = "block";
            // document.getElementById('profil-perusahaan').style.transition = 'opacity 5s linear';
        } else {
            document.getElementById("gotop").style.display = "none";
        }
    }

    document.getElementById("gotop").onclick = function () {
        topFunction()
    };

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    document.getElementById("kontak-kami").onclick = function () {
        document.getElementById("formData").style.display = "block";
    };

    document.getElementById("minButton").onclick = function () {
        document.getElementById("formData").style.display = "none";
    };
    // document.getElementById("pop-sender").innerHTML = "Terimakasih NAMA telah Mengirim data";
    document.getElementById("submitForm").onclick = function () {
        var Notif = document.getElementById("notif");
        var tutup = document.getElementsByClassName("close")[0];
        var nama = document.getElementById("mail").value;
        var fname = document.getElementById("fname").value;
        var negara = document.getElementById("country").value;
        var phone = document.getElementById("phonenumber").value;
        var subj = document.getElementById("subject").value;
        if (nama == "" || fname == "" || phone == "" || subj == "") {
            return alert("data belum lengkap, harap diisi kembali");
        } else if (nama == null || fname == null || phone == null || subj == null) {
            return alert("data tidak boleh kosong, harap diisi kembali");
        } else {
            // alert("aaaaaaaaaaa");
            Notif.style.display = "block";

            document.getElementById("pop-sender").innerHTML = "Terimakasih <b>" + nama + "</b> telah Mengirim data";

            tutup.onclick = function () {
                Notif.style.display = "none";
                document.getElementById("formData").style.display = "none";
            }

            window.onclick = function (params) {
                if (params.target == Notif) {
                    Notif.style.display = "none";
                    document.getElementById("formData").style.display = "none";
                }
            }

            document.getElementById("contact-us").reset();
        }
    }


};
// function submitted(){
//     var Notif = document.getElementById("notif");
//     Notif.style.display = "block";
//     alert("aaaa");
// }
//!
//*  *//
//!

let zakah = window.prompt("دخل المبلغ :");
if (zakah) {
    alert("المبلغ ديال الزكاة: " + zakah * 0.025 + "DH");
} else {
    alert("ما دخلتي والو!");
}

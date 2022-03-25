let moveId;
let timeId;

//页面加载完成
window.onload = function() {
    var arr = document.getElementsByClassName("caseBlock");
    for (var i = 0; i < arr.length; i++) {
        arr[i].style.left = i * 720 + "px";
    }
}

//点击右侧按钮
function BannerMove() {
    var i;
    var arr = document.getElementsByClassName("caseBlock");

    for (i = 0; i < arr.length; i++) {
        var left = parseFloat(arr[i].style.left);
        left -= 10;
        var width = 720;
        if (left <= -width) {
            left = (arr.length - 1) * width;
            clearInterval(moveId);
        }
        arr[i].style.left = left + "px";
    }
}

function BannerReverseMove() {
    var i;
    var arr = document.getElementsByClassName("caseBlock");

    for (i = arr.length - 1; i >= 0; i--) {
        var left = parseFloat(arr[i].style.left);
        left += 10;
        var width = 1440;
        if (left >= width) {
            left = -2160;
            clearInterval(moveId);
        }
        arr[i].style.left = left + "px";
    }
}

function imgInterval() {
    moveId = setInterval(BannerMove, 10);
}

function rightMove() {
    clearInterval(moveId);
    var arr = document.getElementsByClassName("caseBlock");
    if (arr[0].style.left === 0 + "px") {
        arr[1].style.left = 720 + "px";
        arr[2].style.left = 1440 + "px";
        arr[3].style.left = 2160 + "px";
    }
    if (arr[1].style.left === 0 + "px") {
        arr[2].style.left = 720 + "px";
        arr[3].style.left = 1440 + "px";
        arr[0].style.left = 2160 + "px";
    }
    if (arr[2].style.left === 0 + "px") {
        arr[3].style.left = 720 + "px";
        arr[0].style.left = 1440 + "px";
        arr[1].style.left = 2160 + "px";
    }
    if (arr[3].style.left === 0 + "px") {
        arr[0].style.left = 720 + "px";
        arr[1].style.left = 1440 + "px";
        arr[2].style.left = 2160 + "px";
    }
    moveId = setInterval(BannerMove, 1);
}

function leftMove() {
    clearInterval(moveId);
    var arr = document.getElementsByClassName("caseBlock");
    if (arr[0].style.left === 0 + "px") {
        arr[1].style.left = 720 + "px";
        arr[3].style.left = -720 + "px";
        arr[2].style.left = -1440 + "px";
    }
    if (arr[1].style.left === 0 + "px") {
        arr[2].style.left = 720 + "px";
        arr[0].style.left = -720 + "px";
        arr[3].style.left = -1440 + "px";
    }
    if (arr[2].style.left === 0 + "px") {
        arr[3].style.left = 720 + "px";
        arr[1].style.left = -720 + "px";
        arr[0].style.left = -1440 + "px";
    }
    if (arr[3].style.left === 0 + "px") {
        arr[0].style.left = 720 + "px";
        arr[2].style.left = -720 + "px";
        arr[1].style.left = -1440 + "px";
    }
    moveId = setInterval(BannerReverseMove, 1);
}

//首页点击预约演示
function formSubmitOpen() {
    window.open('formSubmit.html');
    window.history.back(-1);
}

//预约演示页面点击浮动条中预约演示
function formSubmitOpenOnform() {
    window.location.href = "formSubmit.html";
    window.history.back(-1);
}

/*
function isPhoneNum (thisBtn) {
    var myreg = /^1[3456789]\d{9}$/;
    if (!myreg.test(thisBtn)) {
        alert("手机号输入错误！请重新输入！");
    }
}

var obj = document.getElementById("phone");
obj.addEventListener('blur', function() {
    isPhoneNum(this);
}, false)
*/


//获取验证码倒计时
var clock = '';
var nums = 60;
var btn;
function sendCode(thisBtn) {
    btn = thisBtn;
    btn.disabled = true;
    btn.innerHTML = '('+ nums + ') 秒重新获取';
    var obj = document.getElementById("verifycode");
    obj.style.fontSize = "8px";
    clock = setInterval(doLoop, 1000);
}
function doLoop() {
    nums--;
    if (nums > 0) {
        btn.innerHTML = '(' + nums + ') 秒重新获取';
        var obj1 = document.getElementById("verifycode");
        obj1.style.fontSize = "8px";
    }
    else {
        clearInterval(clock);
        btn.disabled = false;
        btn.innerHTML = '获取验证码';
        var obj2 = document.getElementById("verifycode");
        obj2.style.fontSize = "14px";
        nums = 60;
    }
}
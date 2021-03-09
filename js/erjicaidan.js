var headNav = document.getElementById("headNav");
var lis = headNav.children;
var i = 0;

for (i = 0;i <= lis.length-1; i++){
        lis[i].onmouseover = function () {
            var erji = this.children[1];
            if (!erji){
                return false;
            }
            erji.className = "erjicaidankuang showerji";
        }
        lis[i].onmouseout = function () {
            var erji = this.children[1];
            if (!erji){
                return false;
            }
            erji.className ="erjicaidankuang";
        }
}



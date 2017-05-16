// 定义笔的颜色
var bColor = ["#000000","#999999","#CC66FF","#FF0000","#FF9900","#FFFF00","#008000","#00CCFF"];
// 设置当前画笔的颜色
var col = "#FF0000";
function initBrush(){
    for(var i = 0;i<bColor.length;i++){
        var bk = $("<span class='bk'></span>")
        .css("background-color",bColor[i])
        .click(function(){
            col = $(this).css("background-color");
        });
        $("#bk").append(bk);
    }
}

function initPainter(){
    //绑定绘图
    var can = $("#cav"),self = this,x = 0,y = 0;
    var ctx = can[0].getContext("2d");
    ctx.lineWidth = 2;

    // 绑定鼠标按下的时间
    can.on("mousedown",function(e){
        e.preventDefault();
        ctx.strokeStyle = col;
        x = e.offsetX,
        y = e.offsetY;
        //开始路径
        ctx.beginPath();
        ctx.moveTo(x,y);
        //绑定鼠标移动事件
        can.on("mousemove",function(e){
            var nx = event.offsetX,
            ny = event.offsetY;
            ctx.lineTo(x,y);
            ctx.stroke();
            x = nx;
            y = ny;
        });
        //绑定鼠标抬起事件
        can.on("mouseup",function(){
            //取消鼠标移动事件
            can.off("mousemove");
        });
    })
}

$(document).ready(function(){
    initBrush();
    initPainter();
})
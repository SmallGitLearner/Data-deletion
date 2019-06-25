/**
 * Created by chen on 2019/6/24.
 */

$(document).ready(function () {
    $("table tr:nth-child(odd)")
        .css({"background-color":"#eee"});  //隔行变色

    /**     全选复选框单击事件   **/
    $("#chkAll").click(function () {
        if(this.checked){//如果自己被选中
            $("table tr td input[type = checkbox]").attr("checked",true);
        }
        else {//如果自己没有被选中
            $("table tr td input[type = checkbox]").attr("checked",false);
        }
    })

    /**     删除按钮单击事件   **/
    $("#btnDel").click(function () {
        var intL = $("table tr td input:checked:not('#chkAll')").length;//获得除全选复选框外的所有选中项
        if( intL != 0){ //如果有选中项
            $("table tr td input[type = checkbox]:not('#chkAll')")
                .each(function (index) {
                    if(this.checked){
                        $("table tr[id = "+ this.value + "]").remove();//获得选中的值，并删除该值所在的行
                    }
                })
        }
    })

    /**     小图片鼠标移动事件   **/
    var x = 5,
        y = 15;  //初始化提示图片位置
    $("table tr td img").mousemove(function (e) {
        $("#imgTip")
            .attr("src",this.src)
            .css({"top":(e.pageY + y) + "px",
                "left":(e.pageX + x) + "px"})
            .show(2000);
    })

    /**     小图片鼠标移出事件   **/
    $("table tr td img").mouseout(function () {
        $("#imgTip").hide();
    })
})
/**
 * Created by Administrator on 2017/3/6.
 * Author:YoungJude
 * Location:Tianjin
 * function:Tool
 */
//封装获取函数
function getStyle(obj,attr)
{
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}
//封装函数结束
//封装运动函数
function moveall(obj,attr,step,target,endfn)
{
    //一上来清空所有定时器防止越来越快
    clearInterval(obj.timer);
    //判断step是正的还是负的
    step = Number(target)>parseFloat(getStyle(obj,attr))?Number(step):-Number(step);  //判断一下step是正的还是负的
    //参数判断完了,下面开始运动函数
    obj.timer = setInterval(function(){
        var speed = parseFloat(getStyle(obj,attr)) + step;      //获取到每一次的距离
        if(speed>=Number(target)&&step>0||speed<=Number(target)&&step<0)
        {
            speed = Number(target);      //这里我做了个判断当要是超过距离的时候，我就把他拉回来
        }
        obj.style[attr] = speed+"px";       //赋值
        if(speed == Number(target))
        {
            clearInterval(obj.timer);
            endfn&&endfn();  //执行回调函数
        }
    },100)
}
//封装运动函数结束

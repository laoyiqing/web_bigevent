// 注意：每次调用 $.get() 或 $.post() 或 $.ajax() 的时候
// 会先调用 ajaxPrefilter 这个函数
// 在这个函数中，可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function(option){
    // 真正地发起Ajax请求的之前，统一拼接请求的根路径
    option.url = 'http://www.liulongbin.top:3007' + option.url

})
  $(function(){						
    var content =$("#wrap>.content");			
    var cList = content.children(".contentList");
    var cLiNodes=$("#wrap .content .contentList>li");			
    var head = $("#wrap .header");
    var nList =$("#wrap .header .headerContent nav ul li");
    var pList = $("#wrap .content .sideNav li");
    var secondLi1=$("#wrap .content .contentList .secondLi .second .left .photoList li:nth-of-type(1)")
    var secondLi2=$("#wrap .content .contentList .secondLi .second .left .photoList li:nth-of-type(2)")
    var secondLi3=$("#wrap .content .contentList .secondLi .second .left .photoList li:nth-of-type(3)")
    var secondRight=$("#wrap .content .contentList .secondLi .second .right ")
    var thirdLi2=$("#wrap .content .contentList .thirdLi .third .left .photoList li:nth-of-type(2)")
    var thirdLi3=$("#wrap .content .contentList .thirdLi .third .left .photoList li:nth-of-type(3)")			
    var thirdRight=$("#wrap .content .contentList .thirdLi .third .right ")
    var fourLi1=$("#wrap .content .contentList .fourLi .four .left .photoList li:nth-of-type(1)")
    var fourLi2=$("#wrap .content .contentList .fourLi .four .left .photoList li:nth-of-type(2)")
    var fourLi3=$("#wrap .content .contentList .fourLi .four .left .photoList li:nth-of-type(3)")			
    var fourRight=$("#wrap .content .contentList .fourLi .four .right ")
    var fiveLi1=$("#wrap .content .contentList .fiveLi .five .left .photoList li:nth-of-type(1)")
    var fiveLi2=$("#wrap .content .contentList .fiveLi .five .left .photoList li:nth-of-type(2)")
    var fiveLi3=$("#wrap .content .contentList .fiveLi .five .left .photoList li:nth-of-type(3)")			
    var fiveRight=$("#wrap .content .contentList .fiveLi .five .right ")
    var now = 0;
    var index = 0;
    var timer = 0;
    var preIndex = 0;
    
    //窗口重置
    window.onresize = function (){
      contentBind();
    }
    //出入场动画
    var animations=[
      {
        in:function(){
          var img = $("#wrap .content .contentList firstLi img");
          setTimeout(function(){
            $(img).css({
              opacity:1
            });							
          },1000)
        },
        out:function(){
          var img = $("#wrap .content .contentList firstLi img");
          setTimeout(function(){
            $(img).css({
              opacity:0
            })
          },1000)
        }
      },
      {
        in:function(){
          
          setTimeout(function(){
            $(secondLi1).css(
              {transform : "translateY(0px)"}
              );
          },800);
          setTimeout(function(){
            $(secondLi2).css(
              {transform : "translateY(0px)"}
              );
          },1000);
          setTimeout(function(){
            $(secondLi3).css(
              {transform : "translateY(0px)"}
              );
            $(secondRight).css(
              {transform : "translateY(0px)"}
            );
          },1200);
        },
        out:function(){						
          setTimeout(function(){
            $(secondLi1).css(
              {transform : "translateY(800px)"}
              );
          },800);
          setTimeout(function(){
            $(secondLi2).css(
              {transform : "translateY(800px)"}
              );
          },800);
          setTimeout(function(){
            $(secondLi3).css(
              {transform : "translateY(800px)"}
              );
            $(secondRight).css(
              {transform : "translateY(-800px)"}
              );
          },800);
        }
      },
      {
        in:function(){
          setTimeout(function(){
            $(thirdLi2).css({transform : "translateX(0px)"});
            $(thirdLi3).css({transform : "translateX(0px)"});
            $(thirdRight).css({transform : "translateX(0px)"});
          },1000);						
        },
        out:function(){						
          setTimeout(function(){
            $(thirdLi2).css({transform : "translateX(-279px)"});
            $(thirdLi3).css({transform : "translateX(-558px)"});
            $(thirdRight).css({transform : "translateX(300px)"});
          },1000);	
        }
      },
      {
        in:function(){
          $(fourLi1).css({display : "initial"});
          $(fourLi2).css({display : "initial"});
          $(fourLi3).css({display : "initial"});
          $(fourLi1).css({animation:"move1 2s 0.8s "});
          $(fourLi2).css({animation:"move2 2s 0.8s "});
          $(fourLi3).css({animation:"move3 2s 0.8s "});
          setTimeout(function(){
            $(fourLi1).css({transform : "translate(0px,0px)"});
            $(fourLi2).css({transform : "translate(0px,0px)"});
            $(fourLi3).css({transform : "translate(0px,0px)"});
            $(fourRight).css({opacity:1});
                                      
          },2000);		
        },
        out:function(){	
          $(fourLi1).css({display : "none"});
          $(fourLi2).css({display : "none"});
          $(fourLi3).css({display : "none"});
          $(fourLi1).css({transform : "translate(330px,-1000px)"});
          $(fourLi2).css({transform : "translate(0px,-1000px)"});
          $(fourLi3).css({transform : "translate(-330px,-1000px)"});
          $(fourRight).css({opacity:0});					
        }
      },
      {
        in:function(){						
          setTimeout(function(){
            $(fiveLi1).css({transform : "translate3d(0,0,0) rotateX(0deg)"});							
          },800)
          setTimeout(function(){
            $(fiveLi2).css({transform : "translate3d(0,0,0) rotateX(0deg)"});
          },1000)
          setTimeout(function(){
            $(fiveLi3).css({transform : "translate3d(0,0,0) rotateX(0deg)"});
            $(fiveRight).css({opacity:1});	
          },1200)
        },
        out:function(){						
          setTimeout(function(){
            $(fiveLi1).css({transform : "translate3d(-1000px,-800px,-500px) rotateX(145deg)"});							
          },800)
          setTimeout(function(){
            $(fiveLi2).css({transform : "translate3d(-1000px,-800px,-500px) rotateX(145deg)"});
          },1000)
          setTimeout(function(){
            $(fiveLi3).css({transform : "translate3d(-1000px,-800px,-500px) rotateX(145deg)"});
            $(fiveRight).css({opacity:0});	
          },1200)
        }
      }
    ]
    // 循环遍历animations数组 依次调用out方法
    $.each(animations, function(i){
        if(i>0) {
          animations[i]["out"]();
        }
      });		
    
    
    //滚轮事件的实现
    content.on("mousewheel DOMMouseScroll", function (e) {
      // 与 IE 做兼容处理   ie低版本中 event是作为window属性存在的
      e = e||event;

      // chrome 和 ie   e.originalEvent.wheelDelta > 0 (滚轮向上)
      // firefox        e.originalEvent.detail < 0   (滚轮向上)

        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
              (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
        clearTimeout(timer);
        timer=setTimeout(function(){		
          if (delta > 0) {       				  // 滚轮向上
                if(now>0){  					 // 设置一个初始值 now  依次递减
              now--;
            }
            move(now);							
            } else if (delta < 0) {     		  // 滚轮向下
                if(now<cLiNodes.length-1){       // 如果 now < lis的长度 - 1
              now++;    					//  让 now 依次递增

              if((now==0&&delta > 0)||(now==cLiNodes.length&&delta < 0)){
                // 如果 now = 0 并且滚轮向上  或者 now = lis的length 并且滚轮向下  都return
                return;
              } 
              move(now);
            }        					     												 							
            }

          preIndex =now;    // preIndex 为 前一个索引

        },200)

      //  取消滚轮的默认行为
      //  firefox: window.event.returnValue = false     ie chormme: e.preventDefault()
      window.event? window.event.returnValue = false : e.preventDefault();
    });	
        
    headBind();
    function headBind(){
      $.each(nList, function(i){       //  头部导航处理
        nList[i].index = i;			// 保存当前的i
        $(nList[i]).on("click",function(){
          preIndex = now;
          move(this.index);						
          now = this.index;     // 更新now
        })
      });					
      $.each(pList, function(i){   // 右侧导航处理
        pList[i].index = i;      // 保存当前的i
        $(pList[i]).on('click', function(){
          preIndex = now;						
          move(this.index);
          now = this.index;   // 更新now
        })
      });						
    }
    
    contentBind();
    //内容区的高度 			
    function contentBind(){
        // 设置内容区的高度   视口高度 - 头部的高度
        $("#wrap .content").height(document.documentElement.clientHeight - head.outerHeight() + "px") ;

        // 循环遍历设置每个li的高度
          $.each( cLiNodes, function(i){
              $(cLiNodes[i]).height(document.documentElement.clientHeight - head.outerHeight() + "px");												
          });
    }								
              
    //同步主导航及侧边导航
    function move(index){
      $.each(nList, function(i) {
        $(nList[i]).attr("class","");    // 设置头部导航的样式
      });
      $(nList[index]).addClass("active");
      $.each(pList, function(i) {
        $(pList[i]).attr("class","");    // 设置右侧导航的样式
      });
      $(pList[index]).addClass("active");

      $(cList).css({    					// 设置内容区中的li的移动
        top:-index*(document.documentElement.clientHeight-head.outerHeight())
      });
      if(animations[index]&&animations[index]["in"]){   // 根据传过来的now 值 调用当前li对应的入场动画
        animations[index]["in"]();
      }
      if(animations[preIndex]&&animations[preIndex]["out"]){  // 前一个li调用出场动画
        animations[preIndex]["out"]();
      }
    }
	})
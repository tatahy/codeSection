<script>
$("#actdetail").focus();
		<!-- #actdetail失去焦点时判断是否填入了内容，否则拉回焦点填入内容  -->
		$("#actdetail").focusout(function(){
			if($("#actdetail").val()==''){
				$.alert("请填入审批意见。");
				$("#actdetail").val("退回修改").css('background','#00CCFF');
				$("#actdetail").focus();
			}
		});	
		
<!-- //简单渲染页面，IPMS V3	 -->
return '<div style="padding: 24px 48px;"><h1>:)</h1><p>模块开发中……<br/></p></div>';

$("#report").focusout(function(){
				if($("#report").text()!=''){
					<!-- 弹出自定义提示页面，确定后跳转并传参  -->
					$.confirm('确定提交&nbsp;‘任务报告’&nbsp;？',function(e){
						con=e;
						if(true==con)window.location.href="<{$home}>/issue/index/isssave"+"/issnum/"+"<{$issnum}>"+"/operate/"+$("#btnReport").val()+"/rolename/"+"<{$rolename}>"+"/actdetail/"+$("#report").text();
					}).ok('同意').cancel('取消');
				}
});
</script>


<!--??  HY 2017/5/27 -->
<script>
	<!-- 接受任务 -->
	$("#btnAccept").click(function(){
		<!-- 弹出自定义提示页面，确定后跳转并传参  -->
		$.confirm('确定&nbsp;‘领受任务’&nbsp;？',function(e){
			con=e;
			if(true==con)window.location.href="<{$home}>/issue/index/isssave"+"/issnum/"+"<{$issnum}>"+"/operate/"+$("#btnAccept").val()+"/rolename/"+"<{$rolename}>"+"/actdetail/"+$("#btnAccept").val();
			
		}).ok('同意').cancel('取消');		
    });	

			<!-- 用ajax实现上述代码块if(true==con)的功能 -->
			if(true==con){
				$.post("<{$home}>/issue/index/isssave",
					{
						issnum: "<{$issnum}>",
						operate: $("#btnReject").val(),
						rolename: "<{$rolename}>",
						actdetail: $("#actdetail").val()
				
					},function(id){window.location.href="<{$home}>/issue/index/issinfo"+"/id/"+id});
				
			}
<!-- /?? -->

<!-- maintainer专利管理页面，根据专利状态不同需调整页面的输入框			 -->
$("#divAddnewDate").show().html('<p><strong>填报日期：</strong><{$addnewdate}></p>');
$(".statusShow td").children().hide();
				
				$("#divStatusChange").show();
				<!-- $("#divApplyDate").hide(); 申请日期-->
				<!-- $("#divModifyDate").hide(); 返回修改日期-->
				<!-- $("#divAJDate").hide(); 授权/驳回日期：-->
				<!-- $("#divdivRenewdlDate").hide(); 授权续费截止日期：-->
				<!-- $("#divRADate").hide(); 续费/放弃日期：-->
				<!-- $("#divNextrenewDate").hide(); 下次续费日期：-->
				
				
				$("#divPatNum").show();
				<!-- $("#divPatApplynum").hide(); 申请编号-->
				<!-- $("#divPatAuthnum").hide(); 授权编号-->
				<!-- $("#divPatAgency").hide(); 代理机构-->
				<!-- $("#divPatAdmin").hide(); 授权机构-->
				<!-- $("#divRAReason").hide(); 放弃/驳回原因-->
				<!-- $("#divModSuggestion").hide(); 修改建议-->
		

<!-- /maintainer专利管理页面，根据专利状态不同需调整页面的输入框			 -->

switch(){
                    case '':
                    
                    break;
                    
                    case '':
                    
                    break;
                    
                    default:
                    
                    break;
                    
                    
                }
</script>

<!--  HY 2017/12/29 -->

<script>

//jQuery的$.post()与.load()有细微的差别,在输出显示效果上load较POST多了双引号。post较load多出了回调函数，在回调函数里可以做更多的事情。
	$('#btnPatIssNew').click(function(){
		var str=$(this).html();
		// 所有按钮所在行去掉附加的bg-warning
		$('.btnTpl').parent().removeClass('bg-warning');
		$.post('patIssTpl',
			{
				'role':role,
				'tpl':'addNew',
				'returnType':0
			},
			function(data){
				$('#divPatIssTpl').html(data);
				
				$('.modal-header').find('h4').empty().html('<strong>【'+str+'】</strong><span class="glyphicon glyphicon-wrench">专利事务</span>');
			}
		);
		<!-- $('#divPatIssTpl').load('patIssTpl',{'role':role,'tpl':tpl,'returnType':1}); -->
	});
</script>
				
<!--/  HY 2017/12/29 -->			

<!--  HY 2018/1/11 -->	

<h4><span >事务附件上传</span>
			<label class="radio-inline ">
      			<input type="radio" name="attUpload" value="0" checked><span class="label label-default">无</span>
    		</label>
			<label class="radio-inline">
      			<input type="radio" name="attUpload" value="1"><span class="label label-default">上传</span>
    		</label>
    		
		</h4>

<script>
//通过取得radio的选中项value值，判断是哪一项被选中
var v=$('input:radio[name="attUpload"]:checked').val();

//设置单选按钮value=1的项为当前选中项？？
$('input:radio[name="attUpload"]').attr('checked','1');
$('input:radio[name="attUpload"][value="1"]').attr('checked',true);
$('input:radio[name="attUpload"][value="1"]').prop('checked',true);

</script>		
<!--/  HY 2018/1/11 -->	

<!--  HY 2018/1/11 -->	
<style>
//Bootstrap 3定义页面宽度？？
 @media only screen 
        and (min-device-width : 375px) 
        and (max-device-width : 667px) { 
            .col-md-3,
            .col-md-9 {
                width: 100%;
            }
        }
</style>	
<!--/  HY 2018/1/11 -->		
		
<!--  HY 2018/1/25 -->	
<script>
// 得到页面锚点值
	var fragment = window.location.hash;	
</script>
<!--/  HY 2018/1/25 -->	

<!--  HY 2018/1/25 -->	

<script>
//向后端提交数据的方式：
//1. 表单get/post。TP5中后端用$request->param()来接收。
//2. FormData。TP5中后端用$request->request()来接收。formdata形式上传表单数据,自动搜索表单信息(表单内没有name属性的input不会被搜索到)，IE<=9不支持FormData。

//**函数名：formDataAjax
 	//* 作用：应用jQuery的$.ajax向后端提交formData数据
	//* 参数1：oprt，类型：字符。值：不为空。说明：表示触发本函数的‘操作’
	//* 参数2：fmObj，类型：对象。值：可为空，默认为空。说明：表示需要一起提交的表单。
	//* 参数3：title，类型：字符。值：不为空。说明：本函数显示的提示框$.alert的标题内容。
	function formDataAjax(oprt,fmObj,title){
	// formdata形式上传表单数据,自动搜索表单信息(表单内没有name属性的input不会被搜索到)，IE<=9不支持FormData
		if(fmObj){
			var formData = new FormData(fmObj[0]);
		}else{
			var formData = new FormData();
		}
		
		<!-- var formData = new FormData($('#fmIssPatRenew')[0]); -->
		// 添加表单内没有的内容
        formData.append('returnType', 0);
		formData.append('role','maintainer');
		formData.append('username','{$maintainer}');
		formData.append('oprt',oprt);
			
        $.ajax({
            type: 'post',
            url: 'patIssOprt',
            data: formData,
            contentType: false,// 当有文件要上传时，此项是必须的，否则后台无法识别文件流的起始位置
            processData: false,// 是否序列化data属性，默认true(注意：false时type必须是post)
            success: function(data) {
                if(data.result=='success'){
					
					// 操作成功，提示框显示信息
					$.alert(title+'成功<span class="glyphicon glyphicon-ok text-success"></span><hr>'+data.msg);
					
					//maintainer，载入续费管理页面
					$.post('patIssTpl',
						{
							'role':'maintainer',
							'tpl':'renew',
							'returnType':0
						},
						function(data){
							$('#divPatIss').html(data);
						}
					);
					
				}else{
					$('#modalPatRenew').modal();
					<!-- $.alert(data.msg); -->
				}
            }
        });
	}

</script>
<!--/  HY 2018/1/25 -->	


<!--HY 2018/2/8 -->	
<script>
<!-- // 遍历data数组组装HTML语句 -->
	<!-- // data的结构是数组类的：[{id:1,username:"xx", dept:"yy"},{}],所以要进行嵌套取出id，username和dept的值组装HTML语句-->
	var str="";
	$.each(data,function(n1,v1){
		$.each(v1,function(n2,v2){
			if(n2=="username"){
				str+="<option value='"+v2+"'>"+v2+" （部门：";
			}
			if(n2=="dept"){
				str+=v2+"）</option>";
			}
		});
	});

<!-- // 遍历json对象组装HTML语句 -->
	var str="";
	var data={"copy": 1, "move": 0, "erase":0, "upload":0, "download":0}
	$.each(data,function(k,v){
		str+="<span value='"+v+"'>"+k+" </span>";
	});
	console.log(str);
	
	<!-- //可嵌套取出key/value组装HTML语句-->
	var str1="";
	var data1={"att": {"copy": 1, "move": 0, "erase":0, "upload":0, "download":0},"iss": {"edit": 1, "audit":0, "approve": 0, "execute":0, "maintain": 0},"pat": {"edit": 1, "audit": 0, "approve": 0, "execute": 0, "maintain": 0},"pro": {"edit": 1, "audit":0, "approve": 0, "execute":0, "maintain": 0},"the": {"edit": 1, "audit":0, "approve": 0, "execute":0, "maintain": 0}}
	$.each(data1,function(k1,v1){
		$.each(v1,function(k2,v2){
			str+="<span value='"+v2+"'>"+k2+" </span>";
		});
		$('.auth'+k1).html(str);
	});
	console.log(str);


</script>
<!--/  HY 2018/2/8 -->	

<!--HY 2018/2/13 -->	
Javascript,数组的最大值、数组的最小值
<script>
var arr=[];
var str='';
for (var i=0;i<2;i++){
	arr.push(i);
}
//join函数将数组arr转换成以‘,’分隔的字符串
str=arr.join(',');
str=arr.toString();

//split函数将以‘,’分隔的字符串转换成数组arr
arr=str.split(',');


var min=Math.min.apply(null, arr);//min=0
var max=Math.max.apply(null, arr);//max=1

</script>


<!--/  HY 2018/2/13 -->	


<!--HY 2018/2/17 -->	
jQuery，表单
<html>
<div id="divForm" class="row col-sm-12">
	<hr>
	<form action="" id="fm1" class="form-inline" role="form">
	
	<div class="form-group">
      	<label class="control-label" for="a">a:</label>
        <input class="form-control" id="a" type="text" name="a" value="1">
        
	</div>
	
	<div class="form-group ">
      	<label class="control-label" for="a1">a1:</label>
        <input class="form-control" id="a" type="text" name="a1" value="11">
		
	</div>
	
	</form>
	
	<br>
	<form action="" id="fm2" class="form-inline" role="form">fm2
	<div class="form-group ">
      	<label class="control-label" for="a">a:</label>
        <input class="form-control" type="text" name="a" value="2">
    	
	</div>
	
	<div class="form-group ">
      	<label class="control-label" for="a2">a2:</label>
        <input class="form-control" type="text" name="a2" value="22">
    	
	</div>
		
	</form>
	<br>
	
	<form action="" id="fm3" class="form-inline" role="form">fm3
		<div class="form-group">
      		<label class="control-label" for="a">a:</label>
        	<input class="form-control" id="a" type="text" name="a" value="3">
			
		</div>
	
		<div class="form-group ">
      		<label class="control-label" for="a3">a3:</label>
        	<input class="form-control" type="text" name="a3" value="33">
    	
		</div>
		
		<select class="form-control" id="patType" name="patType">
				<option value="0">……</option>
				<option value="_PATT1">发明专利</option>
				<option value="_PATT2">实用新型专利</option>
                <option value="_PATT3">外观设计专利</option>
                <option value="_PATT4">软件版权</option>
                <option value="_PATT5">著作权</option>
                <option value="_PATT6">集成电路图</option>
                
		</select>
		
	</form>
	<br>
	
	<input id="btnSave" type="submit" class="btn btn-primary btn-sm" data-oprt="save" value="保存" > 
	<button type="submit" id="btnSubmit" class="btn btn-primary btn-sm" data-oprt="submit"  ><span class="glyphicon glyphicon-ok"></span>提交</button>
	<button type="submit" id="btnSubmit" class="btn btn-danger btn-sm"  data-oprt="delete" ><span class="glyphicon glyphicon-remove"></span>删除</button>
	
	<button id="btnReset" class="btn btn-warning btn-sm"  data-oprt="reset" ><span class="glyphicon glyphicon-repeat"></span>重置</button>
	
	<br>
	<p>点击的按钮是：<span id="clickedBtn">无</span></p>
	<p>fm1内容：<span id="spanFm1Display">无</span></p>
	<p>fm2内容：<span id="spanFm2Display">无</span></p>
	<p>fm3内容：<span id="spanFm3Display">无</span></p>
</div>


</html>

<script>
$(document).ready(function(){
	<!-- 重置表单，通过调用 DOM 中的reset方法来重置表单。 -->
	$('#btnReset').click(function(){	
		$('#fm1')[0].reset();
		$('#fm2')[0].reset();
		$('#fm3')[0].reset();
	
	});
	
	<!-- 提交表单 -->
	$('#formId').submit(function(event){});
	
	//检查divForm里的input是否为空，为空做出提示，不为空去掉提示
	$('#divForm .form-control').each(function(){
		$(this).focusout(function(){
			if($(this).val()){
				$(this).parent().removeClass('has-error');
				$(this).tooltip('destroy');
			}else{
				$(this).parent().addClass('has-error');
				$(this).tooltip({title: '请填写此字段', placement: 'bottom'}).tooltip('show');
			}
			
		});
		
	});
	
	// select显示为后端传来的内容,tp5框架下后端patinfo模型中对pattpye字段有定义获取器，所以$pat.pattype的值不是数据库中的值，$pat->getData('pattype')才是。同理$iss->getData('issmap_type')
	$('#patType').val('{$pat->getData('pattype')}').attr('selected');
	$('#issType').val('{$iss->getData('issmap_type')}').attr('selected');

});

</script>

<!--/  HY 2018/2/17 -->	



<!--HY 2018/3/1 -->	
AJAX，jQuery
<script>
$(document).ready(function(){	
//$.ajax()返回的是一个jQXHR对象，该对象还有done()、fail()等方法。		
        $.ajax({
            type: 'post',
            url: 'issPatOprt',
            data: formData,
            contentType: false,// 当有文件要上传时，此项是必须的，否则后台无法识别文件流的起始位置
            processData: false,// 是否序列化data属性，默认true(注意：false时type必须是post)
			xhr:function(){
				//jQuery中得到XMLHttpRequest对象
				var xhr= $.ajaxSettings.xhr();
				//v==true,'上传'按钮被选中表示有文件要上传
				if(v==true){
					xhr.upload.onprogress=function(progress){
						if(progress.lengthComputable){
							//计算百分比并取整
							var percent=Math.round(progress.loaded/progress.total*100);
							//在浏览器控制台显示的内容
							console.log(percent);
							$('#divUpLoadProcess').css("width",percent + "%").text(percent + "%");
						}
					};
					xhr.upload.onloadstart=function(){
						console.log('started...');
					};
					xhr.upload.onloadend=function(){
						console.log('finished xhr.upload='+xhr.upload+' v='+v);
						$.alert('附件上传完成'+v);
					};
				}else{
					$.alert('无附件上传 xhr.upload='+xhr.upload+' v='+v);
				}
				return xhr;
			},
            success: function(data) {
                <!-- $('#divIssPatSingle_load').html(data); -->
				$("#modalIssPatAuthSingle").modal("hide");
				$.alert('【'+oprt+'】成功');
            },
			error: function(){
			
			}
        }).done(function(resp){
			//利用$.ajax()返回的jQXHR对象的done()事件（resopnse结束），弹出提示框，显示本次操作成功。与在success: function(data){}弹出提示框的效果一样
			<!-- $.alert('【'+oprt+'】成功'); -->
		});
			
	});
});	
</script>


<!--/  HY 2018/3/1 -->	


<!--  HY 2018/3/6 -->	
// 函数定义与调用的方式：
<script>
$(document).ready(function(){	
	//函数定义1：
	var xhrUpload=function(){
		return function(){
		
			//code
		
		}
	};
	//函数调用1
	xhrUpload(function(){});
	
	//函数定义2：
	var xhrUpload=function(){

		//code
		
	};
	//函数调用2
	xhrUpload;
	
	//函数定义3：
	function xhrUpload(){

		//code
		
	};
	//函数调用3
	xhrUpload;
	
};
</script>

<!--/  HY 2018/3/6 -->	


<!--/  HY 2018/3/8 -->	
使用FormData上传单个文件，并显示上传进度条

<html>
	<form action="" id="fmObj">
		<input type="file" name="" id="file">
		
		<div class="form-group col-sm-6">
			<button id="btnFileUpload" class="btn btn-primary btn-sm" data-oprt="" data-btnLabel=""><span class="glyphicon glyphicon-upload"></span>附件上传</button>
			<br>
			
			<label for="" class="uploadbar" hidden>上传进度</label>	
			<!-- //上传进度条 -->
			<div class="progress" class="uploadbar" hidden>
				<div id="divUpLoadProcess" class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><span class="text-info">0%</span>
				</div>
			</div>
				
		</div>
		
	</form>

</html>

<script>
$(document).ready(function(){
	$('#fmObj').submit(function(event){					
		//jQuery的preventDefault()方法阻止元素发生默认的行为——表单提交
        event.preventDefault();	
		
		//得到新的FormData对象
		<!-- if(fmObj){ -->
			<!-- var formData = new FormData(fmObj[0]); -->
		<!-- }else{ -->
			<!-- var formData = new FormData(); -->
		<!-- } -->
		//append需要上传的文件对象
		<!-- formData.append('file',$('#file').get(0).files[0]); -->
		<!-- formData.append('file',$('#file')[0].files[0]); -->
		
		var formData = new FormData($('#fmObj')[0]);
		
		// 添加表单内没有的内容
        formData.append('returnType',0);
		
		//显示上传进度条
		$('.attuploadbar').show();	
		
		$.ajax({
            type: 'post',
            url: 'issPatOprt',
            data: formData,
            contentType: false,// 当有文件要上传时，此项是必须的，否则后台无法识别文件流的起始位置
            processData: false,// 是否序列化data属性，默认true(注意：false时type必须是post)
			//在xhr,调用自定义的xhrFileUploadBar函数，更新附件上传的进度条，显示上传进度
			xhr:xhrFileUploadBar($('#divUpLoadProcess')),
	
            success: function(data,textStatus,jqXHR){
				
            },
			error: function(jqXHR,textStatus,errorThrown){
				
				<!-- $.alert(jqXHR.readyState+'【'+textStatus+errorThrown+'】失败'); -->
			}
        });
	
	});
	
	
	//**函数名：xhrFileUploadBar
 	//* 作用：应用XMLHttpRequest对象的progress事件显示文件上传进程
	//* 参数obj，类型：对象。值：不为空。说明：为progress所在元素的id。类似$('#obj')
	function xhrFileUploadBar(obj){
		//jQuery中得到XMLHttpRequest对象	
		var xhr= $.ajaxSettings.xhr();
		
		//显示上传进度
		xhr.upload.onprogress=function(progress){
			if(progress.lengthComputable){
				//计算百分比并取整
				var percent=Math.round(progress.loaded/progress.total*100);
				//在浏览器控制台显示的内容
				console.log(percent);
				//附件上传的进度条显示上传进度
				obj.css("width",percent + "%").text(percent + "%");
			}
		};
		xhr.upload.onloadstart=function(){
			console.log('started...');
		};		
		xhr.upload.onloadend=function(){
			console.log('finished!!  xhr.upload='+xhr.upload+' v='+v);
			<!-- $.alert('附件上传完成'); -->
		};
			
		return xhr;
	
	}
	
});
</script>
<!--/  HY 2018/3/8 -->

<!-- HY 2018/4/2 -->	
//一个页面中多个表单内容异步传输

<script>

//按钮的click事件:向后端传数据
	$('#btn').click(function(){
		//预处理3个表单的数据,利用自定义的serializeJson()函数
		var fmPatDataJson=serializeJson($('#fmPat'));
		var fmIssPatDataJson=serializeJson($('#fmIssPat'));
		var fmAttDataJson=serializeJson($('#fmAtt'));
		
		//声明对象变量
		var param={};
		//使用“FormData”API
		var formData= new FormData;
		
		formData.append('fmPatDataJson',fmPatDataJson);
		formData.append('fmIssPatDataJson',fmIssPatDataJson);
		formData.append('fmAttDataJson',fmAttDataJson);
		//合并3个表单内容及附加内容到param中
		$.extend(param,fmPatDataJson,fmIssPatDataJson,fmAttDataJson,{'oprt':oprt,'auth':auth});
		$.post(url,param,function(data){
			//弹窗显示信息
			$.alert('《'+data.topic+'》'+btnHtml+data.msg);
		});
	});
//**函数名：serializeJson
 	//* 作用：对表单内容进行JSON对象序列化
	//* 参数fmObj，类型：对象。值：不为空。说明：表单对象。
	//* 返回值：JSON对象
	function serializeJson(fmObj){
		var serializeObj={};
		var arr=fmObj.serializeArray();
		var str=fmObj.serialize();
		$.each(arr,function(){
			if(serializeObj[this.name]){
				if($.isArray(serializeObj[this.name])){
					serializeObj[this.name].push(this.value);
				}else{
					serializeObj[this.name]=[serializeObj[this.name],this.value];
				}
			
			}else{
				serializeObj[this.name]=this.value;
			}
		});
		return serializeObj;
	}

</script>


<!--/  HY 2018/4/2 -->	

<!--  HY 2018/4/9 -->	
<script>
//当给extend方法传递一个以上的参数时，它会将所有参数对象合并到第一个里；同时，如果对象中有同名属性时，合并的时候后面的会覆盖前面的。
var param=$.extend({},fmIssPatDataJson,fmAttDataJson,{'oprt':'_ADDNEW','auth':auth,'patId':data.patId});
//上述代码的含义：param的值是4个参数对象的合集。
</script>

<!--/  HY 2018/4/2 -->	

<!--  HY 2018/4/2 -->
//form的reset事件，自动完成form中各个元素的值回滚，并在reset后触发其他的事件，
<html>
<form>
    <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
    </select>
   
    <br>
    <input type="test" />
    <input id="in" type="reset" value="Reset" />
</form> 
</html>

	
<script>
//To execute code after html form reset

//方法一
$('#in').click(function(){
	
	setTimeout(function(){
		alert("changed");
	},50);
	
});
//方法二
$('#in').click(function(event){

     	alert('before reset: ');
    
     	event.preventDefault();// stops the form from resetting after this function
     	$(this).closest('form').get(0).reset();// resets the form before continuing the function
     
     	alert('after reset: ');// executes after the form has been reset
     

 });
</script>

<script>
//自动到时转换和点击转换
//（To reset an interval you need to store it to a variable then call clearInterval on it before creating the new one.）
// on load
var interval = setInterval(imagechanger, 5000);

$('body').on('click', '#next', function() {
    clearInterval(interval); // clear current interval
    imagechanger(); // call instantly
    interval = setInterval(imagechanger, 5000); // create new interval   
});
</script>

<!--/  HY 2018/4/2 -->	

<!--  HY 2018/4/13 -->	


<!--/  HY 2018/4/13 -->	

<!--  HY 2018/4/29 -->	

jquery 判断获得元素的类型:
<script>
//把jquery对象转换成Dom对象，应用js的‘tagName’返回的是标签的大写名
$('#id')[0].tagName;
//转换成小写
$('#id')[0].tagName.toLowerCase();
$('#id').get(0).tagName;
//直接用jQuery封装的方法得到
$("#id").prop("nodeName");

</script> 

把jquery对象装换为js对象
<script>
//说明：jQuery通过任何选择器取得的对象都是jquery对象而不是JavaScript的dom，jquery对象不能用js的方法进行操作， 而需要使用jquery对象支持的方法 。如果是通过class的话，取得的是jquery对象数组。

//1.单个对象转换
var obj = $('#xx')[0];
//2. 数组对象转换
var obj = $('.xx').each(function(){
	alert(this);//这里 this获得的就是一个dom对象组
	alert(this.index($(this))); //获取单个jQuery对象（$(this)）下标
};
</script> 

<!--/  HY 2018/4/29 -->	


<!--  HY 2018/4/30 -->	
//二次封装的ajax函数，实现返回值给函数调用者
// 以下代码可在chrome、Firefox显示的网页的console里（F12）直接运行，网页需含有jQuery库文件(jQuery，version 1.12测试通过)
<script> 

//全局变量
var kk=0;
var async=true;
if(async){
	//ajax异步执行，无返回值。
	getAjaxReturn(async,success_function,fail_function);
}else{
	//ajax同步执行。kk=返回值。
	kk=getAjaxReturn(async,success_function,fail_function);
}

//通过传入函数实现ajax二次封装后异步执行，同步回传。
function getAjaxReturn(p_async,sf,ff)
{ 
  	var sequence='ajax同步执行。';
	var rt=0;
	if(p_async){
		sequence='ajax异步执行。';
	}
	
	$.ajax({
    	type:"POST",
    	url: "xx",
		async:p_async,
    	data:{'req':'_DEPT'},
    	success:function(databack){
			rt=1;
			console.log(databack);	
			if(databack[0].id){   
   				sf(sequence+'处理成功');
				
    		}
    	},
		error:function() {
			rt=1;
			ff(sequence+'处理失败');
        }
  	});
	//同步就返回值rt
	if(p_async==false){
		return rt;
	}
	
}

function success_function(info)
{
	alert(info);
	//return info;
}

function fail_function(info)
{
	alert(info);
}

alert('同步。全局变量kk='+kk);
</script> 


//注，异步执行中的回调函数，是因为你不知道何时可以调用它，所以委托给浏览器在合适的时候帮你调用它。

//所以，在$.ajax中，你不知道何时可以获得success的返回值，所以一切基于这个返回值来做的后续工作，也应该作为回调放在success函数里面。

<script> 
// 1.保持异步，定义一个回调函数k
//例1
k();
function k(){
 	select(function(result){
		result=result+1
		console.log(result);
  	});

}

function select(k) {
  	
	$.ajax({
    	url: "userOprt",
    	success: function(obj) {
 			obj=1;
    		k(obj);
    	}
  	});
}

//例2
function load_val(callback){//定义一个回调函数
    $.getJSON('test.php' , function(data){
        callback(data);//将返回结果当作参数返回
    });
}

load_val(function(data){
    alert(data);//这里可以得到值
});

//例3，通过传入一个函数解决这个问题。
function getAjaxReturn(success_function,fail_function)
{
    var bol=false;
  	$.ajax({
    	type:"POST",
    	url:"ajax/userexist.aspx",
    	data:"username="+vusername.value,
    	success:function(msg){
    		if(msg=="ok"){   
   				showtipex(vusername.id,"<img src='images/ok.gif'/><b><font color='#ffff00'>该用户名可以使用</font></b>",false);
				success_function(msg);
    		}
    		else
    		{    
    			showtipex(vusername.id,"<img src='images/cancel.gif'/><b><font color='#ffff00'>该用户已被注册</font></b>",false);
      			vusername.className="bigwrong";
				fail_function(msg);
      			//return false;
    		}
    	}
  	});
}

function success_function(info)
{
//do what you want do
alert(info);
}

function fail_function(info)
{
//do what you  want do
alert(info);
}


//2.用同步ajax来实现
function load_val2(){
    var result;
    $.ajax({
        dataType:'json',
        url : 'test.php',
        async:false,//这里选择异步为false，那么这个程序执行到这里的时候会暂停，等待
                    //数据加载完成后才继续执行
        success : function(data){
            result = data;
        }
    });
    return result;
}
 
var data = load_val();//这里可以直接拿到数据

//函数内部对函数的参数data的赋值
data = (data==null || data=="" || typeof(data)=="undefined")? {"date": new Date().getTime()} : data;
</script> 

//jquery ajax $.ajax如何使用自定义函数？
<script> 
//1.直接用函数名来赋值给success
$.ajax({url: "demo.php",type: "POST",data:{Name:"keyun"},  success: scss });

//2.二次包装一下ajax这个方法
var  myAjax = function(opt){
        $.ajax({            
			url:opt['url'],
            type:opt['method'],
            data:opt['data'],
            success:function(msg){
            	opt['callBack'](msg);
            }
       });
  }      
   
var test = function(){
   var opt = {
         url:'demo.php',
         method:'post',
         data:{key:'a',value:'1'},
        callBack:scss
    }
   myAjax(opt);
}
function scss(res){  alert(res);}

</script> 


//jquery ajax，表单提交，序列化表单数据
<script> 
$("form").on("submit",function(){
    var url = this.action;   //可以直接取到表单的action
    var formData = $(this).serialize();
    $.post(url,formData,
        function(data){
            //返回成功，可以做一个其他事情
            console.log(data);
        },'json');

    //阻止表单默认提交行为
    return false;
});


</script> 

<!--/  HY 2018/4/30 -->	

<!--  HY 2018/6/7 -->	
<html>
//bootstrap3 alert
 <div class="alert alert-success fade in">
    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
    <strong>Success!</strong> This alert box could indicate a successful or positive action.
  </div>
  <div class="alert alert-info fade in">
    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
    <strong>Info!</strong> This alert box could indicate a neutral informative change or action.
  </div>
  <div class="alert alert-warning fade in">
    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
    <strong>Warning!</strong> This alert box could indicate a warning that might need attention.
  </div>
  <div class="alert alert-danger fade in">
    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
    <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
  </div>


</html>


<!--//  HY 2018/6/7 -->	



<!--  HY 2018/6/13 -->	
//字符串函数,

<script>
var str='aaBB';
//JS实现字母大小写转换
//toLocaleUpperCase(),所有字母转换为大写，适应宿主环境当前区域设置
str.toLocaleUpperCase();

//toUpperCase(),所有字母转换为大写
str.toUpperCase();

//toLocaleLowerCase(),所有字母转换为小写，适应宿主环境当前区域设置
str.toLocaleLowerCase();

//toLowerCase(),所有字母转换为小写
str.toLowerCase();

//返回一个字符串在开始索引到结束索引之间的一个子集
str.substring(indexStart[,indexEnd]);
</script>

<!--//  HY 2018/6/7 -->	



<!--  HY 2018/7/11 -->
//FormData对象中的键值对数据，转化为JSON数据，FormData是XMLHttpRequest2中的新接口，IE10以前的版本都不支持。
<meta charset="utf-8">

<html>
<form id="fm" >
	<label class="" for="searchTopic">事务标题</label>
	<input name="s1" type="text" value="" placeholder="...不限">
	
	<label class="" for="searchTopic">事务状态</label>
	<input name="s2" type="text" value="" placeholder="...不限">

</html>

<script>

var formdata=new FormData($('#fm')[0]);
var objData={};
//方法一，使用迭代器迭代formdata.entries()对象组装键值对
for (var pair of formdata.entries()){
	objData[pair[0]]=pair[1];
}

//方法二，使用Map对象的forEach方法组装键值对
formdata.forEach((value,key)=>objData[key]=value);

//方法三，使用Map对象的forEach方法的回调函数组装键值对
formData.forEach(function(val,key,){
	if(val='' && val!=0){
		objData[key]=val;
	}
});

//将键值对转换为json对象
JSON.stringify(objData);

</script>

<!--//  HY 2018/7/20 -->	
<script>
for...in 语句以原始插入顺序迭代对象的可枚举属性。

for...of 语句遍历可迭代对象定义要迭代的数据。

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of
</script>
<!--//  HY 2018/7/20 -->	

	

<!-- HY 2018/8/14 -->	

<script>
//标准日期、标准时间，2018/03/05 01:05:04
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  //函数式编程语句？？
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
</script>


<!--//  HY 2018/9/24 正则表达式, jQuery1.12+bootstrap3 -->	
<html>
<div class="form-group has-feedback col-sm-6">
	<label for="username">用户名<span class="small glyphicon glyphicon-asterisk text-danger"></span></label>
	<!-- // bootstrap实现矢量图在输入框开头 -->
	<div class="input-group">
		<span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
		<input type="text" class="form-control inputCheck" name="userName" value="{$user.username}" placeholder="登录系统的用户名">	
	</div>
					
	<!-- // 配合jQuery 中的内容验证代码-->
	<span style="color:red;display:none;" class="spTips"></span>
    <span style="display: none;margin-right:17px;" class="spRemove glyphicon glyphicon-remove form-control-feedback"></span>
    <span style="display: none;margin-right:17px;" class="spOk glyphicon glyphicon-ok form-control-feedback"></span>	
</div>

</html>

<script>

var regCheckUserName=(obj)=>{
	//userName正则表达式，由英文、数字、中文和下划线组成,但不能以数字开头,长度为2到20个字符。unicode编码中的汉字范围:\u2E80-\u9FFF
	var regUserName = /^[a-zA-Z_\u2E80-\u9FFF][a-zA-Z0-9_\u2E80-\u9FFF]{1,19}$/;
	var len=obj.val().length;
	var result=false;
	if (regUserName.test(obj.val())) {
        result=regSuccess(obj);
    } else if (len < 2) {
        regFail(obj,'有'+obj.val().length+'个字符，不能少于2个字符。');
    } else {
        regFail(obj,'可由英文、数字、中文和下划线组成，但不能以数字开头。')
    }
	return result;
};

var regCheckUserMobile=(obj)=>{
	//mobile正则表达式，11位数字。必须以1开头。
	var regMobile = /^1[0-9]{10}$/;
	var len=obj.val().length;
	var result=false;
	if (regMobile.test(obj.val())) {
        result=regSuccess(obj);
    } else if (len< 11) {
        regFail(obj, '只有'+len+'位。手机号是11位数字，必须以1开头。');
    } else if (len > 11) {
        regFail(obj,'有'+len+'位，手机号由1开头的11位数字组成。');
    }else {
        regFail(obj,'已有'+len+'位，但必须是以1开头的11位数字')
    }
	return result;
};

var regCheckUserPwd=(obj)=>{
	//pwd正则表达式，
	//1.以字母开头，长度在6~20之间，只能包含字符、数字和下划线
	//var regPwd = /^[a-zA-Z]\w{5,19}$/;
	
	//2.数字，字母和下划线（至少包含其中两种，数字不能开头）,长度在6~20之间
	//var regPwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[A-Za-z_][A-Za-z_0-9]{5,19}$/;
	
	//3.数字，字母和下划线（至少包含其中两种，下划线不能开头）,长度在6~20之间。非下划线开头，不是纯数字，不是纯字母，字母数字组合，字母数字下划线组合，长度在6~20之间
	var regPwd = /^(?![_]+$)(?![0-9]+$)(?![A-Za-z]+$)[A-Za-z0-9][A-Za-z_0-9]{5,19}$/;
	var len=obj.val().length;
	var result=false;
	if (regPwd.test(obj.val())) {
        result=regSuccess(obj);
    } else if (len < 6 || len>20) {
        regFail(obj,'有'+obj.val().length+'个字符，长度应为6~20。');
    } else {
        //1.
		//regFail(obj,'以字母开头，只能包含字符、数字和下划线');
		//2.	
		//regFail(obj,'数字，字母和下划线（至少包含其中两种，数字不能开头）');
		
		//3.
		regFail(obj,'数字，字母和下划线（至少包含其中两种，下划线不能开头）');
    }
	return result;
};

//校验成功函数，返回true
var regSuccess=(obj)=> {
    var divParent=obj.closest('.has-feedback');
	divParent.removeClass('has-error').addClass('has-success');
	divParent.children('span').hide();
	divParent.children('.spOk').show();
    return true;
};

// 校验失败函数，返回false
var regFail=(obj,msg)=> {
    var divParent=obj.closest('.has-feedback');
	divParent.removeClass('has-success').addClass('has-error');
	divParent.children('span').hide();
	divParent.children('.spTips').text(msg).show();
    divParent.children('.spRemove').show();
	return false;
};

</script>
<!--//  --HY 2018/9/24 正则表达式, jQuery1.12+bootstrap3 -->	
	

<!--  HY 2018/12/28 -->
<script>
//jQuery对象转换为js对象
jqObj=$('#id');
jsObj1=$('#id').get(0);
jsObj2=$('#id')[0];

</script>

<!--//  HY 2018/12/28 -->

<!-- HY 2019/1/11 -->	
<script>
//给li标签添加手型指针，指定指针移入移出后的底色
obj=$('<li></li>').attr({'class':'list-group-item text-center','title':'点击删除').css({'cursor':'pointer'});
obj.hover(
	function(){
		$(this).css('background-color','#f5f5f5');
	},
	function(){
		$(this).css('background-color','#fff');
	}
);

</script>
<!--//  HY 2019/1/11 -->

<!--//  HY 2019/02/15 -->

//表单中对含有‘name’属性的元素取值
$('form').submit(function(evt) {
	evt.preventDefault();
	$(this).find('[name]').each(function(index,el){
		//jQ生成数组，$(el)==$(this)
		console.log($(el).attr('name'));
		console.log($(el).val());
		
		jQName[index]=$(el).attr('name');
		jQVal[index]=$(el).val();
		//原生js取值1
		jsNameA[index]=el.attributes.name.value;
		jsValA[index]=el.value;
		
		//原生js取值2
		jsNameB[index]=this.attributes.name.value
		jsValB[index]=this.value
		
	});
});
		

<!--//  HY 2019/02/15 -->		
			

<!--//  HY 2018/0/0 -->		

<!--//  HY 2018/0/0 -->		

<!-- ......................问题................................ -->

<!--/  HY 2018/1/21 -->
1.jquery主要用于DOM操作，BOM操作则要通过JavaScript？
DOM:Document Object Model
BOM:Brower Object Model

2.跨域访问?
jsonp

3.H5中增加的meta元组“viewport”的使用？
<head>
<!-- // 开启bootstrap响应式布局 -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>	
<!--/  HY 2018/1/21 -->	

4. JavaScript中assign({},obj1,obj2),extend({},obj1,obj2),merge({},obj1,obj2)的区别	

5.函数调用时apply()与call()的区别：

例如：
var success = function success() {
 ~~~~
};

var fail = function fail() { 
~~~~

};

// 成功回调
	var callSuccess = function () {
		success.apply(null, arguments);
	};

	// 失败回调
	var callFail = function (error) {
		fail.call(null, error);
	};	

6. $(this)的内容

$('form').find('[name]').each(function(){
	console.log($(this));
	/* 上述语句将在console中输出{0:{...},context:{...}}
	$(this)[0]的内容；对象本身
	$(this).context的内容：对象的各个属性值。 */
});

$('form').find('[name]').each(function(index,obj){
	console.log(obj.context.tagName+' | '+index);
	/* 上述语句将在console中输出:
	对象的HTML标签名（大写）和对象在选择器结果集中的下标值。
	obj是JavaScript中的对象，使用$(obj)就变成jQuery中的对象。
	*/

});

7. $.data()的内容

<html>
<a data-name="nn",data-val="vv"></a>
</html>

console.log($('a').data());
/* 上述语句将在console中输出:
	对象的data键值对hash数组：{name:'nn',val:'vv'}
*/

// ......................问题................................ 
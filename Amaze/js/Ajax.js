﻿function BindDealerList(e){$("#ddlDealer").html(""),$("#ddlDealer").append(e)}function Open(){$("#Minimize").hide(500),$("#enquiryForm").show(500)}function Close(){$("#Minimize").show(500),$("#enquiryForm").hide(500)}function SubmitData(){var e=$("#txtName").val(),t=$("#txtContactNo").val(),a=$("#txtEmail").val(),i=getQuerystring("utm_source",null),n=$("#ddlCity option:selected").text(),r=$("#ddlDealer option:selected").text(),l=/^[A-Za-z ]+$/,o=/^(\+91-|\+91|0)?\d{10}$/;if(!l.test(e))return alert("Name must have alphabet characters only"),!1;if(""==e||" Your Name"==e)return alert("Please enter your name"),!1;if(!o.test(t)||"000000000"==t||"9999999999"==t)return alert("Please enter your valid contact number"),!1;if(""==t||" Your Mobile No"==t)return alert("Please enter your contact number"),!1;var c=/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;return c.test(a)?"--Select City--"==n?(alert("Please select city"),!1):"--Select Dealer--"==r?(alert("Please select dealer"),!1):void $.ajax({type:"POST",url:"https://www.hondacarindia.com/AjaxForCity.aspx?functionName=SubmitDataForAmazeNew2016",data:"Name="+e+"&Contact="+t+"&EmailId="+a+"&utm_source="+i+"&City="+n+"&Dealer="+r,success:InsertData}):(alert("Please enter your valid email id"),!1)}function getQuerystring(e,t){null==t&&(t=""),e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var a=new RegExp("[\\?&]"+e+"=([^&#]*)"),i=a.exec(window.location.href);return null==i?t:i[1]}function call(e,t){leadid=e,optional=t,$("<iframe />",{name:"kamal",id:"1",src:"https://tda.tyroo.com/sdk/container.php?CID=194&LEADID_VALUE="+leadid+"&ACTION_KEY=&OPTIONALADVER_VALUE="+optional,height:0,width:0}).appendTo("#iframe_div")}function InsertData(e){var t=e.split("~~");"Success"==t[0]&&(window.location="https://www.hondacarindia.com/Amaze/thankyou.html")}$("#ddlCity").change(function(){var e=$("#ddlCity").val();$.ajax({type:"POST",url:"https://www.hondacarindia.com/AjaxForCity.aspx?functionName=BindDealerList",data:"CityVal="+e,success:BindDealerList})});
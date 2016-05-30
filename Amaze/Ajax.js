// JScript File

$("#ddlCity").change(function()
{

var CityVal = $("#ddlCity").val();               

            $.ajax({
                type: "POST",
                url: "https://www.hondacarindia.com/AjaxForCity.aspx?functionName=BindDealerList",
                data: 'CityVal=' + CityVal,
              success: BindDealerList
             
});
});
function BindDealerList(result){   

            var pageResponse = result;            
//            var start = pageResponse.indexOf("##STARTPAGERESPONSEVALUE##") + 26;
//            var end = pageResponse.indexOf("##ENDPAGERESPONSEVALUE##");
//            pageResponse = pageResponse.substr(start, end - start);
            $("#ddlDealer").html('');
            $("#ddlDealer").append(result);                    
    }    
function Open()
        {

        $("#Minimize").hide(500);
        $("#enquiryForm").show(500);
        }
        function Close()
        {
        $("#Minimize").show(500);
        $("#enquiryForm").hide(500);
        }
        
        function SubmitData()
        {
            var Name = $("#txtName").val();
            var Contact = $("#txtContactNo").val();        
            var EmailId = $("#txtEmail").val();
            var utm_source= getQuerystring("utm_source", null);
            var City =$("#ddlCity option:selected").text();
            var Dealer=$("#ddlDealer option:selected").text();
var NameFilter = /^[A-Za-z ]+$/;
var filterMobile = /^(\+91-|\+91|0)?\d{10}$/;

           if(!NameFilter.test(Name)){
alert('Name must have alphabet characters only');
return false;
}
else if(Name=="" || Name==" Your Name")
              {
              alert('Please enter your name');
              return false;
              }
 if (!filterMobile.test(Contact)|| Contact=="000000000" || Contact=="9999999999") 
                {
alert('Please enter your valid contact number');
                return false;
                 }
            else if(Contact=="" || Contact==" Your Mobile No")
                {
                alert('Please enter your contact number');
                return false; 
                }
           
           var filter = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
                if (!filter.test(EmailId)) 
                {
                alert('Please enter your valid email id');
                return false;
                 }
             if(City=="--Select City--")
                 {
                  alert('Please select city');
             return false;
                 }
                 if(Dealer=='--Select Dealer--')
                 {
                     alert('Please select dealer');
             return false;
                 }
         
        $.ajax({
         type: "POST",
         url: "https://www.hondacarindia.com/AjaxForCity.aspx?functionName=SubmitDataForAmazeNew2016",
         data: 'Name=' + Name + '&' + 'Contact=' + Contact + '&' + 'EmailId=' + EmailId + '&' + 'utm_source='+ utm_source + '&' + 'City=' + City + '&' + 'Dealer=' + Dealer,
         success: InsertData
        });

//        $("#divData").hide();
//        $("#Result").show();  
//        $("#Result").html('<iframe src="Thanku.html" style="overflow:hidden; border:none;"></iframe>');
        }
        function getQuerystring(key, default_)
         {
       
        if (default_ == null) default_ = "";
        key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
        var qs = regex.exec(window.location.href);
        if (qs == null)
        return default_;
        else
        return qs[1];

}
function call(mob,email)
{
              leadid=mob; //leadid

                optional=email;//{email}

                $('<iframe />', {

                                                name: "kamal",

                                                id: "1",

                                                src: 'https://tda.tyroo.com/sdk/container.php?CID=194&LEADID_VALUE=' + leadid + '&ACTION_KEY=&OPTIONALADVER_VALUE=' + optional,

                                                height: 0,

                                                width: 0

                                }).appendTo('#iframe_div');

}
function InsertData(result){   
    
            var pageResponse = result.split("~~");
            
            if (pageResponse[0] == "Success")
            {    
window.location = "https://www.hondacarindia.com/Amaze03Mar2016/thankyou.html";
                
                //var partnersScript = document.createElement('script');
               // partnersScript.setAttribute('src','https://partners.komli.com/lead_third/10514/' + pageResponse[1]);
               // document.getElementsByTagName('head')[0].appendChild(partnersScript);
                
              //  var partnersImage = document.createElement('img');
               // partnersImage.setAttribute('src','https://partners.komli.com/track_lead/10514/' + pageResponse[1]);
              //  document.getElementsByTagName('head')[0].appendChild(partnersImage);
                
              //  var networkScript = document.createElement('script');
             //   networkScript.setAttribute('src','https://ads.networkplay.in/lead_third/10404/' + pageResponse[1]);
              //  document.getElementsByTagName('head')[0].appendChild(networkScript);
                
             //   var networkImage = document.createElement('img');
             //   networkImage.setAttribute('src','https://ads.networkplay.in/track_lead/10404/' + pageResponse[1]);
             //   document.getElementsByTagName('head')[0].appendChild(networkImage);
          //  var data = pageResponse[1].split(",");
            
              //   call(data[0],data[1]);

            
              //  $("#divData").hide();
             //  $("#Result").show();  
            //    $("#Result").html("<label style='font-size: 13px; font-family: Arial; position: relative; color: White;'>Thank You for your interest in the Honda Car. Our representative will get in touch with you shortly.</label>");
            }
//            var start = pageResponse.indexOf("##STARTPAGERESPONSEVALUE##") + 26;
//            var end = pageResponse.indexOf("##ENDPAGERESPONSEVALUE##");
//            pageResponse = pageResponse.substr(start, end - start);
//            $("#ddlDealer").html('');
//            $("#ddlDealer").append(pageResponse);                    
    } 
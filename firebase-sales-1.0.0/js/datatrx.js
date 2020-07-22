//<![CDATA[
 $("#submitBtn").click(function(){

    var buyer = $("#userName").val();
    var buyerAvatar = $("#avatarUrl").val();
    var productName = $("#productName").val();
    var productUrl = $("#productUrl").val();
    var screenshotUrl = $("#screenshotUrl").val();
    var timeSales = $("#timeSales").val();
    var orderID = "aksdjfawejiawjfawio";
    var dbR = dbRef.child("sales/" + orderID + "/" + buyer);

    var dataSale = {

                 "screenshotURL" : screenshotUrl,
                 "avatarURL" : buyerAvatar,
                 "time": "2019-10-14",
                 "productName": productName,
                 "productURL" : productUrl,

            };

     dbR.set(dataSale);

 });
   
//]]>
       

       // "Revan": {
       //      "screenshotURL": "https://e-compfast.github.io/make-404-html/trx/trx-revan.png",
       //      "avatarURL": "https://e-compfast.github.io/make-404-html/trx/bp-revan.jpg",
       //      "time": "2018-08-23",
       //      "productName": "Membeli 1 Speaker Tahfidz Qur'an LED",
       //      "productURL": "https://www.facebook.com/labdawaraindonesia",
       //  },

       //  "Roy Wati": {
       //      "screenshotURL": "https://e-compfast.github.io/make-404-html/trx/trx-roy-wati.png",
       //      "avatarURL": "https://e-compfast.github.io/make-404-html/trx/bu-roy.jpg",
       //      "time": "2019-09-14",
       //      "productName": "Membeli 1 Speaker Tahfidz Qur'an LED",
       //      "productURL": "https://www.facebook.com/labdawaraindonesia",
       //  },

       //   "Bpk Herman": {
       //      "screenshotURL": "https://e-compfast.github.io/make-404-html/trx/trx-herman.png",
       //      "avatarURL": "",
       //      "time": "2020-06-29",
       //      "productName": "Membeli 1 Speaker Tahfidz Qur'an LED",
       //      "productURL": "https://www.facebook.com/labdawaraindonesia",
       //  }

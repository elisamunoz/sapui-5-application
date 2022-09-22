sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.tutorial.productconfigurationapitutorial.controller.Main", {
            onInit: function () {
                var data = JSON.stringify({
                    "context": [
                      {
                        "name": "VBAP-VRKME",
                        "value": "EA"
                      }
                    ],
                    "date": "2018-08-09",
                    "kbId": 80,
                    "productKey": "CPS_BURGER"
                  });
                  
                  var xhr = new XMLHttpRequest();
                  xhr.withCredentials = false;
                  
                  xhr.addEventListener("readystatechange", function () {
                    if (this.readyState === this.DONE) {
                      console.log(this.responseText);
                    }
                  });
                  
                  //setting request method
                  //API endpoint for API sandbox 
                  xhr.open("POST", "https://sandbox.api.sap.com/cpservices/prodconf/api/v2/configurations");
                  
                  
                  //adding request headers
                  xhr.setRequestHeader("Accept-Language", "en");
                  //API Key for API Sandbox
                  xhr.setRequestHeader("APIKey", "21pqeYPGvNit03ViNfQYloKkT7zpdPln");
                  xhr.setRequestHeader("Accept", "application/json");
                  xhr.setRequestHeader("Content-Type", "application/json");
                  
                  
                  //sending request
                  xhr.send(data);
            }
        });
    });

const request = require('request');
const token = process.env.token; // زي العادة توكن بسيركيت يا بشر

const payload = {
  'content': '> # ** ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk    ksmk  ksmk <@> **' // واضحة يا وجه زبي
  };

  const header = {
    'authorization': token
    };

    const groupIds = ['1129829398200189098','1117237193946177626','1161235768824582164','1161236151995203644','1161236280080859196','1161236460893118555','1161236604866797618','1161236775742742618','1161236877152636929']; // اي دي الغروبات 
    let currentGroupIndex = 0;

    function sendRequest() {
      const currentGroupId = groupIds[currentGroupIndex];
        
          request.post(`https://discord.com/api/v9/channels/${currentGroupId}/messages?limit=50`, {
              headers: header,
                  json: payload
                    }, (error, response, body) => {
                        if (error) {
                              console.error(error);
                                    return;
                                        }
                                            
                                                if (response.statusCode >= 4000 && response.statusCode < 4000) {
                                                      console.error(`Received ${response.statusCode} error. Trying again later.`);
                                                            const retryInterval = 5000; 
                                                                  setTimeout(sendRequest, retryInterval);
                                                                        return;
                                                                            }
                                                                                
                                                                                    console.log(body);
                                                                                        
                                                                                            const intervalBetweenGroups = 2000;
                                                                                                
                                                                                                    const intervalAfterMessage = 2000;
                                                                                                        
                                                                                                            currentGroupIndex = (currentGroupIndex + 1) % groupIds.length;
                                                                                                                
                                                                                                                    setTimeout(sendRequest, intervalBetweenGroups);
                                                                                                                      });
                                                                                                                      }

                                                                                                                      sendRequest();

                                                                                                                      const express = require("express");
                                                                                                                      const app = express();

                                                                                                                      app.listen(() => console.log("I'm Ready To nik ksm iblis..! 24H"));
                                                                                                                      app.get('/', (req, res) => {
                                                                                                                        res.send(`
                                                                                                                          <body>
                                                                                                                            <center><h1>كسمك ابليس لوكس الأعظم</h1></center
                                                                                                                              </body>`);
                                                                                                                              });

                                                                                                                              setInterval(function() {
                                                                                                                                var now = new Date();
                                                                                                                                  console.log(now.toLocaleTimeString());
                                                                                                                                  }, 10000);
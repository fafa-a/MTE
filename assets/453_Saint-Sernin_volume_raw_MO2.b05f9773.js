const n=`date,value\r
2017-03-14,598209.9565958359\r
2017-04-03,639822.0092854801\r
2017-04-10,639822.0092854801\r
2017-04-23,624688.507922873\r
2017-04-30,624688.507922873\r
2017-06-02,607250.4808429825\r
2017-06-09,607250.4808429825\r
2017-06-12,607250.4808429825\r
2017-06-22,661126.1402122132\r
2017-07-02,668876.7693530138\r
2017-07-17,590047.2398355945\r
2017-07-19,590047.2398355945\r
2017-07-22,590047.2398355945\r
2017-08-21,578709.0141333089\r
2017-08-23,578709.0141333089\r
2017-08-26,633074.7558741563\r
2017-09-05,605601.9562185394\r
2017-10-05,523588.9106655017\r
2017-10-07,523588.9106655017\r
2017-10-10,523588.9106655017\r
2017-10-12,523588.9106655017\r
2017-10-15,523588.9106655017\r
2017-10-17,481384.3511027111\r
2017-10-20,481384.3511027111\r
2017-10-22,481384.3511027111\r
2017-10-25,481384.3511027111\r
2017-11-04,449408.1012207126\r
2017-11-11,449408.1012207126\r
2017-11-14,449408.1012207126\r
2018-02-22,581937.8383034378\r
2018-02-24,581937.8383034378\r
2018-02-27,640667.8059072519\r
2018-03-04,640667.8059072519\r
2018-03-24,714497.7632577517\r
2018-04-18,674067.7002734825\r
2018-04-20,674067.7002734825\r
2018-04-25,674067.7002734825\r
2018-05-18,643208.3815317423\r
2018-05-20,643208.3815317423\r
2018-05-25,643208.3815317423\r
2018-06-22,685380.1191309689\r
2018-06-24,685380.1191309689\r
2018-06-27,696781.9748360917\r
2018-06-29,696781.9748360917\r
2018-07-02,688003.3810910227\r
2018-07-04,634758.3821453836\r
2018-07-07,634758.3821453836\r
2018-07-17,584365.058494645\r
2018-07-19,584365.058494645\r
2018-07-22,584365.058494645\r
2018-07-24,584365.058494645\r
2018-07-27,584365.058494645\r
2018-08-06,552397.2357565166\r
2018-08-08,552397.2357565166\r
2018-08-11,552397.2357565166\r
2018-08-16,552397.2357565166\r
2018-08-21,468906.0997426007\r
2018-08-23,468906.0997426007\r
2018-08-26,479908.23932000576\r
2018-08-28,479908.23932000576\r
2018-09-20,383941.3266044685\r
2018-09-22,383941.3266044685\r
2018-09-25,417097.06598043896\r
2018-09-27,417097.06598043896\r
2018-09-30,383278.2759632812\r
2018-10-02,420553.6165323991\r
2018-10-05,369480.10288908915\r
2018-10-10,408173.5082220731\r
2018-10-12,345754.80357248685\r
2018-10-20,293509.4045783409\r
2018-10-22,293509.4045783409\r
2018-12-19,413654.0752082\r
2019-01-03,550821.2902962555\r
2019-01-10,550821.2902962555\r
2019-01-15,550821.2902962555\r
2019-02-17,606425.9523159973\r
2019-02-19,606425.9523159973\r
2019-02-22,639822.0092854801\r
2019-02-24,639822.0092854801\r
2019-02-27,607250.4808429825\r
2019-03-24,607250.4808429825\r
2019-03-26,607250.4808429825\r
2019-03-29,637287.8056657467\r
2019-03-31,637287.8056657467\r
2019-04-10,613865.8722281873\r
2019-04-13,701191.1030136566\r
2019-04-15,699425.8656686242\r
2019-04-18,699425.8656686242\r
2019-04-20,699425.8656686242\r
2019-05-13,692386.0661470675\r
2019-05-15,692386.0661470675\r
2019-05-23,703842.9235562315\r
2019-05-25,703842.9235562315\r
2019-05-30,697662.7430448787\r
2019-06-02,700308.2200174881\r
2019-06-04,700308.2200174881\r
2019-06-07,700308.2200174881\r
2019-06-12,642360.9920650868\r
2019-06-17,628874.9885000426\r
2019-06-19,628874.9885000426\r
2019-06-24,628874.9885000426\r
2019-06-27,628874.9885000426\r
2019-06-29,628874.9885000426\r
2019-07-02,611381.1086677678\r
2019-07-04,652564.696066902\r
2019-07-07,652564.696066902\r
2019-07-09,652564.696066902\r
2019-07-12,652564.696066902\r
2019-07-14,637287.8056657467\r
2019-07-17,646603.2478414194\r
2019-07-19,579515.4197708463\r
2019-07-22,602311.2968415419\r
2019-07-24,602311.2968415419\r
2019-07-29,602311.2968415419\r
2019-08-01,602311.2968415419\r
2019-08-03,535956.5782671355\r
2019-08-21,421246.5533282358\r
2019-08-23,421246.5533282358\r
2019-08-26,443706.5336425719\r
2019-08-28,443706.5336425719\r
2019-08-31,402727.6914835279\r
2019-09-02,402727.6914835279\r
2019-09-05,402727.6914835279\r
2019-09-07,426112.2879353359\r
2019-09-10,409540.39303233044\r
2019-09-12,426809.56049875834\r
2019-09-15,383941.3266044685\r
2019-09-17,417097.06598043896\r
2019-09-20,361703.44468977966\r
2019-09-22,361703.44468977966\r
2019-09-30,361703.44468977966\r
2019-12-14,644904.7530672069\r
2019-12-19,644056.3018773283\r
2019-12-21,644904.7530672069\r
2020-02-07,630553.3012796799\r
2020-02-09,630553.3012796799\r
2020-02-22,661985.2010539699\r
2020-02-24,644904.7530672069\r
2020-03-28,628036.6293004153\r
2020-03-30,628036.6293004153\r
2020-04-02,663704.9130720577\r
2020-04-04,663704.9130720577\r
2020-04-07,663704.9130720577\r
2020-04-09,663704.9130720577\r
2020-04-12,656838.7890409081\r
2020-04-14,669740.600076286\r
2020-04-17,669740.600076286\r
2020-04-22,669740.600076286\r
2020-04-24,669740.600076286\r
2020-04-27,669740.600076286\r
2020-05-04,655127.5606278841\r
2020-05-07,655127.5606278841\r
2020-05-17,665426.7453092329\r
2020-05-19,665426.7453092329\r
2020-05-27,668013.4684807662\r
2020-05-29,668013.4684807662\r
2020-06-01,655127.5606278841\r
2020-06-03,687128.4312815451\r
2020-07-06,616355.4247613698\r
2020-07-08,616355.4247613698\r
2020-07-11,625524.7408837733\r
2020-07-13,625524.7408837733\r
2020-07-18,625524.7408837733\r
2020-07-21,590047.2398355945\r
2020-07-23,613865.8722281873\r
2020-07-28,600669.1626638251\r
2020-07-31,600669.1626638251\r
2020-08-05,565879.1274422058\r
2020-08-07,566676.990008722\r
2020-08-10,535179.5796733398\r
2020-08-12,535179.5796733398\r
2020-08-15,535179.5796733398\r
2020-08-17,556346.4594261046\r
2020-08-20,502275.9606324687\r
2020-08-25,512879.82272178476\r
2020-08-27,487310.33712068165\r
2020-09-01,487310.33712068165\r
2020-09-04,487310.33712068165\r
2020-09-09,435923.389258822\r
2020-09-11,435923.389258822\r
2020-09-14,387264.7481913962\r
2020-09-16,387264.7481913962\r
2020-09-19,410224.6497836606\r
2020-11-18,477698.11151709716\r
2020-11-23,477698.11151709716\r
2020-11-25,477698.11151709716\r
2020-11-28,494766.25771253224\r
2020-12-10,488797.2167156627\r
2020-12-13,536734.1125579831\r
2021-02-21,638976.7436814543\r
2021-02-23,638976.7436814543\r
2021-02-26,638976.7436814543\r
2021-02-28,638976.7436814543\r
2021-03-08,689754.8680116114\r
2021-03-10,689754.8680116114\r
2021-03-23,656838.7890409081\r
2021-03-25,656838.7890409081\r
2021-03-28,687128.4312815451\r
2021-03-30,687128.4312815451\r
2021-04-02,646603.2478414194\r
2021-04-04,674934.7093925336\r
2021-04-07,674934.7093925336\r
2021-04-09,615525.0418681897\r
2021-04-12,615525.0418681897\r
2021-04-22,624688.507922873\r
2021-04-24,624688.507922873\r
2021-04-27,676670.3164403479\r
2021-06-01,661126.1402122132\r
2021-06-03,661126.1402122132\r
2021-06-11,661126.1402122132\r
2021-06-16,627198.801607728\r
2021-06-18,627198.801607728\r
2021-06-23,627198.801607728\r
2021-06-26,634758.3821453836\r
2021-07-21,592490.4584204567\r
2021-07-23,592490.4584204567\r
2021-08-10,585175.1987558237\r
2021-08-12,585175.1987558237\r
2021-08-15,585175.1987558237\r
2021-08-20,585175.1987558237\r
2021-09-24,551608.9955594727\r
2021-10-01,551608.9955594727\r
2021-10-14,546106.2944498233\r
2021-10-16,546106.2944498233\r
2021-10-19,566676.990008722\r
2021-10-24,553975.3208007884\r
2021-10-29,582746.3782318089\r
2021-12-18,596573.1497705298\r
2021-12-23,681889.8456386544\r
2022-02-26,567475.3867955123\r
2022-02-28,567475.3867955123\r
2022-03-03,567475.3867955123\r
2022-03-05,567475.3867955123\r
2022-03-08,589233.899896207\r
2022-03-23,643208.3815317423\r
2022-03-25,643208.3815317423\r
2022-04-17,641514.1335120265\r
2022-04-27,669740.600076286\r
2022-06-11,636444.1333236835\r
2022-06-13,636444.1333236835\r
2022-06-16,668876.7693530138\r
2022-06-18,668876.7693530138\r
2022-06-21,668876.7693530138\r
2022-06-23,651711.4688328026\r
2022-07-06,650006.6060001747\r
2022-07-08,650006.6060001747\r
2022-07-11,649154.97047048\r
2022-07-18,632233.7396660333\r
2022-07-21,632233.7396660333\r
2022-08-10,562693.0201249628\r
2022-08-12,562693.0201249628\r
2022-08-17,562693.0201249628\r
2022-09-04,558722.410417298\r
2022-09-11,539849.6059231233\r
2022-10-09,428205.73090100166\r
2022-10-16,428205.73090100166\r
2022-10-19,455863.7035455354\r
2022-10-26,452271.855745917\r
`;export{n as default};

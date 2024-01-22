const r=`date,value\r
2017-01-26,158432.45488881142\r
2017-01-29,158432.45488881142\r
2017-02-15,153127.6565326408\r
2017-02-18,153127.6565326408\r
2017-02-25,169730.35779466596\r
2017-04-06,204717.57001531264\r
2017-04-09,204717.57001531264\r
2017-05-06,374268.7265189724\r
2017-05-09,374268.7265189724\r
2017-05-16,448490.2607418061\r
2017-05-19,444281.4182793759\r
2017-05-26,495710.26415770425\r
2017-06-05,497167.2981512457\r
2017-07-05,544588.8181193077\r
2017-08-14,524395.5129862924\r
2017-08-17,524395.5129862924\r
2017-08-22,524395.5129862924\r
2017-08-24,524395.5129862924\r
2017-08-27,444281.4182793759\r
2017-08-29,444281.4182793759\r
2017-09-01,444281.4182793759\r
2017-09-03,444281.4182793759\r
2017-09-08,429662.10557358846\r
2017-09-13,429662.10557358846\r
2017-09-16,429662.10557358846\r
2017-10-08,246505.3007209129\r
2017-10-11,246505.3007209129\r
2017-10-13,246505.3007209129\r
2017-10-16,246505.3007209129\r
2017-10-18,246505.3007209129\r
2017-10-23,146941.7101037201\r
2017-10-26,111356.71505247557\r
2017-10-28,116969.31730538822\r
2017-10-31,116969.31730538822\r
2017-11-05,108375.4309498826\r
2017-11-07,116534.0983721307\r
2017-11-15,114799.00634748762\r
2017-11-17,117841.48593487889\r
2017-11-20,110929.05601579888\r
2017-11-22,111356.71505247557\r
2017-11-25,111356.71505247557\r
2017-11-27,105843.04464197332\r
2017-11-30,112643.20175442754\r
2017-12-05,111784.95945214569\r
2017-12-07,111784.95945214569\r
2018-02-10,205781.57755675886\r
2018-02-15,201537.34707246127\r
2018-02-25,301288.28178218735\r
2018-03-02,319158.6374705357\r
2018-03-07,319158.6374705357\r
2018-03-22,329174.1117223234\r
2018-03-30,329174.1117223234\r
2018-04-06,270174.5838432811\r
2018-04-09,270174.5838432811\r
2018-04-21,376907.3551741296\r
2018-04-24,376907.3551741296\r
2018-04-26,376907.3551741296\r
2018-05-11,555165.9385105983\r
2018-05-21,578843.1304995081\r
2018-05-24,555165.9385105983\r
2018-06-20,565052.2214731844\r
2018-06-23,565052.2214731844\r
2018-06-25,572699.2274323371\r
2018-07-08,530350.3830326234\r
2018-07-10,531096.4233789786\r
2018-07-15,520685.8871258395\r
2018-07-18,520685.8871258395\r
2018-07-23,519945.08728890034\r
2018-07-25,522168.61259568407\r
2018-07-30,571166.9004467843\r
2018-08-02,571166.9004467843\r
2018-08-04,481223.88593613927\r
2018-08-12,452713.20844507567\r
2018-08-19,394218.5112225995\r
2018-08-22,394218.5112225995\r
2018-08-27,394218.5112225995\r
2018-09-03,281402.9485944201\r
2018-09-08,330433.77603006747\r
2018-09-11,330433.77603006747\r
2018-09-16,306181.3869857972\r
2018-09-18,306181.3869857972\r
2018-09-23,231899.73142493315\r
2018-09-26,231899.73142493315\r
2018-09-28,231899.73142493315\r
2018-10-03,239162.83092715428\r
2018-10-06,229681.0086692747\r
2018-10-13,233011.9370899705\r
2018-10-16,223070.53935202304\r
2018-10-21,223070.53935202304\r
2018-10-23,243106.65026362496\r
2018-11-12,308638.4445401925\r
2018-11-15,308638.4445401925\r
2018-11-17,314811.5988589227\r
2018-11-22,314811.5988589227\r
2018-11-27,321028.1414064863\r
2018-12-07,344402.6299894746\r
2018-12-10,322901.5283105501\r
2019-01-16,349533.07630436355\r
2019-01-19,349533.07630436355\r
2019-01-24,349533.07630436355\r
2019-01-26,365085.6249140055\r
2019-02-03,434515.8557900395\r
2019-02-15,349533.07630436355\r
2019-02-18,349533.07630436355\r
2019-02-20,369667.02647395415\r
2019-02-23,369667.02647395415\r
2019-02-25,344402.6299894746\r
2019-02-28,344402.6299894746\r
2019-03-12,303731.32732647756\r
2019-03-22,279619.24513823\r
2019-03-25,279619.24513823\r
2019-03-27,325405.4064501993\r
2019-03-30,325405.4064501993\r
2019-04-01,325405.4064501993\r
2019-04-09,322276.6349705719\r
2019-05-01,418640.9116259633\r
2019-05-06,484831.1342046508\r
2019-05-09,484831.1342046508\r
2019-05-11,484831.1342046508\r
2019-05-14,484831.1342046508\r
2019-05-16,451303.9943167556\r
2019-05-29,402977.397116573\r
2019-05-31,402977.397116573\r
2019-07-05,514032.21851529094\r
2019-07-08,514032.21851529094\r
2019-07-10,545341.9232861379\r
2019-07-13,545341.9232861379\r
2019-07-15,514032.21851529094\r
2019-07-20,547603.4602738603\r
2019-07-23,531096.4233789786\r
2019-07-25,531096.4233789786\r
2019-07-28,484108.9176664669\r
2019-08-02,537078.1680302148\r
2019-08-04,469745.29575385415\r
2019-08-09,453418.4017291603\r
2019-08-14,449896.34461268916\r
2019-08-17,449896.34461268916\r
2019-08-22,474038.2055637171\r
2019-08-24,429662.10557358846\r
2019-08-29,427587.87349649303\r
2019-09-03,458365.68116513995\r
2019-09-06,458365.68116513995\r
2019-09-08,458365.68116513995\r
2019-09-11,413851.2671485244\r
2019-09-13,413851.2671485244\r
2019-09-16,314811.5988589227\r
2019-09-18,314811.5988589227\r
2019-09-21,314811.5988589227\r
2019-09-26,314811.5988589227\r
2019-10-08,306181.3869857972\r
2019-10-11,306181.3869857972\r
2019-10-13,322276.6349705719\r
2019-10-26,256225.60865517653\r
2019-12-27,466891.08599870314\r
2019-12-30,466891.08599870314\r
2020-01-11,472605.69140674407\r
2020-01-14,472605.69140674407\r
2020-01-16,499355.7013569477\r
2020-01-19,499355.7013569477\r
2020-01-29,469031.1629634646\r
2020-01-31,469031.1629634646\r
2020-02-05,447787.8064352231\r
2020-02-10,447787.8064352231\r
2020-02-15,457657.75748956646\r
2020-02-18,457657.75748956646\r
2020-02-20,423450.1397601807\r
2020-02-23,432433.3010607526\r
2020-03-21,559721.1201742917\r
2020-03-24,559721.1201742917\r
2020-03-26,514032.21851529094\r
2020-03-31,530350.3830326234\r
2020-04-03,530350.3830326234\r
2020-04-05,467604.0579159926\r
2020-04-08,471174.7210202635\r
2020-04-10,466178.5013793098\r
2020-04-15,498625.8535403587\r
2020-04-25,511821.104172144\r
2020-04-30,503742.7598898389\r
2020-05-05,528114.50259639\r
2020-05-08,528114.50259639\r
2020-05-18,528114.50259639\r
2020-05-20,578843.1304995081\r
2020-05-25,511821.104172144\r
2020-05-28,511821.104172144\r
2020-05-30,508878.2329443224\r
2020-06-12,522168.61259568407\r
2020-06-14,522168.61259568407\r
2020-06-24,492800.76550990005\r
2020-07-04,492800.76550990005\r
2020-07-07,492800.76550990005\r
2020-07-09,552136.5177214415\r
2020-07-19,548358.0459417478\r
2020-07-22,548358.0459417478\r
2020-07-24,481223.88593613927\r
2020-07-27,501547.5233738197\r
2020-07-29,501547.5233738197\r
2020-08-03,501547.5233738197\r
2020-08-06,395561.5699145222\r
2020-08-08,435210.83174657053\r
2020-08-18,363780.3915380938\r
2020-08-21,363780.3915380938\r
2020-08-23,363780.3915380938\r
2020-09-02,215445.57524570805\r
2020-09-05,215445.57524570805\r
2020-09-07,230789.42107702227\r
2020-09-10,230789.42107702227\r
2020-09-12,231344.33917267213\r
2020-09-17,231344.33917267213\r
2020-11-11,420012.98130198393\r
2020-11-14,420012.98130198393\r
2020-11-21,452713.20844507567\r
2020-11-26,424138.76725571795\r
2020-11-29,447787.8064352231\r
2020-12-26,474038.2055637171\r
2021-02-14,585010.3320532012\r
2021-02-17,585010.3320532012\r
2021-02-19,585782.8668762798\r
2021-02-24,578073.8670155054\r
2021-02-27,595081.5430703923\r
2021-03-01,502278.8897027983\r
2021-03-04,591976.1943420607\r
2021-03-09,501547.5233738197\r
2021-03-21,525881.9862499381\r
2021-03-24,525881.9862499381\r
2021-03-29,525881.9862499381\r
2021-03-31,586555.7644892643\r
2021-04-03,547603.4602738603\r
2021-04-05,565815.2748215856\r
2021-04-08,565815.2748215856\r
2021-04-15,565815.2748215856\r
2021-04-20,564289.5347010652\r
2021-04-23,564289.5347010652\r
2021-06-09,513294.8034828994\r
2021-06-14,549868.3264047009\r
2021-06-22,549113.0013675492\r
2021-06-29,544588.8181193077\r
2021-07-02,556682.8601595372\r
2021-07-09,556682.8601595372\r
2021-09-12,494254.75284699275\r
2021-09-17,510348.9135750067\r
2021-09-22,510348.9135750067\r
2021-10-07,505208.14572304086\r
2021-10-12,508143.45925883256\r
2021-10-15,508143.45925883256\r
2021-10-17,489172.4730545981\r
2021-10-20,514032.21851529094\r
2021-10-27,447085.74411714956\r
2021-12-16,393547.59174920135\r
2021-12-19,393547.59174920135\r
2021-12-21,393547.59174920135\r
2022-01-15,384197.52956178604\r
2022-01-23,384197.52956178604\r
2022-01-25,430354.3098792719\r
2022-02-09,402301.20667530096\r
2022-03-01,468317.41696091887\r
2022-03-09,468317.41696091887\r
2022-03-26,415901.5697697951\r
2022-04-05,434515.8557900395\r
2022-04-10,410442.11851867446\r
2022-07-14,107528.93521356244\r
2022-07-17,107528.93521356244\r
2022-07-24,110075.49663139945\r
2022-08-28,71242.0510348114\r
2022-09-05,71242.0510348114\r
2022-09-22,52855.4981291826\r
2022-10-02,52855.4981291826\r
2022-10-05,28778.30787840893\r
2022-10-07,42123.199268424425\r
2022-10-12,42123.199268424425\r
2022-10-15,42123.199268424425\r
2022-10-17,42123.199268424425\r
2022-11-06,42730.3067137905\r
2022-11-11,45189.468684057945\r
2022-11-16,42730.3067137905\r
2022-12-21,108375.4309498826\r
2022-12-24,107106.57395065877\r
2023-01-10,121353.14733319239\r
2023-01-18,121353.14733319239\r
2023-01-20,121353.14733319239\r
2023-02-04,174728.34787957725\r
2023-02-09,208450.1725284724\r
2023-02-12,208450.1725284724\r
2023-02-14,208450.1725284724\r
2023-02-17,185904.3013940509\r
2023-02-19,185904.3013940509\r
2023-02-24,253926.4521417361\r
2023-03-01,253926.4521417361\r
2023-03-16,319781.3736052772\r
2023-04-05,363128.39900376316\r
2023-04-08,363128.39900376316\r
2023-04-10,373610.10078065714\r
2023-05-30,396233.70873470063\r
2023-06-02,396233.70873470063\r
2023-06-04,396233.70873470063\r
2023-06-09,396233.70873470063\r
2023-06-24,553650.4906441267\r
2023-06-27,553650.4906441267\r
2023-07-14,573465.9387341593\r
2023-07-17,573465.9387341593\r
2023-07-22,543083.7194140282\r
2023-07-29,543836.0834460383\r
2023-08-08,543836.0834460383\r
2023-08-11,491348.3034407613\r
2023-08-16,491348.3034407613\r
2023-08-18,496438.5908996573\r
2023-08-21,428970.2979516899\r
2023-08-23,434515.8557900395\r
2023-08-28,434515.8557900395\r
2023-08-31,395561.5699145222\r
2023-09-07,363128.39900376316\r
2023-09-10,363128.39900376316\r
2023-09-15,363128.39900376316\r
2023-10-02,289780.107687583\r
2023-10-05,289780.107687583\r
2023-10-07,304955.481408353\r
2023-10-10,304955.481408353\r
2023-10-12,303119.9077308546\r
2023-10-15,311102.48389043065\r
2023-11-06,358576.1222573952\r
2023-11-16,358576.1222573952\r
2023-11-26,345042.458379131\r
2023-12-06,422074.08001186716\r
`;export{r as default};

const n=`date,value\r
2017-01-26,264574.6920411647\r
2017-02-15,386843.3781931593\r
2017-02-18,392254.6270387603\r
2017-02-25,406226.3858828009\r
2017-03-10,447451.67927606433\r
2017-03-30,450003.76792965364\r
2017-04-09,553535.1332423157\r
2017-04-19,538295.1115026008\r
2017-04-29,616269.2205559508\r
2017-05-06,568953.3315769995\r
2017-05-09,556325.2124213023\r
2017-05-16,636081.1519903841\r
2017-05-26,624308.9824672901\r
2017-06-18,618457.5446690766\r
2017-07-05,611902.3438350088\r
2017-07-18,608273.241206437\r
2017-08-02,561923.0220593433\r
2017-08-04,632392.4359090256\r
2017-08-12,558421.634318302\r
2017-08-14,600321.1363318982\r
2017-08-22,524595.8357066792\r
2017-09-03,495646.1596842173\r
2017-09-21,469338.1466964163\r
2017-09-26,449365.174683731\r
2017-10-08,456410.61784515483\r
2017-10-11,441731.7724196966\r
2017-10-13,444905.6854191309\r
2017-10-16,424757.822726547\r
2017-10-23,417303.62468562834\r
2017-10-26,406838.5045446612\r
2017-10-31,414214.0714297903\r
2017-11-07,414214.0714297903\r
2017-11-17,404392.35157060693\r
2017-11-20,383253.42157914746\r
2017-11-22,399518.6355400189\r
2017-11-27,390447.3723845184\r
2017-12-05,364344.9402613439\r
2017-12-12,422889.08144035254\r
2017-12-25,429131.6591073544\r
2018-02-15,653165.0385267077\r
2018-03-02,642743.5156256241\r
2018-03-07,651671.9436029567\r
2018-03-15,655407.3693182498\r
2018-03-22,656155.5295606568\r
2018-03-30,602485.5357361677\r
2018-04-06,611902.3438350088\r
2018-04-19,599600.3965011842\r
2018-04-21,642743.5156256241\r
2018-05-06,603930.2845661802\r
2018-05-11,653912.1237355625\r
2018-05-21,647201.2675317654\r
2018-06-20,634604.5850726472\r
2018-06-23,635342.6884954801\r
2018-06-25,616269.2205559508\r
2018-07-08,604653.20353978\r
2018-07-13,630919.4713941417\r
2018-07-23,602485.5357361677\r
2018-07-25,601763.7060193972\r
2018-07-30,624308.9824672901\r
2018-08-02,578857.322431142\r
2018-08-04,541052.7358722237\r
2018-08-12,521194.20009754435\r
2018-08-19,481759.36498473055\r
2018-08-22,439199.51231940853\r
2018-08-27,390447.3723845184\r
2018-09-03,348704.3654047774\r
2018-09-08,366100.535330788\r
2018-09-11,347557.2772776491\r
2018-09-16,298668.5730824697\r
2018-09-23,268162.8176177973\r
2018-09-26,257459.41089531267\r
2018-09-28,274361.0123465058\r
2018-10-03,237092.510415932\r
2018-10-06,246443.24179313955\r
2018-12-07,235143.3074308681\r
2019-01-16,274880.2098910422\r
2019-02-13,376115.70535699214\r
2019-02-15,469338.1466964163\r
2019-02-20,502317.0467093815\r
2019-02-23,506337.53199315467\r
2019-02-25,478477.4249801676\r
2019-02-28,518479.5818659275\r
2019-03-12,473898.5388367195\r
2019-03-20,498310.0223794864\r
2019-03-22,446177.92014937196\r
2019-03-27,482416.88261360896\r
2019-03-30,470639.2270643149\r
2019-04-16,509025.3253151731\r
2019-05-01,534856.4017689582\r
2019-05-06,583836.1942157963\r
2019-05-09,609723.794947951\r
2019-05-14,593847.567434021\r
2019-06-08,611175.7985283135\r
2019-06-13,608273.241206437\r
2019-06-23,643485.5761570348\r
2019-06-28,652418.3117938883\r
2019-07-05,576020.292171756\r
2019-07-15,599600.3965011842\r
2019-07-25,478477.4249801676\r
2019-08-04,473898.5388367195\r
2019-08-09,513068.207303941\r
2019-08-14,502986.19326787064\r
2019-08-17,492324.7630952617\r
2019-08-22,497643.49490986066\r
2019-08-24,519157.6785911535\r
2019-08-29,514418.8166408548\r
2019-09-11,417922.69135035085\r
2019-09-13,401952.39322810806\r
2019-09-16,360262.3360909138\r
2019-09-18,406226.3858828009\r
2019-10-08,297056.9542460922\r
2019-10-11,327181.85429656785\r
2019-10-13,326623.25729165814\r
2019-12-05,633866.8417891015\r
2019-12-10,616269.2205559508\r
2019-12-15,514418.8166408548\r
2019-12-25,582411.8333771311\r
2019-12-27,611175.7985283135\r
2019-12-30,570363.7939419032\r
2020-01-09,647945.4830853462\r
2020-01-11,643485.5761570348\r
2020-01-16,634604.5850726472\r
2020-01-19,614084.1529919519\r
2020-02-05,483733.04683936463\r
2020-02-15,596002.150283878\r
2020-02-20,618457.5446690766\r
2020-02-23,665914.1862980302\r
2020-03-11,651671.9436029567\r
2020-03-21,652418.3117938883\r
2020-03-24,648690.0575771022\r
2020-03-26,611902.3438350088\r
2020-04-03,661402.6775583953\r
2020-04-05,603207.7286083794\r
2020-04-10,630919.4713941417\r
2020-05-05,634604.5850726472\r
2020-05-18,634604.5850726472\r
2020-05-20,632392.4359090256\r
2020-05-28,630183.529817304\r
2020-05-30,632392.4359090256\r
2020-06-24,608273.241206437\r
2020-07-07,652418.3117938883\r
2020-07-09,608273.241206437\r
2020-07-19,554929.4368678062\r
2020-07-22,549361.0598867643\r
2020-07-24,497643.49490986066\r
2020-07-27,494316.47632638185\r
2020-08-06,421023.799699062\r
2020-09-02,383850.77195896424\r
2020-09-10,374340.08282711834\r
2020-09-12,353308.5689870888\r
2020-09-17,323836.2845609415\r
2020-09-30,312788.83906882454\r
2020-10-17,412980.94920999673\r
2020-11-11,505666.5170561354\r
2020-11-14,464148.95255826716\r
2020-11-21,496977.3419170562\r
2020-11-26,493652.1969276328\r
2020-11-29,485050.7158072003\r
2020-12-26,620649.1234782783\r
2021-01-03,646457.4109826046\r
2021-01-18,656904.0480162482\r
2021-02-14,659901.7026598078\r
2021-02-19,612629.2513938731\r
2021-02-24,661402.6775583953\r
2021-02-27,663656.8229083861\r
2021-03-01,646457.4109826046\r
2021-03-04,639038.6053484116\r
2021-03-21,641260.4728386746\r
2021-03-24,603207.7286083794\r
2021-03-29,650925.9340198204\r
2021-03-31,656904.0480162482\r
2021-04-05,653165.0385267077\r
2021-04-08,653165.0385267077\r
2021-04-15,658402.1593047436\r
2021-04-23,648690.0575771022\r
2021-05-03,609723.794947951\r
2021-05-20,550055.8177692837\r
2021-05-28,637559.1589278302\r
2021-05-30,620649.1234782783\r
2021-06-07,627243.3696245158\r
2021-06-14,635342.6884954801\r
2021-07-02,617727.7415737287\r
2021-07-22,590263.8769319525\r
2021-08-11,580278.0308249221\r
2021-08-26,440464.87859242916\r
2021-08-28,395879.6384766743\r
2021-09-05,345267.86221380095\r
2021-09-12,352731.6576662957\r
2021-09-22,314435.6895454891\r
2021-09-30,333352.83440937405\r
2021-10-07,353885.8759595121\r
2021-10-12,340139.9199909412\r
2021-10-15,326623.25729165814\r
2021-10-27,291179.0349639062\r
2021-11-09,319951.3772815287\r
2021-11-19,316637.13343087607\r
2021-12-14,614084.1529919519\r
2021-12-19,608273.241206437\r
2022-01-13,577438.0760212842\r
2022-01-15,576729.0012404125\r
2022-01-23,656155.5295606568\r
2022-01-25,598160.0072163315\r
2022-02-09,613356.521135852\r
2022-03-09,651671.9436029567\r
2022-03-21,659151.7520066656\r
2022-04-05,636819.975490201\r
2022-04-10,642743.5156256241\r
2022-05-08,636819.975490201\r
2022-05-10,653912.1237355625\r
2022-05-15,543124.8339699687\r
2022-05-28,607548.5081985315\r
2022-06-17,618457.5446690766\r
2022-07-02,627977.8686201643\r
2022-07-12,623576.2882240596\r
2022-07-14,627977.8686201643\r
2022-07-17,622843.9551353597\r
2022-08-01,558421.634318302\r
2022-08-03,521194.20009754435\r
2022-08-11,453843.31648973364\r
2022-08-28,397091.0845563069\r
2022-09-05,323280.09324596636\r
2022-09-10,323836.2845609415\r
2022-09-15,305694.48711294966\r
2022-09-20,312240.6956924669\r
2022-09-22,311145.6197952353\r
2022-10-02,273323.8535310771\r
2022-10-05,285350.4998249506\r
2022-10-07,305151.5992028623\r
2022-10-15,304609.11636438506\r
2022-10-17,280618.54249919177\r
2022-10-30,261006.87502566012\r
2022-11-06,284296.0844085874\r
2022-11-11,273842.22685143456\r
2022-11-16,258470.89264818653\r
2022-12-21,392857.82351212477\r
2023-01-10,447451.67927606433\r
2023-01-18,572482.235041533\r
2023-02-02,643485.5761570348\r
2023-02-04,627243.3696245158\r
2023-02-09,602485.5357361677\r
2023-02-12,628712.7283626626\r
2023-02-14,618457.5446690766\r
2023-02-17,644227.9960249377\r
2023-03-09,631655.7734472178\r
2023-03-16,657652.92461945\r
2023-04-05,648690.0575771022\r
2023-04-20,635342.6884954801\r
2023-05-05,603207.7286083794\r
2023-05-28,626509.2314435163\r
2023-06-24,661402.6775583953\r
2023-07-07,638298.7022362287\r
2023-07-14,638298.7022362287\r
2023-07-17,651671.9436029567\r
2023-07-22,629447.9487842697\r
2023-07-27,610449.6155429024\r
2023-07-29,614084.1529919519\r
2023-08-08,615540.5027708436\r
2023-08-11,588832.9507026237\r
2023-08-21,541743.0658575535\r
2023-08-23,535543.4036897523\r
2023-08-31,498310.0223794864\r
2023-09-05,481759.36498473055\r
2023-09-07,460918.0109114054\r
2023-09-20,446814.60920679977\r
2023-09-25,455768.2227204653\r
2023-09-30,487690.5653418681\r
2023-10-05,479789.07102354243\r
2023-10-07,462209.25082005316\r
2023-10-10,455126.2073956641\r
2023-10-12,465443.9806432453\r
`;export{n as default};

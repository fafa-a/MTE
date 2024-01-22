const r=`date,value\r
2017-03-17,3.3037905603457043\r
2017-04-06,35.94538870397775\r
2017-04-16,33.196970689478135\r
2017-05-06,10.001361921814436\r
2017-05-16,28.701003441027417\r
2017-05-26,29.28137117811514\r
2017-06-05,6.085089181833268\r
2017-06-15,38.804333250432265\r
2017-07-05,74.89124740244662\r
2017-07-25,77.09518676679932\r
2017-07-30,62.06104761151333\r
2017-08-04,83.07545630669557\r
2017-08-14,91.68881451575753\r
2017-08-24,95.5369868054489\r
2017-09-08,56.37268495254789\r
2017-09-13,38.134761905975225\r
2017-09-23,28.797323606932874\r
2017-09-28,25.342056782314\r
2017-10-03,26.530643729607622\r
2017-10-08,26.715947366151333\r
2017-10-13,28.604846377414926\r
2017-11-07,74.5790361050586\r
2017-11-12,73.80139182407251\r
2018-05-11,51.34716631095853\r
2018-05-21,75.98917862475393\r
2018-06-25,100.0\r
2018-07-15,23.480174510517294\r
2018-08-04,1.097078475428539\r
2018-08-14,54.89354125999508\r
2018-08-19,80.29972677181206\r
2018-09-03,97.66969761673373\r
2018-09-13,86.0664377265775\r
2018-09-18,75.8318368316506\r
2018-09-23,53.83028404791895\r
2018-09-28,64.50070596189622\r
2018-10-03,70.27728090230178\r
2018-10-23,100.0\r
2019-02-20,1.498305933866213\r
2019-05-01,31.864179463062282\r
2019-05-06,40.61865995350617\r
2019-05-31,21.941401867600582\r
2019-06-25,76.93669105024797\r
2019-06-30,75.67465986995052\r
2019-07-05,70.73200568853956\r
2019-07-10,89.7947092279006\r
2019-07-15,55.294972791247076\r
2019-07-25,68.92199967645209\r
2019-08-14,71.03597907409898\r
2019-08-24,77.73081827943614\r
2019-09-03,2.114385555979385\r
2019-09-08,64.64569596212228\r
2019-09-28,67.2836572174991\r
2019-10-03,75.5176477359416\r
2019-10-08,64.06672319781191\r
2020-02-20,37.141447954779196\r
2020-03-11,68.02588875825134\r
2020-03-21,32.88695352640765\r
2020-03-26,45.58072846084978\r
2020-04-05,27.182058635365518\r
2020-05-05,29.087262777672183\r
2020-05-20,39.028832740477895\r
2020-06-24,56.23739592138458\r
2020-07-04,67.87711319142205\r
2020-07-14,88.76998301497126\r
2020-07-19,85.56422756898354\r
2020-07-24,84.39818036936786\r
2020-07-29,82.09034313603632\r
2020-08-03,73.95659109954458\r
2020-08-23,56.77953787355988\r
2020-09-02,35.30133176087778\r
2020-11-01,72.25846150445334\r
2020-11-11,78.84952128016582\r
2021-02-19,27.65224505559311\r
2021-02-24,61.77715436054771\r
2021-03-01,75.04760026288578\r
2021-03-16,77.25384734431681\r
2021-03-31,38.245948084481\r
2021-04-05,64.79085050846783\r
2021-04-15,23.480174510517294\r
2021-05-25,80.78609728152583\r
2021-06-09,81.27395229322089\r
2021-06-14,78.36908780255244\r
2021-07-09,79.9763044406232\r
2021-07-19,27.182058635365518\r
2021-08-13,52.25510385821247\r
2021-08-18,62.06104761151333\r
2021-10-07,100.0\r
2021-10-12,97.66969761673373\r
2021-10-22,95.5369868054489\r
2021-10-27,76.14668525296882\r
2022-03-01,52.25510385821247\r
2022-04-05,40.38957748365662\r
2022-04-10,19.73202646093383\r
2022-04-15,35.40826588062057\r
2022-04-25,28.990453269338346\r
2022-05-10,43.656339997622176\r
2022-05-15,73.02786711423774\r
2022-05-30,2.5185448285698473\r
2022-06-09,97.66969761673373\r
2022-06-19,95.89078600101156\r
2022-06-29,99.28484982528218\r
2022-07-09,79.65354181595667\r
2022-07-14,77.41267278647928\r
2022-07-19,73.95659109954458\r
2022-07-24,83.07545630669557\r
2022-08-03,72.25846150445334\r
2022-10-02,80.29972677181206\r
2022-11-01,96.42272419127592\r
2023-02-19,6.085089181833268\r
2023-03-16,80.94855066929632\r
2023-05-10,99.82620943325504\r
2023-06-24,100.0\r
2023-07-09,91.68881451575753\r
2023-07-14,97.4910627278767\r
2023-07-19,80.62380883842224\r
2023-08-08,36.92251080775521\r
2023-08-13,30.658404026623643\r
2023-08-23,41.19423128556473\r
2023-09-07,69.67328690440723\r
2023-09-27,24.357830339544186\r
2023-10-02,21.27441849830913\r
2023-10-07,33.82141588785354\r
2023-10-12,40.161149846696496\r
`;export{r as default};

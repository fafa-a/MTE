const r=`date,value\r
2017-01-26,36.02756211990755\r
2017-02-15,57.47262699010821\r
2017-02-18,59.30915910035698\r
2017-02-25,62.46302499459526\r
2017-03-10,63.68712523114204\r
2017-03-30,76.57549840864229\r
2017-04-06,85.74404533089127\r
2017-04-09,85.83398887523687\r
2017-04-19,78.96714961742445\r
2017-05-09,80.43811245633708\r
2017-05-26,85.83398887523687\r
2017-06-18,84.93678535231469\r
2017-07-05,80.04734998557201\r
2017-08-02,51.90303893288232\r
2017-08-12,38.995495725600776\r
2017-08-14,45.62536463265674\r
2017-08-17,34.08980281561604\r
2017-08-22,28.28635893594432\r
2017-08-24,32.61255570300264\r
2017-09-23,19.758896393042892\r
2017-10-08,19.779674674005417\r
2017-10-11,18.253140319175955\r
2017-10-13,17.582327455868054\r
2017-10-16,16.58190108241751\r
2017-10-23,18.273070197059255\r
2017-10-26,16.093236831847662\r
2017-10-31,17.87664564307582\r
2017-11-07,18.533200015708857\r
2017-11-15,18.95749793442497\r
2017-11-17,18.77503729397208\r
2017-11-20,16.24277615751225\r
2017-11-22,18.034666610245527\r
2017-11-30,17.87664564307582\r
2017-12-05,18.91687089828798\r
2017-12-12,22.17968854937636\r
2017-12-25,25.218069355352917\r
2018-01-29,74.55628589669763\r
2018-02-15,95.12678881440364\r
2018-02-25,94.13237935286254\r
2018-03-02,93.9435912108968\r
2018-03-15,95.36436332245616\r
2018-03-22,98.33620074769699\r
2018-03-30,90.57947637432446\r
2018-04-19,95.697491394734\r
2018-04-21,99.79141840437548\r
2018-04-24,87.50689536676455\r
2018-05-06,84.44543697950942\r
2018-05-11,99.93755876876617\r
2018-05-21,98.72315929211115\r
2018-05-24,68.14968605926457\r
2018-06-20,98.57795615074\r
2018-06-23,86.96246974510092\r
2018-06-25,95.17427877739028\r
2018-07-13,94.03796035950958\r
2018-07-18,90.25585042599015\r
2018-07-23,93.51954680084471\r
2018-08-02,96.55691302825929\r
2018-08-04,95.6498642550599\r
2018-08-12,89.79458455161422\r
2018-08-19,85.02628254514373\r
2018-08-22,83.20149673686424\r
2018-08-27,72.85400541337597\r
2018-09-03,64.49723545156363\r
2018-09-08,66.95991087761863\r
2018-09-11,64.61340527352363\r
2018-09-16,53.99630069900353\r
2018-09-18,56.27715213470532\r
2018-09-23,46.925421211496634\r
2018-09-26,43.869131641958234\r
2018-10-03,42.18007506358575\r
2018-10-06,38.8767765910646\r
2018-10-21,28.43709445250056\r
2018-10-23,28.99339835587042\r
2018-11-15,21.587883774902654\r
2018-11-17,20.00899416121976\r
2018-11-27,18.412899738559517\r
2018-12-07,18.633765111790364\r
2018-12-20,22.13556236554257\r
2019-01-11,27.144710435534698\r
2019-01-16,23.570554034562807\r
2019-02-03,56.061212961738896\r
2019-02-13,53.78501481457564\r
2019-02-15,63.418285310294344\r
2019-02-20,66.05521229031713\r
2019-02-23,61.89352868367901\r
2019-02-25,64.69091292007947\r
2019-02-28,68.50876870032873\r
2019-03-12,56.061212961738896\r
2019-03-20,63.15004357947384\r
2019-03-22,66.80210690357377\r
2019-03-27,67.43449818385484\r
2019-03-30,61.969302994192354\r
2019-05-01,65.89853416569247\r
2019-05-06,74.97461469954703\r
2019-05-14,76.53314189852337\r
2019-06-08,77.12725506238783\r
2019-06-13,82.09903905803769\r
2019-06-23,82.14298884945516\r
2019-06-28,93.4254517516545\r
2019-07-05,85.38476718109388\r
2019-07-10,85.29507163697355\r
2019-07-15,88.00752261006673\r
2019-07-25,64.22660017023969\r
2019-08-09,53.2937087656555\r
2019-08-14,51.696106308692144\r
2019-08-17,44.69483147066392\r
2019-08-22,42.73921818070116\r
2019-08-24,46.01336428079447\r
2019-09-11,33.15567070137341\r
2019-09-13,33.593561551023946\r
2019-09-16,31.064181231295287\r
2019-10-08,20.408368196483938\r
2019-10-11,18.153662528359963\r
2019-10-13,19.181766401492446\r
2019-10-26,21.11189375313952\r
2019-12-05,49.48218851910052\r
2019-12-10,47.54968236004813\r
2019-12-25,85.56430705590066\r
2019-12-30,86.73615321528868\r
2020-01-06,95.41191563362318\r
2020-01-09,93.70788639298502\r
2020-01-11,92.2067494860229\r
2020-01-19,90.11734011594615\r
2020-01-29,88.00752261006673\r
2020-02-05,90.44070492470068\r
2020-02-10,91.27501277919787\r
2020-02-15,88.64685780285275\r
2020-02-20,92.16004441256277\r
2020-02-23,86.87190590406402\r
2020-03-11,93.51954680084471\r
2020-03-21,97.56468162165166\r
2020-03-24,95.17427877739028\r
2020-03-26,92.48724135511944\r
2020-04-10,99.40226073428371\r
2020-05-05,73.93110095540571\r
2020-05-18,96.7005429848148\r
2020-05-20,99.25653282160927\r
2020-05-30,100.0\r
2020-06-14,81.79173695185791\r
2020-06-24,94.22684819356259\r
2020-07-07,93.9435912108968\r
2020-07-09,98.529580087726\r
2020-07-19,86.05906477781964\r
2020-07-22,72.4008138572633\r
2020-07-27,74.13918822740318\r
2020-08-06,51.86851996177303\r
2020-08-08,61.969302994192354\r
2020-08-21,39.74180615205153\r
2020-08-31,30.461132803068757\r
2020-09-02,30.958856457033285\r
2020-09-05,29.4271544438906\r
2020-09-10,26.147986754144682\r
2020-09-12,22.29020627633677\r
2020-09-17,18.513121348649133\r
2020-09-30,16.562964084226703\r
2020-10-30,24.1670759155254\r
2020-11-09,27.786949844393384\r
2020-11-14,24.748055470504788\r
2020-11-21,31.753381019972093\r
2020-11-26,28.03606941355267\r
2020-11-29,25.005987440876986\r
2020-12-26,73.39151372990709\r
2021-01-03,89.1509007004116\r
2021-01-18,89.79458455161422\r
2021-02-17,100.0\r
2021-02-19,96.7005429848148\r
2021-02-24,100.0\r
2021-03-01,94.88952602293219\r
2021-03-04,97.46846648994324\r
2021-03-21,99.25653282160927\r
2021-03-24,93.56661301166983\r
2021-03-29,96.36558111510219\r
2021-03-31,100.0\r
2021-04-05,99.84011935893939\r
2021-04-08,98.14302125156232\r
2021-04-15,100.0\r
2021-04-23,95.74513100695884\r
2021-05-20,92.95572386990429\r
2021-06-14,97.90182788067067\r
2021-06-29,94.74731795513462\r
2021-07-17,93.99076955477364\r
2021-07-22,91.32148139519344\r
2021-08-11,82.31891175526842\r
2021-08-26,59.680113557962564\r
2021-08-28,51.009470827947844\r
2021-08-31,49.11256607091058\r
2021-09-05,48.477560193746726\r
2021-09-12,44.18575001039885\r
2021-09-27,40.5561854069674\r
2021-10-07,37.20570345231073\r
2021-10-12,38.197835759725635\r
2021-10-27,30.045287303059997\r
2021-11-19,32.26206061158926\r
2021-12-14,82.23092555364319\r
2021-12-19,68.54872805249286\r
2022-01-13,62.5391651787226\r
2022-01-15,62.88239990655586\r
2022-01-23,73.2259051702518\r
2022-01-25,74.38929911308821\r
2022-02-09,75.2262030747605\r
2022-03-09,81.13527348586719\r
2022-03-19,83.46723789669186\r
2022-03-24,92.81504836684249\r
2022-03-26,85.87897925030825\r
2022-04-05,90.85735507812751\r
2022-05-08,97.27618603766261\r
2022-05-10,100.0\r
2022-05-15,86.41983123390872\r
2022-07-12,85.56430705590066\r
2022-07-14,81.00431470432359\r
2022-07-17,74.30587958210847\r
2022-08-01,57.32701679626516\r
2022-08-06,48.91156822915856\r
2022-08-11,43.80595169135863\r
2022-08-28,32.802109204053686\r
2022-09-05,20.79055447607266\r
2022-09-10,18.89657457367564\r
2022-09-20,17.758609926938764\r
2022-09-22,16.619809230470178\r
2022-10-02,13.305294505500473\r
2022-10-05,12.688757857494146\r
2022-10-15,10.779618861790107\r
2022-10-17,9.663905027974554\r
2022-10-22,7.929109570768123\r
2022-10-30,6.023862504052221\r
2022-11-06,4.885661410921975\r
2022-11-11,4.0143988177940555\r
2022-11-16,3.620885267570626\r
2022-12-04,3.51954952148389\r
2022-12-14,3.793144332560552\r
2022-12-21,3.793144332560552\r
2022-12-24,3.9606958381183346\r
2023-01-10,5.716732950123831\r
2023-01-18,14.267748019788428\r
2023-02-02,3.2086174168222388\r
2023-02-09,2.4971357448778284\r
2023-02-12,2.5818446382947604\r
2023-02-14,2.996865911163796\r
2023-02-17,2.5463686020623384\r
2023-03-09,3.280892790817965\r
2023-04-05,3.6550002459684197\r
2023-04-08,2.4622788729923353\r
2023-04-10,2.6752916499356787\r
2023-04-20,3.012290556274837\r
`;export{r as default};

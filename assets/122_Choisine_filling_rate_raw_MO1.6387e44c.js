const n=`date,value\r
2017-02-19,54.7302908985619\r
2017-03-11,44.525881152053415\r
2017-03-14,37.78125096542044\r
2017-04-03,82.23632961143207\r
2017-04-10,82.23632961143207\r
2017-04-20,73.78166012726717\r
2017-04-23,51.6522609636701\r
2017-04-30,17.48894266926782\r
2017-05-23,58.50612704003764\r
2017-06-09,72.40423404584688\r
2017-06-12,66.9869072122318\r
2017-06-19,61.072359231897074\r
2017-06-22,93.251577677738\r
2017-07-04,79.38221733485817\r
2017-07-07,83.67668031926834\r
2017-07-09,78.67426230173484\r
2017-07-27,65.65593563793651\r
2017-08-03,63.02241077132595\r
2017-08-06,51.04422915994222\r
2017-08-13,34.557894997854085\r
2017-08-18,40.543971461992314\r
2017-08-21,24.57258816579441\r
2017-08-23,31.437327655818088\r
2017-09-15,20.04556280785407\r
2017-09-20,26.47281767641977\r
2017-09-22,26.955636035380902\r
2017-09-27,17.906463403145345\r
2017-10-05,7.9421780249612715\r
2017-10-07,10.946870912992217\r
2017-10-10,10.250085815895543\r
2017-10-12,7.018132578153849\r
2017-10-15,6.424828881368078\r
2017-10-17,7.018132578153849\r
2017-11-16,7.321658946449667\r
2017-11-21,4.499384826588886\r
2018-01-15,22.268456401752935\r
2018-02-24,4.2444844874290935\r
2018-02-27,42.23437821959223\r
2018-03-14,45.105406409709396\r
2018-03-16,100.0\r
2018-03-19,54.7302908985619\r
2018-03-21,56.60709885744052\r
2018-03-31,41.668203902645274\r
2018-04-18,76.56386668533014\r
2018-04-20,94.0031744650689\r
2018-04-30,100.0\r
2018-05-20,82.23632961143207\r
2018-06-14,45.105406409709396\r
2018-06-19,59.784384091681005\r
2018-06-22,66.32024319759608\r
2018-06-24,60.427160726890406\r
2018-06-27,77.26508100224173\r
2018-06-29,88.78693949707535\r
2018-07-02,81.5194693233019\r
2018-07-04,100.0\r
2018-07-07,88.78693949707535\r
2018-07-09,71.03599352824018\r
2018-07-17,80.80482667110206\r
2018-07-19,85.12583370536527\r
2018-07-24,93.251577677738\r
2018-07-27,80.09240740791796\r
2018-07-29,75.16822097646909\r
2018-08-01,73.09180208695342\r
2018-08-03,68.3272769712316\r
2018-08-18,66.9869072122318\r
2018-08-21,49.83580998027026\r
2018-08-26,47.4498035925705\r
2018-08-28,49.235440610533985\r
2018-09-02,40.543971461992314\r
2018-09-05,40.543971461992314\r
2018-09-10,39.43063362250411\r
2018-09-17,32.46592182909623\r
2018-09-20,31.437327655818088\r
2018-09-25,31.437327655818088\r
2018-09-27,24.57258816579441\r
2018-10-05,18.3274481611851\r
2018-10-17,29.916487187933\r
2018-10-20,19.179715831705643\r
2018-10-22,17.48894266926782\r
2018-11-04,27.93047027817978\r
2018-12-11,32.98458723880728\r
2018-12-14,34.557894997854085\r
2019-01-03,6.424828881368078\r
2019-02-04,54.7302908985619\r
2019-02-12,29.415477879429453\r
2019-02-14,37.23700267955962\r
2019-02-17,34.030587055393845\r
2019-02-19,51.04422915994222\r
2019-02-22,40.543971461992314\r
2019-02-27,58.50612704003764\r
2019-03-16,38.8780780957275\r
2019-03-21,52.875924733465176\r
2019-03-24,64.9939915239511\r
2019-03-26,49.235440610533985\r
2019-03-29,76.56386668533014\r
2019-03-31,74.47380184565493\r
2019-04-05,42.23437821959223\r
2019-04-13,71.7189623814008\r
2019-04-15,73.78166012726717\r
2019-04-20,79.38221733485817\r
2019-04-23,100.0\r
2019-05-13,77.26508100224173\r
2019-05-15,73.09180208695342\r
2019-05-23,97.79295785307227\r
2019-06-02,100.0\r
2019-06-07,71.7189623814008\r
2019-06-17,76.56386668533014\r
2019-06-19,86.58374540747785\r
2019-06-24,82.95540182976328\r
2019-06-27,75.16822097646909\r
2019-06-29,35.088057639481505\r
2019-07-02,74.47380184565493\r
2019-07-04,68.3272769712316\r
2019-07-07,56.60709885744052\r
2019-07-14,75.16822097646909\r
2019-07-19,77.96854820775765\r
2019-07-22,59.784384091681005\r
2019-07-24,68.3272769712316\r
2019-07-29,38.32828001659543\r
2019-08-03,57.237650078810866\r
2019-08-08,46.85977952052114\r
2019-08-11,46.85977952052114\r
2019-08-16,50.43874251469575\r
2019-08-23,19.610953034775324\r
2019-08-26,27.441525603445978\r
2019-08-28,46.85977952052114\r
2019-08-31,29.916487187933\r
2019-09-02,44.525881152053415\r
2019-09-07,28.917461865668763\r
2019-09-12,22.268456401752935\r
2019-09-15,17.48894266926782\r
2019-09-17,19.610953034775324\r
2019-09-20,21.36941290054353\r
2019-09-27,18.3274481611851\r
2019-09-30,18.751873337103063\r
2019-10-07,17.906463403145345\r
2019-10-25,38.8780780957275\r
2019-12-06,44.525881152053415\r
2019-12-21,72.40423404584688\r
2020-02-12,21.81730044735479\r
2020-02-22,34.557894997854085\r
2020-02-24,31.950164057028946\r
2020-03-08,27.93047027817978\r
2020-03-20,55.353411105586346\r
2020-03-23,93.251577677738\r
2020-03-28,94.0031744650689\r
2020-04-02,93.251577677738\r
2020-04-04,90.26655750079323\r
2020-04-07,82.95540182976328\r
2020-04-09,75.86491130873087\r
2020-04-14,97.03077770130247\r
2020-04-24,78.67426230173484\r
2020-05-04,56.60709885744052\r
2020-05-09,77.96854820775765\r
2020-05-17,68.3272769712316\r
2020-05-19,56.60709885744052\r
2020-05-22,73.78166012726717\r
2020-05-27,83.67668031926834\r
2020-05-29,74.47380184565493\r
2020-06-21,84.40015946698067\r
2020-06-23,79.38221733485817\r
2020-07-01,82.95540182976328\r
2020-07-08,74.47380184565493\r
2020-07-11,71.7189623814008\r
2020-07-13,61.072359231897074\r
2020-07-18,43.9490054543988\r
2020-07-21,61.072359231897074\r
2020-07-23,38.8780780957275\r
2020-07-28,28.422454224175947\r
2020-07-31,46.27236547588491\r
2020-08-05,28.422454224175947\r
2020-08-07,19.179715831705643\r
2020-08-20,13.509854143865754\r
2020-08-25,11.301288405813912\r
2020-10-31,9.90779645481068\r
2020-11-18,4.499384826588886\r
2020-11-23,11.301288405813912\r
2020-12-13,4.2444844874290935\r
2020-12-28,1.1233858809267356\r
2021-01-24,25.04295504760729\r
2021-02-21,64.9939915239511\r
2021-02-28,96.27070438754386\r
2021-03-20,98.55723999791542\r
2021-03-23,86.58374540747785\r
2021-03-25,94.75689783380926\r
2021-03-28,77.26508100224173\r
2021-03-30,100.0\r
2021-04-02,97.79295785307227\r
2021-04-04,59.14403695923928\r
2021-04-07,70.35533397903218\r
2021-04-14,80.80482667110206\r
2021-04-17,77.26508100224173\r
2021-04-19,77.96854820775765\r
2021-04-22,100.0\r
2021-04-24,91.00959728673169\r
2021-05-12,66.9869072122318\r
2021-05-27,55.979016493462\r
2021-06-01,54.7302908985619\r
2021-06-11,70.35533397903218\r
2021-06-13,57.87066212338785\r
2021-06-16,83.67668031926834\r
2021-06-18,51.04422915994222\r
2021-06-26,75.86491130873087\r
2021-07-11,48.637643562841866\r
2021-07-21,44.525881152053415\r
2021-07-23,45.105406409709396\r
2021-08-10,37.78125096542044\r
2021-08-15,48.637643562841866\r
2021-08-20,61.072359231897074\r
2021-08-25,64.3344179131231\r
2021-08-27,64.3344179131231\r
2021-09-01,67.65592075687121\r
2021-09-04,85.12583370536527\r
2021-09-06,90.26655750079323\r
2021-09-24,43.37478950311349\r
2021-10-01,37.78125096542044\r
2021-10-11,57.237650078810866\r
2021-10-14,49.235440610533985\r
2021-10-16,42.80324361092579\r
2021-10-21,46.27236547588491\r
2021-10-24,42.23437821959223\r
2021-11-30,41.104731368224215\r
2021-12-03,3.9948755063012107\r
2021-12-23,37.78125096542044\r
2022-01-14,15.45416357060971\r
2022-01-24,27.441525603445978\r
2022-02-01,69.67699028537513\r
2022-02-08,12.758265052795787\r
2022-02-26,39.43063362250411\r
2022-02-28,42.23437821959223\r
2022-03-05,59.14403695923928\r
2022-03-23,71.7189623814008\r
2022-03-25,69.67699028537513\r
2022-04-04,60.427160726890406\r
2022-04-14,43.37478950311349\r
2022-04-17,65.65593563793651\r
2022-04-27,58.50612704003764\r
2022-05-09,73.78166012726717\r
2022-05-19,71.03599352824018\r
2022-05-27,75.86491130873087\r
2022-05-29,80.80482667110206\r
2022-06-06,98.55723999791542\r
2022-06-11,74.47380184565493\r
2022-06-16,54.10966416472425\r
2022-06-18,66.32024319759608\r
2022-06-21,73.09180208695342\r
2022-06-28,71.03599352824018\r
2022-07-01,80.80482667110206\r
2022-07-03,75.86491130873087\r
2022-07-06,77.96854820775765\r
2022-07-08,69.67699028537513\r
2022-07-11,56.60709885744052\r
2022-07-13,54.7302908985619\r
2022-07-16,46.85977952052114\r
2022-07-18,46.85977952052114\r
2022-07-21,38.8780780957275\r
2022-07-31,23.18049540225022\r
2022-08-02,18.751873337103063\r
2022-08-07,17.906463403145345\r
2022-08-10,19.179715831705643\r
2022-08-12,17.906463403145345\r
2022-08-22,12.021986393604529\r
2022-08-25,12.021986393604529\r
2022-09-01,10.946870912992217\r
2022-09-04,13.509854143865754\r
2022-09-09,12.388195383753347\r
2022-09-11,16.257408689594225\r
2022-09-19,13.13216210438782\r
2022-09-21,13.13216210438782\r
2022-10-04,10.946870912992217\r
2022-10-06,12.021986393604529\r
2022-10-11,13.13216210438782\r
2022-10-26,10.250085815895543\r
2022-11-20,31.950164057028946\r
2022-12-05,23.18049540225022\r
2023-01-17,25.04295504760729\r
2023-02-03,29.916487187933\r
2023-02-08,26.47281767641977\r
2023-02-11,28.917461865668763\r
2023-02-13,37.23700267955962\r
2023-02-16,24.57258816579441\r
2023-02-21,40.543971461992314\r
2023-02-26,66.9869072122318\r
2023-03-05,55.353411105586346\r
2023-03-28,67.65592075687121\r
2023-04-04,44.525881152053415\r
2023-04-19,71.7189623814008\r
2023-05-02,85.85369751170145\r
`;export{n as default};

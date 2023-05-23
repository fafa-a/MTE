const n=`date,value\r
2017-01-04,49.326587590509234\r
2017-01-07,51.14416649970226\r
2017-01-14,48.107454982793286\r
2017-02-03,60.966980544963725\r
2017-02-06,60.966980544963725\r
2017-02-16,67.8378032497577\r
2017-02-23,72.0917320670635\r
2017-02-26,67.52091528982189\r
2017-03-05,69.43533345115482\r
2017-03-08,65.32704850823633\r
2017-03-15,67.15231350899846\r
2017-03-18,68.20860770912903\r
2017-03-25,71.87268574839013\r
2017-03-28,73.19284149189009\r
2017-04-04,74.47125321299741\r
2017-04-07,73.5805473528334\r
2017-04-14,75.36825994818193\r
2017-04-17,75.98861393155396\r
2017-05-07,83.24906841215044\r
2017-05-14,83.24906841215044\r
2017-05-17,84.6877578223111\r
2017-05-24,84.50712963149827\r
2017-05-27,86.08010645183847\r
2017-06-03,85.83700068661702\r
2017-06-06,86.75073047375669\r
2017-06-13,84.14655254219045\r
2017-06-16,86.01929215344032\r
2017-06-23,86.01929215344032\r
2017-06-26,85.89773927394492\r
2017-07-01,83.07024952501233\r
2017-07-03,79.59925447597857\r
2017-07-06,81.3532946150351\r
2017-07-08,79.94826692075863\r
2017-07-11,79.07741638695644\r
2017-07-13,78.3272063549534\r
2017-07-18,77.92498570093235\r
2017-07-21,77.69569118176143\r
2017-07-23,79.07741638695644\r
2017-07-26,80.06480372579023\r
2017-07-28,73.85821688055725\r
2017-07-31,73.46965149244544\r
2017-08-02,73.19284149189009\r
2017-08-05,72.4210358196523\r
2017-08-07,71.000412096364\r
2017-08-12,69.97270189308966\r
2017-08-15,67.36279799184986\r
2017-08-17,64.04133824691654\r
2017-08-20,61.4149942184268\r
2017-08-22,57.88465190325252\r
2017-08-25,56.023445848477195\r
2017-08-27,51.00986202958053\r
2017-08-30,45.137671645529394\r
2017-09-01,36.37074946548038\r
2017-09-04,34.35094382469702\r
2017-09-09,29.6925094103752\r
2017-09-11,27.185761105413302\r
2017-09-14,14.669582458088975\r
2017-09-16,14.669582458088975\r
2017-09-19,14.669582458088975\r
2017-09-21,13.027235692711974\r
2017-09-24,13.027235692711974\r
2017-10-06,1.6891974594475723\r
2017-10-09,1.7750873791802786\r
2017-10-11,1.7257011643716549\r
2017-10-14,1.7257011643716549\r
2017-10-16,1.7813182572619775\r
2017-10-19,1.7441251108860072\r
2017-10-21,1.7813182572619775\r
2017-10-24,1.8189731555113238\r
2017-10-26,1.8634897266870756\r
2017-10-31,1.8507061836458867\r
2017-11-03,1.8189731555113238\r
2017-11-05,1.9544259122568977\r
2017-11-08,3.0502895603040256\r
2017-11-18,6.438289685748193\r
2017-11-20,7.609788568057805\r
2017-11-23,7.595162847526642\r
2017-11-28,7.595162847526642\r
2017-11-30,9.370266622373276\r
2017-12-03,11.460921155915042\r
2017-12-05,12.847366666564335\r
2017-12-13,21.707513198794256\r
2017-12-18,21.707513198794256\r
2017-12-20,21.707513198794256\r
2017-12-23,33.786271620941505\r
2017-12-25,33.786271620941505\r
2017-12-28,42.238342128488924\r
2017-12-30,42.238342128488924\r
2018-01-02,47.76241871307935\r
2018-01-04,47.76241871307935\r
2018-01-14,65.79358208883168\r
2018-01-17,70.72910865686308\r
2018-01-19,70.72910865686308\r
2018-01-22,70.72910865686308\r
2018-01-24,70.72910865686308\r
2018-01-27,85.11010474870938\r
2018-02-03,79.36707756766751\r
2018-02-08,93.11545931589961\r
2018-02-11,87.91628749763535\r
2018-02-13,90.90164166256349\r
2018-02-16,90.90164166256349\r
2018-02-18,90.90164166256349\r
2018-02-26,91.27893245095879\r
2018-03-03,91.27893245095879\r
2018-03-13,92.16284919351038\r
2018-03-18,92.60668466796396\r
2018-03-23,92.92447696791646\r
2018-04-02,96.46248764170564\r
2018-04-07,96.7228299332216\r
2018-04-12,84.08654438054197\r
2018-04-17,92.79728332122535\r
2018-04-19,96.98358442109306\r
2018-04-22,93.7537310780187\r
2018-04-24,93.7537310780187\r
2018-04-27,96.3974664517849\r
2018-04-29,96.13763913299827\r
2018-05-07,100.0\r
2018-05-09,97.11411629922824\r
2018-05-19,96.78797990420883\r
2018-05-22,96.78797990420883\r
2018-05-29,96.33247100898576\r
2018-06-03,93.88169280178904\r
2018-06-08,93.88169280178904\r
2018-06-13,93.88169280178904\r
2018-06-16,100.0\r
2018-06-18,98.68854925069198\r
2018-06-21,98.8204235974004\r
2018-06-26,100.0\r
2018-06-28,97.37548944496174\r
2018-07-01,97.4408972051807\r
2018-07-03,100.0\r
2018-07-06,99.746441576576\r
2018-07-08,99.21666734883956\r
2018-07-11,99.21666734883956\r
2018-07-13,99.81277987840099\r
2018-07-18,97.11411629922824\r
2018-07-21,94.6516167940163\r
2018-07-23,96.65770572450715\r
2018-07-26,97.6372752713081\r
2018-07-28,94.78029662854603\r
2018-07-31,96.52753458177921\r
2018-08-02,97.37548944496174\r
2018-08-05,97.17942090744006\r
2018-08-07,100.0\r
2018-08-10,96.46248764170564\r
2018-08-12,96.85315564049772\r
2018-08-15,96.46248764170564\r
2018-08-17,93.49811507509875\r
2018-08-20,93.37046074710764\r
2018-08-22,93.49811507509875\r
2018-08-25,92.98811216379349\r
2018-08-27,92.98811216379349\r
2018-08-30,90.46262857835521\r
2018-09-01,91.9097910012058\r
2018-09-06,88.16283268699276\r
2018-09-09,89.90001637684489\r
2018-09-11,87.67014769142185\r
2018-09-14,86.93415858716736\r
2018-09-16,86.93415858716736\r
2018-09-19,86.93415858716736\r
2018-09-21,86.62857145738947\r
2018-09-24,82.8916564197793\r
2018-09-26,85.47309890017736\r
2018-09-29,86.93415858716736\r
2018-10-01,86.93415858716736\r
2018-10-06,84.62752325805707\r
2018-10-09,82.47581673842005\r
2018-10-14,83.90667072423749\r
2018-10-19,91.21598691324161\r
2018-10-21,84.50712963149827\r
2018-10-24,85.23100199246942\r
2018-10-26,84.56731386216185\r
2018-11-05,76.66877242769156\r
2018-11-08,70.13438703365112\r
2018-11-10,70.13438703365112\r
2018-11-15,70.13438703365112\r
2018-11-18,70.13438703365112\r
2018-11-28,86.20181078150843\r
2018-12-03,90.21232421382803\r
2018-12-05,86.44552245951735\r
2018-12-08,88.22453234868361\r
2018-12-10,89.4638536030375\r
2018-12-15,88.10115837413966\r
2018-12-18,87.79316693403135\r
2018-12-23,86.20181078150843\r
2018-12-25,85.0496939184266\r
2018-12-28,85.41253686292444\r
2019-01-02,84.80830246840169\r
2019-01-04,84.80830246840169\r
2019-01-07,87.11781428179302\r
2019-01-09,84.80830246840169\r
2019-01-12,84.80830246840169\r
2019-01-14,82.7132890116281\r
2019-01-17,84.6877578223111\r
2019-01-22,85.11010474870938\r
2019-01-24,84.62752325805707\r
2019-01-29,86.14094599348984\r
2019-02-03,89.77527131101209\r
2019-02-06,82.77271974212941\r
2019-02-08,84.32672789961718\r
2019-02-11,84.32672789961718\r
2019-02-13,80.41501246613066\r
2019-02-16,77.52398065758825\r
2019-02-18,81.64781944585387\r
2019-02-21,78.73064371280103\r
2019-02-23,78.8461351583653\r
2019-02-26,78.8461351583653\r
2019-02-28,79.07741638695644\r
2019-03-03,79.07741638695644\r
2019-03-08,78.49995903191012\r
2019-03-10,85.89773927394492\r
2019-03-18,72.91664495405233\r
2019-03-23,80.70753904142295\r
2019-03-25,85.0496939184266\r
2019-03-28,83.547601858527\r
2019-03-30,83.90667072423749\r
2019-04-02,81.64781944585387\r
2019-04-07,81.64781944585387\r
2019-04-09,80.23979588622056\r
2019-04-12,80.94200957733949\r
2019-04-14,74.80689164589975\r
2019-04-17,78.61525167913392\r
2019-04-19,79.65736094669718\r
2019-04-27,82.47581673842005\r
2019-04-29,86.14094599348984\r
2019-05-02,86.14094599348984\r
2019-05-07,86.50651352606418\r
2019-05-09,88.28625736230849\r
2019-05-14,89.02893610303376\r
2019-05-19,86.93415858716736\r
2019-05-24,92.35291105973982\r
2019-05-29,91.4049000385486\r
2019-06-01,96.91835714511654\r
2019-06-03,97.89947397175348\r
2019-06-06,97.89947397175348\r
2019-06-11,96.33247100898576\r
2019-06-13,96.98358442109306\r
2019-06-18,100.0\r
2019-06-21,100.0\r
2019-06-23,100.0\r
2019-06-26,99.41513852376936\r
2019-06-28,99.41513852376936\r
2019-07-01,96.13763913299827\r
2019-07-03,96.13763913299827\r
2019-07-06,96.65770572450715\r
2019-07-08,92.60668466796396\r
2019-07-11,95.55453286684988\r
2019-07-13,91.02730328754316\r
2019-07-16,90.58793352667209\r
2019-07-18,87.85471454915923\r
2019-07-21,86.01929215344032\r
2019-07-23,80.41501246613066\r
2019-07-26,81.17687968861529\r
2019-07-28,76.72561302361616\r
2019-07-31,69.91885554361534\r
2019-08-02,65.68973944206537\r
2019-08-05,65.74164872403743\r
2019-08-07,59.683524472240656\r
2019-08-10,55.31709343124809\r
2019-08-12,55.31709343124809\r
2019-08-15,52.13541080553604\r
2019-08-17,52.18073304591895\r
2019-08-20,39.837167569670655\r
2019-08-22,30.47987119413447\r
2019-08-25,30.512940781719223\r
2019-08-27,19.147849741512243\r
2019-08-30,13.575679810901681\r
2019-09-04,11.42373109675024\r
2019-09-06,11.479542811721153\r
2019-09-09,9.010603294736692\r
2019-09-11,8.346803305675898\r
2019-09-14,7.392135042064471\r
2019-09-16,7.493245109207476\r
2019-09-19,8.738327476423118\r
2019-09-24,8.147364808607064\r
2019-09-26,9.254931174060793\r
2019-09-29,10.201230530014142\r
2019-10-01,11.294124511340051\r
2019-10-04,11.22045327287747\r
2019-10-06,12.181069913474266\r
2019-10-09,10.375926650848978\r
2019-10-11,10.375926650848978\r
2019-10-14,12.511613474496668\r
2019-10-16,12.511613474496668\r
2019-10-19,18.32809824303924\r
2019-10-26,19.885687604419424\r
2019-10-29,19.885687604419424\r
2019-11-05,19.731686430447258\r
2019-11-30,40.65449089990712\r
2019-12-08,59.38961772883869\r
2019-12-10,54.755797627126334\r
2019-12-13,54.755797627126334\r
2019-12-15,54.755797627126334\r
2019-12-23,59.536464587581314\r
2019-12-25,62.4678601587074\r
2019-12-28,65.37878930347716\r
2019-12-30,62.41748524208417\r
2020-01-02,61.4149942184268\r
2020-01-04,75.42453237904932\r
2020-01-09,69.59628854017723\r
2020-01-12,73.63603212314179\r
2020-01-14,72.5309996476448\r
2020-01-17,75.81913026569308\r
2020-01-22,77.86762486653836\r
2020-01-27,81.64781944585387\r
2020-02-01,88.90490253576039\r
2020-02-06,91.59404274637714\r
2020-02-08,92.16284919351038\r
2020-02-11,92.16284919351038\r
2020-02-13,91.72026547170104\r
2020-02-16,91.72026547170104\r
2020-02-18,94.13792381599478\r
2020-02-21,94.13792381599478\r
2020-02-26,90.14981175726011\r
2020-02-28,90.14981175726011\r
2020-03-04,90.27486212114229\r
2020-03-07,90.27486212114229\r
2020-03-14,95.42523655892028\r
2020-03-19,88.90490253576039\r
2020-03-22,95.61921958080268\r
2020-03-24,90.65062420311529\r
2020-03-29,88.71904257182204\r
2020-04-01,91.84659029507876\r
2020-04-03,91.84659029507876\r
2020-04-06,93.7537310780187\r
2020-04-08,92.16284919351038\r
2020-04-11,91.0901723346059\r
2020-04-23,92.03626901766793\r
2020-04-26,95.03796437613718\r
2020-04-28,97.96508818110517\r
2020-05-03,94.90907914780442\r
2020-05-06,97.76832300018037\r
2020-05-11,98.16208573966033\r
2020-05-21,100.0\r
2020-05-23,100.0\r
2020-05-26,98.22780324607582\r
2020-05-28,98.68854925069198\r
2020-05-31,98.68854925069198\r
2020-06-05,98.55677831568788\r
2020-06-10,99.68012917584892\r
2020-06-12,100.0\r
2020-06-15,100.0\r
2020-06-17,93.05177294543545\r
2020-06-20,99.28279852610831\r
2020-06-22,92.54320292244478\r
2020-06-25,95.29604305736908\r
2020-06-27,93.68978865128909\r
2020-06-30,96.20255735262488\r
2020-07-02,95.03796437613718\r
2020-07-05,97.0488374714547\r
2020-07-07,96.00787989568691\r
2020-07-10,98.62265085823422\r
2020-07-12,96.7228299332216\r
2020-07-15,100.0\r
2020-07-17,98.8204235974004\r
2020-07-20,97.37548944496174\r
2020-07-22,95.55453286684988\r
2020-07-25,97.24475129911607\r
2020-07-27,94.78029662854603\r
2020-07-30,94.13792381599478\r
2020-08-01,90.96445973122015\r
2020-08-04,91.15306687548126\r
2020-08-06,88.22453234868361\r
2020-08-09,85.29148841219104\r
2020-08-11,83.96660347469773\r
2020-08-14,84.32672789961718\r
2020-08-16,84.74801755805058\r
2020-08-19,86.50651352606418\r
2020-08-21,83.66719099903183\r
2020-08-24,86.56752985765145\r
2020-08-26,86.14094599348984\r
2020-09-03,82.77271974212941\r
2020-09-05,77.3524932078332\r
2020-09-08,80.29817647313725\r
2020-09-10,80.29817647313725\r
2020-09-13,75.42453237904932\r
2020-09-15,75.42453237904932\r
2020-09-18,75.25578907616004\r
2020-09-20,77.69569118176143\r
2020-09-25,80.82472437510344\r
2020-09-28,80.82472437510344\r
2020-09-30,77.58119270867584\r
2020-10-03,82.83217554379874\r
2020-10-08,79.77364860271359\r
2020-10-10,72.97183520402743\r
2020-10-15,72.97183520402743\r
2020-10-18,72.97183520402743\r
2020-10-20,72.97183520402743\r
2020-10-25,73.91382450511209\r
2020-10-28,71.21789418254761\r
2020-10-30,71.21789418254761\r
2020-11-02,69.0606224053815\r
2020-11-07,71.4357670143451\r
2020-11-09,71.4357670143451\r
2020-11-17,72.69612914492845\r
2020-11-19,75.36825994818193\r
2020-11-22,76.66877242769156\r
2020-11-24,79.2511384538124\r
2020-12-02,79.2511384538124\r
2020-12-07,80.94200957733949\r
2020-12-09,84.50712963149827\r
2020-12-12,84.0265613590884\r
2020-12-19,84.0265613590884\r
2020-12-22,82.29797562668085\r
2020-12-27,78.2696717949325\r
2021-01-03,79.65736094669718\r
2021-01-06,79.71549232121816\r
2021-01-13,76.89628327193839\r
2021-01-16,74.08079487493568\r
2021-01-18,71.49029630072654\r
2021-01-23,71.49029630072654\r
2021-01-26,77.63842954900291\r
2021-01-31,77.4667933925475\r
2021-02-02,77.4667933925475\r
2021-02-15,76.15831989411038\r
2021-02-17,76.15831989411038\r
2021-02-20,76.15831989411038\r
2021-02-25,80.76611922627453\r
2021-02-27,80.82472437510344\r
2021-03-02,89.52608630478537\r
2021-03-04,87.85471454915923\r
2021-03-22,96.3974664517849\r
2021-03-24,99.28279852610831\r
2021-03-29,95.94303887193433\r
2021-04-01,95.94303887193433\r
2021-04-03,98.68854925069198\r
2021-04-06,98.62265085823422\r
2021-04-08,98.62265085823422\r
2021-04-11,96.26750131027649\r
2021-04-13,96.26750131027649\r
2021-04-18,96.26750131027649\r
2021-04-23,93.43427510752538\r
2021-04-28,93.43427510752538\r
2021-05-03,94.00975703964741\r
2021-05-06,94.71594387721196\r
2021-05-08,92.98811216379349\r
2021-05-13,94.71594387721196\r
2021-05-18,94.52303961986169\r
2021-05-21,95.61921958080268\r
2021-05-23,95.61921958080268\r
2021-05-26,95.68393200546438\r
2021-05-28,95.68393200546438\r
2021-05-31,100.0\r
2021-06-05,95.48987186056847\r
2021-06-10,97.17942090744006\r
2021-06-12,97.17942090744006\r
2021-06-15,97.70278623191734\r
2021-06-17,97.70278623191734\r
2021-06-22,95.55453286684988\r
2021-06-25,96.3974664517849\r
2021-06-27,94.00975703964741\r
2021-06-30,97.6372752713081\r
2021-07-02,78.67293527107097\r
2021-07-05,93.7537310780187\r
2021-07-07,91.97301724104693\r
2021-07-10,96.26750131027649\r
2021-07-12,95.23148485138748\r
2021-07-15,96.78797990420883\r
2021-07-17,95.68393200546438\r
2021-07-20,95.87822357407119\r
2021-07-22,93.11545931589961\r
2021-07-27,91.0901723346059\r
2021-07-30,91.4049000385486\r
2021-08-01,90.71334035185033\r
2021-08-04,87.4244130699709\r
2021-08-06,87.4244130699709\r
2021-08-11,83.36840647983583\r
2021-08-14,75.93209468091187\r
2021-08-16,59.38961772883869\r
2021-08-19,55.22331061491559\r
2021-08-21,55.22331061491559\r
2021-08-24,55.22331061491559\r
2021-08-26,45.68081001919563\r
2021-08-29,39.25932504145015\r
2021-08-31,28.66146630667244\r
2021-09-03,28.757218295492997\r
2021-09-05,20.378004535433252\r
2021-09-08,20.378004535433252\r
2021-09-23,7.23487501472615\r
2021-09-30,7.23487501472615\r
2021-10-03,7.3347197526068335\r
2021-10-05,15.768665293669887\r
2021-10-08,15.768665293669887\r
2021-10-10,14.011458269036043\r
2021-10-13,14.306479134397257\r
2021-10-15,14.79901423310137\r
2021-10-18,14.074373203556032\r
2021-10-20,14.242956344587185\r
2021-10-23,14.011458269036043\r
2021-11-19,33.22708815859648\r
2021-11-22,33.22708815859648\r
2021-11-24,33.22708815859648\r
2021-11-27,33.22708815859648\r
2021-12-07,36.7016960542459\r
2021-12-09,36.66483725197645\r
2021-12-12,38.800617219611574\r
2021-12-14,36.81240299126637\r
2021-12-17,37.406150615268665\r
2021-12-19,37.25719052194893\r
2021-12-24,36.151095893493384\r
2021-12-29,36.66483725197645\r
2022-01-08,35.064526848665736\r
2022-01-11,38.724473597730466\r
2022-01-13,40.576230381362535\r
2022-01-16,42.238342128488924\r
2022-01-18,45.806691747711426\r
2022-01-21,51.41339788268171\r
2022-01-23,52.90903706460524\r
2022-01-26,58.85300031727236\r
2022-01-28,63.37869351171261\r
2022-01-31,63.37869351171261\r
2022-02-02,69.43533345115482\r
2022-02-05,83.30872489627436\r
2022-02-07,93.62587184392753\r
2022-02-10,90.77608197595323\r
2022-02-12,92.47974674127533\r
2022-02-15,92.41631612139427\r
2022-02-17,92.41631612139427\r
2022-02-20,91.84659029507876\r
2022-02-22,92.54320292244478\r
2022-02-25,93.7537310780187\r
2022-02-27,93.7537310780187\r
2022-03-02,91.84659029507876\r
2022-03-07,95.42523655892028\r
2022-03-09,92.67019198089366\r
2022-03-14,95.8134339990623\r
2022-03-22,93.81769912716823\r
2022-03-24,95.16695233788207\r
2022-03-29,95.16695233788207\r
2022-04-03,94.97350892181521\r
2022-04-11,95.55453286684988\r
2022-04-13,94.6516167940163\r
2022-04-16,93.94571210493194\r
2022-04-18,94.39456508172076\r
2022-04-23,94.33036629354031\r
2022-04-26,94.84467505106235\r
2022-04-28,94.33036629354031\r
2022-05-01,95.03796437613718\r
2022-05-08,97.17942090744006\r
2022-05-11,96.59260727503629\r
2022-05-13,97.37548944496174\r
2022-05-16,97.37548944496174\r
2022-05-18,97.6372752713081\r
2022-05-21,97.83388557911874\r
2022-05-23,97.17942090744006\r
2022-05-26,96.00787989568691\r
2022-05-28,96.13763913299827\r
2022-05-31,95.61921958080268\r
2022-06-02,95.87822357407119\r
2022-06-07,95.68393200546438\r
2022-06-10,96.20255735262488\r
2022-06-12,95.68393200546438\r
2022-06-15,96.3974664517849\r
2022-06-17,93.81769912716823\r
2022-06-20,94.5873153759145\r
2022-06-25,96.46248764170564\r
2022-06-27,94.20204566372499\r
2022-07-02,95.8134339990623\r
2022-07-05,96.0727466483635\r
2022-07-07,92.92447696791646\r
2022-07-10,94.84467505106235\r
2022-07-12,94.07382760898523\r
2022-07-15,94.13792381599478\r
2022-07-17,93.62587184392753\r
2022-07-20,93.30667199079129\r
2022-07-22,91.97301724104693\r
2022-07-25,91.72026547170104\r
2022-07-27,92.09954633413415\r
2022-07-30,92.09954633413415\r
2022-08-01,90.08732474835854\r
2022-08-04,89.96242706123218\r
2022-08-06,88.90490253576039\r
2022-08-09,87.91628749763535\r
2022-08-11,86.56752985765145\r
2022-08-14,87.2403778869694\r
2022-08-16,86.08010645183847\r
2022-08-19,86.81184789660395\r
2022-08-21,85.0496939184266\r
2022-08-24,86.99535186109847\r
2022-08-26,88.10115837413966\r
2022-08-29,91.15306687548126\r
2022-09-05,92.03626901766793\r
2022-09-10,89.09099097333532\r
2022-09-13,87.91628749763535\r
2022-09-18,85.23100199246942\r
2022-09-20,85.23100199246942\r
2022-09-23,81.23565967378099\r
2022-10-05,63.684026580678086\r
2022-10-08,64.34854028883437\r
2022-10-10,64.34854028883437\r
2022-10-13,60.867683484163024\r
2022-10-15,61.31526912309023\r
2022-10-18,59.879935850716116\r
2022-10-20,59.1941531321065\r
2022-10-23,56.92572490324215\r
2022-10-25,57.78833569149078\r
2022-10-28,54.38346688584167\r
2022-10-30,47.59044732279276\r
2022-11-02,36.62800019838377\r
2022-11-04,30.546031431638603\r
2022-11-14,26.693818215034685\r
2022-11-27,21.979351591261278\r
2022-12-02,21.545363083010432\r
2022-12-04,25.42748647178219\r
2022-12-07,25.42748647178219\r
2022-12-09,25.27913599660311\r
2022-12-22,28.98136938503302\r
2022-12-27,28.534088636945544\r
2022-12-29,30.64542979526101\r
2023-01-18,45.55513168833399\r
2023-01-21,45.55513168833399\r
2023-01-26,45.55513168833399\r
2023-01-31,46.05906578862823\r
2023-02-02,47.1194031662437\r
2023-02-05,47.1194031662437\r
2023-02-10,47.1194031662437\r
2023-02-12,49.19510869150467\r
2023-02-15,49.722261527844445\r
2023-02-17,49.722261527844445\r
2023-02-20,49.722261527844445\r
2023-02-22,49.810441282278624\r
2023-03-07,55.036025284151336\r
2023-03-09,56.59232118787114\r
2023-03-12,56.44978586343801\r
2023-03-14,58.6100284597894\r
2023-03-17,58.6100284597894\r
2023-03-22,60.47144541453441\r
2023-03-24,66.20991638710318\r
2023-03-27,67.6264477931423\r
2023-04-01,67.6264477931423\r
2023-04-03,66.00155644262948\r
2023-04-06,66.05361027132842\r
2023-04-08,67.36279799184986\r
2023-04-16,75.36825994818193\r
2023-04-21,75.36825994818193\r
2023-04-23,75.36825994818193\r
2023-04-26,76.89628327193839\r
2023-04-28,75.87560012669458\r
`;export{n as default};

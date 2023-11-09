const r=`date,value\r
2017-04-20,5.769059863814417\r
2017-04-23,5.769059863814417\r
2017-04-30,5.769059863814417\r
2017-05-30,12.925152198142314\r
2017-06-02,12.925152198142314\r
2017-06-09,80.58488346660558\r
2017-06-12,79.1114443665145\r
2017-06-19,79.1114443665145\r
2017-07-04,39.38697299064403\r
2017-07-07,39.38697299064403\r
2017-07-12,39.38697299064403\r
2017-07-29,1.998411578575826\r
2017-08-03,1.998411578575826\r
2017-08-06,1.998411578575826\r
2017-08-18,63.01960369627938\r
2017-08-21,63.01960369627938\r
2017-08-23,79.1114443665145\r
2017-08-26,79.1114443665145\r
2017-09-07,58.26930359089544\r
2017-09-10,58.26930359089544\r
2017-09-15,58.26930359089544\r
2017-09-17,58.26930359089544\r
2017-09-22,5.583072412450396\r
2017-09-27,5.583072412450396\r
2017-10-02,5.583072412450396\r
2018-06-19,82.07971836515742\r
2018-06-22,82.07971836515742\r
2018-06-24,82.07971836515742\r
2018-06-27,80.58488346660558\r
2018-06-29,80.58488346660558\r
2018-07-09,41.110548636953915\r
2018-07-12,38.546680134104555\r
2018-07-14,38.546680134104555\r
2018-07-17,38.546680134104555\r
2018-07-19,38.546680134104555\r
2018-07-22,17.757869805870925\r
2018-07-24,33.04987174455684\r
2018-07-27,33.04987174455684\r
2018-07-29,33.04987174455684\r
2018-08-01,26.9057234241124\r
2018-08-03,26.9057234241124\r
2018-08-28,19.648932086758567\r
2018-09-02,33.04987174455684\r
2018-09-05,33.04987174455684\r
2018-09-07,14.79373767528883\r
2018-09-10,3.8304469152213034\r
2018-09-12,14.79373767528883\r
2018-09-17,26.9057234241124\r
2018-09-20,23.902280601551077\r
2018-09-22,83.59617264837843\r
2018-09-25,64.25321586702492\r
2018-09-27,64.25321586702492\r
2018-09-30,64.25321586702492\r
2018-10-02,64.25321586702492\r
2018-10-05,1.55092128495104\r
2019-05-15,40.24153771696053\r
2019-05-23,40.24153771696053\r
2019-05-30,96.53340976011206\r
2019-06-02,74.81728742520664\r
2019-06-04,100.0\r
2019-06-07,100.0\r
2019-06-12,100.0\r
2019-06-19,74.81728742520664\r
2019-06-24,74.81728742520664\r
2019-06-27,74.81728742520664\r
2019-06-29,77.65917890874525\r
2019-07-02,77.65917890874525\r
2019-07-04,54.894302977303724\r
2019-07-07,57.126756641499156\r
2019-07-09,57.126756641499156\r
2019-07-12,57.126756641499156\r
2019-07-14,42.892612884846656\r
2019-07-17,47.613036789311714\r
2019-07-19,33.04987174455684\r
2019-07-22,49.61113820592392\r
2019-07-24,42.892612884846656\r
2019-07-29,49.61113820592392\r
2019-08-01,36.109709049823216\r
2019-08-03,52.730729694086506\r
2019-08-06,40.24153771696053\r
2019-08-08,49.61113820592392\r
2019-08-11,33.79503369082169\r
2019-08-16,53.80400360233845\r
2019-08-18,31.598156617679386\r
2019-08-23,31.598156617679386\r
2019-08-26,50.63448790102505\r
2019-08-31,50.63448790102505\r
2019-09-07,33.04987174455684\r
2019-09-12,17.757869805870925\r
2019-09-15,17.757869805870925\r
2019-09-17,17.757869805870925\r
2019-09-20,17.757869805870925\r
2019-09-22,17.757869805870925\r
2019-09-27,17.757869805870925\r
2020-05-04,30.19684124863757\r
2020-05-07,30.19684124863757\r
2020-05-09,59.42966133446881\r
2020-05-14,59.42966133446881\r
2020-05-17,59.42966133446881\r
2020-05-19,59.42966133446881\r
2020-05-22,73.42722420635147\r
2020-05-24,72.05746023670171\r
2020-05-27,100.0\r
2020-05-29,98.25473755125189\r
2020-06-01,98.25473755125189\r
2020-06-03,98.25473755125189\r
2020-07-08,56.00182210756005\r
2020-07-13,98.25473755125189\r
2020-07-18,58.26930359089544\r
2020-07-21,58.26930359089544\r
2020-07-23,57.126756641499156\r
2020-07-26,39.38697299064403\r
2020-07-28,49.61113820592392\r
2020-07-31,40.24153771696053\r
2020-08-02,40.24153771696053\r
2020-08-05,40.24153771696053\r
2020-08-07,29.514683742470858\r
2020-08-10,40.24153771696053\r
2020-08-12,38.546680134104555\r
2020-08-15,64.25321586702492\r
2020-08-20,64.25321586702492\r
2020-08-22,53.80400360233845\r
2020-08-25,72.05746023670171\r
2020-08-27,59.42966133446881\r
2020-09-01,66.7771168120785\r
2020-09-04,66.7771168120785\r
2020-09-06,66.7771168120785\r
2020-09-09,83.59617264837843\r
2020-09-11,83.59617264837843\r
2020-09-14,69.37797122312567\r
2020-09-16,85.13447133599979\r
2020-09-19,26.9057234241124\r
2021-06-03,100.0\r
2021-06-11,100.0\r
2021-06-13,100.0\r
2021-06-16,65.50565135400063\r
2021-06-18,70.70778045847557\r
2021-06-21,70.70778045847557\r
2021-06-26,54.894302977303724\r
2021-07-18,41.99418138004621\r
2021-07-21,41.99418138004621\r
2021-07-23,64.25321586702492\r
2021-08-02,70.70778045847557\r
2021-08-10,66.7771168120785\r
2021-08-12,66.7771168120785\r
2021-08-17,29.514683742470858\r
2021-08-20,29.514683742470858\r
2021-08-25,29.514683742470858\r
2021-08-27,46.63791131955717\r
2021-08-30,39.38697299064403\r
2021-09-01,47.613036789311714\r
2021-09-06,47.613036789311714\r
2021-09-11,38.546680134104555\r
2021-09-21,44.73458650188956\r
2021-09-24,44.73458650188956\r
2021-10-01,48.60405034977181\r
2021-10-09,26.9057234241124\r
2021-10-11,58.26930359089544\r
2022-05-14,82.07971836515742\r
2022-05-19,94.83577855063969\r
2022-05-27,94.83577855063969\r
2022-05-29,94.83577855063969\r
2022-06-06,52.730729694086506\r
2022-06-13,30.891279225033397\r
2022-06-16,30.891279225033397\r
2022-06-18,54.894302977303724\r
2022-06-21,54.894302977303724\r
2022-06-23,54.894302977303724\r
2022-06-26,50.63448790102505\r
2022-06-28,91.51066089132895\r
2022-07-01,80.58488346660558\r
2022-07-03,80.58488346660558\r
2022-07-06,80.58488346660558\r
2022-07-08,80.58488346660558\r
2022-07-11,31.598156617679386\r
2022-07-13,50.63448790102505\r
2022-07-16,50.63448790102505\r
2022-07-18,36.109709049823216\r
2022-07-21,53.80400360233845\r
2022-07-28,40.24153771696053\r
2022-07-31,36.908219240329394\r
2022-08-02,36.908219240329394\r
2022-08-05,36.908219240329394\r
2022-08-07,36.908219240329394\r
2022-08-10,13.648953125813732\r
2022-08-12,19.648932086758567\r
2022-08-22,22.23051879188801\r
2022-08-25,20.651709060354243\r
2022-08-27,20.651709060354243\r
2022-08-30,20.651709060354243\r
2022-09-01,24.480860246927755\r
2022-09-04,17.308173644739025\r
2022-09-06,36.908219240329394\r
2022-09-09,36.908219240329394\r
2022-09-11,21.69411019639555\r
2022-09-19,17.757869805870925\r
2022-09-21,19.648932086758567\r
2023-05-04,73.42722420635147\r
2023-06-23,20.651709060354243\r
2023-06-26,20.651709060354243\r
2023-06-28,53.80400360233845\r
2023-07-03,53.80400360233845\r
2023-07-06,53.80400360233845\r
2023-07-08,53.80400360233845\r
2023-07-11,53.80400360233845\r
2023-07-16,41.99418138004621\r
2023-07-18,45.678489070179694\r
2023-07-21,35.324786415175055\r
2023-07-23,35.324786415175055\r
2023-07-26,35.324786415175055\r
2023-08-07,30.19684124863757\r
2023-08-12,41.99418138004621\r
2023-08-15,41.99418138004621\r
2023-08-17,41.99418138004621\r
2023-08-22,41.99418138004621\r
2023-08-25,28.18658063919568\r
2023-08-30,29.514683742470858\r
2023-09-01,66.7771168120785\r
2023-09-04,66.7771168120785\r
2023-09-06,66.7771168120785\r
2023-09-09,66.7771168120785\r
2023-09-11,33.04987174455684\r
2023-09-26,8.658674807494855\r
2023-09-29,8.658674807494855\r
2023-10-01,12.231749692094343\r
2023-10-04,12.231749692094343\r
2023-10-06,3.564558356351736\r
2023-10-09,5.583072412450396\r
2023-10-16,4.885522512879857\r
`;export{r as default};

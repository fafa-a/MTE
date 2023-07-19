const r=`date,value\r
2017-03-01,211300\r
2017-03-08,211300\r
2017-03-11,211300\r
2017-03-14,195700\r
2017-04-10,215500\r
2017-04-17,215500\r
2017-04-20,216200\r
2017-04-23,211000\r
2017-05-30,216200\r
2017-06-02,216200\r
2017-06-06,216200\r
2017-06-09,221700\r
2017-06-12,221000\r
2017-06-16,221000\r
2017-06-19,221100\r
2017-06-22,211500\r
2017-06-26,211500\r
2017-06-29,211900\r
2017-07-01,208200\r
2017-07-02,208200\r
2017-07-04,209600\r
2017-07-06,209600\r
2017-07-07,209600\r
2017-07-12,190200\r
2017-07-14,190200\r
2017-07-17,176300\r
2017-07-19,176300\r
2017-07-21,176300\r
2017-07-22,176300\r
2017-07-24,177600\r
2017-07-29,137000\r
2017-07-31,137000\r
2017-08-03,138900\r
2017-08-05,131300\r
2017-08-06,131300\r
2017-08-08,131300\r
2017-08-13,110400\r
2017-08-15,96200\r
2017-08-18,100300\r
2017-08-20,100300\r
2017-08-21,100300\r
2017-08-23,97300\r
2017-08-25,103900\r
2017-08-26,103900\r
2017-08-30,101600\r
2017-09-02,103300\r
2017-09-04,83700\r
2017-09-05,83700\r
2017-09-07,84500\r
2017-09-10,84500\r
2017-09-12,77100\r
2017-09-14,77900\r
2017-09-17,77900\r
2017-09-20,73200\r
2017-09-22,73200\r
2017-10-07,55600\r
2017-10-09,54500\r
2017-10-10,54500\r
2017-10-12,54900\r
2017-10-14,54900\r
2017-10-15,54900\r
2017-10-17,49700\r
2017-10-19,50600\r
2017-10-20,50600\r
2017-10-22,47800\r
2017-10-24,50300\r
2017-10-25,50300\r
2017-10-27,50300\r
2017-10-29,45900\r
2017-10-30,45900\r
2017-11-01,48900\r
2017-11-03,48900\r
2017-11-06,48900\r
2017-11-09,48900\r
2017-11-16,45900\r
2017-11-18,45900\r
2017-11-19,45900\r
2017-11-21,48000\r
2017-11-23,48000\r
2017-11-26,44800\r
2017-11-28,46100\r
2017-11-29,46100\r
2017-12-01,46100\r
2017-12-03,41600\r
2017-12-06,43300\r
2017-12-08,42200\r
2017-12-09,42200\r
2017-12-13,42200\r
2017-12-14,42200\r
2017-12-16,45400\r
2017-12-19,44900\r
2017-12-21,46900\r
2017-12-23,46900\r
2017-12-24,46900\r
2017-12-26,46900\r
2017-12-28,45100\r
2018-01-30,57900\r
2018-02-04,61200\r
2018-02-07,61200\r
2018-02-09,60800\r
2018-02-11,64500\r
2018-02-12,64500\r
2018-02-14,63700\r
2018-02-16,66200\r
2018-02-19,66200\r
2018-02-21,65500\r
2018-02-24,65500\r
2018-03-21,218100\r
2018-03-23,218100\r
2018-03-26,219500\r
2018-03-31,221300\r
2018-04-05,218000\r
2018-04-10,214800\r
2018-04-15,219900\r
2018-04-17,210400\r
2018-04-18,210400\r
2018-04-20,214000\r
2018-04-22,214000\r
2018-04-25,208800\r
2018-04-27,214500\r
2018-04-28,214500\r
2018-04-30,214200\r
2018-05-03,213200\r
2018-05-05,211100\r
2018-05-12,204500\r
2018-05-15,214600\r
2018-05-17,212500\r
2018-05-20,214600\r
2018-05-25,220000\r
2018-06-01,220700\r
2018-06-02,220700\r
2018-06-09,216500\r
2018-06-14,222300\r
2018-06-16,222300\r
2018-06-17,222300\r
2018-06-19,216400\r
2018-06-21,222900\r
2018-06-22,222900\r
2018-06-24,222900\r
2018-06-26,215000\r
2018-06-27,215000\r
2018-06-29,216100\r
2018-07-04,218400\r
2018-07-06,218400\r
2018-07-07,218400\r
2018-07-09,217800\r
2018-07-11,216500\r
2018-07-12,216500\r
2018-07-14,219400\r
2018-07-19,218500\r
2018-07-21,217800\r
2018-07-22,217800\r
2018-07-24,217800\r
2018-07-26,205700\r
2018-07-27,205700\r
2018-07-29,206200\r
2018-08-28,190900\r
2018-08-30,190900\r
2018-08-31,190900\r
2018-09-02,201900\r
2018-09-04,201900\r
2018-09-05,201900\r
2018-09-07,189800\r
2018-09-09,201900\r
2018-09-10,201900\r
2018-09-12,186500\r
2018-09-14,195400\r
2018-09-17,180700\r
2018-09-19,194900\r
2018-09-20,194900\r
2018-09-22,194900\r
2018-09-24,180500\r
2018-09-25,180500\r
2018-09-27,183300\r
2018-09-29,175600\r
2018-10-02,185500\r
2018-10-04,185500\r
2018-10-05,185500\r
2018-10-09,170300\r
2018-10-12,170300\r
2018-12-06,191700\r
2018-12-08,191700\r
2018-12-11,200800\r
2018-12-18,189600\r
2019-01-10,166800\r
2019-01-12,166800\r
2019-01-15,176600\r
2019-01-17,176600\r
2019-01-20,176600\r
2019-01-22,176600\r
2019-01-23,176600\r
2019-01-25,163700\r
2019-01-27,173500\r
2019-01-28,173500\r
2019-01-30,169300\r
2019-02-04,134600\r
2019-02-06,134600\r
2019-02-09,134600\r
2019-02-11,178300\r
2019-02-12,178300\r
2019-02-14,152200\r
2019-02-16,152200\r
2019-02-17,152200\r
2019-02-19,152200\r
2019-02-21,194200\r
2019-02-22,194200\r
2019-02-27,194200\r
2019-03-01,165000\r
2019-03-03,194200\r
2019-03-08,163200\r
2019-03-11,190200\r
2019-03-13,190200\r
2019-03-16,173400\r
2019-03-18,190300\r
2019-03-19,190300\r
2019-03-21,180100\r
2019-03-23,180100\r
2019-03-24,180100\r
2019-03-26,186600\r
2019-03-28,177000\r
2019-03-29,177000\r
2019-03-31,177000\r
2019-04-02,169900\r
2019-04-05,182100\r
2019-04-07,179400\r
2019-04-08,179400\r
2019-04-13,179900\r
2019-04-15,174700\r
2019-04-17,182200\r
2019-04-18,182200\r
2019-04-20,182000\r
2019-04-22,216200\r
2019-04-27,216200\r
2019-04-30,182500\r
2019-05-02,216200\r
2019-05-05,216200\r
2019-05-07,174000\r
2019-05-10,186300\r
2019-05-12,186300\r
2019-05-13,186300\r
2019-05-15,186300\r
2019-05-23,186200\r
2019-05-30,202700\r
2019-06-01,202700\r
2019-06-02,202700\r
2019-06-04,212200\r
2019-06-06,212200\r
2019-06-07,212200\r
2019-06-11,212200\r
2019-06-12,212200\r
2019-06-19,195000\r
2019-06-22,195000\r
2019-06-24,201300\r
2019-06-26,201300\r
2019-06-27,201300\r
2019-06-29,189100\r
2019-07-01,189100\r
2019-07-02,189100\r
2019-07-04,191800\r
2019-07-06,185400\r
2019-07-07,185400\r
2019-07-11,191400\r
2019-07-12,191400\r
2019-07-14,183500\r
2019-07-16,186200\r
2019-07-17,186200\r
2019-07-19,179100\r
2019-07-21,183700\r
2019-07-22,183700\r
2019-07-24,170400\r
2019-07-26,170400\r
2019-07-29,170400\r
2019-07-31,158200\r
2019-08-03,159200\r
2019-08-05,139800\r
2019-08-06,139800\r
2019-08-08,140700\r
2019-08-10,127400\r
2019-08-11,127400\r
2019-08-15,136000\r
2019-08-16,136000\r
2019-08-18,120100\r
2019-08-20,123600\r
2019-08-21,123600\r
2019-08-23,102400\r
2019-08-25,103400\r
2019-08-26,103400\r
2019-08-30,103400\r
2019-08-31,103400\r
2019-09-02,91100\r
2019-09-04,92000\r
2019-09-05,92000\r
2019-09-07,81400\r
2019-09-09,82500\r
2019-09-12,76800\r
2019-09-14,76800\r
2019-09-15,76800\r
2019-09-17,76800\r
2019-09-19,74800\r
2019-09-25,76700\r
2019-09-27,72300\r
2019-09-29,73800\r
2019-09-30,73800\r
2019-10-02,69000\r
2019-10-05,70200\r
2019-10-07,67500\r
2019-10-10,67500\r
2019-10-19,68200\r
2019-10-27,142300\r
2019-10-29,142300\r
2019-10-30,142300\r
2019-11-06,154100\r
2019-11-08,154100\r
2019-11-09,154100\r
2019-11-13,142400\r
2019-11-16,180400\r
2019-11-26,180400\r
2019-11-28,180400\r
2019-11-29,180400\r
2019-12-06,181900\r
2019-12-08,181900\r
2019-12-09,181900\r
2019-12-13,181900\r
2019-12-21,183300\r
2019-12-23,107400\r
2019-12-26,107400\r
2019-12-28,107400\r
2019-12-29,107400\r
2020-01-05,164000\r
2020-01-08,164000\r
2020-01-12,164000\r
2020-01-13,164000\r
2020-01-30,195900\r
2020-02-04,196000\r
2020-02-07,196000\r
2020-02-09,192800\r
2020-02-11,192800\r
2020-02-12,192800\r
2020-02-14,192800\r
2020-02-19,172800\r
2020-02-22,192800\r
2020-02-24,164000\r
2020-02-26,164200\r
2020-03-03,164200\r
2020-03-07,164200\r
2020-03-08,164200\r
2020-03-10,164200\r
2020-03-20,180500\r
2020-03-22,180500\r
2020-03-28,180500\r
2020-04-01,180500\r
2020-04-04,183000\r
2020-04-06,169400\r
2020-04-07,169400\r
2020-04-09,179600\r
2020-04-11,179600\r
2020-04-14,171500\r
2020-04-24,182900\r
2020-04-26,167500\r
2020-04-29,167500\r
2020-05-04,180000\r
2020-05-06,180000\r
2020-05-09,180000\r
2020-05-14,180000\r
2020-05-19,216800\r
2020-05-21,216700\r
2020-05-22,216700\r
2020-05-24,216700\r
2020-05-26,216700\r
2020-05-31,216700\r
2020-06-01,216700\r
2020-06-03,219600\r
2020-06-08,209300\r
2020-06-10,209300\r
2020-06-15,209300\r
2020-06-23,204200\r
2020-06-25,204200\r
2020-06-26,204200\r
2020-06-28,217000\r
2020-06-30,217000\r
2020-07-01,217000\r
2020-07-03,196400\r
2020-07-05,196400\r
2020-07-06,196400\r
2020-07-08,204400\r
2020-07-10,199700\r
2020-07-11,199700\r
2020-07-15,204400\r
2020-07-16,204400\r
2020-07-18,197800\r
2020-07-20,192700\r
2020-07-21,192700\r
2020-07-23,194800\r
2020-07-25,190400\r
2020-07-26,190400\r
2020-07-30,190400\r
2020-07-31,190400\r
2020-08-02,190400\r
2020-08-04,186900\r
2020-08-05,186900\r
2020-08-07,186900\r
2020-08-09,141000\r
2020-08-10,141000\r
2020-08-12,141100\r
2020-08-14,141100\r
2020-08-15,141100\r
2020-08-17,141100\r
2020-08-19,141100\r
2020-08-20,141100\r
2020-08-22,118500\r
2020-08-24,118600\r
2020-08-25,118600\r
2020-08-27,93400\r
2020-09-01,85600\r
2020-09-03,85600\r
2020-09-04,85600\r
2020-09-06,89700\r
2020-09-08,89700\r
2020-09-09,89700\r
2020-09-13,91400\r
2020-09-14,91400\r
2020-09-16,83600\r
2020-09-18,85000\r
2020-09-21,85000\r
2020-09-23,84400\r
2020-09-26,89000\r
2020-09-28,89000\r
2020-09-29,89000\r
2020-10-01,89000\r
2020-10-03,88800\r
2020-10-08,88800\r
2020-10-11,96100\r
2020-10-13,93400\r
2020-10-16,93400\r
2020-10-18,93400\r
2020-10-19,93400\r
2020-10-21,93400\r
2020-10-24,93400\r
2020-10-31,95100\r
2020-11-02,95100\r
2020-11-05,98300\r
2020-11-07,98300\r
2020-11-10,91800\r
2020-11-12,91800\r
2020-11-17,94700\r
2020-11-18,94700\r
2020-11-20,85100\r
2020-11-22,85500\r
2020-11-23,85500\r
2020-11-25,85500\r
2020-11-27,95600\r
2020-11-30,95100\r
2020-12-02,95100\r
2020-12-03,95100\r
2020-12-07,110100\r
2020-12-12,109500\r
2020-12-13,109500\r
2020-12-25,80300\r
2020-12-28,80300\r
2020-12-30,82500\r
2021-01-14,104200\r
2021-01-17,104200\r
2021-01-19,108300\r
2021-01-22,108300\r
2021-01-24,104900\r
2021-01-26,109900\r
2021-01-29,109900\r
2021-01-31,106700\r
2021-02-03,106700\r
2021-02-23,157500\r
2021-02-25,157500\r
2021-02-26,157500\r
2021-02-28,161000\r
2021-03-02,161000\r
2021-03-05,161000\r
2021-03-07,151600\r
2021-03-08,151600\r
2021-03-10,162300\r
2021-03-12,161900\r
2021-03-13,161900\r
2021-03-15,171600\r
2021-03-17,171600\r
2021-03-20,169500\r
2021-03-30,167100\r
2021-04-01,165300\r
2021-04-02,165300\r
2021-04-06,165300\r
2021-04-09,165300\r
2021-05-04,197700\r
2021-05-06,197700\r
2021-05-07,197700\r
2021-05-09,197700\r
2021-05-11,197700\r
2021-05-12,197700\r
2021-05-14,207200\r
2021-05-19,204600\r
2021-05-21,204600\r
2021-05-26,192800\r
2021-05-27,192800\r
2021-06-03,210900\r
2021-06-05,210900\r
2021-06-08,210900\r
2021-06-10,210900\r
2021-06-11,210900\r
2021-06-13,215300\r
2021-06-15,212800\r
2021-06-16,212800\r
2021-06-18,215400\r
2021-06-25,206600\r
2021-06-26,206600\r
2021-06-28,206600\r
2021-07-13,206600\r
2021-07-15,199400\r
2021-07-16,199400\r
2021-07-18,200100\r
2021-07-20,200100\r
2021-07-21,200100\r
2021-07-23,192800\r
2021-07-25,193400\r
2021-07-28,181900\r
2021-07-30,181900\r
2021-08-02,169800\r
2021-08-05,170000\r
2021-08-09,152500\r
2021-08-10,152500\r
2021-08-12,152500\r
2021-08-17,109300\r
2021-08-19,109300\r
2021-08-20,109300\r
2021-08-22,109700\r
2021-08-27,96400\r
2021-08-29,96800\r
2021-08-30,96800\r
2021-09-01,87400\r
2021-09-06,85300\r
2021-09-08,97100\r
2021-09-11,82600\r
2021-09-13,94000\r
2021-09-18,75500\r
2021-09-19,75500\r
2021-09-21,75900\r
2021-09-23,72100\r
2021-09-24,72100\r
2021-09-28,72100\r
2021-09-29,72100\r
2021-10-01,72500\r
2021-10-06,72500\r
2021-10-11,70800\r
2021-10-13,73900\r
2021-10-14,73900\r
2021-10-16,71500\r
2021-10-18,72700\r
2021-10-23,69700\r
2021-10-24,69700\r
2021-10-26,69700\r
2021-11-05,73000\r
2021-11-20,78500\r
2021-11-23,78500\r
2021-11-30,80700\r
2021-12-02,77700\r
2021-12-03,77700\r
2021-12-05,78000\r
2021-12-07,78000\r
2021-12-20,95200\r
2022-01-09,146100\r
2022-01-11,146100\r
2022-01-12,146100\r
2022-01-14,147400\r
2022-01-16,147400\r
2022-01-17,147400\r
2022-01-19,147400\r
2022-01-21,141400\r
2022-01-22,141400\r
2022-01-24,147900\r
2022-01-26,146300\r
2022-01-27,146300\r
2022-01-29,159200\r
2022-02-01,159200\r
2022-02-05,158600\r
2022-02-06,158600\r
2022-02-08,160500\r
2022-02-10,151500\r
2022-02-11,151500\r
2022-02-13,161500\r
2022-02-15,161500\r
2022-02-18,157500\r
2022-02-20,161200\r
2022-02-21,161200\r
2022-02-23,161100\r
2022-02-26,168100\r
2022-02-28,165000\r
2022-03-02,169700\r
2022-03-03,169700\r
2022-03-07,165400\r
2022-03-08,165400\r
2022-03-25,179200\r
2022-03-27,179200\r
2022-03-28,179200\r
2022-04-01,179200\r
2022-04-04,179200\r
2022-04-09,168200\r
2022-04-14,168500\r
2022-04-16,170300\r
2022-04-17,170300\r
2022-04-19,164600\r
2022-04-26,161300\r
2022-04-27,161300\r
2022-04-29,161300\r
2022-05-14,182500\r
2022-05-16,182200\r
2022-05-17,182200\r
2022-05-19,182300\r
2022-05-21,182300\r
2022-05-22,182300\r
2022-05-24,182300\r
2022-05-27,173300\r
2022-05-29,173300\r
2022-05-31,155300\r
2022-06-01,155300\r
2022-06-05,155300\r
2022-06-06,155300\r
2022-06-13,107800\r
2022-06-15,107800\r
2022-06-16,107800\r
2022-06-18,107800\r
2022-06-20,107800\r
2022-06-28,96600\r
2022-07-01,98200\r
2022-07-03,98400\r
2022-07-05,98400\r
2022-07-06,98400\r
2022-07-08,90000\r
2022-07-10,90200\r
2022-07-11,90200\r
2022-07-13,89000\r
2022-07-15,80600\r
2022-07-16,80600\r
2022-07-18,80600\r
2022-07-23,67300\r
2022-07-25,67800\r
2022-07-26,67800\r
2022-07-28,66200\r
2022-07-30,64900\r
2022-07-31,64900\r
2022-08-02,61800\r
2022-08-04,60400\r
2022-08-05,60400\r
2022-08-07,59700\r
2022-08-09,59700\r
2022-08-10,59700\r
2022-08-12,55800\r
2022-08-19,55400\r
2022-08-20,55400\r
2022-08-22,59700\r
2022-08-24,59500\r
2022-08-25,59500\r
2022-08-27,61600\r
2022-08-29,61600\r
2022-09-01,61600\r
2022-09-03,60100\r
2022-09-04,60100\r
2022-09-06,60100\r
2022-09-11,55700\r
2022-09-16,57600\r
2022-09-18,57600\r
2022-09-19,57600\r
2022-09-21,55800\r
2022-09-26,56300\r
2022-09-28,58500\r
2022-10-01,58500\r
2022-10-03,57100\r
2022-10-04,57100\r
2022-10-06,58100\r
2022-10-11,54900\r
2022-10-16,54900\r
2022-10-26,57800\r
2022-10-28,57800\r
2022-10-31,59300\r
2022-11-05,55700\r
2022-11-10,57200\r
2022-11-20,57600\r
2022-11-22,57600\r
2022-11-25,61500\r
2022-11-30,59700\r
2022-12-02,63600\r
2022-12-05,63500\r
2022-12-07,74200\r
2022-12-08,74200\r
2022-12-10,74200\r
2022-12-25,186500\r
2022-12-27,186500\r
2022-12-28,186500\r
2022-12-30,186500\r
2023-01-04,193700\r
2023-01-06,193700\r
2023-01-09,201300\r
2023-01-12,201300\r
2023-01-14,201300\r
2023-01-19,197000\r
2023-01-21,190000\r
2023-01-22,190000\r
2023-01-24,190000\r
2023-01-26,190000\r
2023-01-27,190000\r
2023-01-29,190600\r
2023-01-31,182700\r
2023-02-01,182700\r
2023-02-03,185800\r
2023-02-05,185800\r
2023-02-06,185800\r
2023-02-08,181400\r
2023-02-10,184000\r
2023-02-11,184000\r
2023-02-13,180600\r
2023-02-15,184300\r
2023-02-16,184300\r
2023-02-18,183700\r
2023-02-20,191000\r
2023-02-21,191000\r
2023-02-26,191000\r
2023-03-05,196600\r
2023-03-07,196600\r
2023-03-10,196600\r
2023-03-12,196600\r
2023-03-13,196600\r
2023-03-20,198000\r
2023-03-22,198000\r
2023-03-25,198000\r
2023-03-27,198000\r
2023-03-28,198000\r
2023-03-30,208300\r
2023-04-01,207900\r
2023-04-02,207900\r
2023-04-06,207900\r
2023-04-07,207900\r
2023-04-14,203400\r
2023-04-16,203400\r
2023-04-17,203400\r
2023-04-19,212000\r
2023-04-24,206300\r
2023-04-26,212700\r
2023-04-29,212700\r
2023-05-02,204200\r
2023-05-04,205800\r
2023-05-06,200900\r
2023-05-11,200900\r
2023-05-14,200900\r
2023-05-24,192700\r
2023-05-26,192700\r
2023-05-27,192700\r
2023-05-31,198700\r
2023-06-01,198700\r
2023-06-03,204300\r
2023-06-05,203100\r
2023-06-08,205800\r
2023-06-10,205800\r
2023-06-13,205800\r
2023-06-18,206700\r
2023-06-23,210200\r
2023-06-25,210200\r
2023-06-26,210200\r
2023-06-28,205400\r
2023-07-01,206500\r
2023-07-03,201800\r
2023-07-05,206300\r
2023-07-06,206300\r
2023-07-08,202000\r
`;export{r as default};

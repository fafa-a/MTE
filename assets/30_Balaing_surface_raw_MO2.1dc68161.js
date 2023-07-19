const r=`date,value\r
2017-01-19,280200\r
2017-01-26,280800\r
2017-01-29,280800\r
2017-02-15,290900\r
2017-02-18,299600\r
2017-02-25,294500\r
2017-03-10,314300\r
2017-03-17,314300\r
2017-03-30,307900\r
2017-04-06,351100\r
2017-04-09,342800\r
2017-04-19,347400\r
2017-04-29,359400\r
2017-05-06,359300\r
2017-05-09,346800\r
2017-05-16,347600\r
2017-05-19,348500\r
2017-05-26,351900\r
2017-06-05,350600\r
2017-06-18,353100\r
2017-06-25,353100\r
2017-06-28,353100\r
2017-07-05,354500\r
2017-07-18,352300\r
2017-08-02,341100\r
2017-08-04,350200\r
2017-08-07,350200\r
2017-08-12,336600\r
2017-08-14,346400\r
2017-08-17,345400\r
2017-08-22,321600\r
2017-08-24,324500\r
2017-08-27,324800\r
2017-08-29,325800\r
2017-09-01,319200\r
2017-09-03,331800\r
2017-09-06,129100\r
2017-09-08,300800\r
2017-09-13,290500\r
2017-09-16,290500\r
2017-09-21,300900\r
2017-09-23,300900\r
2017-09-26,292700\r
2017-09-28,292700\r
2017-10-08,288700\r
2017-10-11,291700\r
2017-10-13,286200\r
2017-10-16,286600\r
2017-10-18,286600\r
2017-10-23,280700\r
2017-10-26,274600\r
2017-10-28,283000\r
2017-10-31,275900\r
2017-11-05,284000\r
2017-11-07,281100\r
2017-11-17,280400\r
2017-11-20,282200\r
2017-11-22,278000\r
2017-11-25,278000\r
2017-11-27,278000\r
2017-11-30,267100\r
2017-12-05,271300\r
2017-12-07,271300\r
2017-12-12,285200\r
2017-12-15,279600\r
2017-12-20,289100\r
2017-12-25,294800\r
2017-12-27,292900\r
2018-01-24,388500\r
2018-01-29,384600\r
2018-01-31,384600\r
2018-02-15,390900\r
2018-02-25,393100\r
2018-03-02,391900\r
2018-03-07,391900\r
2018-03-15,394800\r
2018-03-17,394800\r
2018-03-22,398900\r
2018-03-30,405100\r
2018-04-04,382000\r
2018-04-06,382000\r
2018-04-09,386300\r
2018-04-19,385000\r
2018-04-21,400900\r
2018-04-24,383200\r
2018-04-26,383200\r
2018-05-06,374400\r
2018-05-11,395800\r
2018-05-21,396500\r
2018-05-24,388600\r
2018-06-20,396500\r
2018-06-23,398700\r
2018-06-25,396700\r
2018-07-08,399800\r
2018-07-10,395700\r
2018-07-13,393500\r
2018-07-15,388300\r
2018-07-18,388300\r
2018-07-23,390100\r
2018-07-25,382200\r
2018-07-30,381000\r
2018-08-02,384400\r
2018-08-04,388400\r
2018-08-12,377500\r
2018-08-19,377600\r
2018-08-22,361800\r
2018-08-27,354900\r
2018-09-01,329100\r
2018-09-03,315200\r
2018-09-08,316000\r
2018-09-11,322900\r
2018-09-16,316800\r
2018-09-18,316800\r
2018-09-23,313800\r
2018-09-26,296000\r
2018-09-28,303600\r
2018-10-03,289300\r
2018-10-06,296300\r
2018-10-13,283700\r
2018-11-15,281600\r
2018-11-17,297100\r
2018-11-22,297100\r
2018-11-27,278200\r
2018-12-07,279600\r
2018-12-10,279600\r
2018-12-20,305900\r
2018-12-27,305900\r
2019-02-13,345400\r
2019-02-15,357400\r
2019-02-18,357400\r
2019-02-20,355500\r
2019-02-23,363000\r
2019-02-25,357100\r
2019-02-28,362200\r
2019-03-12,359500\r
2019-03-20,358100\r
2019-03-22,348200\r
2019-03-25,354400\r
2019-03-27,351900\r
2019-03-30,352200\r
2019-04-01,352200\r
2019-04-09,357600\r
2019-04-16,365900\r
2019-04-19,365900\r
2019-05-01,354700\r
2019-05-06,363700\r
2019-05-09,358700\r
2019-05-11,358700\r
2019-05-14,360400\r
2019-05-16,360400\r
2019-05-29,375600\r
2019-06-08,384400\r
2019-06-13,395100\r
2019-06-18,376300\r
2019-06-23,399300\r
2019-06-25,399300\r
2019-06-28,392300\r
2019-07-05,389600\r
2019-07-08,389600\r
2019-07-10,398000\r
2019-07-13,398000\r
2019-07-15,392500\r
2019-07-20,392500\r
2019-07-23,397300\r
2019-07-25,378500\r
2019-07-28,378500\r
2019-08-02,387900\r
2019-08-04,385500\r
2019-08-09,382100\r
2019-08-14,378100\r
2019-08-17,366000\r
2019-08-22,372900\r
2019-08-24,362500\r
2019-08-29,367500\r
2019-09-03,379600\r
2019-09-06,379600\r
2019-09-08,367800\r
2019-09-11,349200\r
2019-09-13,362800\r
2019-09-16,347700\r
2019-09-18,347700\r
2019-09-21,347700\r
2019-09-26,347700\r
2019-10-08,329000\r
2019-10-11,332400\r
2019-10-13,325100\r
2019-10-26,336300\r
2019-12-05,384600\r
2019-12-07,384600\r
2019-12-10,385000\r
2019-12-15,376000\r
2019-12-17,376000\r
2019-12-20,376000\r
2019-12-25,364300\r
2019-12-27,364800\r
2019-12-30,362100\r
2020-01-09,387300\r
2020-01-11,384400\r
2020-01-14,381400\r
2020-01-16,381400\r
2020-01-19,381200\r
2020-01-29,376200\r
2020-01-31,378100\r
2020-02-03,385600\r
2020-02-05,383200\r
2020-02-10,383200\r
2020-02-15,380900\r
2020-02-18,373600\r
2020-02-20,371200\r
2020-02-23,370300\r
2020-03-11,383300\r
2020-03-21,387700\r
2020-03-24,387600\r
2020-03-26,385600\r
2020-03-31,386500\r
2020-04-03,380400\r
2020-04-05,381700\r
2020-04-08,378100\r
2020-04-10,371900\r
2020-04-15,386500\r
2020-04-25,379000\r
2020-04-30,377900\r
2020-05-03,382800\r
2020-05-05,377300\r
2020-05-08,377300\r
2020-05-18,389200\r
2020-05-20,389300\r
2020-05-25,393000\r
2020-05-28,393000\r
2020-05-30,396900\r
2020-06-12,388400\r
2020-06-14,392700\r
2020-06-24,376200\r
2020-07-04,376200\r
2020-07-07,397200\r
2020-07-09,384000\r
2020-07-19,381400\r
2020-07-22,381900\r
2020-07-24,371500\r
2020-07-27,365800\r
2020-07-29,365800\r
2020-08-03,365800\r
2020-08-06,342300\r
2020-08-08,332400\r
2020-08-18,306400\r
2020-08-21,306400\r
2020-08-31,297100\r
2020-09-02,290300\r
2020-09-05,290300\r
2020-09-07,290300\r
2020-09-10,294100\r
2020-09-12,278200\r
2020-09-17,282200\r
2020-09-30,270000\r
2020-10-12,270000\r
2020-10-30,276400\r
2020-11-09,276400\r
2020-11-11,289800\r
2020-11-14,281600\r
2020-11-21,285600\r
2020-11-26,289800\r
2020-11-29,289000\r
2020-12-26,363900\r
2021-01-03,386200\r
2021-01-08,386200\r
2021-01-10,386200\r
2021-02-14,397600\r
2021-02-17,397600\r
2021-02-19,397600\r
2021-02-24,396400\r
2021-02-27,390100\r
2021-03-01,393100\r
2021-03-04,393700\r
2021-03-09,385700\r
2021-03-14,382400\r
2021-03-24,376500\r
2021-03-29,392600\r
2021-03-31,384800\r
2021-04-03,384800\r
2021-04-05,387100\r
2021-04-08,386100\r
2021-04-15,387900\r
2021-04-20,391500\r
2021-04-23,394700\r
2021-05-03,384800\r
2021-05-08,376200\r
2021-05-20,372500\r
2021-05-28,381800\r
2021-05-30,375100\r
2021-06-07,378500\r
2021-06-09,380900\r
2021-06-14,383900\r
2021-06-22,385100\r
2021-07-02,377300\r
2021-07-09,377300\r
2021-07-22,366400\r
2021-08-11,337100\r
2021-08-26,285300\r
2021-08-28,286800\r
2021-08-31,276000\r
2021-09-05,276400\r
2021-09-12,260300\r
2021-09-17,258700\r
2021-09-22,258700\r
2021-09-25,248600\r
2021-09-27,248600\r
2021-09-30,235400\r
2021-10-07,244800\r
2021-10-12,249300\r
2021-10-15,249300\r
2021-10-17,249300\r
2021-10-20,243200\r
2021-10-27,233400\r
2021-11-11,239900\r
2021-11-19,236100\r
2021-12-14,354500\r
2021-12-16,363100\r
2021-12-19,349800\r
2021-12-21,349800\r
2022-01-13,354800\r
2022-01-15,366600\r
2022-01-23,362100\r
2022-01-25,369400\r
2022-02-09,372800\r
2022-03-09,380500\r
2022-03-19,383300\r
2022-03-26,380200\r
2022-04-05,382900\r
2022-04-10,381400\r
2022-05-08,382700\r
2022-05-10,392900\r
2022-05-15,382700\r
2022-06-17,380900\r
2022-06-19,380900\r
2022-06-22,380900\r
2022-06-24,380900\r
2022-07-02,373700\r
2022-07-04,373700\r
2022-07-07,373700\r
2022-07-12,380300\r
2022-07-14,372600\r
2022-07-17,360500\r
2022-07-24,361700\r
2022-07-27,351900\r
2022-08-01,299300\r
2022-08-03,299300\r
2022-08-06,290900\r
2022-08-08,290900\r
2022-08-11,283200\r
2022-08-13,273600\r
2022-08-18,253500\r
2022-08-28,219700\r
2022-09-05,219900\r
2022-09-10,196700\r
2022-09-12,196700\r
2022-09-15,196700\r
2022-09-20,191000\r
2022-09-22,175900\r
2022-10-02,171400\r
2022-10-05,166800\r
2022-10-07,163500\r
2022-10-12,163500\r
2022-10-15,163200\r
2022-10-17,161300\r
2022-10-22,155300\r
2022-10-30,158300\r
2022-11-01,158300\r
2022-11-06,163300\r
2022-11-11,156100\r
2022-11-16,150700\r
2022-12-14,238600\r
2022-12-21,253300\r
2022-12-24,249300\r
2023-01-10,267400\r
2023-01-18,315800\r
2023-01-20,315800\r
2023-02-04,347400\r
2023-02-09,344900\r
2023-02-12,345800\r
2023-02-14,345900\r
2023-02-17,346200\r
2023-02-19,346200\r
2023-02-24,345800\r
2023-04-05,363500\r
2023-04-08,363500\r
2023-04-10,363500\r
2023-04-20,356400\r
2023-05-05,361700\r
2023-05-10,361700\r
2023-05-28,380500\r
2023-05-30,375200\r
2023-06-02,375200\r
2023-06-04,375200\r
2023-06-09,396000\r
2023-06-24,392400\r
2023-06-27,392400\r
`;export{r as default};

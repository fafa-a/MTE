const r=`date,value\r
2017-01-04,667100\r
2017-01-07,674800\r
2017-01-14,670200\r
2017-02-03,721500\r
2017-02-06,717800\r
2017-02-16,736900\r
2017-02-23,739400\r
2017-02-26,725900\r
2017-03-05,728200\r
2017-03-08,717900\r
2017-03-15,730400\r
2017-03-18,730200\r
2017-03-28,737800\r
2017-04-04,742600\r
2017-04-07,740500\r
2017-04-14,743700\r
2017-04-17,740800\r
2017-04-24,734400\r
2017-05-04,733600\r
2017-05-07,739900\r
2017-05-14,739200\r
2017-05-17,739800\r
2017-05-24,745300\r
2017-05-27,742900\r
2017-06-03,747300\r
2017-06-06,740100\r
2017-06-13,731900\r
2017-06-16,716900\r
2017-06-23,720500\r
2017-06-26,698400\r
2017-06-29,660300\r
2017-07-01,670300\r
2017-07-03,667300\r
2017-07-04,667300\r
2017-07-06,667300\r
2017-07-08,660500\r
2017-07-11,648100\r
2017-07-13,645100\r
2017-07-18,641000\r
2017-07-19,628100\r
2017-07-21,630900\r
2017-07-23,618100\r
2017-07-24,613400\r
2017-07-26,616500\r
2017-07-28,604900\r
2017-07-29,607600\r
2017-07-31,597100\r
2017-08-02,590100\r
2017-08-03,591600\r
2017-08-05,583300\r
2017-08-07,573600\r
2017-08-12,569400\r
2017-08-15,552600\r
2017-08-17,537100\r
2017-08-18,524900\r
2017-08-20,531300\r
2017-08-22,522400\r
2017-08-23,530600\r
2017-08-25,519400\r
2017-08-27,506000\r
2017-08-30,506500\r
2017-09-01,493800\r
2017-09-02,477300\r
2017-09-04,477300\r
2017-09-06,484200\r
2017-09-07,456200\r
2017-09-09,465700\r
2017-09-11,452800\r
2017-09-12,452600\r
2017-09-14,431200\r
2017-09-17,431200\r
2017-09-19,431200\r
2017-09-21,423200\r
2017-09-24,424000\r
2017-09-26,424700\r
2017-09-27,424700\r
2017-09-29,424700\r
2017-10-04,423500\r
2017-10-06,419100\r
2017-10-07,390900\r
2017-10-09,389500\r
2017-10-11,389500\r
2017-10-12,389500\r
2017-10-14,389500\r
2017-10-16,381500\r
2017-10-17,384400\r
2017-10-19,384400\r
2017-10-21,385500\r
2017-10-22,385500\r
2017-10-24,368700\r
2017-10-26,369800\r
2017-10-27,366800\r
2017-10-31,345900\r
2017-11-01,342900\r
2017-11-03,336900\r
2017-11-06,335300\r
2017-11-08,335400\r
2017-11-10,335400\r
2017-11-18,320600\r
2017-11-20,308100\r
2017-11-21,308100\r
2017-11-23,302400\r
2017-11-26,308100\r
2017-11-28,308100\r
2017-11-30,302100\r
2017-12-01,302100\r
2017-12-03,302100\r
2017-12-05,306300\r
2017-12-13,317200\r
2017-12-16,316600\r
2017-12-18,316900\r
2017-12-20,316900\r
2017-12-21,316900\r
2017-12-23,288800\r
2017-12-28,305700\r
2018-01-02,332200\r
2018-01-04,332200\r
2018-01-05,332200\r
2018-01-09,378800\r
2018-01-12,378800\r
2018-01-14,378700\r
2018-01-17,378700\r
2018-01-19,378700\r
2018-01-27,419800\r
2018-01-29,419800\r
2018-02-04,419800\r
2018-02-11,530200\r
2018-02-13,530200\r
2018-02-14,530200\r
2018-02-16,530200\r
2018-02-18,526900\r
2018-02-21,526900\r
2018-03-13,717300\r
2018-03-16,717300\r
2018-03-23,735700\r
2018-03-25,734000\r
2018-03-26,734000\r
2018-03-30,734000\r
2018-03-31,734000\r
2018-04-02,736600\r
2018-04-05,730900\r
2018-04-07,730900\r
2018-04-12,730900\r
2018-04-17,670100\r
2018-04-19,745600\r
2018-04-20,745600\r
2018-04-22,735300\r
2018-04-24,740300\r
2018-04-25,740300\r
2018-04-27,735300\r
2018-04-29,739300\r
2018-04-30,735500\r
2018-05-07,740200\r
2018-05-19,770800\r
2018-05-20,770800\r
2018-05-22,770800\r
2018-05-24,770800\r
2018-05-25,770800\r
2018-05-29,771100\r
2018-06-01,757800\r
2018-06-03,768700\r
2018-06-08,768700\r
2018-06-09,755700\r
2018-06-16,751200\r
2018-06-18,751200\r
2018-06-19,751200\r
2018-06-21,768000\r
2018-06-23,766700\r
2018-06-26,751700\r
2018-06-29,765300\r
2018-07-01,744700\r
2018-07-03,747500\r
2018-07-04,748200\r
2018-07-06,741200\r
2018-07-08,737000\r
2018-07-09,737000\r
2018-07-11,738400\r
2018-07-13,735600\r
2018-07-18,732000\r
2018-07-19,727300\r
2018-07-23,721000\r
2018-07-24,721500\r
2018-07-26,714900\r
2018-07-28,711900\r
2018-07-29,706500\r
2018-07-31,701800\r
2018-08-02,704700\r
2018-08-03,687600\r
2018-08-05,692300\r
2018-08-07,684700\r
2018-08-08,691400\r
2018-08-10,677000\r
2018-08-12,654100\r
2018-08-15,649500\r
2018-08-17,641700\r
2018-08-18,641700\r
2018-08-20,643400\r
2018-08-22,653900\r
2018-08-23,650200\r
2018-08-25,650200\r
2018-08-27,627100\r
2018-08-28,627100\r
2018-08-30,630600\r
2018-09-01,622800\r
2018-09-07,622100\r
2018-09-09,622100\r
2018-09-11,596100\r
2018-09-12,574000\r
2018-09-14,585900\r
2018-09-16,585700\r
2018-09-17,585700\r
2018-09-19,585700\r
2018-09-21,577900\r
2018-09-22,606200\r
2018-09-24,566800\r
2018-09-26,561200\r
2018-09-29,561800\r
2018-10-02,541300\r
2018-10-04,552600\r
2018-10-09,546200\r
2018-10-14,559800\r
2018-10-19,561800\r
2018-10-21,573700\r
2018-10-22,573700\r
2018-10-24,575500\r
2018-10-26,570000\r
2018-11-01,555400\r
2018-11-15,627400\r
2018-11-16,627400\r
2018-11-20,627400\r
2018-11-28,653100\r
2018-12-01,653100\r
2018-12-03,690800\r
2018-12-05,671400\r
2018-12-06,671400\r
2018-12-08,676000\r
2018-12-10,680600\r
2018-12-11,680600\r
2018-12-15,678500\r
2018-12-23,680200\r
2018-12-25,701000\r
2018-12-26,695500\r
2018-12-28,705300\r
2019-01-04,652600\r
2019-01-05,652600\r
2019-01-07,723800\r
2019-01-09,723800\r
2019-01-10,723800\r
2019-01-12,682100\r
2019-01-14,687400\r
2019-01-15,687400\r
2019-01-22,685600\r
2019-01-24,685700\r
2019-01-25,685700\r
2019-01-27,685700\r
2019-01-29,692500\r
2019-02-13,680500\r
2019-02-14,678500\r
2019-02-16,683600\r
2019-02-18,686000\r
2019-02-23,686700\r
2019-02-26,688800\r
2019-02-28,688700\r
2019-03-01,704800\r
2019-03-03,704800\r
2019-03-05,692400\r
2019-03-08,721900\r
2019-03-10,721900\r
2019-03-11,737500\r
2019-03-13,737500\r
2019-03-16,731100\r
2019-03-18,731500\r
2019-03-20,727900\r
2019-03-21,727900\r
2019-03-23,727300\r
2019-03-25,711600\r
2019-03-28,710500\r
2019-03-30,709400\r
2019-03-31,709400\r
2019-04-05,697800\r
2019-04-07,697800\r
2019-04-09,691100\r
2019-04-10,649900\r
2019-04-12,649900\r
2019-04-14,649300\r
2019-04-15,730200\r
2019-04-17,730200\r
2019-04-19,689900\r
2019-04-27,726200\r
2019-04-29,726800\r
2019-04-30,704600\r
2019-05-02,725900\r
2019-05-04,725900\r
2019-05-07,737100\r
2019-05-09,736200\r
2019-05-10,736200\r
2019-05-14,743100\r
2019-05-15,747500\r
2019-05-24,761100\r
2019-05-29,768000\r
2019-06-01,765400\r
2019-06-03,759900\r
2019-06-04,759900\r
2019-06-06,759900\r
2019-06-09,760000\r
2019-06-11,760000\r
2019-06-13,756700\r
2019-06-16,768200\r
2019-06-18,770300\r
2019-06-19,770300\r
2019-06-21,751900\r
2019-06-23,751900\r
2019-06-26,752700\r
2019-06-28,743500\r
2019-06-29,743500\r
2019-07-01,748800\r
2019-07-03,743700\r
2019-07-04,748300\r
2019-07-06,726500\r
2019-07-08,720800\r
2019-07-09,720800\r
2019-07-11,720800\r
2019-07-13,713900\r
2019-07-14,722500\r
2019-07-16,710500\r
2019-07-18,710300\r
2019-07-19,710300\r
2019-07-21,702400\r
2019-07-23,687900\r
2019-07-24,688400\r
2019-07-26,685600\r
2019-07-29,697100\r
2019-07-31,687200\r
2019-08-02,676500\r
2019-08-03,676300\r
2019-08-05,685400\r
2019-08-08,687300\r
2019-08-10,672700\r
2019-08-12,677000\r
2019-08-13,677000\r
2019-08-15,668200\r
2019-08-18,677000\r
2019-08-20,678400\r
2019-08-25,657800\r
2019-08-27,645500\r
2019-08-28,645500\r
2019-08-30,645900\r
2019-09-01,620000\r
2019-09-02,620000\r
2019-09-04,605300\r
2019-09-06,582500\r
2019-09-09,582000\r
2019-09-11,570500\r
2019-09-12,562300\r
2019-09-14,562300\r
2019-09-16,550700\r
2019-09-17,559600\r
2019-09-19,559600\r
2019-09-21,542700\r
2019-09-24,552700\r
2019-09-26,536600\r
2019-09-27,529200\r
2019-09-29,554100\r
2019-10-01,532700\r
2019-10-02,549700\r
2019-10-04,549700\r
2019-10-06,549700\r
2019-10-07,549700\r
2019-10-11,517600\r
2019-10-14,520800\r
2019-10-16,502700\r
2019-10-17,519200\r
2019-10-19,519200\r
2019-10-26,479600\r
2019-10-27,519200\r
2019-11-08,471900\r
2019-12-08,741300\r
2019-12-10,741300\r
2019-12-13,741300\r
2019-12-15,736200\r
2019-12-21,736600\r
2019-12-23,736600\r
2019-12-25,695300\r
2019-12-28,683500\r
2019-12-30,685800\r
2020-01-04,728400\r
2020-01-05,728400\r
2020-01-09,701700\r
2020-01-10,701700\r
2020-01-12,700200\r
2020-01-14,699700\r
2020-01-17,704700\r
2020-01-22,706200\r
2020-01-24,706200\r
2020-01-25,715100\r
2020-01-27,719900\r
2020-02-01,745000\r
2020-02-04,737100\r
2020-02-06,724100\r
2020-02-08,725800\r
2020-02-11,725800\r
2020-02-13,709600\r
2020-02-14,709600\r
2020-02-16,713600\r
2020-02-18,713400\r
2020-02-19,713400\r
2020-02-21,719700\r
2020-02-24,726700\r
2020-02-26,735000\r
2020-02-28,719300\r
2020-03-04,717700\r
2020-03-07,717700\r
2020-03-14,693700\r
2020-03-15,693100\r
2020-03-19,694000\r
2020-03-20,669000\r
2020-03-22,669000\r
2020-03-24,692900\r
2020-03-29,692900\r
2020-04-01,733200\r
2020-04-03,733200\r
2020-04-04,733200\r
2020-04-06,737700\r
2020-04-08,712200\r
2020-04-09,737700\r
2020-04-11,713900\r
2020-04-14,714000\r
2020-04-23,683800\r
2020-04-24,697000\r
2020-04-26,697000\r
2020-05-03,702600\r
2020-05-04,702600\r
2020-05-06,702600\r
2020-05-08,702600\r
2020-05-09,742200\r
2020-05-11,742200\r
2020-05-13,707500\r
2020-05-14,707500\r
2020-05-18,707500\r
2020-05-21,733600\r
2020-05-23,751100\r
2020-05-24,751100\r
2020-05-26,731400\r
2020-05-28,731600\r
2020-05-31,731600\r
2020-06-03,731600\r
2020-06-05,738000\r
2020-06-08,743600\r
2020-06-10,743600\r
2020-06-12,736900\r
2020-06-15,756100\r
2020-06-17,712100\r
2020-06-18,712100\r
2020-06-20,739500\r
2020-06-22,710500\r
2020-06-23,710500\r
2020-06-25,720200\r
2020-06-27,708600\r
2020-06-28,708600\r
2020-06-30,708600\r
2020-07-02,699800\r
2020-07-05,689400\r
2020-07-07,682000\r
2020-07-08,687800\r
2020-07-10,687800\r
2020-07-12,674000\r
2020-07-15,669800\r
2020-07-17,671500\r
2020-07-20,664300\r
2020-07-22,654100\r
2020-07-23,647500\r
2020-07-25,646800\r
2020-07-27,638200\r
2020-07-28,633700\r
2020-07-30,624400\r
2020-08-01,597400\r
2020-08-02,585500\r
2020-08-04,585500\r
2020-08-06,582600\r
2020-08-07,574900\r
2020-08-09,575500\r
2020-08-11,556000\r
2020-08-12,528300\r
2020-08-14,536700\r
2020-08-16,525400\r
2020-08-17,520200\r
2020-08-19,527100\r
2020-08-21,510000\r
2020-08-22,526600\r
2020-08-24,523800\r
2020-08-26,504800\r
2020-08-27,502600\r
2020-08-29,502600\r
2020-08-31,475900\r
2020-09-01,459900\r
2020-09-03,459900\r
2020-09-05,435000\r
2020-09-06,441200\r
2020-09-08,441200\r
2020-09-13,417900\r
2020-09-15,417900\r
2020-09-16,424500\r
2020-09-18,422600\r
2020-09-20,422600\r
2020-09-21,444800\r
2020-09-23,433200\r
2020-09-25,433200\r
2020-09-26,433200\r
2020-09-28,433200\r
2020-09-30,433100\r
2020-10-03,434300\r
2020-10-08,427800\r
2020-10-10,425800\r
2020-10-13,425800\r
2020-10-16,423700\r
2020-10-18,423700\r
2020-10-25,435200\r
2020-10-28,424000\r
2020-11-05,424000\r
2020-11-07,423900\r
2020-11-09,450200\r
2020-11-14,469000\r
2020-11-15,469000\r
2020-11-17,454600\r
2020-11-19,455400\r
2020-11-22,447500\r
2020-11-24,448900\r
2020-11-25,434300\r
2020-11-27,453500\r
2020-12-02,453500\r
2020-12-07,483900\r
2020-12-12,483900\r
2020-12-19,653000\r
2020-12-25,653000\r
2020-12-29,720500\r
2020-12-30,720500\r
2021-01-03,738800\r
2021-01-04,738800\r
2021-01-06,744900\r
2021-01-08,744900\r
2021-01-11,744500\r
2021-01-13,735100\r
2021-01-14,739500\r
2021-01-16,725100\r
2021-01-18,718100\r
2021-01-19,718100\r
2021-01-23,717700\r
2021-01-24,724100\r
2021-01-26,723200\r
2021-02-15,711700\r
2021-02-17,711700\r
2021-02-20,724000\r
2021-02-25,724000\r
2021-02-27,714500\r
2021-02-28,714500\r
2021-03-02,718400\r
2021-03-04,724800\r
2021-03-05,724800\r
2021-03-09,724800\r
2021-03-10,724800\r
2021-03-17,725500\r
2021-03-19,725500\r
2021-03-20,725500\r
2021-03-22,733700\r
2021-03-24,733100\r
2021-03-25,733100\r
2021-03-27,732900\r
2021-03-29,744600\r
2021-03-30,744600\r
2021-04-01,741900\r
2021-04-03,739000\r
2021-04-04,740600\r
2021-04-06,726700\r
2021-04-08,724100\r
2021-04-09,724300\r
2021-04-11,724300\r
2021-04-13,722000\r
2021-04-14,723800\r
2021-04-16,723800\r
2021-04-23,731100\r
2021-04-24,731100\r
2021-04-26,741100\r
2021-05-03,733800\r
2021-05-04,743500\r
2021-05-06,740300\r
2021-05-08,741800\r
2021-05-09,741800\r
2021-05-13,744900\r
2021-05-14,744900\r
2021-05-16,744900\r
2021-05-18,754700\r
2021-05-21,744300\r
2021-05-26,745800\r
2021-05-28,745800\r
2021-05-29,745800\r
2021-05-31,745800\r
2021-06-03,745800\r
2021-06-05,745800\r
2021-06-10,765000\r
2021-06-12,765200\r
2021-06-13,765200\r
2021-06-15,765000\r
2021-06-17,765000\r
2021-06-18,765000\r
2021-06-22,759900\r
2021-06-25,739100\r
2021-06-27,743800\r
2021-06-28,743800\r
2021-06-30,738800\r
2021-07-02,739000\r
2021-07-03,739000\r
2021-07-05,718500\r
2021-07-07,711800\r
2021-07-08,711900\r
2021-07-10,700900\r
2021-07-12,695200\r
2021-07-13,705600\r
2021-07-15,700600\r
2021-07-17,700900\r
2021-07-18,695800\r
2021-07-20,695800\r
2021-07-22,694700\r
2021-07-25,689800\r
2021-07-27,662500\r
2021-07-28,661400\r
2021-07-30,640200\r
2021-08-01,640100\r
2021-08-02,640200\r
2021-08-04,640200\r
2021-08-06,632600\r
2021-08-07,611200\r
2021-08-09,618400\r
2021-08-11,606700\r
2021-08-14,601000\r
2021-08-16,592500\r
2021-08-17,595600\r
2021-08-19,595600\r
2021-08-21,572400\r
2021-08-22,562100\r
2021-08-24,562100\r
2021-08-26,552600\r
2021-08-27,554000\r
2021-08-29,539500\r
2021-08-31,539500\r
2021-09-01,515900\r
2021-09-05,516100\r
2021-09-06,506500\r
2021-09-08,506500\r
2021-09-10,506700\r
2021-09-11,501100\r
2021-09-13,501600\r
2021-09-18,469300\r
2021-09-20,463100\r
2021-09-21,463100\r
2021-09-23,461400\r
2021-09-25,454900\r
2021-09-28,449700\r
2021-09-30,443400\r
2021-10-01,440700\r
2021-10-03,439900\r
2021-10-05,429700\r
2021-10-06,429800\r
2021-10-08,429800\r
2021-10-10,416700\r
2021-10-11,410700\r
2021-10-13,410800\r
2021-10-15,403700\r
2021-10-16,395900\r
2021-10-18,395900\r
2021-10-20,396800\r
2021-10-23,388500\r
2021-10-25,380900\r
2021-10-26,381800\r
2021-11-04,371200\r
2021-11-05,371200\r
2021-11-07,371200\r
2021-11-12,371200\r
2021-11-14,371200\r
2021-11-19,375800\r
2021-11-20,375800\r
2021-11-24,375800\r
2021-11-27,375800\r
2021-12-07,403200\r
2021-12-09,403200\r
2021-12-12,431600\r
2021-12-14,422300\r
2021-12-17,426200\r
2021-12-19,444600\r
2021-12-20,444600\r
2021-12-22,444600\r
2022-01-08,482300\r
2022-01-09,482300\r
2022-01-11,486700\r
2022-01-13,484800\r
2022-01-14,484800\r
2022-01-16,489900\r
2022-01-18,489600\r
2022-01-21,490000\r
2022-01-23,496900\r
2022-01-24,493600\r
2022-01-28,494400\r
2022-01-29,494400\r
2022-01-31,494400\r
2022-02-02,496700\r
2022-02-05,498900\r
2022-02-07,495800\r
2022-02-08,501900\r
2022-02-10,500100\r
2022-02-12,513100\r
2022-02-13,512600\r
2022-02-15,512600\r
2022-02-17,512600\r
2022-02-18,518500\r
2022-02-20,516900\r
2022-02-22,516500\r
2022-02-23,529900\r
2022-02-25,529900\r
2022-02-27,513100\r
2022-02-28,513100\r
2022-03-02,503200\r
2022-03-05,488000\r
2022-03-07,506300\r
2022-03-09,520300\r
2022-03-10,513100\r
2022-03-14,531800\r
2022-03-22,504300\r
2022-03-24,519200\r
2022-03-25,519200\r
2022-03-27,519200\r
2022-03-29,512600\r
2022-04-01,512600\r
2022-04-03,516900\r
2022-04-08,539000\r
2022-04-09,539000\r
2022-04-11,552100\r
2022-04-13,552100\r
2022-04-14,552100\r
2022-04-16,544900\r
2022-04-18,544900\r
2022-04-23,606300\r
2022-04-26,606200\r
2022-04-28,634000\r
2022-04-29,634000\r
2022-05-01,634000\r
2022-05-04,633900\r
2022-05-11,678000\r
2022-05-13,683000\r
2022-05-14,683000\r
2022-05-16,683000\r
2022-05-18,672400\r
2022-05-19,672400\r
2022-05-21,679400\r
2022-05-23,676600\r
2022-05-26,680200\r
2022-05-28,680200\r
2022-05-29,688000\r
2022-05-31,688000\r
2022-06-02,687900\r
2022-06-05,680600\r
2022-06-07,676100\r
2022-06-10,656700\r
2022-06-12,660500\r
2022-06-13,649300\r
2022-06-15,649300\r
2022-06-17,649400\r
2022-06-18,637200\r
2022-06-20,638400\r
2022-06-25,616700\r
2022-06-27,619400\r
2022-07-02,595700\r
2022-07-03,595700\r
2022-07-05,583000\r
2022-07-07,580700\r
2022-07-08,580700\r
2022-07-12,576100\r
2022-07-13,579400\r
2022-07-15,568300\r
2022-07-20,559000\r
2022-07-22,547600\r
2022-07-23,547600\r
2022-07-25,547600\r
2022-07-27,528300\r
2022-07-30,528700\r
2022-08-01,522400\r
2022-08-02,503100\r
2022-08-04,503700\r
2022-08-06,493500\r
2022-08-07,493500\r
2022-08-09,485700\r
2022-08-11,481200\r
2022-08-12,484000\r
2022-08-14,484000\r
2022-08-16,477000\r
2022-08-19,487800\r
2022-08-21,487800\r
2022-08-22,424800\r
2022-08-24,427900\r
2022-08-26,427900\r
2022-08-27,427900\r
2022-08-29,427900\r
2022-09-01,424700\r
2022-09-03,424700\r
2022-09-05,397700\r
2022-09-10,513700\r
2022-09-11,513700\r
2022-09-13,374700\r
2022-09-15,389200\r
2022-09-16,373900\r
2022-09-18,373900\r
2022-09-20,372700\r
2022-09-23,366700\r
2022-09-28,331700\r
2022-10-01,331000\r
2022-10-03,331000\r
2022-10-13,327600\r
2022-10-15,314700\r
2022-10-16,321100\r
2022-10-18,302400\r
2022-10-20,302400\r
2022-10-25,292700\r
2022-10-28,290400\r
2022-10-30,281700\r
2022-11-02,281700\r
2022-11-04,282100\r
2022-11-05,278900\r
2022-11-09,282900\r
2022-11-10,261700\r
2022-11-14,261700\r
2022-11-17,256600\r
2022-11-24,289500\r
2022-11-27,280700\r
2022-11-30,302300\r
2022-12-02,302300\r
2022-12-04,300400\r
2022-12-05,329300\r
2022-12-07,317800\r
2022-12-09,330100\r
2022-12-10,330100\r
2022-12-17,344800\r
2022-12-22,344300\r
2022-12-24,344300\r
2022-12-25,344300\r
2022-12-27,351600\r
2022-12-29,365100\r
2023-01-03,378600\r
2023-01-04,378600\r
2023-01-08,395200\r
2023-01-09,395200\r
2023-01-18,395200\r
2023-01-31,485100\r
2023-02-02,491200\r
2023-02-05,482400\r
2023-02-07,494900\r
2023-02-08,494900\r
2023-02-10,494800\r
2023-02-12,502700\r
2023-02-13,524400\r
2023-02-15,500700\r
2023-02-17,524300\r
2023-02-20,501200\r
2023-02-22,501800\r
2023-02-23,525600\r
2023-02-27,553100\r
2023-03-02,553100\r
2023-03-07,651900\r
2023-03-09,636200\r
2023-03-10,653900\r
2023-03-12,635300\r
2023-03-14,641300\r
2023-03-17,635700\r
2023-03-20,633900\r
2023-03-22,643500\r
2023-03-24,658400\r
2023-03-25,657400\r
2023-03-27,662400\r
2023-03-30,662400\r
2023-04-03,668100\r
2023-04-04,692200\r
2023-04-06,675200\r
2023-04-08,692200\r
2023-04-09,692200\r
2023-04-13,692200\r
2023-04-14,673200\r
2023-04-16,688500\r
2023-04-18,688300\r
2023-04-19,688300\r
2023-04-21,688300\r
2023-04-23,691800\r
2023-04-24,691800\r
2023-04-26,694800\r
2023-04-28,696000\r
2023-05-03,696000\r
2023-05-04,690100\r
2023-05-06,730400\r
2023-05-11,730000\r
2023-05-14,730000\r
2023-05-16,730000\r
2023-05-26,758000\r
2023-05-28,760500\r
2023-05-29,760500\r
2023-05-31,759100\r
2023-06-02,759800\r
2023-06-03,756600\r
2023-06-05,756600\r
2023-06-15,757100\r
2023-06-17,767500\r
2023-06-18,767500\r
2023-06-20,764000\r
2023-06-23,764000\r
2023-06-25,757800\r
2023-06-27,751500\r
2023-06-28,750100\r
2023-06-30,494100\r
2023-07-02,735900\r
2023-07-03,735900\r
2023-07-05,736700\r
2023-07-07,728000\r
2023-07-08,728000\r
2023-07-10,728400\r
2023-07-12,720700\r
2023-07-13,721300\r
2023-07-15,711900\r
2023-07-17,702700\r
2023-07-18,703000\r
2023-07-20,695200\r
2023-07-22,687600\r
2023-07-23,690400\r
2023-07-25,675000\r
2023-07-27,663300\r
2023-07-28,663300\r
2023-07-30,659200\r
2023-08-01,663700\r
2023-08-02,660200\r
2023-08-06,650300\r
2023-08-07,661100\r
2023-08-09,616100\r
2023-08-11,591200\r
2023-08-12,591200\r
2023-08-14,591200\r
2023-08-16,598100\r
2023-08-17,593700\r
2023-08-19,595900\r
2023-08-21,587200\r
2023-08-22,579700\r
2023-08-24,579700\r
2023-08-26,571100\r
2023-08-29,573700\r
2023-08-31,560200\r
2023-09-03,545900\r
2023-09-05,544300\r
2023-09-06,536700\r
2023-09-08,537100\r
2023-09-10,533000\r
2023-09-11,535400\r
`;export{r as default};

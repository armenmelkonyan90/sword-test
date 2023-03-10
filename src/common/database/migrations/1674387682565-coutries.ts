import { MigrationInterface, QueryRunner } from 'typeorm';

export class coutries1674387682565 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('1','Andorra','ad','and','Europe','376','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('2','United Arab Emirates','ae','are','Asia','971','Dirham'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('3','Afghanistan','af','afg','Asia','93','Afghani'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('4','Antigua and Barbuda','ag','atg','North America','1-268','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('5','Anguilla','ai','aia','North America','1-264','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('6','Albania','al','alb','Europe','355','Lek'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('7','Armenia','am','arm','Asia','374','Dram'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('8','Angola','ao','ago','Africa','244','Kwanza'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('9','Antarctica','aq','ata','Antarctica','672',''); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('10','Argentina','ar','arg','South America','54','Peso'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('11','American Samoa','as','asm','Oceania','1-684','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('12','Austria','at','aut','Europe','43','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('13','Australia','au','aus','Oceania','61','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('14','Aruba','aw','abw','North America','297','Guilder'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('15','Azerbaijan','az','aze','Asia','994','Manat'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('16','Bosnia and Herzegovina','ba','bih','Europe','387','Marka'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('17','Barbados','bb','brb','North America','1-246','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('18','Bangladesh','bd','bgd','Asia','880','Taka'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('19','Belgium','be','bel','Europe','32','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('20','Burkina Faso','bf','bfa','Africa','226','Franc'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('21','Bulgaria','bg','bgr','Europe','359','Lev'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('22','Bahrain','bh','bhr','Asia','973','Dinar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('23','Burundi','bi','bdi','Africa','257','Franc'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('24','Benin','bj','ben','Africa','229','Franc'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('25','Saint Barthelemy','bl','blm','North America','590','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('26','Bermuda','bm','bmu','North America','1-441','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('27','Brunei','bn','brn','Asia','673','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('28','Bolivia','bo','bol','South America','591','Boliviano'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('29','Brazil','br','bra','South America','55','Real'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('30','Bahamas','bs','bhs','North America','1-242','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('31','Bhutan','bt','btn','Asia','975','Ngultrum'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('32','Botswana','bw','bwa','Africa','267','Pula'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('33','Belarus','by','blr','Europe','375','Ruble'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('34','Belize','bz','blz','North America','501','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('35','Canada','ca','can','North America','1','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('36','Cocos Islands','cc','cck','Asia','61','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('37','Democratic Republic of the Congo','cd','cod','Africa','243','Franc'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('38','Central African Republic','cf','caf','Africa','236','Franc'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('39','Republic of the Congo','cg','cog','Africa','242','Franc'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('40','Switzerland','ch','che','Europe','41','Franc'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('41','Cook Islands','ck','cok','Oceania','682','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('42','Chile','cl','chl','South America','56','Peso'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('43','Cameroon','cm','cmr','Africa','237','Franc'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('44','China','cn','chn','Asia','86','Yuan Renminbi'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('45','Colombia','co','col','South America','57','Peso'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('46','Costa Rica','cr','cri','North America','506','Colon'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('47','Cuba','cu','cub','North America','53','Peso'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('48','Cape Verde','cv','cpv','Africa','238','Escudo'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('49','Curacao','cw','cuw','North America','599','Guilder'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('50','Christmas Island','cx','cxr','Asia','61','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('51','Cyprus','cy','cyp','Europe','357','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('52','Czech Republic','cz','cze','Europe','420','Koruna'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('53','Germany','de','deu','Europe','49','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('54','Djibouti','dj','dji','Africa','253','Franc'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('55','Denmark','dk','dnk','Europe','45','Krone'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('56','Dominica','dm','dma','North America','1-767','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('57','Dominican Republic','do','dom','North America','1-809, 1-829, 1-849','Peso'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('58','Algeria','dz','dza','Africa','213','Dinar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('59','Ecuador','ec','ecu','South America','593','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('60','Estonia','ee','est','Europe','372','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('61','Egypt','eg','egy','Africa','20','Pound'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('62','Western Sahara','eh','esh','Africa','212','Dirham'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('63','Eritrea','er','eri','Africa','291','Nakfa'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('64','Spain','es','esp','Europe','34','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('65','Ethiopia','et','eth','Africa','251','Birr'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('66','Finland','fi','fin','Europe','358','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('67','Fiji','fj','fji','Oceania','679','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('68','Falkland Islands','fk','flk','South America','500','Pound'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('69','Faroe Islands','fo','fro','Europe','298','Krone'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('70','France','fr','fra','Europe','33','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('71','Gabon','ga','gab','Africa','241','Franc'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('72','United Kingdom','gb','gbr','Europe','44','Pound'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('73','Grenada','gd','grd','North America','1-473','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('74','Georgia','ge','geo','Asia','995','Lari'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('75','Guernsey','gg','ggy','Europe','44-1481','Pound'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('76','Ghana','gh','gha','Africa','233','Cedi'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('77','Gibraltar','gi','gib','Europe','350','Pound'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('78','Greenland','gl','grl','North America','299','Krone'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('79','Gambia','gm','gmb','Africa','220','Dalasi'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('80','Guinea','gn','gin','Africa','224','Franc'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('81','Equatorial Guinea','gq','gnq','Africa','240','Franc'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('82','Greece','gr','grc','Europe','30','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('83','Guatemala','gt','gtm','North America','502','Quetzal'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('84','Guam','gu','gum','Oceania','1-671','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('85','Guinea-Bissau','gw','gnb','Africa','245','Franc'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('86','Guyana','gy','guy','South America','592','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('87','Hong Kong','hk','hkg','Asia','852','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('88','Honduras','hn','hnd','North America','504','Lempira'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('89','Croatia','hr','hrv','Europe','385','Kuna'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('90','Haiti','ht','hti','North America','509','Gourde'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('91','Hungary','hu','hun','Europe','36','Forint'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('92','Indonesia','id','idn','Asia','62','Rupiah'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('93','Ireland','ie','irl','Europe','353','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('94','Israel','il','isr','Asia','972','Shekel'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('95','Isle of Man','im','imn','Europe','44-1624','Pound'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('96','India','in','ind','Asia','91','Rupee'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('97','British Indian Ocean Territory','io','iot','Asia','246','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('98','Iraq','iq','irq','Asia','964','Dinar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('99','Iran','ir','irn','Asia','98','Rial'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('100','Iceland','is','isl','Europe','354','Krona'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('101','Italy','it','ita','Europe','39','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('102','Jersey','je','jey','Europe','44-1534','Pound'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('103','Jamaica','jm','jam','North America','1-876','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('104','Jordan','jo','jor','Asia','962','Dinar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('105','Japan','jp','jpn','Asia','81','Yen'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('106','Kenya','ke','ken','Africa','254','Shilling'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('107','Kyrgyzstan','kg','kgz','Asia','996','Som'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('108','Cambodia','kh','khm','Asia','855','Riels'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('109','Kiribati','ki','kir','Oceania','686','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('110','Comoros','km','com','Africa','269','Franc'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('111','Saint Kitts and Nevis','kn','kna','North America','1-869','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('112','North Korea','kp','prk','Asia','850','Won'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('113','South Korea','kr','kor','Asia','82','Won'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('114','Kuwait','kw','kwt','Asia','965','Dinar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('115','Cayman Islands','ky','cym','North America','1-345','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('116','Kazakhstan','kz','kaz','Asia','7','Tenge'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('117','Laos','la','lao','Asia','856','Kip'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('118','Lebanon','lb','lbn','Asia','961','Pound'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('119','Saint Lucia','lc','lca','North America','1-758','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('120','Liechtenstein','li','lie','Europe','423','Franc'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('121','Sri Lanka','lk','lka','Asia','94','Rupee'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('122','Liberia','lr','lbr','Africa','231','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('123','Lesotho','ls','lso','Africa','266','Loti'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('124','Lithuania','lt','ltu','Europe','370','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('125','Luxembourg','lu','lux','Europe','352','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('126','Latvia','lv','lva','Europe','371','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('127','Libya','ly','lby','Africa','218','Dinar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('128','Morocco','ma','mar','Africa','212','Dirham'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('129','Monaco','mc','mco','Europe','377','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('130','Moldova','md','mda','Europe','373','Leu'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('131','Montenegro','me','mne','Europe','382','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('132','Saint Martin','mf','maf','North America','590','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('133','Madagascar','mg','mdg','Africa','261','Ariary'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('134','Marshall Islands','mh','mhl','Oceania','692','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('135','Macedonia','mk','mkd','Europe','389','Denar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('136','Mali','ml','mli','Africa','223','Franc'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('137','Myanmar','mm','mmr','Asia','95','Kyat'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('138','Mongolia','mn','mng','Asia','976','Tugrik'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('139','Macau','mo','mac','Asia','853','Pataca'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('140','Northern Mariana Islands','mp','mnp','Oceania','1-670','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('141','Mauritania','mr','mrt','Africa','222','Ouguiya'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('142','Montserrat','ms','msr','North America','1-664','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('143','Malta','mt','mlt','Europe','356','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('144','Mauritius','mu','mus','Africa','230','Rupee'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('145','Maldives','mv','mdv','Asia','960','Rufiyaa'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('146','Malawi','mw','mwi','Africa','265','Kwacha'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('147','Mexico','mx','mex','North America','52','Peso'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('148','Malaysia','my','mys','Asia','60','Ringgit'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('149','Mozambique','mz','moz','Africa','258','Metical'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('150','Namibia','na','nam','Africa','264','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('151','New Caledonia','nc','ncl','Oceania','687','Franc'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('152','Niger','ne','ner','Africa','227','Franc'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('153','Nigeria','ng','nga','Africa','234','Naira'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('154','Nicaragua','ni','nic','North America','505','Cordoba'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('155','Netherlands','nl','nld','Europe','31','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('156','Norway','no','nor','Europe','47','Krone'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('157','Nepal','np','npl','Asia','977','Rupee'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('158','Nauru','nr','nru','Oceania','674','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('159','Niue','nu','niu','Oceania','683','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('160','New Zealand','nz','nzl','Oceania','64','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('161','Oman','om','omn','Asia','968','Rial'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('162','Panama','pa','pan','North America','507','Balboa'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('163','Peru','pe','per','South America','51','Sol'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('164','French Polynesia','pf','pyf','Oceania','689','Franc'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('165','Papua New Guinea','pg','png','Oceania','675','Kina'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('166','Philippines','ph','phl','Asia','63','Peso'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('167','Pakistan','pk','pak','Asia','92','Rupee'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('168','Poland','pl','pol','Europe','48','Zloty'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('169','Saint Pierre and Miquelon','pm','spm','North America','508','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('170','Pitcairn','pn','pcn','Oceania','64','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('171','Puerto Rico','pr','pri','North America','1-787, 1-939','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('172','Palestine','ps','pse','Asia','970','Shekel'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('173','Portugal','pt','prt','Europe','351','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('174','Palau','pw','plw','Oceania','680','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('175','Paraguay','py','pry','South America','595','Guarani'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('176','Qatar','qa','qat','Asia','974','Rial'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('177','Romania','ro','rou','Europe','40','Leu'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('178','Serbia','rs','srb','Europe','381','Dinar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('179','Russia','ru','rus','Europe','7','Ruble'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('180','Rwanda','rw','rwa','Africa','250','Franc'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('181','Saudi Arabia','sa','sau','Asia','966','Rial'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('182','Solomon Islands','sb','slb','Oceania','677','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('183','Seychelles','sc','syc','Africa','248','Rupee'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('184','Sudan','sd','sdn','Africa','249','Pound'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('185','Sweden','se','swe','Europe','46','Krona'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('186','Singapore','sg','sgp','Asia','65','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('187','Saint Helena','sh','shn','Africa','290','Pound'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('188','Slovenia','si','svn','Europe','386','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('189','Svalbard and Jan Mayen','sj','sjm','Europe','47','Krone'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('190','Slovakia','sk','svk','Europe','421','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('191','Sierra Leone','sl','sle','Africa','232','Leone'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('192','San Marino','sm','smr','Europe','378','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('193','Senegal','sn','sen','Africa','221','Franc'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('194','Somalia','so','som','Africa','252','Shilling'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('195','Suriname','sr','sur','South America','597','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('196','South Sudan','ss','ssd','Africa','211','Pound'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('197','Sao Tome and Principe','st','stp','Africa','239','Dobra'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('198','El Salvador','sv','slv','North America','503','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('199','Sint Maarten','sx','sxm','North America','1-721','Guilder'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('200','Syria','sy','syr','Asia','963','Pound'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('201','Swaziland','sz','swz','Africa','268','Lilangeni'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('202','Turks and Caicos Islands','tc','tca','North America','1-649','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('203','Chad','td','tcd','Africa','235','Franc'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('204','Togo','tg','tgo','Africa','228','Franc'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('205','Thailand','th','tha','Asia','66','Baht'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('206','Tajikistan','tj','tjk','Asia','992','Somoni'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('207','Tokelau','tk','tkl','Oceania','690','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('208','East Timor','tl','tls','Oceania','670','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('209','Turkmenistan','tm','tkm','Asia','993','Manat'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('210','Tunisia','tn','tun','Africa','216','Dinar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('211','Tonga','to','ton','Oceania','676','Pa''anga'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('212','Turkey','tr','tur','Asia','90','Lira'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('213','Trinidad and Tobago','tt','tto','North America','1-868','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('214','Tuvalu','tv','tuv','Oceania','688','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('215','Taiwan','tw','twn','Asia','886','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('216','Tanzania','tz','tza','Africa','255','Shilling'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('217','Ukraine','ua','ukr','Europe','380','Hryvnia'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('218','Uganda','ug','uga','Africa','256','Shilling'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('219','United States','us','usa','North America','1','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('220','Uruguay','uy','ury','South America','598','Peso'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('221','Uzbekistan','uz','uzb','Asia','998','Som'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('222','Vatican','va','vat','Europe','379','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('223','Saint Vincent and the Grenadines','vc','vct','North America','1-784','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('224','Venezuela','ve','ven','South America','58','Bolivar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('225','British Virgin Islands','vg','vgb','North America','1-284','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('226','U.S. Virgin Islands','vi','vir','North America','1-340','Dollar'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('227','Vietnam','vn','vnm','Asia','84','Dong'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('228','Vanuatu','vu','vut','Oceania','678','Vatu'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('229','Wallis and Futuna','wf','wlf','Oceania','681','Franc'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('230','Samoa','ws','wsm','Oceania','685','Tala'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('231','Yemen','ye','yem','Asia','967','Rial'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('232','Mayotte','yt','myt','Africa','262','Euro'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('233','South Africa','za','zaf','Africa','27','Rand'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('234','Zambia','zm','zmb','Africa','260','Kwacha'); 
      INSERT INTO public.countries(id,name,alpha2,alpha3,continent,phone_code,currency) VALUES('235','Zimbabwe','zw','zwe','Africa','263','Dollar'); 
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM public.countries;`);
  }
}

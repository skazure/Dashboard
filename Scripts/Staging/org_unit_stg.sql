use PROJECTDB
go

if exists 
  (select * from sys.tables 
   where name = 'ORG_UNIT_STG')
drop table STAGING.ORG_UNIT_STG
go

create table STAGING.ORG_UNIT_STG
( 
DAT_PER     date not null,
HOST_OU_ID	INT not null 	,
OE_IDTFR	varchar(50)	,
OE_ID_INTERN	varchar(50)	,
OE_IDTFR_MGR	varchar(50)	,
OE_DESCRIPTION	varchar(250)	,
ZIP_CD	varchar(50)	,
CITY	varchar(50)	,
LEVEL 	varchar(250)	
)
go
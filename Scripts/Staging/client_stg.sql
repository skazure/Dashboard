use PROJECTDB
go

if exists 
  (select * from sys.tables 
   where name = 'CLIENT_STG')
drop table STAGING.CLIENT_STG
go

create table STAGING.CLIENT_STG
( 
DAT_PER date not null,
CIF_NBR	int not null 	,
LAST_NAME	varchar(50)	,
FIRST_NAME	varchar(50)	,
ADDRESS	varchar(500)	,
DOB	date	,
FIRST_ACC_OPENING_DT	date	,
LAST_ACC_CLOSING_DT	date	,
BRANCH_CD	varchar(50)	,
ZIP_CD	varchar(50)	,
STATE	varchar(50)	,
COUNTRY	varchar(50)	,
RM_PID	varchar(50)	,
CUST_SEG varchar(50),		
DOMICILE	varchar(50)	,
NATIONALITY	varchar(50)	
)
go

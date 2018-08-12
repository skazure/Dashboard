use PROJECTDB
go


if exists 
  (select * from sys.tables 
   where name = 'ACCT_STG')
drop table STAGING.ACCT_STG
go

create table STAGING.ACCT_STG
( 
DAT_PER date not null,
ACCT_ID	int	not null ,
CIF_NBR	varchar(50)	,
ACCT_TYPE	varchar(50)	,
ACCT_BAL	int	,
TRX_DT	date	,
TRX_AMT	int	,
TRX_TYP	varchar(50)	,
ACCT_OPN_DATE	date	,
ACCT_CLOSE_DATE	date	
)
go

use PROJECTDB
go

if exists 
  (select * from sys.tables 
   where name = 'KPI_LIST_STG')
drop table STAGING.KPI_LIST_STG
go

create table STAGING.KPI_LIST_STG
( 
DAT_PER     date not null,
KRI_ID	    int not null,
KRI_CD	    varchar(50),
KRI_NAME	varchar(100)
)
go
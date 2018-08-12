use PROJECTDB
go

if exists 
  (select * from sys.tables 
   where name = 'SCORES_STG')
drop table STAGING.SCORES_STG
go

create table STAGING.SCORES_STG
( 
DAT_PER date not null,
KRI_CD	varchar(50) not null,
REGEX	varchar(500)
)
go
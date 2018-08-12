use PROJECTDB
	go

	if exists 
	  (select * from sys.tables 	
	   where name = 'RM_STG')
	drop table STAGING.RM_STG
	go

	create table STAGING.RM_STG
	( 
	DAT_PER date not null,
	RM_PID	int not null	,
	FIRST_NAME	varchar(50)	,
	LAST_NAME	varchar(50)	,
	OU_ID	varchar(50)	,
	EMAIL_ADDRESS	varchar(50)	,
	ADDRESS	varchar(50)	,
	FIRST_WORKING_DAY	date	,
	LAST_WORKING_DAY	date	,
	DEPUTY_RM	varchar(50)		
	)
	go
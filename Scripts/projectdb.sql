use master
go

if db_id ('PROJECTDB') is not null
drop database PROJECTDB;
go

create database ProjectDB
collate SQL_Latin1_General_CP1_CI_AS 
go

alter database ProjectDB set recovery simple 
go
alter database ProjectDB set auto_shrink off
go
alter database ProjectDB set auto_create_statistics off
go
alter database ProjectDB set auto_update_statistics off
go

use PROJECTDB
go

if schema_id ('STAGING') is not null
drop schema STAGING;
go

CREATE SCHEMA STAGING AUTHORIZATION [dbo]; 
go

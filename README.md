# Dashboard
Dashboard is an UI based application which shows client performance

Scripts folder includes the scripts to create the database, staging schema .
Database name- PROJECTDB.

Inside Scripts folder , Staging folder includes the scripts to create the staging tables.
All staging table are created in the schema -STAGING 

load_staging.sql can be used to load the staging tables from the csv files.
Expected delimiter in csv files - (,)

example from load_staging.sql:

TRUNCATE TABLE STAGING.ACCT_STG
GO 

BULK INSERT STAGING.SCORES_STG FROM '<Path>\acct_stg.csv'
WITH (
    CHECK_CONSTRAINTS,
    FIELDTERMINATOR=',',
    ROWTERMINATOR='\n',
    KEEPIDENTITY,
    TABLOCK
)
GO
  
This code truncates the ACCT_STG table and then loads the data from the flat file into the staging table.
Once the files are available, please update the path in the above command.
Please make sure that the structure of files is exactly same as the staging tables, otherwise the staging loads would fail. 



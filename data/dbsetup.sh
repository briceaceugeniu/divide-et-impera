#!/usr/bin/env bash

DBUSER=root
DBPASS=my-secret-pw
DBURL=jdbc:mysql://127.0.0.1:3306/?allowPublicKeyRetrieval=true
DBSCHEMA=divetimp

flyway \
    -user=$DBUSER \
    -password=$DBPASS \
    -url=$DBURL \
    -schemas=$DBSCHEMA \
    -defaultSchema=$DBSCHEMA \
    -workingDirectory=`pwd` \
    -jarDirs=`pwd` \
    migrate


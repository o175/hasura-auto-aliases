# Motivation
By convention tables in database are named in snake_case but fields in graphql in camelCase.
Hasura generates graphql endpoint in snake case imposing a burden of manual alias creation on you.

This script will create aliases in camel case for every column

It won't overwrite existing aliases

# Usage
1.  track table
2.  create permissions for columns you need
3.  export metadatata to metadata.json
4.  in terminal `npx hasura-auto-aliases metadata.json > metadata_new.json`
5.  load generated config file metadata_new.json in hasura admin console and check

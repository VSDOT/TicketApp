#!/bin/bash

########################################################################
##### IT'S GET BRANCH NAME AND JIRA TOKEN FROM GIT COMMIT MESSAGE ######
########################################################################

# Get the current branch name
current_branch=$(git symbolic-ref --short HEAD)

# Extract the first word from the branch name
first_word=$(echo "$current_branch" | awk '{print $1}')

# Get the commit message of the current commit
commit_message=$(git log -1 --pretty=format:%s)

second_word=$(echo "$commit_message" | awk '{print $2}')

# Check if the first word of the branch name is present in the current commit message
if [[ ! $commit_message =~ $first_word ]]; then
  echo "ERROR: Commit message must include the first word of the branch name ($first_word)."
  exit 1
fi

########################################################################
########## JIRA ISSUE TOKEN VALIDATION USING JIRA REST API #############
########################################################################

JIRA_API_TOKEN="YXJ1bmFraWxzZWx2YUBnbWFpbC5jb206QVRBVFQzeEZmR0YwRk92cExLVy1PY2QyU2RNNWdyek1UeTJZejNfTC1YTUZVdHpjTFYzYngwT1NpdzdUWlJ0WVVmbHNyTU1jV2E5TGZjbVJHYlk2NlgxaThvZjRSUDF3cWxJWlVKTVRBanVReFJvVW42a19xRmhEd05UTU5zRG84WFVpM1ZBOEVEeHFNcjh6a3lVWG9BSnR3OEpNUWR0TmlqdkZTR3d1a2FYNkdXS0sxeHhkaS0wPTNGODkxMUE4"

# Replace YOUR_JIRA_URL with the base URL of your Jira instance
JIRA_URL="https://cloudgarage-perambalur.atlassian.net"

# Replace YOUR_ISSUE_ID with the specific issue ID you want to check
ISSUE_ID=$second_word

# Construct the Authorization header with Base64 encoding of useremail and API token
AUTH_HEADER="Authorization: Basic $JIRA_API_TOKEN"

# Make the API request to Jira and capture the response headers
RESPONSE_HEADERS=$(curl -D- \
   -X GET \
   -H "$AUTH_HEADER" \
   -H "Content-Type: application/json" \
   "$JIRA_URL/rest/api/2/issue/$ISSUE_ID" 2>&1)

# Check if the response headers contain the HTTP status code 200 (OK)
if echo "$RESPONSE_HEADERS" | grep -q "HTTP/2 200"; then
    echo "Issue $ISSUE_ID exists in Jira."
    # Add logic for success here
else
    echo "ERROR: Issue $ISSUE_ID not found in Jira."
    exit 1
    # Add logic for error handling here
fi

# If everything is fine, exit without an error
exit 0

###############################################
##### EXPLAIN VARIABLES AND IT'S VALUES #######
###############################################
#
# current_branch    (GET THE CURRENT BRANCH IN LOCAL)
# firsr_word        (GET THE FIRST WORD OF THE BRANCH OUTPUT USING AWK)
# commit_message    (GET THE LAST COMMIT MESSAGE)
# second_word       (FILTER AND GET THE COMMIT MESSAGE SECOND WORD)
# JIRA_API_TOKEN    (THAT TOKEN HAVE ENCRIPTED"base64" JIRA USER EMAIL AND JIRA TOKEN {ENCRYPT COMMAND echo "JIRA_USER_EMAIL:JIRA_TOKEN"})
# CREATE JIRA TOKEN USING THIS LINK (https://id.atlassian.com/manage-profile/security/api-tokens)
# JIRA_URL          (SET THE ORGANIZATION URL FOR JIRA REST API)
# ISSUE_ID          (SET THE ISSUE ID FROM THE USER ENTERD COMMIT MESSAGE)
# AUTH_HEADER       (HEADDER OF THE REST API WITH JIRA TOKEN FOR AUTHORIZATION TO JIRA)
# RESPONSE_HEADERS  (MAKE THE API REQUEST TO JIRA AND CAPTURE THE RESPONSE HEADERS)
###################################################################################

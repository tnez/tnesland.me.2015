from github import Github
import json
import netrc
import sys

# authenticate with Github
username, _, password = netrc.netrc().authenticators('api.github.com')
gh = Github(username, password)

# get my github user object
ghUser = gh.get_user()

# get all commits for each of our repos and add them to our collection
# if we are the commiter
collection = []
for ghRepo in ghUser.get_repos():
    print "Getting commits from", ghRepo.name
    for commit in ghRepo.get_commits():
        if commit.author and commit.author.id == ghUser.id:
            collection.append({
                "repo": ghRepo.name,
                "date": commit.last_modified
            })

# write our collection of commits as JSON to specified file
oFilepath = sys.argv[1]
with open(oFilepath, 'w') as oFileObj:
    json.dump({"commits": collection}, oFileObj)

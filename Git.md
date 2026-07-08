# Git
Git is a version controlling tool. Its an open source tool

1. Keep the history of Changes that are done on the code base
2. Keep the snapshot of the code change
--0--0---0

For Git commands you need to install Git on your local machine

## Repositories
1. Remote Repository: Folder present on the Server (Github)
2. Local Repository : Folder Preset on your local machine but has a connection the Remote Repository

## Core Concepts
Working Directory : Local Repository(Computer Disk) where your code resides. It is not connect to Server
Staging Area: Place Holder where you would store your changes temporary. 
Remote Repository: Folder present on the Server (Github)
Local Repository : Folder Preset on your local machine but has a connection the Remote 


## Branching
Developer or Automation tester would be using the Branches for making changes to the code 
1. Local Branch : All the Branches that are present on you local repository 
2. Remote Branch : All branches on the Server are called as remote branch

## Commands
git branch : This would list all the local repositories

## Create new branch
Git branch <Branch name> : It create a new branch . But you are still on the previous branch
git checkout <Branch name> : It switching to the new branch
git Checkout -b <branch Name> : Create a new branch and would switch to the branch
git switch <branch name>
git delete -d <branch name>


## Push The code
1. Commit : You push our changes to the local branch
2. Push: It will push the code from your local branch to the Remote Branch.
main ----> origin/main
Staging Area --- Commit --- Push

## Pulling the Latest Code
Git Pull : This command pull the latest code from the remote repository

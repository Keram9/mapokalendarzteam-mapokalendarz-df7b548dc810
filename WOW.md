# Way Of Work
1. Create branches using gitflow usign naming prefixes :
- feature/ eg. feature/init
- bugfix/ eg bugfix/fixing-something
- hotfix/ eg hotfix/quick-fix-for-patch
- release/ eg release/0.0.0 - numbering mayor.minor.fix
2. Pull Request Flow (PR Flow) :
- feature/* -> develop
- bugfix/* -> develop
- hotfix/* -> main
- release/* -> main
- develop -> main
3. Commits:
- messages prefixed by unique name of branch eg. for branch feture/init message will be "[init] Initial setup of repo"
4. Build:
- for production from main
- for test from develop

Terraform config:

1. export AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY
2. terraform init
3. terraform fmt
4. terraform validate
5. terraform plan
6. terraform apply -> yes

Docker commands:

1. docker pull kozemzak/movie-search:${TAG_NAME}
2. docker run -it --rm -p 3001:3000 kozemzak/movie-search:${TAG_NAME}

CURRENTLY NOT WORKING ON NODE V 15+. 14.6 lts works

Todo:

1. DONE - Filter movie list from api to avoid duplicates
2. Finish Details API integration
3. Need to add REACT_APP_SENTRY_DSN to dockerfile after Sentry integration
4. Add REACT_APP_SENTRY_DSN to config.yml (in docker build command) after Sentry integration

ISSUES:

1. Pagination is causing an issue with React Router
   The above error occurred in the <Router.Consumer> component:

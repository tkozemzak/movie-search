Terraform config:

1. export AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY
2. terraform init
3. terraform fmt
4. terraform validate
5. terraform plan
6. terraform apply -> yes

CURRENTLY NOT WORKING ON NODE V 15+. 14.6 lts works

Todo:

1. Filter movie list from api to avoid duplicates
2. Allow toggle of auto search
   A. Add Search button
3. Finish Details API integration
4. Allow search from Details page
5. Need to add REACT_APP_SENTRY_DSN to dockerfile after Sentry integration
6. Add REACT_APP_SENTRY_DSN to config.yml (in docker build command) after Sentry integration

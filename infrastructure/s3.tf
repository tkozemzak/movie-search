################
# S3 RESOURCES
################

resource "aws_s3_bucket" "movie_search_s3_bucket" {
    bucket = "${local.prefix}-app"
    acl = "public-read"
    force_destroy = true

    website {
        index_document = "index.html"
        error_document = "error.html"
    }

    versioning {
        enabled = true
    }

    tags = local.common_tags
}
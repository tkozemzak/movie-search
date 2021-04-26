#####################
# Cloudfront Resources
#####################

resource "aws_cloudfront_distribution" "s3_distribution" {
    origin {
        custom_origin_config {
          http_port = 80
          https_port = 443
          origin_protocol_policy = "https-only"
          origin_ssl_protocols = ["TLSv1", "TLSv1.1", "TLSv1.2"]
        }
        domain_name = aws_s3_bucket.movie_search_s3_bucket.bucket_regional_domain_name
        origin_id = "default-origin"
    }
    retain_on_delete = true
    price_class = "PriceClass_All"
    enabled = true
    is_ipv6_enabled = true
    default_route_object = "index.html"

    default_cache_behavior {
        
    }
}
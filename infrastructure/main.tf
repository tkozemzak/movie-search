provider "aws" {
    region = "us-west-1"
}

terraform {
    backend "s3" {
        bucket = "react-movie-search-tf-state"
        key = "react-movie-search.tfstate"
        region = "us-west-1"
        encrypt = true
    }
}

locals {
    prefix = "${var.prefix}-${terraform.workspace}"
    common_tags = {
        Environment = terraform.workspace
        Project = var.project
        ManagedBy = "Terraform"
        Owner = "Tim Kozemzak"
    }
}
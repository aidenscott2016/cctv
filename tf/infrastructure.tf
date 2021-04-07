terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }
}

provider "aws" {
  profile = "default"
  region  = "eu-west-2"
}

resource "aws_s3_bucket" "cctv-bucket" {
  bucket = "triple-sod"
  acl    = "private"

  tags = { Name = "cctv bucket" }

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        kms_master_key_id = aws_kms_key.cctv-bucket-key.arn
        sse_algorithm     = "aws:kms"
      }
    }
  }
}

resource "aws_kms_key" "cctv-bucket-key" {
}


resource "aws_lambda_function" "filter-black-lambda" {

}

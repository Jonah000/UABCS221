import boto3
import os

def lambda_handler(event, context):

    s3_client = boto3.client('s3')

    source_bucket = event['Records'][0]['s3']['bucket']['name']
    source_key = event['Records'][0]['s3']['object']['key']

    destination_bucket = source_bucket
    destination_key = source_key.replace('source/', 'destination/')

    response = s3_client.get_object(Bucket=source_bucket, Key=source_key)
    file_content = response['Body'].read().decode('utf-8')

    upper_content = file_content.upper()
   
    s3_client.put_object(Bucket=destination_bucket, Key=destination_key, Body=upper_content)
    
    return {
        'statusCode': 200,
        'body': f"File processed and saved to {destination_bucket}/{destination_key}"
    }
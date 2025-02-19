#!/bin/bash

#Parse arguments
while [[ $# -gt 0 ]]
do
key="$1"

case $key in
     -input)
     inputFilePath="$2"
      shift # past argument
      shift # past value
      ;;
      -output)
      outputFilePath="$2"
      shift # past argument
      shift # past value
      ;;
      -instance)
      shift # past argument
      ;;
esac
done

# Check arguments
if [ -z "$inputFilePath" ]; then
    echo "Input file path is required"
    exit 1
fi

if [ -z "$outputFilePath" ]; then
    echo "Output file path is required"
    exit 1
fi

# Create output directory
mkdir -p $outputDirectoryPath

# Run command
pnpm dlx @openapitools/openapi-generator-cli generate \
    -i "$inputFilePath" \
    -o "$outputDirectoryPath" \
    -g typescript-fetch \
    --skip-validate-spec \
    --additional-properties=apiInstance="$instance",basePath="$basePath"
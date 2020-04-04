CWD=$(pwd)

docker run \
    --rm \
    -v $CWD/output:/app/pdf/parse/output \
    --name PDF \
    pdf:1.0
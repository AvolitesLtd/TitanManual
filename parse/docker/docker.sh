# build all docks
docker run \
    --rm \
    -v `pwd`/docs:/app/docs \
    -v `pwd`/parse:/app/parse \
    -v `pwd`/website:/app/website \
    --name PDF \
    avo:pdf

# run as shell

docker run \
    --rm \
    -it \
    -v `pwd`/docs:/app/docs \
    -v `pwd`/parse:/app/parse \
    -v `pwd`/website:/app/website \
    --name PDF \
    avo:pdf sh
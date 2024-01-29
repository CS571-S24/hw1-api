build
```bash
docker build . -t ctnelson1997/cs571-s24-hw1-api
docker push ctnelson1997/cs571-s24-hw1-api
```

run 
```bash
docker pull ctnelson1997/cs571-s24-hw1-api
docker run --name=cs571_s24_hw1_api -d --restart=always -p 58101:58101 -v /cs571/s24/hw1:/cs571 ctnelson1997/cs571-s24-hw1-api
```

run fa
```bash
docker pull ctnelson1997/cs571-s24-hw1-api
docker run --name=cs571_fa_s24_hw1_api -d --restart=always -p 59101:58101 -v /cs571_fa/s24/hw1:/cs571 ctnelson1997/cs571-s24-hw1-api
```
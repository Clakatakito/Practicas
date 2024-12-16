FROM ubuntu

RUN apt update && apt install -y apache2
RUN mkdir /script
WORKDIR /script
ENV data3=/data3
RUN mkdir $data3
RUN touch $data3/otroarchillomas.txt
ADD crear_dir.sh .
RUN chmod +x /script/crear_dir.sh
CMD /script/crear_dir.sh
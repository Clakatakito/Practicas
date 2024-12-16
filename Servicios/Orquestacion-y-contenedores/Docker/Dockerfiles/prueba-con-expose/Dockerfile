FROM ubuntu

##EXPOSE##
RUN apt update && apt install -y apache2
EXPOSE 80
RUN mkdir /carpeta
WORKDIR /carpeta
ADD entrypoint.sh /carpeta/
CMD /carpeta/entrypoint.sh
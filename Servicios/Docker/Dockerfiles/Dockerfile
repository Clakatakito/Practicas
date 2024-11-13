
FROM ubuntu
RUN apt update && apt install -y python3
#CMD ["echo","Bienvenido"]
#CMD /bin/bash, ["/bin/bash"], forma correcta

##WORKDIR##

RUN mkdir /DATOS
WORKDIR /DATOS
RUN touch f1.txt
RUN mkdir /DATOS2
WORKDIR /DATOS2
RUN touch f2.txt

##COPY##

COPY index.html .
#Copiamos index.html desde el directorio donde estamos
#El index.html se copiara al ULTIMO WORKDIR que hayamos configurado, en nuestro caso /DATOS2, si quisieramos que fuera a otro tendriamos que poner lo de abajo
COPY app.log /DATOS/
#aqui hay que especificar porque sino lo enviara a /DATOS2 ya que es el ULTIMO WORKDIR creado, especificamos y ya estaria

##ADD##

ADD docs docs
#añadira la carpeta docs y la llamara docs
ADD f*.txt /DATOS/
ADD archivo.tar .
#Una diferencia con el COPY es que el tar admite ficheros comprimidos de tipo "tar" y los desempaqueta, en este caso lo hara en /DATOS2

#Con ADD también puedes descargar cosas de internet
#ADD htps://url/de/internet /DATOS2
#Lo que descargues tiene que ser .tar

ENTRYPOINT ["/bin/bash"]
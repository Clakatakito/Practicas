
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

##ENV##

ENV data=/data data2=/data2
#ENV data3=/data3

#Si al principio cuando crees el contenedor pones "docker run -it --rm imagen -e data=/ejemplo imagen" te dejara, sera valido pero...
#Cuando entres al contenedor y pongas env
#data=/ejemplo
#Pero no se te creara ningun directorio llamado "ejemplo", es mas, si se creara igualmete el directorio /data
#root@d45991cc3b7e:/# ls
#DATOS  DATOS2  bin  boot  data  data2  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var


ENV TEXTO="HOLA"
#Si al principio cuando crees el contenedor pone "docker run -it --rm imagen -e TEXTO="OTRO TEXTO" se cambiara por el que has puesto
#tiene que se pegado el "=", no piede ser data = /data, data=/data
RUN mkdir $data && mkdir $data2
RUN echo "Hola a todos" > $data/otroarchillo.txt
#ADD crear_dir.sh .
#RUN chmod +x /DATOS2/crear_dir.sh


##SCRIPTS##

#demostracion con scripts en /prueba-con-scripts

##ARG##

#El comando ARG en un Dockerfile se utiliza para definir variables de construcción (build-time variables).
#Estas variables solo están disponibles mientras se construye la imagen y no persisten en el contenedor resultante.
#Es decir, se usan para proporcionar valores dinámicos al construir la imagen, pero no estarán accesibles en tiempo de ejecución.
#*Solo se pueden utilizar cuando creamos el contenedro "docker run -it --rm imagen --build-arg"
#ARG directorio
#RUN mkdir $directorio
#docker build -t imagen --build-arg directorio=/directorio .
#ls
#DATOS  DATOS2  bin  boot  data  data2  dev  directorio  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var

##EXPOSE##

#demostracion en /prueba-con-expose


##VOLUME##

#demostracion en /prueba-con-volume


#ENTRYPOINT [ "${TEXTO}", "/bin/bash" ]
ENTRYPOINT ["/bin/bash", "-c", "echo ${TEXTO} && exec /bin/bash"]
#CMD ["/DATOS2/crear_dir.sh && exec /bin/bash"]
#CMD ["/bin/bash", "-c", "/crear_dir.sh && exec /bin/bash"]
#CMD echo ${TEXTO} && /bin/bash



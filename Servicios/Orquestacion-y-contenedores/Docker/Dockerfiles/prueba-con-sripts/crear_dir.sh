#!/bin/bash

export data3=${data3:-/data3}
# Crear el directorio
mkdir -p $data3

# Crear el archivo dentro del directorio
touch $data3/archivo.txt
ls -l /data3
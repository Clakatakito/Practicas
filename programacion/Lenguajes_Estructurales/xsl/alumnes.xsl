<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <title>IES La Guineueta - Llistat d'alumnes</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          .alumne-bloque { margin-bottom: 50px; clear: both; overflow: hidden; border-bottom: 1px dashed #ccc; padding-bottom: 20px; }
          .nom-gran { font-size: 1.6em; font-weight: bold; display: block; }
          
          /* CAMBIO AQUÍ: Ahora la foto flota a la izquierda */
          .foto-alumne { 
            float: left; 
            width: 100px; 
            height: 120px; 
            border: 1px solid black; 
            object-fit: cover; 
            margin-right: 20px; /* Espacio para que el texto no toque la foto */
          }
          
          table { border-collapse: collapse; width: 100%; max-width: 600px; margin-top: 15px; }
          th { background-color: blue; color: white; border: 1px solid black; padding: 5px; }
          td { border: 1px solid black; padding: 5px; text-align: center; }
          .suspes { background-color: red; }
        </style>
      </head>
      <body>
        <h1>IES La Guineueta - Llistat d'alumnes</h1>
        
        <xsl:for-each select="escola/alumne">
          <xsl:sort select="cognom1"/>
          
          <div class="alumne-bloque">
            <img class="foto-alumne" src="{foto}" alt="Foto de {nom}"/>
            
            <span class="nom-gran">
              <xsl:value-of select="cognom1"/>, <xsl:value-of select="cognom2"/>, <xsl:value-of select="nom"/>
            </span>
            
            <p>
              Adreça: <xsl:value-of select="adreca"/><br/>
              Telèfon: <xsl:value-of select="telefon"/>
            </p>

            <table>
              <tr>
                <th><xsl:value-of select="notes/assignatura[1]/@nom"/></th>
                <th><xsl:value-of select="notes/assignatura[2]/@nom"/></th>
                <th><xsl:value-of select="notes/assignatura[3]/@nom"/></th>
                <th><xsl:value-of select="notes/assignatura[4]/@nom"/></th>
              </tr>
              <tr>
                <td>
                  <xsl:if test="notes/assignatura[1]/@nota &lt; 5">
                    <xsl:attribute name="class">suspes</xsl:attribute>
                  </xsl:if>
                  <xsl:value-of select="notes/assignatura[1]/@nota"/>
                </td>
                <td>
                  <xsl:if test="notes/assignatura[2]/@nota &lt; 5">
                    <xsl:attribute name="class">suspes</xsl:attribute>
                  </xsl:if>
                  <xsl:value-of select="notes/assignatura[2]/@nota"/>
                </td>
                <td>
                  <xsl:if test="notes/assignatura[3]/@nota &lt; 5">
                    <xsl:attribute name="class">suspes</xsl:attribute>
                  </xsl:if>
                  <xsl:value-of select="notes/assignatura[3]/@nota"/>
                </td>
                <td>
                  <xsl:if test="notes/assignatura[4]/@nota &lt; 5">
                    <xsl:attribute name="class">suspes</xsl:attribute>
                  </xsl:if>
                  <xsl:value-of select="notes/assignatura[4]/@nota"/>
                </td>
              </tr>
            </table>
          </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
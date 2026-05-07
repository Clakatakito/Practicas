<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <title>Informació de Vols - Aeroport del Prat</title>
       <!-- <link rel="stylesheet" type="text/css" href="estilos.css"/> Fichero css -->
        <style>
          table { border-collapse: collapse; width: 100%; font-family: Arial, sans-serif; border-collapse: separate; }
          th { background-color: grey; border: 1px solid black; padding: 10px; }
          td { border: 1px solid black; padding: 10px; text-align: center; background-color: black; color: white; }
          .ple { background-color: red; color: white; font-weight: bold; }
          img { width: 30px; }
        </style>
      </head>
      <body>
        <h2>Llistat de Vols de l'Aeroport</h2>
        <table>
          <tr>
            <th>Codi</th>
            <th>Companyia</th>
            <th>Sortida</th>
            <th>Origen</th>
            <th>Desti</th>
            <th>Places</th>
            <th>Escala</th>
          </tr>
          <xsl:for-each select="aeroport/vol">
            <xsl:sort select="sortida"/>
            
            <tr>
              <td><xsl:value-of select="@id"/></td>
              
              <td>
                  <xsl:value-of select="companyia"/>
              </td>
              
              <td><xsl:value-of select="sortida"/></td>
              <td><xsl:value-of select="origen"/></td>
              <td><xsl:value-of select="desti"/></td>
              
              <td>
                <xsl:choose>
                  <xsl:when test="places = 0">
                    <xsl:attribute name="class">ple</xsl:attribute>
                    PLE
                  </xsl:when>
                  <xsl:otherwise> <!--es un else-->
                    <xsl:value-of select="places"/>
                  </xsl:otherwise>
                </xsl:choose>
              </td>
              
              <td>
                <xsl:if test="escala = 'si'">
                  <img src="img/avion.jpg" alt="Icona avió"/>
                </xsl:if>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>